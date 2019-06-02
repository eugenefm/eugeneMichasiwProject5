(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,t,a){e.exports=a.p+"static/media/logo.78679e07.svg"},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(60),s=a.n(i),l=(a(71),a(3)),c=a(4),o=a(6),u=a(5),m=a(7),p=(a(72),a(11)),h=a.n(p),d=a(17),g=a(18);function f(e){return r.a.createElement("div",{className:"stockInfo"},r.a.createElement("div",{className:"mainInfo"},r.a.createElement("div",{className:"imageBox"},r.a.createElement("img",{srcSet:e.profile.image,alt:e.companyName})),r.a.createElement("div",null,r.a.createElement("h2",null,e.companyName," ",r.a.createElement("span",null,"(",e.ticker,")")),r.a.createElement("p",null,"Price: ",e.price,e.change<0?r.a.createElement("span",{className:"change negative"},e.change," ",r.a.createElement(d.a,{icon:g.a})):e.change>0?r.a.createElement("span",{className:"change positive"},e.change," ",r.a.createElement(d.a,{icon:g.b})):r.a.createElement("span",{className:"change"},e.change)))),r.a.createElement("div",{className:"descriptionAndList"},r.a.createElement("p",{className:"stockDescription"},e.profile.description),r.a.createElement("ul",{className:"infoList"},r.a.createElement("li",null,r.a.createElement("span",null,"52 Week Range"),r.a.createElement("span",null,e.profile.range)),r.a.createElement("li",null,r.a.createElement("span",null,"Beta"),r.a.createElement("span",null,e.profile.beta)),r.a.createElement("li",null,r.a.createElement("span",null,"Market Cap"),r.a.createElement("span",null,e.profile.mktCap)),r.a.createElement("li",null,r.a.createElement("span",null,"Exchange"),r.a.createElement("span",null,e.profile.exchange)),r.a.createElement("li",null,r.a.createElement("span",null,"Sector"),r.a.createElement("span",null,e.profile.sector)),r.a.createElement("li",null,r.a.createElement("span",null,"Industry"),r.a.createElement("span",null,e.profile.industry)))))}var E=a(61),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t={labels:this.props.labels,datasets:[{labels:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"#fff",borderColor:"#fff",borderCapStyle:"butt",borderWidth:1,borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#fff",pointBackgroundColor:"#fff",pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#fff",pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:10,data:this.props.data}]},a={scales:{xAxes:[{type:"time",time:{unit:this.props.unit},gridLines:{color:"rgba(255, 255, 255, 0.2)",zeroLineColor:"rgba(255, 255, 255, 0.2)"},ticks:{fontColor:"rgba(255, 255, 255, 0.8)"}}],yAxes:[{gridLines:{color:"rgba(255, 255, 255, 0.2)",zeroLineColor:"rgba(255, 255, 255, 0.2)"},ticks:{fontColor:"rgba(255, 255, 255, 0.8)"}}]},legend:{display:!1}};return r.a.createElement("div",{className:"stockChart"},r.a.createElement("h3",null,"Historical Performance"),r.a.createElement("p",null,"Scale: ",r.a.createElement("button",{onClick:function(){e.props.handlerFromParent(22)}},"Month"),r.a.createElement("button",{onClick:function(){e.props.handlerFromParent(253)}},"Year"),r.a.createElement("button",{onClick:function(){e.props.handlerFromParent(e.props.max)}},"Five Year")),r.a.createElement(E.a,{data:t,options:a}))}}]),t}(n.Component),v=a(63),S=a.n(v),k=a(64),y=a.n(k),N=a(65),T=a.n(N),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getTickers=function(){h()({method:"GET",url:"https://financialmodelingprep.com/api/stock/list/all?datatype=json",dataResponse:"json"}).then(function(t){var a=(t=t.data).map(function(e){return e.Ticker});e.setState({tickers:t,validTickers:a})})},e.escapeRegexCharacters=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},e.getSuggestions=function(t){var a=e.escapeRegexCharacters(t.trim());if(""===a)return[];var n=new RegExp("\\b"+a,"i");return e.state.tickers.filter(function(t){return n.test(e.getSuggestionValue(t))})},e.getSuggestionValue=function(e){return"".concat(e.Ticker," ").concat(e.companyName)},e.renderSuggestion=function(e,t){var a=t.query,n="".concat(e.Ticker," | ").concat(e.companyName),i=y()(n,a),s=T()(n,i);return r.a.createElement("span",{className:"suggestion-content "},r.a.createElement("span",{className:"suggestion"},s.map(function(e,t){var a=e.highlight?"highlight":null;return r.a.createElement("span",{className:a,key:t},e.text)})))},e.onChange=function(t,a){var n=a.newValue;a.method;e.setState({value:n.toUpperCase()})},e.onSuggestionsFetchRequested=function(t){var a=t.value;e.setState({suggestions:e.getSuggestions(a)})},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.onSuggestionSelected=function(t,a){a.suggestion;var n=a.suggestionValue;a.suggestionIndex,a.sectionIndex,a.method;t.preventDefault();var r=n.substr(0,n.indexOf(" "));e.setState({value:r}),e.props.handlerFromParent(r)},e.onSubmit=function(t){t.preventDefault(),e.state.validTickers.includes(e.state.value)&&e.props.handlerFromParent(e.state.value)},e.state={value:"",suggestions:[],tickers:[],validTickers:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTickers()}},{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.suggestions,i={placeholder:"Ticker: GOOG",value:a,onChange:this.onChange};return r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(S.a,{suggestions:n.slice(0,5),onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,onSuggestionSelected:this.onSuggestionSelected,inputProps:i,focusInputOnSuggestionClick:!1}))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).loadImages=function(){if(a.props.urlToImage){var e=a.props.urlToImage,t=e;return e.includes("http:")&&(t=t.slice(0,4)+"s"+t.slice(4)),r.a.createElement("div",{className:"previewImage"},r.a.createElement("img",{src:t,alt:a.props.title}))}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"article"},r.a.createElement("a",{href:this.props.url},this.loadImages()),r.a.createElement("p",{className:"articleSource"},this.props.source),r.a.createElement("a",{href:this.props.url},r.a.createElement("h3",null,this.props.title)),r.a.createElement("p",null,r.a.createElement("span",{className:"articleDate"},this.props.date)," ",this.props.description),r.a.createElement("a",{className:"readMore",href:this.props.url},"Read More"))}}]),t}(n.Component),O=a(37),j=a.n(O),x=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="";return this.props.newsFeed.length||(e=r.a.createElement("p",null,"No articles available at this time.")),r.a.createElement("div",{className:"newsFeed"},r.a.createElement("h2",null,"Relevant News"),this.props.newsFeed.map(function(e,t){return r.a.createElement(w,{key:t,title:e.title,url:e.url,urlToImage:e.urlToImage,date:j()(e.publishedAt).format("MMM D, YYYY |"),source:e.source.name,description:e.description})}),e)}}]),t}(n.Component),D=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleData=function(t){e.setState({ticker:t}),e.getProfile(t),e.getPrice(t)},e.getProfile=function(t){h()({method:"GET",url:"https://financialmodelingprep.com/api/v3/company/profile/"+t,dataResponse:"json"}).then(function(t){var a=(t=t.data.profile).companyName;a.includes(" Inc")?a=a.substr(0,a.indexOf(" Inc")):a.includes(" Ltd")?a=a.substr(0,a.indexOf(" Ltd")):a.includes(" (The)")&&(a=a.substr(0,a.indexOf(" (The)"))),e.setState({profile:t,companyName:a},function(){e.getNews(e.state.companyName)})})},e.getPrice=function(t){h()({method:"GET",url:"https://financialmodelingprep.com/api/company/real-time-price/"+t,dataResponse:"json",params:{datatype:"json"}}).then(function(t){e.getTimeSeries(t.data.symbol),console.log(t),t=t.data.price,e.setState({price:t})})},e.getNews=function(t){h()({method:"GET",url:"https://newsapi.org/v2/everything",dataResponse:"json",params:{apiKey:"6b5dae4615c944b1aabc8497566543fa",sources:'"financial-post,cnbc,the-wall-street-journal,fortune,business-insider"',language:"en",pageSize:12,sortBy:"publishedAt",q:encodeURI(t)}}).then(function(t){t=t.data.articles,console.log(t),e.setState({news:t})})},e.getTimeSeries=function(t){h()({method:"GET",url:"https://financialmodelingprep.com/api/v3/historical-price-full/"+t,dataResponse:"json"}).then(function(t){t=t.data.historical;var a=[],n=[];t.forEach(function(e){a.push(e.close),n.push(e.date)}),e.calculateData(n,t),e.setChartLength(n,a,n.length),e.setState({timeSeries:t,timeLabel:n,timeData:a})})},e.setChartLength=function(t,a,n){var r=t.slice(t.length-n),i=a.slice(a.length-n),s="year";22===n?s="day":253===n&&(s="month"),e.setState({selectedTimeData:i,selectedTimeLabel:r,selectedTimeUnit:s,maxTimeLength:t.length})},e.handleTimeSelection=function(t){e.setChartLength(e.state.timeLabel,e.state.timeData,t)},e.calculateData=function(t,a){var n=a[t.length-2].close,r=(e.state.price-n).toFixed(2);e.setState({calcData:{change:r}})},e.state={ticker:"GOOG",profile:[],price:0,timeSeries:[],timeData:[],timeLabel:[],selectedTimeData:[],selectedTimeLabel:[],selectedTimeUnit:"",maxTimeLength:0,companyName:"",news:[],calcData:{}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getProfile(this.state.ticker),this.getPrice(this.state.ticker)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"topBar wrapper"},r.a.createElement("h1",null,r.a.createElement("img",{src:a(197),alt:"Stockup.ninja"})),r.a.createElement(C,{handlerFromParent:this.handleData})),r.a.createElement("div",{className:"twoColumn wrapper"},r.a.createElement(f,{ticker:this.state.ticker,change:this.state.calcData.change,price:this.state.price,profile:this.state.profile,companyName:this.state.companyName}),r.a.createElement(b,{labels:this.state.selectedTimeLabel,data:this.state.selectedTimeData,handlerFromParent:this.handleTimeSelection,unit:this.state.selectedTimeUnit,max:this.state.maxTimeLength}))),r.a.createElement("main",{className:"wrapper"},r.a.createElement(x,{newsFeed:this.state.news})),r.a.createElement("footer",null,r.a.createElement("p",{className:"wrapper"},"Built with ",r.a.createElement(d.a,{icon:g.c})," by Eugene Michasiw")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(198)},71:function(e,t,a){},72:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.19d96803.chunk.js.map