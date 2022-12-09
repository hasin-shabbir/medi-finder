"use strict";(self.webpackChunkdocfind=self.webpackChunkdocfind||[]).push([[635],{3796:function(e,s,t){var a=t(5671),i=t(3144),n=t(136),r=t(8557),l=t(2791),c=t(1523),o=t(184),d=function(e){(0,n.Z)(t,e);var s=(0,r.Z)(t);function t(){return(0,a.Z)(this,t),s.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){return(0,o.jsx)("div",{className:"sigma_subheader style-5 bg-gray",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("div",{className:"sigma_subheader-inner",children:(0,o.jsx)("h1",{children:this.props.breadcrumb.pagename})}),(0,o.jsx)("ol",{className:"breadcrumb",children:(0,o.jsx)("li",{className:"breadcrumb-item",children:(0,o.jsx)(c.rU,{to:"/",className:"btn-link",children:"Go to Home"})})})]})})}}]),t}(l.Component);s.Z=d},2040:function(e,s,t){var a=t(4165),i=t(5861),n=t(5671),r=t(3144),l=t(7326),c=t(136),o=t(8557),d=t(2791),h=t(1698),m=t(2593),u=t(1523),g=(t(7505),t(184)),x=function(e){(0,c.Z)(t,e);var s=(0,o.Z)(t);function t(e){var a;return(0,n.Z)(this,t),(a=s.call(this,e)).onFilterChange=function(e){a.setState({filter:e.target.value}),console.log(a.state.filter)},a.onInputTextChange=function(e){a.setState({inputText:e.target.value}),console.log(a.state.filter)},a.state={filter:"name",inputText:""},a.onFilterChange=a.onFilterChange.bind((0,l.Z)(a)),a.onInputTextChange=a.onInputTextChange.bind((0,l.Z)(a)),a.handleSubmit=a.handleSubmit.bind((0,l.Z)(a)),a}return(0,r.Z)(t,[{key:"handleSubmit",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),console.log(this.state.filter,this.state.inputText),this.resetForm();case 3:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({filter:"",inputText:""})}},{key:"render",value:function(){var e="true"==localStorage.getItem("isAdmin");return console.log(e),(0,g.jsxs)(d.Fragment,{children:[(0,g.jsxs)("aside",{className:!0===this.state.navMethod?"sigma_aside aside-open":"sigma_aside",children:[(0,g.jsxs)("div",{className:"sigma_close aside-trigger",onClick:this.toggleNav,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]}),(0,g.jsx)(m.Z,{})]}),(0,g.jsx)("div",{className:"sigma_aside-overlay aside-trigger",onClick:this.toggleNav}),(0,g.jsx)("header",{className:"sigma_header style-5 bg-transparent shadow-none can-sticky",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)("div",{className:"sigma_header-middle pl-4 pr-4",children:(0,g.jsxs)("div",{className:"navbar",children:[(0,g.jsx)("div",{className:"sigma_logo-wrapper",children:(0,g.jsx)(u.rU,{to:"/",className:"sigma_logo",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/logo-light.png",alt:"logo"})})}),(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)("div",{children:(0,g.jsx)("form",{onSubmit:this.handleSubmit,children:(0,g.jsxs)("div",{className:"row no-gutters",children:[(0,g.jsx)("div",{className:"col",children:(0,g.jsx)("div",{className:"form-group pad4",children:(0,g.jsxs)("select",{value:this.state.filter,onChange:this.onFilterChange,children:[(0,g.jsx)("option",{value:"name",children:"by Drug Name"}),(0,g.jsx)("option",{value:"manufacturer",children:"by Manufacturer"}),(0,g.jsx)("option",{value:"ingredients",children:"by Ingredients"})]})})}),(0,g.jsx)("div",{className:"col-lg-7\u2018",children:(0,g.jsx)("div",{className:"form-group",children:(0,g.jsxs)("div",{className:"input-group",children:[(0,g.jsx)("input",{type:"text",className:"location-field",placeholder:"Search Here",value:this.state.inputText,onChange:this.onInputTextChange,required:!0}),(0,g.jsx)("div",{className:"input-group-append pr-5",children:(0,g.jsx)("a",{className:"sigma_btn",href:"search-results?filter="+this.state.filter+"&text="+this.state.inputText,children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/SearchIcon.svg",alt:"searchIcon"})})})]})})})]})})}),(0,g.jsx)("ul",{className:"navbar-nav mr-3"}),(0,g.jsx)("a",{href:"/saved-list",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/bookmark.svg",alt:"BookmarkIcon"})}),e?(0,g.jsx)("a",{href:"./admin-page",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/user.svg",alt:"BookmarkIcon"})}):(0,g.jsx)("a",{href:"./user-page",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/user.svg",alt:"BookmarkIcon"})})]})]})})})}),(0,g.jsxs)("div",{className:!0===this.state.searchMethod?"search-form-wrapper open":"search-form-wrapper",children:[(0,g.jsxs)("div",{className:"search-trigger sigma_close",onClick:this.toggleSearch,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]}),(0,g.jsxs)("form",{className:"search-form",children:[(0,g.jsx)("input",{type:"text",placeholder:"Search...",required:!0}),(0,g.jsx)("button",{type:"submit",className:"search-btn",children:(0,g.jsx)("i",{className:"fal fa-search m-0"})})]})]})]})}}]),t}(h.Z);s.Z=x},7478:function(e,s,t){var a=t(4165),i=t(5861),n=t(5671),r=t(3144),l=t(7326),c=t(136),o=t(8557),d=t(2791),h=t(1698),m=t(2593),u=t(1523),g=(t(7505),t(184)),x=function(e){(0,c.Z)(t,e);var s=(0,o.Z)(t);function t(e){var a;return(0,n.Z)(this,t),(a=s.call(this,e)).onFilterChange=function(e){a.setState({filter:e.target.value}),console.log(a.state.filter)},a.onInputTextChange=function(e){a.setState({inputText:e.target.value}),console.log(a.state.filter)},a.state={filter:"name",inputText:""},a.onFilterChange=a.onFilterChange.bind((0,l.Z)(a)),a.onInputTextChange=a.onInputTextChange.bind((0,l.Z)(a)),a.handleSubmit=a.handleSubmit.bind((0,l.Z)(a)),a}return(0,r.Z)(t,[{key:"handleSubmit",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),console.log(this.state.filter,this.state.inputText),this.resetForm();case 3:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({filter:"",inputText:""})}},{key:"render",value:function(){return(0,g.jsxs)(d.Fragment,{children:[(0,g.jsxs)("aside",{className:!0===this.state.navMethod?"sigma_aside aside-open":"sigma_aside",children:[(0,g.jsxs)("div",{className:"sigma_close aside-trigger",onClick:this.toggleNav,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]}),(0,g.jsx)(m.Z,{})]}),(0,g.jsx)("div",{className:"sigma_aside-overlay aside-trigger",onClick:this.toggleNav}),(0,g.jsx)("header",{className:"sigma_header style-5 bg-transparent shadow-none can-sticky",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)("div",{className:"sigma_header-middle pl-4 pr-4",children:(0,g.jsxs)("div",{className:"navbar",children:[(0,g.jsx)("div",{className:"sigma_logo-wrapper",children:(0,g.jsx)(u.rU,{to:"/",className:"sigma_logo",children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/logo-light.png",alt:"logo"})})}),(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)("div",{children:(0,g.jsx)("form",{onSubmit:this.handleSubmit,children:(0,g.jsxs)("div",{className:"row no-gutters",children:[(0,g.jsx)("div",{className:"col",children:(0,g.jsx)("div",{className:"form-group pad4",children:(0,g.jsxs)("select",{value:this.state.filter,onChange:this.onFilterChange,children:[(0,g.jsx)("option",{value:"name",children:"by Drug Name"}),(0,g.jsx)("option",{value:"manufacturer",children:"by Manufacturer"}),(0,g.jsx)("option",{value:"ingredients",children:"by Ingredients"})]})})}),(0,g.jsx)("div",{className:"col-lg-7\u2018",children:(0,g.jsx)("div",{className:"form-group",children:(0,g.jsxs)("div",{className:"input-group",children:[(0,g.jsx)("input",{type:"text",className:"location-field",placeholder:"Search Here",value:this.state.inputText,onChange:this.onInputTextChange,required:!0}),(0,g.jsx)("div",{className:"input-group-append pr-5",children:(0,g.jsx)("a",{className:"sigma_btn",href:"search-results?filter="+this.state.filter+"&text="+this.state.inputText,children:(0,g.jsx)("img",{src:"/medi-finder/assets/img/SearchIcon.svg",alt:"searchIcon"})})})]})})})]})})}),(0,g.jsx)("ul",{className:"navbar-nav mr-3"}),(0,g.jsx)("div",{className:"sigma_header-controls style-2",children:(0,g.jsxs)("ul",{className:"sigma_header-controls-inner",children:[(0,g.jsx)("li",{className:"d-none d-sm-block",children:(0,g.jsx)(u.rU,{to:"/login",className:"sigma_btn btn-sm",children:"Login"})}),(0,g.jsx)("li",{className:"d-none d-sm-block",children:(0,g.jsx)(u.rU,{to:"/sign-up",className:"sigma_btn btn-sm",children:"Sign Up"})}),(0,g.jsxs)("li",{className:"aside-toggle aside-trigger",onClick:this.toggleNav,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]})]})})]})]})})})}),(0,g.jsxs)("div",{className:!0===this.state.searchMethod?"search-form-wrapper open":"search-form-wrapper",children:[(0,g.jsxs)("div",{className:"search-trigger sigma_close",onClick:this.toggleSearch,children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]}),(0,g.jsxs)("form",{className:"search-form",children:[(0,g.jsx)("input",{type:"text",placeholder:"Search...",required:!0}),(0,g.jsx)("button",{type:"submit",className:"search-btn",children:(0,g.jsx)("i",{className:"fal fa-search m-0"})})]})]})]})}}]),t}(h.Z);s.Z=x},2593:function(e,s,t){var a=t(5671),i=t(3144),n=t(136),r=t(8557),l=t(2791),c=t(1698),o=t(1523),d=t(7505),h=t(184),m=function(e){(0,n.Z)(t,e);var s=(0,r.Z)(t);function t(){return(0,a.Z)(this,t),s.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=this;return(0,h.jsxs)(l.Fragment,{children:[(0,h.jsx)("div",{className:"sigma_logo-wrapper",children:(0,h.jsx)(o.rU,{to:"/",className:"sigma_logo",children:(0,h.jsx)("img",{src:"/medi-finder/assets/img/logo.png",alt:"logo"})})}),(0,h.jsx)("ul",{className:"navbar-nav",children:d.length>0?d.map((function(s,t){return(0,h.jsxs)("li",{className:"menu-item ".concat(s.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[s.child?(0,h.jsxs)(o.rU,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",s.linkText," "]}):(0,h.jsxs)(o.rU,{to:s.link,children:[" ",s.linkText," "]}),s.child?(0,h.jsx)("ul",{className:"sub-menu",role:"menu",children:s.submenu.map((function(e,s){return(0,h.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?(0,h.jsxs)(o.rU,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):(0,h.jsxs)(o.rU,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?(0,h.jsx)("ul",{className:"sub-menu",children:e.submenu.map((function(e,s){return(0,h.jsx)("li",{className:"menu-item",children:(0,h.jsx)(o.rU,{to:e.link,children:e.linkText})},s)}))}):null]},s)}))}):null]},t)})):null})]})}}]),t}(c.Z);s.Z=m},9635:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var a=t(4165),i=t(5861),n=t(885),r=t(2791),l=t(1642),c=t(2040),o=t(7478),d=t(3796),h=t(5671),m=t(3144),u=t(7326),g=t(136),x=t(8557),p=t(1523),v=t(3637),f=t(184),j=function(e){(0,g.Z)(t,e);var s=(0,x.Z)(t);function t(e){var a;return(0,h.Z)(this,t),(a=s.call(this,e)).state={data:e.drugs,activePage:1,itemPerpage:10,favorite:!1},a.favoriteTrigger=a.favoriteTrigger.bind((0,u.Z)(a)),a}return(0,m.Z)(t,[{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"favoriteTrigger",value:function(e){this.setState({favorite:e}),this.state.favorite===e&&this.setState({favorite:null})}},{key:"render",value:function(){var e=this,s=this.props.drugs.slice((this.state.activePage-1)*this.state.itemPerpage,this.state.activePage*this.state.itemPerpage).map((function(s,t){return(0,f.jsx)("div",{className:"sigma_team style-17",children:(0,f.jsxs)("div",{className:"row no-gutters",children:[(0,f.jsx)("div",{className:"col-md-3",children:(0,f.jsx)("div",{className:"sigma_team-thumb",children:(0,f.jsx)("img",{src:"/medi-finder/assets/img/drug/"+s.drugId+".jpg",alt:s.name})})}),(0,f.jsx)("div",{className:"col-md-5 col-sm-6",children:(0,f.jsxs)("div",{className:"sigma_team-body",children:[(0,f.jsx)("h5",{children:(0,f.jsx)(p.rU,{to:"/drug-details/"+s.drugId,children:s.drugName})}),(0,f.jsx)("p",{children:s.purpose}),(0,f.jsxs)("div",{className:"d-flex align-items-center mt-4",children:[(0,f.jsx)(p.rU,{to:"/drug-details/"+s.drugId,className:"sigma_btn",children:"View More"}),(0,f.jsx)("div",{className:"sigma_team-controls ml-3",children:(0,f.jsx)(p.rU,{to:"#",className:e.state.favorite===s?"active":"",onClick:function(t){return e.favoriteTrigger(s)},children:(0,f.jsx)("i",{className:"fal fa-heart"})})})]})]})}),(0,f.jsx)("div",{className:"col-md-4 col-sm-6",children:(0,f.jsx)("div",{className:"sigma_team-footer",children:(0,f.jsxs)("div",{className:"sigma_team-info",children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("i",{className:"fal fa-building"}),s.manufacturer]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("i",{className:"fal fa-pills"}),s.ingredients]})]})})})]})},t)}));return(0,f.jsx)("div",{className:"sidebar-style-9",children:(0,f.jsx)("div",{className:"section section-padding",children:(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("div",{className:"row",children:(0,f.jsxs)("div",{className:"col-lg-11",children:[s,(0,f.jsx)(v.Z,{activePage:this.state.activePage,itemsCountPerPage:this.state.itemPerpage,totalItemsCount:this.state.data.length,pageRangeDisplayed:this.state.data.length,onChange:this.handlePageChange.bind(this),innerClass:"pagination",activeClass:"active",itemClass:"page-item",linkClass:"page-link"})]})})})})})}}]),t}(r.Component),N=t(9271),b="Search Results",k=function(){var e=(0,N.TH)().search,s=new URLSearchParams(e),t=(0,r.useState)([]),h=(0,n.Z)(t,2),m=h[0],u=h[1],g=null!=localStorage.getItem("sessionId"),x=localStorage.getItem("isAdmin");return(0,r.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,i,n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://ec2-3-28-221-142.me-central-1.compute.amazonaws.com/api/drugs?"+s.get("filter")+"="+s.get("text"),i={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},e.prev=2,console.log(t),e.next=6,fetch(t,i);case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,console.log(r),u(r),e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)(r.Fragment,{children:[(0,f.jsxs)(l.ZP,{children:[(0,f.jsxs)("title",{children:["Docfind - Doctors Appointment Booking - React Template |"," ",b]}),(0,f.jsx)("meta",{name:"description",content:"#"})]}),x||g?(0,f.jsx)(c.Z,{}):(0,f.jsx)(o.Z,{}),(0,f.jsx)(d.Z,{breadcrumb:{pagename:b}}),(0,f.jsx)(j,{drugs:m})]})}},1698:function(e,s,t){var a=t(5671),i=t(3144),n=t(7326),r=t(136),l=t(8557),c=t(2791),o=t(184),d=function(e){(0,r.Z)(t,e);var s=(0,l.Z)(t);function t(e){var i;return(0,a.Z)(this,t),(i=s.call(this,e)).StickyHeader=function(e){var s=window.scrollY>100;i.setState((function(e){return{stickyHeader:s}}))},i.getNextSibling=function(e,s){var t=e.nextElementSibling;if(!s)return t;for(;t;){if(t.matches(s))return t;t=t.nextElementSibling}},i.triggerChild=function(e){var s="",t="sub-menu";null!==(s=void 0!==i.getNextSibling(e.target,"."+t)?i.getNextSibling(e.target,"."+t):null)&&void 0!==s&&""!==s&&(s.classList=s.classList.contains("d-block")?t:t+" d-block")},i.state={navMethod:!1,searchMethod:!1,windowSize:"",stickyHeader:0},i.toggleNav=i.toggleNav.bind((0,n.Z)(i)),i.toggleSearch=i.toggleSearch.bind((0,n.Z)(i)),i}return(0,i.Z)(t,[{key:"toggleNav",value:function(){this.setState({navMethod:!this.state.navMethod})}},{key:"toggleSearch",value:function(){this.setState({searchMethod:!this.state.searchMethod})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.StickyHeader)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.StickyHeader)}},{key:"render",value:function(){return(0,o.jsx)(c.Fragment,{})}}]),t}(c.Component);s.Z=d},7505:function(e){e.exports=JSON.parse('[{"id":6,"link":"/clinic-list","linkText":"Drugs"}]')}}]);
//# sourceMappingURL=635.119198cb.chunk.js.map