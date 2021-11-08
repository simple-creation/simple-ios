(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"110":function(e,t,n){"use strict";var o=n(4),a=n(7),c=n(116),i=n(5),r=n(114),u=n(32),s={};var l={"get":function get(e,t){return s[e]||t},"getData":function getData(){return s},"init":function init(){!function createClientId(){var e=Math.floor(15*Math.random())||64;return s.clientId=e,e}(),function initializeDevice(){"object"==Object(i.a)(u.default)&&(Object(u.getNetworkType)({"success":function success(e){s.networkType=e.networkType}}),Object(u.getSystemInfo)({"success":function success(e){"getSystemInfo:ok"==e.errMsg&&(s.language=e.language,s.version=e.version,s.model=e.model,s.pixelRatio=e.pixelRatio,s.windowWidth=e.windowWidth,s.windowHeight=e.windowHeight,s.system=e.system,s.platform=e.platform,s.ver=e.SDKVersion)}}))}(),function initClientData(){"object"==("undefined"==typeof core?"undefined":Object(i.a)(core))&&(s.appID=r.a.appID||"")}()}},f=n(118),d=function(){function Client(e){Object(o.a)(this,Client),l.init()}return Object(a.a)(Client,[{"key":"isLogin","value":function isLogin(){}},{"key":"getClientId","value":function getClientId(){return l.get("clientId")}},{"key":"getClientInfo","value":function getClientInfo(){return l.getData()}},{"key":"getUserInfo","value":function getUserInfo(){return c.a.getItem("userInfo")}},{"key":"setUserInfo","value":function setUserInfo(e){return!0}},{"key":"saveFootPrint","value":function saveFootPrint(e){var t={"name":e,"time":f().format()},n=[],o=c.a.getItem("__footprint__");o?((n=JSON.parse(o)).lenght>=30&&n.shift(),n.push(t)):n.push(t);var a=JSON.stringify(n);c.a.setItem("__footprint__",a)}},{"key":"getFootPrint","value":function getFootPrint(){var e=[],t=c.a.getItem("__footprint__");return console.log("old history....",t),t&&(e=JSON.parse(t)),console.log("get visit history",e),e}},{"key":"cleanFootPrint","value":function cleanFootPrint(){return c.a.removeItem("__footprint__"),!0}}]),Client}();t.a=new d},"112":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(15),a=n.n(o),c=n(17),i=n(6),r=n(4),u=n(7),s=n(8),l=n(32),f=200,d=301,m=403,g=404,h=500,p=502,v=n(113),y=n(110),b="https://api.zhangyongqiao.com";console.log("Gateway===>"+b);var j=function(){function Model(e){Object(r.a)(this,Model),Object(s.a)(this,"bizPath",void 0),Object(s.a)(this,"processUnauthentication",(function(e){l.default.navigateTo({"url":"/pages/user/login/index"})})),null!=e&&e.bizPath&&(this.bizPath=e.bizPath)}var e;return Object(u.a)(Model,[{"key":"saveToken","value":function saveToken(e){Object(l.setStorageSync)("token",e)}},{"key":"checkResponse","value":function checkResponse(e){return e.statusCode===g?Object(v.b)("api","请求资源不存在"):e.statusCode===p?Object(v.b)("api","服务端出现了问题"):e.statusCode===m?Object(v.b)("api","没有权限访问"):e.statusCode===d?(this.processUnauthentication(e),Object(v.b)("api","请先登录")):e.statusCode===h?Object(v.b)("api","服务异常"):e.statusCode!==f||e.data}},{"key":"clearToken","value":function clearToken(){Object(l.removeStorageSync)("token")}},{"key":"getToken","value":function getToken(){return Object(l.getStorageSync)("token")}},{"key":"composeFullUrl","value":function composeFullUrl(e){var t=b;return this.bizPath?t=t+this.bizPath+e:t+=e,t}},{"key":"fetch_get","value":function fetch_get(e,t){var n=this,o=this,a=Object(i.a)({"cid":y.a.getClientId()},t);return new Promise((function(t,c){Object(l.request)({"url":n.composeFullUrl(e),"header":{"Content-Type":"application/json","token":n.getToken()},"data":a,"method":"get","success":function success(e){o.checkResponse(e)?t(e.data.data):c(e.data)},"fail":function fail(e){Object(v.b)("get","网络异常"),c(e),Object(l.showToast)({"title":"接口异常","icon":"error","duration":2e3})}})}))}},{"key":"fetch_post","value":(e=Object(c.a)(a.a.mark((function _callee(e,t,n){var o,c=this;return a.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return o={"params":t,"head":{"cid":y.a.getClientId()}},n.abrupt("return",new Promise((function(t,n){Object(l.request)({"url":c.composeFullUrl(e),"header":{"Content-Type":"application/json","token":c.getToken()},"data":o,"method":"post","success":function success(e){t(e.data)},"fail":function fail(e){console.log("request exception......",e),n(e),Object(l.showToast)({"title":"接口异常","icon":"error","duration":2e3})}})})));case 3:case"end":return n.stop()}}),_callee,this)}))),function fetch_post(t,n,o){return e.apply(this,arguments)})}]),Model}()},"113":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=n(5),a=(n(32),function formatNumber(e){return(e=e.toString())[1]?e:"0"+e}),c=function formatTime(e){var t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),c=e.getHours(),i=e.getMinutes(),r=e.getSeconds();return[t,n,o].map(a).join("-")+" "+[c,i,r].map(a).join(":")},i=function logError(e,t,n){n||(n="empty"),"object"===Object(o.a)(n)&&(n=JSON.stringify(n));var a=c(new Date);console.error(a,e,t,n)},r=function logDebug(e,t,n){n||(n="empty"),"object"===Object(o.a)(n)&&(n=JSON.stringify(n));var a=c(new Date);console.error(a,e,t,n)}},"114":function(e,t,n){"use strict";t.a={"appId":"10030","systemCode":"mini-program","version":"v_1.0.1","env":"dev","host":"m.ctrip.com","uat":"uat.m.zhangyongqiao.com","fat":"uat.m.zhangyongqiao.com"}},"116":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(4),a=n(7),c=n(32),i=function(){function ClientStorage(){Object(o.a)(this,ClientStorage)}return Object(a.a)(ClientStorage,null,[{"key":"setItem","value":function setItem(e,t){Object(c.setStorageSync)(e,t)}},{"key":"getItem","value":function getItem(e){return Object(c.getStorageSync)(e)}},{"key":"removeItem","value":function removeItem(e){Object(c.removeStorageSync)(e)}},{"key":"saveToken","value":function saveToken(e){Object(c.setStorageSync)("token",e)}},{"key":"clearToken","value":function clearToken(){Object(c.removeStorageSync)("token")}},{"key":"getToken","value":function getToken(){return Object(c.getStorageSync)("token")}}]),ClientStorage}()},"141":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(4),a=n(7),c=n(112),i=function(){function DefaultModel(){Object(o.a)(this,DefaultModel)}return Object(a.a)(DefaultModel,null,[{"key":"removeBatch","value":function removeBatch(e,t){return(new c.a).fetch_post("/common-service/news/removeBatch",e,t)}},{"key":"removeById","value":function removeById(e,t){return(new c.a).fetch_post("/common-service/news/removeById",e,t)}},{"key":"update","value":function update(e,t){return(new c.a).fetch_post("/common-service/news/update",e,t)}},{"key":"addNew","value":function addNew(e,t){return(new c.a).fetch_post("/common-service/news/addNew",e,t)}},{"key":"findById","value":function findById(e,t){return(new c.a).fetch_post("/common-service/news/findById",e,t)}},{"key":"queryAll","value":function queryAll(e){return(new c.a).fetch_get("/common-service/news/queryAll",{}).then((function(e){return e.items&&e.items.forEach((function(e){e.key=e.id,e.top||(e.top="middle")})),e.items}))}},{"key":"queryAllWithGoods","value":function queryAllWithGoods(e){return(new c.a).fetch_get("/common-service/news/queryAllWithGoods",{}).then((function(e){return e.items&&e.items.forEach((function(e){e.key=e.id,e.top||(e.top="middle")})),e.items}))}}]),DefaultModel}()},"143":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function convertRichTextImage(e){return e.replace(/<(img).*?(\/>|<\/img>)/g,(function(e){return e.indexOf("style")<0?e.replace(/<\s*img/,'<img style="max-width:100%;height:auto;"'):e.replace(/style=("|')/,"style=$1max-width:100%;height:auto;")}))}},"157":function(e,t,n){},"166":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var o=n(4),a=n(7),c=n(16),i=n(12),r=n(13),u=n(8),s=n(19),l=n(115),f=n(32),d=(n(147),n(141)),m=n(143),g=(n(157),n(109)),h=function(e){Object(i.a)(Index,e);var t=Object(r.a)(Index);function Index(){var e;Object(o.a)(this,Index);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),Object(u.a)(Object(c.a)(e),"config",{"navigationBarTitleText":"详情页"}),Object(u.a)(Object(c.a)(e),"state",{"news":{"title":"news","subTitle":"subTitle....","image":"","content":"暂无内容","author":"cxy"},"curIndex":0}),Object(u.a)(Object(c.a)(e),"onSwitchTab",(function(t){e.setState({"curIndex":t})})),e}return Object(a.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this,t=f.default.getCurrentInstance().router.params;console.log("news id......",t),d.a.findById({"id":t.newsId}).then((function(t){e.setState({"news":t.data})}))}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.state.news,t=e.content;this.state.curIndex;return Object(g.jsxs)(l.r,{"className":"container","children":[Object(g.jsx)(l.r,{"className":"head-image-wrapper","children":Object(g.jsx)(l.c,{"src":"".concat(e.image),"className":"head-image"})}),Object(g.jsx)(l.r,{"className":"author-date","children":Object(g.jsx)(l.p,{"className":"author","children":e.author})}),Object(g.jsx)(l.p,{"className":"title","children":e.title}),Object(g.jsxs)(l.r,{"className":"tool","children":[Object(g.jsx)(l.r,{"className":"circle-img"}),Object(g.jsx)(l.r,{"className":"horizon"})]}),Object(g.jsx)(l.r,{"children":Object(g.jsx)(l.j,{"nodes":m.a(t)})})]})}}]),Index}(s.Component)}}]);