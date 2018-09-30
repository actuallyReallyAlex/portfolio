(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/documentation/src/components/PortfolioItemDescription.mdx":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/react/index.js"),A=o.n(n),a=o("./node_modules/@mdx-js/tag/dist/index.js"),i=o("./node_modules/docz/dist/index.m.js"),p=o("./node_modules/grommet/index.js"),r=o("./src/utilities.js"),s=function(e){return A.a.createElement(p.Box,null,A.a.createElement(p.Legend,{series:Object(r.getArrayofLabels)(e.languages,r.languageProperties)}),A.a.createElement(p.Paragraph,{size:"large",margin:"medium"},e.description))};s.defaultProps={description:"Example Description",languages:["HTML","CSS","JavaScript"]};var m=s;function c(e,t){if(null==e)return{};var o,n,A=function(e,t){if(null==e)return{};var o,n,A={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(A[o]=e[o]);return A}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(A[o]=e[o])}return A}s.__docgenInfo={description:"",methods:[],displayName:"PortfolioItemDescription",props:{description:{defaultValue:{value:"'Example Description'",computed:!1},type:{name:"string"},required:!1,description:"A short description of the project."},languages:{defaultValue:{value:"['HTML', 'CSS', 'JavaScript']",computed:!1},type:{name:"array"},required:!1,description:"A colorful legend to show which languages were used on the project."}}};t.default=function(e){var t=e.components,o=c(e,["components"]);return A.a.createElement(a.MDXTag,{name:"wrapper",components:t},A.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"portfolioitemdescription"}},"PortfolioItemDescription"),A.a.createElement(a.MDXTag,{name:"p",components:t},"A description to be rendered inside of a ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<PortfolioItem />"),". Will contain a ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<LanguagesLegend />")," component to display which languages were used on the project."),A.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),A.a.createElement(a.MDXTag,{name:"hr",components:t}),A.a.createElement(m,null),A.a.createElement(a.MDXTag,{name:"hr",components:t}),A.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),A.a.createElement(i.PropsTable,{of:m}),A.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic Usage"),A.a.createElement(i.Playground,{__position:2,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpgABQ1MBKCgAZWxgIhtXgch-hmPtzGNOV2k9OABHIQEnWofQ4EkWCRXgxDKGQ1D0Mw7DAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnJSABYNPYAA2DStPWeCaAAMR9aBEiU_hnEORFHUwdhoKEfgliIahKDgXTEUsutrIIZwICEy52AARkM7T5FVINUH4qYAEE5kk9ho2ADZoHQSN2HkTlJLEbK4xkdhUXEmBuGAY8RLE7F5F3etgHIGwoAK4IADIevGRJ5koZoOvywruAm-UwFCFLmPYAB-PKusjaMSquUblroeQ433WQzE_MxYQ1Y4YDAMIoCmVbSvKutGAytc62TKiCBopDaAYuAMIgLCBnMHcdvu2tOV_EBCOIz4txoCjnteuj3rQz6mN-oCyB0UD9AYVjjpDKVOLws0lTtY6vMoGZLEG-A8flIdSYtMT5jgdoiYdXK71JTzXEyFJMhmPAlgAGRgNIMCKqn2m5yJT3fZmplyqB3BSUJXDSEm4RieAlgvNKBEyVowH51xAigOx5DFnBPXCaAXggeAmeS1LPLghC3pQhGvp-lkpJpkduDKmS6y6Ag-nMWNHobNmsFa-sG0F4WcjgDIbbgOqtZ11w9YNo24Gjb24BweX5yVtI4CWAvFeVmBVYydW4E5U3_rDp7OeVnn8XyKK-BAeX5KZEB2DkhTO9PFhQiIcR12j4Bc5wcp3ew7bG4bSjm-52Y8CjpeI9az8F7MGHnbh13GO-7CZ9O86CFVuwpP9ixZ6R6glMvLAfXJbo3Yf1AQosMui_gK4ADa7QAASlh9T8y0vKewzhnCQPaAAKVcKwVwzg57tAALpmF3qgfetF6IfxPsjb25MGZZVvuwYwRh2BpSqsMB099CEsmGgSboNN1BbAIPUXk6wGEe0Up5YcJD4A4FRHOFIOBbDigAI6hAgF0RY6xKHUJLFAYU00oDsFgHHUctDRiFhsB1TRCs_44guLkBOOQWQTFYUIdhUouF8jrL_Cu9wBGkyEXnTmusJFwGkbI-RWDwQuiwGxE6Z1QgXUdtRA--Dj58LMCDMGkhLaIRrijbQugwIGAgg7ZxKthzVyTllAB6xyEWFQD6aKICwEQO0tHKgqjKzyklIiGgFoYp2wsEoUp64KmniUtA2BdT6wNOFEpFp-gLQACZOlFWGWU9gfSqmIOQagpi38RkITGfKF04RMhQHabM7pdYFlLIGQAYg2RYUZTT2i7LRPEaZRz5m9MqUpfUnNtgnBGF_YZ1ytm3K-jEOIUBnk9LDmc-U-ptQAA0rkqO2e0EYnNUAFDBSc15_T5TwOcHCv5CLbmUG2Oiiwpy3nYucLqAAcvCm54zyCtMtB09YxzSWYqqTjThAZ8V0uaQyyZMyWUvIheS9o-pnDsAAGq2CVho0SoQWCUFpQCpS9z9mHKFeC6OkL2hUtLEBZVjTVUwD2Y8wVdZWXSXZUpNKJxAieWGBEOAwwZiGsRUC2I8QSVWpFVi9otrKD2oaAkPIDyIgCDdbc5FAhUXzm9WSv18CACKjIBCJEjUpIl8brXyjZiIURswM18sZRqi1ZhMHJUoUUKhlhXDbEpmgEIVUJx7GaHkymlRpwTmDnYVwJYdbwGdPpBcXj06tsHAUkUSccDVvYAAAV0pkOUwBta61Nu2uwq6x3MNEQUEuMJJT4iXChV0gQChNppqvIg5720zvMFQhdzdl1bsSOu4xFcq5Tspi-8d3tCmUwiM2zmhiJhCAxHgO97AH2Bx7dJF9ps0rmFHckZhaB4JGmFCwzRQs6Dx0TsI6tjjpqzV-uOAgL7hqZyXNnDdpd335NJv-2uPqf4toTvCOAP6pIAIresDdOB4ICEvIe6M7bRJiOugs2AUwqADsCtQYdBtC4fsnTXXUHg7FTCku2z9aTIAYGjIG9QkmJ5dqDjGvYGmcBLMkpNMTaICjrmKkE6O0mjHKbSOpzTZDTPyyNutYUXR5MYAKEp8uDG1ZJy8xw6zlT8X_MaQ0KMWAAtyaHaF-jldVNRY0zFm5TmXP1nY0nF9OAZh5DwKJzL0WpSfi6QdAO3aLPFfgC-wJyU_LoAiYBI6Ipr4sfc-FrLjGv0l3WKnXWlHDbUfayDIK2wK5AWoKjTJGMILkP4Es_gVx-BAmJFUbwGQLT_jfj5dY_BWAZHyNQbb7B-DKRwA95SZ26z8F4dhW7_AaH5AAjCF-v3MDkkoIkAseRz0E0tHtkEh2BAvYsPwKIaBPsqGS0BOHd2QCA9wwiJOt2Fn8Ah8jgAejFUyOAACsOApno_hyACWRApbE5ijgGKzPnsgHxQTrUVpIhM7J5T6nIAWVYMSdD3AuhIDiM0MtjJ6NwIgBkiAd65Isjbd22aWgFoIcWlmDMfg8gFDyHkEAA",__code:"<PortfolioItemDescription />",__scope:{props:o,PortfolioItemDescription:m}},A.a.createElement(m,null)))}}}]);