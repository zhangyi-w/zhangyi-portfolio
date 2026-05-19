(function(){
 var ls;try{ls=window.localStorage;}catch(e){}
 var root=document.documentElement;
 if((ls&&ls.getItem("nv-theme"))!=="dark")root.classList.add("light");
 var tg=document.createElement("button");tg.className="theme-toggle";tg.type="button";
 function lbl(){tg.textContent=root.classList.contains("light")?"◑ Dark":"◐ Light";}
 lbl();
 tg.addEventListener("click",function(){root.classList.toggle("light");
  var l=root.classList.contains("light");try{ls&&ls.setItem("nv-theme",l?"light":"dark");}catch(e){}lbl();});
 (document.body||root).appendChild(tg);

 // global sticky top nav
 var cl=document.querySelector('link[href$="site.css"]');
 var base=cl?cl.getAttribute("href").replace(/assets\/site\.css.*$/,""):"";
 var path=location.pathname;
 function seg(s){return s?path.indexOf("/"+s+"/")>-1
   :!/\/(syncso|b2c|b2b|styles)\//.test(path);}
 var items=[["","Home"],["syncso","SyncSo"],["b2c","B2C"],["b2b","B2B"]];
 var nav=document.createElement("nav");nav.className="topnav";
 var links=document.createElement("div");links.className="links";
 items.forEach(function(it){var a=document.createElement("a");
  a.href=base+(it[0]?it[0]+"/index.html":"index.html");
  a.textContent=it[1];if(seg(it[0]))a.className="active";links.appendChild(a);});
 nav.appendChild(links);
 (document.body||root).insertBefore(nav,(document.body||root).firstChild);

 var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
 var rail=document.querySelector(".scroll-rail i");
 if(rail){function os(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;
  rail.style.setProperty("--p",(m>0?h.scrollTop/m*100:0).toFixed(2)+"%");}
  addEventListener("scroll",os,{passive:true});os();}
 var hero=document.querySelector(".hero");
 if(hero){var host=hero;var ek=[].filter.call(hero.children,function(c){return c.tagName=="DIV"||c.tagName=="H1";});
  if(ek.length==1&&ek[0].tagName=="DIV"&&ek[0].children.length>1)host=ek[0];
  var n=0;[].forEach.call(host.children,function(c){c.classList.add("h-line");
   c.style.setProperty("--hd",(n++*120+120)+"ms");});}
 document.querySelectorAll("main > section, main > footer").forEach(function(s){
  if(!s.classList.contains("hero"))s.classList.add("reveal");
  s.querySelectorAll(".featured,.exp-card,.project-card,.skill-group,.about,.card,.flagship,.exp,.tile,.arch .layer").forEach(function(e,i){
   e.classList.add("reveal");e.style.setProperty("--d",Math.min(i,8)*80+"ms");});});
 function ac(el){var t=parseFloat(el.getAttribute("data-count")),
  d=parseInt(el.getAttribute("data-decimals")||"0",10),
  sf=el.getAttribute("data-suffix")||"",k=el.getAttribute("data-format")=="k",du=1600,st=null;
  function f(v){return k?(v/1000).toFixed(v>=1000?1:0).replace(/\.0$/,"")+"K+":v.toFixed(d);}
  function sp(ts){if(!st)st=ts;var p=Math.min((ts-st)/du,1),e=1-Math.pow(1-p,4);
   el.textContent=f(t*e)+sf;if(p<1)requestAnimationFrame(sp);else el.textContent=f(t)+sf;}
  if(reduce){el.textContent=f(t)+sf;return;}requestAnimationFrame(sp);}
 if(!("IntersectionObserver" in window)||reduce){
  document.querySelectorAll(".reveal").forEach(function(e){e.classList.add("in");});
  document.querySelectorAll("[data-count]").forEach(ac);return;}
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
  e.target.classList.add("in");
  if(e.target.querySelectorAll)e.target.querySelectorAll("[data-count]").forEach(ac);
  io.unobserve(e.target);});},{threshold:.12,rootMargin:"0px 0px -8% 0px"});
 document.querySelectorAll(".reveal").forEach(function(e){io.observe(e);});
 document.querySelectorAll("[data-count]").forEach(function(e){io.observe(e);});
})();