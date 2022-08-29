import t from"tiny-emitter";import e from"virtual-scroll";function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}var o=/*#__PURE__*/function(t){var o,i;function n(r){var o,i,n,l,s=void 0===r?{}:r,c=s.lerp,p=void 0===c?.1:c,a=s.smooth,h=void 0===a||a,d=s.direction,f=void 0===d?"vertical":d,v=s.wrapper,u=void 0===v?window:v,w=s.content,g=void 0===w?document.body:w;(l=t.call(this)||this).onWindowResize=function(){l.wrapperWidth=window.innerWidth,l.wrapperHeight=window.innerHeight},l.onWrapperResize=function(t){var e=t[0];if(e){var r=e.contentRect;l.wrapperWidth=r.width,l.wrapperHeight=r.height}},l.onContentResize=function(t){var e=t[0];if(e){var r=e.contentRect;l.contentWidth=r.width,l.contentHeight=r.height}},l.onVirtualScroll=function(t){var e=t.deltaY,r=t.originalEvent;r.ctrlKey||(l.stopped?r.preventDefault():(l.smooth&&r.preventDefault(),l.targetScroll-=e,l.targetScroll=Math.max(0,Math.min(l.targetScroll,l.limit))))},l.onScroll=function(t){if(!(l.stopped||l.scrolling&&l.smooth)){var e=l.scroll;l.targetScroll=l.scroll=l.wrapperNode[l.scrollProperty],l.velocity=l.scroll-e,l.notify()}},l.wrapperNode=u,l.contentNode=g,l.lerp=p,l.smooth=h,l.direction=f,l.wrapperNode.addEventListener("scroll",l.onScroll,!1);var y=(null==(o=navigator)||null==(i=o.userAgentData)?void 0:i.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return l.virtualScroll=new e({el:l.wrapperNode,firefoxMultiplier:50,mouseMultiplier:y.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),l.virtualScroll.on(l.onVirtualScroll),l.wrapperNode===window?(l.wrapperNode.addEventListener("resize",l.onWindowResize,!1),l.onWindowResize()):(l.wrapperHeight=l.wrapperNode.offsetHeight,l.wrapperWidth=l.wrapperNode.offsetWidth,l.wrapperObserver=new ResizeObserver(l.onWrapperResize),l.wrapperObserver.observe(l.wrapperNode)),l.contentHeight=l.contentNode.offsetHeight,l.contentWidth=l.contentNode.offsetWidth,l.contentObserver=new ResizeObserver(l.onContentResize),l.contentObserver.observe(l.contentNode),l.targetScroll=l.scroll=l.wrapperNode[l.scrollProperty],l.velocity=0,l}i=t,(o=n).prototype=Object.create(i.prototype),o.prototype.constructor=o,r(o,i);var l,s,c=n.prototype;return c.start=function(){this.stopped=!1},c.stop=function(){this.stopped=!0},c.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize,!1),this.wrapperNode.removeEventListener("scroll",this.onScroll,!1),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},c.raf=function(){if(!this.stopped&&this.smooth){var t,e=this.scroll;this.scroll=(1-(t=this.lerp))*this.scroll+t*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=e=this.targetScroll),this.velocity=this.scroll-e,this.scrolling&&(this._scrollTo(this.scroll),this.notify()),this.scrolling=this.scroll!==this.targetScroll}},c._scrollTo=function(t){"horizontal"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)},c.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})},c.scrollTo=function(t,e){var r,o=void 0===e?{}:e,i=o.offset,n=void 0===i?0:i,l=o.immediate,s=void 0!==l&&l;if("number"==typeof t)r=t;else if("top"===t)r=0;else if("bottom"===t)r=this.limit;else{var c;if("string"==typeof t)c=document.querySelector(t);else{if(null==t||!t.nodeType)return;c=t}if(!t)return;var p=0;if(this.wrapperNode!==window){var a=this.wrapperNode.getBoundingClientRect();p="horizontal"===this.direction?a.left:a.top}var h=c.getBoundingClientRect();r=("horizontal"===this.direction?h.left:h.top)+this.scroll-p}this.targetScroll=r+=n,this.scrolling=!0,this.smooth&&!s||(this.scroll=r,this._scrollTo(this.scroll))},l=n,(s=[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}}])&&function(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(l.prototype,s),Object.defineProperty(l,"prototype",{writable:!1}),n}(t);export{o as default};
//# sourceMappingURL=lenis.mjs.map
