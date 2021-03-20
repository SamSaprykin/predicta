jQuery(function() {
	initBarChart();
});

// bar chart init
function initBarChart() {
	var win = jQuery(window);
	var activeClass = 'active';
	var isLowScreen = false;
	var indent = 0;

	var margin = {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};

	ResponsiveHelper.addRange({
		'..767': {
			on: function() {
				indent = -10;
				isLowScreen = true;
			}
		},
		'768..1199': {
			on: function() {
				indent = -4;
				isLowScreen = true;
			}
		},
		'1200..': {
			on: function() {
				indent = 6;
				isLowScreen = false;
			}
		}
	});

	jQuery('.bar-chart').each(function() {
		var holder = jQuery(this);
		var chartHolder = holder.find('.graph-holder');
		var global = holder.find('.total-line .value .text');
		var width = chartHolder.outerWidth() - margin.left - margin.right;
		var height = chartHolder.outerHeight() - margin.top - margin.bottom;
		var filtersPeriod = holder.find('[data-filter-period]');
		var filterPeriodParents = filtersPeriod.parent();
		var filtersCategory = holder.find('[data-filter-category]');
		var filterParents = filtersCategory.parent();
		var svg, wrapper, length, xScale, yScale, xAxis, yAxis, yLabels, barsHolder, bars, labels;
		var sourceNames = [];
		var sourceCount = [];
		var loadData = {};
		var allData = {};
		var casesPerent = {};
		var deathPercent = {};
		var filter = 'cases';
		var period = 'total';
		var coeff = 2.11;

		d3.csv(holder.data('url'))
			.then(function(data) {
				loadData = data;

				afterLoad();
			})
			.catch(function(error) {});

		function afterLoad() {
			formatData();
			drawChart();
			attachEvents();
		}

		function formatData() {
			allData = {};

			loadData.forEach(function(d) {
				var propName = d.period;

				if (!allData[propName]) {
					allData[propName] = {};
					casesPerent[propName] = {};
					deathPercent[propName] = {};
				}

				allData[propName][d['area_group']] = parseFloat(d[filter].replace(/,/g, ''));
				casesPerent[propName][d['area_group']] = d['cases_percents'].replace('.', ',');
				deathPercent[propName][d['area_group']] = d['deaths_percents'].replace('.', ',');
			});
		}

		function attachEvents() {
			filtersPeriod.on('click', function(e) {
				e.preventDefault();
				var item = jQuery(this);
				var parent = item.parent();

				period = item.data('filter-period');

				filterPeriodParents.removeClass(activeClass);
				parent.addClass(activeClass);

				reDrawChart();
			});

			filtersCategory.on('click', function(e) {
				e.preventDefault();
				var item = jQuery(this);
				var parent = item.parent();

				filter = item.data('filter-category');

				filterParents.removeClass(activeClass);
				parent.addClass(activeClass);

				reDrawChart();
			});

			resizeHandler();
			win.on('resize orientationchange', resizeHandler);
		}

		function reDrawChart() {
			formatData();
			chartHolder.empty();
			drawChart();
		}

		function drawChart() {
			length = 0;
			sourceNames = [];
			sourceCount = [];

			if (isLowScreen) {
				coeff = 2.4;
			} else {
				coeff = 2.11;
			}

			if (filter === 'cases' || filter === 'deaths_sum') {
				xScale = d3.scaleLinear()
					.rangeRound([0, width - margin.left - margin.right - (223 + (chartHolder.outerWidth() / coeff))]);
			} else {
				xScale = d3.scaleLinear()
					.rangeRound([0, width - margin.left - margin.right - (100 + (chartHolder.outerWidth() / coeff))]);
			}

			yScale = d3.scaleBand()
				.rangeRound([0, height]);

			for (var key in allData[period]) {
				if (key !== 'Global') {
					if (allData[period].hasOwnProperty(key)) {
						sourceNames.push(key);
						sourceCount.push(allData[period][key]);
					}

					length++;
				} else {
					global.text(formatNumber(allData[period][key]));
				}
			}

			xScale.domain([0, d3.max(sourceCount, function(d) {
				return d;
			})]);

			yScale.domain(sourceNames);

			svg = d3.select(chartHolder[0])
				.append('svg')
				.attr('height', height)
				.attr('width', width);

			wrapper = svg.append('g')
				.attr('transform', 'translate(' + (chartHolder.outerWidth() / coeff) + ',' + margin.top + ')');

			xAxis = wrapper.append('g')
				.attr('transform', 'translate(0, ' + height + ')')
				.attr('class', 'x-axis')
				.call(d3.axisBottom(xScale).tickSize(0).tickPadding(0));

			yAxis = wrapper.append('g')
				.attr('class', 'y-axis')
				.call(d3.axisLeft(yScale).tickSize(0).tickPadding(22));

			yLabels = yAxis.selectAll('.tick text')
				.call(wrap, (chartHolder.outerWidth() / coeff) - 22)
				.attr('y', function(d) {
					return (((height / length) - (this.getBoundingClientRect().height)) / 2) + indent;
				});

			barsHolder = wrapper.selectAll('.bar')
				.data(sourceNames)
				.enter()
				.append('g');

			bars = barsHolder.append('rect')
				.attr('class', 'bar')
				.attr('fill', function(d, i) {
					if (i % 2 === 1) {
						return '#222B3E';
					} else {
						return '#A7A9AC';
					}
				})
				.attr('x', function(d) {
					return 0;
				})
				.attr('y', function(d) {
					return yScale(d);
				})
				.attr('width', function(d) {
					return xScale(allData[period][d]);
				})
				.attr('height', function(d) {
					return height / length;
				});

			labels = barsHolder.append('text')
				.text(function(d) {
					if (filter === 'cases') {
						return formatNumber(allData[period][d]) + ' (' + casesPerent[period][d] + ')';
					} else if (filter === 'deaths_sum') {
						return formatNumber(allData[period][d]) + ' (' + deathPercent[period][d] + ')';
					} else {
						return formatNumber(allData[period][d]);
					}
				})
				.attr('fill', function(d, i) {
					if (i % 2 === 1) {
						return '#222B3E';
					} else {
						return '#A7A9AC';
					}
				})
				.attr('x', function(d) {
					return xScale(allData[period][d]) + 12;
				})
				.attr('y', function(d) {
					return yScale(d) + (height / length) * 0.65;
				})
				.attr('class', 'label')
				.attr('text-anchor', 'left');
		}

		function resizeHandler() {
			width = chartHolder.outerWidth() - margin.left - margin.right;

			if (isLowScreen) {
				coeff = 2.4;
			} else {
				coeff = 2.11;
			}

			if (filter === 'cases' || filter === 'deaths_sum') {
				xScale.rangeRound([0, width - margin.left - margin.right - (223 + (chartHolder.outerWidth() / coeff))]);
			} else {
				xScale.rangeRound([0, width - margin.left - margin.right - (100 + (chartHolder.outerWidth() / coeff))]);
			}

			svg.attr('width', width + margin.left + margin.right);
			wrapper.attr('transform', 'translate(' + (chartHolder.outerWidth() / coeff) + ',' + margin.top + ')');

			yLabels.call(wrap, (chartHolder.outerWidth() / coeff) - 22)
				.attr('y', function(d) {
					return (((height / length) - (this.getBoundingClientRect().height)) / 2) + indent;
				});

			bars.attr('width', function(d) {
				return xScale(allData[period][d]);
			});

			labels.attr('x', function(d) {
				return xScale(allData[period][d]) + 12;
			});
		}
	});

	function wrap(text, width) {
		text.each(function() {
			var item = jQuery(this);

			if (item.data('text')) {
				item.html(item.data('text'));
			} else {
				item.data('text', item.text());
			}

			var text = d3.select(this),
				words = text.text().split(/\s+/).reverse(),
				word,
				line = [],
				lineNumber = 0,
				lineHeight = 1.1,
				x = text.attr('x'),
				y = text.attr('y'),
				dy = 0;

			var tspan = text.text(null)
				.append('tspan')
				.attr('x', x)
				.attr('y', y)
				.attr('dy', dy + 'em');

			while (word = words.pop()) {
				line.push(word);
				tspan.text(line.join(' '));

				if (tspan.node().getComputedTextLength() > width) {
					line.pop();
					tspan.text(line.join(' '));
					line = [word];

					tspan = text.append('tspan')
						.attr('x', x)
						.attr('y', y)
						.attr('dy', ++lineNumber * lineHeight + dy + 'em')
						.text(word);
				}
			}
		});
	}

	function formatNumber(number) {
		return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}
}

