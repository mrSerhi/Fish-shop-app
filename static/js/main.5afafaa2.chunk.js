(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a(3),s=a(4),i=a(6),o=a(5),u=a(7),d=a(40),m=a(42),p=a(41);function f(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function h(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(h(e),"-").concat(h(e),"-").concat(h(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).storeNameInput=r.a.createRef(),a.handleSumbitForm=function(e){e.preventDefault();var t=a.storeNameInput.current.value;console.log(t),a.props.history.push("/store/".concat(t))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.handleSumbitForm},r.a.createElement("h2",null,"Please type a store"),r.a.createElement("input",{ref:this.storeNameInput,defaultValue:v(),type:"text",placeholder:"Store name",required:!0}),r.a.createElement("button",{type:"submit"},"Visit store ->"))}}]),t}(n.Component),g=function(){return r.a.createElement("h1",null,"Page is not exist...")},E=a(11),y=a(10),O=[{id:"343fgfgf4",title:"Pacific Halibut",image:"./images/hali.jpg",desc:"Everyones favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},{id:"4343lglfkdflg",title:"Lobster",image:"./images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},{id:"111cldkfkgm",title:"Sea Scallops",image:"./images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},{id:"dlsldcdv4303",title:"Mahi Mahi",image:"./images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},{id:"pppfpfdfl443434",title:"King Crab",image:"./images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},{id:"596_ffkkfjfjk3",title:"Atlantic Salmon",image:"./images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},{id:"43410odfob",title:"Oysters",image:"./images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},{id:"fdppfdpfp444554-3",title:"Mussels",image:"./images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},{id:"6666_flflggfgfddsds",title:"Jumbo Prawns",image:"./images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}],j=function(){return O},k=function(e){var t=e.tagline,a=e.children;return r.a.createElement("div",{className:"menu"},r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The"))),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,t))),a)},R=a(9),w=function(e){var t=e.available,a=e.countNumber,n=e.currentProduct,c=n.title,l=n.price,s=e.index,i=e.onRemoveOrder,o={key:a,classNames:"count",timeout:{enter:500,exit:500}};return t?r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement(R.TransitionGroup,{component:"span",className:"count"},r.a.createElement(R.CSSTransition,o,r.a.createElement("span",null,a))),"lbs ",c,f(a*l),r.a.createElement("button",{onClick:function(){return i(s)}},"\xd7"))):r.a.createElement("li",null,"Sorry, ".concat(c||"Product"," is no longer available..."))},S=function(e){var t=e.products,a=e.orders,n=e.onRemove,c=Object.keys(a).map(function(e){var c=t.findIndex(function(t){return t.title===e}),l=a[e],s="available"===t[c].status;return r.a.createElement(R.CSSTransition,{classNames:"order",key:e,timeout:{enter:500,exit:500}},r.a.createElement(w,{key:e,available:s,countNumber:l,currentProduct:t[c],index:e,onRemoveOrder:n}))});return r.a.createElement(R.TransitionGroup,{component:"ul",className:"order"},c)},N=function(e){var t=e.products,a=e.orders,n=e.onRemove,c=Object.keys(a).reduce(function(e,n){var r=t.findIndex(function(e){return e.title===n}),c=a[n];return"available"===t[r].status?e+t[r].price*c:e},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Orders"),r.a.createElement(S,{products:t,orders:a,onRemove:n}),r.a.createElement("div",{className:"total"},"Total: ",r.a.createElement("strong",null,f(c))))},C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).titleRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.handleSubmitForm=function(e){e.preventDefault();var t={title:a.titleRef.current.value,price:parseFloat(a.priceRef.current.value),status:"available"===a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addProduct(t),e.currentTarget.reset()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.handleSubmitForm},r.a.createElement("input",{ref:this.titleRef,name:"name",type:"text",placeholder:"Title of product"}),r.a.createElement("input",{ref:this.priceRef,name:"price",type:"text",placeholder:"Product price"}),r.a.createElement("select",{ref:this.statusRef,name:"status"},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{ref:this.descRef,name:"desc",placeholder:"Type decsription"}),r.a.createElement("input",{ref:this.imageRef,name:"image",type:"text",placeholder:"Choose product image"}),r.a.createElement("button",{type:"submit"},"Ok"))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=Object(E.a)({},a.props.item);t[e.currentTarget.name]=e.currentTarget.value,a.props.onEdit(t)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.id,n=t.title,c=t.price,l=t.status,s=t.desc,i=t.image;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{onChange:this.handleChange,value:n,name:"title",type:"text"}),r.a.createElement("input",{onChange:this.handleChange,value:c,name:"price",type:"text"}),r.a.createElement("select",{onChange:this.handleChange,value:l,name:"status"},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{onChange:this.handleChange,value:s,name:"desc"}),r.a.createElement("input",{onChange:this.handleChange,value:i,name:"image",type:"text"}),r.a.createElement("button",{onClick:function(){return e.props.onRemove(a)},type:"button"},"Remove product"))}}]),t}(n.Component),x=function(e){var t=e.productsItems,a=e.addProduct,n=e.getMoreProductItems,c=e.onEdit,l=e.onRemove,s=t.map(function(e){return r.a.createElement(P,{key:e.id,item:e,onEdit:c,onRemove:l})});return r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",{className:"inventory"},"Inventory"),s,r.a.createElement(C,{addProduct:a}),r.a.createElement("button",{onClick:n},"Load More..."))},T=function(e){return r.a.createElement("div",{className:"catch-of-the-day"},e.children)},A=function(e){var t=e.item,a=e.onAddToOrders,n=t.title,c=t.price,l=t.status,s=t.desc,i=t.image,o=l?"Buy Now!":"Sold Out!",u="available"===l;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:i,alt:"title"}),r.a.createElement("h3",{className:"fish-name"},n,r.a.createElement("span",{className:"price"},f(c))),r.a.createElement("p",null,s),r.a.createElement("button",{onClick:function(){return a(n)},disabled:!u},o))},I=function(e){var t=e.productsItems,a=e.onAddToOrders,n=t?t.map(function(e){return r.a.createElement(A,{key:e.id,item:e,onAddToOrders:a})}):null;return r.a.createElement("ul",{className:"fishes"},n)},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],orders:{}},a.handleaddProducts=function(e){var t=[].concat(Object(y.a)(a.state.products),[e]);a.setState({products:t})},a.handleAddOrderClick=function(e){var t=Object(E.a)({},a.state.orders);t[e]=t[e]+1||1,a.setState({orders:t})},a.handleUpdateProduct=function(e){var t=Object(y.a)(a.state.products),n=t.findIndex(function(t){return t.id===e.id});t[n]=e,a.setState({products:t})},a.handleRemoveProduct=function(e){var t=Object(y.a)(a.state.products).filter(function(t){return t.id!==e});a.setState({products:t})},a.handleRemoveOrder=function(e){var t=Object(E.a)({},a.state.orders);delete t[e],a.setState({orders:t})},a.loadMoreProducts=function(){var e=j(),t=[].concat(Object(y.a)(a.state.products),Object(y.a)(e));a.setState({products:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.products,a=e.orders;return r.a.createElement(T,null,r.a.createElement(k,{tagline:"Shop Sea Products"},r.a.createElement(I,{productsItems:t,onAddToOrders:this.handleAddOrderClick})),r.a.createElement(N,{products:t,orders:a,onRemove:this.handleRemoveOrder}),r.a.createElement(x,{productsItems:t,addProduct:this.handleaddProducts,getMoreProductItems:this.loadMoreProducts,onEdit:this.handleUpdateProduct,onRemove:this.handleRemoveProduct}))}}]),t}(n.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(m.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:b}),r.a.createElement(p.a,{path:"/store/:store_id",component:M}),r.a.createElement(p.a,{component:g})))}}]),t}(n.Component);a(36);Object(c.render)(r.a.createElement(F,null),document.querySelector("#main"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5afafaa2.chunk.js.map