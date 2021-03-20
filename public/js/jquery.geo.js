jQuery(function() {
	initStackedChart();
});

// stacked chart init
function initStackedChart() {
	var win = jQuery(window);
	var legendLineHeight = 24;

	var margin = {
		top: 7,
		right: 260,
		bottom: 44,
		left: 43
	};

	jQuery('.stacked-chart').each(function() {
		var chartHolder = jQuery(this);
		var width = chartHolder.outerWidth() - margin.left - margin.right;
		var height = chartHolder.outerHeight() - margin.top - margin.bottom;
		var svg, wrapper, xScale, yScale, xAxis, yAxis, area, layer, path, legendTopPosition, legendHolder, legend, rect;
		var parseDate = d3.timeParse('%d/%m/%Y');
		var colors = chartHolder.data('colors').split(',');
		var keys = chartHolder.data('keys').split(', ');
		var loadData = {};
		var allData = {};
		var dataArr = [];

		d3.csv(chartHolder.data('url'))
			.then(function(data) {
				loadData = data;

				afterLoad();
			})
			.catch(function(error) {});

		function afterLoad() {
			formatData();
			drawChart();
			resizeHandler();
			win.on('load resize orientationchange', resizeHandler);
		}

		function formatData() {
			loadData.forEach(function(d) {
				var propName = d.dateRep;
				var key = d.Region_Cluster;

				if (!allData[propName]) {
					allData[propName] = {
						date: parseDate(propName)
					};
				}

				allData[propName][d.Region_Cluster] = parseFloat(d.deaths_pct_MA7) / 100;
			});

			for (key in allData) {
				for (var i = 0; i < keys.length; i++) {
					if (!(keys[i] in allData[key])) {
						allData[key][keys[i]] = 0;
					}
				}

				dataArr.push(allData[key]);
			}

			dataArr.sort(function(a, b) {
				var keyA = new Date(a.date);
				var keyB = new Date(b.date);

				if (keyA < keyB) return -1;
				if (keyA > keyB) return 1;

				return 0;
			});
		}

		function drawChart() {
			svg = d3.select(chartHolder[0])
				.append('svg')
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom);

			xScale = d3.scaleTime()
				.range([0, width]);

			yScale = d3.scaleLinear()
				.range([height, 0]);

			var color = d3.scaleOrdinal()
				.domain(keys)
				.range(colors);

			var stack = d3.stack();

			area = d3.area()
				.x(function(d) {
					return xScale(d.data.date);
				})
				.y0(function(d) {
					return yScale(d[0]);
				})
				.y1(function(d) {
					return yScale(d[1]);
				});

			wrapper = svg.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

			xScale.domain(d3.extent(dataArr, function(d) {
				return d.date;
			}));

			stack.keys(keys.reverse());

			layer = wrapper.selectAll('.layer')
				.data(stack(dataArr))
				.enter()
				.append('g')
				.attr('class', 'layer');

			path = layer.append('path')
				.attr('class', 'area')
				.style('fill', function(d) {
					return color(d.key);
				})
				.attr('d', area);

			xAxis = wrapper.append('g')
				.attr('class', 'axis x-axis')
				.attr('transform', 'translate(0,' + height + ')')
				.call(d3.axisBottom(xScale).ticks(12, d3.timeFormat('%b %Y')).tickSizeInner(17).tickSizeOuter(0).tickPadding(10));

			xAxis.selectAll('text')
				.attr('x', 7)
				.style('text-anchor', 'center');

			yAxis = wrapper.append('g')
				.attr('class', 'axis y-axis')
				.call(d3.axisLeft(yScale).ticks(10, '%').tickSize(0).tickPadding(7));

			legendTopPosition = ((height / 2) - ((legendLineHeight * keys.length) / 2)) + 9;

			legendHolder = wrapper.append('g')
				.attr('transform', 'translate(' + (width + 33) + ',' + legendTopPosition + ')');

			legend = legendHolder.selectAll('.legend')
				.data(stack(dataArr).reverse())
				.enter()
				.append('g')
				.attr('class', 'legend');

			legend.append('rect')
				.attr('x', 0)
				.attr('y', function(d, i) {
					return legendLineHeight * i;
				})
				.attr('width', 10)
				.attr('height', 10)
				.style('fill', function(d, i) {
					return color(d.key);
				});

			legend.append('text')
				.data(color.domain())
				.attr('x', 18)
				.attr('dy', 10)
				.attr('y', function(d, i) {
					return legendLineHeight * i;
				})
				.text(function(d) {
					return d;
				});

			rect = wrapper.append('rect')
				.attr('x', 0)
				.attr('y', -2)
				.attr('fill', '#e8e8e8')
				.attr('height', 3)
				.attr('width', width);
		}

		function resizeHandler() {
			width = chartHolder.outerWidth() - margin.left - margin.right;

			svg.attr('width', width + margin.left + margin.right);
			xScale.range([0, width]);

			area.x(function(d) {
				return xScale(d.data.date);
			});

			wrapper.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

			xScale.domain(d3.extent(dataArr, function(d) {
				return d.date;
			}));

			path.attr('d', area);

			if (win.width() < 900) {
				xAxis.call(d3.axisBottom(xScale).ticks(12, d3.timeFormat('%m.%y')).tickSizeInner(17).tickSizeOuter(0).tickPadding(10));

				xAxis.selectAll('text')
					.attr('x', 0);
			} else {
				xAxis.call(d3.axisBottom(xScale).ticks(12, d3.timeFormat('%b %Y')).tickSizeInner(17).tickSizeOuter(0).tickPadding(10));
			}

			legendHolder.attr('transform', 'translate(' + (width + 33) + ',' + legendTopPosition + ')');
			rect.attr('width', width);
		}
	});
}