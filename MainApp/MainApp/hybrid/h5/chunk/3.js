(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"110":function(e,t,n){"use strict";var o=n(4),a=n(7),i=n(116),c=n(5),r=n(114),u=n(32),s={};var l={"get":function get(e,t){return s[e]||t},"getData":function getData(){return s},"init":function init(){!function createClientId(){var e=Math.floor(15*Math.random())||64;return s.clientId=e,e}(),function initializeDevice(){"object"==Object(c.a)(u.default)&&(Object(u.getNetworkType)({"success":function success(e){s.networkType=e.networkType}}),Object(u.getSystemInfo)({"success":function success(e){"getSystemInfo:ok"==e.errMsg&&(s.language=e.language,s.version=e.version,s.model=e.model,s.pixelRatio=e.pixelRatio,s.windowWidth=e.windowWidth,s.windowHeight=e.windowHeight,s.system=e.system,s.platform=e.platform,s.ver=e.SDKVersion)}}))}(),function initClientData(){"object"==("undefined"==typeof core?"undefined":Object(c.a)(core))&&(s.appID=r.a.appID||"")}()}},f=n(118),d=function(){function Client(e){Object(o.a)(this,Client),l.init()}return Object(a.a)(Client,[{"key":"isLogin","value":function isLogin(){}},{"key":"getClientId","value":function getClientId(){return l.get("clientId")}},{"key":"getClientInfo","value":function getClientInfo(){return l.getData()}},{"key":"getUserInfo","value":function getUserInfo(){return i.a.getItem("userInfo")}},{"key":"setUserInfo","value":function setUserInfo(e){return!0}},{"key":"saveFootPrint","value":function saveFootPrint(e){var t={"name":e,"time":f().format()},n=[],o=i.a.getItem("__footprint__");o?((n=JSON.parse(o)).lenght>=30&&n.shift(),n.push(t)):n.push(t);var a=JSON.stringify(n);i.a.setItem("__footprint__",a)}},{"key":"getFootPrint","value":function getFootPrint(){var e=[],t=i.a.getItem("__footprint__");return console.log("old history....",t),t&&(e=JSON.parse(t)),console.log("get visit history",e),e}},{"key":"cleanFootPrint","value":function cleanFootPrint(){return i.a.removeItem("__footprint__"),!0}}]),Client}();t.a=new d},"112":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var o=n(15),a=n.n(o),i=n(17),c=n(6),r=n(4),u=n(7),s=n(8),l=n(32),f=200,d=301,g=403,b=404,m=500,p=502,v=n(113),h=n(110),j="https://api.zhangyongqiao.com";console.log("Gateway===>"+j);var O=function(){function Model(e){Object(r.a)(this,Model),Object(s.a)(this,"bizPath",void 0),Object(s.a)(this,"processUnauthentication",(function(e){l.default.navigateTo({"url":"/pages/user/login/index"})})),null!=e&&e.bizPath&&(this.bizPath=e.bizPath)}var e;return Object(u.a)(Model,[{"key":"saveToken","value":function saveToken(e){Object(l.setStorageSync)("token",e)}},{"key":"checkResponse","value":function checkResponse(e){return e.statusCode===b?Object(v.b)("api","请求资源不存在"):e.statusCode===p?Object(v.b)("api","服务端出现了问题"):e.statusCode===g?Object(v.b)("api","没有权限访问"):e.statusCode===d?(this.processUnauthentication(e),Object(v.b)("api","请先登录")):e.statusCode===m?Object(v.b)("api","服务异常"):e.statusCode!==f||e.data}},{"key":"clearToken","value":function clearToken(){Object(l.removeStorageSync)("token")}},{"key":"getToken","value":function getToken(){return Object(l.getStorageSync)("token")}},{"key":"composeFullUrl","value":function composeFullUrl(e){var t=j;return this.bizPath?t=t+this.bizPath+e:t+=e,t}},{"key":"fetch_get","value":function fetch_get(e,t){var n=this,o=this,a=Object(c.a)({"cid":h.a.getClientId()},t);return new Promise((function(t,i){Object(l.request)({"url":n.composeFullUrl(e),"header":{"Content-Type":"application/json","token":n.getToken()},"data":a,"method":"get","success":function success(e){o.checkResponse(e)?t(e.data.data):i(e.data)},"fail":function fail(e){Object(v.b)("get","网络异常"),i(e),Object(l.showToast)({"title":"接口异常","icon":"error","duration":2e3})}})}))}},{"key":"fetch_post","value":(e=Object(i.a)(a.a.mark((function _callee(e,t,n){var o,i=this;return a.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return o={"params":t,"head":{"cid":h.a.getClientId()}},n.abrupt("return",new Promise((function(t,n){Object(l.request)({"url":i.composeFullUrl(e),"header":{"Content-Type":"application/json","token":i.getToken()},"data":o,"method":"post","success":function success(e){t(e.data)},"fail":function fail(e){console.log("request exception......",e),n(e),Object(l.showToast)({"title":"接口异常","icon":"error","duration":2e3})}})})));case 3:case"end":return n.stop()}}),_callee,this)}))),function fetch_post(t,n,o){return e.apply(this,arguments)})}]),Model}()},"113":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var o=n(5),a=(n(32),function formatNumber(e){return(e=e.toString())[1]?e:"0"+e}),i=function formatTime(e){var t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours(),c=e.getMinutes(),r=e.getSeconds();return[t,n,o].map(a).join("-")+" "+[i,c,r].map(a).join(":")},c=function logError(e,t,n){n||(n="empty"),"object"===Object(o.a)(n)&&(n=JSON.stringify(n));var a=i(new Date);console.error(a,e,t,n)},r=function logDebug(e,t,n){n||(n="empty"),"object"===Object(o.a)(n)&&(n=JSON.stringify(n));var a=i(new Date);console.error(a,e,t,n)}},"114":function(e,t,n){"use strict";t.a={"appId":"10030","systemCode":"mini-program","version":"v_1.0.1","env":"dev","host":"m.ctrip.com","uat":"uat.m.zhangyongqiao.com","fat":"uat.m.zhangyongqiao.com"}},"116":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(4),a=n(7),i=n(32),c=function(){function ClientStorage(){Object(o.a)(this,ClientStorage)}return Object(a.a)(ClientStorage,null,[{"key":"setItem","value":function setItem(e,t){Object(i.setStorageSync)(e,t)}},{"key":"getItem","value":function getItem(e){return Object(i.getStorageSync)(e)}},{"key":"removeItem","value":function removeItem(e){Object(i.removeStorageSync)(e)}},{"key":"saveToken","value":function saveToken(e){Object(i.setStorageSync)("token",e)}},{"key":"clearToken","value":function clearToken(){Object(i.removeStorageSync)("token")}},{"key":"getToken","value":function getToken(){return Object(i.getStorageSync)("token")}}]),ClientStorage}()},"117":function(e,t,n){"use strict";var o=n(6),a=n(4),i=n(7),c=n(8),r=n(32),u=function(){function PageRouter(){Object(a.a)(this,PageRouter),Object(c.a)(this,"$instance",r.default.getCurrentInstance()),r.default.getCurrentInstance().router.params}return Object(i.a)(PageRouter,[{"key":"gotoPage","value":function gotoPage(e){null!=e&&e.url&&r.default.navigateTo(Object(o.a)({},e))}},{"key":"getParams","value":function getParams(){return this.$instance.router.params}}]),PageRouter}();t.a=new u},"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(4),a=n(8),i=n(112),c=(n(114),n(110)),r=function UbtClient(e){var t=this;Object(o.a)(this,UbtClient),Object(a.a)(this,"send",(function(e,t){return t.type=e,t.clientInfo=c.a.getClientInfo(),new i.a({"bizPath":"/common-service/ubt"}).fetch_post("/ubt-bg.gif",t,{})})),Object(a.a)(this,"ubtTrace",(function(e){t.send("TRACE",e)})),Object(a.a)(this,"ubtDevTrace",(function(e){t.send("DEV_TRACE",e)})),Object(a.a)(this,"ubtMetric",(function(e){t.send("Metric",e)})),Object(a.a)(this,"ubtExposure",(function(e){t.send("EXPOSURE",e)})),Object(a.a)(this,"ubtSendPV",(function(e){t.send("PV",e)}))}},"123":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o=n(4),a=n(7),i=n(16),c=n(12),r=n(13),u=n(8),s=n(32),l=function(){function PageHelper(){Object(o.a)(this,PageHelper)}return Object(a.a)(PageHelper,null,[{"key":"showToast","value":function showToast(e){Object(s.showToast)(e)}}]),PageHelper}(),f=n(117),d=n(19),g=n(119),b=n(113),m=n(110),p=new g.a,v=function(e){Object(c.a)(BasePage,e);var t=Object(r.a)(BasePage);function BasePage(){var e;return Object(o.a)(this,BasePage),e=t.call(this),Object(u.a)(Object(i.a)(e),"gotoPage",(function(e){f.a.gotoPage(e)})),Object(u.a)(Object(i.a)(e),"showToast",(function(e,t){l.showToast(e,t)})),Object(u.a)(Object(i.a)(e),"sendPV",(function(){e.pageId&&p.ubtSendPV({"pageId":e.pageId})})),Object(u.a)(Object(i.a)(e),"saveFootPrint",(function(){e.pageName&&m.a.saveFootPrint(e.pageName)})),Object(u.a)(Object(i.a)(e),"ubtTrace",(function(e,t){p.ubtTrace(e,t)})),Object(u.a)(Object(i.a)(e),"ubtMetric",(function(){p.ubtMetric(key,value)})),Object(u.a)(Object(i.a)(e),"debugInfo",(function(e,t){Object(b.a)(e,t)})),e}return Object(a.a)(BasePage,[{"key":"componentDidMount","value":function componentDidMount(){this.sendPV(),this.saveFootPrint()}},{"key":"componentDidShow","value":function componentDidShow(){this.saveFootPrint()}},{"key":"routerParams","value":function routerParams(){f.a.getParams()}}]),BasePage}(d.Component)},"140":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(4),a=n(7),i=n(112),c=function(){function DefaultModel(){Object(o.a)(this,DefaultModel)}return Object(a.a)(DefaultModel,null,[{"key":"removeBatch","value":function removeBatch(e,t){return(new i.a).fetch_post("/common-service/brand/removeBatch",e,t)}},{"key":"removeById","value":function removeById(e,t){return(new i.a).fetch_post("/common-service/brand/removeById",e,t)}},{"key":"update","value":function update(e,t){return(new i.a).fetch_post("/common-service/brand/update",e,t)}},{"key":"addNew","value":function addNew(e,t){return(new i.a).fetch_post("/common-service/brand/addNew",e,t)}},{"key":"queryAll","value":function queryAll(e){return(new i.a).fetch_get("/common-service/brand/queryAll",{}).then((function(e){return e.items&&e.items.forEach((function(e){e.key=e.id,e.top||(e.top="middle")})),e.items}))}},{"key":"queryAllWithGoods","value":function queryAllWithGoods(e){return(new i.a).fetch_get("/common-service/brand/queryAllWithGoods",{}).then((function(e){return e.items&&e.items.forEach((function(e){e.key=e.id,e.top||(e.top="middle")})),e.items}))}}]),DefaultModel}()},"144":function(e,t,n){},"145":function(e,t,n){e.exports=n.p+"static/images/user-bg.jpg"},"146":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(4),a=n(7),i=n(12),c=n(13),r=n(19),u=n(115),s=(n(139),n(124),n(154),n(32),n(109)),l=function(e){Object(i.a)(Index,e);var t=Object(c.a)(Index);function Index(){return Object(o.a)(this,Index),t.apply(this,arguments)}return Object(a.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.props.item,t=this,n=this.props.active;return Object(s.jsx)(u.r,{"onClick":function onClick(){return t.props.onClick(e)},"className":"list-item-left","children":Object(s.jsx)(u.r,{"className":"module-list","children":Object(s.jsx)(u.r,{"className":"module-list__item ".concat(n?"active":""),"data-id":e.id,"data-name":e.title,"children":Object(s.jsx)(u.r,{"className":"module-list__info","children":Object(s.jsx)(u.r,{"className":"title ".concat(n?"active":""),"children":e.name})})},e.id)})})}}]),Index}(r.Component)},"154":function(e,t,n){}}]);