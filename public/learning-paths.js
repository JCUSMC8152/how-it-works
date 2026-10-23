/* Optional self-check feedback. State lives only in this page, with no storage or requests. */
const boxes=[...document.querySelectorAll('[data-path-check]')];
const status=document.getElementById('path-progress');
function update(){const n=boxes.filter(b=>b.checked).length;if(status)status.textContent=n===boxes.length?'All six self-checks complete. Explain one connection in your own words.':`${n} of ${boxes.length} self-checks complete. Your checks reset when this page reloads.`;}
boxes.forEach(b=>b.addEventListener('change',update));
document.getElementById('reset-path-checks')?.addEventListener('click',()=>{boxes.forEach(b=>{b.checked=false});update();});
update();
