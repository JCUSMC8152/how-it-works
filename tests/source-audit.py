import json,concurrent.futures,urllib.request,re
from pathlib import Path
D=json.loads(Path('src/lessons.json').read_text())
Path('docs/source-cache').mkdir(exist_ok=True)
def read(e):
 u=e['sources'][0]['url']
 try:
  r=urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'}),timeout=25);b=r.read(1500000).decode('utf-8','replace');title=re.search(r'<title[^>]*>(.*?)</title>',b,re.S|re.I);text=re.sub('<[^>]+>',' ',re.sub(r'<(script|style)[^>]*>.*?</\1>','',b,flags=re.S));text=re.sub(r'\s+',' ',text)
  Path(f'docs/source-cache/{e["id"]}.txt').write_text(text)
  return dict(id=e['id'],url=u,status=r.status,final=r.url,title=title.group(1).strip() if title else '',length=len(text))
 except Exception as x:return dict(id=e['id'],url=u,error=str(x))
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex:results=list(ex.map(read,D))
Path('docs/source-audit.json').write_text(json.dumps(results,indent=2));print(json.dumps(results,indent=2))
