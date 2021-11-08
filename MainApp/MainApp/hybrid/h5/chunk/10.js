(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"110":function(e,t,n){"use strict";var o=n(4),a=n(7),i=n(116),c=n(5),r=n(114),s=n(32),u={};var l={"get":function get(e,t){return u[e]||t},"getData":function getData(){return u},"init":function init(){!function createClientId(){var e=Math.floor(15*Math.random())||64;return u.clientId=e,e}(),function initializeDevice(){"object"==Object(c.a)(s.default)&&(Object(s.getNetworkType)({"success":function success(e){u.networkType=e.networkType}}),Object(s.getSystemInfo)({"success":function success(e){"getSystemInfo:ok"==e.errMsg&&(u.language=e.language,u.version=e.version,u.model=e.model,u.pixelRatio=e.pixelRatio,u.windowWidth=e.windowWidth,u.windowHeight=e.windowHeight,u.system=e.system,u.platform=e.platform,u.ver=e.SDKVersion)}}))}(),function initClientData(){"object"==("undefined"==typeof core?"undefined":Object(c.a)(core))&&(u.appID=r.a.appID||"")}()}},f=n(118),b=function(){function Client(e){Object(o.a)(this,Client),l.init()}return Object(a.a)(Client,[{"key":"isLogin","value":function isLogin(){}},{"key":"getClientId","value":function getClientId(){return l.get("clientId")}},{"key":"getClientInfo","value":function getClientInfo(){return l.getData()}},{"key":"getUserInfo","value":function getUserInfo(){return i.a.getItem("userInfo")}},{"key":"setUserInfo","value":function setUserInfo(e){return!0}},{"key":"saveFootPrint","value":function saveFootPrint(e){var t={"name":e,"time":f().format()},n=[],o=i.a.getItem("__footprint__");o?((n=JSON.parse(o)).lenght>=30&&n.shift(),n.push(t)):n.push(t);var a=JSON.stringify(n);i.a.setItem("__footprint__",a)}},{"key":"getFootPrint","value":function getFootPrint(){var e=[],t=i.a.getItem("__footprint__");return console.log("old history....",t),t&&(e=JSON.parse(t)),console.log("get visit history",e),e}},{"key":"cleanFootPrint","value":function cleanFootPrint(){return i.a.removeItem("__footprint__"),!0}}]),Client}();t.a=new b},"112":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o=n(15),a=n.n(o),i=n(17),c=n(6),r=n(4),s=n(7),u=n(8),l=n(32),f=200,b=301,g=403,d=404,j=500,h=502,p=n(113),m=n(110),O="https://api.zhangyongqiao.com";console.log("Gateway===>"+O);var v=function(){function Model(e){Object(r.a)(this,Model),Object(u.a)(this,"bizPath",void 0),Object(u.a)(this,"processUnauthentication",(function(e){l.default.navigateTo({"url":"/pages/user/login/index"})})),null!=e&&e.bizPath&&(this.bizPath=e.bizPath)}var e;return Object(s.a)(Model,[{"key":"saveToken","value":function saveToken(e){Object(l.setStorageSync)("token",e)}},{"key":"checkResponse","value":function checkResponse(e){return e.statusCode===d?Object(p.b)("api","请求资源不存在"):e.statusCode===h?Object(p.b)("api","服务端出现了问题"):e.statusCode===g?Object(p.b)("api","没有权限访问"):e.statusCode===b?(this.processUnauthentication(e),Object(p.b)("api","请先登录")):e.statusCode===j?Object(p.b)("api","服务异常"):e.statusCode!==f||e.data}},{"key":"clearToken","value":function clearToken(){Object(l.removeStorageSync)("token")}},{"key":"getToken","value":function getToken(){return Object(l.getStorageSync)("token")}},{"key":"composeFullUrl","value":function composeFullUrl(e){var t=O;return this.bizPath?t=t+this.bizPath+e:t+=e,t}},{"key":"fetch_get","value":function fetch_get(e,t){var n=this,o=this,a=Object(c.a)({"cid":m.a.getClientId()},t);return new Promise((function(t,i){Object(l.request)({"url":n.composeFullUrl(e),"header":{"Content-Type":"application/json","token":n.getToken()},"data":a,"method":"get","success":function success(e){o.checkResponse(e)?t(e.data.data):i(e.data)},"fail":function fail(e){Object(p.b)("get","网络异常"),i(e),Object(l.showToast)({"title":"接口异常","icon":"error","duration":2e3})}})}))}},{"key":"fetch_post","value":(e=Object(i.a)(a.a.mark((function _callee(e,t,n){var o,i=this;return a.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return o={"params":t,"head":{"cid":m.a.getClientId()}},n.abrupt("return",new Promise((function(t,n){Object(l.request)({"url":i.composeFullUrl(e),"header":{"Content-Type":"application/json","token":i.getToken()},"data":o,"method":"post","success":function success(e){t(e.data)},"fail":function fail(e){console.log("request exception......",e),n(e),Object(l.showToast)({"title":"接口异常","icon":"error","duration":2e3})}})})));case 3:case"end":return n.stop()}}),_callee,this)}))),function fetch_post(t,n,o){return e.apply(this,arguments)})}]),Model}()},"113":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var o=n(5),a=(n(32),function formatNumber(e){return(e=e.toString())[1]?e:"0"+e}),i=function formatTime(e){var t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours(),c=e.getMinutes(),r=e.getSeconds();return[t,n,o].map(a).join("-")+" "+[i,c,r].map(a).join(":")},c=function logError(e,t,n){n||(n="empty"),"object"===Object(o.a)(n)&&(n=JSON.stringify(n));var a=i(new Date);console.error(a,e,t,n)},r=function logDebug(e,t,n){n||(n="empty"),"object"===Object(o.a)(n)&&(n=JSON.stringify(n));var a=i(new Date);console.error(a,e,t,n)}},"114":function(e,t,n){"use strict";t.a={"appId":"10030","systemCode":"mini-program","version":"v_1.0.1","env":"dev","host":"m.ctrip.com","uat":"uat.m.zhangyongqiao.com","fat":"uat.m.zhangyongqiao.com"}},"116":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(4),a=n(7),i=n(32),c=function(){function ClientStorage(){Object(o.a)(this,ClientStorage)}return Object(a.a)(ClientStorage,null,[{"key":"setItem","value":function setItem(e,t){Object(i.setStorageSync)(e,t)}},{"key":"getItem","value":function getItem(e){return Object(i.getStorageSync)(e)}},{"key":"removeItem","value":function removeItem(e){Object(i.removeStorageSync)(e)}},{"key":"saveToken","value":function saveToken(e){Object(i.setStorageSync)("token",e)}},{"key":"clearToken","value":function clearToken(){Object(i.removeStorageSync)("token")}},{"key":"getToken","value":function getToken(){return Object(i.getStorageSync)("token")}}]),ClientStorage}()},"117":function(e,t,n){"use strict";var o=n(6),a=n(4),i=n(7),c=n(8),r=n(32),s=function(){function PageRouter(){Object(a.a)(this,PageRouter),Object(c.a)(this,"$instance",r.default.getCurrentInstance()),r.default.getCurrentInstance().router.params}return Object(i.a)(PageRouter,[{"key":"gotoPage","value":function gotoPage(e){null!=e&&e.url&&r.default.navigateTo(Object(o.a)({},e))}},{"key":"getParams","value":function getParams(){return this.$instance.router.params}}]),PageRouter}();t.a=new s},"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(4),a=n(8),i=n(112),c=(n(114),n(110)),r=function UbtClient(e){var t=this;Object(o.a)(this,UbtClient),Object(a.a)(this,"send",(function(e,t){return t.type=e,t.clientInfo=c.a.getClientInfo(),new i.a({"bizPath":"/common-service/ubt"}).fetch_post("/ubt-bg.gif",t,{})})),Object(a.a)(this,"ubtTrace",(function(e){t.send("TRACE",e)})),Object(a.a)(this,"ubtDevTrace",(function(e){t.send("DEV_TRACE",e)})),Object(a.a)(this,"ubtMetric",(function(e){t.send("Metric",e)})),Object(a.a)(this,"ubtExposure",(function(e){t.send("EXPOSURE",e)})),Object(a.a)(this,"ubtSendPV",(function(e){t.send("PV",e)}))}},"123":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(4),a=n(7),i=n(16),c=n(12),r=n(13),s=n(8),u=n(32),l=function(){function PageHelper(){Object(o.a)(this,PageHelper)}return Object(a.a)(PageHelper,null,[{"key":"showToast","value":function showToast(e){Object(u.showToast)(e)}}]),PageHelper}(),f=n(117),b=n(19),g=n(119),d=n(113),j=n(110),h=new g.a,p=function(e){Object(c.a)(BasePage,e);var t=Object(r.a)(BasePage);function BasePage(){var e;return Object(o.a)(this,BasePage),e=t.call(this),Object(s.a)(Object(i.a)(e),"gotoPage",(function(e){f.a.gotoPage(e)})),Object(s.a)(Object(i.a)(e),"showToast",(function(e,t){l.showToast(e,t)})),Object(s.a)(Object(i.a)(e),"sendPV",(function(){e.pageId&&h.ubtSendPV({"pageId":e.pageId})})),Object(s.a)(Object(i.a)(e),"saveFootPrint",(function(){e.pageName&&j.a.saveFootPrint(e.pageName)})),Object(s.a)(Object(i.a)(e),"ubtTrace",(function(e,t){h.ubtTrace(e,t)})),Object(s.a)(Object(i.a)(e),"ubtMetric",(function(){h.ubtMetric(key,value)})),Object(s.a)(Object(i.a)(e),"debugInfo",(function(e,t){Object(d.a)(e,t)})),e}return Object(a.a)(BasePage,[{"key":"componentDidMount","value":function componentDidMount(){this.sendPV(),this.saveFootPrint()}},{"key":"componentDidShow","value":function componentDidShow(){this.saveFootPrint()}},{"key":"routerParams","value":function routerParams(){f.a.getParams()}}]),BasePage}(b.Component)},"162":function(e,t,n){},"167":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var o=n(4),a=n(7),i=n(16),c=n(14),r=n(11),s=n(12),u=n(13),l=n(8),f=(n(19),n(115)),b=(n(118),n(139),n(124),n(110)),g=(n(162),n(123)),d=n(109),j=function(e){Object(s.a)(Index,e);var t=Object(u.a)(Index);function Index(e){var n;return Object(o.a)(this,Index),n=t.call(this,e),Object(l.a)(Object(i.a)(n),"state",{"visitList":[]}),Object(l.a)(Object(i.a)(n),"cleanVisitHistory",(function(){b.a.cleanFootPrint(),n.setState({"visitList":[]})})),n}return Object(a.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){Object(c.a)(Object(r.a)(Index.prototype),"componentDidMount",this).call(this);var e=b.a.getFootPrint();this.setState({"visitList":e})}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){return Object(d.jsxs)(f.r,{"className":"index","children":[Object(d.jsxs)(f.r,{"className":"page page-index","children":[Object(d.jsxs)(f.r,{"children":[Object(d.jsx)(f.a,{"type":"primary","children":"页面浏览足迹"}),Object(d.jsx)(f.r,{"children":Object(d.jsx)(f.p,{"className":"title-text","children":"---最近30次记录"})})]}),this.state.visitList.map((function(e,t){return Object(d.jsx)(f.r,{"className":"module-list","children":Object(d.jsx)(f.r,{"className":"module-list__item","children":Object(d.jsxs)(f.r,{"className":"module-list__info","children":[Object(d.jsxs)(f.r,{"className":"title","children":[e.name,":"]}),Object(d.jsx)(f.r,{"className":"content","children":e.time})]})})},e.id)}))]}),Object(d.jsx)(f.a,{"onClick":this.cleanVisitHistory,"children":"清除全部访问记录"})]})}}]),Index}(g.a)}}]);