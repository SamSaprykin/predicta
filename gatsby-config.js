module.exports = {
  siteMetadata: {
    title: 'Predicta',
    description:'Test',
    author: '',
    
     menuLinks:[
    
       {
        name:'About',
        link:'/about',
        subMenu: [
          {
            name:'Purpose',
            link:'/about/#purpose',
          },
          {
            name:'Insights',
            link:'/about/#insights',
          }
        ,
        {
          name:'Approach',
          link:'/about/#approach',
        },
        {
          name:'Data',
          link:'/about/#data',
        },
        {
          name:'Issues',
          link:'/about/#issues',
        }
        
        ]
     },
     {
      name:'Global Analysis',
      link:'/global-analysis',
      subMenu: [
        {
          name:'Maps',
          link:'/global-analysis/#maps',
        },
        {
          name:'Global Statistics',
          link:'/global-analysis/#global-statistics',
        }
      ,
      {
        name:'Top 20',
        link:'/global-analysis/#toptwenty',
      },
      {
        name:'Country\'s Ranking',
        link:'/global-analysis/#countryranking',
      },
      {
        name:'Geographical Analysis',
        link:'/global-analysis/#geographicalanalysis',
      },
      {
        name:'Demographics',
        link:'/global-analysis/#demographics',
      },
      ]
   },
   {
    name:'In Depth',
    link:'#',
    subMenu: [
      {
        name:'Europe',
        link:'/europe/general-findings',
      },
      {
        name:'Greece',
        link:'/depth-greece',
      },
      {
        name:'Latin America',
        link:'/depth-latin-america',
      }
    ]
 },
   {
    name:'Advanced Statistics',
    link:'#',
    subMenu: [
      {
        name:'Risk Analysis',
        link:'/advanced-statistics/risk-analysis',
      },
      {
        name:'Statistical Tests',
        link:'/advanced-statistics/statistical-tests',
      }
    ,
    {
      name:'Modelling Scenarios',
      link:'/advanced-statistics/modelling-scenarios',
    },
    ]
 },
 {
  name:'Technology',
  link:'/technology',
  
},
{
  name:'Get in Touch',
  link:'/get-in-touch',
  
},
    ]
 },




  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, 
          
        }
      }
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `predicta-theme`,
        short_name: `predicta`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#222b3e`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

