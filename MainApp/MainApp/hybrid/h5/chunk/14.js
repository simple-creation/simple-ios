(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"153":function(e,t,n){},"171":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var c=n(4),i=n(7),o=n(16),a=n(14),l=n(11),r=n(12),s=n(13),d=n(8),j=n(32),u=n(19),m=n(115),h=(n(144),n(122)),b=(n(139),n(124),n(153),n(109)),p=function(e){Object(r.a)(Index,e);var t=Object(s.a)(Index);function Index(){var e;Object(c.a)(this,Index);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),Object(d.a)(Object(o.a)(e),"onItemClick",(function(){console.log(e.props.item),e.props.onClick&&e.props.onClick(e.props.item)})),e}return Object(i.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.props.item;return e.image||(e.image=n(145)),Object(b.jsx)(m.r,{"onClick":this.onItemClick,"className":"module-list","children":Object(b.jsxs)(m.r,{"className":"module-list__item","children":[Object(b.jsx)(m.r,{"className":"module-list__icon","children":Object(b.jsx)(m.c,{"className":"img","src":e.image})}),Object(b.jsxs)(m.r,{"className":"module-list__right","children":[Object(b.jsxs)(m.r,{"className":"module-list__right__info","children":[Object(b.jsx)(m.r,{"className":"__title","children":e.name}),Object(b.jsx)(m.r,{"className":"__content","children":e.description})]}),Object(b.jsxs)(m.r,{"className":"module-list__right__arrow","children":[Object(b.jsx)(m.p,{"className":"arrow_text","children":"查看详情"}),Object(b.jsx)(h.b,{"value":"chevron-right"})]})]})]},e.id)})}}]),Index}(u.Component),O=n(146),f=n(140),x=n(117),g=function(e){Object(r.a)(Index,e);var t=Object(s.a)(Index);function Index(e){var n;return Object(c.a)(this,Index),n=t.call(this,e),Object(d.a)(Object(o.a)(n),"config",{"navigationBarTitleText":"轮播列表"}),Object(d.a)(Object(o.a)(n),"state",{"scrollHeight":"400","leftArray":[],"mainArray":[],"leftIndex":0,"leftIntoView":"left-0"}),Object(d.a)(Object(o.a)(n),"initScrollView",(function(){var e=Object(o.a)(n);Object(j.createSelectorQuery)().select("#scroll-panel").boundingClientRect((function(t){e.setState({"scrollTopSize":t.top,"scrollHeight":t.height})})).exec()})),Object(d.a)(Object(o.a)(n),"getListData",(function(){var e=Object(o.a)(n);f.a.queryAllWithGoods().then((function(t){var c=[],i=[];c=c.concat(t),t.map((function(e){i.push({"title":e.name,"list":e.goods})})),console.log("-----------请求接口返回数据示例-------------"),console.log("brand with goods===>",t),n.setState({"leftArray":c,"mainArray":i},(function(){e.initScrollView()}))}))})),Object(d.a)(Object(o.a)(n),"leftTap",(function(e){n.setState({"leftIndex":e,"leftIntoView":"left-".concat(e>5?e-5:0)})})),Object(d.a)(Object(o.a)(n),"rightItemTap",(function(e){x.a.gotoPage({"url":"/pages/goods/detail?goodsId="+e.id})})),Object(d.a)(Object(o.a)(n),"swiperChange",(function(e){var t;console.log(j.default.getEnv()),t="WEB"===j.default.getEnv()?e.detail.current:e.currentTarget.current,n.setState({"leftIndex":t,"leftIntoView":"left-".concat(t>5?t-5:0)})})),n.pageName="商城首页",n}return Object(i.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){Object(a.a)(Object(l.a)(Index.prototype),"componentDidMount",this).call(this),console.log("获取列表数据"),this.getListData()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){Object(a.a)(Object(l.a)(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this,t=this,n=this.state,c=n.scrollHeight,i=n.leftArray,o=n.mainArray,a=n.leftIndex,l=n.leftIntoView;return Object(b.jsx)(m.r,{"className":"container","children":Object(b.jsx)(m.r,{"className":"scroll-panel","id":"scroll-panel","children":Object(b.jsxs)(m.r,{"className":"list-box","children":[Object(b.jsx)(m.r,{"className":"left","children":i.length>0&&Object(b.jsx)(m.k,{"scrollY":!0,"style":"height:".concat(c,"px;"),"scrollIntoView":l,"scrollWithAnimation":!0,"children":i.map((function(n,c){return Object(b.jsx)(O.a,{"id":"left-".concat(c),"active":c==a?"active":"","onClick":e.leftTap.bind(t,c),"item":n},n.id)}))})}),Object(b.jsx)(m.r,{"className":"main","children":o.length>0&&Object(b.jsx)(m.m,{"className":"swiper","style":"height:".concat(c,"px;"),"current":a,"onChange":this.swiperChange.bind(this),"vertical":!0,"duration":300,"children":o.map((function(e,n){return Object(b.jsx)(m.n,{"children":Object(b.jsx)(m.k,{"scrollY":!0,"style":"height:".concat(c,"px;"),"children":Object(b.jsxs)(m.r,{"className":"item","children":[Object(b.jsx)(m.r,{"className":"title","children":Object(b.jsx)(m.r,{"children":e.title})}),e.list.map((function(e,n){return Object(b.jsx)(p,{"onClick":t.rightItemTap,"item":e},e.id)}))]})})},n)}))})})]})})})}}]),Index}(n(123).a)}}]);