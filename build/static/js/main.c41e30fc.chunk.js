(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,a){e.exports=a.p+"static/media/logo.78679e07.svg"},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(61),i=a.n(s),l=(a(72),a(39)),c=a(3),o=a(4),u=a(6),m=a(5),p=a(7),h=(a(73),a(11)),d=a.n(h),g=a(17),f=a(18);function E(e){return r.a.createElement("div",{className:"stockInfo"},r.a.createElement("div",{className:"mainInfo"},r.a.createElement("div",{className:"imageBox"},r.a.createElement("img",{srcSet:e.profile.image,alt:e.companyName})),r.a.createElement("div",null,r.a.createElement("h2",null,e.companyName," ",r.a.createElement("span",null,"(",e.ticker,")")),r.a.createElement("p",null,r.a.createElement("span",{className:"price"},"Price: "),e.price,e.change<0?r.a.createElement("span",{className:"change negative"},e.change," ",r.a.createElement(g.a,{icon:f.a})):e.change>0?r.a.createElement("span",{className:"change positive"},e.change," ",r.a.createElement(g.a,{icon:f.b})):r.a.createElement("span",{className:"change"},e.change)))),r.a.createElement("div",{className:"descriptionAndList"},r.a.createElement("p",{className:"stockDescription"},e.profile.description),r.a.createElement("ul",{className:"infoList"},r.a.createElement("li",null,r.a.createElement("span",null,"52 Week Range"),r.a.createElement("span",null,e.range)),r.a.createElement("li",null,r.a.createElement("span",null,"Beta"),r.a.createElement("span",null,e.profile.beta)),r.a.createElement("li",null,r.a.createElement("span",null,"Market Cap"),r.a.createElement("span",null,e.mktCap)),r.a.createElement("li",null,r.a.createElement("span",null,"Exchange"),r.a.createElement("span",null,e.profile.exchange)),r.a.createElement("li",null,r.a.createElement("span",null,"Sector"),r.a.createElement("span",null,e.profile.sector)),r.a.createElement("li",null,r.a.createElement("span",null,"Industry"),r.a.createElement("span",null,e.profile.industry)))))}var v=a(62),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t={labels:this.props.labels,datasets:[{labels:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"#fff",borderColor:"#fff",borderCapStyle:"butt",borderWidth:1,borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#fff",pointBackgroundColor:"#fff",pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#fff",pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:10,data:this.props.data}]},a={scales:{xAxes:[{type:"time",time:{unit:this.props.unit},gridLines:{color:"rgba(255, 255, 255, 0.2)",zeroLineColor:"rgba(255, 255, 255, 0.2)"},ticks:{fontColor:"rgba(255, 255, 255, 0.8)"}}],yAxes:[{gridLines:{color:"rgba(255, 255, 255, 0.2)",zeroLineColor:"rgba(255, 255, 255, 0.2)"},ticks:{fontColor:"rgba(255, 255, 255, 0.8)"}}]},legend:{display:!1}};return r.a.createElement("div",{className:"stockChart"},r.a.createElement("h3",null,"Historical Performance"),r.a.createElement("p",null,"Scale: ",r.a.createElement("button",{onClick:function(){e.props.handlerFromParent(22)},className:"day"===this.props.unit?"active":null},"Month"),r.a.createElement("button",{onClick:function(){e.props.handlerFromParent(253)},className:"month"===this.props.unit?"active":null},"Year"),r.a.createElement("button",{onClick:function(){e.props.handlerFromParent(e.props.max)},className:"year"===this.props.unit?"active":null},"Five Year")),r.a.createElement(v.a,{data:t,options:a}))}}]),t}(n.Component),k=a(64),S=a.n(k),y=a(65),N=a.n(y),C=a(66),w=a.n(C),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).getTickers=function(){d.a.get("https://financialmodelingprep.com/api/stock/list/all?datatype=json",{dataResponse:"json"}).then(function(t){var a=(t=t.data).map(function(e){return e.Ticker});e.setState({tickers:t,validTickers:a})})},e.escapeRegexCharacters=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},e.getSuggestions=function(t){var a=e.escapeRegexCharacters(t.trim());if(""===a)return[];var n=new RegExp("\\b"+a,"i");return e.state.tickers.filter(function(t){return n.test(e.getSuggestionValue(t))})},e.getSuggestionValue=function(e){return"".concat(e.Ticker," ").concat(e.companyName)},e.renderSuggestion=function(e,t){var a=t.query,n="".concat(e.Ticker," | ").concat(e.companyName),s=N()(n,a),i=w()(n,s);return r.a.createElement("span",{className:"suggestion-content "},r.a.createElement("span",{className:"suggestion"},i.map(function(e,t){var a=e.highlight?"highlight":null;return r.a.createElement("span",{className:a,key:t},e.text)})))},e.onChange=function(t,a){var n=a.newValue;a.method;e.setState({value:n.toUpperCase()})},e.onSuggestionsFetchRequested=function(t){var a=t.value;e.setState({suggestions:e.getSuggestions(a)})},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.onSuggestionSelected=function(t,a){a.suggestion;var n=a.suggestionValue;a.suggestionIndex,a.sectionIndex,a.method;t.preventDefault();var r=n.substr(0,n.indexOf(" "));e.setState({value:r}),e.props.handlerFromParent(r)},e.onSubmit=function(t){t.preventDefault(),e.state.validTickers.includes(e.state.value)&&e.props.handlerFromParent(e.state.value)},e.state={value:"",suggestions:[],tickers:[],validTickers:[]},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTickers()}},{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.suggestions,s={placeholder:"Ticker: GOOG",value:a,onChange:this.onChange,id:"stockSearch"};return r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("label",{htmlFor:"stockSearch",className:"visuallyHidden"},"Input stock sticker."),r.a.createElement(S.a,{suggestions:n.slice(0,5),onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,onSuggestionSelected:this.onSuggestionSelected,inputProps:s,focusInputOnSuggestionClick:!1}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).loadImages=function(){if(a.props.urlToImage){var e=a.props.urlToImage,t=e;return e.includes("http:")&&(t=t.slice(0,4)+"s"+t.slice(4)),r.a.createElement("div",{className:"previewImage"},r.a.createElement("img",{src:t,alt:a.props.title}))}},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"article"},r.a.createElement("a",{href:this.props.url,target:"_blank"},this.loadImages()),r.a.createElement("p",{className:"articleSource"},this.props.source," ",r.a.createElement("span",{className:"articleDate"},this.props.date)," "),r.a.createElement("a",{href:this.props.url,target:"_blank"},r.a.createElement("h3",null,this.props.title)),r.a.createElement("p",null,this.props.description),r.a.createElement("a",{className:"readMore",href:this.props.url,target:"_blank"},"Read More"))}}]),t}(n.Component),T=a(37),x=a.n(T),D=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="";return this.props.newsFeed.length||(e=r.a.createElement("p",null,"No articles available at this time.")),r.a.createElement("div",{className:"newsFeed"},r.a.createElement("h2",null,"Relevant News"),this.props.newsFeed.map(function(e,t){return r.a.createElement(j,{key:t,title:e.title,url:e.url,urlToImage:e.urlToImage,date:x()(e.publishedAt).format("| MMM D, YYYY"),source:e.source.name,description:e.description})}),e)}}]),t}(n.Component),R=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleData=function(t){e.setState({ticker:t}),e.getProfile(t),e.getPriceAndSeries(t)},e.getProfile=function(t){d()({method:"GET",url:"https://financialmodelingprep.com/api/v3/company/profile/"+t,dataResponse:"json"}).then(function(t){var a=(t=t.data.profile).companyName;a.includes(" Inc")?a=a.substr(0,a.indexOf(" Inc")):a.includes(" Ltd")?a=a.substr(0,a.indexOf(" Ltd")):a.includes(" (The)")&&(a=a.substr(0,a.indexOf(" (The)")));var n=t.mktCap;n>=1e9&&(n=Math.round(n/1e9*100)/100+" B"),e.getNews(a),e.setState({profile:t,companyName:a,mktCap:n})})},e.getPriceAndSeries=function(t){var a=d.a.get("https://financialmodelingprep.com/api/company/real-time-price/"+t,{dataResponse:"json",params:{datatype:"json"}}),n=d.a.get("https://financialmodelingprep.com/api/v3/historical-price-full/"+t,{dataResponse:"json"});Promise.all([a,n]).then(function(t){var a=t[0].data.price,n=t[1].data.historical,r=[],s=[];n.forEach(function(e){r.push(e.close),s.push(e.date)}),e.calculateData(r,n,a),e.setChartLength(s,r,s.length),e.setState({price:a,timeSeries:t,timeLabel:s,timeData:r})})},e.getNews=function(t){d.a.get("https://newsapi.org/v2/everything",{dataResponse:"json",params:{apiKey:"6b5dae4615c944b1aabc8497566543fa",sources:'"financial-post,cnbc,the-wall-street-journal,fortune,business-insider"',language:"en",pageSize:12,sortBy:"publishedAt",q:encodeURI(t)}}).then(function(t){t=t.data.articles,e.setState({news:t})})},e.setChartLength=function(t,a,n){var r=t.slice(t.length-n),s=a.slice(a.length-n),i="year";22===n?i="day":253===n&&(i="month"),e.setState({selectedTimeData:s,selectedTimeLabel:r,selectedTimeUnit:i,maxTimeLength:t.length})},e.handleTimeSelection=function(t){e.setChartLength(e.state.timeLabel,e.state.timeData,t)},e.calculateData=function(t,a,n){var r=(n-a[t.length-2].close).toFixed(2),s=t.slice(t.length-253),i=Math.max.apply(Math,Object(l.a)(s)),c=Math.min.apply(Math,Object(l.a)(s));e.setState({calcData:{change:r,range:c+" - "+i}})},e.state={ticker:"GOOG",profile:[],price:0,timeSeries:[],timeData:[],timeLabel:[],selectedTimeData:[],selectedTimeLabel:[],selectedTimeUnit:"",maxTimeLength:0,companyName:"",mktCap:"",news:[],calcData:{}},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getProfile(this.state.ticker),this.getPriceAndSeries(this.state.ticker)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"topBar wrapper"},r.a.createElement("h1",null,r.a.createElement("img",{src:a(198),alt:"Stockup.ninja"})),r.a.createElement(O,{handlerFromParent:this.handleData})),r.a.createElement("div",{className:"twoColumn wrapper"},r.a.createElement(E,{ticker:this.state.ticker,change:this.state.calcData.change,price:this.state.price,profile:this.state.profile,range:this.state.calcData.range,mktCap:this.state.mktCap,companyName:this.state.companyName}),r.a.createElement(b,{labels:this.state.selectedTimeLabel,data:this.state.selectedTimeData,handlerFromParent:this.handleTimeSelection,unit:this.state.selectedTimeUnit,max:this.state.maxTimeLength}))),r.a.createElement("main",{className:"wrapper"},r.a.createElement(D,{newsFeed:this.state.news})),r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper footerContent"},r.a.createElement("p",null,"Built with ",r.a.createElement(g.a,{icon:f.c})," by ",r.a.createElement("a",{href:"https://michasiw.com"},"Eugene Michasiw"),"."),r.a.createElement("p",null,"Financial data provided by ",r.a.createElement("a",{href:"https://financialmodelingprep.com/"},"Financial Modeling Prep"),". News provided by ",r.a.createElement("a",{href:"https://newsapi.org/"},"NewsAPI.org"),"."))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){e.exports=a(199)},72:function(e,t,a){},73:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.c41e30fc.chunk.js.map