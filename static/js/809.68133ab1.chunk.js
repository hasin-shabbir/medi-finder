"use strict";(self.webpackChunkdocfind=self.webpackChunkdocfind||[]).push([[809],{2040:function(e,s,n){var t=n(4165),i=n(5861),a=n(5671),r=n(3144),l=n(7326),c=n(136),o=n(8557),d=n(2791),h=n(1698),m=n(2593),u=n(1523),g=(n(7505),n(184)),x=function(e){(0,c.Z)(n,e);var s=(0,o.Z)(n);function n(e){var t;return(0,a.Z)(this,n),(t=s.call(this,e)).onFilterChange=function(e){t.setState({filter:e.target.value}),console.log(t.state.filter)},t.onInputTextChange=function(e){t.setState({inputText:e.target.value}),console.log(t.state.filter)},t.state={filter:"name",inputText:""},t.onFilterChange=t.onFilterChange.bind((0,l.Z)(t)),t.onInputTextChange=t.onInputTextChange.bind((0,l.Z)(t)),t.handleSubmit=t.handleSubmit.bind((0,l.Z)(t)),t}return(0,r.Z)(n,[{key:"handleSubmit",value:function(){var e=(0,i.Z)((0,t.Z)().mark((function e(s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),console.log(this.state.filter,this.state.inputText),this.resetForm();case 3:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({filter:"",inputText:""})}},{key:"render",value:function(){var e="true"==localStorage.getItem("isAdmin");return console.log(e),(0,g.jsxs)(d.Fragment,{children:[(0,g.jsxs)("aside",{className:!0===this.state.navMethod?"sigma_aside aside-open":"sigma_aside",children:[(0,g.jsxs)("div",{className:"sigma_close aside-trigger",onClick:this.toggleNav,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]}),(0,g.jsx)(m.Z,{})]}),(0,g.jsx)("div",{className:"sigma_aside-overlay aside-trigger",onClick:this.toggleNav}),(0,g.jsx)("header",{className:"sigma_header style-5 bg-transparent shadow-none can-sticky",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)("div",{className:"sigma_header-middle pl-4 pr-4",children:(0,g.jsxs)("div",{className:"navbar",children:[(0,g.jsx)("div",{className:"sigma_logo-wrapper",children:(0,g.jsx)(u.rU,{to:"/",className:"sigma_logo",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/logo-light.png",alt:"logo"})})}),(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)("div",{children:(0,g.jsx)("form",{onSubmit:this.handleSubmit,children:(0,g.jsxs)("div",{className:"row no-gutters",children:[(0,g.jsx)("div",{className:"col",children:(0,g.jsx)("div",{className:"form-group pad4",children:(0,g.jsxs)("select",{value:this.state.filter,onChange:this.onFilterChange,children:[(0,g.jsx)("option",{value:"name",children:"by Drug Name"}),(0,g.jsx)("option",{value:"manufacturer",children:"by Manufacturer"}),(0,g.jsx)("option",{value:"ingredients",children:"by Ingredients"})]})})}),(0,g.jsx)("div",{className:"col-lg-7\u2018",children:(0,g.jsx)("div",{className:"form-group",children:(0,g.jsxs)("div",{className:"input-group",children:[(0,g.jsx)("input",{type:"text",className:"location-field",placeholder:"Search Here",value:this.state.inputText,onChange:this.onInputTextChange,required:!0}),(0,g.jsx)("div",{className:"input-group-append pr-5",children:(0,g.jsx)("a",{className:"sigma_btn",href:"search-results?filter="+this.state.filter+"&text="+this.state.inputText,children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/SearchIcon.svg",alt:"searchIcon"})})})]})})})]})})}),(0,g.jsx)("ul",{className:"navbar-nav mr-3"}),(0,g.jsx)("a",{href:"/saved-list",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/bookmark.svg",alt:"BookmarkIcon"})}),e?(0,g.jsx)("a",{href:"./admin-page",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/user.svg",alt:"BookmarkIcon"})}):(0,g.jsx)("a",{href:"./user-page",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/user.svg",alt:"BookmarkIcon"})})]})]})})})}),(0,g.jsxs)("div",{className:!0===this.state.searchMethod?"search-form-wrapper open":"search-form-wrapper",children:[(0,g.jsxs)("div",{className:"search-trigger sigma_close",onClick:this.toggleSearch,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]}),(0,g.jsxs)("form",{className:"search-form",children:[(0,g.jsx)("input",{type:"text",placeholder:"Search...",required:!0}),(0,g.jsx)("button",{type:"submit",className:"search-btn",children:(0,g.jsx)("i",{className:"fal fa-search m-0"})})]})]})]})}}]),n}(h.Z);s.Z=x},7478:function(e,s,n){var t=n(4165),i=n(5861),a=n(5671),r=n(3144),l=n(7326),c=n(136),o=n(8557),d=n(2791),h=n(1698),m=n(2593),u=n(1523),g=(n(7505),n(184)),x=function(e){(0,c.Z)(n,e);var s=(0,o.Z)(n);function n(e){var t;return(0,a.Z)(this,n),(t=s.call(this,e)).onFilterChange=function(e){t.setState({filter:e.target.value}),console.log(t.state.filter)},t.onInputTextChange=function(e){t.setState({inputText:e.target.value}),console.log(t.state.filter)},t.state={filter:"name",inputText:""},t.onFilterChange=t.onFilterChange.bind((0,l.Z)(t)),t.onInputTextChange=t.onInputTextChange.bind((0,l.Z)(t)),t.handleSubmit=t.handleSubmit.bind((0,l.Z)(t)),t}return(0,r.Z)(n,[{key:"handleSubmit",value:function(){var e=(0,i.Z)((0,t.Z)().mark((function e(s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),console.log(this.state.filter,this.state.inputText),this.resetForm();case 3:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({filter:"",inputText:""})}},{key:"render",value:function(){return(0,g.jsxs)(d.Fragment,{children:[(0,g.jsxs)("aside",{className:!0===this.state.navMethod?"sigma_aside aside-open":"sigma_aside",children:[(0,g.jsxs)("div",{className:"sigma_close aside-trigger",onClick:this.toggleNav,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]}),(0,g.jsx)(m.Z,{})]}),(0,g.jsx)("div",{className:"sigma_aside-overlay aside-trigger",onClick:this.toggleNav}),(0,g.jsx)("header",{className:"sigma_header style-5 bg-transparent shadow-none can-sticky",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)("div",{className:"sigma_header-middle pl-4 pr-4",children:(0,g.jsxs)("div",{className:"navbar",children:[(0,g.jsx)("div",{className:"sigma_logo-wrapper",children:(0,g.jsx)(u.rU,{to:"/",className:"sigma_logo",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/logo-light.png",alt:"logo"})})}),(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)("div",{children:(0,g.jsx)("form",{onSubmit:this.handleSubmit,children:(0,g.jsxs)("div",{className:"row no-gutters",children:[(0,g.jsx)("div",{className:"col",children:(0,g.jsx)("div",{className:"form-group pad4",children:(0,g.jsxs)("select",{value:this.state.filter,onChange:this.onFilterChange,children:[(0,g.jsx)("option",{value:"name",children:"by Drug Name"}),(0,g.jsx)("option",{value:"manufacturer",children:"by Manufacturer"}),(0,g.jsx)("option",{value:"ingredients",children:"by Ingredients"})]})})}),(0,g.jsx)("div",{className:"col-lg-7\u2018",children:(0,g.jsx)("div",{className:"form-group",children:(0,g.jsxs)("div",{className:"input-group",children:[(0,g.jsx)("input",{type:"text",className:"location-field",placeholder:"Search Here",value:this.state.inputText,onChange:this.onInputTextChange,required:!0}),(0,g.jsx)("div",{className:"input-group-append pr-5",children:(0,g.jsx)("a",{className:"sigma_btn",href:"search-results?filter="+this.state.filter+"&text="+this.state.inputText,children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/SearchIcon.svg",alt:"searchIcon"})})})]})})})]})})}),(0,g.jsx)("ul",{className:"navbar-nav mr-3"}),(0,g.jsx)("div",{className:"sigma_header-controls style-2",children:(0,g.jsxs)("ul",{className:"sigma_header-controls-inner",children:[(0,g.jsx)("li",{className:"d-none d-sm-block",children:(0,g.jsx)(u.rU,{to:"/login",className:"sigma_btn btn-sm",children:"Login"})}),(0,g.jsx)("li",{className:"d-none d-sm-block",children:(0,g.jsx)(u.rU,{to:"/sign-up",className:"sigma_btn btn-sm",children:"Sign Up"})}),(0,g.jsxs)("li",{className:"aside-toggle aside-trigger",onClick:this.toggleNav,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]})]})})]})]})})})}),(0,g.jsxs)("div",{className:!0===this.state.searchMethod?"search-form-wrapper open":"search-form-wrapper",children:[(0,g.jsxs)("div",{className:"search-trigger sigma_close",onClick:this.toggleSearch,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]}),(0,g.jsxs)("form",{className:"search-form",children:[(0,g.jsx)("input",{type:"text",placeholder:"Search...",required:!0}),(0,g.jsx)("button",{type:"submit",className:"search-btn",children:(0,g.jsx)("i",{className:"fal fa-search m-0"})})]})]})]})}}]),n}(h.Z);s.Z=x},2593:function(e,s,n){var t=n(5671),i=n(3144),a=n(136),r=n(8557),l=n(2791),c=n(1698),o=n(1523),d=n(7505),h=n(184),m=function(e){(0,a.Z)(n,e);var s=(0,r.Z)(n);function n(){return(0,t.Z)(this,n),s.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this;return(0,h.jsxs)(l.Fragment,{children:[(0,h.jsx)("div",{className:"sigma_logo-wrapper",children:(0,h.jsx)(o.rU,{to:"/",className:"sigma_logo",children:(0,h.jsx)("img",{src:"/medi-finder/assets/img/logo.png",alt:"logo"})})}),(0,h.jsx)("ul",{className:"navbar-nav",children:d.length>0?d.map((function(s,n){return(0,h.jsxs)("li",{className:"menu-item ".concat(s.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[s.child?(0,h.jsxs)(o.rU,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",s.linkText," "]}):(0,h.jsxs)(o.rU,{to:s.link,children:[" ",s.linkText," "]}),s.child?(0,h.jsx)("ul",{className:"sub-menu",role:"menu",children:s.submenu.map((function(e,s){return(0,h.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?(0,h.jsxs)(o.rU,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):(0,h.jsxs)(o.rU,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?(0,h.jsx)("ul",{className:"sub-menu",children:e.submenu.map((function(e,s){return(0,h.jsx)("li",{className:"menu-item",children:(0,h.jsx)(o.rU,{to:e.link,children:e.linkText})},s)}))}):null]},s)}))}):null]},n)})):null})]})}}]),n}(c.Z);s.Z=m},809:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});var t=n(5671),i=n(3144),a=n(136),r=n(8557),l=n(2791),c=n(1642),o=n(7478),d=n(2040),h=n(8683),m=JSON.parse('[{"id":1,"image":"assets/img/home-1/HomeMainImage.png","subtitle":"First in UAE","title":"Easy & Fast Way <br> To Know Your Drug"},{"id":2,"image":"assets/img/home-1/HomeMainImage2.png","subtitle":"Easy Access","title":"Just Scan the Code <br> On Your Drug Package."}]'),u=n(5717),g=n(1523),x=n(184),v={slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,autoplay:!1,centerMode:!0,centerPadding:0,responsive:[{breakpoint:767,settings:{arrows:!1,dots:!0}}]},p=function(e){(0,a.Z)(n,e);var s=(0,r.Z)(n);function n(){return(0,t.Z)(this,n),s.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,x.jsx)("div",{className:"sigma_banner style-8",children:(0,x.jsx)(u.Z,(0,h.Z)((0,h.Z)({},v),{},{className:"sigma_banner-slider",children:m.map((function(e,s){return(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"banner-slider-inner bg-center bg-cover",style:{backgroundImage:"url(/medi-finder/"+e.image+")"},children:(0,x.jsx)("div",{className:"sigma_banner-text text-center",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row justify-content-center",children:(0,x.jsxs)("div",{className:"col-lg-8",children:[(0,x.jsx)("h5",{className:"text-white",children:e.subtitle}),(0,x.jsx)("h1",{className:"title text-white",dangerouslySetInnerHTML:{__html:e.title}}),(0,x.jsx)("div",{className:"banner-links d-flex align-items-center justify-content-center",children:(0,x.jsxs)(g.rU,{to:"/clinic-list",className:"sigma_btn",children:["View Full List of Drug Database",(0,x.jsx)("i",{className:"fal fa-plus ml-3 d-none d-sm-inline-block"})]})})]})})})})})},s)}))}))})}}]),n}(l.Component),j=p,f=n(7326),N=(l.Component,function(e){(0,a.Z)(n,e);var s=(0,r.Z)(n);function n(){return(0,t.Z)(this,n),s.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,x.jsx)("div",{className:"section section-padding sigma_service-sec style-16",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",children:(0,x.jsxs)("div",{className:"sigma_service style-16",children:[(0,x.jsx)("div",{className:"sigma_service-thumb",children:(0,x.jsx)("img",{src:"/medi-finder/assets/img/home-1/LookUp.svg",alt:"LookUpIcon"})}),(0,x.jsxs)("div",{className:"sigma_service-body",children:[(0,x.jsx)("h5",{children:"Simple Access"}),(0,x.jsx)("p",{children:"Scan & Look up Drug information"})]})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",children:(0,x.jsxs)("div",{className:"sigma_service style-16",children:[(0,x.jsx)("div",{className:"sigma_service-thumb",children:(0,x.jsx)("img",{src:"/medi-finder/assets/img/home-1/SaveDrugs.svg",alt:"LookUpIcon"})}),(0,x.jsxs)("div",{className:"sigma_service-body",children:[(0,x.jsx)("h5",{children:"Save Drugs"}),(0,x.jsx)("p",{children:"Save Frequently Used Drug Info"})]})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",children:(0,x.jsxs)("div",{className:"sigma_service style-16",children:[(0,x.jsx)("div",{className:"sigma_service-thumb",children:(0,x.jsx)("img",{src:"/medi-finder/assets/img/home-1/DrugDetails.svg",alt:"LookUpIcon"})}),(0,x.jsxs)("div",{className:"sigma_service-body",children:[(0,x.jsx)("h5",{children:"Drug Details"}),(0,x.jsx)("p",{children:"Detailed Information of Your Medicine"})]})]})})]})})})}}]),n}(l.Component)),b=N,y=function(e){(0,a.Z)(n,e);var s=(0,r.Z)(n);function n(e){var i;return(0,t.Z)(this,n),(i=s.call(this,e)).onFilterChange=function(e){i.setState({filter:e.target.value}),console.log(i.state.filter)},i.onInputTextChange=function(e){i.setState({inputText:e.target.value}),console.log(i.state.filter)},i.state={filter:"name",inputText:""},i.onFilterChange=i.onFilterChange.bind((0,f.Z)(i)),i.onInputTextChange=i.onInputTextChange.bind((0,f.Z)(i)),i.handleSubmit=i.handleSubmit.bind((0,f.Z)(i)),i}return(0,i.Z)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state.filter,this.state.inputText),this.resetForm()}},{key:"resetForm",value:function(){this.setState({filter:"",inputText:""})}},{key:"render",value:function(){return(0,x.jsx)("div",{className:"sigma_banner-info style-2",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"sigma_cta style-13",children:(0,x.jsx)("form",{onSubmit:this.handleSubmit,children:(0,x.jsxs)("div",{className:"row no-gutters",children:[(0,x.jsx)("div",{className:"col-lg-6",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Search Topic"}),(0,x.jsxs)("select",{value:this.state.filter,onChange:this.onFilterChange,children:[(0,x.jsx)("option",{value:"name",children:"by Drug Name"}),(0,x.jsx)("option",{value:"manufacturer",children:"by Manufacturer"}),(0,x.jsx)("option",{value:"ingredients",children:"by Ingredients"})]})]})}),(0,x.jsx)("div",{className:"col-lg-6",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Search Query"}),(0,x.jsxs)("div",{className:"input-group",children:[(0,x.jsx)("input",{type:"text",className:"location-field",placeholder:"Drug Name, Manufacturer, etc.",value:this.state.inputText,onChange:this.onInputTextChange,required:!0}),(0,x.jsx)("div",{className:"input-group-append",children:(0,x.jsx)("a",{className:"sigma_btn",href:"search-results?filter="+this.state.filter+"&text="+this.state.inputText,children:"Find Now"})})]})]})})]})})})})})}}]),n}(l.Component),k=function(e){(0,a.Z)(n,e);var s=(0,r.Z)(n);function n(){return(0,t.Z)(this,n),s.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,x.jsxs)(l.Fragment,{children:[(0,x.jsx)(j,{}),(0,x.jsx)(y,{}),(0,x.jsx)(b,{})]})}}]),n}(l.Component),Z=k,S=function(e){(0,a.Z)(n,e);var s=(0,r.Z)(n);function n(){return(0,t.Z)(this,n),s.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=null!=localStorage.getItem("sessionId"),s="true"==localStorage.getItem("isAdmin");return(0,x.jsxs)(l.Fragment,{children:[(0,x.jsxs)(c.ZP,{children:[(0,x.jsxs)("title",{children:["MediFind - Medicine Information, One Scan Away | ","Homepage"]}),(0,x.jsx)("meta",{name:"description",content:"#"})]}),s||e?(0,x.jsx)(d.Z,{}):(0,x.jsx)(o.Z,{}),(0,x.jsx)(Z,{})]})}}]),n}(l.Component),C=S},1698:function(e,s,n){var t=n(5671),i=n(3144),a=n(7326),r=n(136),l=n(8557),c=n(2791),o=n(184),d=function(e){(0,r.Z)(n,e);var s=(0,l.Z)(n);function n(e){var i;return(0,t.Z)(this,n),(i=s.call(this,e)).StickyHeader=function(e){var s=window.scrollY>100;i.setState((function(e){return{stickyHeader:s}}))},i.getNextSibling=function(e,s){var n=e.nextElementSibling;if(!s)return n;for(;n;){if(n.matches(s))return n;n=n.nextElementSibling}},i.triggerChild=function(e){var s="",n="sub-menu";null!==(s=void 0!==i.getNextSibling(e.target,"."+n)?i.getNextSibling(e.target,"."+n):null)&&void 0!==s&&""!==s&&(s.classList=s.classList.contains("d-block")?n:n+" d-block")},i.state={navMethod:!1,searchMethod:!1,windowSize:"",stickyHeader:0},i.toggleNav=i.toggleNav.bind((0,a.Z)(i)),i.toggleSearch=i.toggleSearch.bind((0,a.Z)(i)),i}return(0,i.Z)(n,[{key:"toggleNav",value:function(){this.setState({navMethod:!this.state.navMethod})}},{key:"toggleSearch",value:function(){this.setState({searchMethod:!this.state.searchMethod})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.StickyHeader)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.StickyHeader)}},{key:"render",value:function(){return(0,o.jsx)(c.Fragment,{})}}]),n}(c.Component);s.Z=d},7505:function(e){e.exports=JSON.parse('[{"id":6,"link":"/clinic-list","linkText":"Drugs"}]')}}]);
//# sourceMappingURL=809.68133ab1.chunk.js.map