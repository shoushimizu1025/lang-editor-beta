(this.webpackJsonp=this.webpackJsonp||[]).push([[6,10,11,17],{487:function(t,e,n){"use strict";n.r(e);function o(){return new Worker(n.p+"2f08b2d.worker.js")}var r=n(22),l=n(23),c=(n(72),function(){function t(){Object(r.a)(this,t)}return Object(l.a)(t,null,[{key:"getLintResultList",value:function(t){var e=this;return t.map((function(t){return{line:t.line,column:t.column,message:e.getMessage(t.message)}}))}},{key:"getMessage",value:function(t){return-1===t.indexOf("sentence length(")?t:"1行に100文字以上存在します"}}]),t}()),d={name:"TextLint",props:{value:{type:String,default:"",required:!1}},data:function(){return{worker:{}}},mounted:function(){var t=this;this.worker=new o,this.worker.onmessage=function(e){if("lint:result"===e.data.command){var n=e.data.result.messages,o=c.getLintResultList(n);t.$emit("result",o)}}},methods:{postLinter:function(t){this.worker.postMessage({command:"lint",text:t,ext:".txt"})}},watch:{value:function(){this.postLinter(this.value)}}},m=n(32),component=Object(m.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},488:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("241be573",content,!0,{sourceMap:!1})},489:function(t,e,n){var content=n(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1c91b9fd",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(22),l=n(23),c=function(){function t(){Object(r.a)(this,t)}return Object(l.a)(t,null,[{key:"uploadFile",value:function(t){var e=t.target;return e.files instanceof FileList?e.files[0]:null}}]),t}(),d=o.a.extend({name:"EditorOption",data:function(){return{isShowSnackBar:!1,snackBarText:""}},methods:{refs:function(){return this.$refs},copy:function(){this.$emit("ClipboardCopy"),this.snackBarText="クリップボードにコピーしました。",this.isShowSnackBar=!0},uploadMarkdown:function(t){var e=c.uploadFile(t);this.refs().markdownUploader.value="",e&&this.$emit("uploadMarkdown",e)}}}),m=(n(495),n(32)),f=n(41),v=n.n(f),h=n(483),k=n(211),x=n(213),_=n(134),w=n(116),y=n(83),S=n(548),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{staticClass:"list-wrap",attrs:{rounded:"",dense:""}},[n("v-list-item",{on:{click:function(e){return t.$emit("Code")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-code-tags")])],1),t._v(" "),n("v-list-item-title",[t._v("コードブロック挿入")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){t.refs().markdownUploader.click()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-language-markdown-outline")])],1),t._v(" "),n("v-list-item-title",[t._v("Markdownファイル挿入")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.copy()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-content-copy")])],1),t._v(" "),n("v-list-item-title",[t._v("記事文章をコピー")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$emit("DownloadText")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-download")])],1),t._v(" "),n("v-list-item-title",[t._v("テキストファイルダウンロード")])],1)],1),t._v(" "),n("input",{ref:"markdownUploader",staticClass:"hide-input",attrs:{type:"file",name:"quill-markdown",accept:"text/markdown,text/md",multiple:""},on:{change:t.uploadMarkdown}}),t._v(" "),n("v-snackbar",{attrs:{dark:"",color:"purple darken-1"},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{small:"",text:"",dark:""},on:{click:function(e){t.isShowSnackBar=!1}}},"v-btn",o,!1),[n("v-icon",{attrs:{small:""}},[t._v("mdi-close")])],1)]}}]),model:{value:t.isShowSnackBar,callback:function(e){t.isShowSnackBar=e},expression:"isShowSnackBar"}},[t._v("\n    "+t._s(t.snackBarText)+"\n    ")])],1)}),[],!1,null,"dca55f76",null);e.default=component.exports;v()(component,{VBtn:h.a,VIcon:k.a,VList:x.a,VListItem:_.a,VListItemIcon:w.a,VListItemTitle:y.b,VSnackbar:S.a})},491:function(t,e,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("24e75649",content,!0,{sourceMap:!1})},493:function(t,e,n){"use strict";n(488)},494:function(t,e,n){var o=n(15)(!1);o.push([t.i,".theme--dark .navigation-drawer-wrap[data-v-2f0f71ae]{background-color:#121212}",""]),t.exports=o},495:function(t,e,n){"use strict";n(489)},496:function(t,e,n){var o=n(15)(!1);o.push([t.i,".btn-style[data-v-dca55f76]{text-transform:none}.hide-input[data-v-dca55f76]{display:none}.list-wrap[data-v-dca55f76]{padding-top:0}",""]),t.exports=o},500:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(35),l=n(22),c=n(23),d=(n(95),n(29),n(67),n(84),n(181),n(3),n(10),n(520),n(521),n(45),n(61),n(492)),m=function(){function t(){Object(l.a)(this,t)}return Object(c.a)(t,null,[{key:"removeLineFeedCode",value:function(t){return this.isBrank(t)?t:t=(t=(t=(t=t.replace(/\r/g,"")).replace(/\\r/g,"")).replace(/\n/g,"")).replace(/\\n/g,"")}},{key:"isBrank",value:function(t){return""==t||null==t||null==t}}]),t}(),f=(n(43),n(46),n(522),n(300),function(){function t(){Object(l.a)(this,t)}return Object(c.a)(t,null,[{key:"dlTextFile",value:function(t){var e=this.createTextBlob(t);this.downloadFile(e,"article.txt")}},{key:"dlHtmlFile",value:function(html){var t=this.createHtmlBlob(html);this.downloadFile(t,"article.html")}},{key:"createHtmlBlob",value:function(t){return new Blob([t],{type:"text/html"})}},{key:"createTextBlob",value:function(t){return new Blob([t],{type:"text/plain"})}},{key:"downloadFile",value:function(t,e){var n=URL.createObjectURL(t),a=document.createElement("a");document.body.appendChild(a),a.download=e,a.href=n,a.click(),a.remove(),URL.revokeObjectURL(n)}}]),t}()),v=function(){function t(){Object(l.a)(this,t),this.SOURCE_API="api",this.SOURCE_USER="user",this.SOURCE_SILENT="silent",this.html="",this.quill=null}var e;return Object(c.a)(t,[{key:"text",get:function(){return this.quill?this.quill.getText():""}},{key:"textCount",get:function(){return this.text.replace(/\n/g,"").length}},{key:"quillInjection",value:function(t){this.quill=t}},{key:"quillModules",get:function(){return{modules:{toolbar:!1},scrollingContainer:this.getScrollParent(document.getElementById("__nuxt"))}}},{key:"getHtml",value:function(){var t=document.getElementById("quill-container");return t?t.querySelector(".ql-editor"):null}},{key:"getHtmlString",value:function(){var html=this.getHtml();return html?html.innerHTML:""}},{key:"setCursor",value:function(line){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,source=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"api",e=this.text.split(/\n/g);e.splice(line);var n=0;e.length>1&&e.forEach((function(text,i){e.length-1!==i&&(text.length?n+=text.length+1:n+=1)})),t&&(n+=t),this.quill.setSelection(n,1,source)}},{key:"enable",value:function(t){this.quill.enable(t)}},{key:"changeFormatSize",value:function(t){this.quill.format("header",t)}},{key:"changeBold",value:function(){var t=!this.quill.getFormat().bold;this.quill.format("bold",t)}},{key:"changeItalic",value:function(){var t=!this.quill.getFormat().italic;this.quill.format("italic",t)}},{key:"changeUnderline",value:function(){var t=!this.quill.getFormat().underline;this.quill.format("underline",t)}},{key:"changeListBullet",value:function(){var t=!this.quill.getFormat().list;this.quill.format("list",t)}},{key:"changeListOrdered",value:function(){var t="ordered"==this.quill.getFormat().list?"":"ordered";this.quill.format("list",t)}},{key:"changeQuote",value:function(){var t=!this.quill.getFormat().blockquote;this.quill.format("blockquote",t)}},{key:"changeFontColor",value:function(t){this.quill.format("color",t)}},{key:"changeBackgroundColor",value:function(t){this.quill.format("background",t)}},{key:"insertLink",value:function(t){this.quill.format("link",t)}},{key:"insertKatex",value:function(code){var t=this.quill.getSelection(!0);this.quill.insertEmbed(t.index,"formula",code),this.quill.setSelection(t.index+2,0,this.SOURCE_SILENT)}},{key:"insertIFrame",value:function(code){var t=this.quill.getSelection(!0);this.quill.clipboard.dangerouslyPasteHTML(t.index,code),this.quill.setSelection(t.index+2,0,this.SOURCE_SILENT)}},{key:"insertTweet",value:function(t){var e=this.quill.getSelection(!0);this.quill.insertText(e.index,"\n",this.SOURCE_USER),this.quill.insertEmbed(e.index,"tweet",t,this.SOURCE_API),this.quill.setSelection(e.index+2,0,this.SOURCE_SILENT)}},{key:"changeCode",value:function(){var t=!this.quill.getFormat()["code-block"];this.quill.format("code-block",t)}},{key:"insertMarkdown",value:function(t){var e=this,n=new FileReader;n.onload=function(t){var n=t.target.result,o=Object(d.marked)(n),r=e.quill.getSelection(!0);e.quill.insertText(r.index,"\n",e.SOURCE_USER),e.quill.clipboard.dangerouslyPasteHTML(r.index,m.removeLineFeedCode(o)),e.quill.setSelection(r.index+2,e.SOURCE_SILENT)},n.readAsText(t)}},{key:"downloadTextFile",value:function(){f.dlTextFile(this.text)}},{key:"downloadHtmlFile",value:function(){f.dlHtmlFile(this.getHtmlString())}},{key:"clipboardCopy",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.createHtmlBlob(this.getHtmlString()),n=new ClipboardItem({"text/html":e}),t.next=4,navigator.clipboard.write([n]);case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"getScrollParent",value:function(t){if(!t)return document.documentElement;var e=t instanceof HTMLElement&&window.getComputedStyle(t).overflowY||"";return!(e.includes("hidden")||e.includes("visible"))&&t.scrollHeight>=t.clientHeight?t:this.getScrollParent(t.parentNode)}}]),t}(),h=n(98),k=n(501),x=n(502),_=n(503),w=n(504),y=n(490),S=o.a.extend({name:"LangEditor",props:{value:{type:String,default:"",required:!1},enable:{type:Boolean,default:!0,required:!1}},components:{TextLintBlock:x.default,ToolBar:k.default,TextEditor:_.default,MenuDrawers:w.default,EditorOption:y.default},data:function(){return{editor:{},menuDrawer:!1,isPcDesign:!0}},mounted:function(){this.editor=new v,this.isPcDesign=h.a.isPcDesign(),this.menuDrawer=!1},methods:{finishInitialize:function(t){this.editor.quillInjection(t),this.editor.enable(this.enable)},textLintPushPoint:function(line,t){this.isPcDesign||(this.menuDrawer=!1),this.editor.setCursor(line,t)},changeFormatSize:function(t){this.editor.changeFormatSize(t)},changeLink:function(link){this.editor.insertLink(link)},uploadMarkdown:function(t){this.editor.insertMarkdown(t)}}}),C=(n(506),n(32)),L=n(41),D=n.n(L),P=n(483),E=n(555),B=n(479),O=n(478),T=n(556),component=Object(C.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("div",{staticStyle:{"margin-top":"60px"}},[n("div",{staticClass:"tool-bar-wrap sticy-block"},[n("v-row",[n("v-col",{attrs:{cols:"10"}},[n("tool-bar",{on:{FormatSize:t.changeFormatSize,Bold:function(e){return t.editor.changeBold()},Italic:function(e){return t.editor.changeItalic()},Underline:function(e){return t.editor.changeUnderline()},ListBullet:function(e){return t.editor.changeListBullet()},ListOrdered:function(e){return t.editor.changeListOrdered()},Quote:function(e){return t.editor.changeQuote()},Code:function(e){return t.editor.changeCode()},Link:t.changeLink}})],1),t._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-row",{attrs:{justify:"end"}},[n("v-btn",{attrs:{depressed:""},on:{click:function(e){t.menuDrawer=!t.menuDrawer}}},[t._v("\n              MENU\n            ")])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"text-editor-wrap"},[n("client-only",[n("vue-editor",{attrs:{"editor-options":t.editor.quillModules},on:{ready:t.finishInitialize},model:{value:t.editor.html,callback:function(e){t.$set(t.editor,"html",e)},expression:"editor.html"}})],1)],1)]),t._v(" "),n("menu-drawers",{model:{value:t.menuDrawer,callback:function(e){t.menuDrawer=e},expression:"menuDrawer"}},[n("v-btn",{attrs:{depressed:""},on:{click:function(e){t.menuDrawer=!1}}},[t._v(" 閉じる ")]),t._v(" "),t.isPcDesign?n("v-subheader",[t._v("オプション")]):t._e(),t._v(" "),t.isPcDesign?n("editor-option",{on:{uploadMarkdown:t.uploadMarkdown,DownloadText:function(e){return t.editor.downloadTextFile()},ClipboardCopy:function(e){return t.editor.clipboardCopy()},HTMLText:function(e){return t.editor.downloadHtmlFile()},Code:function(e){return t.editor.changeCode()}}}):t._e(),t._v(" "),t.isPcDesign?n("v-divider"):t._e(),t._v(" "),n("v-subheader",[t._v("文章内の文字数")]),t._v(" "),n("div",{staticClass:"pb-4 px-4"},[t._v(t._s(t.editor.textCount)+" 文字")]),t._v(" "),n("v-divider"),t._v(" "),n("v-subheader",[t._v("文章校正")]),t._v(" "),n("text-lint-block",{attrs:{value:t.editor.text},on:{pushPoint:t.textLintPushPoint}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;D()(component,{EditorOption:n(490).default}),D()(component,{VBtn:P.a,VCol:E.a,VDivider:B.a,VRow:O.a,VSubheader:T.a})},501:function(t,e,n){"use strict";n.r(e);n(301);var o=n(1),r=n(224),l=n(98),c=o.a.extend({name:"ToolBar",components:{MenuCard:r.default},data:function(){return{link:"",linkMenu:!1,isPcDesign:!0}},mounted:function(){this.isPcDesign=l.a.isPcDesign()},methods:{saveLink:function(){this.$emit("Link",this.link),this.linkMenu=!1,this.link=""}}}),d=n(32),m=n(41),f=n.n(m),v=n(483),h=n(211),k=n(213),x=n(134),_=n(486),w=n(478),y=n(534),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"my-2",attrs:{text:"",small:t.isPcDesign,"x-small":!t.isPcDesign}},"v-btn",r,!1),o),[n("v-icon",{staticClass:"toolbar-icons",attrs:{small:!t.isPcDesign}},[t._v("mdi-format-header-pound")])],1)]}}])},[t._v(" "),n("menu-card",[n("v-list",{attrs:{dense:"",subheader:""}},[n("v-list-item",{staticClass:"format-size-1",on:{click:function(e){return t.$emit("FormatSize",1)}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-format-header-1")]),t._v("\n          見出し1\n        ")],1),t._v(" "),n("v-list-item",{staticClass:"format-size-2",on:{click:function(e){return t.$emit("FormatSize",2)}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-format-header-2")]),t._v("\n          見出し2\n        ")],1),t._v(" "),n("v-list-item",{staticClass:"format-size-3",on:{click:function(e){return t.$emit("FormatSize",3)}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-format-header-3")]),t._v("\n          見出し3\n        ")],1),t._v(" "),n("v-list-item",{staticClass:"format-size-4",on:{click:function(e){return t.$emit("FormatSize",4)}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-format-header-4")]),t._v("\n          見出し4\n        ")],1),t._v(" "),n("v-list-item",{staticClass:"format-size-4",on:{click:function(e){return t.$emit("FormatSize",0)}}},[t._v("\n          通常\n        ")])],1)],1)],1),t._v(" "),n("v-btn",{staticClass:"my-2",attrs:{text:"",small:t.isPcDesign,"x-small":!t.isPcDesign},on:{click:function(e){return t.$emit("Bold")}}},[n("v-icon",{staticClass:"toolbar-icons",attrs:{small:!t.isPcDesign}},[t._v("mdi-format-bold")])],1),t._v(" "),n("v-btn",{staticClass:"my-2",attrs:{text:"",small:t.isPcDesign,"x-small":!t.isPcDesign},on:{click:function(e){return t.$emit("Italic")}}},[n("v-icon",{staticClass:"toolbar-icons",attrs:{small:!t.isPcDesign}},[t._v("mdi-format-italic")])],1),t._v(" "),n("v-btn",{staticClass:"my-2",attrs:{text:"",small:t.isPcDesign,"x-small":!t.isPcDesign},on:{click:function(e){return t.$emit("Underline")}}},[n("v-icon",{staticClass:"toolbar-icons",attrs:{small:!t.isPcDesign}},[t._v("mdi-format-underline")])],1),t._v(" "),n("v-btn",{staticClass:"my-2",attrs:{text:"",small:t.isPcDesign,"x-small":!t.isPcDesign},on:{click:function(e){return t.$emit("ListBullet")}}},[n("v-icon",{staticClass:"toolbar-icons",attrs:{small:!t.isPcDesign}},[t._v("mdi-format-list-bulleted")])],1),t._v(" "),n("v-btn",{staticClass:"my-2",attrs:{text:"",small:t.isPcDesign,"x-small":!t.isPcDesign},on:{click:function(e){return t.$emit("ListOrdered")}}},[n("v-icon",{staticClass:"toolbar-icons",attrs:{small:!t.isPcDesign}},[t._v("mdi-format-list-numbered")])],1),t._v(" "),n("v-btn",{staticClass:"my-2",attrs:{text:"",small:t.isPcDesign,"x-small":!t.isPcDesign},on:{click:function(e){return t.$emit("Quote")}}},[n("v-icon",{staticClass:"toolbar-icons",attrs:{small:!t.isPcDesign}},[t._v("mdi-format-quote-close")])],1),t._v(" "),n("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"my-2",attrs:{text:"",small:t.isPcDesign,"x-small":!t.isPcDesign}},"v-btn",r,!1),o),[n("v-icon",{staticClass:"toolbar-icons",attrs:{small:!t.isPcDesign}},[t._v("mdi-link")])],1)]}}]),model:{value:t.linkMenu,callback:function(e){t.linkMenu=e},expression:"linkMenu"}},[t._v(" "),n("menu-card",[n("v-text-field",{attrs:{outlined:"",label:"URL"},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}}),t._v(" "),n("v-btn",{attrs:{depressed:"",block:""},on:{click:function(e){return t.saveLink()}}},[t._v("保存")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VIcon:h.a,VList:k.a,VListItem:x.a,VMenu:_.a,VRow:w.a,VTextField:y.a})},502:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(487),l=o.a.extend({name:"TextLintBlock",components:{TextLint:r.default},props:{value:{type:String,default:"",required:!1}},data:function(){return{lintResults:[]}},methods:{getLintResult:function(t){this.lintResults=t},pushLintResultPoint:function(line,t){this.$emit("pushPoint",line,t)}}}),c=n(32),d=n(41),m=n.n(d),f=n(483),v=n(213),h=n(134),k=n(214),x=n(83),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("client-only",[n("text-lint",{attrs:{value:t.value},on:{result:t.getLintResult}})],1),t._v(" "),n("v-list",t._l(t.lintResults,(function(e,o){return n("v-list-item",{key:o},[n("v-list-item-action",[n("v-btn",{attrs:{depressed:"",small:""},on:{click:function(n){return t.pushLintResultPoint(e.line,e.column)}}},[t._v("\n          "+t._s(e.line)+"行目"+t._s(e.column)+"文字目\n        ")])],1),t._v(" "),n("v-list-item-content",[t._v("\n        "+t._s(e.message)+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VList:v.a,VListItem:h.a,VListItemAction:k.a,VListItemContent:x.a})},503:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(487),l=o.a.extend({components:{TextLint:r.default},name:"TextEditor",data:function(){return{text:"",lintResult:[]}},methods:{callbackLintResult:function(t){this.lintResult=t}}}),c=n(32),d=n(41),m=n.n(d),f=n(547),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-textarea",{attrs:{outlined:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),n("no-ssr",[n("text-lint",{attrs:{value:t.text},on:{result:t.callbackLintResult}})],1),t._v(" "),t._l(t.lintResult,(function(e,o){return n("div",{key:o},[t._v("\n    "+t._s(e)+"\n  ")])}))],2)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VTextarea:f.a})},504:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({name:"MenuDrawers",props:{value:{type:Boolean,default:!1,required:!1}},data:function(){return{drawer:!1}},watch:{value:function(){this.drawer=this.value},drawer:function(){this.$emit("input",this.drawer)}}}),r=(n(493),n(32)),l=n(41),c=n.n(l),d=n(484),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{staticClass:"navigation-drawer-wrap px-2 pt-2",attrs:{"disable-resize-watcher":"",fixed:"",app:"",right:"",width:"500"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._t("default")],2)}),[],!1,null,"2f0f71ae",null);e.default=component.exports;c()(component,{VNavigationDrawer:d.a})},506:function(t,e,n){"use strict";n(491)},507:function(t,e,n){var o=n(15)(!1);o.push([t.i,'.ql-container{width:100%;-webkit-overflow-scrolling:touch;border:none!important}.ql-container .ql-editor{font-family:"游ゴシック体",YuGothic,"游ゴシック Medium","Yu Gothic Medium","游ゴシック","Yu Gothic",Arial,Roboto,Droid Sans,"メイリオ",sans-serif;font-weight:500;color:#333}.ql-container .ql-editor h1{font-size:1.7rem;line-height:1.7rem;padding-top:1.5rem;padding-bottom:1.5rem}.ql-container .ql-editor h2{padding-top:.5rem;padding-bottom:1rem;border-bottom:1px solid #777;font-size:1.5rem;line-height:1.5rem;margin-top:2rem;margin-bottom:2rem}.ql-container .ql-editor h3{padding:.5rem;border-left:2px solid #777;margin-top:2rem;margin-bottom:2rem;font-size:1.3rem;line-height:1.3rem;font-weight:500}[dir=ltr] .ql-container .ql-editor p{margin-left:0}[dir=ltr] .ql-container .ql-editor p,[dir=rtl] .ql-container .ql-editor p{margin-right:0}[dir=rtl] .ql-container .ql-editor p{margin-left:0}.ql-container .ql-editor p{display:block;margin-top:1em;margin-bottom:1em}.ql-container .ql-editor a{text-decoration:none!important}.ql-container .ql-editor a:hover{text-decoration:underline!important}.ql-container .ql-editor img{display:block;margin-left:auto;margin-right:auto;height:auto;max-width:100%}.ql-container .ql-editor ol,.ql-container .ql-editor ul{padding-top:20px;padding-bottom:20px}.ql-container .ql-editor li{line-height:2.2rem;list-style-type:none!important;padding-left:1.5em}.ql-container .ql-editor ul li:before{position:absolute;margin-left:-1.5em;color:#333}.ql-container .ql-editor ol{counter-reset:number;padding-left:1.5em}.ql-container .ql-editor ol li:before{position:absolute;counter-increment:number;content:counter(number);color:#333;font-weight:700;margin-left:-1.5em}.ql-container .ql-editor blockquote:before{color:#cfcfcf;font-size:15px;line-height:1;font-weight:900;margin-right:20px}.ql-container .ql-editor blockquote{padding-top:20px;padding-bottom:20px;margin:10px 0;line-height:1.7rem;color:#777;font-style:italic}.ql-container .ql-editor blockquote cite{display:block;text-align:right;color:#888;font-size:.9em}.theme--dark .ql-container{caret-color:#fff}.theme--dark .ql-container h2{border-bottom:1px solid #fff}.theme--dark .ql-container h3{border-left:2px solid #fff}.theme--dark .ql-container .ql-editor,.theme--dark .ql-container ol li:before,.theme--dark .ql-container ul li:before{color:#fff}.theme--dark .ql-container code{background-color:#606060!important}.tool-bar-wrap{background-color:#f5f5f5;padding:20px;border:1px solid rgba(0,0,0,.12);border-top-left-radius:5px;border-top-right-radius:5px}.text-editor-wrap{border:1px solid rgba(0,0,0,.12);border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.sticy-block{position:-webkit-sticky;position:sticky;top:-3px;z-index:1}.theme--dark .tool-bar-wrap{background-color:#212121;border:1px solid hsla(0,0%,100%,.12)}.theme--dark .text-editor-wrap{border:1px solid hsla(0,0%,100%,.12);border-top:none}',""]),t.exports=o}}]);