(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{487:function(t,e,n){"use strict";n.r(e);function r(){return new Worker(n.p+"2f08b2d.worker.js")}var o=n(22),l=n(23),c=(n(72),function(){function t(){Object(o.a)(this,t)}return Object(l.a)(t,null,[{key:"getLintResultList",value:function(t){var e=this;return t.map((function(t){return{line:t.line,column:t.column,message:e.getMessage(t.message)}}))}},{key:"getMessage",value:function(t){return-1===t.indexOf("sentence length(")?t:"1行に100文字以上存在します"}}]),t}()),f={name:"TextLint",props:{value:{type:String,default:"",required:!1}},data:function(){return{worker:{}}},mounted:function(){var t=this;this.worker=new r,this.worker.onmessage=function(e){if("lint:result"===e.data.command){var n=e.data.result.messages,r=c.getLintResultList(n);t.$emit("result",r)}}},methods:{postLinter:function(t){this.worker.postMessage({command:"lint",text:t,ext:".txt"})}},watch:{value:function(){this.postLinter(this.value)}}},h=n(32),component=Object(h.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports}}]);