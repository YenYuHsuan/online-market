(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21061a"],{b83a:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:this.$store.state.isLoading},on:{"update:active":function(s){return t.$set(this.$store.state,"isLoading",s)}}}),a("div",{staticClass:"cart"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-10"},[t._m(0),t.myCarts.final_total?a("table",{staticClass:"table cart-table"},[t._m(1),a("tbody",{staticClass:"cart-body"},t._l(t.myCarts.carts,(function(s){return a("tr",{key:s.id},[a("td",{staticClass:"px-0",attrs:{width:"5%",scope:"row"}},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goDetail(s.product_id)}}},[a("img",{staticClass:"img-fluid",staticStyle:{"min-width":"50px"},attrs:{src:s.product.imageUrl,alt:""}})])]),a("td",{attrs:{width:"25%"}},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goDetail(s.product_id)}}},[a("p",[t._v(t._s(s.product.title))]),a("p",[t._v("尺寸 : "+t._s(s.size))])])]),a("td",{staticClass:"px-0",attrs:{width:"10%"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:s.qty,expression:"item.qty"}],staticClass:"productQty",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(s,"qty",a.target.multiple?e:e[0])},function(a){return t.modifyQty(s.product_id,s.qty,s.size,s.id)}]}},t._l(10,(function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])})),0)]),a("td",{attrs:{width:"10%"}},[t._v(t._s(t._f("currency")(s.total)))]),a("td",{attrs:{width:"10%"}},[t._v(t._s(t._f("currency")(s.final_total)))]),a("td",{attrs:{width:"5%"}},[a("a",{staticClass:"cartcross",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.delCartItem(s.id)}}},[a("i",{staticClass:"fas fa-times"})])])])})),0)]):t._e(),t.itemCounter?t._e():a("div",{staticClass:"py-5 text-center"},[t._m(2),t._v("購物車空空的唷 ! ")]),a("div",{staticClass:"cart-total"},[a("div",{staticClass:"row border-bottom"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"input-group mb-3 coupon"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control rounded-0 coupon-input",attrs:{type:"text",placeholder:"請輸入電子優惠券碼","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.couponCode},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.getDiscount(s)},input:function(s){s.target.composing||(t.couponCode=s.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-dark rounded-0",attrs:{type:"button",id:"button-addon2"},on:{click:t.getDiscount}},[t._v("套用")])])]),a("p",{staticStyle:{"font-size":"13px",color:"#ff5252"}},[t._v(t._s(t.couponResponse))])]),a("div",{staticClass:"col-md-6"},[t.myCarts.final_total>=0?a("ul",{staticClass:"list-unstyled ml-auto text-left price-content"},[a("li",{staticClass:"price-item"},[a("span",[t._v("總金額 :")]),a("span",[t._v(t._s(t._f("currency")(t.myCarts.total)))])]),a("li",{staticClass:"price-item"},[a("span",[t._v("共折抵:")]),a("span",[t._v(t._s(t._f("currency")(t.myCarts.total-t.myCarts.final_total)))])]),t._m(3),a("li",{staticClass:"price-item"},[a("span",[t._v("應付金額 :")]),a("span",[t._v("NT"+t._s(t._f("currency")(t.myCarts.final_total)))])])]):t._e()])]),a("div",{staticClass:"row py-4 justify-content-end"},[a("div",{staticClass:"col-md-3 mb-2"},[a("router-link",{staticClass:"btn btn-outline-dark rounded-0 w-100",attrs:{to:"/product/t-shirt"}},[t._v("繼續逛逛")])],1),t.myCarts.final_total?a("div",{staticClass:"col-md-3 mb-2"},[a("a",{staticClass:"btn btn-dark rounded-0 w-100",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.fillOrder(s)}}},[t._v("前往結帳")])]):t._e()])]),a("div",{staticClass:"cart-total"})])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"shop-steps list-unstyled d-flex"},[a("li",{staticClass:"active"},[a("span",[t._v("1.CHECK ORDER 確認購買清單")])]),a("li",[a("span",[t._v("2.SHIPPING ORDER 填寫訂單")])]),a("li",[a("span",[t._v("3.ALL DONE! 訂單完成")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"cart-head"},[a("tr",[a("th",{staticClass:"px-0",attrs:{scope:"col"}}),a("th",{attrs:{scope:"col"}},[t._v("商品資訊")]),a("th",{staticClass:"px-0",attrs:{scope:"col"}},[t._v("數量")]),a("th",{attrs:{scope:"col"}},[t._v("價格")]),a("th",{attrs:{scope:"col"}},[t._v("折扣價")]),a("th",{attrs:{scope:"col"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("i",{staticClass:"fa fa-cart-arrow-down cart-info"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"price-item"},[a("span"),a("span")])}],o=(a("99af"),{data:function(){return{couponCode:"",couponResponse:""}},methods:{delCartItem:function(t){this.$store.dispatch("removeCart",t)},goDetail:function(t){this.$router.push("/productdetail/".concat(t))},getDiscount:function(){var t=this,s=this,a={code:s.couponCode},e="".concat("https://vue-course-api.hexschool.io","/api/").concat("haseiyo","/coupon");s.$http.post(e,{data:a}).then((function(a){a.data.success?(s.couponResponse=a.data.message,t.$store.dispatch("getCart")):s.couponResponse=a.data.message}))},fillOrder:function(){this.$router.push("/customer/order_page")},modifyQty:function(t,s,a,e){this.$store.dispatch("modifyQty",{product_id:t,qty:s,size:a,id:e})}},computed:{myCarts:function(){return JSON.parse(JSON.stringify(this.$store.state.myCarts))},itemCounter:function(){return this.$store.state.cartItemCounter}},created:function(){this.$store.dispatch("getCart")}}),r=o,n=a("2877"),c=Object(n["a"])(r,e,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21061a.4673a13c.js.map