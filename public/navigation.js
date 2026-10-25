// Companion-platform menu follows What If's responsive disclosure pattern.
(() => {
 const header=document.querySelector('header.learning-header');
 if(!header)return;
 const button=header.querySelector('.menu-toggle'),nav=header.querySelector('#site-menu');
 if(!button||!nav)return;
 const media=matchMedia('(max-width:1100px)');
 function setOpen(open,returnFocus=false){nav.classList.toggle('menu-open',open);button.setAttribute('aria-expanded',String(open));button.textContent=open?'Menu −':'Menu +';if(open)nav.querySelector('a')?.focus();else if(returnFocus)button.focus();}
 button.addEventListener('click',()=>setOpen(button.getAttribute('aria-expanded')!=='true'));
 header.addEventListener('keydown',event=>{if(event.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){event.preventDefault();setOpen(false,true);}});
 header.addEventListener('focusout',event=>{if(!header.contains(event.relatedTarget))setOpen(false);});
 document.addEventListener('click',event=>{if(!header.contains(event.target))setOpen(false);});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
 media.addEventListener('change',()=>setOpen(false));
 const normalized=value=>value.replace(/\/index\.html$/,'/').replace(/\/$/,'')||'/';
 nav.querySelectorAll('a').forEach(a=>{if(a.origin===location.origin&&normalized(a.pathname)===normalized(location.pathname)&&!a.hash)a.setAttribute('aria-current','page');});
 header.classList.add('menu-ready');
})();
