/*! For license information please see 356.8214b6d2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdocfind=self.webpackChunkdocfind||[]).push([[356],{3796:function(e,t,n){var r=n(5671),i=n(3144),a=n(136),s=n(8557),o=n(2791),c=n(1523),l=n(184),u=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,l.jsx)("div",{className:"sigma_subheader style-5 bg-gray",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"sigma_subheader-inner",children:(0,l.jsx)("h1",{children:this.props.breadcrumb.pagename})}),(0,l.jsx)("ol",{className:"breadcrumb",children:(0,l.jsx)("li",{className:"breadcrumb-item",children:(0,l.jsx)(c.rU,{to:"/",className:"btn-link",children:"Go to Home"})})})]})})}}]),n}(o.Component);t.Z=u},2040:function(e,t,n){var r=n(4165),i=n(5861),a=n(5671),s=n(3144),o=n(7326),c=n(136),l=n(8557),u=n(2791),h=n(1698),d=n(2593),f=n(1523),m=(n(7505),n(184)),g=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).onFilterChange=function(e){r.setState({filter:e.target.value}),console.log(r.state.filter)},r.onInputTextChange=function(e){r.setState({inputText:e.target.value}),console.log(r.state.filter)},r.state={filter:"name",inputText:""},r.onFilterChange=r.onFilterChange.bind((0,o.Z)(r)),r.onInputTextChange=r.onInputTextChange.bind((0,o.Z)(r)),r.handleSubmit=r.handleSubmit.bind((0,o.Z)(r)),r}return(0,s.Z)(n,[{key:"handleSubmit",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(this.state.filter,this.state.inputText),this.resetForm();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({filter:"",inputText:""})}},{key:"render",value:function(){var e="true"==localStorage.getItem("isAdmin");return console.log(e),(0,m.jsxs)(u.Fragment,{children:[(0,m.jsxs)("aside",{className:!0===this.state.navMethod?"sigma_aside aside-open":"sigma_aside",children:[(0,m.jsxs)("div",{className:"sigma_close aside-trigger",onClick:this.toggleNav,children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]}),(0,m.jsx)(d.Z,{})]}),(0,m.jsx)("div",{className:"sigma_aside-overlay aside-trigger",onClick:this.toggleNav}),(0,m.jsx)("header",{className:"sigma_header style-5 bg-transparent shadow-none can-sticky",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"sigma_header-middle pl-4 pr-4",children:(0,m.jsxs)("div",{className:"navbar",children:[(0,m.jsx)("div",{className:"sigma_logo-wrapper",children:(0,m.jsx)(f.rU,{to:"/",className:"sigma_logo",children:(0,m.jsx)("img",{src:"/medi-finder/assets/img/logo-light.png",alt:"logo"})})}),(0,m.jsxs)("div",{className:"d-flex align-items-center",children:[(0,m.jsx)("div",{children:(0,m.jsx)("form",{onSubmit:this.handleSubmit,children:(0,m.jsxs)("div",{className:"row no-gutters",children:[(0,m.jsx)("div",{className:"col",children:(0,m.jsx)("div",{className:"form-group pad4",children:(0,m.jsxs)("select",{value:this.state.filter,onChange:this.onFilterChange,children:[(0,m.jsx)("option",{value:"name",children:"by Drug Name"}),(0,m.jsx)("option",{value:"manufacturer",children:"by Manufacturer"}),(0,m.jsx)("option",{value:"ingredients",children:"by Ingredients"})]})})}),(0,m.jsx)("div",{className:"col-lg-7\u2018",children:(0,m.jsx)("div",{className:"form-group",children:(0,m.jsxs)("div",{className:"input-group",children:[(0,m.jsx)("input",{type:"text",className:"location-field",placeholder:"Search Here",value:this.state.inputText,onChange:this.onInputTextChange,required:!0}),(0,m.jsx)("div",{className:"input-group-append pr-5",children:(0,m.jsx)("a",{className:"sigma_btn",href:"search-results?filter="+this.state.filter+"&text="+this.state.inputText,children:(0,m.jsx)("img",{src:"/medi-finder/assets/img/SearchIcon.svg",alt:"searchIcon"})})})]})})})]})})}),(0,m.jsx)("ul",{className:"navbar-nav mr-3"}),(0,m.jsx)("a",{href:"/saved-list",children:(0,m.jsx)("img",{src:"/medi-finder/assets/img/bookmark.svg",alt:"BookmarkIcon"})}),e?(0,m.jsx)("a",{href:"./admin-page",children:(0,m.jsx)("img",{src:"/medi-finder/assets/img/user.svg",alt:"BookmarkIcon"})}):(0,m.jsx)("a",{href:"./user-page",children:(0,m.jsx)("img",{src:"/medi-finder/assets/img/user.svg",alt:"BookmarkIcon"})})]})]})})})}),(0,m.jsxs)("div",{className:!0===this.state.searchMethod?"search-form-wrapper open":"search-form-wrapper",children:[(0,m.jsxs)("div",{className:"search-trigger sigma_close",onClick:this.toggleSearch,children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]}),(0,m.jsxs)("form",{className:"search-form",children:[(0,m.jsx)("input",{type:"text",placeholder:"Search...",required:!0}),(0,m.jsx)("button",{type:"submit",className:"search-btn",children:(0,m.jsx)("i",{className:"fal fa-search m-0"})})]})]})]})}}]),n}(h.Z);t.Z=g},7478:function(e,t,n){var r=n(4165),i=n(5861),a=n(5671),s=n(3144),o=n(7326),c=n(136),l=n(8557),u=n(2791),h=n(1698),d=n(2593),f=n(1523),m=(n(7505),n(184)),g=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).onFilterChange=function(e){r.setState({filter:e.target.value}),console.log(r.state.filter)},r.onInputTextChange=function(e){r.setState({inputText:e.target.value}),console.log(r.state.filter)},r.state={filter:"name",inputText:""},r.onFilterChange=r.onFilterChange.bind((0,o.Z)(r)),r.onInputTextChange=r.onInputTextChange.bind((0,o.Z)(r)),r.handleSubmit=r.handleSubmit.bind((0,o.Z)(r)),r}return(0,s.Z)(n,[{key:"handleSubmit",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(this.state.filter,this.state.inputText),this.resetForm();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({filter:"",inputText:""})}},{key:"render",value:function(){return(0,m.jsxs)(u.Fragment,{children:[(0,m.jsxs)("aside",{className:!0===this.state.navMethod?"sigma_aside aside-open":"sigma_aside",children:[(0,m.jsxs)("div",{className:"sigma_close aside-trigger",onClick:this.toggleNav,children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]}),(0,m.jsx)(d.Z,{})]}),(0,m.jsx)("div",{className:"sigma_aside-overlay aside-trigger",onClick:this.toggleNav}),(0,m.jsx)("header",{className:"sigma_header style-5 bg-transparent shadow-none can-sticky",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"sigma_header-middle pl-4 pr-4",children:(0,m.jsxs)("div",{className:"navbar",children:[(0,m.jsx)("div",{className:"sigma_logo-wrapper",children:(0,m.jsx)(f.rU,{to:"/",className:"sigma_logo",children:(0,m.jsx)("img",{src:"/medi-finder/assets/img/logo-light.png",alt:"logo"})})}),(0,m.jsxs)("div",{className:"d-flex align-items-center",children:[(0,m.jsx)("div",{children:(0,m.jsx)("form",{onSubmit:this.handleSubmit,children:(0,m.jsxs)("div",{className:"row no-gutters",children:[(0,m.jsx)("div",{className:"col",children:(0,m.jsx)("div",{className:"form-group pad4",children:(0,m.jsxs)("select",{value:this.state.filter,onChange:this.onFilterChange,children:[(0,m.jsx)("option",{value:"name",children:"by Drug Name"}),(0,m.jsx)("option",{value:"manufacturer",children:"by Manufacturer"}),(0,m.jsx)("option",{value:"ingredients",children:"by Ingredients"})]})})}),(0,m.jsx)("div",{className:"col-lg-7\u2018",children:(0,m.jsx)("div",{className:"form-group",children:(0,m.jsxs)("div",{className:"input-group",children:[(0,m.jsx)("input",{type:"text",className:"location-field",placeholder:"Search Here",value:this.state.inputText,onChange:this.onInputTextChange,required:!0}),(0,m.jsx)("div",{className:"input-group-append pr-5",children:(0,m.jsx)("a",{className:"sigma_btn",href:"search-results?filter="+this.state.filter+"&text="+this.state.inputText,children:(0,m.jsx)("img",{src:"/medi-finder/assets/img/SearchIcon.svg",alt:"searchIcon"})})})]})})})]})})}),(0,m.jsx)("ul",{className:"navbar-nav mr-3"}),(0,m.jsx)("div",{className:"sigma_header-controls style-2",children:(0,m.jsxs)("ul",{className:"sigma_header-controls-inner",children:[(0,m.jsx)("li",{className:"d-none d-sm-block",children:(0,m.jsx)(f.rU,{to:"/login",className:"sigma_btn btn-sm",children:"Login"})}),(0,m.jsx)("li",{className:"d-none d-sm-block",children:(0,m.jsx)(f.rU,{to:"/sign-up",className:"sigma_btn btn-sm",children:"Sign Up"})}),(0,m.jsxs)("li",{className:"aside-toggle aside-trigger",onClick:this.toggleNav,children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]})]})})]})]})})})}),(0,m.jsxs)("div",{className:!0===this.state.searchMethod?"search-form-wrapper open":"search-form-wrapper",children:[(0,m.jsxs)("div",{className:"search-trigger sigma_close",onClick:this.toggleSearch,children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]}),(0,m.jsxs)("form",{className:"search-form",children:[(0,m.jsx)("input",{type:"text",placeholder:"Search...",required:!0}),(0,m.jsx)("button",{type:"submit",className:"search-btn",children:(0,m.jsx)("i",{className:"fal fa-search m-0"})})]})]})]})}}]),n}(h.Z);t.Z=g},2593:function(e,t,n){var r=n(5671),i=n(3144),a=n(136),s=n(8557),o=n(2791),c=n(1698),l=n(1523),u=n(7505),h=n(184),d=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this;return(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)("div",{className:"sigma_logo-wrapper",children:(0,h.jsx)(l.rU,{to:"/",className:"sigma_logo",children:(0,h.jsx)("img",{src:"/medi-finder/assets/img/logo.png",alt:"logo"})})}),(0,h.jsx)("ul",{className:"navbar-nav",children:u.length>0?u.map((function(t,n){return(0,h.jsxs)("li",{className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[t.child?(0,h.jsxs)(l.rU,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",t.linkText," "]}):(0,h.jsxs)(l.rU,{to:t.link,children:[" ",t.linkText," "]}),t.child?(0,h.jsx)("ul",{className:"sub-menu",role:"menu",children:t.submenu.map((function(e,t){return(0,h.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?(0,h.jsxs)(l.rU,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):(0,h.jsxs)(l.rU,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?(0,h.jsx)("ul",{className:"sub-menu",children:e.submenu.map((function(e,t){return(0,h.jsx)("li",{className:"menu-item",children:(0,h.jsx)(l.rU,{to:e.link,children:e.linkText})},t)}))}):null]},t)}))}):null]},n)})):null})]})}}]),n}(c.Z);t.Z=d},356:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(5671),i=n(3144),a=n(136),s=n(8557),o=n(2791),c=n(1642),l=n(2040),u=n(7478),h=n(3796),d=n(1523),f=n(184),m=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,f.jsx)("section",{className:"section errorpage",children:(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"row align-items-center",children:[(0,f.jsx)("div",{className:"col-lg-7 text-center",children:(0,f.jsx)("img",{src:"/medi-finder/assets/img/home-2/635x450.jpg",alt:"img"})}),(0,f.jsx)("div",{className:"col-lg-5 text-center",children:(0,f.jsxs)("div",{className:"error-texts relative",children:[(0,f.jsx)("h1",{children:"404"}),(0,f.jsx)("h3",{children:"Ooops! That page doesn't exist!"}),(0,f.jsx)("p",{children:"This file May Have Been Moved or Deleted. Be Sure to Check Your Spelling."}),(0,f.jsx)(d.rU,{to:"/",className:"sigma_btn",children:"Back to Home"})]})})]})})})}}]),n}(o.Component),g=m,p="Error 404",v=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=null!=localStorage.getItem("sessionId"),t="true"==localStorage.getItem("isAdmin");return(0,f.jsxs)(o.Fragment,{children:[(0,f.jsxs)(c.ZP,{children:[(0,f.jsxs)("title",{children:["Docfind - Doctors Appointment Booking - React Template |"," ",p]}),(0,f.jsx)("meta",{name:"description",content:"#"})]}),t||e?(0,f.jsx)(l.Z,{}):(0,f.jsx)(u.Z,{}),(0,f.jsx)(h.Z,{breadcrumb:{pagename:p}}),(0,f.jsx)(g,{})]})}}]),n}(o.Component),x=v},1698:function(e,t,n){var r=n(5671),i=n(3144),a=n(7326),s=n(136),o=n(8557),c=n(2791),l=n(184),u=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).StickyHeader=function(e){var t=window.scrollY>100;i.setState((function(e){return{stickyHeader:t}}))},i.getNextSibling=function(e,t){var n=e.nextElementSibling;if(!t)return n;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}},i.triggerChild=function(e){var t="",n="sub-menu";null!==(t=void 0!==i.getNextSibling(e.target,"."+n)?i.getNextSibling(e.target,"."+n):null)&&void 0!==t&&""!==t&&(t.classList=t.classList.contains("d-block")?n:n+" d-block")},i.state={navMethod:!1,searchMethod:!1,windowSize:"",stickyHeader:0},i.toggleNav=i.toggleNav.bind((0,a.Z)(i)),i.toggleSearch=i.toggleSearch.bind((0,a.Z)(i)),i}return(0,i.Z)(n,[{key:"toggleNav",value:function(){this.setState({navMethod:!this.state.navMethod})}},{key:"toggleSearch",value:function(){this.setState({searchMethod:!this.state.searchMethod})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.StickyHeader)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.StickyHeader)}},{key:"render",value:function(){return(0,l.jsx)(c.Fragment,{})}}]),n}(c.Component);t.Z=u},7326:function(e,t,n){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},5861:function(e,t,n){function r(e,t,n,r,i,a,s){try{var o=e[a](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var s=e.apply(t,n);function o(e){r(s,i,a,o,c,"next",e)}function c(e){r(s,i,a,o,c,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return i}})},5671:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(9142);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(0,r.Z)(i.key),i)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},8557:function(e,t,n){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return o}});var i=n(1002),a=n(7326);function s(e,t){if(t&&("object"===(0,i.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(e)}function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return s(this,n)}}},136:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9611);function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},4165:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(1002);function i(){i=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(L){u=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,s=Object.create(i.prototype),o=new _(r||[]);return a(s,"_invoke",{value:w(e,n,o)}),s}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=h;var f={};function m(){}function g(){}function p(){}var v={};u(v,o,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(C([])));j&&j!==t&&n.call(j,o)&&(v=j);var y=p.prototype=m.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function i(a,s,o,c){var l=d(e[a],e,s);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==(0,r.Z)(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){i("next",e,o,c)}),(function(e){i("throw",e,o,c)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return i("throw",e,o,c)}))}c(l.arg)}var s;a(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return s=s?s.then(r,r):r()}})}function w(e,t,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return T()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var o=k(s,n);if(o){if(o===f)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var i=d(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,f;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return g.prototype=p,a(y,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:g,configurable:!0}),g.displayName=u(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(N.prototype),u(N.prototype,c,(function(){return this})),e.AsyncIterator=N,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var s=new N(h(t,n,r,i),a);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},b(y),u(y,l,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=C,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type="throw",s.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var o=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}},7505:function(e){e.exports=JSON.parse('[{"id":6,"link":"/clinic-list","linkText":"Drugs"}]')}}]);
//# sourceMappingURL=356.8214b6d2.chunk.js.map