(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(t,e,r){var content=r(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("77d6318b",content,!0,{sourceMap:!1})},194:function(t,e,r){var content=r(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("106f1e8e",content,!0,{sourceMap:!1})},195:function(t,e,r){"use strict";var n={computed:{noFrameColors:function(){return this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1}},props:{label:{type:String,default:"Section"},collapsed:{type:Boolean}},methods:{collapse:function(t){t.target.parentNode.querySelector(".collapsible").classList.toggle("hidden")}}},o=(r(196),r(13)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{class:{"no-colored-frames":t.noFrameColors},attrs:{id:t.label.toLowerCase()}},[r("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[t._v(t._s(t.label)+" ↕")]),t._v(" "),r("div",{staticClass:"collapsible",class:{hidden:t.collapsed}},[t._t("default")],2)])},[],!1,null,null,null);e.a=component.exports},196:function(t,e,r){"use strict";var n=r(193);r.n(n).a},197:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"fieldset.no-colored-frames{border-color:#afafaf!important}fieldset.no-colored-frames legend{color:var(--ac-color)}",""])},199:function(t,e,r){"use strict";var n=r(194);r.n(n).a},200:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"div[data-v-02e4fb42]{display:inline-block}label.caption[data-v-02e4fb42]{margin-left:4px;vertical-align:middle}label.toggle[data-v-02e4fb42]{position:relative;width:50px;height:20px;border:2px solid var(--fg-color);background-color:transparent;vertical-align:middle;border-radius:100px;box-sizing:content-box;box-sizing:initial;padding:0;margin:10px 5px}label.toggle[data-v-02e4fb42],label.toggle .handle[data-v-02e4fb42]{display:inline-block;transition:all .2s ease-in-out}label.toggle .handle[data-v-02e4fb42]{position:absolute;top:0;bottom:0;left:0;margin:4px;background-color:var(--fg-color);width:12px;height:12px;border-radius:100px;pointer-events:none;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}label.toggle.on[data-v-02e4fb42]{background-color:var(--ac-color);border-color:var(--ac-color)}label.toggle.on .handle[data-v-02e4fb42]{background-color:var(--act-color);left:30px}",""])},202:function(t,e,r){var content=r(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("0b59a911",content,!0,{sourceMap:!1})},203:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("733df90e",content,!0,{sourceMap:!1})},204:function(t,e,r){"use strict";var n={props:{on:{type:Boolean,default:!1}},methods:{toggle:function(){this.$refs.toggle.classList.toggle("on"),this.$emit("change",this.$refs.toggle.classList.contains("on"))}}},o=(r(199),r(13)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{on:{click:function(e){return t.toggle()}}},[r("label",{ref:"toggle",staticClass:"toggle",class:{on:t.on}},[r("span",{staticClass:"handle"})]),t._v(" "),r("label",{staticClass:"caption"},[t._t("default")],2)])},[],!1,null,"02e4fb42",null);e.a=component.exports},209:function(t,e,r){"use strict";var n=r(7),o=r(210)(5),l=!0;"find"in[]&&Array(1).find(function(){l=!1}),n(n.P+n.F*l,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(77)("find")},210:function(t,e,r){var n=r(32),o=r(76),l=r(33),c=r(25),d=r(211);t.exports=function(t,e){var r=1==t,h=2==t,v=3==t,f=4==t,m=6==t,y=5==t||m,_=e||d;return function(e,d,w){for(var x,k,S=l(e),C=o(S),P=n(d,w,3),R=c(C.length),T=0,L=r?_(e,R):h?_(e,0):void 0;R>T;T++)if((y||T in C)&&(k=P(x=C[T],T,S),t))if(r)L[T]=k;else if(k)switch(t){case 3:return!0;case 5:return x;case 6:return T;case 2:L.push(x)}else if(f)return!1;return m?-1:v||f?f:L}}},211:function(t,e,r){var n=r(212);t.exports=function(t,e){return new(n(t))(e)}},212:function(t,e,r){var n=r(10),o=r(115),l=r(3)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[l])&&(e=void 0)),void 0===e?Array:e}},213:function(t,e,r){"use strict";var n=r(202);r.n(n).a},214:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".autocomplete-wrapper[data-v-e31dc662]{position:relative}.autocomplete-wrapper input:focus+ul.suggestions[data-v-e31dc662],.autocomplete-wrapper ul.suggestions[data-v-e31dc662]:hover{display:block}.autocomplete-wrapper ul.suggestions[data-v-e31dc662]{display:none;background-color:var(--atc-color);position:absolute;top:90%;margin:0 4px;left:0;padding:0;border-radius:0 0 4px 4px;z-index:9999;transition:transform .2s ease-out}.autocomplete-wrapper ul.suggestions li[data-v-e31dc662]{width:100%;display:block;margin:5px 0;padding:10px;font-weight:700;font-size:18px;font-family:monospace;white-space:pre-wrap}.autocomplete-wrapper ul.suggestions li.active[data-v-e31dc662],.autocomplete-wrapper ul.suggestions li[data-v-e31dc662]:hover{background-color:var(--ac-color)}",""])},215:function(t,e,r){(function(t){var n,o,l,c,d;function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}c=this,d=function(t,e){"object"===h(e)&&"function"==typeof e.default&&(e=e.default);var r=function(t,e,r){var n;return function(){var o=this,l=arguments,c=function(){n=null,r||t.apply(o,l)},d=r&&!n;clearTimeout(n),n=setTimeout(c,e),d&&t.apply(o,l)}};return e.component(t,{props:{size:{type:Number,required:!0},remain:{type:Number,required:!0},rtag:{type:String,default:"div"},wtag:{type:String,default:"div"},wclass:{type:String,default:""},pagemode:{type:Boolean,default:!1},scrollelement:{type:"undefined"==typeof window?Object:HTMLElement,default:null},start:{type:Number,default:0},offset:{type:Number,default:0},variable:{type:[Function,Boolean],default:!1},bench:{type:Number,default:0},debounce:{type:Number,default:0},totop:{type:[Function,Boolean],default:!1},tobottom:{type:[Function,Boolean],default:!1},onscroll:{type:[Function,Boolean],default:!1},item:{type:Object,default:null},itemcount:{type:Number,default:0},itemprops:{type:Function,default:function(){}}},watch:{size:function(){this.changeProp="size"},remain:function(){this.changeProp="remain"},bench:function(){this.changeProp="bench",this.itemModeForceRender()},start:function(){this.changeProp="start",this.itemModeForceRender()},offset:function(){this.changeProp="offset",this.itemModeForceRender()},itemcount:function(){this.changeProp="itemcount",this.itemModeForceRender()},scrollelement:function(t,e){this.pagemode||(e&&this.removeScrollListener(e),t&&this.addScrollListener(t))}},created:function(){var t=this.start>=this.remain?this.start:0,e=this.remain+(this.bench||this.remain),r=Object.create(null);r.direction="",r.scrollTop=0,r.start=t,r.end=t+e-1,r.keeps=e,r.total=0,r.offsetAll=0,r.paddingTop=0,r.paddingBottom=0,r.varCache={},r.varAverSize=0,r.varLastCalcIndex=0,this.delta=r},mounted:function(){if(this.pagemode?this.addScrollListener(window):this.scrollelement&&this.addScrollListener(this.scrollelement),this.start){var t=this.getZone(this.start).start;this.setScrollTop(this.variable?this.getVarOffset(t):t*this.size)}else this.offset&&this.setScrollTop(this.offset)},beforeDestroy:function(){this.pagemode?this.removeScrollListener(window):this.scrollelement&&this.removeScrollListener(this.scrollelement)},beforeUpdate:function(){var t=this.delta;t.keeps=this.remain+(this.bench||this.remain);var e="start"===this.changeProp?this.start:t.start,r=this.getZone(e);if(this.changeProp&&["start","size","offset"].includes(this.changeProp)){var n="offset"===this.changeProp?this.offset:this.variable?this.getVarOffset(r.isLast?t.total:r.start):r.isLast&&t.total-e<=this.remain?t.total*this.size:e*this.size;this.$nextTick(this.setScrollTop.bind(this,n))}(this.changeProp||t.end!==r.end||e!==r.start)&&(this.changeProp="",t.end=r.end,t.start=r.start,this.forceRender())},methods:{addScrollListener:function(element){this.scrollHandler=this.debounce?r(this.onScroll.bind(this),this.debounce):this.onScroll,element.addEventListener("scroll",this.scrollHandler,!1)},removeScrollListener:function(element){element.removeEventListener("scroll",this.scrollHandler,!1)},onScroll:function(t){var e,r=this.delta,n=this.$refs.vsl;if(this.pagemode)e=-this.$el.getBoundingClientRect().top;else if(this.scrollelement){var o=this.scrollelement.getBoundingClientRect(),l=this.$el.getBoundingClientRect();e=o.top-l.top}else e=(n.$el||n).scrollTop||0;r.direction=e>r.scrollTop?"D":"U",r.scrollTop=e,r.total>r.keeps?this.updateZone(e):r.end=r.total-1;var c=r.offsetAll;if(this.onscroll){var param=Object.create(null);param.offset=e,param.offsetAll=c,param.start=r.start,param.end=r.end,this.onscroll(t,param)}!e&&r.total&&this.fireEvent("totop"),e>=c&&this.fireEvent("tobottom")},updateZone:function(t){var e=this.delta,r=this.variable?this.getVarOvers(t):Math.floor(t/this.size);"U"===e.direction&&(r=r-this.remain+1);var n=this.getZone(r),o=this.bench||this.remain,l=1===Math.abs(r-e.start-o);!l&&r-e.start<=o&&!n.isLast&&r>e.start||(l||n.start!==e.start||n.end!==e.end)&&(e.end=n.end,e.start=n.start,this.forceRender())},getZone:function(t){var e,r=this.delta;t=parseInt(t,10),t=Math.max(0,t);var n=r.total-r.keeps,o=t<=r.total&&t>=n||t>r.total;return{end:(e=o?Math.max(0,n):t)+r.keeps-1,start:e,isLast:o}},forceRender:function(){var t=this;window.requestAnimationFrame(function(){t.$forceUpdate()})},itemModeForceRender:function(){this.item&&this.forceRender()},getVarOvers:function(t){for(var e=0,r=0,n=0,o=this.delta,l=o.total;e<=l;){if(r=e+Math.floor((l-e)/2),n=this.getVarOffset(r),o.varAverSize||(o.varAverSize=Math.floor(n/r)),n===t)return r;n<t?e=r+1:n>t&&(l=r-1)}return e>0?--e:0},getVarOffset:function(t,e){var r=this.delta,n=r.varCache[t];if(!e&&n)return n.offset;for(var o=0,i=0;i<t;i++){var l=this.getVarSize(i,e);r.varCache[i]={size:l,offset:o},o+=l}return r.varLastCalcIndex=Math.max(r.varLastCalcIndex,t-1),r.varLastCalcIndex=Math.min(r.varLastCalcIndex,r.total-1),o},getVarSize:function(t,e){var r=this.delta.varCache[t];if(!e&&r)return r.size;if("function"==typeof this.variable)return this.variable(t)||0;var slot=this.item?this.$children[t]?this.$children[t].$vnode:null:this.$slots.default[t],style=slot&&slot.data&&slot.data.style;if(style&&style.height){var n=style.height.match(/^(.*)px$/);return n&&+n[1]||0}return 0},getVarPaddingTop:function(){return this.getVarOffset(this.delta.start)},getVarPaddingBottom:function(){var t=this.delta,e=t.total-1;return t.total-t.end<=t.keeps||t.varLastCalcIndex===e?this.getVarOffset(e)-this.getVarOffset(t.end):(t.total-t.end)*(t.varAverSize||this.size)},getVarAllHeight:function(){var t=this.delta;return t.total-t.end<=t.keeps||t.varLastCalcIndex===t.total-1?this.getVarOffset(t.total):this.getVarOffset(t.start)+(t.total-t.end)*(t.varAverSize||this.size)},updateVariable:function(t){this.getVarOffset(t,!0)},fireEvent:function(t){this[t]&&this[t]()},setScrollTop:function(t){if(this.pagemode)window.scrollTo(0,t);else if(this.scrollelement)this.scrollelement.scrollTo(0,t);else{var e=this.$refs.vsl;e&&((e.$el||e).scrollTop=t)}},filter:function(t){var e,r,n,o=this.delta,l=this.$slots.default||[];this.item?(o.total=this.itemcount,o.keeps>o.total&&(o.end=o.total-1)):(l.length||(o.start=0),o.total=l.length);var c=o.total>o.keeps;this.variable?(n=this.getVarAllHeight(),e=c?this.getVarPaddingTop():0,r=c?this.getVarPaddingBottom():0):(n=this.size*o.total,e=this.size*(c?o.start:0),r=this.size*(c?o.total-o.keeps:0)-e),r<this.size&&(r=0),o.paddingTop=e,o.paddingBottom=r,o.offsetAll=n-this.size*this.remain;for(var d=[],i=o.start;i<o.total&&i<=Math.ceil(o.end);i++){var slot=null;slot=this.item?t(this.item,this.itemprops(i)):l[i],d.push(slot)}return d}},render:function(t){var e=this.debounce,n=this.filter(t),o=this.delta,l=o.paddingTop,c=o.paddingBottom,d=t(this.wtag,{style:{display:"block","padding-top":l+"px","padding-bottom":c+"px"},class:this.wclass,attrs:{role:"group"}},n);return this.pagemode||this.scrollelement?d:t(this.rtag,{ref:"vsl",style:{display:"block","overflow-y":"auto",height:this.size*this.remain+"px"},on:{"&scroll":e?r(this.onScroll.bind(this),e):this.onScroll}},[d])}})},"object"===h(e)&&"object"===h(t)?t.exports=d("VirtualList",r(0)):(o=[r(0)],n=d.bind(c,"VirtualList"),void 0===(l="function"==typeof n?n.apply(e,o):n)||(t.exports=l))}).call(this,r(118)(t))},216:function(t,e,r){"use strict";var n=r(203);r.n(n).a},217:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".virtual-list [readonly][data-v-248c6b79]{cursor:default}@media (max-width:720px){.virtual-list.filled[data-v-248c6b79]{min-height:430px}}",""])},219:function(t,e,r){"use strict";r.r(e);r(24),r(59);var n=r(29);r(60);function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r(116),r(112),r(113),r(19),r(14);var l,c=r(2),d=(r(31),r(58),r(209),r(78),r(114),r(117),{props:{spellcheck:{type:Boolean,default:!0,required:!1},placeholder:{type:String,default:"Start typing...",required:!1},source:{type:Array,required:!0},value:{}},watch:{value:function(){this.$emit("input",this.value)}},data:function(){return{value:"",selectionStart:0,suggestionsOffsetLeft:0,currentSuggestionIndex:-1,suggestionsVisible:!1}},methods:{updateSuggestions:function(t){if(t.which&&27===t.which)return t.preventDefault(),this.suggestionsVisible=!1,void(this.currentSuggestionIndex=-1);this.selectionStart=this.$refs.acInput.selectionStart,this.suggestionsOffsetLeft=12*this.selectionStart,this.suggestionsVisible=!0},forceSuggestion:function(text){var input=this.value.substring(0,this.selectionStart);this.value=input+text,this.selectionStart=this.value.length,this.suggestionsVisible=!0,this.currentSuggestionIndex=-1},handleKeystroke:function(t){if(38===t.which?(t.preventDefault(),this.currentSuggestionIndex=this.currentSuggestionIndex-1>=0?this.currentSuggestionIndex-1:0):40===t.which&&(t.preventDefault(),this.currentSuggestionIndex=this.currentSuggestionIndex<this.suggestions.length-1?this.currentSuggestionIndex+1:this.suggestions.length-1),9===t.which){t.preventDefault();var e=this.suggestions[this.currentSuggestionIndex>=0?this.currentSuggestionIndex:0];if(e){var input=this.value.substring(0,this.selectionStart);this.value=input+e}}}},computed:{suggestions:function(){var t=this,input=this.value.substring(0,this.selectionStart);return this.source.filter(function(t){return t.toLowerCase().startsWith(input.toLowerCase())&&input.toLowerCase()!==t.toLowerCase()}).map(function(e){return e.substring(t.selectionStart)}).slice(0,3)}},mounted:function(){this.updateSuggestions({target:this.$refs.acInput})}}),h=(r(213),r(13)),v=Object(h.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"autocomplete-wrapper"},[r("label",[t._t("default"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"acInput",attrs:{type:"text",placeholder:t.placeholder,spellcheck:t.spellcheck,autocapitalize:t.spellcheck,autocorrect:t.spellcheck},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.updateSuggestions],keyup:t.updateSuggestions,click:t.updateSuggestions,keydown:t.handleKeystroke}}),t._v(" "),t.suggestions.length>0&&t.suggestionsVisible?r("ul",{staticClass:"suggestions",style:{transform:"translate("+t.suggestionsOffsetLeft+"px, 0)"}},t._l(t.suggestions,function(e,n){return r("li",{class:{active:t.currentSuggestionIndex===n},on:{click:function(r){return r.preventDefault(),t.forceSuggestion(e)}}},[t._v(t._s(e))])}),0):t._e()],2)])},[],!1,null,"e31dc662",null).exports,f=r(215),m=r.n(f),section=r(195),y=function(t,e){return window.localStorage.setItem(t,JSON.stringify(e))},_={components:{"pw-section":section.a,VirtualList:m.a},data:function(){return{history:JSON.parse(window.localStorage.getItem("history"))||[],filterText:"",showFilter:!1,isClearingHistory:!1}},computed:{filteredHistory:function(){var t=this;return this.history.filter(function(e){var r=t.filterText.toLowerCase();return Object.keys(e).some(function(t){var n=e[t];return(n="string"!=typeof n?n.toString():n).toLowerCase().includes(r)})})}},methods:{clearHistory:function(){this.history=[],this.filterText="",this.disableHistoryClearing(),y("history",this.history)},useHistory:function(t){this.$emit("useHistory",t)},findEntryStatus:function(t){return S(t.status)||{className:""}},deleteHistory:function(t){this.history.splice(this.history.indexOf(t),1),0===this.history.length&&(this.filterText=""),y("history",this.history)},addEntry:function(t){this.history.push(t),y("history",this.history)},enableHistoryClearing:function(){this.history&&this.history.length&&(this.isClearingHistory=!0)},disableHistoryClearing:function(){this.isClearingHistory=!1}}},w=(r(216),Object(h.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pw-section",{staticClass:"gray",attrs:{label:"History"}},[r("ul",[r("li",{attrs:{id:"filter-history"}},[r("label",{attrs:{for:"filter-history-input"}},[t._v("Search History")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],attrs:{id:"filter-history-input",type:"text",disabled:0===t.history.length||t.isClearingHistory},domProps:{value:t.filterText},on:{input:function(e){e.target.composing||(t.filterText=e.target.value)}}})])]),t._v(" "),r("virtual-list",{staticClass:"virtual-list",class:{filled:t.filteredHistory.length},attrs:{size:89,remain:Math.min(5,t.filteredHistory.length)}},t._l(t.filteredHistory,function(e,n){return r("ul",{key:n,staticClass:"entry"},[r("li",[r("label",{attrs:{for:"time#"+n}},[t._v("Time")]),t._v(" "),r("input",{attrs:{id:"time#"+n,type:"text",readonly:"",title:e.date},domProps:{value:e.time}})]),t._v(" "),r("li",{staticClass:"method-list-item"},[r("label",{attrs:{for:"time#"+n}},[t._v("Method")]),t._v(" "),r("input",{class:t.findEntryStatus(e).className,style:{"--status-code":e.status},attrs:{id:"method#"+n,type:"text",readonly:""},domProps:{value:e.method}}),t._v(" "),r("span",{staticClass:"entry-status-code"},[t._v(t._s(e.status))])]),t._v(" "),r("li",[r("label",{attrs:{for:"url#"+n}},[t._v("URL")]),t._v(" "),r("input",{attrs:{id:"url#"+n,type:"text",readonly:""},domProps:{value:e.url}})]),t._v(" "),r("li",[r("label",{attrs:{for:"path#"+n}},[t._v("Path")]),t._v(" "),r("input",{attrs:{id:"path#"+n,type:"text",readonly:""},domProps:{value:e.path}})]),t._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"delete-button#"+n}},[t._v(" ")]),t._v(" "),r("button",{attrs:{id:"delete-button#"+n,disabled:t.isClearingHistory},on:{click:function(r){return t.deleteHistory(e)}}},[t._v("\n          Delete\n        ")])]),t._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"use-button#"+n}},[t._v(" ")]),t._v(" "),r("button",{attrs:{id:"use-button#"+n,disabled:t.isClearingHistory},on:{click:function(r){return t.useHistory(e)}}},[t._v("\n          Use\n        ")])])])}),0),t._v(" "),r("ul",{class:{hidden:0!=t.filteredHistory.length||0===t.history.length}},[r("li",[r("label",[t._v('Nothing found for "'+t._s(t.filterText)+'"')])])]),t._v(" "),r("ul",[t.isClearingHistory?r("li",[r("div",{staticClass:"flex-wrap"},[r("label",{attrs:{for:"clear-history-button"}},[t._v("Are you sure?")]),t._v(" "),r("div",[r("button",{attrs:{id:"confirm-clear-history-button"},on:{click:t.clearHistory}},[t._v("\n            Yes\n          ")]),t._v(" "),r("button",{attrs:{id:"reject-clear-history-button"},on:{click:t.disableHistoryClearing}},[t._v("\n            No\n          ")])])])]):r("li",[r("button",{attrs:{id:"clear-history-button",disabled:0===t.history.length},on:{click:t.enableHistoryClearing}},[t._v("\n        Clear History\n      ")])])])],1)},[],!1,null,"248c6b79",null).exports),x=r(204),k=[{name:"informational",statusCodeRegex:new RegExp(/[1][0-9]+/),className:"info-response"},{name:"successful",statusCodeRegex:new RegExp(/[2][0-9]+/),className:"success-response"},{name:"redirection",statusCodeRegex:new RegExp(/[3][0-9]+/),className:"redir-response"},{name:"client error",statusCodeRegex:new RegExp(/[4][0-9]+/),className:"cl-error-response"},{name:"server error",statusCodeRegex:new RegExp(/[5][0-9]+/),className:"sv-error-response"},{name:"unknown",statusCodeRegex:new RegExp(/.*/),className:"missing-data-response"}],S=function(t){return k.find(function(e){return e.statusCodeRegex.test(t)})},C={directives:{textareaAutoHeight:{name:"textareaAutoHeight",update:function(element){element.scrollHeight!==element.clientHeight&&(element.style.minHeight="".concat(element.scrollHeight,"px"))}}},components:{"pw-section":section.a,"pw-toggle":x.a,history:w,autocomplete:v},data:function(){return{method:"GET",url:"https://reqres.in",auth:"None",path:"/api/users",httpUser:"",httpPassword:"",bearerToken:"",headers:[],params:[],bodyParams:[],rawParams:"",rawInput:!1,contentType:"application/json",response:{status:"",headers:"",body:""},previewEnabled:!1,knownContentTypes:["application/json","application/x-www-form-urlencoded"],validContentTypes:["application/json","application/hal+json","application/xml","application/x-www-form-urlencoded","text/html","text/plain"]}},watch:{contentType:function(t){this.rawInput=!this.knownContentTypes.includes(t)}},computed:{statusCategory:function(){return S(this.response.status)},isValidURL:function(){var t=new RegExp("^(https?:\\/\\/)?(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"),e=new RegExp("^(https?:\\/\\/)?(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$");return t.test(this.url)||e.test(this.url)},hasRequestBody:function(){return["POST","PUT","PATCH"].includes(this.method)},rawRequestBody:function(){var t=this.bodyParams;if("application/json"!==this.contentType)return t.filter(function(t){return!!t.key}).map(function(t){var e=t.key,r=t.value;return"".concat(e,"=").concat(encodeURIComponent(r))}).join("&");try{var e=JSON.parse("{".concat(t.filter(function(t){return!!t.key}).map(function(t){var e=t.key,r=t.value;return'\n            "'.concat(e,'": "').concat(r,'"\n            ')}).join(),"}"));return JSON.stringify(e)}catch(t){return"invalid"}},headerString:function(){var t=this.headers.filter(function(t){return!!t.key}).map(function(t){var e=t.key,r=t.value;return"".concat(e,": ").concat(r)}).join(",\n");return""==t?"":"".concat(t)},queryString:function(){var t=this.params.filter(function(t){return!!t.key}).map(function(t){var e=t.key,r=t.value;return"".concat(e,"=").concat(encodeURIComponent(r))}).join("&");return""===t?"":"?".concat(t)},responseType:function(){return(this.response.headers["content-type"]||"").split(";")[0].toLowerCase()}},methods:{handleUseHistory:function(t){var e=t.method,r=t.url,path=t.path;this.method=e,this.url=r,this.path=path,this.$refs.request.$el.scrollIntoView({behavior:"smooth"})},sendRequest:(l=Object(c.a)(regeneratorRuntime.mark(function t(){var e,r,n,o,l,c=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isValidURL){t.next=3;break}return alert("Please check the formatting of the URL."),t.abrupt("return");case 3:return this.$nuxt.$loading.start(),this.$refs.response.$el.classList.contains("hidden")&&this.$refs.response.$el.classList.toggle("hidden"),this.$refs.response.$el.scrollIntoView({behavior:"smooth"}),this.previewEnabled=!1,this.response.status="Fetching...",this.response.body="Loading...",e="Basic"===this.auth?{username:this.httpUser,password:this.httpPassword}:null,r={},this.hasRequestBody&&(n=this.rawInput?this.rawParams:this.rawRequestBody,Object.assign(r,{"Content-Type":"".concat(this.contentType,"; charset=utf-8")})),"Bearer Token"===this.auth&&(r.Authorization="Bearer ".concat(this.bearerToken)),r=Object.assign(Object.assign({},this.headers),r),t.prev=14,t.next=17,this.$axios({method:this.method,url:this.url+this.path+this.queryString,auth:e,headers:r,data:n?n.toString():null});case 17:o=t.sent,function(){var t=c.response.status=o.status,e=(c.response.headers=o.headers,c.response.body=o.data,{status:t,date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString(),method:c.method,url:c.url,path:c.path});c.$refs.historyComponent.addEntry(e)}(),t.next=32;break;case 21:if(t.prev=21,t.t0=t.catch(14),!t.t0.response){t.next=30;break}return this.response.headers=t.t0.response.headers,this.response.status=t.t0.response.status,this.response.body=t.t0.response.data,l={status:this.response.status,date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString(),method:this.method,url:this.url,path:this.path},this.$refs.historyComponent.addEntry(l),t.abrupt("return");case 30:this.response.status=t.t0.message,this.response.body="See JavaScript console (F12) for details.";case 32:case"end":return t.stop()}},t,this,[[14,21]])})),function(){return l.apply(this,arguments)}),addRequestHeader:function(){return this.headers.push({key:"",value:""}),!1},removeRequestHeader:function(t){this.headers.splice(t,1)},addRequestParam:function(){return this.params.push({key:"",value:""}),!1},removeRequestParam:function(t){this.params.splice(t,1)},addRequestBodyParam:function(){return this.bodyParams.push({key:"",value:""}),!1},removeRequestBodyParam:function(t){this.bodyParams.splice(t,1)},formatRawParams:function(t){if(13===t.which||9===t.which){var e=t.target.value,r=e.substring(0,t.target.selectionStart),n=e.substring(t.target.selectionEnd);if(13===t.which){t.preventDefault();var o=t.target.selectionStart,l=r.split("\n").slice(-1)[0].match(/([\s\t]*).*/)[1]||"";t.target.value=r+"\n"+l+n,setTimeout(function(){return t.target.selectionStart=t.target.selectionEnd=o+l.length+1},1)}else if(9===t.which){t.preventDefault();var c=t.target.selectionStart;return t.target.value=r+"  "+n,t.target.selectionStart=t.target.selectionEnd=c+2,!1}}},copyRequest:function(){var t=document.createElement("input");document.body.appendChild(t),t.value=window.location.href,t.select(),document.execCommand("copy"),document.body.removeChild(t)},copyResponse:function(){document.getElementById("response-details").select(),document.execCommand("copy")},togglePreview:function(){if(this.previewEnabled=!this.previewEnabled,this.previewEnabled&&"text/html"===this.responseType){if(this.$refs.previewFrame.getAttribute("data-previewing-url")===this.url)return;var t=(new DOMParser).parseFromString(this.response.body,this.responseType);t.head.innerHTML='<base href="'.concat(this.url,'">')+t.head.innerHTML,this.$refs.previewFrame.srcdoc=t.documentElement.outerHTML,this.$refs.previewFrame.setAttribute("data-previewing-url",this.url)}},setRouteQueryState:function(){var t=this,e=["method","url","path","auth","httpUser","httpPassword","bearerToken","contentType"].map(function(e){return""!==t[r=e]?"".concat(r,"=").concat(t[r],"&"):"";var r}),r=["headers","params","bodyParams"].map(function(e){return o(t[r=e]).length&&""!==t[r].value?"".concat(r,"=").concat(JSON.stringify(t[r]),"&"):"";var r});this.$router.replace("/?"+e.concat(r).join("").slice(0,-1))},setRouteQueries:function(t){if("object"!==Object(n.a)(t))throw new Error("Route query parameters must be a Object");for(var e in t)"headers"===e||"params"===e||"bodyParams"===e?this[e]=JSON.parse(t[e]):"string"==typeof this[e]&&(this[e]=t[e])},observeRequestButton:function(){var t=this.$refs.request.$el,e=this.$refs.sendButton;new IntersectionObserver(function(t,r){t.forEach(function(t){e.classList.toggle("show")})},{threshold:1}).observe(t)}},mounted:function(){this.observeRequestButton()},created:function(){var t=this;Object.keys(this.$route.query).length&&this.setRouteQueries(this.$route.query),this.$watch(function(t){return[t.method,t.url,t.auth,t.path,t.httpUser,t.httpPassword,t.bearerToken,t.headers,t.params,t.bodyParams,t.contentType]},function(e){t.setRouteQueryState()})}};r.d(e,"findStatusGroup",function(){return S});var P=Object(h.a)(C,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("pw-section",{ref:"request",staticClass:"blue",attrs:{label:"Request"}},[r("ul",[r("li",[r("label",{attrs:{for:"method"}},[t._v("Method")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.method,expression:"method"}],attrs:{id:"method"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.method=e.target.multiple?r:r[0]}}},[r("option",[t._v("GET")]),t._v(" "),r("option",[t._v("HEAD")]),t._v(" "),r("option",[t._v("POST")]),t._v(" "),r("option",[t._v("PUT")]),t._v(" "),r("option",[t._v("DELETE")]),t._v(" "),r("option",[t._v("OPTIONS")]),t._v(" "),r("option",[t._v("PATCH")])])]),t._v(" "),r("li",[r("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:{error:!t.isValidURL},attrs:{id:"url",type:"url"},domProps:{value:t.url},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.isValidURL&&t.sendRequest()},input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),r("li",[r("label",{attrs:{for:"path"}},[t._v("Path")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{id:"path"},domProps:{value:t.path},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.isValidURL&&t.sendRequest()},input:function(e){e.target.composing||(t.path=e.target.value)}}})]),t._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"action"}},[t._v(" ")]),t._v(" "),r("button",{ref:"sendButton",staticClass:"show",attrs:{disabled:!t.isValidURL,id:"action",name:"action"},on:{click:t.sendRequest}},[t._v("\n          Send "),r("span",{attrs:{id:"hidden-message"}},[t._v("Again")])])])])]),t._v(" "),"POST"===t.method||"PUT"===t.method||"PATCH"===t.method?r("pw-section",{staticClass:"blue-dark",attrs:{label:"Request Body"}},[r("ul",[r("li",[r("autocomplete",{attrs:{source:t.validContentTypes,spellcheck:!1},model:{value:t.contentType,callback:function(e){t.contentType=e},expression:"contentType"}},[t._v("Content Type\n        ")]),t._v(" "),r("span",[r("pw-toggle",{attrs:{on:t.rawInput},on:{change:function(e){t.rawInput=!t.rawInput}}},[t._v("\n            Raw input "+t._s(t.rawInput?"enabled":"disabled")+"\n          ")])],1)],1)]),t._v(" "),t.rawInput?r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawParams,expression:"rawParams"},{name:"textarea-auto-height",rawName:"v-textarea-auto-height",value:t.rawParams,expression:"rawParams"}],staticStyle:{"font-family":"monospace"},attrs:{rows:"16"},domProps:{value:t.rawParams},on:{keydown:t.formatRawParams,input:function(e){e.target.composing||(t.rawParams=e.target.value)}}})]):r("div",[t._l(t.bodyParams,function(param,e){return r("ol",[r("li",[r("label",{attrs:{for:"bparam"+e}},[t._v("Key "+t._s(e+1))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:param.key,expression:"param.key"}],attrs:{name:"bparam"+e},domProps:{value:param.key},on:{input:function(e){e.target.composing||t.$set(param,"key",e.target.value)}}})]),t._v(" "),r("li",[r("label",{attrs:{for:"bvalue"+e}},[t._v("Value "+t._s(e+1))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:param.value,expression:"param.value"}],attrs:{name:"bvalue"+e},domProps:{value:param.value},on:{input:function(e){e.target.composing||t.$set(param,"value",e.target.value)}}})]),t._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"request"}},[t._v(" ")]),t._v(" "),r("button",{attrs:{name:"request"},on:{click:function(r){return t.removeRequestBodyParam(e)}}},[t._v("Remove")])])])}),t._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"addrequest"}},[t._v("Action")]),t._v(" "),r("button",{attrs:{name:"addrequest"},on:{click:t.addRequestBodyParam}},[t._v("Add")])])]),t._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"request"}},[t._v("Parameter List")]),t._v(" "),r("textarea",{directives:[{name:"textarea-auto-height",rawName:"v-textarea-auto-height",value:t.rawRequestBody,expression:"rawRequestBody"}],attrs:{name:"request",readonly:"",rows:"1"}},[t._v(t._s(t.rawRequestBody||"(add at least one parameter)"))])])])],2)]):t._e(),t._v(" "),r("pw-section",{ref:"response",staticClass:"purple",attrs:{id:"response",label:"Response"}},[r("ul",[r("li",[r("label",{attrs:{for:"status"}},[t._v("status")]),t._v(" "),r("input",{class:t.statusCategory?t.statusCategory.className:"",attrs:{name:"status",readonly:"",type:"text"},domProps:{value:t.response.status||"(waiting to send request)"}})])]),t._v(" "),t._l(t.response.headers,function(e,n){return r("ul",[r("li",[r("label",{attrs:{for:"value"}},[t._v(t._s(n))]),t._v(" "),r("input",{attrs:{name:"value",readonly:""},domProps:{value:e}})])])}),t._v(" "),t.response.body?r("ul",[r("li",[r("div",{staticClass:"flex-wrap"},[r("label",{attrs:{for:"body"}},[t._v("response")]),t._v(" "),r("div",[t.isValidURL?r("button",{staticClass:"block",attrs:{name:"copyRequest"},on:{click:t.copyRequest}},[t._v("Copy Request URL")]):t._e(),t._v(" "),t.response.body?r("button",{attrs:{name:"copyResponse"},on:{click:t.copyResponse}},[t._v("Copy Response")]):t._e()])]),t._v(" "),r("div",{attrs:{id:"response-details-wrapper"}},[r("textarea",{attrs:{id:"response-details",name:"body",readonly:"",rows:"16"}},[t._v(t._s(t.response.body||"(waiting to send request)"))]),t._v(" "),r("iframe",{ref:"previewFrame",staticClass:"covers-response",class:{hidden:!t.previewEnabled},attrs:{src:"about:blank"}})]),t._v(" "),t.response.body&&"text/html"===t.responseType?r("div",{staticClass:"align-right"},[r("button",{on:{click:function(e){return e.preventDefault(),t.togglePreview(e)}}},[t._v(t._s(t.previewEnabled?"Hide Preview":"Preview HTML"))])]):t._e()])]):t._e()],2),t._v(" "),r("pw-section",{staticClass:"green",attrs:{collapsed:"",label:"Authentication"}},[r("ul",[r("li",[r("label",{attrs:{for:"auth"}},[t._v("Authentication Type")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.auth,expression:"auth"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.auth=e.target.multiple?r:r[0]}}},[r("option",[t._v("None")]),t._v(" "),r("option",[t._v("Basic")]),t._v(" "),r("option",[t._v("Bearer Token")])])])]),t._v(" "),"Basic"===t.auth?r("ul",[r("li",[r("label",{attrs:{for:"http_basic_user"}},[t._v("User")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.httpUser,expression:"httpUser"}],domProps:{value:t.httpUser},on:{input:function(e){e.target.composing||(t.httpUser=e.target.value)}}})]),t._v(" "),r("li",[r("label",{attrs:{for:"http_basic_passwd"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.httpPassword,expression:"httpPassword"}],attrs:{type:"password"},domProps:{value:t.httpPassword},on:{input:function(e){e.target.composing||(t.httpPassword=e.target.value)}}})])]):t._e(),t._v(" "),"Bearer Token"===t.auth?r("ul",[r("li",[r("label",{attrs:{for:"bearer_token"}},[t._v("Token")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.bearerToken,expression:"bearerToken"}],domProps:{value:t.bearerToken},on:{input:function(e){e.target.composing||(t.bearerToken=e.target.value)}}})])]):t._e()]),t._v(" "),r("pw-section",{staticClass:"orange",attrs:{collapsed:"",label:"Headers"}},[t._l(t.headers,function(header,e){return r("ol",[r("li",[r("label",{attrs:{for:"header"+e}},[t._v("Key "+t._s(e+1))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:header.key,expression:"header.key"}],attrs:{name:"header"+e},domProps:{value:header.key},on:{input:function(e){e.target.composing||t.$set(header,"key",e.target.value)}}})]),t._v(" "),r("li",[r("label",{attrs:{for:"value"+e}},[t._v("Value "+t._s(e+1))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:header.value,expression:"header.value"}],attrs:{name:"value"+e},domProps:{value:header.value},on:{input:function(e){e.target.composing||t.$set(header,"value",e.target.value)}}})]),t._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"header"}},[t._v(" ")]),t._v(" "),r("button",{attrs:{name:"header"},on:{click:function(r){return t.removeRequestHeader(e)}}},[t._v("Remove")])])])}),t._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"add"}},[t._v("Action")]),t._v(" "),r("button",{attrs:{name:"add"},on:{click:t.addRequestHeader}},[t._v("Add")])])]),t._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"request"}},[t._v("Header List")]),t._v(" "),r("textarea",{directives:[{name:"textarea-auto-height",rawName:"v-textarea-auto-height",value:t.headerString,expression:"headerString"}],ref:"requestTextarea",attrs:{name:"request",readonly:"",rows:"1"}},[t._v(t._s(t.headerString||"(add at least one header)"))])])])],2),t._v(" "),r("pw-section",{staticClass:"cyan",attrs:{collapsed:"",label:"Parameters"}},[t._l(t.params,function(param,e){return r("ol",[r("li",[r("label",{attrs:{for:"param"+e}},[t._v("Key "+t._s(e+1))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:param.key,expression:"param.key"}],attrs:{name:"param"+e},domProps:{value:param.key},on:{input:function(e){e.target.composing||t.$set(param,"key",e.target.value)}}})]),t._v(" "),r("li",[r("label",{attrs:{for:"value"+e}},[t._v("Value "+t._s(e+1))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:param.value,expression:"param.value"}],attrs:{name:"value"+e},domProps:{value:param.value},on:{input:function(e){e.target.composing||t.$set(param,"value",e.target.value)}}})]),t._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"param"}},[t._v(" ")]),t._v(" "),r("button",{attrs:{name:"param"},on:{click:function(r){return t.removeRequestParam(e)}}},[t._v("Remove")])])])}),t._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"add"}},[t._v("Action")]),t._v(" "),r("button",{attrs:{name:"add"},on:{click:t.addRequestParam}},[t._v("Add")])])]),t._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"request"}},[t._v("Parameter List")]),t._v(" "),r("textarea",{directives:[{name:"textarea-auto-height",rawName:"v-textarea-auto-height",value:t.queryString,expression:"queryString"}],attrs:{name:"request",readonly:"",rows:"1"}},[t._v(t._s(t.queryString||"(add at least one parameter)"))])])])],2),t._v(" "),r("history",{ref:"historyComponent",on:{useHistory:t.handleUseHistory}})],1)},[],!1,null,null,null);e.default=P.exports}}]);