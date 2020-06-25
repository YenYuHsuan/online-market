(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c03f55d0"],{"35b3":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:this.$store.state.isLoading},on:{"update:active":function(e){return t.$set(this.$store.state,"isLoading",e)}}}),r("div",{staticClass:"row py-3"},[r("div",{staticClass:"col-12"},[r("h2",{staticClass:"productTitle"},[t._v(t._s(t.productTitle))]),"Search"===this.$store.state.productModule.routePath.name?r("div",{staticClass:"searchResult mb-4"},[r("strong",[t._v("共找到"+t._s(t.productCategory.length)+"項＂"+t._s(t.searchKeyword)+"＂相關商品")])]):t._e(),r("div",{staticClass:"toolBox"},[r("div",{staticClass:"changeView"},[r("a",{staticClass:"oneCol",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.grid="col-12"}}},[r("i",{staticClass:"fas fa-square fa-lg"})]),r("a",{staticClass:"twoCol-mobile",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.grid="col-6"}}},[r("i",{staticClass:"fas fa-th-large fa-lg"})]),r("a",{staticClass:"twoCol-desktop",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.grid="col-lg-6"}}},[r("i",{staticClass:"fas fa-th-large fa-lg"})]),r("a",{staticClass:"fourCol",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.grid="col-lg-3"}}},[r("i",{staticClass:"fas fa-th fa-lg"})])]),r("div",{staticClass:"sorting"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.sortby,expression:"sortby"}],attrs:{id:"sortby"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sortby=e.target.multiple?r:r[0]}}},[r("option",{domProps:{value:""}},[t._v("商品排序")]),r("option",{domProps:{value:"priceAsc"}},[t._v("價格由低至高")]),r("option",{domProps:{value:"priceDesc"}},[t._v("價格由高至低")])])])])])]),r("div",{staticClass:"row"},[t.productCategory.length||"Search"!==this.$router.currentRoute.name?t._e():r("div",{staticClass:"noRelatedItem mx-auto text-center",staticStyle:{height:"50vh",display:"flex","flex-direction":"column","justify-content":"center"}},[r("i",{staticClass:"fa fa-frown",staticStyle:{"font-size":"65px",display:"block",color:"rgba(149, 149, 149, 0.1)"}}),r("div",{staticClass:"my-2"},[t._v("查無與＂"+t._s(t.searchKeyword)+"＂相關的結果")]),r("a",{staticClass:"btn btn-dark rounded-0 mx-auto text-white my-2",staticStyle:{width:"120px"},on:{click:function(e){return t.$router.back()}}},[t._v("返回上一頁")])]),t._l(t.sortItem,(function(e){return r("productcard",{key:e.id,attrs:{carddata:e,view:t.grid}})}))],2)],1)},s=[],i=(r("fb6a"),r("e915")),c={components:{Productcard:i["a"]},data:function(){return{sortby:"",grid:""}},computed:{productCategory:function(){return this.$store.state.productModule.productCategory},searchKeyword:function(){return this.$store.state.productModule.routePath.params.keyword},productTitle:function(){var t=this.$store.state.productModule.routePath.path;switch(t){case"/product/shirts":return"襯衫";case"/product/outer":return"外套";case"/product/pants":return"長褲";case"/product/t-shirt":return"全系列上衣";case"/product/t-shirt/longsleeve":return"長袖上衣";case"/product/t-shirt/shortsleeve":return"短袖上衣";default:return" "}},sortItem:function(){return"priceDesc"===this.sortby?this.productCategory.slice(0).sort((function(t,e){return e.price-t.price})):"priceAsc"===this.sortby?this.productCategory.slice(0).sort((function(t,e){return t.price-e.price})):this.productCategory}},created:function(){this.$store.commit("ROUTE"),this.$store.dispatch("getProducts"),this.$store.commit("WISHLIST_ITEM")},beforeDestroy:function(){this.$store.commit("RESET_PRODUCTS")},watch:{$route:function(){this.$store.commit("ROUTE"),this.$store.commit("PRODUCT_FILTER")}}},o=c,n=r("2877"),l=Object(n["a"])(o,a,s,!1,null,null,null);e["default"]=l.exports},e915:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-6 col-lg-3 mb-3",class:t.view},[r("div",{staticClass:"card border-0 shadow-0 mb-3"},[r("div",{staticClass:"wishlist-icon"},[r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$store.commit("WISHLIST",t.carddata.id)}}},[r("i",{class:t.heartStyle})])]),r("a",{staticClass:"card-img-wrapper",style:t.soldOut,attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goDetail(t.carddata.id)}}},[t.carddata.is_enabled?t._e():r("div",{staticClass:"soldout-msg"},[t._v("SOLD OUT")]),r("img",{staticClass:"card-image",attrs:{src:t.carddata.imageUrl}})]),r("div",{staticClass:"card-body p-0"},[r("h5",{staticClass:"card-title"},[r("a",{staticClass:"text-dark text-decoration-none",style:t.soldOut,attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goDetail(t.carddata.id)}}},[t._v(t._s(t.carddata.title))])]),r("div",{staticClass:"price"},[t.carddata.price?t._e():r("div",[t._v("NT."+t._s(t._f("currency")(t.carddata.origin_price)))]),t.carddata.price?r("del",[t._v("NT."+t._s(t._f("currency")(t.carddata.origin_price)))]):t._e(),t.carddata.price?r("div",{staticClass:"text-danger"},[t._v("NT"+t._s(t._f("currency")(t.carddata.price)))]):t._e()])])])])},s=[],i=(r("caad"),r("2532"),{props:["carddata","view"],data:function(){return{soldOutStyle:{opacity:"0.6",pointerEvents:"none"}}},methods:{goDetail:function(t){this.$router.push("/productdetail/".concat(t))}},computed:{heartStyle:function(){return this.$store.state.wishlist.includes(this.carddata.id)?"fas fa-heart fa-lg":"far fa-heart fa-lg"},soldOut:function(){return 0===this.carddata.is_enabled?this.soldOutStyle:""}}}),c=i,o=r("2877"),n=Object(o["a"])(c,a,s,!1,null,null,null);e["a"]=n.exports},fb6a:function(t,e,r){"use strict";var a=r("23e7"),s=r("861d"),i=r("e8b5"),c=r("23cb"),o=r("50c4"),n=r("fc6a"),l=r("8418"),d=r("b622"),u=r("1dde"),f=r("ae40"),p=u("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),g=[].slice,m=Math.max;a({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var r,a,d,u=n(this),f=o(u.length),p=c(t,f),h=c(void 0===e?f:e,f);if(i(u)&&(r=u.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?s(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(u,p,h);for(a=new(void 0===r?Array:r)(m(h-p,0)),d=0;p<h;p++,d++)p in u&&l(a,d,u[p]);return a.length=d,a}})}}]);
//# sourceMappingURL=chunk-c03f55d0.7d93b0db.js.map