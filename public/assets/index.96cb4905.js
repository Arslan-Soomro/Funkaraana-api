var _=Object.defineProperty,G=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var F=(t,l,s)=>l in t?_(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,m=(t,l)=>{for(var s in l||(l={}))J.call(l,s)&&F(t,s,l[s]);if(T)for(var s of T(l))V.call(l,s)&&F(t,s,l[s]);return t},p=(t,l)=>G(t,Y(l));import{r as o,j as r,F as y,a as e,L as f,S as K,P as H,E as Q,C as W,b as X,A as Z,M as k,c as ee,d as te,u as re,e as C,V as le,T as se,f as ae,g as ne,h as ce,i as oe,R as ie,k as b,l as de,m as ue,B as me}from"./vendor.0a471950.js";const pe=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}};pe();const fe="save-cart",xe="refresh-cart",P="add-to-cart",O="remove-from-cart",h="push-notification",D="remove-notification",E="toggle-notification-added",M="check-local-token",N="remove-local-token",q={cartItems:[],notifications:[],notificationAdded:!1,token:null,isLoggedIn:!1,userInfo:null},x=o.exports.createContext([q,()=>{}]),he=t=>{t({type:h,payload:"User Logged out Succesfully"}),t({type:N})},w=({children:t})=>{const[l,s]=o.exports.useState(!1),[n,a]=o.exports.useContext(x);return r(y,{children:[e("nav",{className:"bg-white border-b border-nclr-150 fixed w-full h-16 z-40 max-h-[80px]",children:e("div",{className:"container px-6 py-4 mx-auto",children:r("div",{className:"md:flex md:items-center md:justify-between",children:[r("div",{className:"flex items-center justify-between",children:[e("div",{className:"text-xl font-semibold text-gray-700",children:e(f,{className:"text-xl xs:text-2xl font-black text-brclr-600 transition-colors duration-200 transform lg:text-2xl hover:text-brclr-700",to:"/",children:"Funkaraana"})}),e("div",{className:"flex md:hidden",children:e("button",{type:"button",className:"text-brclr-600 hover:text-brclr-700 focus:outline-none active:text-brclr-800 ","aria-label":"toggle menu",onClick:()=>s(!l),children:e("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:e("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),r("div",{className:`md:flex md:items-center md:justify-between ${l?"block":"hidden"}`,children:[e("div",{className:"flex flex-col -mx-4 md:flex-row md:items-center md:mx-1",children:n.isLoggedIn?r(y,{children:[e(f,{to:"/seller/addproduct",className:"px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0  hover:bg-nclr-100 active:bg-nclr-200",children:"Dashboard"}),e("button",{onClick:()=>he(a),className:"px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0  hover:bg-nclr-100 active:bg-nclr-200",children:"Logout"})]}):r(y,{children:[e(f,{to:"/login",className:"px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0  hover:bg-nclr-100 active:bg-nclr-200",children:"Login"}),e(f,{to:"/signup",className:"px-2 py-1 mx-2 mt-2 text-sm text-nclr-600 transition-colors duration-200 transform rounded-md md:mt-0  hover:bg-nclr-100 active:bg-nclr-200",children:"Signup"})]})}),e("div",{className:"flex items-center mt-4 md:mt-0",children:e(f,{to:"/cart",className:"hidden mx-2 text-nclr-500 transition-colors duration-200 transform md:block hover:text-nclr-600 active:text-nclr-700 focus:outline-none","aria-label":"show notifications",children:e(K,{className:"h-6 w-6"})})})]})]})})}),e("div",{className:"pt-[64px] w-full h-full",children:t})]})},R=({children:t})=>r("section",{className:"w-full h-full flex flex-row bg-nclr-50",children:[e("div",{className:"h-full max-w-[280px] w-1/4 p-4",children:r("div",{className:"h-full w-full shadow-lg shadow-brclr-200 bg-brclr-700 rounded px-3 xs:px-6 py-8 text-white text-sm lg:text-base flex flex-col gap-6 sm:gap-4",children:[r(f,{to:"/seller/addproduct",className:"flex flex-col lg:flex-row gap-2 p-2 text-center items-center hover:bg-brclr-600 active:bg-brclr-500  rounded-lg cursor-pointer",children:[e(H,{className:"h-6 w-6"}),e("p",{className:"hidden sm:block",children:"Add Product"})]}),r(f,{to:"/seller/viewproduct",className:"flex flex-col lg:flex-row gap-2 cursor-pointer text-center items-center hover:bg-brclr-600 active:bg-brclr-500 p-2 rounded-lg",children:[e(Q,{className:"h-6 w-6"}),e("p",{className:"hidden sm:block",children:"View Products"})]}),r(f,{to:"/seller/statistics",className:"flex flex-col lg:flex-row gap-2 cursor-pointer text-center items-center hover:bg-brclr-600 active:bg-brclr-500 p-2 rounded-lg",children:[e(W,{className:"h-6 w-6"}),e("p",{className:"hidden sm:block",children:"Statistics"})]}),r(f,{to:"/",className:"flex flex-col lg:flex-row gap-2 cursor-pointer text-center items-center hover:bg-brclr-600 active:bg-brclr-500 p-2 rounded-lg",children:[e(X,{className:"h-6 w-6"}),e("p",{className:"hidden sm:block",children:"Settings"})]}),r(f,{to:"/",className:"flex flex-col lg:flex-row gap-2 cursor-pointer text-center items-center hover:bg-brclr-600 active:bg-brclr-500 p-2 rounded-lg",children:[e(Z,{className:"h-6 w-6"}),e("p",{className:"hidden sm:block",children:"Go Back"})]})]})}),e("section",{className:"h-full w-full flex flex-col",children:t})]}),g="http://localhost:5000",z=({id:t,name:l,seller:s,price:n,image:a,description:c,halfCard:d,buttonOff:i})=>{const[u,v]=o.exports.useContext(x);return r("div",{className:"cursor-pointer w-fit py-2 px-4 max-w-[220px]",children:[r("div",{className:"relative w-[200px] h-[150px] min-w-[200px] min-h-[200px] max-h-[200px] rounded-lg shadow-lg transition-all delay-100 hover:shadow-xl hover:scale-105",children:[i?null:e("div",{onClick:()=>{v({type:P,payload:{id:t,name:l,seller:s,price:n,image:a,description:c}}),v({type:h,payload:"Product Added To Cart"})},className:"absolute right-2 -bottom-2 p-1 rounded-lg bg-sbrclr-600 text-white hover:bg-sbrclr-700 active:bg-sbrclr-800",children:e(H,{className:"h-6 w-6"})}),e(f,{to:"/prod/"+t,children:e("img",{src:g+"/"+a,className:"w-full h-full object-cover rounded-lg"})})]}),d?null:r("div",{className:"py-2 px-1",children:[e("p",{className:"text-black truncate",children:l}),r("p",{className:"text-nclr-500 truncate",children:["by ",s]}),r("p",{className:"font-bold text-sbrclr-600",children:["Rs. ",n]})]})]})},B=({products:t,buttonsOff:l})=>e("div",{className:"res-grid w-full p-2 overflow-y-auto",children:t?t.map((s,n)=>e(z,{id:s.id,name:s.name,price:s.price,seller:s.seller,image:s.image,description:s.description,buttonOff:l},n)):e("div",{className:"spinner"})}),be=()=>{const[t,l]=o.exports.useState(null),[s,n]=o.exports.useContext(x);return o.exports.useEffect(()=>{(async()=>{var i;const a=`${g}/product/user/${(i=s.userInfo)==null?void 0:i.id}`,d=await(await fetch(a)).json();l(d.data)})()},[]),r("section",{className:"p-4 h-full flex flex-col",children:[e("div",{className:" text-brclr-600 text-xl font-bold bg-white p-3 rounded-lg shadow-md shadow-neutral-100",children:"Your Proudcts"}),e(B,{products:t,buttonsOff:!0})]})},ge=()=>{const[t,l]=o.exports.useState(null);return o.exports.useEffect(()=>{(async()=>{const n=await(await fetch(`${g}/product/all`)).json(),a=Math.floor(Math.random()*n.data.length);l(n.data[a])})()},[]),r("section",{className:"w-full h-full flex justify-evenly relative items-center flex-col text-pr text-center py-5 px-5",children:[r("div",{className:"z-10",children:[r("div",{children:[e("p",{className:"text-sbrclr-600 text-xs xs:text-base",children:"Funkaraana"}),r("h1",{className:"font-black text-xl xs:text-4xl",children:["A"," ",e("span",{className:"text-sbrclr-600",children:"Market"})," ","for Quality Art"]})]}),e("p",{className:"max-w-[400px] mt-4 my-0 mx-auto text-xs xs:text-base",children:"Buy and sell Art, we put extra effort to make sure only authetic pieces of art reach you and an artist doesn't have to worry about the technicalities of selling his/her art"})]}),r("div",{className:"relative w-full flex justify-center items-center flex-col mt-10",children:[e("p",{className:"font-black text-2xl xs:mt-0 xs:text-5xl text-center -top-10  tracking-widest text-nclr-200 z-0",children:"Art Of Day"}),e(z,{id:t?t.id:0,name:t?t.name:"",seller:t?t.seller:"",image:t?t.image:"",description:t?t.description:"",price:t?t.price:0,halfCard:!0})]})]})},$=({title:t,options:l})=>r(k,{children:[r(k.Button,{className:"flex items-center space-x-4 text-nclr-600 hover:text-nclr-700 active:text-nclr-800",children:[t," ",e(ee,{className:"ml-2 h-4 w-4"})]}),e("div",{className:"relative w-fit",children:e(k.Items,{className:"border shadow-xl min-w-[150px] flex flex-col z-30 rounded bg-white absolute right-0 top-5 w-fit",children:l.map((s,n)=>e(k.Item,{as:"button",className:"p-3 text-left text-sm hover:bg-nclr-100",children:s.name},n))})})]}),ve=({label:t})=>r("label",{className:"flex items-center space-x-2",children:[e("input",{type:"checkbox",className:"appearance-none checked:checkmark-icon h-4 w-4 border rounded checked:bg-brclr-600 checked:border-transparent"}),e("span",{className:"text-nclr-700",children:t})]}),ye=({checks:t})=>e("div",{className:"text-sm space-y-2",children:t.map((l,s)=>e(ve,{label:l.name},s))}),Ne=({children:t,title:l,categories:s,filters:n,menu:a})=>{const[c,d]=o.exports.useState(!0);return r("section",{className:"w-full h-full py-2 flex flex-col",children:[r("div",{className:"flex flex-row justify-between px-6 py-2 border-b",children:[e("p",{className:"text-sm xs:text-lg sm:text-2xl font-bold text-brclr-600",children:l}),r("div",{className:"flex gap-2 text-nclr-600 text-xs xs:text-sm",children:[e($,{title:a.title,options:a.options}),e("button",{className:"block md:hidden",onClick:()=>d(!c),children:e(te,{className:"h-5 w-5 text-nclr-600 hover:text-nclr-700 active:text-nclr-800"})})]})]}),r("section",{className:"flex h-full relative",children:[r("div",{className:` h-full w-[220px] max-w-[220px] absolute xs:relative transition-all ${c?"left-0":"-left-[220px]"} bg-white z-20`,children:[e("div",{className:"text-nclr-700 px-8 py-6 space-y-2 text-sm flex flex-col items-start justify-start border-b",children:s.map((i,u)=>e("button",{children:i.name},u))}),e("div",{className:"text-nclr-700 px-8 py-6 space-y-4",children:n.map((i,u)=>r("div",{children:[e("p",{className:"mb-2",children:i.title}),e(ye,{checks:i.subFilters})]},u))})]}),e("div",{className:"w-full h-full",children:t})]})]})},we=[{name:"Paintings"},{name:"Statues"},{name:"Drawings"}],ke=[{name:"Red"},{name:"Green"},{name:"Blue"}],Ce=[{name:"Small"},{name:"Medium"},{name:"Large"}],Se=[{name:"Most Popular"},{name:"Best Rating"},{name:"Newest"},{name:"Price: Low to High"},{name:"Price: High to Low"}],S={title:"New Arrivals",categories:we,filters:[{title:"Color",subFilters:ke},{title:"Frame Size",subFilters:Ce}],menu:{title:"Sort",options:Se}},Ie=()=>{const[t,l]=o.exports.useState(null);return o.exports.useEffect(()=>{(async()=>{const s=`${g}/product/all`,a=await(await fetch(s)).json();l(a.data)})()},[]),e(Ne,{title:S.title,categories:S.categories,filters:S.filters,menu:S.menu,children:e(B,{products:t})})},Pe=()=>r(y,{children:[e(w,{children:e(ge,{})}),e("div",{className:"my-[80px]"}),e(Ie,{})]}),Re=({id:t,name:l,seller:s,price:n,image:a,description:c})=>{const[d,i]=o.exports.useContext(x),u=()=>{i({type:P,payload:{id:t,name:l,seller:s,price:n,image:a,description:c}}),i({type:h,payload:"Product Added To Cart"})};return r("section",{className:"w-full h-full lg:flex flex-row justify-center py-2 px-2",children:[e("div",{className:"w-full max-h-[500px] lg:w-2/5 rounded",children:e("img",{src:g+"/"+a,className:"object-contain rouded w-full max-h-[500px]"})}),r("div",{className:"flex-1 p-2 lg:text-left text-center",children:[r("div",{className:"mb-2",children:[e("h2",{className:"font-bold text-xl xs:text-2xl text-sbrclr-600",children:l}),r("p",{className:"text-sm text-brclr-600",children:["by ",s]})]}),e("div",{className:"pr-5 mb-5 text-sm xs:text-base text-nclr-800",children:e("p",{children:c})}),r("div",{className:"mb-5",children:[r("p",{className:"text-2xl font-bold text-brclr-600",children:["Rs. ",n,"k"]}),e("p",{className:"mb-1 text-sm text-nclr-500",children:"Expected Delivery Date: 2 working days"}),e("p",{className:"mb-1 font-bold text-lg text-sbrclr-600",children:"Reviews: 5.0"})]}),e("button",{onClick:u,className:"px-5 py-2 rounded-full bg-brclr-600 shadow-lg shadow-brclr-300 text-white font-bold transition-all hover:bg-brclr-700 active:bg-brclr-800",children:"Add to Cart"})]})]})},je=()=>{const{id:t}=re(),[l,s]=o.exports.useState(null);return o.exports.useEffect(()=>{t!=null&&(async()=>{const a=await(await fetch(`${g}/product/id/${t}`)).json();a.data&&(s(a.data),console.log(a.data))})()},[]),l!=null?e(Re,{id:l.id,name:l.name,seller:l.seller,price:l.price,description:l.description,image:l.image}):e("div",{className:"flex justify-center items-center text-center h-full w-full text-lg",children:"Sorry, We couldn't find the prouct you were looking for !"})},Le=({id:t,name:l,seller:s,price:n,image:a,qty:c})=>{const[d,i]=o.exports.useContext(x),u=()=>{i({type:O,payload:{id:t,name:l,seller:s,price:n,image:a,qty:c}})};return r("div",{className:"flex flex-col xs:flex-row justify-between py-4 border-b max-w-[1280px] md:w-4/5 my-0 mx-auto",children:[r("div",{className:"flex gap-2 flex-col items-center xs:items-start xs:flex-row",children:[e("img",{src:g+"/"+a,className:"w-[100px] h-[100px] object-cover rounded"}),r("div",{className:"flex flex-col justify-between items-center xs:items-start text-center xs:text-left",children:[r("div",{children:[e("p",{className:"truncate",children:l}),r("p",{className:"text-sm text-nclr-600 truncate",children:["by ",s]})]}),r("p",{className:"text-sbrclr-600 text-sm font-bold",children:["Qty ",c!=null?c:1]})]})]}),r("div",{className:"flex flex-col justify-between items-center",children:[r("p",{className:"text-sbrclr-600 text-right text-base xs:text-lg font-bold",children:["Rs. ",n]}),e("button",{className:"text-brclr-600 hover:text-brclr-700 active:text-brclr-800",onClick:u,children:"Remove"})]})]})},Ae=({prods:t,paymentClickHandler:l})=>{const[s,n]=o.exports.useState({subtotal:0,shipping:0,tax:0,total:0});return o.exports.useEffect(()=>{let a=0;t!=null&&t.forEach((i,u)=>{i.qty!=null?a+=i.price*i.qty:a+=i.price});const c=a>0?1e3:0,d=17*a/100;n({shipping:c,subtotal:a,tax:d,total:a+c+d})},[t]),t!=null&&t.length>0?r("section",{className:"w-full h-full py-2 px-2",children:[t.map((a,c)=>e(Le,{id:a.id,name:a.name,seller:a.seller,price:a.price,image:a.image,description:"",qty:a.qty},c)),r("div",{className:"my-5 w-full md:w-3/4 mx-auto text-sm xs:text-base",children:[r("div",{className:"space-y-4 w-full p-5 bg-nclr-50 rounded",children:[r("div",{className:"flex justify-between p-2 border-b text-nclr-600",children:[e("p",{children:"Subtotal"}),r("p",{className:"font-bold",children:["Rs. ",s.subtotal]})]}),r("div",{className:"flex justify-between p-2 border-b text-nclr-600",children:[e("p",{children:"Shipping"}),r("p",{className:"font-bold",children:["Rs. ",s.shipping]})]}),r("div",{className:"flex justify-between p-2 border-b text-nclr-600",children:[e("p",{children:"Tax"}),r("p",{className:"font-bold",children:["Rs. ",s.tax]})]}),r("div",{className:"flex justify-between p-2 border-b font-bold text-black",children:[e("p",{children:"Order Total"}),r("p",{children:["Rs. ",s.total]})]})]}),e("div",{className:"relative py-4 mt-2",children:e("button",{onClick:l,className:"p-2 absolute right-0 bg-brclr-600 rounded text-white",children:"Continue to Payment"})})]})]}):e("div",{className:"w-full h-full flex items-center justify-center py-10",children:e("p",{className:"text-center text-lg text-nclr-700",children:"The Cart is Empty"})})},Te=()=>{const[t,l]=o.exports.useContext(x),s=C(),n=()=>{t.isLoggedIn?(l({type:h,payload:"Order placed succesfully"}),localStorage.removeItem("cartItems"),s("/")):(l({type:h,payload:"You Must login before you checkout"}),s("/login"))};return e(Ae,{prods:JSON.parse(localStorage.getItem("cartItems")),paymentClickHandler:n})},Fe=()=>r("div",{className:"h-full w-full flex flex-col justify-center items-center text-center p-10 ",children:[e("h1",{className:"font-black text-4xl",children:"404"}),e("p",{className:"",children:"Not Found"})]}),j=({day:t,daydate:l,sales:s,orders:n,advcost:a,payout:c,gprofit:d,nprofit:i,bgclr:u})=>r("div",{className:"min-h-[230px] overflow-hidden rounded max-w-[200px] xs:max-w-[300px]",children:[r("div",{className:`p-4 text-white ${u||"bg-brclr-600"}`,children:[e("p",{children:t}),e("p",{children:l})]}),r("div",{className:"border border-nclr-200 grid grid-cols-2 justify-items-center items-center text-center text-xs xs:text-sm p-4 gap-4",children:[r("div",{className:"w-1/2 space-y-1",children:[e("p",{children:"Sales"}),r("p",{children:["Rs. ",s]})]}),r("div",{className:"w-1/2 space-y-1",children:[e("p",{children:"Orders"}),e("p",{children:n})]}),r("div",{className:"w-1/2 space-y-1",children:[e("p",{children:"Advertising Cost"}),r("p",{children:["Rs. ",a]})]}),r("div",{className:"w-1/2 space-y-1",children:[e("p",{children:"Estimated Payout"}),r("p",{children:["Rs. ",c]})]}),r("div",{className:"w-1/2 space-y-1",children:[e("p",{children:"Gross Profit"}),r("p",{children:["Rs. ",d]})]}),r("div",{className:"w-1/2 space-y-1",children:[e("p",{children:"Gross Profit"}),r("p",{children:["Rs. ",i]})]})]}),e("button",{className:`text-center w-full text-white p-3 ${u||"bg-brclr-600"}`,children:"More"})]}),He=()=>r("section",{className:"p-4 h-full flex flex-col bg-white",children:[r("div",{className:"flex space-x-6 items-center border-b border-nclr-200 py-2 px-2 ",children:[e("h3",{className:"text-2xl font-bold",children:"Dashboard"}),r("div",{className:"hidden md:flex space-x-4 text-nclr-600 text-sm items-center ",children:[r("button",{className:"flex space-x-1 items-center hover:bg-nclr-200 active:bg-nclr-300 focus:text-brclr-600 px-2 py-1 rounded",children:[e(le,{className:"h-5 w-5"}),e("p",{children:"Tiles"})]}),r("button",{className:"flex space-x-1 items-center  hover:bg-nclr-200 active:bg-nclr-300 focus:text-brclr-600 px-2 py-1 rounded",children:[e(se,{className:"h-5 w-5"}),e("p",{children:"Chart"})]}),r("button",{className:"flex space-x-1 items-center  hover:bg-nclr-200 active:bg-nclr-300 focus:text-brclr-600 px-2 py-1 rounded",children:[e(ae,{className:"h-5 w-5"}),e("p",{children:"P AND L"})]}),r("button",{className:"flex space-x-1 items-center  hover:bg-nclr-200 active:bg-nclr-300 focus:text-brclr-600 px-2 py-1 rounded",children:[e("p",{children:"Trends"}),e(ne,{className:"h-5 w-5"})]})]})]}),r("div",{className:"flex py-4 space-x-4",children:[e("input",{placeholder:"Search",className:"hidden md:block py-2 px-3 rounded bg-nclr-100"}),e($,{title:"All Marketplaces",options:[{name:"Pakistan"},{name:"India"},{name:"Germany"}]}),r("div",{className:"hidden md:flex items-center space-x-1 text-nclr-600 cursor-pointer hover:text-brclr-600 active:text-brclr-700 transition-all ",children:[e(ce,{className:"h-5 w-5"}),e("p",{children:"Filter"})]})]}),r("div",{className:"flex  items-center justify-center gap-2 overflow-y-auto flex-wrap",children:[e(j,{day:"Today",daydate:"25/01/2022",sales:2,orders:"0/0/0",advcost:100,payout:800,gprofit:200,nprofit:100}),e(j,{day:"Yesterday",daydate:"24/01/2022",sales:5,orders:"0/0/0",advcost:200,payout:5e3,gprofit:1e3,nprofit:500,bgclr:"bg-green-600"}),e(j,{day:"This Week",daydate:"18/01/2022",sales:10,orders:"0/0/0",advcost:500,payout:8e3,gprofit:2e3,nprofit:1e3,bgclr:"bg-yellow-600"})]})]}),Oe=({msg:t})=>e("div",{className:"w-fit px-4 text-white text-sm xs:text-base py-2 rounded-full bg-sbrclr-600 shadow-sm shadow-sbrclr-300",children:t}),De=({msgs:t})=>e("div",{className:"fixed z-50 w-full flex flex-col gap-4 justify-center items-center p-4",children:t!=null&&t.length>0?t.map((l,s)=>e(oe,{appear:!0,show:!0,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(Oe,{msg:l})},s)):null}),L=async(t,l,s=!1,n=!0,a)=>{try{s&&typeof l=="object"&&(l=p(m({},l),{token:localStorage.getItem("token")}));const c=await fetch(g+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(c.status&&c.status===401)throw a&&a({type:N}),new Error("Unauthorized Token, User related data has been erased.");const d=c.status,i=await c.json();return n&&(i.status=d),i}catch(c){console.log("Error@PostTo: "+c);return}},U=async t=>{const l=localStorage.getItem("token"),s=await L("/user/login",{token:l});s&&s.status>=200&&s.status<300&&s.data&&t({type:M,payload:{token:l,isLoggedIn:!0,userInfo:s.data}})},Ee=({signClickHandler:t})=>{const l=o.exports.useRef(null),s=o.exports.useRef(null),n=o.exports.useRef(null),a=o.exports.useRef(null);return r("div",{className:"bg-white flex min-h-full overflow-hidden",children:[e("div",{className:"\r flex flex-col\r justify-start\r flex-1\r px-4\r pt-2\r sm:px-6\r lg:flex-none lg:px-20\r xl:px-24\r ",children:r("div",{className:"w-full max-w-xl mx-auto lg:w-96 px-2",children:[r("div",{children:[e("a",{href:"/",className:"text-brclr-600",children:"Funkaraana"}),r("h2",{className:"mt-2 text-3xl font-bold text-nclr-600",children:[" ","Sign up."," "]})]}),e("div",{className:"mt-6",children:e("div",{className:"mt-0",children:r("form",{action:"#",method:"POST",className:"space-y-4",children:[r("div",{children:[r("label",{htmlFor:"name",className:"block text-sm text-nclr-600",children:[" ","Name"," "]}),e("div",{className:"mt-1",children:e("input",{id:"name",name:"name",type:"text",autoComplete:"name",required:!0,placeholder:"Your Name",ref:l,className:"\r block\r w-full\r px-5\r py-3\r text-sm\r placeholder-nclr-300\r transition\r duration-500\r ease-in-out\r transform\r border border-transparent\r rounded-lg\r text-nclr-600\r bg-nclr-50\r focus:outline-none\r focus:border-transparent\r focus:ring-2\r focus:ring-white\r focus:ring-offset-2\r focus:ring-offset-nclr-300\r "})})]}),r("div",{children:[r("label",{htmlFor:"username",className:"block text-sm text-nclr-600",children:[" ","Username"," "]}),e("div",{className:"mt-1",children:e("input",{id:"username",name:"username",type:"text",autoComplete:"username",required:!0,placeholder:"Your Username",ref:s,className:"\r block\r w-full\r px-5\r py-3\r text-sm\r placeholder-nclr-300\r transition\r duration-500\r ease-in-out\r transform\r border border-transparent\r rounded-lg\r text-nclr-600\r bg-nclr-50\r focus:outline-none\r focus:border-transparent\r focus:ring-2\r focus:ring-white\r focus:ring-offset-2\r focus:ring-offset-nclr-300\r "})})]}),r("div",{children:[r("label",{htmlFor:"email",className:"block text-sm font-medium text-nclr-600",children:[" ","Email address"," "]}),e("div",{className:"mt-1",children:e("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Your Email",ref:a,className:"\r block\r w-full\r px-5\r py-3\r text-sm\r placeholder-nclr-300\r transition\r duration-500\r ease-in-out\r transform\r border border-transparent\r rounded-lg\r text-nclr-600\r bg-nclr-50\r focus:outline-none\r focus:border-transparent\r focus:ring-2\r focus:ring-white\r focus:ring-offset-2\r focus:ring-offset-nclr-300\r "})})]}),r("div",{className:"space-y-1",children:[r("label",{htmlFor:"password",className:"block text-sm font-medium text-nclr-600",children:[" ","Password"," "]}),e("div",{className:"mt-1",children:e("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,placeholder:"Your Password",ref:n,className:"\r block\r w-full\r px-5\r py-3\r text-sm\r placeholder-nclr-300\r transition\r duration-500\r ease-in-out\r transform\r border border-transparent\r rounded-lg\r text-nclr-600\r bg-nclr-50\r focus:outline-none\r focus:border-transparent\r focus:ring-2\r focus:ring-white\r focus:ring-offset-2\r focus:ring-offset-nclr-300\r "})})]}),e("div",{children:r("button",{type:"submit",onClick:d=>{var u,v,I,A;d.preventDefault();const i={name:(u=l.current)==null?void 0:u.value,username:(v=s.current)==null?void 0:v.value,email:(I=a.current)==null?void 0:I.value,password:(A=n.current)==null?void 0:A.value};t(i)},className:"\r flex\r items-center\r justify-center\r w-full\r px-10\r py-4\r text-base\r font-medium\r text-center text-white\r transition\r duration-500\r ease-in-out\r transform\r bg-brclr-600\r rounded-xl\r hover:bg-brclr-700\r focus:outline-none\r focus:ring-2\r focus:ring-offset-2\r focus:ring-brclr-500\r ",children:[" ","Sign in"," "]})})]})})})]})}),e("div",{className:"relative flex-1 hidden w-0 overflow-hidden lg:block",children:e("img",{className:"absolute inset-0 object-cover w-full h-full",src:"https://d33wubrfki0l68.cloudfront.net/1a058aec6e3d81efe3ac4ca6366b40574876f6bc/32bc1/images/placeholders/rectanglewide.svg",alt:""})})]})},Me=()=>{const[t,l]=o.exports.useContext(x);let s=C();return e(Ee,{signClickHandler:async a=>{const c=await L("/user/signup",a);c&&c.message&&(l({type:h,payload:c.message}),c.status>=200&&c.status<300&&s("/login"))}})},qe=({clickHandler:t})=>{const l=o.exports.useRef(null),s=o.exports.useRef(null);return r("div",{className:"bg-white flex min-h-full",children:[e("div",{className:"\r flex flex-col\r justify-center\r flex-1\r px-4\r py-12\r sm:px-6\r lg:flex-none lg:px-20\r xl:px-24\r ",children:r("div",{className:"w-full max-w-xl mx-auto lg:w-96 px-2",children:[r("div",{children:[e("a",{href:"/",className:"text-brclr-600 text-medium",children:"Funkaraana"}),r("h2",{className:"mt-6 text-3xl font-extrabold text-nclr-600",children:[" ","Log in."," "]})]}),e("div",{className:"mt-8",children:e("div",{className:"mt-6",children:r("form",{action:"#",method:"POST",className:"space-y-6",children:[r("div",{children:[r("label",{htmlFor:"logusername",className:"block text-sm font-medium text-nclr-600",children:[" ","Username"," "]}),e("div",{className:"mt-1",children:e("input",{ref:l,id:"logusername",name:"username",type:"text",autoComplete:"name",required:!0,placeholder:"Your Username",className:"\r block\r w-full\r px-5\r py-3\r text-base\r placeholder-nclr-300\r transition\r duration-500\r ease-in-out\r transform\r border border-transparent\r rounded-lg\r text-nclr-600\r bg-nclr-50\r focus:outline-none\r focus:border-transparent\r focus:ring-2\r focus:ring-white\r focus:ring-offset-2\r focus:ring-offset-nclr-300\r "})})]}),r("div",{className:"space-y-1",children:[r("label",{htmlFor:"logpassword",className:"block text-sm font-medium text-nclr-600",children:[" ","Password"," "]}),e("div",{className:"mt-1",children:e("input",{ref:s,id:"logpassword",name:"password",type:"password",autoComplete:"current-password",required:!0,placeholder:"Your Password",className:"\r block\r w-full\r px-5\r py-3\r text-base\r placeholder-nclr-300\r transition\r duration-500\r ease-in-out\r transform\r border border-transparent\r rounded-lg\r text-nclr-600\r bg-nclr-50\r focus:outline-none\r focus:border-transparent\r focus:ring-2\r focus:ring-white\r focus:ring-offset-2\r focus:ring-offset-nclr-300\r "})})]}),e("div",{children:r("button",{type:"submit",onClick:n=>{var a,c;n.preventDefault(),t({username:(a=l.current)==null?void 0:a.value,password:(c=s.current)==null?void 0:c.value})},className:"\r flex\r items-center\r justify-center\r w-full\r px-10\r py-4\r text-base\r font-medium\r text-center text-white\r transition\r duration-500\r ease-in-out\r transform\r bg-brclr-600\r rounded-xl\r hover:bg-brclr-700\r focus:outline-none\r focus:ring-2\r focus:ring-offset-2\r focus:ring-brclr-500\r ",children:[" ","Log in"," "]})})]})})})]})}),e("div",{className:"relative flex-1 hidden w-0 overflow-hidden lg:block",children:e("img",{className:"absolute inset-0 object-cover w-full h-full",src:"https://d33wubrfki0l68.cloudfront.net/1a058aec6e3d81efe3ac4ca6366b40574876f6bc/32bc1/images/placeholders/rectanglewide.svg",alt:""})})]})},ze=()=>{const[t,l]=o.exports.useContext(x),s=C();return e(qe,{clickHandler:async a=>{const c={username:a.username,password:a.password},d=await L("/user/login",c);d&&d.message!=null&&(l({type:h,payload:d.message}),d.status>=200&&d.status<300&&(d.data&&localStorage.setItem("token",d.data.token),U(l),s("/")))}})},Be=({addClickHandler:t})=>{const[l,s]=o.exports.useState(null),n=o.exports.useRef(null),a=o.exports.useRef(null),c=o.exports.useRef(null),d=()=>{var i,u,v;((i=n.current)==null?void 0:i.value)&&((u=a.current)==null?void 0:u.value)&&l&&((v=c.current)==null?void 0:v.value)?(t({name:n.current.value,price:parseFloat(a.current.value),image:l,description:c.current.value}),n.current.value="",a.current.value="",s(null),c.current.value=""):console.log("Fill All Fields to Add the Product")};return r("section",{className:"p-4 h-full flex flex-col",children:[e("div",{className:" text-brclr-600 text-xl font-bold bg-white p-3 rounded-lg shadow-md shadow-neutral-100",children:"Add Proudct"}),e("div",{className:"flex mt-2 justify-center items-center w-full flex-auto",children:r("form",{className:"p-0 xs:p-6 text-xs xs:text-sm md:text-base",children:[r("div",{className:"mb-8",children:[e("label",{className:"ml-1 mb-1 text-sbrclr-500",children:"Product Name"}),e("input",{type:"text",ref:n,placeholder:"Product Name",className:"px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base"})]}),r("div",{className:"mb-8",children:[e("label",{className:"ml-1 mb-1 text-sbrclr-500 ",children:"Product Price"}),e("input",{type:"number",ref:a,min:"1",placeholder:"PKR",className:"px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base"})]}),r("div",{className:"mb-8",children:[e("label",{className:"ml-1 mb-1 text-sbrclr-500 ",children:"Product Description"}),e("textarea",{placeholder:"Product Description",ref:c,className:"px-5 py-3 shadow-sm focus:border-2 border-sbrclr-400 rounded-lg w-full text-sm xs:text-base focus-within:outline-none resize-none"})]}),r("div",{className:"mb-8",children:[e("label",{htmlFor:"prod-up-img",className:"ml-1 mb-1 py-1 px-3 rounded-lg bg-sbrclr-600 hover:bg-sbrclr-700 active:bg-sbrclr-800 text-white shadow cursor-pointer",children:"Upload Image"}),e("input",{id:"prod-up-img",type:"file",onChange:i=>{var u;((u=i.target)==null?void 0:u.files)?s(i.target.files[0]):s(null)},placeholder:"PKR",className:"hidden px-5 py-3 rounded-lg w-full text-sm xs:text-base"})]}),e("button",{onClick:i=>{i.preventDefault(),d()},className:" text-white bg-sbrclr-600 hover:bg-sbrclr-700 active:bg-sbrclr-800 p-3 w-full rounded-lg shadow-xl shadow-sbrclr-200",children:"Save Product"})]})})]})},$e=()=>{const[t,l]=o.exports.useContext(x);return e(Be,{addClickHandler:async n=>{const a=localStorage.getItem("token"),c=new FormData;if(a){c.append("name",n.name),c.append("price",n.price.toString()),c.append("image",n.image),c.append("description",n.description),c.append("token",a);const d=await fetch(`${g}/product`,{method:"POST",body:c,headers:{Accept:"multipart/form-data"}});d.status===401&&l({type:N});const i=await d.json();l({type:h,payload:i.message})}else l({type:N})}})};function Ue(){const[t,l]=o.exports.useContext(x),s=C(),[n,a]=o.exports.useState(!0);return o.exports.useEffect(()=>{t.notificationAdded&&(l({type:E}),setTimeout(()=>{l({type:D})},2e3))},[t.notificationAdded]),o.exports.useEffect(()=>{U(l)},[]),o.exports.useEffect(()=>{!n&&!t.isLoggedIn&&(s("/"),console.log(t),l({type:h,payload:"User Logged out"})),a(!0)},[t.isLoggedIn]),r("div",{className:"App h-full w-full font-prfnt",children:[e(De,{msgs:t.notifications}),r(ie,{children:[e(b,{path:"/",element:e(Pe,{})}),e(b,{path:"/prod/:id",element:e(w,{children:e(je,{})})}),e(b,{path:"/cart",element:e(w,{children:e(Te,{})})}),t.isLoggedIn?r(y,{children:[e(b,{path:"/seller/statistics",element:e(R,{children:e(He,{})})}),e(b,{path:"seller/addproduct",element:e(R,{children:e($e,{})})}),e(b,{path:"/seller/viewproduct",element:e(R,{children:e(be,{})})})]}):r(y,{children:[e(b,{path:"/signup",element:e(w,{children:e(Me,{})})}),e(b,{path:"/login",element:e(w,{children:e(ze,{})})})]}),e(b,{path:"*",element:e(Fe,{})})]})]})}const _e=(t,l)=>{switch(l.type){case P:if(l.payload){const s=t.cartItems.filter(a=>a.id==l.payload.id)[0];let n=t.cartItems.filter(a=>a.id!=l.payload.id);return s!=null?(s.qty!=null?s.qty=s.qty+1:s.qty=2,n=[...n,s]):n=[...n,l.payload],localStorage.setItem("cartItems",JSON.stringify(n)),p(m({},t),{cartItems:n})}else return t;case O:if(l.payload){const s=t.cartItems.filter((n,a)=>{if(n.id==l.payload.id){if(n.qty!=null&&n.qty>1)return n.qty=n.qty-1,!0}else return n.id!=l.payload.id});return localStorage.setItem("cartItems",JSON.stringify(s)),console.log(s),p(m({},t),{cartItems:s})}else return t;case fe:return localStorage.setItem("cartItems",JSON.stringify(t.cartItems)),t;case xe:return p(m({},t),{cartItems:localStorage.getItem(JSON.parse("cartItems"))});case h:if(console.log("Payload: "+l.payload),l.payload&&typeof l.payload=="string"){const s=t.notifications.length,n=p(m({},t),{notifications:[...t.notifications,l.payload],notificationAdded:!0});return s>0?t.notifications[s-1]!=l.payload?n:t:n}else return t;case D:if(t.notifications.length>0){const[,...s]=t.notifications;return p(m({},t),{notifications:s})}else return t;case E:return p(m({},t),{notificationAdded:!t.notificationAdded});case M:return l.payload&&l.payload.token&&l.payload.isLoggedIn&&l.payload.userInfo?p(m({},t),{token:l.payload.token,isLoggedIn:l.payload.isLoggedIn,userInfo:l.payload.userInfo}):p(m({},t),{token:null,isLoggedIn:!1,userInfo:null});case N:return localStorage.removeItem("token"),p(m({},t),{token:null,isLoggedIn:!1,userInfo:null});default:return t}},Ge=({children:t})=>{const[l,s]=o.exports.useReducer(_e,q);return e(x.Provider,{value:[l,s],children:t})};de.render(e(ue.StrictMode,{children:e(me,{children:e(Ge,{children:e(Ue,{})})})}),document.getElementById("root"));
