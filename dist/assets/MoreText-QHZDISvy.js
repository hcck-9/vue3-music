import{h as p,r as i,p as e,I as a,q as d,F as l,A as m,a9 as v,m as t,a0 as _}from"./index-Xoaj6-Zc.js";const g={class:"leading-5"},f={key:0,class:"outline mr-2"},x={key:0},y={key:1},h=p({__name:"MoreText",props:{text:{type:String,required:!0},end:{type:Number,required:!0},hasTag:{type:Boolean,required:!0},tag:{type:String,required:!1}},setup(c){const n=i(!1),o=i(!1),s=c;return s.text&&s.text.length>s.end&&(n.value=!0),(r,u)=>(t(),e("div",g,[s.hasTag?(t(),e("span",f,a(s.tag),1)):d("v-if",!0),n.value?(t(),e(l,{key:1},[o.value?(t(),e("span",y,a(r.text)+"...",1)):(t(),e("span",x,a(r.text.substring(0,r.end))+"...",1)),m("span",{class:"ml-5 text-gray-700 hover-text",onClick:u[0]||(u[0]=k=>o.value=!o.value)},"["+a(o.value?"收起":"详情")+"]",1)],64)):(t(),e(l,{key:2},[v(a(r.text),1)],64))]))}}),q=_(h,[["__scopeId","data-v-4a99e337"],["__file","E:/code/2023-暑期/5-vue/1-demo/vue3-music/src/components/common/MoreText.vue"]]);export{q as M};
