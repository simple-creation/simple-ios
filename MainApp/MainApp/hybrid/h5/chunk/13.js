(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"142":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(4),c=n(7),i=n(112),r=function(){function DefaultModel(){Object(o.a)(this,DefaultModel)}return Object(c.a)(DefaultModel,null,[{"key":"removeBatch","value":function removeBatch(e,t){return(new i.a).fetch_post("/common-service/goods/removeBatch",e,t)}},{"key":"removeById","value":function removeById(e,t){return(new i.a).fetch_post("/common-service/goods/removeById",e,t)}},{"key":"update","value":function update(e,t){return(new i.a).fetch_post("/common-service/goods/update",e,t)}},{"key":"addNew","value":function addNew(e,t){return(new i.a).fetch_post("/common-service/goods/addNew",e,t)}},{"key":"findById","value":function findById(e,t){return(new i.a).fetch_post("/common-service/goods/findById",e,t)}},{"key":"queryByBrand","value":function queryByBrand(e,t){return(new i.a).fetch_post("/common-service/goods/queryByBrand",e,t).then((function(e){return e.data.items}))}},{"key":"queryAll","value":function queryAll(e){return(new i.a).fetch_get("/common-service/goods/queryAll",{}).then((function(e){return e.items&&e.items.forEach((function(e){e.key=e.id,e.top||(e.top="middle")})),e.items}))}},{"key":"queryAllWithGoods","value":function queryAllWithGoods(e){return(new i.a).fetch_get("/common-service/goods/queryAllWithGoods",{}).then((function(e){return e.items&&e.items.forEach((function(e){e.key=e.id,e.top||(e.top="middle")})),e.items}))}}]),DefaultModel}()},"155":function(e,t,n){},"172":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var o=n(4),c=n(7),i=n(16),r=n(14),a=n(11),l=n(12),s=n(13),d=n(8),u=n(32),m=n(19),h=n(115),p=(n(144),n(122)),f=(n(139),n(124),n(155),n(109)),j=function(e){Object(l.a)(Index,e);var t=Object(s.a)(Index);function Index(){var e;Object(o.a)(this,Index);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c)),Object(d.a)(Object(i.a)(e),"onItemClick",(function(){console.log(e.props.item),e.props.onClick&&e.props.onClick(e.props.item)})),e}return Object(c.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.props.item;return e.image||(e.image=n(145)),Object(f.jsx)(h.r,{"onClick":this.onItemClick,"className":"module-list","children":Object(f.jsxs)(h.r,{"className":"module-list__item","children":[Object(f.jsx)(h.r,{"className":"module-list__icon","children":Object(f.jsx)(h.c,{"className":"img","src":e.image})}),Object(f.jsxs)(h.r,{"className":"module-list__right","children":[Object(f.jsxs)(h.r,{"className":"module-list__right__info","children":[Object(f.jsx)(h.r,{"className":"__title","children":e.name}),Object(f.jsx)(h.r,{"className":"__content","children":e.description})]}),Object(f.jsxs)(h.r,{"className":"module-list__right__arrow","children":[Object(f.jsx)(h.p,{"className":"arrow_text","children":"查看详情"}),Object(f.jsx)(p.b,{"value":"chevron-right"})]})]})]},e.id)})}}]),Index}(m.Component),b=(n(146),n(140),n(142)),v=n(117),y=function(e){Object(l.a)(Index,e);var t=Object(s.a)(Index);function Index(e){var n;return Object(o.a)(this,Index),n=t.call(this,e),Object(d.a)(Object(i.a)(n),"config",{"navigationBarTitleText":"轮播列表"}),Object(d.a)(Object(i.a)(n),"state",{"scrollHeight":"400","goodsList":[]}),Object(d.a)(Object(i.a)(n),"initScrollView",(function(){var e=Object(i.a)(n);Object(u.createSelectorQuery)().select("#scroll-panel").boundingClientRect((function(t){e.setState({"scrollTopSize":t.top,"scrollHeight":t.height})})).exec()})),Object(d.a)(Object(i.a)(n),"rightItemTap",(function(e){console.log(" click right item",e),v.a.gotoPage({"url":"/pages/goods/detail?goodsId="+e.id})})),n.pageName="品牌所属商品列表页面",n}return Object(c.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){Object(r.a)(Object(a.a)(Index.prototype),"componentDidMount",this).call(this);var e=this;console.log("获取列表数据");var t=u.default.getCurrentInstance().router.params;console.log("list params",t),b.a.queryByBrand({"id":t.brandId}).then((function(t){console.log("list data from goodss...",t),e.setState({"goodsList":t})}))}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){Object(r.a)(Object(a.a)(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this,t=this.state;t.scrollHeight,t.leftArray,t.mainArray,t.leftIndex,t.leftIntoView;return Object(f.jsx)(h.r,{"className":"container","children":Object(f.jsx)(h.r,{"className":"scroll-panel","id":"scroll-panel","children":Object(f.jsx)(h.k,{"scrollY":!0,"children":Object(f.jsx)(h.r,{"className":"item","children":e.state.goodsList.map((function(t,n){return Object(f.jsx)(j,{"onClick":e.rightItemTap,"item":t},t.id)}))})})})})}}]),Index}(n(123).a)}}]);