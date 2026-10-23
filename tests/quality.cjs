const fs = require('fs');
const assert = require('assert/strict');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const AxeBuilder = require(process.env.AXE_MODULE || '@axe-core/playwright').default;
const D = JSON.parse(fs.readFileSync('src/lessons.json'));
const base = process.env.BASE_URL || 'http://127.0.0.1:4189';
(async () => {
 const browser = await chromium.launch({headless:true,channel:process.env.BROWSER_CHANNEL || undefined});
 const ctx = await browser.newContext({viewport:{width:393,height:852},hasTouch:true,isMobile:true});
 const p = await ctx.newPage();
 const rows=[],labels=[];
 for (const e of D) {
  await p.goto(base+'/'+e.slug);
  await p.waitForSelector('#diagram svg');
  await p.locator('[data-mode=try]').click();
  for(let n=0;n<e.control.options.length;n++) {
   await p.locator('#activity').selectOption({value:String(n)});
   const clipped = await p.locator('#diagram svg').evaluate(svg => {
    return [...svg.querySelectorAll('text')].filter(t => {
     const b=t.getBBox();return b.x<0 || b.x+b.width>600 || b.y<0 || b.y+b.height>350;
    }).map(t=>t.textContent);
   });
   if(clipped.length)labels.push({id:e.id,n,clipped});
  }
  if([1,13,24,31,50].includes(e.id)) {
   for(const mode of ['show','try','more']) {
    await p.locator('[data-mode='+mode+']').click();
    const a=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
    rows.push({id:e.id,mode,violations:a.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(x=>x.target)}))});
   }
  }
  await p.locator('[data-mode=show]').click();
  await p.locator('#diagram').screenshot({path:'docs/diagram-'+e.id+'.png'});
 }
 await p.goto(base);
 await p.screenshot({path:'docs/home-mobile.png',fullPage:true});
 await p.setViewportSize({width:1440,height:1000});
 await p.screenshot({path:'docs/home-desktop.png',fullPage:true});
 await p.goto(base+'/experiences');
 assert.equal(await p.locator('.card').count(),50);
 const a=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
 rows.push({page:'catalog',violations:a.violations.map(x=>({id:x.id,nodes:x.nodes.map(n=>n.target)}))});
 await p.goto(base+'/not-a-route');
 assert.match(await p.locator('h1').textContent(),/path/);
 const out={base,axe:rows,clippedLabels:labels,checkedAt:new Date().toISOString()};
 fs.writeFileSync('docs/quality.json',JSON.stringify(out,null,2));
 console.log(JSON.stringify(out));
 await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1});
