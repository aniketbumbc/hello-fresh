(this.webpackJsonphellofresh=this.webpackJsonphellofresh||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(28),r=a.n(i),o=a(11),c=a(9),s=a(8),d=s.Container;d.displayName="Container";var m=s.Row;m.displayName="Row";var h=s.Col;h.displayName="Col";var u,p=a(3),f=a(2),g=a(1),b=f.default.div(u||(u=Object(p.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),g.a,g.b,g.d,g.f,g.h,g.i,g.j,g.k,g.l);b.displayName="Box";var _,y=b,x=Object(f.default)(y)(_||(_=Object(p.a)([""])));x.propTypes=y.propTypes,x.defaultProps={display:"flex"};var E,w=x,v=a(4),C=a(5),j=a(10),S=f.default.div(E||(E=Object(p.a)(["\n  ","\n  ","\n  ","\n"])),g.n,g.k,g.d);S.propTypes=Object(C.a)(Object(C.a)(Object(C.a)({},j.a.typography),j.a.space),j.a.color);var k,O,R=S,z=f.default.button(k||(k=Object(p.a)(["\n  ","\n  ","\n  ","\n  ","\n  &:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n"])),Object(g.o)({variants:{primary:{color:"white",borderWidth:"sm",borderStyle:"solid",borderColor:"primary_600",backgroundColor:"primary_600",boxShadow:"sm",":hover:enabled":{backgroundColor:"primary_700",borderColor:"primary_700"},":active:enabled":{backgroundColor:"primary_800",borderColor:"primary_800"}},secondary:{color:"primary_600",borderWidth:"sm",borderStyle:"solid",borderColor:"primary_600",backgroundColor:"white",boxShadow:"sm",":hover:enabled":{backgroundColor:"primary_200",borderColor:"primary_700"},":active:enabled":{backgroundColor:"primary_300",borderColor:"primary_800"}}}}),Object(v.a)({padding:"0 24px",lineHeight:"40px",textDecoration:"none",textAlign:"center",borderRadius:"md",cursor:"pointer",display:"block",textTransform:"uppercase",outline:"none",width:"fit-content"}),g.h,g.k),F=a(32),P=["content","viewBox","size"],B=f.default.svg(O||(O=Object(p.a)(["\n  ",";\n  fill: currentcolor;\n"])),g.d);B.displayName="IconContainer";var L=function(e){var t=e.content,a=e.viewBox,n=e.size,i=Object(F.a)(e,P);return l.a.createElement(B,Object.assign({width:n,height:n,viewBox:a},i),t)};L.defaultProps={size:24};var T=L,A=function(e){return l.a.createElement(T,Object.assign({viewBox:"0 0 32 32",content:l.a.createElement("path",{d:"M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 1.5C9.649 4.5 4.5 9.649 4.5 16S9.649 27.5 16 27.5 27.5 22.351 27.5 16 22.351 4.5 16 4.5zM22 15v2H10v-2h12z"})},e))};A.displayName="IconMinusCircle";var q=A,H=function(e){return l.a.createElement(T,Object.assign({viewBox:"0 0 32 32",content:l.a.createElement("path",{d:"M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 1.5C9.649 4.5 4.5 9.649 4.5 16S9.649 27.5 16 27.5 27.5 22.351 27.5 16 22.351 4.5 16 4.5zm1 5.5v5h5v2h-5v5h-2v-5h-5v-2h5v-5h2z"})},e))};H.displayName="IconPlusCircle";var I,M,W=H,D=a(15),G=function(e,t){var a=0;return e&&e.forEach((function(e){a+=$(t)*e.selected,a+=e.extraCharge?$(e.extraCharge)*e.selected:0})),a},N=function(e){var t=[];return t=Object(o.a)(e),Object.values(t.reduce((function(e,t){return Object.assign(e,Object(D.a)({},t.id,t))}),{}))},J=function(e){return"".concat("$").concat($(e))},$=function(e){return Number(e,10)/100},Z=function(e){var t=e.price,a=e.recipeId,n=e.minRecipesSelected,i=e.maxRecipesSelected,r=e.handleAddRecipe;return l.a.createElement(w,{p:"xs"},l.a.createElement(y,{flex:"50%",alignSelf:"center"},t?l.a.createElement(R,{color:"primary_600"},"+",J(t)):null),l.a.createElement(y,{flex:"50%"},l.a.createElement(z,{onClick:function(){return r(a)},variant:"secondary",width:"100%",p:"0",disabled:i},n?"Add extra meal":"Add")))},K=function(e){var t=e.recipeId,a=e.selected,n=e.selectionLimit,i=e.yields,r=e.maxRecipesSelected,o=e.handleAddRecipe,c=e.handleRemoveRecipe;return l.a.createElement(w,{backgroundColor:"primary_600",justifyContent:"space-between",alignItems:"center"},l.a.createElement(Q,{onClick:function(){return c(t)},title:"Decrease quantity"},l.a.createElement(q,null)),l.a.createElement(y,{color:"white"},l.a.createElement(R,{textAlign:"center",fontWeight:"bold",fontFamily:"secondary",fontSize:"md"},a," in your box"),l.a.createElement(R,{textAlign:"center",fontFamily:"secondary",fontSize:"sm"},"(",a*i," servings)")),l.a.createElement(Q,{onClick:function(){return o(t)},title:"Increase quantity",disabled:null!==n||r},l.a.createElement(W,null)))},Q=f.default.button(I||(I=Object(p.a)(["\n  ","\n  &:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n"])),Object(v.a)({outline:"none",color:"white",padding:"sm",cursor:"pointer",backgroundColor:"primary_600",border:"none",":hover:enabled":{backgroundColor:"primary_700"},":active:enabled":{backgroundColor:"primary_800"}})),V=function(e){var t=e.extraCharge,a=e.handleAddRecipe,n=e.handleRemoveRecipe,i=e.headline,r=e.id,o=e.image,c=e.maxRecipesSelected,s=e.minRecipesSelected,d=e.name,m=e.selected,h=e.selectionLimit,u=e.yields;return l.a.createElement(y,{borderWidth:m?"md":null,borderStyle:m?"solid":null,borderColor:m?"primary_600":null,m:m?"-2px":null,borderRadius:"md",boxShadow:"lg"},l.a.createElement(y,{borderRadius:"2px 2px 0px 0px",paddingBottom:"56.25%",overflow:"hidden",height:"0"},l.a.createElement("img",{src:o,alt:d,width:"100%"})),l.a.createElement(y,{p:"xs",height:"120px"},l.a.createElement(R,{fontWeight:"bold",fontFamily:"primary",fontSize:"md"},d),l.a.createElement(R,{fontWeight:"regular",fontFamily:"secondary",fontSize:"sm"},i)),m?l.a.createElement(K,{recipeId:r,yields:u,selected:m,selectionLimit:h,maxRecipesSelected:c,handleAddRecipe:a,handleRemoveRecipe:n}):l.a.createElement(Z,{recipeId:r,price:t&&t,selected:m,minRecipesSelected:s,maxRecipesSelected:c,handleAddRecipe:a,handleRemoveRecipe:n}))},X=f.default.button(M||(M=Object(p.a)(["\n  cursor: pointer;\n  padding: 0;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  display: block;\n  &:hover {\n    background-color: transparent;\n    color: inherit;\n  }\n  & > svg {\n    display: flex;\n  }\n"]))),Y=function(e){return l.a.createElement(T,Object.assign({viewBox:"0 0 24 24",content:l.a.createElement("path",{d:"M12 3.5A8.5 8.5 0 1 1 3.5 12 8.51 8.51 0 0 1 12 3.5M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.75 15v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM12 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"})},e))};Y.displayName="IconInfoCircle";var U,ee,te=Y,ae=a(7),ne=a.n(ae),le=Object(f.default)(y)(U||(U=Object(p.a)(["\n  ","\n"])),Object(v.a)(Object(C.a)(Object(C.a)(Object(C.a)({marginTop:"xs",display:"inline",position:"absolute",boxShadow:"lg",backgroundColor:"white"},{top:"100%"}),{right:0}),{},{"::after":Object(C.a)({content:"''",position:"absolute",width:0,height:0,borderWidth:"4px",borderStyle:"solid",borderColor:"transparent transparent white white"},{"box-shadow":"-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)",right:"4px","margin-right":"-8px","transform-origin":"0 0",transform:"rotate(-225deg)",top:"0"})})));le.propTypes={children:ne.a.any.isRequired};var ie,re,oe,ce,se,de=f.default.div(ee||(ee=Object(p.a)(["\n  position: relative;\n  z-index: 100;\n"]))),me=le,he=f.default.span(ie||(ie=Object(p.a)(["\n  ","\n"])),Object(v.a)({float:"right"})),ue=f.default.hr(re||(re=Object(p.a)(["\n  ","\n"])),Object(v.a)({borderTopColor:"#E4E4E4",borderTopWidth:"1px",borderTopStyle:"solid"})),pe=f.default.p(oe||(oe=Object(p.a)(["\n  ","\n"])),Object(v.a)({fontSize:"16px",lineHeight:"27px",fontWeight:600})),fe=f.default.li(ce||(ce=Object(p.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  padding-bottom: ",";\n"])),(function(e){return e.fontSize}),(function(e){return e.lineHeight}),(function(e){return e.fontWeight}),(function(e){return e.paddingBottom}));fe.propTypes={fontSize:ne.a.string,lineHeight:ne.a.string,fontWeight:ne.a.number,paddingBottom:ne.a.string},fe.defaultProps={fontSize:"16px",lineHeight:"27px",fontWeight:400,paddingBottom:"8px"},fe.displayName="ListItem";var ge=f.default.ul(se||(se=Object(p.a)(["\n  list-style-type: ",";\n  ","\n  ","\n"])),(function(e){return e.listStyleType}),g.k,g.h);ge.propTypes=Object(C.a)(Object(C.a)(Object(C.a)({},j.a.layout),j.a.space),{},{listStyleType:ne.a.string}),ge.defaultProps={listStyleType:"none",margin:0,padding:0,width:"100%"},ge.displayName="List";var be,_e,ye=ge,xe=function(e){var t=e.summary,a=e.totalPrice,n=e.baseRecipePrice,i=e.shippingPrice;return l.a.createElement(l.a.Fragment,null,t&&t.length?l.a.createElement(y,{width:["290px","450px"],margin:"16px"},l.a.createElement(ye,null,t.map((function(e){return l.a.createElement(fe,{key:e.id},e.name," ",e.selected>1?" X  ".concat(e.selected):null,e.extraCharge?l.a.createElement(he,null,function(e,t,a){var n=$(e)*t+$(a)*t;return"$".concat(n.toFixed(2))}(n,e.selected,e.extraCharge)):l.a.createElement(he,null,function(e,t){var a=$(e)*t;return"$".concat(a.toFixed(2))}(n,e.selected)))})),l.a.createElement(fe,null,"Shipping ",l.a.createElement(he,null," ",J(i)," "))),l.a.createElement(ue,null),l.a.createElement(pe,null,"Total ",l.a.createElement(he,null," ",a," "))):l.a.createElement(y,{width:["200px","450px"],textAlign:"center"},l.a.createElement("p",null," OHH!! It's Empty , Please Add Recipes")))},Ee=function(e,t){l.a.useEffect((function(){var a=function(a){if(e.current&&!e.current.contains(a.target))return t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])},we=function(e){var t=e.summary,a=e.totalPrice,n=e.baseRecipePrice,i=e.shippingPrice,r=l.a.useRef(),s=l.a.useState(!1),d=Object(c.a)(s,2),m=d[0],h=d[1];return Ee(r,(function(){return h(!1)})),l.a.createElement(de,{ref:r},l.a.createElement(X,{onClick:function(){return h(!m)}},l.a.createElement(te,{size:"20"})),m?l.a.createElement(me,null,l.a.createElement(xe,{summary:Object(o.a)(t),totalPrice:a,baseRecipePrice:n,shippingPrice:i})):null)},ve={id:"5f4e821d531e677602591a9b",productName:"Classic Box",headline:"WEEK OF OCTOBER 12TH",min:3,max:8,baseRecipePrice:1798,shippingPrice:1298,recipes:[{id:"5f4d4a7e62fb0224951e7ec4",name:"Chicken Sausage & Spinach Ravioli",slug:"chicken-sausage-spinach-ravioli",headline:"with Tomato & Lemon",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d4a7e62fb0224951e7ec4-2fe03fc2.jpg",selected:1,selectionLimit:1,extraCharge:0,yields:2},{id:"5f4d4aa9f4508b34e9680613",name:"Gouda Vibes Burgers",slug:"gouda-vibes-burgers",headline:"with Tomato Onion Jam & Potato Wedges",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/gouda-vibes-burgers-e3f56d7e.jpg",selected:1,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d4acdab96be0cd6073022",name:"Figgy Balsamic Pork",slug:"figgy-balsamic-pork",headline:"with Roasted Carrots & Thyme Potatoes",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d4acdab96be0cd6073022-8b47d1f3.jpg",selected:1,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d4e62e85668628873add2",name:"Sweet Soy Glazed Steak Tacos",slug:"sweet-soy-glazed-steak-tacos",headline:"with Spicy Slaw, Marinated Cucumber & Peanuts",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/sweet-soy-glazed-steak-tacos-c5c4cb4f.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4e82c04094d36cbf05dd61",name:"Pork Sausage & Roasted Pepper Pasta",slug:"pork-sausage-roasted-pepper-pasta",headline:"with Creamy Parmesan Garlic Tomato Sauce",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4e82c04094d36cbf05dd61-9cb62953.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d4e9b013bb224b742e2b1",name:"Pork Flautas Supreme",slug:"pork-flautas-supreme",headline:"with Pico de Gallo & Lime Crema",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/pork-flautas-supreme-1c661fd0.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d4ed9f57387323014001f",name:"Jumpin\u2019 Jack Chicken Bowls",slug:"jumpin-jack-chicken-bowls",headline:"with Rice, Sour Cream & Lime",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/jumpin-jack-chicken-bowls-86b15fc9.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5ce6a55a305b1724c789",name:"Bruschetta Zucchini Boats",slug:"bruschetta-zucchini-boats",headline:"with Couscous & Melty Italian Cheeses",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/bruschetta-zucchini-boats-d3936f59.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5d1028b37d30f71cd7ba",name:"Black Bean & Poblano Quesadillas",slug:"black-bean-quesadillas",headline:"with Salsa Fresca & Lime Sour Cream",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/black-bean-quesadillas-a73d7c22.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5dc7d15bd31fc9024dac",name:"Lemon Tortelloni Palermo",slug:"lemon-tortelloni-palermo",headline:"with Roasted Bell Pepper & Parmesan",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d5dc7d15bd31fc9024dac-c9a78bae.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5deaeb5aaa261c76c56c",name:"Duck a l\u2019Orange",slug:"duck-a-l-orange",headline:"with Duck Fat Mashed Potatoes & Arugula Almond Salad",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d5deaeb5aaa261c76c56c-69964691.jpg",selected:0,selectionLimit:null,extraCharge:1198,yields:2},{id:"5f4d5f4ee85668628873add8",name:"Steak & Shrimp in a Creamy Thyme Sauce",slug:"steak-shrimp-in-a-creamy-thyme-sauce",headline:"with Zesty Roasted Green Beans & Crispy-Onion-Topped Mashed Potatoes",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/steak-shrimp-in-a-creamy-thyme-sauce-12478c6a.jpg",selected:0,selectionLimit:null,extraCharge:1198,yields:2},{id:"5f4d5f6ad15bd31fc9024dae",name:"Chicken Katsu",slug:"chicken-katsu",headline:"with Roasted Green Beans & Ginger Rice",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d5f6ad15bd31fc9024dae-610fbe40.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d5fb78cbc28156118f6e8",name:"Tempura Chicken Fingers & Dipping Sauce",slug:"tempura-chicken-fingers-dipping-sauce",headline:"with Zesty Rice & Green Beans",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/tempura-chicken-fingers-dipping-sauce-1f35f352.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d61293f18a973ea30ee91",name:"Brown Sugar Bourbon Pork Chops",slug:"brown-sugar-bourbon-pork-chops",headline:"with Apple Pan Sauce, Scallion Mashed Potatoes & Roasted Green Beans",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d61293f18a973ea30ee91-17d4992a.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d6197a096ba0ab134cc47",name:"Bruschetta Chicken",slug:"bruschetta-chicken",headline:"with a Crispy Mozzarella Crust, Bacon Mashed Potatoes & Broccoli",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/bruschetta-chicken-98099a09.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4eb0f632b8724352209946",name:"Seared Steak with Demi Reduction",slug:"seared-steak-with-demi-reduction",headline:"plus Garlic Mashed Potatoes & Honey-Roasted Carrots",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/seared-steak-with-demi-reduction-3f9990e2.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d638aeb5aaa261c76c56e",name:"Cheesy Chicken & Spiced Black Beans",slug:"cheesy-chicken-spiced-black-beans",headline:"with Cilantro, Smoky Red Pepper Crema & Garlic Bread",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/cheesy-chicken-spiced-black-beans-1cc5edd1.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d63e0cc3d6e27fc3d2c72",name:"Szechuan Noodles with Mushrooms & Carrot",slug:"szechuan-noodles-with-mushrooms-carrot",headline:"topped with a Fried Egg",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/szechuan-noodles-with-mushrooms-carrots-f1657079.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d6559e85668628873ade6",name:"Mushroom & Herb Shepherd\u2019s Pie",slug:"mushroom-herb-shepherd-s-pie",headline:"topped with White Cheddar Mashed Potatoes",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/mushroom-herb-shepherd-s-pie-30cc90d0.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2},{id:"5f4d673303e7dd4bc704d356",name:"Squash & Caramelized Onion Flatbreads",slug:"squash-caramelized-onion-flatbreads",headline:"with Thyme Ricotta & a Balsamic Drizzle",image:"https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/squash-caramelized-onion-flatbreads-d0140e2f.jpg",selected:0,selectionLimit:null,extraCharge:0,yields:2}]},Ce=function(){var e=Object(n.useState)({}),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!0),r=Object(c.a)(i,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){l(ve),s(!1)}),1e3);return function(){return clearTimeout(e)}}),[a]),{data:a,loading:o}},je=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Ce(),s=r.data,d=r.loading,u=Object(n.useState)([]),p=Object(c.a)(u,2),f=p[0],g=p[1],b=function(e){var t=a.find((function(t){return t.id===e}));t.id===e&&(t.selected+=1),g([].concat(Object(o.a)(f),[t]))},_=function(e){var t=a.find((function(t){return t.id===e}));t.id===e&&(t.selected-=1);var n=f.findIndex((function(t){return t.id===e}));g(f.filter((function(e,t){return t!==n})))},x=f&&!!f.length&&function(e,t,a){var n=[];a&&a.length&&(n=N(a));var l=G(n,e)+$(t);return"".concat("$").concat(l.toFixed(2))}(s.baseRecipePrice,s.shippingPrice,f);return l.a.useEffect((function(){var e=s.recipes;e&&(i(e),function(e){g(e.filter((function(e){return e.selected>0})))}(e))}),[i,s]),d?null:l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null,l.a.createElement(h,{sm:6},l.a.createElement("h3",null,s.headline)),l.a.createElement(h,{sm:6},l.a.createElement(w,{alignItems:"center",justifyContent:"flex-end"},l.a.createElement(y,{textAlign:"right",mr:"xs"},l.a.createElement("h3",null,x)),l.a.createElement(we,{summary:N(f),totalPrice:x,baseRecipePrice:s.baseRecipePrice,shippingPrice:s.shippingPrice})))),l.a.createElement(m,null,a.map((function(e){return l.a.createElement(h,{sm:12,md:6,xl:4,key:e.id},l.a.createElement(y,{mb:"md"},l.a.createElement(V,Object.assign({},e,{handleAddRecipe:b,handleRemoveRecipe:_,minRecipesSelected:f.length>=s.min,maxRecipesSelected:f.length>=s.max}))))}))))},Se=function(){return l.a.createElement(d,null,l.a.createElement(y,{textAlign:"center"},l.a.createElement("h1",null,"Select Your Recipes"),l.a.createElement("p",null,"Choose from an ever-changing mix of meat, fish, Beyond Meat\u2122 and health-conscious offerings.")),l.a.createElement(je,null))},ke=Object(f.createGlobalStyle)(be||(be=Object(p.a)(["\n  body {\n    ","\n  }\n\n  p {\n    ","\n  }\n\n  a {\n    ","\n  }\n\n  a:hover{\n    text-decoration: none;\n  }\n\n  h1, h2, h3, h4, p, a {\n    ","\n  }\n\n  h1 {\n    ","\n  }\n\n  h2 {\n    ","\n  }\n\n  h3 {\n    ","\n  }\n\n  h4 {\n    ","\n  }\n\n  ","\n"])),Object(v.a)({margin:0,fontFamily:"secondary",fontSize:"sm",lineHeight:"sm",backgroundColor:"neutral_100",color:"text"}),Object(v.a)({fontSize:"md",lineHeight:"md"}),Object(v.a)({color:"primary_700"}),Object(v.a)({fontFamily:"primary",fontWeight:"regular",letterSpacing:"-0.3px",color:"text"}),Object(v.a)({fontSize:"xl",lineHeight:"xl"}),Object(v.a)({fontSize:"lg",lineHeight:"lg"}),Object(v.a)({fontSize:"md",lineHeight:"md"}),Object(v.a)({fontSize:"md",lineHeight:"md"}),s.media.md(_e||(_e=Object(p.a)(["\n    body {\n      ","\n    }\n\n    h1 {\n      ","\n    }\n\n    h2 {\n      ","\n    }\n\n    h3 {\n      ","\n    }\n\n    h4 {\n      ","\n    }\n  "])),Object(v.a)({fontSize:"md",lineHeight:"md"}),Object(v.a)({fontSize:"xxl",lineHeight:"xxl"}),Object(v.a)({fontSize:"xl",lineHeight:"xl"}),Object(v.a)({fontSize:"lg",lineHeight:"lg"}),Object(v.a)({fontSize:"md",lineHeight:"md"}))),Oe={primary_100:"#F6FD39",primary_200:"#E4FABF",primary_300:"#D2F895",primary_400:"#ABED0D",primary_500:"#00A846",primary_600:"#067A46",primary_700:"#056835",primary_800:"#035624",info_100:"#E9FAFF",info_800:"#00178C",negative_100:"#FFEAE9",negative_200:"#FFCCCA",negative_500:"#DB1D1D",negative_600:"#B30000",negative_700:"#970000",negative_800:"#7C0000",warning_100:"#FFECD3",warning_500:"#EF670A",warning_600:"#CE4500",warning_700:"#A43700",reward_200:"#FFFAB2",reward_400:"#FFE900",reward_500:"#E2C700",neutral_100:"#FFFFFF",neutral_200:"#F8F8F8",neutral_300:"#EEEEEE",neutral_400:"#E4E4E4",neutral_500:"#BBBBBB",neutral_700:"#676767",neutral_800:"#343434"},Re={xl:"1200px",lg:"1024px",md:"768px",sm:"0px"},ze={xl:parseInt(Re.xl,10),lg:parseInt(Re.lg,10),md:parseInt(Re.md,10),sm:parseInt(Re.sm,10)},Fe=[Re.md,Re.lg,Re.xl],Pe={sm:"@media screen and (min-width: ".concat(Re[0],")"),md:"@media screen and (min-width: ".concat(Re[1],")"),lg:"@media screen and (min-width: ".concat(Re[2],")"),xl:"@media screen and (min-width: ".concat(Re[3],")")},Be=["Montserrat, Verdana, Geneva, sans-serif","'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif"];Be.primary=Be[0],Be.secondary=Be[1];var Le=[14,16,20,24,32];Le.sm=Le[0],Le.md=Le[1],Le.lg=Le[2],Le.xl=Le[3],Le.xxl=Le[4];var Te=["24px","27px","34px","41px","54px"];Te.sm=Te[0],Te.md=Te[1],Te.lg=Te[2],Te.xl=Te[3],Te.xxl=Te[4];var Ae=[400,600];Ae.regular=Ae[0],Ae.bold=Ae[1];var qe=[0,4,8,16,24,32,40,56];qe.xxs=qe[1],qe.xs=qe[2],qe.sm=qe[3],qe.md=qe[4],qe.lg=qe[5],qe.xl=qe[6],qe.xxl=qe[7];var He=[2,4,8];He.sm=He[0],He.md=He[1],He.lg=He[2];var Ie=["0 1px 3px 0 rgba(0, 0, 0, 0.1)","0 2px 4px 0 rgba(0, 0, 0, 0.15)","0 3px 8px 0 rgba(0, 0, 0, 0.15)","0 6px 12px 0 rgba(0, 0, 0, 0.10)"];Ie.sm=Ie[0],Ie.md=Ie[1],Ie.lg=Ie[2],Ie.xl=Ie[3];var Me=["1px","2px"];Me.sm=Me[0],Me.md=Me[1];var We,De={borderWidths:Me,colors:Object(C.a)(Object(C.a)({},Oe),{},{border:Oe.neutral_400,background:Oe.neutral_200,text:Oe.neutral_800,black:Oe.neutral_800,white:Oe.neutral_100}),fonts:Be,fontSizes:Le,fontWeights:Ae,lineHeights:Te,shadows:Ie,space:qe,radii:He,mediaQueries:Pe,breakpoints:Fe,grid:{breakpoints:ze,container:{padding:{xl:32,lg:32,md:16,sm:16},maxWidth:{xl:1144,lg:960,md:"100%",sm:"100%"}}}},Ge=function(e){var t=e.children;return l.a.createElement(f.ThemeProvider,{theme:De},l.a.createElement(s.GridThemeProvider,{gridTheme:De.grid},l.a.createElement(s.BaseCSS,null),l.a.createElement(ke,null),t))},Ne=function(){return l.a.createElement(w,{boxShadow:"md",backgroundColor:"white",justifyContent:"center",alignItems:"center",padding:"sm"},l.a.createElement("a",{href:"/",title:"Home"},l.a.createElement("img",{height:"30px",src:"/hello-fresh/HelloFreshLogo.png",alt:"HelloFresh Logo"})))},Je=f.default.main(We||(We=Object(p.a)(["\n  min-height: 100vh;\n"]))),$e=function(){return l.a.createElement(w,{borderTopWidth:"sm",borderTopColor:"border",borderTopStyle:"solid",backgroundColor:"white",justifyContent:"center",alignItems:"center",padding:"sm"},l.a.createElement(R,{fontSize:"sm"},"\xa9 HelloFresh 2020"))},Ze=function(){return l.a.createElement(Ge,null,l.a.createElement(Ne,null),l.a.createElement(Je,null,l.a.createElement(Se,null)),l.a.createElement($e,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ze,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8b76400b.chunk.js.map