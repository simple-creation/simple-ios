(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"95":function(e,t,o){"use strict";o.r(t),o.d(t,"taro_progress_core",(function(){return i}));var s=o(33),i=function(){function r(e){Object(s.g)(this,e),this.percent=0,this.showInfo=!1,this.borderRadius=0,this.fontSize=16,this.strokeWidth=6,this.activeColor="#09BB07",this.backgroundColor="#EBEBEB",this.active=!1}return r.prototype.render=function(){var e=this,t=e.percent,o=e.showInfo,i=e.borderRadius,n=e.fontSize,c=e.strokeWidth,a=e.activeColor,u=t>100?100:t<0?0:t,d={"height":c+"px","backgroundColor":e.backgroundColor},p=e.active?"width 1s ease-in-out":"none",h={"width":u+"%","transition":p,"WebkitTransition":p,"backgroundColor":a,"borderRadius":i?i+"px":"0px"};return Object(s.e)(s.a,{"class":"weui-progress"},Object(s.e)("div",{"class":"weui-progress__bar","style":d},Object(s.e)("div",{"class":"weui-progress__inner-bar","style":h})),o&&Object(s.e)("div",{"class":"weui-progress__opr","style":{"font-size":n+"px"}},Object(s.e)("span",null,u,"%")))},r}()}}]);