/*
* Responsive Layout helper
*/
ResponsiveHelper = (function($) {
	// init variables
	var handlers = [];
	var prevWinWidth;
	var win = $(window);
	var nativeMatchMedia = false;

	// detect match media support
	if (window.matchMedia) {
		if (window.Window && window.matchMedia === Window.prototype.matchMedia) {
			nativeMatchMedia = true;
		} else if (window.matchMedia.toString().indexOf('native') > -1) {
			nativeMatchMedia = true;
		}
	}

	// prepare resize handler
	function resizeHandler() {
		var winWidth = win.width();

		if (winWidth !== prevWinWidth) {
			prevWinWidth = winWidth;

			// loop through range groups
			$.each(handlers, function(index, rangeObject) {
				// disable current active area if needed
				$.each(rangeObject.data, function(property, item) {
					if (item.currentActive && !matchRange(item.range[0], item.range[1])) {
						item.currentActive = false;

						if (typeof item.disableCallback === 'function') {
							item.disableCallback();
						}
					}
				});

				// enable areas that match current width
				$.each(rangeObject.data, function(property, item) {
					if (!item.currentActive && matchRange(item.range[0], item.range[1])) {
						// make callback
						item.currentActive = true;

						if (typeof item.enableCallback === 'function') {
							item.enableCallback();
						}
					}
				});
			});
		}
	}

	win.bind('load resize orientationchange', resizeHandler);

	// test range
	function matchRange(r1, r2) {
		var mediaQueryString = '';

		if (r1 > 0) {
			mediaQueryString += '(min-width: ' + r1 + 'px)';
		}

		if (r2 < Infinity) {
			mediaQueryString += (mediaQueryString ? ' and ' : '') + '(max-width: ' + r2 + 'px)';
		}

		return matchQuery(mediaQueryString, r1, r2);
	}

	// media query function
	function matchQuery(query, r1, r2) {
		if (window.matchMedia && nativeMatchMedia) {
			return matchMedia(query).matches;
		} else if (window.styleMedia) {
			return styleMedia.matchMedium(query);
		} else if (window.media) {
			return media.matchMedium(query);
		} else {
			return prevWinWidth >= r1 && prevWinWidth <= r2;
		}
	}

	// range parser
	function parseRange(rangeStr) {
		var rangeData = rangeStr.split('..');
		var x1 = parseInt(rangeData[0], 10) || -Infinity;
		var x2 = parseInt(rangeData[1], 10) || Infinity;

		return [x1, x2].sort(function(a, b) {
			return a - b;
		});
	}

	// export public functions
	return {
		addRange: function(ranges) {
			// parse data and add items to collection
			var result = {
				data: {}
			};

			$.each(ranges, function(property, data) {
				result.data[property] = {
					range: parseRange(property),
					enableCallback: data.on,
					disableCallback: data.off
				};
			});

			handlers.push(result);

			// call resizeHandler to recalculate all events
			prevWinWidth = null;
			resizeHandler();
		}
	};
}(jQuery));