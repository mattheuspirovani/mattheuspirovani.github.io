/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

;/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (factory((global.bootstrap = {}),global.jQuery,global.Popper));
}(this, (function (exports,$,Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var TRANSITION_END = 'transitionend';
    var MAX_UID = 1000000;
    var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($$$1(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined; // eslint-disable-line no-undefined
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $$$1(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $$$1.fn.emulateTransitionEnd = transitionEndEmulator;
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */


    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          selector = element.getAttribute('href') || '';
        }

        try {
          return document.querySelector(selector) ? selector : null;
        } catch (err) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var transitionDuration = $$$1(element).css('transition-duration');
        var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $$$1(element).trigger(TRANSITION_END);
      },
      // TODO: Remove in v5
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      }
    };
    setTransitionEndSupport();
    return Util;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'alert';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Selector = {
      DISMISS: '[data-dismiss="alert"]'
    };
    var Event = {
      CLOSE: "close" + EVENT_KEY,
      CLOSED: "closed" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Alert =
    /*#__PURE__*/
    function () {
      function Alert(element) {
        this._element = element;
      } // Getters


      var _proto = Alert.prototype;

      // Public
      _proto.close = function close(element) {
        var rootElement = this._element;

        if (element) {
          rootElement = this._getRootElement(element);
        }

        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // Private


      _proto._getRootElement = function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = document.querySelector(selector);
        }

        if (!parent) {
          parent = $$$1(element).closest("." + ClassName.ALERT)[0];
        }

        return parent;
      };

      _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
        var closeEvent = $$$1.Event(Event.CLOSE);
        $$$1(element).trigger(closeEvent);
        return closeEvent;
      };

      _proto._removeElement = function _removeElement(element) {
        var _this = this;

        $$$1(element).removeClass(ClassName.SHOW);

        if (!$$$1(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);

          return;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(element);
        $$$1(element).one(Util.TRANSITION_END, function (event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(transitionDuration);
      };

      _proto._destroyElement = function _destroyElement(element) {
        $$$1(element).detach().trigger(Event.CLOSED).remove();
      }; // Static


      Alert._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $$$1(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      };

      Alert._handleDismiss = function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      };

      _createClass(Alert, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Alert;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Alert._jQueryInterface;
    $$$1.fn[NAME].Constructor = Alert;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };

    return Alert;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Button = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'button';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.button';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    };
    var Selector = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: 'input',
      ACTIVE: '.active',
      BUTTON: '.btn'
    };
    var Event = {
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Button =
    /*#__PURE__*/
    function () {
      function Button(element) {
        this._element = element;
      } // Getters


      var _proto = Button.prototype;

      // Public
      _proto.toggle = function toggle() {
        var triggerChangeEvent = true;
        var addAriaPressed = true;
        var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];

        if (rootElement) {
          var input = this._element.querySelector(Selector.INPUT);

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && this._element.classList.contains(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = rootElement.querySelector(Selector.ACTIVE);

                if (activeElement) {
                  $$$1(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                return;
              }

              input.checked = !this._element.classList.contains(ClassName.ACTIVE);
              $$$1(input).trigger('change');
            }

            input.focus();
            addAriaPressed = false;
          }
        }

        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName.ACTIVE));
        }

        if (triggerChangeEvent) {
          $$$1(this._element).toggleClass(ClassName.ACTIVE);
        }
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // Static


      Button._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          if (!data) {
            data = new Button(this);
            $$$1(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      };

      _createClass(Button, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Button;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      event.preventDefault();
      var button = event.target;

      if (!$$$1(button).hasClass(ClassName.BUTTON)) {
        button = $$$1(button).closest(Selector.BUTTON);
      }

      Button._jQueryInterface.call($$$1(button), 'toggle');
    }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      var button = $$$1(event.target).closest(Selector.BUTTON)[0];
      $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Button._jQueryInterface;
    $$$1.fn[NAME].Constructor = Button;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Button._jQueryInterface;
    };

    return Button;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Carousel = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'carousel';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.carousel';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    };
    var Direction = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    };
    var Event = {
      SLIDE: "slide" + EVENT_KEY,
      SLID: "slid" + EVENT_KEY,
      KEYDOWN: "keydown" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY,
      TOUCHEND: "touchend" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item'
    };
    var Selector = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Carousel =
    /*#__PURE__*/
    function () {
      function Carousel(element, config) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this._config = this._getConfig(config);
        this._element = $$$1(element)[0];
        this._indicatorsElement = this._element.querySelector(Selector.INDICATORS);

        this._addEventListeners();
      } // Getters


      var _proto = Carousel.prototype;

      // Public
      _proto.next = function next() {
        if (!this._isSliding) {
          this._slide(Direction.NEXT);
        }
      };

      _proto.nextWhenVisible = function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
          this.next();
        }
      };

      _proto.prev = function prev() {
        if (!this._isSliding) {
          this._slide(Direction.PREV);
        }
      };

      _proto.pause = function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if (this._element.querySelector(Selector.NEXT_PREV)) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      };

      _proto.cycle = function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      };

      _proto.to = function to(index) {
        var _this = this;

        this._activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          $$$1(this._element).one(Event.SLID, function () {
            return _this.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

        this._slide(direction, this._items[index]);
      };

      _proto.dispose = function dispose() {
        $$$1(this._element).off(EVENT_KEY);
        $$$1.removeData(this._element, DATA_KEY);
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        if (this._config.keyboard) {
          $$$1(this._element).on(Event.KEYDOWN, function (event) {
            return _this2._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          $$$1(this._element).on(Event.MOUSEENTER, function (event) {
            return _this2.pause(event);
          }).on(Event.MOUSELEAVE, function (event) {
            return _this2.cycle(event);
          });

          if ('ontouchstart' in document.documentElement) {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            $$$1(this._element).on(Event.TOUCHEND, function () {
              _this2.pause();

              if (_this2.touchTimeout) {
                clearTimeout(_this2.touchTimeout);
              }

              _this2.touchTimeout = setTimeout(function (event) {
                return _this2.cycle(event);
              }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
            });
          }
        }
      };

      _proto._keydown = function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            event.preventDefault();
            this.prev();
            break;

          case ARROW_RIGHT_KEYCODE:
            event.preventDefault();
            this.next();
            break;

          default:
        }
      };

      _proto._getItemIndex = function _getItemIndex(element) {
        this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector.ITEM)) : [];
        return this._items.indexOf(element);
      };

      _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === Direction.NEXT;
        var isPrevDirection = direction === Direction.PREV;

        var activeIndex = this._getItemIndex(activeElement);

        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = direction === Direction.PREV ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      };

      _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM));

        var slideEvent = $$$1.Event(Event.SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
        $$$1(this._element).trigger(slideEvent);
        return slideEvent;
      };

      _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE));
          $$$1(indicators).removeClass(ClassName.ACTIVE);

          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

          if (nextIndicator) {
            $$$1(nextIndicator).addClass(ClassName.ACTIVE);
          }
        }
      };

      _proto._slide = function _slide(direction, element) {
        var _this3 = this;

        var activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var directionalClassName;
        var orderClassName;
        var eventDirectionName;

        if (direction === Direction.NEXT) {
          directionalClassName = ClassName.LEFT;
          orderClassName = ClassName.NEXT;
          eventDirectionName = Direction.LEFT;
        } else {
          directionalClassName = ClassName.RIGHT;
          orderClassName = ClassName.PREV;
          eventDirectionName = Direction.RIGHT;
        }

        if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.isDefaultPrevented()) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = $$$1.Event(Event.SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });

        if ($$$1(this._element).hasClass(ClassName.SLIDE)) {
          $$$1(nextElement).addClass(orderClassName);
          Util.reflow(nextElement);
          $$$1(activeElement).addClass(directionalClassName);
          $$$1(nextElement).addClass(directionalClassName);
          var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
          $$$1(activeElement).one(Util.TRANSITION_END, function () {
            $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
            $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
            _this3._isSliding = false;
            setTimeout(function () {
              return $$$1(_this3._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          $$$1(activeElement).removeClass(ClassName.ACTIVE);
          $$$1(nextElement).addClass(ClassName.ACTIVE);
          this._isSliding = false;
          $$$1(this._element).trigger(slidEvent);
        }

        if (isCycling) {
          this.cycle();
        }
      }; // Static


      Carousel._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = _objectSpread({}, Default, $$$1(this).data());

          if (typeof config === 'object') {
            _config = _objectSpread({}, _config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new Carousel(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') {
              throw new TypeError("No method named \"" + action + "\"");
            }

            data[action]();
          } else if (_config.interval) {
            data.pause();
            data.cycle();
          }
        });
      };

      Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $$$1(selector)[0];

        if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
          return;
        }

        var config = _objectSpread({}, $$$1(target).data(), $$$1(this).data());

        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($$$1(target), config);

        if (slideIndex) {
          $$$1(target).data(DATA_KEY).to(slideIndex);
        }

        event.preventDefault();
      };

      _createClass(Carousel, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Carousel;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
    $$$1(window).on(Event.LOAD_DATA_API, function () {
      var carousels = [].slice.call(document.querySelectorAll(Selector.DATA_RIDE));

      for (var i = 0, len = carousels.length; i < len; i++) {
        var $carousel = $$$1(carousels[i]);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Carousel._jQueryInterface;
    $$$1.fn[NAME].Constructor = Carousel;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Carousel._jQueryInterface;
    };

    return Carousel;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'collapse';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.collapse';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Default = {
      toggle: true,
      parent: ''
    };
    var DefaultType = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    var Event = {
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    };
    var Dimension = {
      WIDTH: 'width',
      HEIGHT: 'height'
    };
    var Selector = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Collapse =
    /*#__PURE__*/
    function () {
      function Collapse(element, config) {
        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = $$$1.makeArray(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
        var toggleList = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

        for (var i = 0, len = toggleList.length; i < len; i++) {
          var elem = toggleList[i];
          var selector = Util.getSelectorFromElement(elem);
          var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
            return foundElem === element;
          });

          if (selector !== null && filterElement.length > 0) {
            this._selector = selector;

            this._triggerArray.push(elem);
          }
        }

        this._parent = this._config.parent ? this._getParent() : null;

        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }

        if (this._config.toggle) {
          this.toggle();
        }
      } // Getters


      var _proto = Collapse.prototype;

      // Public
      _proto.toggle = function toggle() {
        if ($$$1(this._element).hasClass(ClassName.SHOW)) {
          this.hide();
        } else {
          this.show();
        }
      };

      _proto.show = function show() {
        var _this = this;

        if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var actives;
        var activesData;

        if (this._parent) {
          actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
            return elem.getAttribute('data-parent') === _this._config.parent;
          });

          if (actives.length === 0) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $$$1(actives).not(this._selector).data(DATA_KEY);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $$$1.Event(Event.SHOW);
        $$$1(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

          if (!activesData) {
            $$$1(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        this._element.style[dimension] = 0;

        if (this._triggerArray.length) {
          $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $$$1(_this._element).trigger(Event.SHOWN);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll" + capitalizedDimension;
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        this._element.style[dimension] = this._element[scrollSize] + "px";
      };

      _proto.hide = function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var startEvent = $$$1.Event(Event.HIDE);
        $$$1(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
        Util.reflow(this._element);
        $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
        var triggerArrayLength = this._triggerArray.length;

        if (triggerArrayLength > 0) {
          for (var i = 0; i < triggerArrayLength; i++) {
            var trigger = this._triggerArray[i];
            var selector = Util.getSelectorFromElement(trigger);

            if (selector !== null) {
              var $elem = $$$1([].slice.call(document.querySelectorAll(selector)));

              if (!$elem.hasClass(ClassName.SHOW)) {
                $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
              }
            }
          }
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);

          $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = '';
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      };

      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, Default, config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._getDimension = function _getDimension() {
        var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      };

      _proto._getParent = function _getParent() {
        var _this3 = this;

        var parent = null;

        if (Util.isElement(this._config.parent)) {
          parent = this._config.parent; // It's a jQuery object

          if (typeof this._config.parent.jquery !== 'undefined') {
            parent = this._config.parent[0];
          }
        } else {
          parent = document.querySelector(this._config.parent);
        }

        var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
        var children = [].slice.call(parent.querySelectorAll(selector));
        $$$1(children).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        return parent;
      };

      _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $$$1(element).hasClass(ClassName.SHOW);

          if (triggerArray.length) {
            $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }; // Static


      Collapse._getTargetFromElement = function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? document.querySelector(selector) : null;
      };

      Collapse._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $$$1(this);
          var data = $this.data(DATA_KEY);

          var _config = _objectSpread({}, Default, $this.data(), typeof config === 'object' && config ? config : {});

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Collapse, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Collapse;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = $$$1(this);
      var selector = Util.getSelectorFromElement(this);
      var selectors = [].slice.call(document.querySelectorAll(selector));
      $$$1(selectors).each(function () {
        var $target = $$$1(this);
        var data = $target.data(DATA_KEY);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Collapse._jQueryInterface;
    $$$1.fn[NAME].Constructor = Collapse;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface;
    };

    return Collapse;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'dropdown';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.dropdown';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
      KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      DROPRIGHT: 'dropright',
      DROPLEFT: 'dropleft',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left',
      POSITION_STATIC: 'position-static'
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
    };
    var AttachmentMap = {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end',
      RIGHT: 'right-start',
      RIGHTEND: 'right-end',
      LEFT: 'left-start',
      LEFTEND: 'left-end'
    };
    var Default = {
      offset: 0,
      flip: true,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    };
    var DefaultType = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Dropdown =
    /*#__PURE__*/
    function () {
      function Dropdown(element, config) {
        this._element = element;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();

        this._addEventListeners();
      } // Getters


      var _proto = Dropdown.prototype;

      // Public
      _proto.toggle = function toggle() {
        if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this._element);

        var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

        Dropdown._clearMenus();

        if (isActive) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
        $$$1(parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        } // Disable totally Popper.js for Dropdown in Navbar


        if (!this._inNavbar) {
          /**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
          if (typeof Popper === 'undefined') {
            throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
          }

          var referenceElement = this._element;

          if (this._config.reference === 'parent') {
            referenceElement = parent;
          } else if (Util.isElement(this._config.reference)) {
            referenceElement = this._config.reference; // Check if it's jQuery element

            if (typeof this._config.reference.jquery !== 'undefined') {
              referenceElement = this._config.reference[0];
            }
          } // If boundary is not `scrollParent`, then set position to `static`
          // to allow the menu to "escape" the scroll parent's boundaries
          // https://github.com/twbs/bootstrap/issues/24251


          if (this._config.boundary !== 'scrollParent') {
            $$$1(parent).addClass(ClassName.POSITION_STATIC);
          }

          this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
          $$$1(document.body).children().on('mouseover', null, $$$1.noop);
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        $$$1(this._menu).toggleClass(ClassName.SHOW);
        $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        $$$1(this._element).off(EVENT_KEY);
        this._element = null;
        this._menu = null;

        if (this._popper !== null) {
          this._popper.destroy();

          this._popper = null;
        }
      };

      _proto.update = function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      }; // Private


      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $$$1(this._element).on(Event.CLICK, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        });
      };

      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, this.constructor.Default, $$$1(this._element).data(), config);
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getMenuElement = function _getMenuElement() {
        if (!this._menu) {
          var parent = Dropdown._getParentFromElement(this._element);

          if (parent) {
            this._menu = parent.querySelector(Selector.MENU);
          }
        }

        return this._menu;
      };

      _proto._getPlacement = function _getPlacement() {
        var $parentDropdown = $$$1(this._element.parentNode);
        var placement = AttachmentMap.BOTTOM; // Handle dropup

        if ($parentDropdown.hasClass(ClassName.DROPUP)) {
          placement = AttachmentMap.TOP;

          if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
            placement = AttachmentMap.TOPEND;
          }
        } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
          placement = AttachmentMap.RIGHT;
        } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
          placement = AttachmentMap.LEFT;
        } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.BOTTOMEND;
        }

        return placement;
      };

      _proto._detectNavbar = function _detectNavbar() {
        return $$$1(this._element).closest('.navbar').length > 0;
      };

      _proto._getPopperConfig = function _getPopperConfig() {
        var _this2 = this;

        var offsetConf = {};

        if (typeof this._config.offset === 'function') {
          offsetConf.fn = function (data) {
            data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets) || {});
            return data;
          };
        } else {
          offsetConf.offset = this._config.offset;
        }

        var popperConfig = {
          placement: this._getPlacement(),
          modifiers: {
            offset: offsetConf,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          } // Disable Popper.js if we have a static display

        };

        if (this._config.display === 'static') {
          popperConfig.modifiers.applyStyle = {
            enabled: false
          };
        }

        return popperConfig;
      }; // Static


      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = typeof config === 'object' ? config : null;

          if (!data) {
            data = new Dropdown(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      Dropdown._clearMenus = function _clearMenus(event) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
          return;
        }

        var toggles = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

        for (var i = 0, len = toggles.length; i < len; i++) {
          var parent = Dropdown._getParentFromElement(toggles[i]);

          var context = $$$1(toggles[i]).data(DATA_KEY);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };

          if (event && event.type === 'click') {
            relatedTarget.clickEvent = event;
          }

          if (!context) {
            continue;
          }

          var dropdownMenu = context._menu;

          if (!$$$1(parent).hasClass(ClassName.SHOW)) {
            continue;
          }

          if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
            continue;
          }

          var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
          $$$1(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            continue;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          if ('ontouchstart' in document.documentElement) {
            $$$1(document.body).children().off('mouseover', null, $$$1.noop);
          }

          toggles[i].setAttribute('aria-expanded', 'false');
          $$$1(dropdownMenu).removeClass(ClassName.SHOW);
          $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
        }
      };

      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        var parent;
        var selector = Util.getSelectorFromElement(element);

        if (selector) {
          parent = document.querySelector(selector);
        }

        return parent || element.parentNode;
      }; // eslint-disable-next-line complexity


      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this);

        var isActive = $$$1(parent).hasClass(ClassName.SHOW);

        if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
          if (event.which === ESCAPE_KEYCODE) {
            var toggle = parent.querySelector(Selector.DATA_TOGGLE);
            $$$1(toggle).trigger('focus');
          }

          $$$1(this).trigger('click');
          return;
        }

        var items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS));

        if (items.length === 0) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // Up
          index--;
        }

        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // Down
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        items[index].focus();
      };

      _createClass(Dropdown, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);

      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($$$1(this), 'toggle');
    }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Dropdown._jQueryInterface;
    $$$1.fn[NAME].Constructor = Dropdown;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };

    return Dropdown;
  }($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'modal';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.modal';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      RESIZE: "resize" + EVENT_KEY,
      CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
      KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
      MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Modal =
    /*#__PURE__*/
    function () {
      function Modal(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = element.querySelector(Selector.DIALOG);
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._scrollbarWidth = 0;
      } // Getters


      var _proto = Modal.prototype;

      // Public
      _proto.toggle = function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      };

      _proto.show = function show(relatedTarget) {
        var _this = this;

        if (this._isTransitioning || this._isShown) {
          return;
        }

        if ($$$1(this._element).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
        }

        var showEvent = $$$1.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });
        $$$1(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();

        this._setScrollbar();

        this._adjustDialog();

        $$$1(document.body).addClass(ClassName.OPEN);

        this._setEscapeEvent();

        this._setResizeEvent();

        $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
          return _this.hide(event);
        });
        $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($$$1(event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this._showElement(relatedTarget);
        });
      };

      _proto.hide = function hide(event) {
        var _this2 = this;

        if (event) {
          event.preventDefault();
        }

        if (this._isTransitioning || !this._isShown) {
          return;
        }

        var hideEvent = $$$1.Event(Event.HIDE);
        $$$1(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;
        var transition = $$$1(this._element).hasClass(ClassName.FADE);

        if (transition) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        $$$1(document).off(Event.FOCUSIN);
        $$$1(this._element).removeClass(ClassName.SHOW);
        $$$1(this._element).off(Event.CLICK_DISMISS);
        $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $$$1(this._element).one(Util.TRANSITION_END, function (event) {
            return _this2._hideModal(event);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          this._hideModal();
        }
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._scrollbarWidth = null;
      };

      _proto.handleUpdate = function handleUpdate() {
        this._adjustDialog();
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._showElement = function _showElement(relatedTarget) {
        var _this3 = this;

        var transition = $$$1(this._element).hasClass(ClassName.FADE);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.scrollTop = 0;

        if (transition) {
          Util.reflow(this._element);
        }

        $$$1(this._element).addClass(ClassName.SHOW);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $$$1.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this3._config.focus) {
            _this3._element.focus();
          }

          _this3._isTransitioning = false;
          $$$1(_this3._element).trigger(shownEvent);
        };

        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
        } else {
          transitionComplete();
        }
      };

      _proto._enforceFocus = function _enforceFocus() {
        var _this4 = this;

        $$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
            _this4._element.focus();
          }
        });
      };

      _proto._setEscapeEvent = function _setEscapeEvent() {
        var _this5 = this;

        if (this._isShown && this._config.keyboard) {
          $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === ESCAPE_KEYCODE) {
              event.preventDefault();

              _this5.hide();
            }
          });
        } else if (!this._isShown) {
          $$$1(this._element).off(Event.KEYDOWN_DISMISS);
        }
      };

      _proto._setResizeEvent = function _setResizeEvent() {
        var _this6 = this;

        if (this._isShown) {
          $$$1(window).on(Event.RESIZE, function (event) {
            return _this6.handleUpdate(event);
          });
        } else {
          $$$1(window).off(Event.RESIZE);
        }
      };

      _proto._hideModal = function _hideModal() {
        var _this7 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._isTransitioning = false;

        this._showBackdrop(function () {
          $$$1(document.body).removeClass(ClassName.OPEN);

          _this7._resetAdjustments();

          _this7._resetScrollbar();

          $$$1(_this7._element).trigger(Event.HIDDEN);
        });
      };

      _proto._removeBackdrop = function _removeBackdrop() {
        if (this._backdrop) {
          $$$1(this._backdrop).remove();
          this._backdrop = null;
        }
      };

      _proto._showBackdrop = function _showBackdrop(callback) {
        var _this8 = this;

        var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

        if (this._isShown && this._config.backdrop) {
          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;

          if (animate) {
            this._backdrop.classList.add(animate);
          }

          $$$1(this._backdrop).appendTo(document.body);
          $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this8._ignoreBackdropClick) {
              _this8._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            if (_this8._config.backdrop === 'static') {
              _this8._element.focus();
            } else {
              _this8.hide();
            }
          });

          if (animate) {
            Util.reflow(this._backdrop);
          }

          $$$1(this._backdrop).addClass(ClassName.SHOW);

          if (!callback) {
            return;
          }

          if (!animate) {
            callback();
            return;
          }

          var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
          $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
        } else if (!this._isShown && this._backdrop) {
          $$$1(this._backdrop).removeClass(ClassName.SHOW);

          var callbackRemove = function callbackRemove() {
            _this8._removeBackdrop();

            if (callback) {
              callback();
            }
          };

          if ($$$1(this._element).hasClass(ClassName.FADE)) {
            var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

            $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }; // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------


      _proto._adjustDialog = function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
      };

      _proto._resetAdjustments = function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      };

      _proto._checkScrollbar = function _checkScrollbar() {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };

      _proto._setScrollbar = function _setScrollbar() {
        var _this9 = this;

        if (this._isBodyOverflowing) {
          // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
          //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
          var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
          var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT)); // Adjust fixed content padding

          $$$1(fixedContent).each(function (index, element) {
            var actualPadding = element.style.paddingRight;
            var calculatedPadding = $$$1(element).css('padding-right');
            $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
          }); // Adjust sticky content margin

          $$$1(stickyContent).each(function (index, element) {
            var actualMargin = element.style.marginRight;
            var calculatedMargin = $$$1(element).css('margin-right');
            $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
          }); // Adjust body padding

          var actualPadding = document.body.style.paddingRight;
          var calculatedPadding = $$$1(document.body).css('padding-right');
          $$$1(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        }
      };

      _proto._resetScrollbar = function _resetScrollbar() {
        // Restore fixed content padding
        var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
        $$$1(fixedContent).each(function (index, element) {
          var padding = $$$1(element).data('padding-right');
          $$$1(element).removeData('padding-right');
          element.style.paddingRight = padding ? padding : '';
        }); // Restore sticky content

        var elements = [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT));
        $$$1(elements).each(function (index, element) {
          var margin = $$$1(element).data('margin-right');

          if (typeof margin !== 'undefined') {
            $$$1(element).css('margin-right', margin).removeData('margin-right');
          }
        }); // Restore body padding

        var padding = $$$1(document.body).data('padding-right');
        $$$1(document.body).removeData('padding-right');
        document.body.style.paddingRight = padding ? padding : '';
      };

      _proto._getScrollbarWidth = function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      }; // Static


      Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = _objectSpread({}, Default, $$$1(this).data(), typeof config === 'object' && config ? config : {});

          if (!data) {
            data = new Modal(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      };

      _createClass(Modal, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Modal;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var _this10 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = document.querySelector(selector);
      }

      var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _objectSpread({}, $$$1(target).data(), $$$1(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // Only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(Event.HIDDEN, function () {
          if ($$$1(_this10).is(':visible')) {
            _this10.focus();
          }
        });
      });

      Modal._jQueryInterface.call($$$1(target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Modal._jQueryInterface;
    $$$1.fn[NAME].Constructor = Modal;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface;
    };

    return Modal;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tooltip = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tooltip';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.tooltip';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var CLASS_PREFIX = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var DefaultType = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)'
    };
    var AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    };
    var Default = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent'
    };
    var HoverState = {
      SHOW: 'show',
      OUT: 'out'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
    };
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    };
    var Trigger = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tooltip =
    /*#__PURE__*/
    function () {
      function Tooltip(element, config) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
        } // private


        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // Protected

        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;

        this._setListeners();
      } // Getters


      var _proto = Tooltip.prototype;

      // Public
      _proto.enable = function enable() {
        this._isEnabled = true;
      };

      _proto.disable = function disable() {
        this._isEnabled = false;
      };

      _proto.toggleEnabled = function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      };

      _proto.toggle = function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $$$1(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $$$1(event.currentTarget).data(dataKey, context);
          }

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      };

      _proto.dispose = function dispose() {
        clearTimeout(this._timeout);
        $$$1.removeData(this.element, this.constructor.DATA_KEY);
        $$$1(this.element).off(this.constructor.EVENT_KEY);
        $$$1(this.element).closest('.modal').off('hide.bs.modal');

        if (this.tip) {
          $$$1(this.tip).remove();
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;

        if (this._popper !== null) {
          this._popper.destroy();
        }

        this._popper = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      };

      _proto.show = function show() {
        var _this = this;

        if ($$$1(this.element).css('display') === 'none') {
          throw new Error('Please use show on visible elements');
        }

        var showEvent = $$$1.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          $$$1(this.element).trigger(showEvent);
          var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }

          var tip = this.getTipElement();
          var tipId = Util.getUID(this.constructor.NAME);
          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);
          this.setContent();

          if (this.config.animation) {
            $$$1(tip).addClass(ClassName.FADE);
          }

          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

          var attachment = this._getAttachment(placement);

          this.addAttachmentClass(attachment);
          var container = this.config.container === false ? document.body : $$$1(document).find(this.config.container);
          $$$1(tip).data(this.constructor.DATA_KEY, this);

          if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
            $$$1(tip).appendTo(container);
          }

          $$$1(this.element).trigger(this.constructor.Event.INSERTED);
          this._popper = new Popper(this.element, tip, {
            placement: attachment,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: Selector.ARROW
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(data) {
              if (data.originalPlacement !== data.placement) {
                _this._handlePopperPlacementChange(data);
              }
            },
            onUpdate: function onUpdate(data) {
              _this._handlePopperPlacementChange(data);
            }
          });
          $$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

          if ('ontouchstart' in document.documentElement) {
            $$$1(document.body).children().on('mouseover', null, $$$1.noop);
          }

          var complete = function complete() {
            if (_this.config.animation) {
              _this._fixTransition();
            }

            var prevHoverState = _this._hoverState;
            _this._hoverState = null;
            $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

            if (prevHoverState === HoverState.OUT) {
              _this._leave(null, _this);
            }
          };

          if ($$$1(this.tip).hasClass(ClassName.FADE)) {
            var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
            $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        }
      };

      _proto.hide = function hide(callback) {
        var _this2 = this;

        var tip = this.getTipElement();
        var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

        var complete = function complete() {
          if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this2._cleanTipClass();

          _this2.element.removeAttribute('aria-describedby');

          $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

          if (_this2._popper !== null) {
            _this2._popper.destroy();
          }

          if (callback) {
            callback();
          }
        };

        $$$1(this.element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        $$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          $$$1(document.body).children().off('mouseover', null, $$$1.noop);
        }

        this._activeTrigger[Trigger.CLICK] = false;
        this._activeTrigger[Trigger.FOCUS] = false;
        this._activeTrigger[Trigger.HOVER] = false;

        if ($$$1(this.tip).hasClass(ClassName.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(tip);
          $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }

        this._hoverState = '';
      };

      _proto.update = function update() {
        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      }; // Protected


      _proto.isWithContent = function isWithContent() {
        return Boolean(this.getTitle());
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $$$1(this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var tip = this.getTipElement();
        this.setElementContent($$$1(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle());
        $$$1(tip).removeClass(ClassName.FADE + " " + ClassName.SHOW);
      };

      _proto.setElementContent = function setElementContent($element, content) {
        var html = this.config.html;

        if (typeof content === 'object' && (content.nodeType || content.jquery)) {
          // Content is a DOM node or a jQuery
          if (html) {
            if (!$$$1(content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($$$1(content).text());
          }
        } else {
          $element[html ? 'html' : 'text'](content);
        }
      };

      _proto.getTitle = function getTitle() {
        var title = this.element.getAttribute('data-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }

        return title;
      }; // Private


      _proto._getAttachment = function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      };

      _proto._setListeners = function _setListeners() {
        var _this3 = this;

        var triggers = this.config.trigger.split(' ');
        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
              return _this3.toggle(event);
            });
          } else if (trigger !== Trigger.MANUAL) {
            var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
            var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
            $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
              return _this3._enter(event);
            }).on(eventOut, _this3.config.selector, function (event) {
              return _this3._leave(event);
            });
          }

          $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
            return _this3.hide();
          });
        });

        if (this.config.selector) {
          this.config = _objectSpread({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      };

      _proto._fixTitle = function _fixTitle() {
        var titleType = typeof this.element.getAttribute('data-original-title');

        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      };

      _proto._enter = function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $$$1(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $$$1(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
        }

        if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
          context._hoverState = HoverState.SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HoverState.SHOW;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      };

      _proto._leave = function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $$$1(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $$$1(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HoverState.OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      };

      _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      };

      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, this.constructor.Default, $$$1(this.element).data(), typeof config === 'object' && config ? config : {});

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getDelegateConfig = function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $$$1(this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length) {
          $tip.removeClass(tabClass.join(''));
        }
      };

      _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
        var popperInstance = popperData.instance;
        this.tip = popperInstance.popper;

        this._cleanTipClass();

        this.addAttachmentClass(this._getAttachment(popperData.placement));
      };

      _proto._fixTransition = function _fixTransition() {
        var tip = this.getTipElement();
        var initConfigAnimation = this.config.animation;

        if (tip.getAttribute('x-placement') !== null) {
          return;
        }

        $$$1(tip).removeClass(ClassName.FADE);
        this.config.animation = false;
        this.hide();
        this.show();
        this.config.animation = initConfigAnimation;
      }; // Static


      Tooltip._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tooltip, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);

      return Tooltip;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = Tooltip._jQueryInterface;
    $$$1.fn[NAME].Constructor = Tooltip;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface;
    };

    return Tooltip;
  }($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Popover = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'popover';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.popover';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var CLASS_PREFIX = 'bs-popover';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');

    var Default = _objectSpread({}, Tooltip.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    });

    var DefaultType = _objectSpread({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    });

    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Popover =
    /*#__PURE__*/
    function (_Tooltip) {
      _inheritsLoose(Popover, _Tooltip);

      function Popover() {
        return _Tooltip.apply(this, arguments) || this;
      }

      var _proto = Popover.prototype;

      // Overrides
      _proto.isWithContent = function isWithContent() {
        return this.getTitle() || this._getContent();
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $$$1(this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $$$1(this.getTipElement()); // We use append for html objects to maintain js events

        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

        var content = this._getContent();

        if (typeof content === 'function') {
          content = content.call(this.element);
        }

        this.setElementContent($tip.find(Selector.CONTENT), content);
        $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
      }; // Private


      _proto._getContent = function _getContent() {
        return this.element.getAttribute('data-content') || this.config.content;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $$$1(this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      }; // Static


      Popover._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = typeof config === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Popover, null, [{
        key: "VERSION",
        // Getters
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);

      return Popover;
    }(Tooltip);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = Popover._jQueryInterface;
    $$$1.fn[NAME].Constructor = Popover;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Popover._jQueryInterface;
    };

    return Popover;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var ScrollSpy = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'scrollspy';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.scrollspy';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Default = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var Event = {
      ACTIVATE: "activate" + EVENT_KEY,
      SCROLL: "scroll" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    };
    var Selector = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    };
    var OffsetMethod = {
      OFFSET: 'offset',
      POSITION: 'position'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var ScrollSpy =
    /*#__PURE__*/
    function () {
      function ScrollSpy(element, config) {
        var _this = this;

        this._element = element;
        this._scrollElement = element.tagName === 'BODY' ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
          return _this._process(event);
        });
        this.refresh();

        this._process();
      } // Getters


      var _proto = ScrollSpy.prototype;

      // Public
      _proto.refresh = function refresh() {
        var _this2 = this;

        var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = [].slice.call(document.querySelectorAll(this._selector));
        targets.map(function (element) {
          var target;
          var targetSelector = Util.getSelectorFromElement(element);

          if (targetSelector) {
            target = document.querySelector(targetSelector);
          }

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              // TODO (fat): remove sketch reliance on jQuery position/offset
              return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this2._offsets.push(item[0]);

          _this2._targets.push(item[1]);
        });
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        $$$1(this._scrollElement).off(EVENT_KEY);
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        config = _objectSpread({}, Default, typeof config === 'object' && config ? config : {});

        if (typeof config.target !== 'string') {
          var id = $$$1(config.target).attr('id');

          if (!id) {
            id = Util.getUID(NAME);
            $$$1(config.target).attr('id', id);
          }

          config.target = "#" + id;
        }

        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._getScrollTop = function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      };

      _proto._getScrollHeight = function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      };

      _proto._getOffsetHeight = function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      };

      _proto._process = function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        var offsetLength = this._offsets.length;

        for (var i = offsetLength; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      };

      _proto._activate = function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


        queries = queries.map(function (selector) {
          return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
        });
        var $link = $$$1([].slice.call(document.querySelectorAll(queries.join(','))));

        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          $link.addClass(ClassName.ACTIVE);
        } else {
          // Set triggered link as active
          $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
        }

        $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
          relatedTarget: target
        });
      };

      _proto._clear = function _clear() {
        var nodes = [].slice.call(document.querySelectorAll(this._selector));
        $$$1(nodes).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      }; // Static


      ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new ScrollSpy(this, _config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(ScrollSpy, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return ScrollSpy;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(window).on(Event.LOAD_DATA_API, function () {
      var scrollSpys = [].slice.call(document.querySelectorAll(Selector.DATA_SPY));
      var scrollSpysLength = scrollSpys.length;

      for (var i = scrollSpysLength; i--;) {
        var $spy = $$$1(scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
    $$$1.fn[NAME].Constructor = ScrollSpy;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return ScrollSpy._jQueryInterface;
    };

    return ScrollSpy;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tab = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tab';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(element) {
        this._element = element;
      } // Getters


      var _proto = Tab.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var target;
        var previous;
        var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
          previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $$$1.Event(Event.HIDE, {
          relatedTarget: this._element
        });
        var showEvent = $$$1.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $$$1(previous).trigger(hideEvent);
        }

        $$$1(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = document.querySelector(selector);
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $$$1.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });
          var shownEvent = $$$1.Event(Event.SHOWN, {
            relatedTarget: previous
          });
          $$$1(previous).trigger(hiddenEvent);
          $$$1(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // Private


      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements;

        if (container.nodeName === 'UL') {
          activeElements = $$$1(container).find(Selector.ACTIVE_UL);
        } else {
          activeElements = $$$1(container).children(Selector.ACTIVE);
        }

        var active = activeElements[0];
        var isTransitioning = callback && active && $$$1(active).hasClass(ClassName.FADE);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          var transitionDuration = Util.getTransitionDurationFromElement(active);
          $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, callback) {
        if (active) {
          $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
          var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $$$1(element).addClass(ClassName.ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        Util.reflow(element);
        $$$1(element).addClass(ClassName.SHOW);

        if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
          var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

          if (dropdownElement) {
            var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE));
            $$$1(dropdownToggleList).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      }; // Static


      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $$$1(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($$$1(this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Tab._jQueryInterface;
    $$$1.fn[NAME].Constructor = Tab;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };

    return Tab;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function ($$$1) {
    if (typeof $$$1 === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $$$1.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map

;var WOW;jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,a){return jQuery.easing[jQuery.easing.def](t,e,i,n,a)},easeInQuad:function(t,e,i,n,a){return n*(e/=a)*e+i},easeOutQuad:function(t,e,i,n,a){return-n*(e/=a)*(e-2)+i},easeInOutQuad:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,a){return n*(e/=a)*e*e+i},easeOutCubic:function(t,e,i,n,a){return n*((e=e/a-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,a){return n*(e/=a)*e*e*e+i},easeOutQuart:function(t,e,i,n,a){return-n*((e=e/a-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,a){return n*(e/=a)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,a){return n*((e=e/a-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,a){return(e/=a/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,a){return-n*Math.cos(e/a*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,a){return n*Math.sin(e/a*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,a){return-n/2*(Math.cos(Math.PI*e/a)-1)+i},easeInExpo:function(t,e,i,n,a){return 0==e?i:n*Math.pow(2,10*(e/a-1))+i},easeOutExpo:function(t,e,i,n,a){return e==a?i+n:n*(1-Math.pow(2,-10*e/a))+i},easeInOutExpo:function(t,e,i,n,a){return 0==e?i:e==a?i+n:(e/=a/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,a){return-n*(Math.sqrt(1-(e/=a)*e)-1)+i},easeOutCirc:function(t,e,i,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+i},easeInOutCirc:function(t,e,i,n,a){return(e/=a/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(o||(o=.3*a),s<Math.abs(n)){s=n;r=o/4}else r=o/(2*Math.PI)*Math.asin(n/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o)+i},easeOutElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(1==(e/=a))return i+n;if(o||(o=.3*a),s<Math.abs(n)){s=n;r=o/4}else r=o/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/o)+n+i},easeInOutElastic:function(t,e,i,n,a){var r=1.70158,o=0,s=n;if(0==e)return i;if(2==(e/=a/2))return i+n;if(o||(o=a*(.3*1.5)),s<Math.abs(n)){s=n;r=o/4}else r=o/(2*Math.PI)*Math.asin(n/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o)*-.5+i:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/o)*.5+n+i},easeInBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),n*(e/=a)*e*((r+1)*e-r)+i},easeOutBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),n*((e=e/a-1)*e*((r+1)*e+r)+1)+i},easeInOutBack:function(t,e,i,n,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?n/2*(e*e*((1+(r*=1.525))*e-r))+i:n/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+i},easeInBounce:function(t,e,i,n,a){return n-jQuery.easing.easeOutBounce(t,a-e,0,n,a)+i},easeOutBounce:function(t,e,i,n,a){return(e/=a)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,a){return e<a/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,a)+i:.5*jQuery.easing.easeOutBounce(t,2*e-a,0,n,a)+.5*n+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,n=i.type(t);return"function"!==n&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?a[o.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!r.call(t,"constructor")&&!r.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||r.call(t,e)},i.each=function(t,i,n){var a=0,r=t.length,o=e(t);if(n){if(o)for(;r>a&&!1!==i.apply(t[a],n);a++);else for(a in t)if(!1===i.apply(t[a],n))break}else if(o)for(;r>a&&!1!==i.call(t[a],a,t[a]);a++);else for(a in t)if(!1===i.call(t[a],a,t[a]))break;return t},i.data=function(t,e,a){if(void 0===a){var r=(o=t[i.expando])&&n[o];if(void 0===e)return r;if(r&&e in r)return r[e]}else if(void 0!==e){var o=t[i.expando]||(t[i.expando]=++i.uuid);return n[o]=n[o]||{},n[o][e]=a,a}},i.removeData=function(t,e){var a=t[i.expando],r=a&&n[a];r&&i.each(e,function(t,e){delete r[e]})},i.extend=function(){var t,e,n,a,r,o,s=arguments[0]||{},l=1,u=arguments.length,d=!1;for("boolean"==typeof s&&(d=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(r=arguments[l]))for(a in r)t=s[a],s!==(n=r[a])&&(d&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,o=t&&i.isArray(t)?t:[]):o=t&&i.isPlainObject(t)?t:{},s[a]=i.extend(d,o,n)):void 0!==n&&(s[a]=n));return s},i.queue=function(t,n,a){if(t){n=(n||"fx")+"queue";var r=i.data(t,n);return a?(!r||i.isArray(a)?r=i.data(t,n,function(t,i){var n=i||[];return null!=t&&(e(Object(t))?function(t,e){for(var i=+e.length,n=0,a=t.length;i>n;)t[a++]=e[n++];if(i!=i)for(;void 0!==e[n];)t[a++]=e[n++];t.length=a}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}(a)):r.push(a),r):r||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var a=i.queue(n,e),r=a.shift();"inprogress"===r&&(r=a.shift()),r&&("fx"===e&&a.unshift("inprogress"),r.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),a=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(a.top+=parseFloat(t.style.borderTopWidth)||0,a.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-a.top,left:n.left-a.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var a={},r=a.hasOwnProperty,o=a.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)a["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function a(t){return f.isWrapped(t)?t=[].slice.call(t):f.isNode(t)&&(t=[t]),t}function r(t){var e=d.data(t,"velocity");return null===e?n:e}function o(t,i,n,a){function r(t,e){return 1-3*e+3*t}function o(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((r(e,i)*t+o(e,i))*t+s(e))*t}function u(t,e,i){return 3*r(e,i)*t*t+2*o(e,i)*t+s(e)}function d(e,i){for(var a=0;f>a;++a){var r=u(i,t,n);if(0===r)return i;i-=(l(i,t,n)-e)/r}return i}function c(e,i,a){var r,o,s=0;do{(r=l(o=i+(a-i)/2,t,n)-e)>0?a=o:i=o}while(Math.abs(r)>g&&++s<v);return o}function h(){k=!0,(t!=i||n!=a)&&function(){for(var e=0;m>e;++e)w[e]=l(e*b,t,n)}()}var f=4,p=.001,g=1e-7,v=10,m=11,b=1/(m-1),y="Float32Array"in e;if(4!==arguments.length)return!1;for(var x=0;4>x;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var w=y?new Float32Array(m):new Array(m),k=!1,S=function(e){return k||h(),t===i&&n===a?e:0===e?0:1===e?1:l(function(e){for(var i=0,a=1,r=m-1;a!=r&&w[a]<=e;++a)i+=b;var o=i+(e-w[--a])/(w[a+1]-w[a])*b,s=u(o,t,n);return s>=p?d(e,o):0==s?o:c(e,i,i+b)}(e),i,a)};S.getControlPoints=function(){return[{x:t,y:i},{x:n,y:a}]};var C="generateBezier("+[t,i,n,a]+")";return S.toString=function(){return C},S}function s(t,e){var i=t;return f.isString(t)?m.Easings[t]||(i=!1):i=f.isArray(t)&&1===t.length?function(t){return function(e){return Math.round(e*t)*(1/t)}}.apply(null,t):f.isArray(t)&&2===t.length?b.apply(null,t.concat([e])):!(!f.isArray(t)||4!==t.length)&&o.apply(null,t),!1===i&&(i=m.Easings[m.defaults.easing]?m.defaults.easing:v),i}function l(t){if(t){var e=(new Date).getTime(),i=m.State.calls.length;i>1e4&&(m.State.calls=function(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var a=t[e];a&&n.push(a)}return n}(m.State.calls));for(var a=0;i>a;a++)if(m.State.calls[a]){var o=m.State.calls[a],s=o[0],c=o[2],h=o[3],p=!!h,g=null;h||(h=m.State.calls[a][3]=e-16);for(var v=Math.min((e-h)/c.duration,1),b=0,x=s.length;x>b;b++){var k=s[b],S=k.element;if(r(S)){var C=!1;if(c.display!==n&&null!==c.display&&"none"!==c.display){if("flex"===c.display){d.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],function(t,e){y.setPropertyValue(S,"display",e)})}y.setPropertyValue(S,"display",c.display)}for(var M in c.visibility!==n&&"hidden"!==c.visibility&&y.setPropertyValue(S,"visibility",c.visibility),k)if("element"!==M){var P,A=k[M],T=f.isString(A.easing)?m.Easings[A.easing]:A.easing;if(1===v)P=A.endValue;else{var I=A.endValue-A.startValue;if(P=A.startValue+I*T(v,c,I),!p&&P===A.currentValue)continue}if(A.currentValue=P,"tween"===M)g=P;else{if(y.Hooks.registered[M]){var _=y.Hooks.getRoot(M),D=r(S).rootPropertyValueCache[_];D&&(A.rootPropertyValue=D)}var F=y.setPropertyValue(S,M,A.currentValue+(0===parseFloat(P)?"":A.unitType),A.rootPropertyValue,A.scrollData);y.Hooks.registered[M]&&(r(S).rootPropertyValueCache[_]=y.Normalizations.registered[_]?y.Normalizations.registered[_]("extract",null,F[1]):F[1]),"transform"===F[0]&&(C=!0)}}c.mobileHA&&r(S).transformCache.translate3d===n&&(r(S).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&y.flushTransformCache(S)}}c.display!==n&&"none"!==c.display&&(m.State.calls[a][2].display=!1),c.visibility!==n&&"hidden"!==c.visibility&&(m.State.calls[a][2].visibility=!1),c.progress&&c.progress.call(o[1],o[1],v,Math.max(0,h+c.duration-e),h,g),1===v&&u(a)}}m.State.isTicking&&w(l)}function u(t,e){if(!m.State.calls[t])return!1;for(var i=m.State.calls[t][0],a=m.State.calls[t][1],o=m.State.calls[t][2],s=m.State.calls[t][4],l=!1,u=0,c=i.length;c>u;u++){var h=i[u].element;if(e||o.loop||("none"===o.display&&y.setPropertyValue(h,"display",o.display),"hidden"===o.visibility&&y.setPropertyValue(h,"visibility",o.visibility)),!0!==o.loop&&(d.queue(h)[1]===n||!/\.velocityQueueEntryFlag/i.test(d.queue(h)[1]))&&r(h)){r(h).isAnimating=!1,r(h).rootPropertyValueCache={};var f=!1;d.each(y.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,a=r(h).transformCache[e];r(h).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(a)&&(f=!0,delete r(h).transformCache[e])}),o.mobileHA&&(f=!0,delete r(h).transformCache.translate3d),f&&y.flushTransformCache(h),y.Values.removeClass(h,"velocity-animating")}if(!e&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(a,a)}catch(t){setTimeout(function(){throw t},1)}s&&!0!==o.loop&&s(a),r(h)&&!0===o.loop&&!e&&(d.each(r(h).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),m(h,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&d.dequeue(h,o.queue)}m.State.calls[t]=!1;for(var p=0,g=m.State.calls.length;g>p;p++)if(!1!==m.State.calls[p]){l=!0;break}!1===l&&(m.State.isTicking=!1,delete m.State.calls,m.State.calls=[])}var d,c=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),h=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,n=(new Date).getTime();return i=Math.max(0,16-(n-t)),t=n+i,setTimeout(function(){e(n+i)},i)}}(),f={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},p=!1;if(t.fn&&t.fn.jquery?(d=t,p=!0):d=e.Velocity.Utilities,8>=c&&!p)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(7>=c)){var g=400,v="swing",m={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:d,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:g,easing:v,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){d.data(t,"velocity",{isSVG:f.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(m.State.scrollAnchor=e,m.State.scrollPropertyLeft="pageXOffset",m.State.scrollPropertyTop="pageYOffset"):(m.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,m.State.scrollPropertyLeft="scrollLeft",m.State.scrollPropertyTop="scrollTop");var b=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var a={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:a.v,dv:t(a)}}function i(i,n){var a={dx:i.v,dv:t(i)},r=e(i,.5*n,a),o=e(i,.5*n,r),s=e(i,n,o),l=1/6*(a.dx+2*(r.dx+o.dx)+s.dx),u=1/6*(a.dv+2*(r.dv+o.dv)+s.dv);return i.x=i.x+l*n,i.v=i.v+u*n,i}return function t(e,n,a){var r,o,s,l={x:-1,v:0,tension:null,friction:null},u=[0],d=0;for(e=parseFloat(e)||500,n=parseFloat(n)||20,a=a||null,l.tension=e,l.friction=n,(r=null!==a)?o=(d=t(e,n))/a*.016:o=.016;s=i(s||l,o),u.push(1+s.x),d+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return r?function(t){return u[t*(u.length-1)|0]}:d}}();m.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},d.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){m.Easings[e[0]]=o.apply(null,e[1])});var y=m.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<y.Lists.colors.length;t++){var e="color"===y.Lists.colors[t]?"0 0 0 1":"255 255 255 1";y.Hooks.templates[y.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,n,a;if(c)for(i in y.Hooks.templates){a=(n=y.Hooks.templates[i])[0].split(" ");var r=n[1].match(y.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),r.push(r.shift()),y.Hooks.templates[i]=[a.join(" "),r.join(" ")])}for(i in y.Hooks.templates)for(var t in a=(n=y.Hooks.templates[i])[0].split(" ")){var o=i+a[t],s=t;y.Hooks.registered[o]=[i,s]}},getRoot:function(t){var e=y.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return y.RegEx.valueUnwrap.test(e)&&(e=e.match(y.RegEx.valueUnwrap)[1]),y.Values.isCSSNullValue(e)&&(e=y.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=y.Hooks.registered[t];if(i){var n=i[0],a=i[1];return(e=y.Hooks.cleanRootPropertyValue(n,e)).toString().match(y.RegEx.valueSplit)[a]}return e},injectValue:function(t,e,i){var n=y.Hooks.registered[t];if(n){var a,r=n[0],o=n[1];return(a=(i=y.Hooks.cleanRootPropertyValue(r,i)).toString().match(y.RegEx.valueSplit))[o]=e,a.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return y.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:n=(n=i.toString().match(y.RegEx.valueUnwrap))?n[1].replace(/,(\s+)?/g," "):i,n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return m.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var a=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=a?a[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=c)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=c||m.State.isGingerbread||(y.Lists.transformsBase=y.Lists.transformsBase.concat(y.Lists.transforms3D));for(var t=0;t<y.Lists.transformsBase.length;t++)!function(){var e=y.Lists.transformsBase[t];y.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return"transform";case"extract":return r(i)===n||r(i).transformCache[e]===n?/^scale/i.test(e)?1:0:r(i).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":m.State.isAndroid&&r(i).transformCache[e]===n&&1>a&&(a=1),o=!/(\d)$/i.test(a);break;case"skew":o=!/(deg|\d)$/i.test(a);break;case"rotate":o=!/(deg|\d)$/i.test(a)}return o||(r(i).transformCache[e]="("+a+")"),r(i).transformCache[e]}}}();for(t=0;t<y.Lists.colors.length;t++)!function(){var e=y.Lists.colors[t];y.Normalizations.registered[e]=function(t,i,a){switch(t){case"name":return e;case"extract":var r;if(y.RegEx.wrappedValueAlreadyExtracted.test(a))r=a;else{var o,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?o=s[a]!==n?s[a]:s.black:y.RegEx.isHex.test(a)?o="rgb("+y.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(o=s.black),r=(o||a).toString().match(y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=c||3!==r.split(" ").length||(r+=" 1"),r;case"inject":return 8>=c?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=c?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(c||m.State.isAndroid&&!m.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(m.State.prefixMatches[t])return[m.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var a;if(a=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),f.isString(m.State.prefixElement.style[a]))return m.State.prefixMatches[t]=a,[a,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e;return t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n}),(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,a,o){function s(t,i){function a(){h&&y.setPropertyValue(t,"display","none")}var l=0;if(8>=c)l=d.css(t,i);else{var u,h=!1;if(/^(width|height)$/.test(i)&&0===y.getPropertyValue(t,"display")&&(h=!0,y.setPropertyValue(t,"display",y.Values.getDisplayType(t))),!o){if("height"===i&&"border-box"!==y.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var f=t.offsetHeight-(parseFloat(y.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(y.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(y.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(y.getPropertyValue(t,"paddingBottom"))||0);return a(),f}if("width"===i&&"border-box"!==y.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var p=t.offsetWidth-(parseFloat(y.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(y.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(y.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(y.getPropertyValue(t,"paddingRight"))||0);return a(),p}}u=r(t)===n?e.getComputedStyle(t,null):r(t).computedStyle?r(t).computedStyle:r(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(l=9===c&&"filter"===i?u.getPropertyValue(i):u[i])||null===l)&&(l=t.style[i]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var g=s(t,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(i))&&(l=d(t).position()[i]+"px")}return l}var l;if(y.Hooks.registered[i]){var u=i,h=y.Hooks.getRoot(u);a===n&&(a=y.getPropertyValue(t,y.Names.prefixCheck(h)[0])),y.Normalizations.registered[h]&&(a=y.Normalizations.registered[h]("extract",t,a)),l=y.Hooks.extractValue(u,a)}else if(y.Normalizations.registered[i]){var f,p;"transform"!==(f=y.Normalizations.registered[i]("name",t))&&(p=s(t,y.Names.prefixCheck(f)[0]),y.Values.isCSSNullValue(p)&&y.Hooks.templates[i]&&(p=y.Hooks.templates[i][1])),l=y.Normalizations.registered[i]("extract",t,p)}if(!/^[\d-]/.test(l))if(r(t)&&r(t).isSVG&&y.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(t){l=0}else l=t.getAttribute(i);else l=s(t,y.Names.prefixCheck(i)[0]);return y.Values.isCSSNullValue(l)&&(l=0),m.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,a,o){var s=i;if("scroll"===i)o.container?o.container["scroll"+o.direction]=n:"Left"===o.direction?e.scrollTo(n,o.alternateValue):e.scrollTo(o.alternateValue,n);else if(y.Normalizations.registered[i]&&"transform"===y.Normalizations.registered[i]("name",t))y.Normalizations.registered[i]("inject",t,n),s="transform",n=r(t).transformCache[i];else{if(y.Hooks.registered[i]){var l=i,u=y.Hooks.getRoot(i);a=a||y.getPropertyValue(t,u),n=y.Hooks.injectValue(l,n,a),i=u}if(y.Normalizations.registered[i]&&(n=y.Normalizations.registered[i]("inject",t,n),i=y.Normalizations.registered[i]("name",t)),s=y.Names.prefixCheck(i)[0],8>=c)try{t.style[s]=n}catch(t){m.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else r(t)&&r(t).isSVG&&y.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;m.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(y.getPropertyValue(t,e))}var i="";if((c||m.State.isAndroid&&!m.State.isChrome)&&r(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};d.each(r(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var a,o;d.each(r(t).transformCache,function(e){return a=r(t).transformCache[e],"transformPerspective"===e?(o=a,!0):(9===c&&"rotateZ"===e&&(e="rotate"),void(i+=e+a+" "))}),o&&(i="perspective"+o+" "+i)}y.setPropertyValue(t,"transform",i)}};y.Hooks.register(),y.Normalizations.register(),m.hook=function(t,e,i){var o=n;return t=a(t),d.each(t,function(t,a){if(r(a)===n&&m.init(a),i===n)o===n&&(o=m.CSS.getPropertyValue(a,e));else{var s=m.CSS.setPropertyValue(a,e,i);"transform"===s[0]&&m.CSS.flushTransformCache(a),o=s}}),o};var x=function(){function t(){return c?A.promise||null:h}function o(){function t(t){function h(t,e){var i=n,a=n,r=n;return f.isArray(t)?(i=t[0],!f.isArray(t[1])&&/^[\d-]/.test(t[1])||f.isFunction(t[1])||y.RegEx.isHex.test(t[1])?r=t[1]:(f.isString(t[1])&&!y.RegEx.isHex.test(t[1])||f.isArray(t[1]))&&(a=e?t[1]:s(t[1],u.duration),t[2]!==n&&(r=t[2]))):i=t,e||(a=a||u.easing),f.isFunction(i)&&(i=i.call(o,C,S)),f.isFunction(r)&&(r=r.call(o,C,S)),[i||0,a,r]}function p(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=y.Values.getUnitType(t)),[n,i]}function g(){var t={myParent:o.parentNode||i.body,position:y.getPropertyValue(o,"position"),fontSize:y.getPropertyValue(o,"fontSize")},n=t.position===L.lastPosition&&t.myParent===L.lastParent,a=t.fontSize===L.lastFontSize;L.lastParent=t.myParent,L.lastPosition=t.position,L.lastFontSize=t.fontSize;var s=100,l={};if(a&&n)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=r(o).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");m.init(u),t.myParent.appendChild(u),d.each(["overflow","overflowX","overflowY"],function(t,e){m.CSS.setPropertyValue(u,e,"hidden")}),m.CSS.setPropertyValue(u,"position",t.position),m.CSS.setPropertyValue(u,"fontSize",t.fontSize),m.CSS.setPropertyValue(u,"boxSizing","content-box"),d.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){m.CSS.setPropertyValue(u,e,s+"%")}),m.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(y.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(y.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(y.getPropertyValue(u,"paddingLeft"))||1)/s,t.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(y.getPropertyValue(i.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(e.innerWidth)/100,L.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,m.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(u.begin&&0===C)try{u.begin.call(v,v)}catch(t){setTimeout(function(){throw t},1)}if("scroll"===P){var x,k,M,T=/^x$/i.test(u.axis)?"Left":"Top",I=parseFloat(u.offset)||0;u.container?f.isWrapped(u.container)||f.isNode(u.container)?(u.container=u.container[0]||u.container,M=(x=u.container["scroll"+T])+d(o).position()[T.toLowerCase()]+I):u.container=null:(x=m.State.scrollAnchor[m.State["scrollProperty"+T]],k=m.State.scrollAnchor[m.State["scrollProperty"+("Left"===T?"Top":"Left")]],M=d(o).offset()[T.toLowerCase()]+I),c={scroll:{rootPropertyValue:!1,startValue:x,currentValue:x,endValue:M,unitType:"",easing:u.easing,scrollData:{container:u.container,direction:T,alternateValue:k}},element:o},m.debug&&console.log("tweensContainer (scroll): ",c.scroll,o)}else if("reverse"===P){if(!r(o).tweensContainer)return void d.dequeue(o,u.queue);"none"===r(o).opts.display&&(r(o).opts.display="auto"),"hidden"===r(o).opts.visibility&&(r(o).opts.visibility="visible"),r(o).opts.loop=!1,r(o).opts.begin=null,r(o).opts.complete=null,w.easing||delete u.easing,w.duration||delete u.duration,u=d.extend({},r(o).opts,u);var _=d.extend(!0,{},r(o).tweensContainer);for(var D in _)if("element"!==D){var F=_[D].startValue;_[D].startValue=_[D].currentValue=_[D].endValue,_[D].endValue=F,f.isEmptyObject(w)||(_[D].easing=u.easing),m.debug&&console.log("reverse tweensContainer ("+D+"): "+JSON.stringify(_[D]),o)}c=_}else if("start"===P){for(var O in r(o).tweensContainer&&!0===r(o).isAnimating&&(_=r(o).tweensContainer),d.each(b,function(t,e){if(RegExp("^"+y.Lists.colors.join("$|^")+"$").test(t)){var i=h(e,!0),a=i[0],r=i[1],o=i[2];if(y.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=y.Values.hexToRgb(a),u=o?y.Values.hexToRgb(o):n,d=0;d<s.length;d++){var c=[l[d]];r&&c.push(r),u!==n&&c.push(u[d]),b[t+s[d]]=c}delete b[t]}}}),b){var V=h(b[O]),z=V[0],N=V[1],B=V[2];O=y.Names.camelCase(O);var E=y.Hooks.getRoot(O),W=!1;if(r(o).isSVG||"tween"===E||!1!==y.Names.prefixCheck(E)[1]||y.Normalizations.registered[E]!==n){(u.display!==n&&null!==u.display&&"none"!==u.display||u.visibility!==n&&"hidden"!==u.visibility)&&/opacity|filter/.test(O)&&!B&&0!==z&&(B=0),u._cacheValues&&_&&_[O]?(B===n&&(B=_[O].endValue+_[O].unitType),W=r(o).rootPropertyValueCache[E]):y.Hooks.registered[O]?B===n?(W=y.getPropertyValue(o,E),B=y.getPropertyValue(o,O,W)):W=y.Hooks.templates[E][1]:B===n&&(B=y.getPropertyValue(o,O));var H,j,q,Y=!1;if(B=(H=p(O,B))[0],q=H[1],z=(H=p(O,z))[0].replace(/^([+-\/*])=/,function(t,e){return Y=e,""}),j=H[1],B=parseFloat(B)||0,z=parseFloat(z)||0,"%"===j&&(/^(fontSize|lineHeight)$/.test(O)?(z/=100,j="em"):/^scale/.test(O)?(z/=100,j=""):/(Red|Green|Blue)$/i.test(O)&&(z=z/100*255,j="")),/[\/*]/.test(Y))j=q;else if(q!==j&&0!==B)if(0===z)j=q;else{a=a||g();var U=/margin|padding|left|right|width|text|word|letter/i.test(O)||/X$/.test(O)||"x"===O?"x":"y";switch(q){case"%":B*="x"===U?a.percentToPxWidth:a.percentToPxHeight;break;case"px":break;default:B*=a[q+"ToPx"]}switch(j){case"%":B*=1/("x"===U?a.percentToPxWidth:a.percentToPxHeight);break;case"px":break;default:B*=1/a[j+"ToPx"]}}switch(Y){case"+":z=B+z;break;case"-":z=B-z;break;case"*":z*=B;break;case"/":z=B/z}c[O]={rootPropertyValue:W,startValue:B,currentValue:B,endValue:z,unitType:j,easing:N},m.debug&&console.log("tweensContainer ("+O+"): "+JSON.stringify(c[O]),o)}else m.debug&&console.log("Skipping ["+E+"] due to a lack of browser support.")}c.element=o}c.element&&(y.Values.addClass(o,"velocity-animating"),R.push(c),""===u.queue&&(r(o).tweensContainer=c,r(o).opts=u),r(o).isAnimating=!0,C===S-1?(m.State.calls.push([R,v,u,null,A.resolver]),!1===m.State.isTicking&&(m.State.isTicking=!0,l())):C++)}var a,o=this,u=d.extend({},m.defaults,w),c={};switch(r(o)===n&&m.init(o),parseFloat(u.delay)&&!1!==u.queue&&d.queue(o,u.queue,function(t){m.velocityQueueEntryFlag=!0,r(o).delayTimer={setTimeout:setTimeout(t,parseFloat(u.delay)),next:t}}),u.duration.toString().toLowerCase()){case"fast":u.duration=200;break;case"normal":u.duration=g;break;case"slow":u.duration=600;break;default:u.duration=parseFloat(u.duration)||1}!1!==m.mock&&(!0===m.mock?u.duration=u.delay=1:(u.duration*=parseFloat(m.mock)||1,u.delay*=parseFloat(m.mock)||1)),u.easing=s(u.easing,u.duration),u.begin&&!f.isFunction(u.begin)&&(u.begin=null),u.progress&&!f.isFunction(u.progress)&&(u.progress=null),u.complete&&!f.isFunction(u.complete)&&(u.complete=null),u.display!==n&&null!==u.display&&(u.display=u.display.toString().toLowerCase(),"auto"===u.display&&(u.display=m.CSS.Values.getDisplayType(o))),u.visibility!==n&&null!==u.visibility&&(u.visibility=u.visibility.toString().toLowerCase()),u.mobileHA=u.mobileHA&&m.State.isMobile&&!m.State.isGingerbread,!1===u.queue?u.delay?setTimeout(t,u.delay):t():d.queue(o,u.queue,function(e,i){return!0===i?(A.promise&&A.resolver(v),!0):(m.velocityQueueEntryFlag=!0,void t())}),""!==u.queue&&"fx"!==u.queue||"inprogress"===d.queue(o)[0]||d.dequeue(o)}var c,h,p,v,b,w,k=arguments[0]&&(arguments[0].p||d.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||f.isString(arguments[0].properties));if(f.isWrapped(this)?(c=!1,p=0,v=this,h=this):(c=!0,p=1,v=k?arguments[0].elements||arguments[0].e:arguments[0]),v=a(v)){k?(b=arguments[0].properties||arguments[0].p,w=arguments[0].options||arguments[0].o):(b=arguments[p],w=arguments[p+1]);var S=v.length,C=0;if(!/^(stop|finish)$/i.test(b)&&!d.isPlainObject(w)){w={};for(var M=p+1;M<arguments.length;M++)f.isArray(arguments[M])||!/^(fast|normal|slow)$/i.test(arguments[M])&&!/^\d/.test(arguments[M])?f.isString(arguments[M])||f.isArray(arguments[M])?w.easing=arguments[M]:f.isFunction(arguments[M])&&(w.complete=arguments[M]):w.duration=arguments[M]}var P,A={promise:null,resolver:null,rejecter:null};switch(c&&m.Promise&&(A.promise=new m.Promise(function(t,e){A.resolver=t,A.rejecter=e})),b){case"scroll":P="scroll";break;case"reverse":P="reverse";break;case"finish":case"stop":d.each(v,function(t,e){r(e)&&r(e).delayTimer&&(clearTimeout(r(e).delayTimer.setTimeout),r(e).delayTimer.next&&r(e).delayTimer.next(),delete r(e).delayTimer)});var T=[];return d.each(m.State.calls,function(t,e){e&&d.each(e[1],function(i,a){var o=w===n?"":w;return!0!==o&&e[2].queue!==o&&(w!==n||!1!==e[2].queue)||void d.each(v,function(i,n){n===a&&((!0===w||f.isString(w))&&(d.each(d.queue(n,f.isString(w)?w:""),function(t,e){f.isFunction(e)&&e(null,!0)}),d.queue(n,f.isString(w)?w:"",[])),"stop"===b?(r(n)&&r(n).tweensContainer&&!1!==o&&d.each(r(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),T.push(t)):"finish"===b&&(e[2].duration=1))})})}),"stop"===b&&(d.each(T,function(t,e){u(e,!0)}),A.promise&&A.resolver(v)),t();default:if(!d.isPlainObject(b)||f.isEmptyObject(b)){if(f.isString(b)&&m.Redirects[b]){var I=(O=d.extend({},w)).duration,_=O.delay||0;return!0===O.backwards&&(v=d.extend(!0,[],v).reverse()),d.each(v,function(t,e){parseFloat(O.stagger)?O.delay=_+parseFloat(O.stagger)*t:f.isFunction(O.stagger)&&(O.delay=_+O.stagger.call(e,t,S)),O.drag&&(O.duration=parseFloat(I)||(/^(callout|transition)/.test(b)?1e3:g),O.duration=Math.max(O.duration*(O.backwards?1-t/S:(t+1)/S),.75*O.duration,200)),m.Redirects[b].call(e,e,O||{},t,S,v,A.promise?A:n)}),t()}var D="Velocity: First argument ("+b+") was not a property map, a known action, or a registered redirect. Aborting.";return A.promise?A.rejecter(new Error(D)):console.log(D),t()}P="start"}var F,O,L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];if(d.each(v,function(t,e){f.isNode(e)&&o.call(e)}),(O=d.extend({},m.defaults,w)).loop=parseInt(O.loop),F=2*O.loop-1,O.loop)for(var V=0;F>V;V++){var z={delay:O.delay,progress:O.progress};V===F-1&&(z.display=O.display,z.visibility=O.visibility,z.complete=O.complete),x(v,"reverse",z)}return t()}};(m=d.extend(x,m)).animate=x;var w=e.requestAnimationFrame||h;return m.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(w=function(t){return setTimeout(function(){t(!0)},16)},l()):w=e.requestAnimationFrame||h}),t.Velocity=m,t!==e&&(t.fn.velocity=x,t.fn.velocity.defaults=m.defaults),d.each(["Down","Up"],function(t,e){m.Redirects["slide"+e]=function(t,i,a,r,o,s){var l=d.extend({},i),u=l.begin,c=l.complete,h={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===n&&(l.display="Down"===e?"inline"===m.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){for(var i in u&&u.call(o,o),h){f[i]=t.style[i];var n=m.CSS.getPropertyValue(t,i);h[i]="Down"===e?[n,0]:[0,n]}f.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in f)t.style[e]=f[e];c&&c.call(o,o),s&&s.resolver(o)},m(t,h,l)}}),d.each(["In","Out"],function(t,e){m.Redirects["fade"+e]=function(t,i,a,r,o,s){var l=d.extend({},i),u={opacity:"In"===e?1:0},c=l.complete;l.complete=a!==r-1?l.begin=null:function(){c&&c.call(o,o),s&&s.resolver(o)},l.display===n&&(l.display="In"===e?"auto":"none"),m(this,u,l)}}),m}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)})),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Chart=t()}}(function(){return function(){return function t(e,i,n){function a(o,s){if(!i[o]){if(!e[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[o]={exports:{}};e[o][0].call(d.exports,function(t){var i=e[o][1][t];return a(i||t)},d,d.exports,t,e,i,n)}return i[o].exports}for(var r="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}}()({1:[function(t,e,i){},{}],2:[function(t,e,i){var n=t(6);function a(t){if(t){var e=[0,0,0],i=1,a=t.match(/^#([a-fA-F0-9]{3})$/i);if(a){a=a[1];for(var r=0;r<e.length;r++)e[r]=parseInt(a[r]+a[r],16)}else if(a=t.match(/^#([a-fA-F0-9]{6})$/i)){a=a[1];for(r=0;r<e.length;r++)e[r]=parseInt(a.slice(2*r,2*r+2),16)}else if(a=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=parseInt(a[r+1]);i=parseFloat(a[4])}else if(a=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(a[r+1]));i=parseFloat(a[4])}else if(a=t.match(/(\w+)/)){if("transparent"==a[1])return[0,0,0,0];if(!(e=n[a[1]]))return}for(r=0;r<e.length;r++)e[r]=d(e[r],0,255);return i=i||0==i?d(i,0,1):1,e[3]=i,e}}function r(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(i)?1:i,0,1)]}}}function o(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(i)?1:i,0,1)]}}}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function u(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function d(t,e,i){return Math.min(Math.max(e,t),i)}function c(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:a,getHsla:r,getRgb:function(t){var e=a(t);return e&&e.slice(0,3)},getHsl:function(t){var e=r(t);return e&&e.slice(0,3)},getHwb:o,getAlpha:function(t){var e=a(t);if(e)return e[3];if(e=r(t))return e[3];if(e=o(t))return e[3]},hexString:function(t){return"#"+c(t[0])+c(t[1])+c(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return s(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:s,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return l(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+a+"%)"},percentaString:l,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return u(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:u,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return h[t.slice(0,3)]}};var h={};for(var f in n)h[n[f]]=f},{6:6}],3:[function(t,e,i){var n=t(5),a=t(2),r=function(t){return t instanceof r?t:this instanceof r?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=a.getRgba(t))?this.setValues("rgb",e):(e=a.getHsla(t))?this.setValues("hsl",e):(e=a.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new r(t);var e};r.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=t,n=void 0===e?.5:e,a=2*n-1,r=this.alpha()-i.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o;return this.rgb(o*this.red()+s*i.red(),o*this.green()+s*i.green(),o*this.blue()+s*i.blue()).alpha(this.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new r,n=this.values,a=i.values;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],"[object Array]"===(e={}.toString.call(t))?a[o]=t.slice(0):"[object Number]"===e?a[o]=t:console.error("unexpected color value:",t));return i}},r.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},r.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},r.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},r.prototype.setValues=function(t,e){var i,a,r=this.values,o=this.spaces,s=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)r[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)r[t][i]=e[t.charAt(i)];l=e.a}else if(void 0!==e[o[t][0]]){var u=o[t];for(i=0;i<t.length;i++)r[t][i]=e[u[i]];l=e.alpha}if(r.alpha=Math.max(0,Math.min(1,void 0===l?r.alpha:l)),"alpha"===t)return!1;for(i=0;i<t.length;i++)a=Math.max(0,Math.min(s[t][i],r[t][i])),r[t][i]=Math.round(a);for(var d in o)d!==t&&(r[d]=n[t][d](r[t]));return!0},r.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},r.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=r),e.exports=r},{2:2,5:5}],4:[function(t,e,i){function n(t){var e,i,n=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(o+s)/2,[e,100*(s==o?0:i<=.5?l/(s+o):l/(2-s-o)),100*i]}function a(t){var e,i,n=t[0],a=t[1],r=t[2],o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return i=0==s?0:l/s*1e3/10,s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function o(t){var e=t[0],i=t[1],a=t[2];return[n(t)[0],100*(1/255*Math.min(e,Math.min(i,a))),100*(a=1-1/255*Math.max(e,Math.max(i,a)))]}function s(t){var e,i=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]}function l(t){return M[JSON.stringify(t)]}function u(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function d(t){var e=u(t),i=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function c(t){var e,i,n,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[r=255*l,r,r];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(n=o+1/3*-(u-1))<0&&n++,n>1&&n--,r=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,a[u]=255*r;return a}function h(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*n*(1-i),s=255*n*(1-i*r),l=255*n*(1-i*(1-r));n*=255;switch(a){case 0:return[n,l,o];case 1:return[s,n,o];case 2:return[o,n,l];case 3:return[o,s,n];case 4:return[l,o,n];case 5:return[n,o,s]}}function f(t){var e,i,n,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),i=1-l,n=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(n=1-n),a=s+n*(i-s),e){default:case 6:case 0:r=i,g=a,b=s;break;case 1:r=a,g=i,b=s;break;case 2:r=s,g=i,b=a;break;case 3:r=s,g=a,b=i;break;case 4:r=a,g=s,b=i;break;case 5:r=i,g=s,b=a}return[255*r,255*g,255*b]}function p(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function v(t){var e,i,n,a=t[0]/100,r=t[1]/100,o=t[2]/100;return i=-.9689*a+1.8758*r+.0415*o,n=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function m(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function y(t){var e,i,n,a,r=t[0],o=t[1],s=t[2];return r<=8?a=(i=100*r/903.3)/100*7.787+16/116:(i=100*Math.pow((r+16)/116,3),a=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i,n=n/108.883<=.008859?n=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3)]}function x(t){var e,i=t[0],n=t[1],a=t[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+a*a),e]}function w(t){return v(y(t))}function k(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function S(t){return C[t]}e.exports={rgb2hsl:n,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:function(t){return x(d(t))},hsl2rgb:c,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]},hsl2hwb:function(t){return o(c(t))},hsl2cmyk:function(t){return s(c(t))},hsl2keyword:function(t){return l(c(t))},hsv2rgb:h,hsv2hsl:function(t){var e,i,n=t[0],a=t[1]/100,r=t[2]/100;return e=a*r,[n,100*(e=(e/=(i=(2-a)*r)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return o(h(t))},hsv2cmyk:function(t){return s(h(t))},hsv2keyword:function(t){return l(h(t))},hwb2rgb:f,hwb2hsl:function(t){return n(f(t))},hwb2hsv:function(t){return a(f(t))},hwb2cmyk:function(t){return s(f(t))},hwb2keyword:function(t){return l(f(t))},cmyk2rgb:p,cmyk2hsl:function(t){return n(p(t))},cmyk2hsv:function(t){return a(p(t))},cmyk2hwb:function(t){return o(p(t))},cmyk2keyword:function(t){return l(p(t))},keyword2rgb:S,keyword2hsl:function(t){return n(S(t))},keyword2hsv:function(t){return a(S(t))},keyword2hwb:function(t){return o(S(t))},keyword2cmyk:function(t){return s(S(t))},keyword2lab:function(t){return d(S(t))},keyword2xyz:function(t){return u(S(t))},xyz2rgb:v,xyz2lab:m,xyz2lch:function(t){return x(m(t))},lab2xyz:y,lab2rgb:w,lab2lch:x,lch2lab:k,lch2xyz:function(t){return y(k(t))},lch2rgb:function(t){return w(k(t))}};var C={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},M={};for(var P in C)M[JSON.stringify(C[P])]=P},{}],5:[function(t,e,i){var n=t(4),a=function(){return new u};for(var r in n){a[r+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),n[t](e)}}(r);var o=/(\w+)2(\w+)/.exec(r),s=o[1],l=o[2];(a[s]=a[s]||{})[l]=a[r]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=n[t](e);if("string"==typeof i||void 0===i)return i;for(var a=0;a<i.length;a++)i[a]=Math.round(i[a]);return i}}(r)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=a[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{4:4}],6:[function(t,e,i){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var n=t(29)();n.helpers=t(45),t(27)(n),n.defaults=t(25),n.Element=t(26),n.elements=t(40),n.Interaction=t(28),n.layouts=t(30),n.platform=t(48),n.plugins=t(31),n.Ticks=t(34),t(22)(n),t(23)(n),t(24)(n),t(33)(n),t(32)(n),t(35)(n),t(55)(n),t(53)(n),t(54)(n),t(56)(n),t(57)(n),t(58)(n),t(15)(n),t(16)(n),t(17)(n),t(18)(n),t(19)(n),t(20)(n),t(21)(n),t(8)(n),t(9)(n),t(10)(n),t(11)(n),t(12)(n),t(13)(n),t(14)(n);var a=t(49);for(var r in a)a.hasOwnProperty(r)&&n.plugins.register(a[r]);n.platform.initialize(),e.exports=n,"undefined"!=typeof window&&(window.Chart=n),n.Legend=a.legend._element,n.Title=a.title._element,n.pluginService=n.plugins,n.PluginBase=n.Element.extend({}),n.canvasHelpers=n.helpers.canvas,n.layoutService=n.layouts},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,40:40,45:45,48:48,49:49,53:53,54:54,55:55,56:56,57:57,58:58,8:8,9:9}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){t.Radar=function(e,i){return i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";var n=t(25),a=t(40),r=t(45);n._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),n._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),e.exports=function(t){t.controllers.bar=t.DatasetController.extend({dataElementType:a.Rectangle,initialize:function(){var e;t.DatasetController.prototype.initialize.apply(this,arguments),(e=this.getMeta()).stack=this.getDataset().stack,e.bar=!0},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,e,i){var n=this,a=n.chart,o=n.getMeta(),s=n.getDataset(),l=t.custom||{},u=a.options.elements.rectangle;t._xScale=n.getScaleForId(o.xAxisID),t._yScale=n.getScaleForId(o.yAxisID),t._datasetIndex=n.index,t._index=e,t._model={datasetLabel:s.label,label:a.data.labels[e],borderSkipped:l.borderSkipped?l.borderSkipped:u.borderSkipped,backgroundColor:l.backgroundColor?l.backgroundColor:r.valueAtIndexOrDefault(s.backgroundColor,e,u.backgroundColor),borderColor:l.borderColor?l.borderColor:r.valueAtIndexOrDefault(s.borderColor,e,u.borderColor),borderWidth:l.borderWidth?l.borderWidth:r.valueAtIndexOrDefault(s.borderWidth,e,u.borderWidth)},n.updateElementGeometry(t,e,i),t.pivot()},updateElementGeometry:function(t,e,i){var n=this,a=t._model,r=n.getValueScale(),o=r.getBasePixel(),s=r.isHorizontal(),l=n._ruler||n.getRuler(),u=n.calculateBarValuePixels(n.index,e),d=n.calculateBarIndexPixels(n.index,e,l);a.horizontal=s,a.base=i?o:u.base,a.x=s?i?o:u.head:d.center,a.y=s?d.center:i?o:u.head,a.height=s?d.size:void 0,a.width=s?void 0:d.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},_getStacks:function(t){var e,i,n=this.chart,a=this.getIndexScale().options.stacked,r=void 0===t?n.data.datasets.length:t+1,o=[];for(e=0;e<r;++e)(i=n.getDatasetMeta(e)).bar&&n.isDatasetVisible(e)&&(!1===a||!0===a&&-1===o.indexOf(i.stack)||void 0===a&&(void 0===i.stack||-1===o.indexOf(i.stack)))&&o.push(i.stack);return o},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n},getRuler:function(){var t,e,i=this.getIndexScale(),n=this.getStackCount(),a=this.index,o=i.isHorizontal(),s=o?i.left:i.top,l=s+(o?i.width:i.height),u=[];for(t=0,e=this.getMeta().data.length;t<e;++t)u.push(i.getPixelForValue(null,t,a));return{min:r.isNullOrUndef(i.options.barThickness)?function(t,e){var i,n,a,r,o=t.isHorizontal()?t.width:t.height,s=t.getTicks();for(a=1,r=e.length;a<r;++a)o=Math.min(o,e[a]-e[a-1]);for(a=0,r=s.length;a<r;++a)n=t.getPixelForTick(a),o=a>0?Math.min(o,n-i):o,i=n;return o}(i,u):-1,pixels:u,start:s,end:l,stackCount:n,scale:i}},calculateBarValuePixels:function(t,e){var i,n,a,r,o,s,l=this.chart,u=this.getMeta(),d=this.getValueScale(),c=l.data.datasets,h=d.getRightValue(c[t].data[e]),f=d.options.stacked,p=u.stack,g=0;if(f||void 0===f&&void 0!==p)for(i=0;i<t;++i)(n=l.getDatasetMeta(i)).bar&&n.stack===p&&n.controller.getValueScaleId()===d.id&&l.isDatasetVisible(i)&&(a=d.getRightValue(c[i].data[e]),(h<0&&a<0||h>=0&&a>0)&&(g+=a));return r=d.getPixelForValue(g),{size:s=((o=d.getPixelForValue(g+h))-r)/2,base:r,head:o,center:o+s/2}},calculateBarIndexPixels:function(t,e,i){var n=i.scale.options,a="flex"===n.barThickness?function(t,e,i){var n,a=e.pixels,r=a[t],o=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=i.categoryPercentage;return null===o&&(o=r-(null===s?e.end-r:s-r)),null===s&&(s=r+r-o),n=r-(r-o)/2*l,{chunk:(s-o)/2*l/e.stackCount,ratio:i.barPercentage,start:n}}(e,i,n):function(t,e,i){var n,a,o=i.barThickness,s=e.stackCount,l=e.pixels[t];return r.isNullOrUndef(o)?(n=e.min*i.categoryPercentage,a=i.barPercentage):(n=o*s,a=1),{chunk:n/s,ratio:a,start:l-n/2}}(e,i,n),o=this.getStackIndex(t,this.getMeta().stack),s=a.start+a.chunk*o+a.chunk/2,l=Math.min(r.valueOrDefault(n.maxBarThickness,1/0),a.chunk*a.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}},draw:function(){var t=this.chart,e=this.getValueScale(),i=this.getMeta().data,n=this.getDataset(),a=i.length,o=0;for(r.canvas.clipArea(t.ctx,t.chartArea);o<a;++o)isNaN(e.getRightValue(n.data[o]))||i[o].draw();r.canvas.unclipArea(t.ctx)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model;a.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:r.valueAtIndexOrDefault(e.hoverBackgroundColor,i,r.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor?n.hoverBorderColor:r.valueAtIndexOrDefault(e.hoverBorderColor,i,r.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:r.valueAtIndexOrDefault(e.hoverBorderWidth,i,a.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model,o=this.chart.options.elements.rectangle;a.backgroundColor=n.backgroundColor?n.backgroundColor:r.valueAtIndexOrDefault(e.backgroundColor,i,o.backgroundColor),a.borderColor=n.borderColor?n.borderColor:r.valueAtIndexOrDefault(e.borderColor,i,o.borderColor),a.borderWidth=n.borderWidth?n.borderWidth:r.valueAtIndexOrDefault(e.borderWidth,i,o.borderWidth)}}),t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{25:25,40:40,45:45}],16:[function(t,e,i){"use strict";var n=t(25),a=t(40),r=t(45);n._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}}),e.exports=function(t){t.controllers.bubble=t.DatasetController.extend({dataElementType:a.Point,update:function(t){var e=this,i=e.getMeta().data;r.each(i,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,a=n.getMeta(),r=t.custom||{},o=n.getScaleForId(a.xAxisID),s=n.getScaleForId(a.yAxisID),l=n._resolveElementOptions(t,e),u=n.getDataset().data[e],d=n.index,c=i?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),h=i?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,radius:i?0:l.radius,skip:r.skip||isNaN(c)||isNaN(h),x:c,y:h},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options;e.backgroundColor=r.valueOrDefault(i.hoverBackgroundColor,r.getHoverColor(i.backgroundColor)),e.borderColor=r.valueOrDefault(i.hoverBorderColor,r.getHoverColor(i.borderColor)),e.borderWidth=r.valueOrDefault(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},removeHoverStyle:function(t){var e=t._model,i=t._options;e.backgroundColor=i.backgroundColor,e.borderColor=i.borderColor,e.borderWidth=i.borderWidth,e.radius=i.radius},_resolveElementOptions:function(t,e){var i,n,a,o=this.chart,s=o.data.datasets[this.index],l=t.custom||{},u=o.options.elements.point,d=r.options.resolve,c=s.data[e],h={},f={chart:o,dataIndex:e,dataset:s,datasetIndex:this.index},p=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle"];for(i=0,n=p.length;i<n;++i)h[a=p[i]]=d([l[a],s[a],u[a]],f,e);return h.radius=d([l.radius,c?c.r:void 0,s.radius,u.radius],f,e),h}})}},{25:25,40:40,45:45}],17:[function(t,e,i){"use strict";var n=t(25),a=t(40),r=t(45);n._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var r=0;r<n[0].data.length;++r)e.push('<li><span style="background-color:'+n[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),o=e.datasets[0],s=a.data[n],l=s&&s.custom||{},u=r.valueAtIndexOrDefault,d=t.options.elements.arc;return{text:i,fillStyle:l.backgroundColor?l.backgroundColor:u(o.backgroundColor,n,d.backgroundColor),strokeStyle:l.borderColor?l.borderColor:u(o.borderColor,n,d.borderColor),lineWidth:l.borderWidth?l.borderWidth:u(o.borderWidth,n,d.borderWidth),hidden:isNaN(o.data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return r.isArray(i)?(i=i.slice())[0]+=n:i+=n,i}}}}),n._set("pie",r.clone(n.doughnut)),n._set("pie",{cutoutPercentage:0}),e.exports=function(t){t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:a.Arc,linkScales:r.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var e=this,i=e.chart,n=i.chartArea,a=i.options,o=a.elements.arc,s=n.right-n.left-o.borderWidth,l=n.bottom-n.top-o.borderWidth,u=Math.min(s,l),d={x:0,y:0},c=e.getMeta(),h=a.cutoutPercentage,f=a.circumference;if(f<2*Math.PI){var p=a.rotation%(2*Math.PI),g=(p+=2*Math.PI*(p>=Math.PI?-1:p<-Math.PI?1:0))+f,v={x:Math.cos(p),y:Math.sin(p)},m={x:Math.cos(g),y:Math.sin(g)},b=p<=0&&g>=0||p<=2*Math.PI&&2*Math.PI<=g,y=p<=.5*Math.PI&&.5*Math.PI<=g||p<=2.5*Math.PI&&2.5*Math.PI<=g,x=p<=-Math.PI&&-Math.PI<=g||p<=Math.PI&&Math.PI<=g,w=p<=.5*-Math.PI&&.5*-Math.PI<=g||p<=1.5*Math.PI&&1.5*Math.PI<=g,k=h/100,S={x:x?-1:Math.min(v.x*(v.x<0?1:k),m.x*(m.x<0?1:k)),y:w?-1:Math.min(v.y*(v.y<0?1:k),m.y*(m.y<0?1:k))},C={x:b?1:Math.max(v.x*(v.x>0?1:k),m.x*(m.x>0?1:k)),y:y?1:Math.max(v.y*(v.y>0?1:k),m.y*(m.y>0?1:k))},M={width:.5*(C.x-S.x),height:.5*(C.y-S.y)};u=Math.min(s/M.width,l/M.height),d={x:-.5*(C.x+S.x),y:-.5*(C.y+S.y)}}i.borderWidth=e.getMaxBorderWidth(c.data),i.outerRadius=Math.max((u-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:0,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=d.x*i.outerRadius,i.offsetY=d.y*i.outerRadius,c.total=e.calculateTotal(),e.outerRadius=i.outerRadius-i.radiusLength*e.getRingIndex(e.index),e.innerRadius=Math.max(e.outerRadius-i.radiusLength,0),r.each(c.data,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,a=n.chart,o=a.chartArea,s=a.options,l=s.animation,u=(o.left+o.right)/2,d=(o.top+o.bottom)/2,c=s.rotation,h=s.rotation,f=n.getDataset(),p=i&&l.animateRotate?0:t.hidden?0:n.calculateCircumference(f.data[e])*(s.circumference/(2*Math.PI)),g=i&&l.animateScale?0:n.innerRadius,v=i&&l.animateScale?0:n.outerRadius,m=r.valueAtIndexOrDefault;r.extend(t,{_datasetIndex:n.index,_index:e,_model:{x:u+a.offsetX,y:d+a.offsetY,startAngle:c,endAngle:h,circumference:p,outerRadius:v,innerRadius:g,label:m(f.label,e,a.data.labels[e])}});var b=t._model;this.removeHoverStyle(t),i&&l.animateRotate||(b.startAngle=0===e?s.rotation:n.getMeta().data[e-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,e=this.getDataset(),i=this.getMeta(),n=0;return r.each(i.data,function(i,a){t=e.data[a],isNaN(t)||i.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){for(var e,i,n=0,a=this.index,r=t.length,o=0;o<r;o++)e=t[o]._model?t[o]._model.borderWidth:0,n=(i=t[o]._chart?t[o]._chart.config.data.datasets[a].hoverBorderWidth:0)>(n=e>n?e:n)?i:n;return n}})}},{25:25,40:40,45:45}],18:[function(t,e,i){"use strict";var n=t(25),a=t(40),r=t(45);n._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(t){function e(t,e){return r.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,update:function(t){var i,n,a,o=this,s=o.getMeta(),l=s.dataset,u=s.data||[],d=o.chart.options,c=d.elements.line,h=o.getScaleForId(s.yAxisID),f=o.getDataset(),p=e(f,d);for(p&&(a=l.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),l._scale=h,l._datasetIndex=o.index,l._children=u,l._model={spanGaps:f.spanGaps?f.spanGaps:d.spanGaps,tension:a.tension?a.tension:r.valueOrDefault(f.lineTension,c.tension),backgroundColor:a.backgroundColor?a.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:f.borderWidth||c.borderWidth,borderColor:a.borderColor?a.borderColor:f.borderColor||c.borderColor,borderCapStyle:a.borderCapStyle?a.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:a.borderDash?a.borderDash:f.borderDash||c.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:a.fill?a.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:a.steppedLine?a.steppedLine:r.valueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:a.cubicInterpolationMode?a.cubicInterpolationMode:r.valueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode)},l.pivot()),i=0,n=u.length;i<n;++i)o.updateElement(u[i],i,t);for(p&&0!==l._model.tension&&o.updateBezierControlPoints(),i=0,n=u.length;i<n;++i)u[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,n=this.getDataset(),a=t.custom||{};return a.backgroundColor?i=a.backgroundColor:n.pointBackgroundColor?i=r.valueAtIndexOrDefault(n.pointBackgroundColor,e,i):n.backgroundColor&&(i=n.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,n=this.getDataset(),a=t.custom||{};return a.borderColor?i=a.borderColor:n.pointBorderColor?i=r.valueAtIndexOrDefault(n.pointBorderColor,e,i):n.borderColor&&(i=n.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,n=this.getDataset(),a=t.custom||{};return isNaN(a.borderWidth)?!isNaN(n.pointBorderWidth)||r.isArray(n.pointBorderWidth)?i=r.valueAtIndexOrDefault(n.pointBorderWidth,e,i):isNaN(n.borderWidth)||(i=n.borderWidth):i=a.borderWidth,i},updateElement:function(t,e,i){var n,a,o=this,s=o.getMeta(),l=t.custom||{},u=o.getDataset(),d=o.index,c=u.data[e],h=o.getScaleForId(s.yAxisID),f=o.getScaleForId(s.xAxisID),p=o.chart.options.elements.point;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),n=f.getPixelForValue("object"==typeof c?c:NaN,e,d),a=i?h.getBasePixel():o.calculatePointY(c,e,d),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:n,y:a,skip:l.skip||isNaN(n)||isNaN(a),radius:l.radius||r.valueAtIndexOrDefault(u.pointRadius,e,p.radius),pointStyle:l.pointStyle||r.valueAtIndexOrDefault(u.pointStyle,e,p.pointStyle),backgroundColor:o.getPointBackgroundColor(t,e),borderColor:o.getPointBorderColor(t,e),borderWidth:o.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,hitRadius:l.hitRadius||r.valueAtIndexOrDefault(u.pointHitRadius,e,p.hitRadius)}},calculatePointY:function(t,e,i){var n,a,r,o=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),u=0,d=0;if(l.options.stacked){for(n=0;n<i;n++)if(a=o.data.datasets[n],"line"===(r=o.getDatasetMeta(n)).type&&r.yAxisID===l.id&&o.isDatasetVisible(n)){var c=Number(l.getRightValue(a.data[e]));c<0?d+=c||0:u+=c||0}var h=Number(l.getRightValue(t));return h<0?l.getPixelForValue(d+h):l.getPixelForValue(u+h)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,a=this.getMeta(),o=this.chart.chartArea,s=a.data||[];function l(t,e,i){return Math.max(Math.min(t,i),e)}if(a.dataset._model.spanGaps&&(s=s.filter(function(t){return!t._model.skip})),"monotone"===a.dataset._model.cubicInterpolationMode)r.splineCurveMonotone(s);else for(t=0,e=s.length;t<e;++t)i=s[t]._model,n=r.splineCurve(r.previousItem(s,t)._model,i,r.nextItem(s,t)._model,a.dataset._model.tension),i.controlPointPreviousX=n.previous.x,i.controlPointPreviousY=n.previous.y,i.controlPointNextX=n.next.x,i.controlPointNextY=n.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,e=s.length;t<e;++t)(i=s[t]._model).controlPointPreviousX=l(i.controlPointPreviousX,o.left,o.right),i.controlPointPreviousY=l(i.controlPointPreviousY,o.top,o.bottom),i.controlPointNextX=l(i.controlPointNextX,o.left,o.right),i.controlPointNextY=l(i.controlPointNextY,o.top,o.bottom)},draw:function(){var t=this.chart,i=this.getMeta(),n=i.data||[],a=t.chartArea,o=n.length,s=0;for(r.canvas.clipArea(t.ctx,a),e(this.getDataset(),t.options)&&i.dataset.draw(),r.canvas.unclipArea(t.ctx);s<o;++s)n[s].draw(a)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model;a.radius=n.hoverRadius||r.valueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),a.backgroundColor=n.hoverBackgroundColor||r.valueAtIndexOrDefault(e.pointHoverBackgroundColor,i,r.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor||r.valueAtIndexOrDefault(e.pointHoverBorderColor,i,r.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth||r.valueAtIndexOrDefault(e.pointHoverBorderWidth,i,a.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),o.radius=a.radius||r.valueAtIndexOrDefault(i.pointRadius,n,e.chart.options.elements.point.radius),o.backgroundColor=e.getPointBackgroundColor(t,n),o.borderColor=e.getPointBorderColor(t,n),o.borderWidth=e.getPointBorderWidth(t,n)}})}},{25:25,40:40,45:45}],19:[function(t,e,i){"use strict";var n=t(25),a=t(40),r=t(45);n._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var r=0;r<n[0].data.length;++r)e.push('<li><span style="background-color:'+n[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),o=e.datasets[0],s=a.data[n].custom||{},l=r.valueAtIndexOrDefault,u=t.options.elements.arc;return{text:i,fillStyle:s.backgroundColor?s.backgroundColor:l(o.backgroundColor,n,u.backgroundColor),strokeStyle:s.borderColor?s.borderColor:l(o.borderColor,n,u.borderColor),lineWidth:s.borderWidth?s.borderWidth:l(o.borderWidth,n,u.borderWidth),hidden:isNaN(o.data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),e.exports=function(t){t.controllers.polarArea=t.DatasetController.extend({dataElementType:a.Arc,linkScales:r.noop,update:function(t){var e=this,i=e.chart,n=i.chartArea,a=e.getMeta(),o=i.options,s=o.elements.arc,l=Math.min(n.right-n.left,n.bottom-n.top);i.outerRadius=Math.max((l-s.borderWidth/2)/2,0),i.innerRadius=Math.max(o.cutoutPercentage?i.outerRadius/100*o.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),e.outerRadius=i.outerRadius-i.radiusLength*e.index,e.innerRadius=e.outerRadius-i.radiusLength,a.count=e.countVisibleElements(),r.each(a.data,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){for(var n=this,a=n.chart,o=n.getDataset(),s=a.options,l=s.animation,u=a.scale,d=a.data.labels,c=n.calculateCircumference(o.data[e]),h=u.xCenter,f=u.yCenter,p=0,g=n.getMeta(),v=0;v<e;++v)isNaN(o.data[v])||g.data[v].hidden||++p;var m=s.startAngle,b=t.hidden?0:u.getDistanceFromCenterForValue(o.data[e]),y=m+c*p,x=y+(t.hidden?0:c),w=l.animateScale?0:u.getDistanceFromCenterForValue(o.data[e]);r.extend(t,{_datasetIndex:n.index,_index:e,_scale:u,_model:{x:h,y:f,innerRadius:0,outerRadius:i?w:b,startAngle:i&&l.animateRotate?m:y,endAngle:i&&l.animateRotate?m:x,label:r.valueAtIndexOrDefault(d,e,d[e])}}),n.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),i=0;return r.each(e.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{25:25,40:40,45:45}],20:[function(t,e,i){"use strict";var n=t(25),a=t(40),r=t(45);n._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,linkScales:r.noop,update:function(t){var e=this,i=e.getMeta(),n=i.dataset,a=i.data,o=n.custom||{},s=e.getDataset(),l=e.chart.options.elements.line,u=e.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),r.extend(i.dataset,{_datasetIndex:e.index,_scale:u,_children:a,_loop:!0,_model:{tension:o.tension?o.tension:r.valueOrDefault(s.lineTension,l.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||l.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||l.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||l.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle}}),i.dataset.pivot(),r.each(a,function(i,n){e.updateElement(i,n,t)},e),e.updateBezierControlPoints()},updateElement:function(t,e,i){var n=this,a=t.custom||{},o=n.getDataset(),s=n.chart.scale,l=n.chart.options.elements.point,u=s.getPointPositionForValue(e,o.data[e]);void 0!==o.radius&&void 0===o.pointRadius&&(o.pointRadius=o.radius),void 0!==o.hitRadius&&void 0===o.pointHitRadius&&(o.pointHitRadius=o.hitRadius),r.extend(t,{_datasetIndex:n.index,_index:e,_scale:s,_model:{x:i?s.xCenter:u.x,y:i?s.yCenter:u.y,tension:a.tension?a.tension:r.valueOrDefault(o.lineTension,n.chart.options.elements.line.tension),radius:a.radius?a.radius:r.valueAtIndexOrDefault(o.pointRadius,e,l.radius),backgroundColor:a.backgroundColor?a.backgroundColor:r.valueAtIndexOrDefault(o.pointBackgroundColor,e,l.backgroundColor),borderColor:a.borderColor?a.borderColor:r.valueAtIndexOrDefault(o.pointBorderColor,e,l.borderColor),borderWidth:a.borderWidth?a.borderWidth:r.valueAtIndexOrDefault(o.pointBorderWidth,e,l.borderWidth),pointStyle:a.pointStyle?a.pointStyle:r.valueAtIndexOrDefault(o.pointStyle,e,l.pointStyle),hitRadius:a.hitRadius?a.hitRadius:r.valueAtIndexOrDefault(o.pointHitRadius,e,l.hitRadius)}}),t._model.skip=a.skip?a.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,e=this.getMeta();r.each(e.data,function(i,n){var a=i._model,o=r.splineCurve(r.previousItem(e.data,n,!0)._model,a,r.nextItem(e.data,n,!0)._model,a.tension);a.controlPointPreviousX=Math.max(Math.min(o.previous.x,t.right),t.left),a.controlPointPreviousY=Math.max(Math.min(o.previous.y,t.bottom),t.top),a.controlPointNextX=Math.max(Math.min(o.next.x,t.right),t.left),a.controlPointNextY=Math.max(Math.min(o.next.y,t.bottom),t.top),i.pivot()})},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,a=t._model;a.radius=i.hoverRadius?i.hoverRadius:r.valueAtIndexOrDefault(e.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),a.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:r.valueAtIndexOrDefault(e.pointHoverBackgroundColor,n,r.getHoverColor(a.backgroundColor)),a.borderColor=i.hoverBorderColor?i.hoverBorderColor:r.valueAtIndexOrDefault(e.pointHoverBorderColor,n,r.getHoverColor(a.borderColor)),a.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:r.valueAtIndexOrDefault(e.pointHoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,a=t._model,o=this.chart.options.elements.point;a.radius=i.radius?i.radius:r.valueAtIndexOrDefault(e.pointRadius,n,o.radius),a.backgroundColor=i.backgroundColor?i.backgroundColor:r.valueAtIndexOrDefault(e.pointBackgroundColor,n,o.backgroundColor),a.borderColor=i.borderColor?i.borderColor:r.valueAtIndexOrDefault(e.pointBorderColor,n,o.borderColor),a.borderWidth=i.borderWidth?i.borderWidth:r.valueAtIndexOrDefault(e.pointBorderWidth,n,o.borderWidth)}})}},{25:25,40:40,45:45}],21:[function(t,e,i){"use strict";t(25)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),e.exports=function(t){t.controllers.scatter=t.controllers.line}},{25:25}],22:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45);n._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:r.noop,onComplete:r.noop}}),e.exports=function(t){t.Animation=a.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,n){var a,r,o=this.animations;for(e.chart=t,n||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=r.findIndex(this.animations,function(e){return e.chart===t});-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=r.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),i=0;t.dropFrames>1&&(i=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+i);var n=Date.now();t.dropFrames+=(n-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var e,i,n=this.animations,a=0;a<n.length;)i=(e=n[a]).chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),r.callback(e.render,[i,e],i),r.callback(e.onAnimationProgress,[e],i),e.currentStep>=e.numSteps?(r.callback(e.onAnimationComplete,[e],i),i.animating=!1,n.splice(a,1)):++a}},Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},{25:25,26:26,45:45}],23:[function(t,e,i){"use strict";var n=t(25),a=t(45),r=t(28),o=t(30),s=t(48),l=t(31);e.exports=function(t){function e(t){return"top"===t||"bottom"===t}t.types={},t.instances={},t.controllers={},a.extend(t.prototype,{construct:function(e,i){var r=this;i=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=a.configMerge(n.global,n[t.type],t.options||{}),t}(i);var o=s.acquireContext(e,i),l=o&&o.canvas,u=l&&l.height,d=l&&l.width;r.id=a.uid(),r.ctx=o,r.canvas=l,r.config=i,r.width=d,r.height=u,r.aspectRatio=u?d/u:null,r.options=i.options,r._bufferedRender=!1,r.chart=r,r.controller=r,t.instances[r.id]=r,Object.defineProperty(r,"data",{get:function(){return r.config.data},set:function(t){r.config.data=t}}),o&&l?(r.initialize(),r.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return l.notify(t,"beforeInit"),a.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),l.notify(t,"afterInit"),t},clear:function(){return a.canvas.clear(this),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,n=e.canvas,r=i.maintainAspectRatio&&e.aspectRatio||null,o=Math.max(0,Math.floor(a.getMaximumWidth(n))),s=Math.max(0,Math.floor(r?o/r:a.getMaximumHeight(n)));if((e.width!==o||e.height!==s)&&(n.width=e.width=o,n.height=e.height=s,n.style.width=o+"px",n.style.height=s+"px",a.retinaScale(e,i.devicePixelRatio),!t)){var u={width:o,height:s};l.notify(e,"resize",[u]),e.options.onResize&&e.options.onResize(e,u),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;a.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),a.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var i=this,n=i.options,r=i.scales||{},o=[],s=Object.keys(r).reduce(function(t,e){return t[e]=!1,t},{});n.scales&&(o=o.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),n.scale&&o.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),a.each(o,function(n){var o=n.options,l=o.id,u=a.valueOrDefault(o.type,n.dtype);e(o.position)!==e(n.dposition)&&(o.position=n.dposition),s[l]=!0;var d=null;if(l in r&&r[l].type===u)(d=r[l]).options=o,d.ctx=i.ctx,d.chart=i;else{var c=t.scaleService.getScaleConstructor(u);if(!c)return;d=new c({id:l,type:u,options:o,ctx:i.ctx,chart:i}),r[d.id]=d}d.mergeTicksOptions(),n.isDefault&&(i.scale=d)}),a.each(s,function(t,e){t||delete r[e]}),i.scales=r,t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,i=[],n=[];return a.each(e.data.datasets,function(a,r){var o=e.getDatasetMeta(r),s=a.type||e.config.type;if(o.type&&o.type!==s&&(e.destroyDatasetMeta(r),o=e.getDatasetMeta(r)),o.type=s,i.push(o.type),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{var l=t.controllers[o.type];if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new l(e,r),n.push(o.controller)}},e),n},resetElements:function(){var t=this;a.each(t.data.datasets,function(e,i){t.getDatasetMeta(i).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(e){var i,n,r=this;if(e&&"object"==typeof e||(e={duration:e,lazy:arguments[1]}),n=(i=r).options,a.each(i.scales,function(t){o.removeBox(i,t)}),n=a.configMerge(t.defaults.global,t.defaults[i.config.type],n),i.options=i.config.options=n,i.ensureScalesHaveIDs(),i.buildOrUpdateScales(),i.tooltip._options=n.tooltips,i.tooltip.initialize(),l._invalidate(r),!1!==l.notify(r,"beforeUpdate")){r.tooltip._data=r.data;var s=r.buildOrUpdateControllers();a.each(r.data.datasets,function(t,e){r.getDatasetMeta(e).controller.buildOrUpdateElements()},r),r.updateLayout(),r.options.animation&&r.options.animation.duration&&a.each(s,function(t){t.reset()}),r.updateDatasets(),r.tooltip.initialize(),r.lastActive=[],l.notify(r,"afterUpdate"),r._bufferedRender?r._bufferedRequest={duration:e.duration,easing:e.easing,lazy:e.lazy}:r.render(e)}},updateLayout:function(){!1!==l.notify(this,"beforeLayout")&&(o.update(this,this.width,this.height),l.notify(this,"afterScaleUpdate"),l.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==l.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);l.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==l.notify(this,"beforeDatasetUpdate",[i])&&(e.controller.update(),l.notify(this,"afterDatasetUpdate",[i]))},render:function(e){var i=this;e&&"object"==typeof e||(e={duration:e,lazy:arguments[1]});var n=e.duration,r=e.lazy;if(!1!==l.notify(i,"beforeRender")){var o=i.options.animation,s=function(t){l.notify(i,"afterRender"),a.callback(o&&o.onComplete,[t],i)};if(o&&(void 0!==n&&0!==n||void 0===n&&0!==o.duration)){var u=new t.Animation({numSteps:(n||o.duration)/16.66,easing:e.easing||o.easing,render:function(t,e){var i=a.easing.effects[e.easing],n=e.currentStep,r=n/e.numSteps;t.draw(i(r),r,n)},onAnimationProgress:o.onProgress,onAnimationComplete:s});t.animationService.addAnimation(i,u,n,r)}else i.draw(),s(new t.Animation({numSteps:0,chart:i}));return i}},draw:function(t){var e=this;e.clear(),a.isNullOrUndef(t)&&(t=1),e.transition(t),!1!==l.notify(e,"beforeDraw",[t])&&(a.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),l.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==l.notify(e,"beforeDatasetsDraw",[t])){for(var i=(e.data.datasets||[]).length-1;i>=0;--i)e.isDatasetVisible(i)&&e.drawDataset(i,t);l.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i=this.getDatasetMeta(t),n={meta:i,index:t,easingValue:e};!1!==l.notify(this,"beforeDatasetDraw",[n])&&(i.controller.draw(e),l.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==l.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),l.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return r.modes.single(this,t)},getElementsAtEvent:function(t){return r.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return r.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var n=r.modes[e];return"function"==typeof n?n(this,t,i):[]},getDatasetAtEvent:function(t){return r.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],n=i._meta&&i._meta[e];n&&(n.controller.destroy(),delete i._meta[e])},destroy:function(){var e,i,n=this,r=n.canvas;for(n.stop(),e=0,i=n.data.datasets.length;e<i;++e)n.destroyDatasetMeta(e);r&&(n.unbindEvents(),a.canvas.clear(n),s.releaseContext(n.ctx),n.canvas=null,n.ctx=null),l.notify(n,"destroy"),delete t.instances[n.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e)},bindEvents:function(){var t=this,e=t._listeners={},i=function(){t.eventHandler.apply(t,arguments)};a.each(t.options.events,function(n){s.addEventListener(t,n,i),e[n]=i}),t.options.responsive&&(i=function(){t.resize()},s.addEventListener(t,"resize",i),e.resize=i)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,a.each(e,function(e,i){s.removeEventListener(t,i,e)}))},updateHoverStyle:function(t,e,i){var n,a,r,o=i?"setHoverStyle":"removeHoverStyle";for(a=0,r=t.length;a<r;++a)(n=t[a])&&this.getDatasetMeta(n._datasetIndex).controller[o](n)},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==l.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var n=e.handleEvent(t);i&&(n=i._start?i.handleEvent(t):n|i.handleEvent(t)),l.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):n&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,n=i.options||{},r=n.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,r.mode,r),a.callback(n.onHover||n.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,r.mode,!1),i.active.length&&r.mode&&i.updateHoverStyle(i.active,r.mode,!0),e=!a.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),t.Controller=t}},{25:25,28:28,30:30,31:31,45:45,48:48}],24:[function(t,e,i){"use strict";var n=t(45);e.exports=function(t){var e=["push","pop","shift","splice","unshift"];function i(t,i){var n=t._chartjs;if(n){var a=n.listeners,r=a.indexOf(i);-1!==r&&a.splice(r,1),a.length>0||(e.forEach(function(e){delete t[e]}),delete t._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},n.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),i=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=i.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=i.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&i(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],a=i.data;for(t=0,e=n.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,a,r=this,o=r.getDataset(),s=o.data||(o.data=[]);r._data!==s&&(r._data&&i(r._data,r),a=r,(t=s)._chartjs?t._chartjs.listeners.push(a):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[a]}}),e.forEach(function(e){var i="onData"+e.charAt(0).toUpperCase()+e.slice(1),a=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),r=a.apply(this,e);return n.each(t._chartjs.listeners,function(t){"function"==typeof t[i]&&t[i].apply(t,e)}),r}})})),r._data=s),r.resyncElements()},update:n.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,a=0;a<n;++a)i[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},removeHoverStyle:function(t,e){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=n.valueAtIndexOrDefault,s=t._model;s.backgroundColor=r.backgroundColor?r.backgroundColor:o(i.backgroundColor,a,e.backgroundColor),s.borderColor=r.borderColor?r.borderColor:o(i.borderColor,a,e.borderColor),s.borderWidth=r.borderWidth?r.borderWidth:o(i.borderWidth,a,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=n.valueAtIndexOrDefault,o=n.getHoverColor,s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:r(e.hoverBackgroundColor,i,o(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:r(e.hoverBorderColor,i,o(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:r(e.hoverBorderWidth,i,s.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):n>i&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=n.inherits}},{45:45}],25:[function(t,e,i){"use strict";var n=t(45);e.exports={_set:function(t,e){return n.merge(this[t]||(this[t]={}),e)}}},{45:45}],26:[function(t,e,i){"use strict";var n=t(3),a=t(45);var r=function(t){a.extend(this,t),this.initialize.apply(this,arguments)};a.extend(r.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=a.clone(t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,a=e._start,r=e._view;return i&&1!==t?(r||(r=e._view={}),a||(a=e._start={}),function(t,e,i,a){var r,o,s,l,u,d,c,h,f,p=Object.keys(i);for(r=0,o=p.length;r<o;++r)if(d=i[s=p[r]],e.hasOwnProperty(s)||(e[s]=d),(l=e[s])!==d&&"_"!==s[0]){if(t.hasOwnProperty(s)||(t[s]=l),(c=typeof d)==typeof(u=t[s]))if("string"===c){if((h=n(u)).valid&&(f=n(d)).valid){e[s]=f.mix(h,a).rgbString();continue}}else if("number"===c&&isFinite(u)&&isFinite(d)){e[s]=u+(d-u)*a;continue}e[s]=d}}(a,r,i,t),e):(e._view=i,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return a.isNumber(this._model.x)&&a.isNumber(this._model.y)}}),r.extend=a.inherits,e.exports=r},{3:3,45:45}],27:[function(t,e,i){"use strict";var n=t(3),a=t(25),r=t(45);e.exports=function(t){function e(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function i(t){return void 0!==t&&null!==t&&"none"!==t}function o(t,n,a){var r=document.defaultView,o=t.parentNode,s=r.getComputedStyle(t)[n],l=r.getComputedStyle(o)[n],u=i(s),d=i(l),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(s,t,a):c,d?e(l,o,a):c):"none"}r.configMerge=function(){return r.merge(r.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(e,i,n,a){var o=i[e]||{},s=n[e];"scales"===e?i[e]=r.scaleMerge(o,s):"scale"===e?i[e]=r.merge(o,[t.scaleService.getScaleDefaults(s.type),s]):r._merger(e,i,n,a)}})},r.scaleMerge=function(){return r.merge(r.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(e,i,n,a){if("xAxes"===e||"yAxes"===e){var o,s,l,u=n[e].length;for(i[e]||(i[e]=[]),o=0;o<u;++o)l=n[e][o],s=r.valueOrDefault(l.type,"xAxes"===e?"category":"linear"),o>=i[e].length&&i[e].push({}),!i[e][o].type||l.type&&l.type!==i[e][o].type?r.merge(i[e][o],[t.scaleService.getScaleDefaults(s),l]):r.merge(i[e][o],l)}else r._merger(e,i,n,a)}})},r.where=function(t,e){if(r.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return r.each(t,function(t){e(t)&&i.push(t)}),i},r.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,a=t.length;n<a;++n)if(e.call(i,t[n],n,t))return n;return-1},r.findNextWhere=function(t,e,i){r.isNullOrUndef(i)&&(i=-1);for(var n=i+1;n<t.length;n++){var a=t[n];if(e(a))return a}},r.findPreviousWhere=function(t,e,i){r.isNullOrUndef(i)&&(i=t.length);for(var n=i-1;n>=0;n--){var a=t[n];if(e(a))return a}},r.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},r.almostEquals=function(t,e,i){return Math.abs(t-e)<i},r.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&i+e>t},r.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},r.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},r.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},r.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e},r.toRadians=function(t){return t*(Math.PI/180)},r.toDegrees=function(t){return t*(180/Math.PI)},r.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),r=Math.atan2(n,i);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},r.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},r.aliasPixel=function(t){return t%2==0?0:.5},r.splineCurve=function(t,e,i,n){var a=t.skip?e:t,r=e,o=i.skip?e:i,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),c=n*(u=isNaN(u)?0:u),h=n*(d=isNaN(d)?0:d);return{previous:{x:r.x-c*(o.x-a.x),y:r.y-c*(o.y-a.y)},next:{x:r.x+h*(o.x-a.x),y:r.y+h*(o.y-a.y)}}},r.EPSILON=Number.EPSILON||1e-14,r.splineCurveMonotone=function(t){var e,i,n,a,o,s,l,u,d,c=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),h=c.length;for(e=0;e<h;++e)if(!(n=c[e]).model.skip){if(i=e>0?c[e-1]:null,(a=e<h-1?c[e+1]:null)&&!a.model.skip){var f=a.model.x-n.model.x;n.deltaK=0!==f?(a.model.y-n.model.y)/f:0}!i||i.model.skip?n.mK=n.deltaK:!a||a.model.skip?n.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<h-1;++e)n=c[e],a=c[e+1],n.model.skip||a.model.skip||(r.almostEquals(n.deltaK,0,this.EPSILON)?n.mK=a.mK=0:(o=n.mK/n.deltaK,s=a.mK/n.deltaK,(u=Math.pow(o,2)+Math.pow(s,2))<=9||(l=3/Math.sqrt(u),n.mK=o*l*n.deltaK,a.mK=s*l*n.deltaK)));for(e=0;e<h;++e)(n=c[e]).model.skip||(i=e>0?c[e-1]:null,a=e<h-1?c[e+1]:null,i&&!i.model.skip&&(d=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-d,n.model.controlPointPreviousY=n.model.y-d*n.mK),a&&!a.model.skip&&(d=(a.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+d,n.model.controlPointNextY=n.model.y+d*n.mK))},r.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},r.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},r.niceNum=function(t,e){var i=Math.floor(r.log10(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)},r.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},r.getRelativePosition=function(t,e){var i,n,a=t.originalEvent||t,o=t.currentTarget||t.srcElement,s=o.getBoundingClientRect(),l=a.touches;l&&l.length>0?(i=l[0].clientX,n=l[0].clientY):(i=a.clientX,n=a.clientY);var u=parseFloat(r.getStyle(o,"padding-left")),d=parseFloat(r.getStyle(o,"padding-top")),c=parseFloat(r.getStyle(o,"padding-right")),h=parseFloat(r.getStyle(o,"padding-bottom")),f=s.right-s.left-u-c,p=s.bottom-s.top-d-h;return{x:i=Math.round((i-s.left-u)/f*o.width/e.currentDevicePixelRatio),y:n=Math.round((n-s.top-d)/p*o.height/e.currentDevicePixelRatio)}},r.getConstraintWidth=function(t){return o(t,"max-width","clientWidth")},r.getConstraintHeight=function(t){return o(t,"max-height","clientHeight")},r.getMaximumWidth=function(t){var e=t.parentNode;if(!e)return t.clientWidth;var i=parseInt(r.getStyle(e,"padding-left"),10),n=parseInt(r.getStyle(e,"padding-right"),10),a=e.clientWidth-i-n,o=r.getConstraintWidth(t);return isNaN(o)?a:Math.min(a,o)},r.getMaximumHeight=function(t){var e=t.parentNode;if(!e)return t.clientHeight;var i=parseInt(r.getStyle(e,"padding-top"),10),n=parseInt(r.getStyle(e,"padding-bottom"),10),a=e.clientHeight-i-n,o=r.getConstraintHeight(t);return isNaN(o)?a:Math.min(a,o)},r.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},r.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||window.devicePixelRatio||1;if(1!==i){var n=t.canvas,a=t.height,r=t.width;n.height=a*i,n.width=r*i,t.ctx.scale(i,i),n.style.height||n.style.width||(n.style.height=a+"px",n.style.width=r+"px")}},r.fontString=function(t,e,i){return e+" "+t+"px "+i},r.longestText=function(t,e,i,n){var a=(n=n||{}).data=n.data||{},o=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},o=n.garbageCollect=[],n.font=e),t.font=e;var s=0;r.each(i,function(e){void 0!==e&&null!==e&&!0!==r.isArray(e)?s=r.measureText(t,a,o,s,e):r.isArray(e)&&r.each(e,function(e){void 0===e||null===e||r.isArray(e)||(s=r.measureText(t,a,o,s,e))})});var l=o.length/2;if(l>i.length){for(var u=0;u<l;u++)delete a[o[u]];o.splice(0,l)}return s},r.measureText=function(t,e,i,n,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,i.push(a)),r>n&&(n=r),n},r.numberOfLabelLines=function(t){var e=1;return r.each(t,function(t){r.isArray(t)&&t.length>e&&(e=t.length)}),e},r.color=n?function(t){return t instanceof CanvasGradient&&(t=a.global.defaultColor),n(t)}:function(t){return console.error("Color.js not found!"),t},r.getHoverColor=function(t){return t instanceof CanvasPattern?t:r.color(t).saturate(.5).darken(.1).rgbString()}}},{25:25,3:3,45:45}],28:[function(t,e,i){"use strict";var n=t(45);function a(t,e){return t.native?{x:t.x,y:t.y}:n.getRelativePosition(t,e)}function r(t,e){var i,n,a,r,o;for(n=0,r=t.data.datasets.length;n<r;++n)if(t.isDatasetVisible(n))for(a=0,o=(i=t.getDatasetMeta(n)).data.length;a<o;++a){var s=i.data[a];s._view.skip||e(s)}}function o(t,e){var i=[];return r(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function s(t,e,i,n){var a=Number.POSITIVE_INFINITY,o=[];return r(t,function(t){if(!i||t.inRange(e.x,e.y)){var r=t.getCenterPoint(),s=n(e,r);s<a?(o=[t],a=s):s===a&&o.push(t)}}),o}function l(t){var e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){var a=e?Math.abs(t.x-n.x):0,r=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function u(t,e,i){var n=a(e,t);i.axis=i.axis||"x";var r=l(i.axis),u=i.intersect?o(t,n):s(t,n,!1,r),d=[];return u.length?(t.data.datasets.forEach(function(e,i){if(t.isDatasetVisible(i)){var n=t.getDatasetMeta(i).data[u[0]._index];n&&!n._view.skip&&d.push(n)}}),d):[]}e.exports={modes:{single:function(t,e){var i=a(e,t),n=[];return r(t,function(t){if(t.inRange(i.x,i.y))return n.push(t),n}),n.slice(0,1)},label:u,index:u,dataset:function(t,e,i){var n=a(e,t);i.axis=i.axis||"xy";var r=l(i.axis),u=i.intersect?o(t,n):s(t,n,!1,r);return u.length>0&&(u=t.getDatasetMeta(u[0]._datasetIndex).data),u},"x-axis":function(t,e){return u(t,e,{intersect:!1})},point:function(t,e){return o(t,a(e,t))},nearest:function(t,e,i){var n=a(e,t);i.axis=i.axis||"xy";var r=l(i.axis),o=s(t,n,i.intersect,r);return o.length>1&&o.sort(function(t,e){var i=t.getArea()-e.getArea();return 0===i&&(i=t._datasetIndex-e._datasetIndex),i}),o.slice(0,1)},x:function(t,e,i){var n=a(e,t),o=[],s=!1;return r(t,function(t){t.inXRange(n.x)&&o.push(t),t.inRange(n.x,n.y)&&(s=!0)}),i.intersect&&!s&&(o=[]),o},y:function(t,e,i){var n=a(e,t),o=[],s=!1;return r(t,function(t){t.inYRange(n.y)&&o.push(t),t.inRange(n.x,n.y)&&(s=!0)}),i.intersect&&!s&&(o=[]),o}}}},{45:45}],29:[function(t,e,i){"use strict";t(25)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.Chart=t,t}},{25:25}],30:[function(t,e,i){"use strict";var n=t(45);function a(t,e){return n.where(t,function(t){return t.position===e})}function r(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,i){var n=e?i:t,a=e?t:i;return n.weight===a.weight?n._tmpIndex_-a._tmpIndex_:n.weight-a.weight}),t.forEach(function(t){delete t._tmpIndex_})}e.exports={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)n=a[o],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(t,e,i){if(t){var o=t.options.layout||{},s=n.options.toPadding(o.padding),l=s.left,u=s.right,d=s.top,c=s.bottom,h=a(t.boxes,"left"),f=a(t.boxes,"right"),p=a(t.boxes,"top"),g=a(t.boxes,"bottom"),v=a(t.boxes,"chartArea");r(h,!0),r(f,!1),r(p,!0),r(g,!1);var m=e-l-u,b=i-d-c,y=b/2,x=(e-m/2)/(h.length+f.length),w=(i-y)/(p.length+g.length),k=m,S=b,C=[];n.each(h.concat(f,p,g),function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?m:k,w),S-=e.height):(e=t.update(x,S),k-=e.width),C.push({horizontal:i,minSize:e,box:t})});var M=0,P=0,A=0,T=0;n.each(p.concat(g),function(t){if(t.getPadding){var e=t.getPadding();M=Math.max(M,e.left),P=Math.max(P,e.right)}}),n.each(h.concat(f),function(t){if(t.getPadding){var e=t.getPadding();A=Math.max(A,e.top),T=Math.max(T,e.bottom)}});var I=l,_=u,D=d,F=c;n.each(h.concat(f),B),n.each(h,function(t){I+=t.width}),n.each(f,function(t){_+=t.width}),n.each(p.concat(g),B),n.each(p,function(t){D+=t.height}),n.each(g,function(t){F+=t.height}),n.each(h.concat(f),function(t){var e=n.findNextWhere(C,function(e){return e.box===t}),i={left:0,right:0,top:D,bottom:F};e&&t.update(e.minSize.width,S,i)}),I=l,_=u,D=d,F=c,n.each(h,function(t){I+=t.width}),n.each(f,function(t){_+=t.width}),n.each(p,function(t){D+=t.height}),n.each(g,function(t){F+=t.height});var O=Math.max(M-I,0);I+=O,_+=Math.max(P-_,0);var L=Math.max(A-D,0);D+=L,F+=Math.max(T-F,0);var R=i-D-F,V=e-I-_;V===k&&R===S||(n.each(h,function(t){t.height=R}),n.each(f,function(t){t.height=R}),n.each(p,function(t){t.fullWidth||(t.width=V)}),n.each(g,function(t){t.fullWidth||(t.width=V)}),S=R,k=V);var z=l+O,N=d+L;n.each(h.concat(p),E),z+=k,N+=S,n.each(f,E),n.each(g,E),t.chartArea={left:I,top:D,right:I+k,bottom:D+S},n.each(v,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,S)})}function B(t){var e=n.findNextWhere(C,function(e){return e.box===t});if(e)if(t.isHorizontal()){var i={left:Math.max(I,M),right:Math.max(_,P),top:0,bottom:0};t.update(t.fullWidth?m:k,b/2,i)}else t.update(e.minSize.width,S)}function E(t){t.isHorizontal()?(t.left=t.fullWidth?l:I,t.right=t.fullWidth?e-u:I+k,t.top=N,t.bottom=N+t.height,N=t.bottom):(t.left=z,t.right=z+t.width,t.top=D,t.bottom=D+S,z=t.right)}}}},{45:45}],31:[function(t,e,i){"use strict";var n=t(25),a=t(45);n._set("global",{plugins:{}}),e.exports={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,a,r,o,s,l=this.descriptors(t),u=l.length;for(n=0;n<u;++n)if("function"==typeof(s=(r=(a=l[n]).plugin)[e])&&((o=[t].concat(i||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var i=[],r=[],o=t&&t.config||{},s=o.options&&o.options.plugins||{};return this._plugins.concat(o.plugins||[]).forEach(function(t){if(-1===i.indexOf(t)){var e=t.id,o=s[e];!1!==o&&(!0===o&&(o=a.clone(n.global.plugins[e])),i.push(t),r.push({plugin:t,options:o||{}}))}}),e.descriptors=r,e.id=this._cacheId,r},_invalidate:function(t){delete t.$plugins}}},{25:25,45:45}],32:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45),o=t(34);function s(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(t[e].label);return n}function l(t,e,i){var n=t.getPixelForTick(e);return i&&(n-=0===e?(t.getPixelForTick(1)-n)/2:(n-t.getPixelForTick(e-1))/2),n}n._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:o.formatters.values,minor:{},major:{}}}),e.exports=function(t){function e(t,e,i){return r.isArray(e)?r.longestText(t,i,e):t.measureText(e).width}function i(t){var e=r.valueOrDefault,i=n.global,a=e(t.fontSize,i.defaultFontSize),o=e(t.fontStyle,i.defaultFontStyle),s=e(t.fontFamily,i.defaultFontFamily);return{size:a,style:o,family:s,font:r.fontString(a,o,s)}}function o(t){return r.options.toLineHeight(r.valueOrDefault(t.lineHeight,1.2),r.valueOrDefault(t.fontSize,n.global.defaultFontSize))}t.Scale=a.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){r.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var n,a,o,s,l,u,d=this;for(d.beforeUpdate(),d.maxWidth=t,d.maxHeight=e,d.margins=r.extend({left:0,right:0,top:0,bottom:0},i),d.longestTextCache=d.longestTextCache||{},d.beforeSetDimensions(),d.setDimensions(),d.afterSetDimensions(),d.beforeDataLimits(),d.determineDataLimits(),d.afterDataLimits(),d.beforeBuildTicks(),l=d.buildTicks()||[],d.afterBuildTicks(),d.beforeTickToLabelConversion(),o=d.convertTicksToLabels(l)||d.ticks,d.afterTickToLabelConversion(),d.ticks=o,n=0,a=o.length;n<a;++n)s=o[n],(u=l[n])?u.label=s:l.push(u={label:s,major:!1});return d._ticks=l,d.beforeCalculateTickRotation(),d.calculateTickRotation(),d.afterCalculateTickRotation(),d.beforeFit(),d.fit(),d.afterFit(),d.afterUpdate(),d.minSize},afterUpdate:function(){r.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){r.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){r.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){r.callback(this.options.beforeDataLimits,[this])},determineDataLimits:r.noop,afterDataLimits:function(){r.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){r.callback(this.options.beforeBuildTicks,[this])},buildTicks:r.noop,afterBuildTicks:function(){r.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){r.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){r.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){r.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,n=t.options.ticks,a=s(t._ticks),o=i(n);e.font=o.font;var l=n.minRotation||0;if(a.length&&t.options.display&&t.isHorizontal())for(var u,d=r.longestText(e,o.font,a,t.longestTextCache),c=d,h=t.getPixelForTick(1)-t.getPixelForTick(0)-6;c>h&&l<n.maxRotation;){var f=r.toRadians(l);if(u=Math.cos(f),Math.sin(f)*d>t.maxHeight){l--;break}l++,c=u*d}t.labelRotation=l},afterCalculateTickRotation:function(){r.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){r.callback(this.options.beforeFit,[this])},fit:function(){var t=this,n=t.minSize={width:0,height:0},a=s(t._ticks),l=t.options,u=l.ticks,d=l.scaleLabel,c=l.gridLines,h=l.display,f=t.isHorizontal(),p=i(u),g=l.gridLines.tickMarkLength;if(n.width=f?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:h&&c.drawTicks?g:0,n.height=f?h&&c.drawTicks?g:0:t.maxHeight,d.display&&h){var v=o(d)+r.options.toPadding(d.padding).height;f?n.height+=v:n.width+=v}if(u.display&&h){var m=r.longestText(t.ctx,p.font,a,t.longestTextCache),b=r.numberOfLabelLines(a),y=.5*p.size,x=t.options.ticks.padding;if(f){t.longestLabelWidth=m;var w=r.toRadians(t.labelRotation),k=Math.cos(w),S=Math.sin(w)*m+p.size*b+y*(b-1)+y;n.height=Math.min(t.maxHeight,n.height+S+x),t.ctx.font=p.font;var C=e(t.ctx,a[0],p.font),M=e(t.ctx,a[a.length-1],p.font);0!==t.labelRotation?(t.paddingLeft="bottom"===l.position?k*C+3:k*y+3,t.paddingRight="bottom"===l.position?k*y+3:k*M+3):(t.paddingLeft=C/2+3,t.paddingRight=M/2+3)}else u.mirror?m=0:m+=x+y,n.width=Math.min(t.maxWidth,n.width+m),t.paddingTop=p.size/2,t.paddingBottom=p.size/2}t.handleMargins(),t.width=n.width,t.height=n.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){r.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(r.isNullOrUndef(t))return NaN;if("number"==typeof t&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:r.noop,getPixelForValue:r.noop,getValueForPixel:r.noop,getPixelForTick:function(t){var e=this,i=e.options.offset;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(i?0:1),1),a=n*t+e.paddingLeft;i&&(a+=n/2);var r=e.left+Math.round(a);return r+=e.isFullWidth()?e.margins.left:0}var o=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(o/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var i=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,n=e.left+Math.round(i);return n+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,i,n,a,o=this,s=o.isHorizontal(),l=o.options.ticks.minor,u=t.length,d=r.toRadians(o.labelRotation),c=Math.cos(d),h=o.longestLabelWidth*c,f=[];for(l.maxTicksLimit&&(a=l.maxTicksLimit),s&&(e=!1,(h+l.autoSkipPadding)*u>o.width-(o.paddingLeft+o.paddingRight)&&(e=1+Math.floor((h+l.autoSkipPadding)*u/(o.width-(o.paddingLeft+o.paddingRight)))),a&&u>a&&(e=Math.max(e,Math.floor(u/a)))),i=0;i<u;i++)n=t[i],(e>1&&i%e>0||i%e==0&&i+e>=u)&&i!==u-1&&delete n.label,f.push(n);return f},draw:function(t){var e=this,a=e.options;if(a.display){var s=e.ctx,u=n.global,d=a.ticks.minor,c=a.ticks.major||d,h=a.gridLines,f=a.scaleLabel,p=0!==e.labelRotation,g=e.isHorizontal(),v=d.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),m=r.valueOrDefault(d.fontColor,u.defaultFontColor),b=i(d),y=r.valueOrDefault(c.fontColor,u.defaultFontColor),x=i(c),w=h.drawTicks?h.tickMarkLength:0,k=r.valueOrDefault(f.fontColor,u.defaultFontColor),S=i(f),C=r.options.toPadding(f.padding),M=r.toRadians(e.labelRotation),P=[],A=e.options.gridLines.lineWidth,T="right"===a.position?e.right:e.right-A-w,I="right"===a.position?e.right+w:e.right,_="bottom"===a.position?e.top+A:e.bottom-w-A,D="bottom"===a.position?e.top+A+w:e.bottom+A;if(r.each(v,function(i,n){if(!r.isNullOrUndef(i.label)){var o,s,c,f,m,b,y,x,k,S,C,F,O,L,R=i.label;n===e.zeroLineIndex&&a.offset===h.offsetGridLines?(o=h.zeroLineWidth,s=h.zeroLineColor,c=h.zeroLineBorderDash,f=h.zeroLineBorderDashOffset):(o=r.valueAtIndexOrDefault(h.lineWidth,n),s=r.valueAtIndexOrDefault(h.color,n),c=r.valueOrDefault(h.borderDash,u.borderDash),f=r.valueOrDefault(h.borderDashOffset,u.borderDashOffset));var V="middle",z="middle",N=d.padding;if(g){var B=w+N;"bottom"===a.position?(z=p?"middle":"top",V=p?"right":"center",L=e.top+B):(z=p?"middle":"bottom",V=p?"left":"center",L=e.bottom-B);var E=l(e,n,h.offsetGridLines&&v.length>1);E<e.left&&(s="rgba(0,0,0,0)"),E+=r.aliasPixel(o),O=e.getPixelForTick(n)+d.labelOffset,m=y=k=C=E,b=_,x=D,S=t.top,F=t.bottom+A}else{var W,H="left"===a.position;d.mirror?(V=H?"left":"right",W=N):(V=H?"right":"left",W=w+N),O=H?e.right-W:e.left+W;var j=l(e,n,h.offsetGridLines&&v.length>1);j<e.top&&(s="rgba(0,0,0,0)"),j+=r.aliasPixel(o),L=e.getPixelForTick(n)+d.labelOffset,m=T,y=I,k=t.left,C=t.right+A,b=x=S=F=j}P.push({tx1:m,ty1:b,tx2:y,ty2:x,x1:k,y1:S,x2:C,y2:F,labelX:O,labelY:L,glWidth:o,glColor:s,glBorderDash:c,glBorderDashOffset:f,rotation:-1*M,label:R,major:i.major,textBaseline:z,textAlign:V})}}),r.each(P,function(t){if(h.display&&(s.save(),s.lineWidth=t.glWidth,s.strokeStyle=t.glColor,s.setLineDash&&(s.setLineDash(t.glBorderDash),s.lineDashOffset=t.glBorderDashOffset),s.beginPath(),h.drawTicks&&(s.moveTo(t.tx1,t.ty1),s.lineTo(t.tx2,t.ty2)),h.drawOnChartArea&&(s.moveTo(t.x1,t.y1),s.lineTo(t.x2,t.y2)),s.stroke(),s.restore()),d.display){s.save(),s.translate(t.labelX,t.labelY),s.rotate(t.rotation),s.font=t.major?x.font:b.font,s.fillStyle=t.major?y:m,s.textBaseline=t.textBaseline,s.textAlign=t.textAlign;var i=t.label;if(r.isArray(i))for(var n=i.length,a=1.5*b.size,o=e.isHorizontal()?0:-a*(n-1)/2,l=0;l<n;++l)s.fillText(""+i[l],0,o),o+=a;else s.fillText(i,0,0);s.restore()}}),f.display){var F,O,L=0,R=o(f)/2;if(g)F=e.left+(e.right-e.left)/2,O="bottom"===a.position?e.bottom-R-C.bottom:e.top+R+C.top;else{var V="left"===a.position;F=V?e.left+R+C.top:e.right-R-C.top,O=e.top+(e.bottom-e.top)/2,L=V?-.5*Math.PI:.5*Math.PI}s.save(),s.translate(F,O),s.rotate(L),s.textAlign="center",s.textBaseline="middle",s.fillStyle=k,s.font=S.font,s.fillText(f.labelString,0,0),s.restore()}if(h.drawBorder){s.lineWidth=r.valueAtIndexOrDefault(h.lineWidth,0),s.strokeStyle=r.valueAtIndexOrDefault(h.color,0);var z=e.left,N=e.right+A,B=e.top,E=e.bottom+A,W=r.aliasPixel(s.lineWidth);g?(B=E="top"===a.position?e.bottom:e.top,B+=W,E+=W):(z=N="left"===a.position?e.right:e.left,z+=W,N+=W),s.beginPath(),s.moveTo(z,B),s.lineTo(N,E),s.stroke()}}}})}},{25:25,26:26,34:34,45:45}],33:[function(t,e,i){"use strict";var n=t(25),a=t(45),r=t(30);e.exports=function(t){t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=a.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?a.merge({},[n.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=a.extend(this.defaults[t],e))},addScalesToLayout:function(t){a.each(t.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,r.addBox(t,e)})}}}},{25:25,30:30,45:45}],34:[function(t,e,i){"use strict";var n=t(45);e.exports={formatters:{values:function(t){return n.isArray(t)?t:""+t},linear:function(t,e,i){var a=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var r=n.log10(Math.abs(a)),o="";if(0!==t){var s=-1*Math.floor(r);s=Math.max(Math.min(s,20),0),o=t.toFixed(s)}else o="0";return o},logarithmic:function(t,e,i){var a=t/Math.pow(10,Math.floor(n.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===e||e===i.length-1?t.toExponential():""}}}},{45:45}],35:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45);n._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:r.noop,title:function(t,e){var i="",n=e.labels,a=n?n.length:0;if(t.length>0){var r=t[0];r.xLabel?i=r.xLabel:a>0&&r.index<a&&(i=n[r.index])}return i},afterTitle:r.noop,beforeBody:r.noop,beforeLabel:r.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),i+=t.yLabel},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:r.noop,afterBody:r.noop,beforeFooter:r.noop,footer:r.noop,afterFooter:r.noop}}}),e.exports=function(t){function e(t,e){var i=r.color(t);return i.alpha(e*i.alpha()).rgbaString()}function i(t,e){return e&&(r.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function o(t){var e=n.global,i=r.valueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:i(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:i(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:i(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:i(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:i(t.titleFontStyle,e.defaultFontStyle),titleFontSize:i(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:i(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:i(t.footerFontStyle,e.defaultFontStyle),footerFontSize:i(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}t.Tooltip=a.extend({initialize:function(){this._model=o(this._options),this._lastActive=[]},getTitle:function(){var t=this._options.callbacks,e=t.beforeTitle.apply(this,arguments),n=t.title.apply(this,arguments),a=t.afterTitle.apply(this,arguments),r=[];return r=i(r=i(r=i(r,e),n),a)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return r.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var n=this,a=n._options.callbacks,o=[];return r.each(t,function(t){var r={before:[],lines:[],after:[]};i(r.before,a.beforeLabel.call(n,t,e)),i(r.lines,a.label.call(n,t,e)),i(r.after,a.afterLabel.call(n,t,e)),o.push(r)}),o},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return r.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.callbacks,e=t.beforeFooter.apply(this,arguments),n=t.footer.apply(this,arguments),a=t.afterFooter.apply(this,arguments),r=[];return r=i(r=i(r=i(r,e),n),a)},update:function(e){var i,n,a,s,l,u,d,c=this,h=c._options,f=c._model,p=c._model=o(h),g=c._active,v=c._data,m={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},y={width:f.width,height:f.height},x={x:f.caretX,y:f.caretY};if(g.length){p.opacity=1;var w=[],k=[];x=t.Tooltip.positioners[h.position].call(c,g,c._eventPosition);var S=[];for(i=0,n=g.length;i<n;++i)S.push((a=g[i],s=void 0,l=void 0,void 0,void 0,s=a._xScale,l=a._yScale||a._scale,u=a._index,d=a._datasetIndex,{xLabel:s?s.getLabelForIndex(u,d):"",yLabel:l?l.getLabelForIndex(u,d):"",index:u,datasetIndex:d,x:a._model.x,y:a._model.y}));h.filter&&(S=S.filter(function(t){return h.filter(t,v)})),h.itemSort&&(S=S.sort(function(t,e){return h.itemSort(t,e,v)})),r.each(S,function(t){w.push(h.callbacks.labelColor.call(c,t,c._chart)),k.push(h.callbacks.labelTextColor.call(c,t,c._chart))}),p.title=c.getTitle(S,v),p.beforeBody=c.getBeforeBody(S,v),p.body=c.getBody(S,v),p.afterBody=c.getAfterBody(S,v),p.footer=c.getFooter(S,v),p.x=Math.round(x.x),p.y=Math.round(x.y),p.caretPadding=h.caretPadding,p.labelColors=w,p.labelTextColors=k,p.dataPoints=S,b=function(t,e,i,n){var a=t.x,r=t.y,o=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=i.xAlign,d=i.yAlign,c=o+s,h=l+s;return"right"===u?a-=e.width:"center"===u&&((a-=e.width/2)+e.width>n.width&&(a=n.width-e.width),a<0&&(a=0)),"top"===d?r+=c:r-="bottom"===d?e.height+c:e.height/2,"center"===d?"left"===u?a+=c:"right"===u&&(a-=c):"left"===u?a-=h:"right"===u&&(a+=h),{x:a,y:r}}(p,y=function(t,e){var i=t._chart.ctx,n=2*e.yPadding,a=0,o=e.body,s=o.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);s+=e.beforeBody.length+e.afterBody.length;var l=e.title.length,u=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;n+=l*d,n+=l?(l-1)*e.titleSpacing:0,n+=l?e.titleMarginBottom:0,n+=s*c,n+=s?(s-1)*e.bodySpacing:0,n+=u?e.footerMarginTop:0,n+=u*h,n+=u?(u-1)*e.footerSpacing:0;var f=0,p=function(t){a=Math.max(a,i.measureText(t).width+f)};return i.font=r.fontString(d,e._titleFontStyle,e._titleFontFamily),r.each(e.title,p),i.font=r.fontString(c,e._bodyFontStyle,e._bodyFontFamily),r.each(e.beforeBody.concat(e.afterBody),p),f=e.displayColors?c+2:0,r.each(o,function(t){r.each(t.before,p),r.each(t.lines,p),r.each(t.after,p)}),f=0,i.font=r.fontString(h,e._footerFontStyle,e._footerFontFamily),r.each(e.footer,p),{width:a+=2*e.xPadding,height:n}}(this,p),m=function(t,e){var i,n,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",c="center";s.y<e.height?c="top":s.y>l.height-e.height&&(c="bottom");var h=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===c?(i=function(t){return t<=h},n=function(t){return t>h}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},i(s.x)?(d="left",a(s.x)&&(d="center",c=o(s.y))):n(s.x)&&(d="right",r(s.x)&&(d="center",c=o(s.y)));var p=t._options;return{xAlign:p.xAlign?p.xAlign:d,yAlign:p.yAlign?p.yAlign:c}}(this,y),c._chart)}else p.opacity=0;return p.xAlign=m.xAlign,p.yAlign=m.yAlign,p.x=b.x,p.y=b.y,p.width=y.width,p.height=y.height,p.caretX=x.x,p.caretY=x.y,c._model=p,e&&h.custom&&h.custom.call(c,p),c},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,a=this.getCaretPosition(t,e,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,i){var n,a,r,o,s,l,u=i.caretSize,d=i.cornerRadius,c=i.xAlign,h=i.yAlign,f=t.x,p=t.y,g=e.width,v=e.height;if("center"===h)s=p+v/2,"left"===c?(a=(n=f)-u,r=n,o=s+u,l=s-u):(a=(n=f+g)+u,r=n,o=s-u,l=s+u);else if("left"===c?(n=(a=f+d+u)-u,r=a+u):"right"===c?(n=(a=f+g-d-u)-u,r=a+u):(n=(a=i.caretX)-u,r=a+u),"top"===h)s=(o=p)-u,l=o;else{s=(o=p+v)+u,l=o;var m=r;r=n,n=m}return{x1:n,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,i,n,a){var o=i.title;if(o.length){n.textAlign=i._titleAlign,n.textBaseline="top";var s,l,u=i.titleFontSize,d=i.titleSpacing;for(n.fillStyle=e(i.titleFontColor,a),n.font=r.fontString(u,i._titleFontStyle,i._titleFontFamily),s=0,l=o.length;s<l;++s)n.fillText(o[s],t.x,t.y),t.y+=u+d,s+1===o.length&&(t.y+=i.titleMarginBottom-d)}},drawBody:function(t,i,n,a){var o=i.bodyFontSize,s=i.bodySpacing,l=i.body;n.textAlign=i._bodyAlign,n.textBaseline="top",n.font=r.fontString(o,i._bodyFontStyle,i._bodyFontFamily);var u=0,d=function(e){n.fillText(e,t.x+u,t.y),t.y+=o+s};n.fillStyle=e(i.bodyFontColor,a),r.each(i.beforeBody,d);var c=i.displayColors;u=c?o+2:0,r.each(l,function(s,l){var u=e(i.labelTextColors[l],a);n.fillStyle=u,r.each(s.before,d),r.each(s.lines,function(r){c&&(n.fillStyle=e(i.legendColorBackground,a),n.fillRect(t.x,t.y,o,o),n.lineWidth=1,n.strokeStyle=e(i.labelColors[l].borderColor,a),n.strokeRect(t.x,t.y,o,o),n.fillStyle=e(i.labelColors[l].backgroundColor,a),n.fillRect(t.x+1,t.y+1,o-2,o-2),n.fillStyle=u),d(r)}),r.each(s.after,d)}),u=0,r.each(i.afterBody,d),t.y-=s},drawFooter:function(t,i,n,a){var o=i.footer;o.length&&(t.y+=i.footerMarginTop,n.textAlign=i._footerAlign,n.textBaseline="top",n.fillStyle=e(i.footerFontColor,a),n.font=r.fontString(i.footerFontSize,i._footerFontStyle,i._footerFontFamily),r.each(o,function(e){n.fillText(e,t.x,t.y),t.y+=i.footerFontSize+i.footerSpacing}))},drawBackground:function(t,i,n,a,r){n.fillStyle=e(i.backgroundColor,r),n.strokeStyle=e(i.borderColor,r),n.lineWidth=i.borderWidth;var o=i.xAlign,s=i.yAlign,l=t.x,u=t.y,d=a.width,c=a.height,h=i.cornerRadius;n.beginPath(),n.moveTo(l+h,u),"top"===s&&this.drawCaret(t,a),n.lineTo(l+d-h,u),n.quadraticCurveTo(l+d,u,l+d,u+h),"center"===s&&"right"===o&&this.drawCaret(t,a),n.lineTo(l+d,u+c-h),n.quadraticCurveTo(l+d,u+c,l+d-h,u+c),"bottom"===s&&this.drawCaret(t,a),n.lineTo(l+h,u+c),n.quadraticCurveTo(l,u+c,l,u+c-h),"center"===s&&"left"===o&&this.drawCaret(t,a),n.lineTo(l,u+h),n.quadraticCurveTo(l,u,l+h,u),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(this.drawBackground(n,e,t,i,a),n.x+=e.xPadding,n.y+=e.yPadding,this.drawTitle(n,e,t,a),this.drawBody(n,e,t,a),this.drawFooter(n,e,t,a))}},handleEvent:function(t){var e,i=this,n=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:i._active=i._chart.getElementsAtEventForMode(t,n.mode,n),(e=!r.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(n.enabled||n.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,i,n=0,a=0,r=0;for(e=0,i=t.length;e<i;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();n+=s.x,a+=s.y,++r}}return{x:Math.round(n/r),y:Math.round(a/r)}},nearest:function(t,e){var i,n,a,o=e.x,s=e.y,l=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var u=t[i];if(u&&u.hasValue()){var d=u.getCenterPoint(),c=r.distanceBetweenPoints(e,d);c<l&&(l=c,a=u)}}if(a){var h=a.tooltipPosition();o=h.x,s=h.y}return{x:o,y:s}}}}},{25:25,26:26,45:45}],36:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45);n._set("global",{elements:{arc:{backgroundColor:n.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=a.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var n=r.getAngleFromPoint(i,{x:t,y:e}),a=n.angle,o=n.distance,s=i.startAngle,l=i.endAngle;l<s;)l+=2*Math.PI;for(;a>l;)a-=2*Math.PI;for(;a<s;)a+=2*Math.PI;var u=a>=s&&a<=l,d=o>=i.innerRadius&&o<=i.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,n=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,n),t.arc(e.x,e.y,e.innerRadius,n,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},{25:25,26:26,45:45}],37:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45),o=n.global;n._set("global",{elements:{line:{tension:.4,backgroundColor:o.defaultColor,borderWidth:3,borderColor:o.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=a.extend({draw:function(){var t,e,i,n,a=this._view,s=this._chart.ctx,l=a.spanGaps,u=this._children.slice(),d=o.elements.line,c=-1;for(this._loop&&u.length&&u.push(u[0]),s.save(),s.lineCap=a.borderCapStyle||d.borderCapStyle,s.setLineDash&&s.setLineDash(a.borderDash||d.borderDash),s.lineDashOffset=a.borderDashOffset||d.borderDashOffset,s.lineJoin=a.borderJoinStyle||d.borderJoinStyle,s.lineWidth=a.borderWidth||d.borderWidth,s.strokeStyle=a.borderColor||o.defaultColor,s.beginPath(),c=-1,t=0;t<u.length;++t)e=u[t],i=r.previousItem(u,t),n=e._view,0===t?n.skip||(s.moveTo(n.x,n.y),c=t):(i=-1===c?i:u[c],n.skip||(c!==t-1&&!l||-1===c?s.moveTo(n.x,n.y):r.canvas.lineTo(s,i._view,e._view),c=t));s.stroke(),s.restore()}})},{25:25,26:26,45:45}],38:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45),o=n.global.defaultColor;function s(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}n._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:o,borderColor:o,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=a.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:s,inXRange:s,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._model,a=this._chart.ctx,s=e.pointStyle,l=e.radius,u=e.x,d=e.y,c=r.color,h=0;e.skip||(a.strokeStyle=e.borderColor||o,a.lineWidth=r.valueOrDefault(e.borderWidth,n.global.elements.point.borderWidth),a.fillStyle=e.backgroundColor||o,void 0!==t&&(i.x<t.left||1.01*t.right<i.x||i.y<t.top||1.01*t.bottom<i.y)&&(i.x<t.left?h=(u-i.x)/(t.left-i.x):1.01*t.right<i.x?h=(i.x-u)/(i.x-t.right):i.y<t.top?h=(d-i.y)/(t.top-i.y):1.01*t.bottom<i.y&&(h=(i.y-d)/(i.y-t.bottom)),h=Math.round(100*h)/100,a.strokeStyle=c(a.strokeStyle).alpha(h).rgbString(),a.fillStyle=c(a.fillStyle).alpha(h).rgbString()),r.canvas.drawPoint(a,s,l,u,d))}})},{25:25,26:26,45:45}],39:[function(t,e,i){"use strict";var n=t(25),a=t(26);function r(t){return void 0!==t._view.width}function o(t){var e,i,n,a,o=t._view;if(r(t)){var s=o.width/2;e=o.x-s,i=o.x+s,n=Math.min(o.y,o.base),a=Math.max(o.y,o.base)}else{var l=o.height/2;e=Math.min(o.x,o.base),i=Math.max(o.x,o.base),n=o.y-l,a=o.y+l}return{left:e,top:n,right:i,bottom:a}}n._set("global",{elements:{rectangle:{backgroundColor:n.global.defaultColor,borderColor:n.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=a.extend({draw:function(){var t,e,i,n,a,r,o,s=this._chart.ctx,l=this._view,u=l.borderWidth;if(l.horizontal?(t=l.base,e=l.x,i=l.y-l.height/2,n=l.y+l.height/2,a=e>t?1:-1,r=1,o=l.borderSkipped||"left"):(t=l.x-l.width/2,e=l.x+l.width/2,i=l.y,a=1,r=(n=l.base)>i?1:-1,o=l.borderSkipped||"bottom"),u){var d=Math.min(Math.abs(t-e),Math.abs(i-n)),c=(u=u>d?d:u)/2,h=t+("left"!==o?c*a:0),f=e+("right"!==o?-c*a:0),p=i+("top"!==o?c*r:0),g=n+("bottom"!==o?-c*r:0);h!==f&&(i=p,n=g),p!==g&&(t=h,e=f)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=u;var v=[[t,n],[t,i],[e,i],[e,n]],m=["bottom","left","top","right"].indexOf(o,0);function b(t){return v[(m+t)%4]}-1===m&&(m=0);var y=b(0);s.moveTo(y[0],y[1]);for(var x=1;x<4;x++)y=b(x),s.lineTo(y[0],y[1]);s.fill(),u&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var n=o(this);i=t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}return i},inLabelRange:function(t,e){if(!this._view)return!1;var i=o(this);return r(this)?t>=i.left&&t<=i.right:e>=i.top&&e<=i.bottom},inXRange:function(t){var e=o(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=o(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,i=this._view;return r(this)?(t=i.x,e=(i.y+i.base)/2):(t=(i.x+i.base)/2,e=i.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},{25:25,26:26}],40:[function(t,e,i){"use strict";e.exports={},e.exports.Arc=t(36),e.exports.Line=t(37),e.exports.Point=t(38),e.exports.Rectangle=t(39)},{36:36,37:37,38:38,39:39}],41:[function(t,e,i){"use strict";var n=t(42);i=e.exports={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,n,a,r){if(r){var o=Math.min(r,n/2),s=Math.min(r,a/2);t.moveTo(e+o,i),t.lineTo(e+n-o,i),t.quadraticCurveTo(e+n,i,e+n,i+s),t.lineTo(e+n,i+a-s),t.quadraticCurveTo(e+n,i+a,e+n-o,i+a),t.lineTo(e+o,i+a),t.quadraticCurveTo(e,i+a,e,i+a-s),t.lineTo(e,i+s),t.quadraticCurveTo(e,i,e+o,i)}else t.rect(e,i,n,a)},drawPoint:function(t,e,i,n,a){var r,o,s,l,u,d;if(!e||"object"!=typeof e||"[object HTMLImageElement]"!==(r=e.toString())&&"[object HTMLCanvasElement]"!==r){if(!(isNaN(i)||i<=0)){switch(e){default:t.beginPath(),t.arc(n,a,i,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),u=(o=3*i/Math.sqrt(3))*Math.sqrt(3)/2,t.moveTo(n-o/2,a+u/3),t.lineTo(n+o/2,a+u/3),t.lineTo(n,a-2*u/3),t.closePath(),t.fill();break;case"rect":d=1/Math.SQRT2*i,t.beginPath(),t.fillRect(n-d,a-d,2*d,2*d),t.strokeRect(n-d,a-d,2*d,2*d);break;case"rectRounded":var c=i/Math.SQRT2,h=n-c,f=a-c,p=Math.SQRT2*i;t.beginPath(),this.roundedRect(t,h,f,p,p,i/2),t.closePath(),t.fill();break;case"rectRot":d=1/Math.SQRT2*i,t.beginPath(),t.moveTo(n-d,a),t.lineTo(n,a+d),t.lineTo(n+d,a),t.lineTo(n,a-d),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(n,a+i),t.lineTo(n,a-i),t.moveTo(n-i,a),t.lineTo(n+i,a),t.closePath();break;case"crossRot":t.beginPath(),s=Math.cos(Math.PI/4)*i,l=Math.sin(Math.PI/4)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n-s,a+l),t.lineTo(n+s,a-l),t.closePath();break;case"star":t.beginPath(),t.moveTo(n,a+i),t.lineTo(n,a-i),t.moveTo(n-i,a),t.lineTo(n+i,a),s=Math.cos(Math.PI/4)*i,l=Math.sin(Math.PI/4)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n-s,a+l),t.lineTo(n+s,a-l),t.closePath();break;case"line":t.beginPath(),t.moveTo(n-i,a),t.lineTo(n+i,a),t.closePath();break;case"dash":t.beginPath(),t.moveTo(n,a),t.lineTo(n+i,a),t.closePath()}t.stroke()}}else t.drawImage(e,n-e.width/2,a-e.height/2,e.width,e.height)},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,n){if(i.steppedLine)return"after"===i.steppedLine&&!n||"after"!==i.steppedLine&&n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y),void t.lineTo(i.x,i.y);i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}};n.clear=i.clear,n.drawRoundedRectangle=function(t){t.beginPath(),i.roundedRect.apply(i,arguments),t.closePath()}},{42:42}],42:[function(t,e,i){"use strict";var n,a={noop:function(){},uid:(n=0,function(){return n++}),isNullOrUndef:function(t){return null===t||void 0===t},isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return a.valueOrDefault(a.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,n){var r,o,s;if(a.isArray(t))if(o=t.length,n)for(r=o-1;r>=0;r--)e.call(i,t[r],r);else for(r=0;r<o;r++)e.call(i,t[r],r);else if(a.isObject(t))for(o=(s=Object.keys(t)).length,r=0;r<o;r++)e.call(i,t[s[r]],s[r])},arrayEquals:function(t,e){var i,n,r,o;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(r=t[i],o=e[i],r instanceof Array&&o instanceof Array){if(!a.arrayEquals(r,o))return!1}else if(r!==o)return!1;return!0},clone:function(t){if(a.isArray(t))return t.map(a.clone);if(a.isObject(t)){for(var e={},i=Object.keys(t),n=i.length,r=0;r<n;++r)e[i[r]]=a.clone(t[i[r]]);return e}return t},_merger:function(t,e,i,n){var r=e[t],o=i[t];a.isObject(r)&&a.isObject(o)?a.merge(r,o,n):e[t]=a.clone(o)},_mergerIf:function(t,e,i){var n=e[t],r=i[t];a.isObject(n)&&a.isObject(r)?a.mergeIf(n,r):e.hasOwnProperty(t)||(e[t]=a.clone(r))},merge:function(t,e,i){var n,r,o,s,l,u=a.isArray(e)?e:[e],d=u.length;if(!a.isObject(t))return t;for(n=(i=i||{}).merger||a._merger,r=0;r<d;++r)if(e=u[r],a.isObject(e))for(l=0,s=(o=Object.keys(e)).length;l<s;++l)n(o[l],t,e,i);return t},mergeIf:function(t,e){return a.merge(t,e,{merger:a._mergerIf})},extend:function(t){for(var e=function(e,i){t[i]=e},i=1,n=arguments.length;i<n;++i)a.each(arguments[i],e);return t},inherits:function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=a.inherits,t&&a.extend(i.prototype,t),i.__super__=e.prototype,i}};e.exports=a,a.callCallback=a.callback,a.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},a.getValueOrDefault=a.valueOrDefault,a.getValueAtIndexOrDefault=a.valueAtIndexOrDefault},{}],43:[function(t,e,i){"use strict";var n=t(42),a={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-a.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*a.easeInBounce(2*t):.5*a.easeOutBounce(2*t-1)+.5}};e.exports={effects:a},n.easingEffects=a},{42:42}],44:[function(t,e,i){"use strict";var n=t(42);e.exports={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,a,r;return n.isObject(t)?(e=+t.top||0,i=+t.right||0,a=+t.bottom||0,r=+t.left||0):e=i=a=r=+t||0,{top:e,right:i,bottom:a,left:r,height:e+a,width:r+i}},resolve:function(t,e,i){var a,r,o;for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e)),void 0!==i&&n.isArray(o)&&(o=o[i]),void 0!==o))return o}}},{42:42}],45:[function(t,e,i){"use strict";e.exports=t(42),e.exports.easing=t(43),e.exports.canvas=t(41),e.exports.options=t(44)},{41:41,42:42,43:43,44:44}],46:[function(t,e,i){e.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],47:[function(t,e,i){"use strict";var n=t(45),a="$chartjs",r="chartjs-",o=r+"render-monitor",s=r+"render-animation",l=["animationstart","webkitAnimationStart"],u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function d(t,e){var i=n.getStyle(t,e),a=i&&i.match(/^(\d+)(\.\d+)?px$/);return a?Number(a[1]):void 0}var c=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function h(t,e,i){t.addEventListener(e,i,c)}function f(t,e,i){t.removeEventListener(e,i,c)}function p(t,e,i,n,a){return{type:t,chart:e,native:a||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function g(t,e,i){var u,d,c,f,g=t[a]||(t[a]={}),v=g.resizer=function(t){var e=document.createElement("div"),i=r+"size-monitor",n="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=n,e.className=i,e.innerHTML='<div class="'+i+'-expand" style="'+n+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+i+'-shrink" style="'+n+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var a=e.childNodes[0],o=e.childNodes[1];e._reset=function(){a.scrollLeft=1e6,a.scrollTop=1e6,o.scrollLeft=1e6,o.scrollTop=1e6};var s=function(){e._reset(),t()};return h(a,"scroll",s.bind(a,"expand")),h(o,"scroll",s.bind(o,"shrink")),e}((u=function(){if(g.resizer)return e(p("resize",i))},c=!1,f=[],function(){f=Array.prototype.slice.call(arguments),d=d||this,c||(c=!0,n.requestAnimFrame.call(window,function(){c=!1,u.apply(d,f)}))}));!function(t,e){var i=t[a]||(t[a]={}),r=i.renderProxy=function(t){t.animationName===s&&e()};n.each(l,function(e){h(t,e,r)}),i.reflow=!!t.offsetParent,t.classList.add(o)}(t,function(){if(g.resizer){var e=t.parentNode;e&&e!==v.parentNode&&e.insertBefore(v,e.firstChild),v._reset()}})}function v(t){var e=t[a]||{},i=e.resizer;delete e.resizer,function(t){var e=t[a]||{},i=e.renderProxy;i&&(n.each(l,function(e){f(t,e,i)}),delete e.renderProxy),t.classList.remove(o)}(t),i&&i.parentNode&&i.parentNode.removeChild(i)}e.exports={_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t,e,i,n="from{opacity:0.99}to{opacity:1}";e="@-webkit-keyframes "+s+"{"+n+"}@keyframes "+s+"{"+n+"}."+o+"{-webkit-animation:"+s+" 0.001s;animation:"+s+" 0.001s;}",i=(t=this)._style||document.createElement("style"),t._style||(t._style=i,e="/* Chart.js */\n"+e,i.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(i)),i.appendChild(document.createTextNode(e))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){var i=t.style,n=t.getAttribute("height"),r=t.getAttribute("width");if(t[a]={initial:{height:n,width:r,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===r||""===r){var o=d(t,"width");void 0!==o&&(t.width=o)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var s=d(t,"height");void 0!==o&&(t.height=s)}}(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e[a]){var i=e[a].initial;["height","width"].forEach(function(t){var a=i[t];n.isNullOrUndef(a)?e.removeAttribute(t):e.setAttribute(t,a)}),n.each(i.style||{},function(t,i){e.style[i]=t}),e.width=e.width,delete e[a]}},addEventListener:function(t,e,i){var r=t.canvas;if("resize"!==e){var o=i[a]||(i[a]={});h(r,e,(o.proxies||(o.proxies={}))[t.id+"_"+e]=function(e){i(function(t,e){var i=u[t.type]||t.type,a=n.getRelativePosition(t,e);return p(i,e,a.x,a.y,t)}(e,t))})}else g(r,i,t)},removeEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var r=((i[a]||{}).proxies||{})[t.id+"_"+e];r&&f(n,e,r)}else v(n)}},n.addEvent=h,n.removeEvent=f},{45:45}],48:[function(t,e,i){"use strict";var n=t(45),a=t(46),r=t(47),o=r._enabled?r:a;e.exports=n.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},o)},{45:45,46:46,47:47}],49:[function(t,e,i){"use strict";e.exports={},e.exports.filler=t(50),e.exports.legend=t(51),e.exports.title=t(52)},{50:50,51:51,52:52}],50:[function(t,e,i){"use strict";var n=t(25),a=t(40),r=t(45);n._set("global",{plugins:{filler:{propagate:!0}}});var o={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),a=n&&i.isDatasetVisible(e)&&n.dataset._children||[],r=a.length||0;return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function s(t,e,i){var n,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(n=parseFloat(r,10),isFinite(n)&&Math.floor(n)===n)return"-"!==r[0]&&"+"!==r[0]||(n=e+n),!(n===e||n<0||n>=i)&&n;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function l(t){var e,i=t.el._model||{},n=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===a?r=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?r=i.scaleZero:n.getBasePosition?r=n.getBasePosition():n.getBasePixel&&(r=n.getBasePixel()),void 0!==r&&null!==r){if(void 0!==r.x&&void 0!==r.y)return r;if("number"==typeof r&&isFinite(r))return{x:(e=n.isHorizontal())?r:null,y:e?null:r}}return null}function u(t,e,i){var n,a=t[e].fill,r=[e];if(!i)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(n=t[a]))return!1;if(n.visible)return a;r.push(a),a=n.fill}return!1}function d(t){var e=t.fill,i="dataset";return!1===e?null:(isFinite(e)||(i="boundary"),o[i](t))}function c(t){return t&&!t.skip}function h(t,e,i,n,a){var o;if(n&&a){for(t.moveTo(e[0].x,e[0].y),o=1;o<n;++o)r.canvas.lineTo(t,e[o-1],e[o]);for(t.lineTo(i[a-1].x,i[a-1].y),o=a-1;o>0;--o)r.canvas.lineTo(t,i[o],i[o-1],!0)}}e.exports={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,r,o,c=(t.data.datasets||[]).length,h=e.propagate,f=[];for(n=0;n<c;++n)o=null,(r=(i=t.getDatasetMeta(n)).dataset)&&r._model&&r instanceof a.Line&&(o={visible:t.isDatasetVisible(n),fill:s(r,n,c),chart:t,el:r}),i.$filler=o,f.push(o);for(n=0;n<c;++n)(o=f[n])&&(o.fill=u(f,n,h),o.boundary=l(o),o.mapper=d(o))},beforeDatasetDraw:function(t,e){var i=e.meta.$filler;if(i){var a=t.ctx,o=i.el,s=o._view,l=o._children||[],u=i.mapper,d=s.backgroundColor||n.global.defaultColor;u&&d&&l.length&&(r.canvas.clipArea(a,t.chartArea),function(t,e,i,n,a,r){var o,s,l,u,d,f,p,g=e.length,v=n.spanGaps,m=[],b=[],y=0,x=0;for(t.beginPath(),o=0,s=g+!!r;o<s;++o)d=i(u=e[l=o%g]._view,l,n),f=c(u),p=c(d),f&&p?(y=m.push(u),x=b.push(d)):y&&x&&(v?(f&&m.push(u),p&&b.push(d)):(h(t,m,b,y,x),y=x=0,m=[],b=[]));h(t,m,b,y,x),t.closePath(),t.fillStyle=a,t.fill()}(a,l,u,s,d,o._loop),r.canvas.unclipArea(a))}}}},{25:25,40:40,45:45}],51:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45),o=t(30),s=r.noop;function l(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}n._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,a=n.getDatasetMeta(i);a.hidden=null===a.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return r.isArray(e.datasets)?e.datasets.map(function(e,i){return{text:e.label,fillStyle:r.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:i}},this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var u=a.extend({initialize:function(t){r.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:s,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:function(){var t=this,e=t.options.labels||{},i=r.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter(function(i){return e.filter(i,t.chart.data)})),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=t.options,i=e.labels,a=e.display,o=t.ctx,s=n.global,u=r.valueOrDefault,d=u(i.fontSize,s.defaultFontSize),c=u(i.fontStyle,s.defaultFontStyle),h=u(i.fontFamily,s.defaultFontFamily),f=r.fontString(d,c,h),p=t.legendHitBoxes=[],g=t.minSize,v=t.isHorizontal();if(v?(g.width=t.maxWidth,g.height=a?10:0):(g.width=a?10:0,g.height=t.maxHeight),a)if(o.font=f,v){var m=t.lineWidths=[0],b=t.legendItems.length?d+i.padding:0;o.textAlign="left",o.textBaseline="top",r.each(t.legendItems,function(e,n){var a=l(i,d)+d/2+o.measureText(e.text).width;m[m.length-1]+a+i.padding>=t.width&&(b+=d+i.padding,m[m.length]=t.left),p[n]={left:0,top:0,width:a,height:d},m[m.length-1]+=a+i.padding}),g.height+=b}else{var y=i.padding,x=t.columnWidths=[],w=i.padding,k=0,S=0,C=d+y;r.each(t.legendItems,function(t,e){var n=l(i,d)+d/2+o.measureText(t.text).width;S+C>g.height&&(w+=k+i.padding,x.push(k),k=0,S=0),k=Math.max(k,n),S+=C,p[e]={left:0,top:0,width:n,height:d}}),w+=k,x.push(k),g.width+=w}t.width=g.width,t.height=g.height},afterFit:s,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,i=e.labels,a=n.global,o=a.elements.line,s=t.width,u=t.lineWidths;if(e.display){var d,c=t.ctx,h=r.valueOrDefault,f=h(i.fontColor,a.defaultFontColor),p=h(i.fontSize,a.defaultFontSize),g=h(i.fontStyle,a.defaultFontStyle),v=h(i.fontFamily,a.defaultFontFamily),m=r.fontString(p,g,v);c.textAlign="left",c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=m;var b=l(i,p),y=t.legendHitBoxes,x=t.isHorizontal();d=x?{x:t.left+(s-u[0])/2,y:t.top+i.padding,line:0}:{x:t.left+i.padding,y:t.top+i.padding,line:0};var w=p+i.padding;r.each(t.legendItems,function(n,l){var f=c.measureText(n.text).width,g=b+p/2+f,v=d.x,m=d.y;x?v+g>=s&&(m=d.y+=w,d.line++,v=d.x=t.left+(s-u[d.line])/2):m+w>t.bottom&&(v=d.x=v+t.columnWidths[d.line]+i.padding,m=d.y=t.top+i.padding,d.line++),function(t,i,n){if(!(isNaN(b)||b<=0)){c.save(),c.fillStyle=h(n.fillStyle,a.defaultColor),c.lineCap=h(n.lineCap,o.borderCapStyle),c.lineDashOffset=h(n.lineDashOffset,o.borderDashOffset),c.lineJoin=h(n.lineJoin,o.borderJoinStyle),c.lineWidth=h(n.lineWidth,o.borderWidth),c.strokeStyle=h(n.strokeStyle,a.defaultColor);var s=0===h(n.lineWidth,o.borderWidth);if(c.setLineDash&&c.setLineDash(h(n.lineDash,o.borderDash)),e.labels&&e.labels.usePointStyle){var l=p*Math.SQRT2/2,u=l/Math.SQRT2,d=t+u,f=i+u;r.canvas.drawPoint(c,n.pointStyle,l,d,f)}else s||c.strokeRect(t,i,b,p),c.fillRect(t,i,b,p);c.restore()}}(v,m,n),y[l].left=v,y[l].top=m,function(t,e,i,n){var a=p/2,r=b+a+t,o=e+a;c.fillText(i.text,r,o),i.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(r,o),c.lineTo(r+n,o),c.stroke())}(v,m,n,f),x?d.x+=g+i.padding:d.y+=w})}},handleEvent:function(t){var e=this,i=e.options,n="mouseup"===t.type?"click":t.type,a=!1;if("mousemove"===n){if(!i.onHover)return}else{if("click"!==n)return;if(!i.onClick)return}var r=t.x,o=t.y;if(r>=e.left&&r<=e.right&&o>=e.top&&o<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(r>=u.left&&r<=u.left+u.width&&o>=u.top&&o<=u.top+u.height){if("click"===n){i.onClick.call(e,t.native,e.legendItems[l]),a=!0;break}if("mousemove"===n){i.onHover.call(e,t.native,e.legendItems[l]),a=!0;break}}}return a}});function d(t,e){var i=new u({ctx:t.ctx,options:e,chart:t});o.configure(t,i,e),o.addBox(t,i),t.legend=i}e.exports={id:"legend",_element:u,beforeInit:function(t){var e=t.options.legend;e&&d(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(r.mergeIf(e,n.global.legend),i?(o.configure(t,i,e),i.options=e):d(t,e)):i&&(o.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}}},{25:25,26:26,30:30,45:45}],52:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45),o=t(30),s=r.noop;n._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});var l=a.extend({initialize:function(t){r.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:s,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:s,afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=r.valueOrDefault,i=t.options,a=i.display,o=e(i.fontSize,n.global.defaultFontSize),s=t.minSize,l=r.isArray(i.text)?i.text.length:1,u=r.options.toLineHeight(i.lineHeight,o),d=a?l*u+2*i.padding:0;t.isHorizontal()?(s.width=t.maxWidth,s.height=d):(s.width=d,s.height=t.maxHeight),t.width=s.width,t.height=s.height},afterFit:s,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,i=r.valueOrDefault,a=t.options,o=n.global;if(a.display){var s,l,u,d=i(a.fontSize,o.defaultFontSize),c=i(a.fontStyle,o.defaultFontStyle),h=i(a.fontFamily,o.defaultFontFamily),f=r.fontString(d,c,h),p=r.options.toLineHeight(a.lineHeight,d),g=p/2+a.padding,v=0,m=t.top,b=t.left,y=t.bottom,x=t.right;e.fillStyle=i(a.fontColor,o.defaultFontColor),e.font=f,t.isHorizontal()?(l=b+(x-b)/2,u=m+g,s=x-b):(l="left"===a.position?b+g:x-g,u=m+(y-m)/2,s=y-m,v=Math.PI*("left"===a.position?-.5:.5)),e.save(),e.translate(l,u),e.rotate(v),e.textAlign="center",e.textBaseline="middle";var w=a.text;if(r.isArray(w))for(var k=0,S=0;S<w.length;++S)e.fillText(w[S],0,k,s),k+=p;else e.fillText(w,0,0,s);e.restore()}}});function u(t,e){var i=new l({ctx:t.ctx,options:e,chart:t});o.configure(t,i,e),o.addBox(t,i),t.titleBlock=i}e.exports={id:"title",_element:l,beforeInit:function(t){var e=t.options.title;e&&u(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(r.mergeIf(e,n.global.title),i?(o.configure(t,i,e),i.options=e):u(t,e)):i&&(o.removeBox(t,i),delete t.titleBlock)}}},{25:25,26:26,30:30,45:45}],53:[function(t,e,i){"use strict";e.exports=function(t){var e=t.Scale.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,i=e.getLabels();e.minIndex=0,e.maxIndex=i.length-1,void 0!==e.options.ticks.min&&(t=i.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=i.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=i[e.minIndex],e.max=i[e.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var i=this,n=i.chart.data,a=i.isHorizontal();return n.yLabels&&!a?i.getRightValue(n.datasets[e].data[t]):i.ticks[t-i.minIndex]},getPixelForValue:function(t,e){var i,n=this,a=n.options.offset,r=Math.max(n.maxIndex+1-n.minIndex-(a?0:1),1);if(void 0!==t&&null!==t&&(i=n.isHorizontal()?t.x:t.y),void 0!==i||void 0!==t&&isNaN(e)){var o=n.getLabels();t=i||t;var s=o.indexOf(t);e=-1!==s?s:e}if(n.isHorizontal()){var l=n.width/r,u=l*(e-n.minIndex);return a&&(u+=l/2),n.left+Math.round(u)}var d=n.height/r,c=d*(e-n.minIndex);return a&&(c+=d/2),n.top+Math.round(c)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,i=e.options.offset,n=Math.max(e._ticks.length-(i?0:1),1),a=e.isHorizontal(),r=(a?e.width:e.height)/n;return t-=a?e.left:e.top,i&&(t-=r/2),(t<=0?0:Math.round(t/r))+e.minIndex},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",e,{position:"bottom"})}},{}],54:[function(t,e,i){"use strict";var n=t(25),a=t(45),r=t(34);e.exports=function(t){var e={position:"left",ticks:{callback:r.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,n=i.data.datasets,r=t.isHorizontal();function o(e){return r?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var s=e.stacked;if(void 0===s&&a.each(n,function(t,e){if(!s){var n=i.getDatasetMeta(e);i.isDatasetVisible(e)&&o(n)&&void 0!==n.stack&&(s=!0)}}),e.stacked||s){var l={};a.each(n,function(n,r){var s=i.getDatasetMeta(r),u=[s.type,void 0===e.stacked&&void 0===s.stack?r:"",s.stack].join(".");void 0===l[u]&&(l[u]={positiveValues:[],negativeValues:[]});var d=l[u].positiveValues,c=l[u].negativeValues;i.isDatasetVisible(r)&&o(s)&&a.each(n.data,function(i,n){var a=+t.getRightValue(i);isNaN(a)||s.data[n].hidden||(d[n]=d[n]||0,c[n]=c[n]||0,e.relativePoints?d[n]=100:a<0?c[n]+=a:d[n]+=a)})}),a.each(l,function(e){var i=e.positiveValues.concat(e.negativeValues),n=a.min(i),r=a.max(i);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?r:Math.max(t.max,r)})}else a.each(n,function(e,n){var r=i.getDatasetMeta(n);i.isDatasetVisible(n)&&o(r)&&a.each(e.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||r.data[i].hidden||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n))})});t.min=isFinite(t.min)&&!isNaN(t.min)?t.min:0,t.max=isFinite(t.max)&&!isNaN(t.max)?t.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this.options.ticks;if(this.isHorizontal())t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.width/50));else{var i=a.valueOrDefault(e.fontSize,n.global.defaultFontSize);t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.height/(2*i)))}return t},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this,i=e.start,n=+e.getRightValue(t),a=e.end-i;return e.isHorizontal()?e.left+e.width/a*(n-i):e.bottom-e.height/a*(n-i)},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),n=i?e.width:e.height,a=(i?t-e.left:e.bottom-t)/n;return e.start+(e.end-e.start)*a},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,e)}},{25:25,34:34,45:45}],55:[function(t,e,i){"use strict";var n=t(45);e.exports=function(t){var e=n.noop;t.LinearScaleBase=t.Scale.extend({getRightValue:function(e){return"string"==typeof e?+e:t.Scale.prototype.getRightValue.call(this,e)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=n.sign(t.min),a=n.sign(t.max);i<0&&a<0?t.max=0:i>0&&a>0&&(t.min=0)}var r=void 0!==e.min||void 0!==e.suggestedMin,o=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),r!==o&&t.min>=t.max&&(r?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:e,handleDirectionalChanges:e,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),a={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,stepSize:n.valueOrDefault(e.fixedStepSize,e.stepSize)},r=t.ticks=function(t,e){var i,a=[];if(t.stepSize&&t.stepSize>0)i=t.stepSize;else{var r=n.niceNum(e.max-e.min,!1);i=n.niceNum(r/(t.maxTicks-1),!0)}var o=Math.floor(e.min/i)*i,s=Math.ceil(e.max/i)*i;t.min&&t.max&&t.stepSize&&n.almostWhole((t.max-t.min)/t.stepSize,i/1e3)&&(o=t.min,s=t.max);var l=(s-o)/i;l=n.almostEquals(l,Math.round(l),i/1e3)?Math.round(l):Math.ceil(l);var u=1;i<1&&(u=Math.pow(10,i.toString().length-2),o=Math.round(o*u)/u,s=Math.round(s*u)/u),a.push(void 0!==t.min?t.min:o);for(var d=1;d<l;++d)a.push(Math.round((o+d*i)*u)/u);return a.push(void 0!==t.max?t.max:s),a}(a,t);t.handleDirectionalChanges(),t.max=n.max(r),t.min=n.min(r),e.reverse?(r.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{45:45}],56:[function(t,e,i){"use strict";var n=t(45),a=t(34);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.logarithmic}},i=t.Scale.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,a=i.data.datasets,r=t.isHorizontal();function o(e){return r?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var s=e.stacked;if(void 0===s&&n.each(a,function(t,e){if(!s){var n=i.getDatasetMeta(e);i.isDatasetVisible(e)&&o(n)&&void 0!==n.stack&&(s=!0)}}),e.stacked||s){var l={};n.each(a,function(a,r){var s=i.getDatasetMeta(r),u=[s.type,void 0===e.stacked&&void 0===s.stack?r:"",s.stack].join(".");i.isDatasetVisible(r)&&o(s)&&(void 0===l[u]&&(l[u]=[]),n.each(a.data,function(e,i){var n=l[u],a=+t.getRightValue(e);isNaN(a)||s.data[i].hidden||a<0||(n[i]=n[i]||0,n[i]+=a)}))}),n.each(l,function(e){if(e.length>0){var i=n.min(e),a=n.max(e);t.min=null===t.min?i:Math.min(t.min,i),t.max=null===t.max?a:Math.max(t.max,a)}})}else n.each(a,function(e,a){var r=i.getDatasetMeta(a);i.isDatasetVisible(a)&&o(r)&&n.each(e.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||r.data[i].hidden||n<0||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n),0!==n&&(null===t.minNotZero||n<t.minNotZero)&&(t.minNotZero=n))})});this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks,i=n.valueOrDefault;t.min=i(e.min,t.min),t.max=i(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(n.log10(t.min))-1),t.max=Math.pow(10,Math.floor(n.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(n.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(n.log10(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(n.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),a={min:e.min,max:e.max},r=t.ticks=function(t,e){var i,a,r=[],o=n.valueOrDefault,s=o(t.min,Math.pow(10,Math.floor(n.log10(e.min)))),l=Math.floor(n.log10(e.max)),u=Math.ceil(e.max/Math.pow(10,l));0===s?(i=Math.floor(n.log10(e.minNotZero)),a=Math.floor(e.minNotZero/Math.pow(10,i)),r.push(s),s=a*Math.pow(10,i)):(i=Math.floor(n.log10(s)),a=Math.floor(s/Math.pow(10,i)));var d=i<0?Math.pow(10,Math.abs(i)):1;do{r.push(s),10==++a&&(a=1,d=++i>=0?1:d),s=Math.round(a*Math.pow(10,i)*d)/d}while(i<l||i===l&&a<u);var c=o(t.max,s);return r.push(c),r}(a,t);t.max=n.max(r),t.min=n.min(r),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&r.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(n.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(e){var i,a,r,o,s,l=this,u=l.options.ticks.reverse,d=n.log10,c=l._getFirstTickValue(l.minNotZero),h=0;return e=+l.getRightValue(e),u?(r=l.end,o=l.start,s=-1):(r=l.start,o=l.end,s=1),l.isHorizontal()?(i=l.width,a=u?l.right:l.left):(i=l.height,s*=-1,a=u?l.top:l.bottom),e!==r&&(0===r&&(i-=h=n.getValueOrDefault(l.options.ticks.fontSize,t.defaults.global.defaultFontSize),r=c),0!==e&&(h+=i/(d(o)-d(r))*(d(e)-d(r))),a+=s*h),a},getValueForPixel:function(e){var i,a,r,o,s=this,l=s.options.ticks.reverse,u=n.log10,d=s._getFirstTickValue(s.minNotZero);if(l?(a=s.end,r=s.start):(a=s.start,r=s.end),s.isHorizontal()?(i=s.width,o=l?s.right-e:e-s.left):(i=s.height,o=l?e-s.top:s.bottom-e),o!==a){if(0===a){var c=n.getValueOrDefault(s.options.ticks.fontSize,t.defaults.global.defaultFontSize);o-=c,i-=c,a=d}o*=u(r)-u(a),o/=i,o=Math.pow(10,u(a)+o)}return o}});t.scaleService.registerScaleType("logarithmic",i,e)}},{34:34,45:45}],57:[function(t,e,i){"use strict";var n=t(25),a=t(45),r=t(34);e.exports=function(t){var e=n.global,i={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:r.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function o(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function s(t){var i=t.options.pointLabels,n=a.valueOrDefault(i.fontSize,e.defaultFontSize),r=a.valueOrDefault(i.fontStyle,e.defaultFontStyle),o=a.valueOrDefault(i.fontFamily,e.defaultFontFamily);return{size:n,style:r,family:o,font:a.fontString(n,r,o)}}function l(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||t>a?{start:e-i-5,end:e}:{start:e,end:e+i+5}}function u(t){return 0===t||180===t?"center":t<180?"left":"right"}function d(t,e,i,n){if(a.isArray(e))for(var r=i.y,o=1.5*n,s=0;s<e.length;++s)t.fillText(e[s],i.x,r),r+=o;else t.fillText(e,i.x,i.y)}function c(t,e,i){90===t||270===t?i.y-=e.h/2:(t>270||t<90)&&(i.y-=e.h)}function h(t){return a.isNumber(t)?t:0}var f=t.LinearScaleBase.extend({setDimensions:function(){var t=this,i=t.options,n=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var r=a.min([t.height,t.width]),o=a.valueOrDefault(n.fontSize,e.defaultFontSize);t.drawingArea=i.display?r/2-(o/2+n.backdropPaddingY):r/2},determineDataLimits:function(){var t=this,e=t.chart,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;a.each(e.data.datasets,function(r,o){if(e.isDatasetVisible(o)){var s=e.getDatasetMeta(o);a.each(r.data,function(e,a){var r=+t.getRightValue(e);isNaN(r)||s.data[a].hidden||(i=Math.min(r,i),n=Math.max(r,n))})}}),t.min=i===Number.POSITIVE_INFINITY?0:i,t.max=n===Number.NEGATIVE_INFINITY?0:n,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=a.valueOrDefault(t.fontSize,e.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,e;this.options.pointLabels.display?function(t){var e,i,n,r=s(t),u=Math.min(t.height/2,t.width/2),d={r:t.width,l:0,t:t.height,b:0},c={};t.ctx.font=r.font,t._pointLabelSizes=[];var h,f,p,g=o(t);for(e=0;e<g;e++){n=t.getPointPosition(e,u),h=t.ctx,f=r.size,p=t.pointLabels[e]||"",i=a.isArray(p)?{w:a.longestText(h,h.font,p),h:p.length*f+1.5*(p.length-1)*f}:{w:h.measureText(p).width,h:f},t._pointLabelSizes[e]=i;var v=t.getIndexAngle(e),m=a.toDegrees(v)%360,b=l(m,n.x,i.w,0,180),y=l(m,n.y,i.h,90,270);b.start<d.l&&(d.l=b.start,c.l=v),b.end>d.r&&(d.r=b.end,c.r=v),y.start<d.t&&(d.t=y.start,c.t=v),y.end>d.b&&(d.b=y.end,c.b=v)}t.setReductions(u,d,c)}(this):(t=this,e=Math.min(t.height/2,t.width/2),t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0))},setReductions:function(t,e,i){var n=e.l/Math.sin(i.l),a=Math.max(e.r-this.width,0)/Math.sin(i.r),r=-e.t/Math.cos(i.t),o=-Math.max(e.b-this.height,0)/Math.cos(i.b);n=h(n),a=h(a),r=h(r),o=h(o),this.drawingArea=Math.min(Math.round(t-(n+a)/2),Math.round(t-(r+o)/2)),this.setCenterPoint(n,a,r,o)},setCenterPoint:function(t,e,i,n){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=i+a.drawingArea,l=a.height-n-a.drawingArea;a.xCenter=Math.round((o+r)/2+a.left),a.yCenter=Math.round((s+l)/2+a.top)},getIndexAngle:function(t){return t*(2*Math.PI/o(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var i=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*i:(t-e.min)*i},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,i=t.options,n=i.gridLines,r=i.ticks,l=a.valueOrDefault;if(i.display){var h=t.ctx,f=this.getIndexAngle(0),p=l(r.fontSize,e.defaultFontSize),g=l(r.fontStyle,e.defaultFontStyle),v=l(r.fontFamily,e.defaultFontFamily),m=a.fontString(p,g,v);a.each(t.ticks,function(i,s){if(s>0||r.reverse){var u=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);if(n.display&&0!==s&&function(t,e,i,n){var r=t.ctx;if(r.strokeStyle=a.valueAtIndexOrDefault(e.color,n-1),r.lineWidth=a.valueAtIndexOrDefault(e.lineWidth,n-1),t.options.gridLines.circular)r.beginPath(),r.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),r.closePath(),r.stroke();else{var s=o(t);if(0===s)return;r.beginPath();var l=t.getPointPosition(0,i);r.moveTo(l.x,l.y);for(var u=1;u<s;u++)l=t.getPointPosition(u,i),r.lineTo(l.x,l.y);r.closePath(),r.stroke()}}(t,n,u,s),r.display){var d=l(r.fontColor,e.defaultFontColor);if(h.font=m,h.save(),h.translate(t.xCenter,t.yCenter),h.rotate(f),r.showLabelBackdrop){var c=h.measureText(i).width;h.fillStyle=r.backdropColor,h.fillRect(-c/2-r.backdropPaddingX,-u-p/2-r.backdropPaddingY,c+2*r.backdropPaddingX,p+2*r.backdropPaddingY)}h.textAlign="center",h.textBaseline="middle",h.fillStyle=d,h.fillText(i,0,-u),h.restore()}}}),(i.angleLines.display||i.pointLabels.display)&&function(t){var i=t.ctx,n=t.options,r=n.angleLines,l=n.pointLabels;i.lineWidth=r.lineWidth,i.strokeStyle=r.color;var h=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),f=s(t);i.textBaseline="top";for(var p=o(t)-1;p>=0;p--){if(r.display){var g=t.getPointPosition(p,h);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(g.x,g.y),i.stroke(),i.closePath()}if(l.display){var v=t.getPointPosition(p,h+5),m=a.valueAtIndexOrDefault(l.fontColor,p,e.defaultFontColor);i.font=f.font,i.fillStyle=m;var b=t.getIndexAngle(p),y=a.toDegrees(b);i.textAlign=u(y),c(y,t._pointLabelSizes[p],v),d(i,t.pointLabels[p]||"",v,f.size)}}}(t)}}});t.scaleService.registerScaleType("radialLinear",f,i)}},{25:25,34:34,45:45}],58:[function(t,e,i){"use strict";var n=t(1);n="function"==typeof n?n:window.moment;var a=t(25),r=t(45),o=Number.MIN_SAFE_INTEGER||-9007199254740991,s=Number.MAX_SAFE_INTEGER||9007199254740991,l={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},u=Object.keys(l);function d(t,e){return t-e}function c(t){var e,i,n,a={},r=[];for(e=0,i=t.length;e<i;++e)a[n=t[e]]||(a[n]=!0,r.push(n));return r}function h(t,e,i,n){var a=function(t,e,i){for(var n,a,r,o=0,s=t.length-1;o>=0&&o<=s;){if(a=t[(n=o+s>>1)-1]||null,r=t[n],!a)return{lo:null,hi:r};if(r[e]<i)o=n+1;else{if(!(a[e]>i))return{lo:a,hi:r};s=n-1}}return{lo:r,hi:null}}(t,e,i),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(i-r[e])/s:0,u=(o[n]-r[n])*l;return r[n]+u}function f(t,e){var i=e.parser,a=e.parser||e.format;return"function"==typeof i?i(t):"string"==typeof t&&"string"==typeof a?n(t,a):(t instanceof n||(t=n(t)),t.isValid()?t:"function"==typeof a?a(t):t)}function p(t,e){if(r.isNullOrUndef(t))return null;var i=e.options.time,n=f(e.getRightValue(t),i);return n.isValid()?(i.round&&n.startOf(i.round),n.valueOf()):null}function g(t){for(var e=u.indexOf(t)+1,i=u.length;e<i;++e)if(l[u[e]].common)return u[e]}function v(t,e,i,a){var o,d=a.time,c=d.unit||function(t,e,i,n){var a,r,o,d=u.length;for(a=u.indexOf(t);a<d-1;++a)if(o=(r=l[u[a]]).steps?r.steps[r.steps.length-1]:s,r.common&&Math.ceil((i-e)/(o*r.size))<=n)return u[a];return u[d-1]}(d.minUnit,t,e,i),h=g(c),f=r.valueOrDefault(d.stepSize,d.unitStepSize),p="week"===c&&d.isoWeekday,v=a.ticks.major.enabled,m=l[c],b=n(t),y=n(e),x=[];for(f||(f=function(t,e,i,n){var a,r,o,s=e-t,u=l[i],d=u.size,c=u.steps;if(!c)return Math.ceil(s/(n*d));for(a=0,r=c.length;a<r&&(o=c[a],!(Math.ceil(s/(d*o))<=n));++a);return o}(t,e,c,i)),p&&(b=b.isoWeekday(p),y=y.isoWeekday(p)),b=b.startOf(p?"day":c),(y=y.startOf(p?"day":c))<e&&y.add(1,c),o=n(b),v&&h&&!p&&!d.round&&(o.startOf(h),o.add(~~((b-o)/(m.size*f))*f,c));o<y;o.add(f,c))x.push(+o);return x.push(+o),x}e.exports=function(t){var e=t.Scale.extend({initialize:function(){if(!n)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),t.Scale.prototype.initialize.call(this)},update:function(){var e=this.options;return e.time&&e.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),t.Scale.prototype.update.apply(this,arguments)},getRightValue:function(e){return e&&void 0!==e.t&&(e=e.t),t.Scale.prototype.getRightValue.call(this,e)},determineDataLimits:function(){var t,e,i,a,l,u,h=this,f=h.chart,g=h.options.time,v=g.unit||"day",m=s,b=o,y=[],x=[],w=[];for(t=0,i=f.data.labels.length;t<i;++t)w.push(p(f.data.labels[t],h));for(t=0,i=(f.data.datasets||[]).length;t<i;++t)if(f.isDatasetVisible(t))if(l=f.data.datasets[t].data,r.isObject(l[0]))for(x[t]=[],e=0,a=l.length;e<a;++e)u=p(l[e],h),y.push(u),x[t][e]=u;else y.push.apply(y,w),x[t]=w.slice(0);else x[t]=[];w.length&&(w=c(w).sort(d),m=Math.min(m,w[0]),b=Math.max(b,w[w.length-1])),y.length&&(y=c(y).sort(d),m=Math.min(m,y[0]),b=Math.max(b,y[y.length-1])),m=p(g.min,h)||m,b=p(g.max,h)||b,m=m===s?+n().startOf(v):m,b=b===o?+n().endOf(v)+1:b,h.min=Math.min(m,b),h.max=Math.max(m+1,b),h._horizontal=h.isHorizontal(),h._table=[],h._timestamps={data:y,datasets:x,labels:w}},buildTicks:function(){var t,e,i,a=this,r=a.min,o=a.max,s=a.options,d=s.time,c=[],m=[];switch(s.ticks.source){case"data":c=a._timestamps.data;break;case"labels":c=a._timestamps.labels;break;case"auto":default:c=v(r,o,a.getLabelCapacity(r),s)}for("ticks"===s.bounds&&c.length&&(r=c[0],o=c[c.length-1]),r=p(d.min,a)||r,o=p(d.max,a)||o,t=0,e=c.length;t<e;++t)(i=c[t])>=r&&i<=o&&m.push(i);return a.min=r,a.max=o,a._unit=d.unit||function(t,e,i,a){var r,o,s=n.duration(n(a).diff(n(i)));for(r=u.length-1;r>=u.indexOf(e);r--)if(o=u[r],l[o].common&&s.as(o)>=t.length)return o;return u[e?u.indexOf(e):0]}(m,d.minUnit,a.min,a.max),a._majorUnit=g(a._unit),a._table=function(t,e,i,n){if("linear"===n||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var a,r,o,s,l,u=[],d=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<i&&d.push(s);for(d.push(i),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(a._timestamps.data,r,o,s.distribution),a._offsets=function(t,e,i,n,a){var r,o,s=0,l=0;return a.offset&&e.length&&(a.time.min||(r=e.length>1?e[1]:n,o=e[0],s=(h(t,"time",r,"pos")-h(t,"time",o,"pos"))/2),a.time.max||(r=e[e.length-1],o=e.length>1?e[e.length-2]:i,l=(h(t,"time",r,"pos")-h(t,"time",o,"pos"))/2)),{left:s,right:l}}(a._table,m,r,o,s),a._labelFormat=function(t,e){var i,n,a,r=t.length;for(i=0;i<r;i++){if(0!==(n=f(t[i],e)).millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===n.second()&&0===n.minute()&&0===n.hour()||(a=!0)}return a?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}(a._timestamps.data,d),function(t,e){var i,a,r,o,s=[];for(i=0,a=t.length;i<a;++i)r=t[i],o=!!e&&r===+n(r).startOf(e),s.push({value:r,major:o});return s}(m,a._majorUnit)},getLabelForIndex:function(t,e){var i=this.chart.data,n=this.options.time,a=i.labels&&t<i.labels.length?i.labels[t]:"",o=i.datasets[e].data[t];return r.isObject(o)&&(a=this.getRightValue(o)),n.tooltipFormat?f(a,n).format(n.tooltipFormat):"string"==typeof a?a:f(a,n).format(this._labelFormat)},tickFormatFunction:function(t,e,i,n){var a=this.options,o=t.valueOf(),s=a.time.displayFormats,l=s[this._unit],u=this._majorUnit,d=s[u],c=t.clone().startOf(u).valueOf(),h=a.ticks.major,f=h.enabled&&u&&d&&o===c,p=t.format(n||(f?d:l)),g=f?h:a.ticks.minor,v=r.valueOrDefault(g.callback,g.userCallback);return v?v(p,e,i):p},convertTicksToLabels:function(t){var e,i,a=[];for(e=0,i=t.length;e<i;++e)a.push(this.tickFormatFunction(n(t[e].value),e,t));return a},getPixelForOffset:function(t){var e=this,i=e._horizontal?e.width:e.height,n=e._horizontal?e.left:e.top,a=h(e._table,"time",t,"pos");return n+i*(e._offsets.left+a)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._timestamps.datasets[i][e]),null===n&&(n=p(t,this)),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,i=e._horizontal?e.width:e.height,a=e._horizontal?e.left:e.top,r=(i?(t-a)/i:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,o=h(e._table,"pos",r,"time");return n(o)},getLabelWidth:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=r.toRadians(e.maxRotation),o=Math.cos(n),s=Math.sin(n);return i*o+r.valueOrDefault(e.fontSize,a.global.defaultFontSize)*s},getLabelCapacity:function(t){var e=this,i=e.options.time.displayFormats.millisecond,a=e.tickFormatFunction(n(t),0,[],i),r=e.getLabelWidth(a),o=e.isHorizontal()?e.width:e.height,s=Math.floor(o/r);return s>0?s:1}});t.scaleService.registerScaleType("time",e,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{1:1,25:25,45:45}]},{},[7])(7)}),function(t){WOW=function(){return{init:function(){var e=[],i=1;function n(){var i=window.innerHeight,n=window.scrollY;t(".wow").each(function(){if("visible"!=t(this).css("visibility")&&(i+n-100>a(this)&&n<a(this)||i+n-100>a(this)+t(this).height()&&n<a(this)+t(this).height()||i+n==t(document).height()&&a(this)+100>t(document).height())){var r=t(this).index(".wow"),o=t(this).attr("data-wow-delay");if(o){o=t(this).attr("data-wow-delay").slice(0,-1);var s=this;parseFloat(o);t(s).addClass("animated"),t(s).css({visibility:"visible"}),t(s).css({"animation-delay":o}),t(s).css({"animation-name":e[r]});var l=1e3*t(this).css("animation-duration").slice(0,-1);t(this).attr("data-wow-delay")&&(l+=1e3*t(this).attr("data-wow-delay").slice(0,-1));s=this;setTimeout(function(){t(s).removeClass("animated")},l)}else{t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-name":e[r]});l=1e3*t(this).css("animation-duration").slice(0,-1),s=this;setTimeout(function(){t(s).removeClass("animated")},l)}}})}function a(t){var e=t.getBoundingClientRect(),i=document.body,n=document.documentElement,a=window.pageYOffset||n.scrollTop||i.scrollTop,r=n.clientTop||i.clientTop||0,o=e.top+a-r;return Math.round(o)}t(".wow").each(function(){t(this).css({visibility:"hidden"}),e[t(this).index(".wow")]=t(this).css("animation-name"),t(this).css({"animation-name":"none"})}),t(window).scroll(function(){var e,r;i?(e=window.innerHeight,r=window.scrollY,t(".wow.animated").each(function(){if(e+r-100>a(this)&&r>a(this)+100||e+r-100<a(this)&&r<a(this)+100||a(this)+t(this).height>t(document).height()-100)t(this).removeClass("animated"),t(this).css({"animation-name":"none"}),t(this).css({visibility:"hidden"});else{var i=1e3*t(this).css("animation-duration").slice(0,-1);t(this).attr("data-wow-delay")&&(i+=1e3*t(this).attr("data-wow-delay").slice(0,-1));var n=this;setTimeout(function(){t(n).removeClass("animated")},i)}}),n(),i--):n()}),t(".wow").each(function(){var i=t(this).index(".wow"),n=t(this).attr("data-wow-delay");n?(n=t(this).attr("data-wow-delay").slice(0,-1),parseFloat(n),t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-delay":n+"s"}),t(this).css({"animation-name":e[i]})):(t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-name":e[i]}))})}}}}(jQuery),function(t){t(window).on("scroll",function(){var e=t(".navbar");e.length&&(e.offset().top>50?t(".scrolling-navbar").addClass("top-nav-collapse"):t(".scrolling-navbar").removeClass("top-nav-collapse"))})}(jQuery),function(t,e){"use strict";"function"==typeof define&&define.amd?define([],function(){return t.Waves=e.call(t),t.Waves}):"object"==typeof exports?module.exports=e.call(t):t.Waves=e.call(t)}("object"==typeof global?global:this,function(){"use strict";var t=t||{},e=document.querySelectorAll.bind(document),i=Object.prototype.toString,n="ontouchstart"in window;function a(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function r(t){var n,r=i.call(t);return"[object String]"===r?e(t):a(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r)&&t.hasOwnProperty("length")?t:a(n=t)&&n.nodeType>0?[t]:[]}function o(t){var e,i,n={top:0,left:0},a=t&&t.ownerDocument;return e=a.documentElement,void 0!==t.getBoundingClientRect&&(n=t.getBoundingClientRect()),i=function(t){return null!==(e=t)&&e===e.window?t:9===t.nodeType&&t.defaultView;var e}(a),{top:n.top+i.pageYOffset-e.clientTop,left:n.left+i.pageXOffset-e.clientLeft}}function s(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}var l={duration:750,delay:200,show:function(t,e,i){if(2===t.button)return!1;e=e||this;var n=document.createElement("div");n.className="waves-ripple waves-rippling",e.appendChild(n);var a=o(e),r=0,u=0;"touches"in t&&t.touches.length?(r=t.touches[0].pageY-a.top,u=t.touches[0].pageX-a.left):(r=t.pageY-a.top,u=t.pageX-a.left),u=u>=0?u:0,r=r>=0?r:0;var d="scale("+e.clientWidth/100*3+")",c="translate(0,0)";i&&(c="translate("+i.x+"px, "+i.y+"px)"),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-x",u),n.setAttribute("data-y",r),n.setAttribute("data-scale",d),n.setAttribute("data-translate",c);var h={top:r+"px",left:u+"px"};n.classList.add("waves-notransition"),n.setAttribute("style",s(h)),n.classList.remove("waves-notransition"),h["-webkit-transform"]=d+" "+c,h["-moz-transform"]=d+" "+c,h["-ms-transform"]=d+" "+c,h["-o-transform"]=d+" "+c,h.transform=d+" "+c,h.opacity="1";var f="mousemove"===t.type?2500:l.duration;h["-webkit-transition-duration"]=f+"ms",h["-moz-transition-duration"]=f+"ms",h["-o-transition-duration"]=f+"ms",h["transition-duration"]=f+"ms",n.setAttribute("style",s(h))},hide:function(t,e){for(var i=(e=e||this).getElementsByClassName("waves-rippling"),a=0,r=i.length;a<r;a++)d(t,e,i[a]);n&&(e.removeEventListener("touchend",l.hide),e.removeEventListener("touchcancel",l.hide)),e.removeEventListener("mouseup",l.hide),e.removeEventListener("mouseleave",l.hide)}},u={input:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("i");i.className=t.className+" waves-input-wrapper",t.className="waves-button-input",e.replaceChild(i,t),i.appendChild(t);var n=window.getComputedStyle(t,null),a=n.color,r=n.backgroundColor;i.setAttribute("style","color:"+a+";background:"+r),t.setAttribute("style","background-color:rgba(0,0,0,0);")}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("i");e.replaceChild(i,t),i.appendChild(t)}}};function d(t,e,i){if(i){i.classList.remove("waves-rippling");var n=i.getAttribute("data-x"),a=i.getAttribute("data-y"),r=i.getAttribute("data-scale"),o=i.getAttribute("data-translate"),u=350-(Date.now()-Number(i.getAttribute("data-hold")));u<0&&(u=0),"mousemove"===t.type&&(u=150);var d="mousemove"===t.type?2500:l.duration;setTimeout(function(){var t={top:a+"px",left:n+"px",opacity:"0","-webkit-transition-duration":d+"ms","-moz-transition-duration":d+"ms","-o-transition-duration":d+"ms","transition-duration":d+"ms","-webkit-transform":r+" "+o,"-moz-transform":r+" "+o,"-ms-transform":r+" "+o,"-o-transform":r+" "+o,transform:r+" "+o};i.setAttribute("style",s(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},d)},u)}}var c={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&c.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?c.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout(function(){c.touches&&(c.touches-=1)},500)}};function h(t){var e=function(t){if(!1===c.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;i.parentElement;){if(!(i instanceof SVGElement)&&i.classList.contains("waves-effect")){e=i;break}i=i.parentElement}return e}(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(c.registerEvent(t),"touchstart"===t.type&&l.delay){var i=!1,a=setTimeout(function(){a=null,l.show(t,e)},l.delay),r=function(n){a&&(clearTimeout(a),a=null,l.show(t,e)),i||(i=!0,l.hide(n,e)),s()},o=function(t){a&&(clearTimeout(a),a=null),r(t),s()};e.addEventListener("touchmove",o,!1),e.addEventListener("touchend",r,!1),e.addEventListener("touchcancel",r,!1);var s=function(){e.removeEventListener("touchmove",o),e.removeEventListener("touchend",r),e.removeEventListener("touchcancel",r)}}else l.show(t,e),n&&(e.addEventListener("touchend",l.hide,!1),e.addEventListener("touchcancel",l.hide,!1)),e.addEventListener("mouseup",l.hide,!1),e.addEventListener("mouseleave",l.hide,!1)}}return t.init=function(t){var e=document.body;"duration"in(t=t||{})&&(l.duration=t.duration),"delay"in t&&(l.delay=t.delay),n&&(e.addEventListener("touchstart",h,!1),e.addEventListener("touchcancel",c.registerEvent,!1),e.addEventListener("touchend",c.registerEvent,!1)),e.addEventListener("mousedown",h,!1)},t.attach=function(t,e){var n,a;t=r(t),"[object Array]"===i.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var o=0,s=t.length;o<s;o++)a=(n=t[o]).tagName.toLowerCase(),-1!==["input","img"].indexOf(a)&&(u[a](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},t.ripple=function(t,e){var i=(t=r(t)).length;if((e=e||{}).wait=e.wait||0,e.position=e.position||null,i)for(var n,a,s,u={},d=0,c={type:"mousedown",button:1},h=function(t,e){return function(){l.hide(t,e)}};d<i;d++)if(n=t[d],a=e.position||{x:n.clientWidth/2,y:n.clientHeight/2},s=o(n),u.x=s.left+a.x,u.y=s.top+a.y,c.pageX=u.x,c.pageY=u.y,l.show(c,n),e.wait>=0&&null!==e.wait){setTimeout(h({type:"mouseup",button:1},n),e.wait)}},t.calm=function(t){for(var e={type:"mouseup",button:1},i=0,n=(t=r(t)).length;i<n;i++)l.hide(e,t[i])},t.displayEffect=function(e){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),t.init(e)},t}),Waves.attach(".btn:not(.btn-flat), .btn-floating",["waves-light"]),Waves.attach(".btn-flat",["waves-effect"]),Waves.attach(".chip",["waves-effect"]),Waves.attach(".view a .mask",["waves-light"]),Waves.attach(".waves-light",["waves-light"]),Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)",["waves-light"]),Waves.attach(".pager li a",["waves-light"]),Waves.attach(".pagination .page-item .page-link",["waves-effect"]),Waves.init(),function(t){var e=["text","password","email","url","tel","number","search","search-md"].map(function(t){return"input[type="+t+"]"}).join(", ")+", textarea",i=function(t){var e=t.siblings("label, i"),i=t.val().length,n=t.attr("placeholder");e[(i||n?"add":"remove")+"Class"]("active")},n=function(t){if(t.hasClass("validate")){var e=t.val(),i=!e.length,n=!t[0].validity.badInput;if(i&&n)t.removeClass("valid").removeClass("invalid");else{var a=t.is(":valid"),r=Number(t.attr("length"))||0;a&&(!r||r>e.length)?t.removeClass("invalid").addClass("valid"):t.removeClass("valid").addClass("invalid")}}},a=function(){var e=t(void 0);if(e.val().length){var i=t(".hiddendiv"),n=e.css("font-family"),a=e.css("font-size");a&&i.css("font-size",a),n&&i.css("font-family",n),"off"===e.attr("wrap")&&i.css("overflow-wrap","normal").css("white-space","pre"),i.text(e.val()+"\n");var r=i.html().replace(/\n/g,"<br>");i.html(r),i.css("width",e.is(":visible")?e.width():t(window).width()/2),e.css("height",i.height())}};t(e).each(function(e,n){var a=t(n),r=a.siblings("label, i");i(a),n.validity.badInput&&r.addClass("active")}),t(document).on("focus",e,function(e){t(e.target).siblings("label, i").addClass("active")}),t(document).on("blur",e,function(e){var i=t(e.target),a=!i.val(),r=!e.target.validity.badInput,o=void 0===i.attr("placeholder");a&&r&&o&&i.siblings("label, i").removeClass("active"),n(i)}),t(document).on("change",e,function(e){var a=t(e.target);i(a),n(a)}),t("input[autofocus]").siblings("label, i").addClass("active"),t(document).on("reset",function(i){var n=t(i.target);n.is("form")&&(n.find(e).removeClass("valid").removeClass("invalid").each(function(e,i){var n=t(i),a=!n.val(),r=!n.attr("placeholder");a&&r&&n.siblings("label, i").removeClass("active")}),n.find("select.initialized").each(function(e,i){var n=t(i),a=n.siblings("input.select-dropdown"),r=n.children("[selected]").val();n.val(r),a.val(r)}))}),function(){var e=t(".md-textarea-auto");if(e.length){var i=void 0;i=window.attachEvent?function(t,e,i){t.attachEvent("on"+e,i)}:function(t,e,i){t.addEventListener(e,i,!1)},e.each(function(){var t=this;function e(){t.style.height="auto",t.style.height=t.scrollHeight+"px"}function n(){window.setTimeout(e,0)}i(t,"change",e),i(t,"cut",n),i(t,"paste",n),i(t,"drop",n),i(t,"keydown",n),e()})}}();var r=t("body");if(!t(".hiddendiv").first().length){var o=t('<div class="hiddendiv common"></div>');r.append(o)}t(".materialize-textarea").each(a),r.on("keyup keydown",".materialize-textarea",a)}(jQuery),$("body").on("shown.bs.modal",".modal",function(){$(".modal-backdrop").length||($modal_dialog=$(this).children(".modal-dialog"),$modal_dialog.hasClass("modal-side")&&($(this).addClass("modal-scrolling"),$("body").addClass("scrollable")),$modal_dialog.hasClass("modal-frame")&&($(this).addClass("modal-content-clickable"),$("body").addClass("scrollable")))}),$("body").on("hidden.bs.modal",".modal",function(){$("body").removeClass("scrollable")});
;
//# sourceMappingURL=scripts.js.map