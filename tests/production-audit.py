import json,hashlib,urllib.request,urllib.error,concurrent.futures,time,os
from pathlib import Path
root=Path(__file__).resolve().parents[1]
origin='https://howitworks.crawfordgroupholdings.com'
files=[p for p in (root/'dist').rglob('*') if p.is_file() and not p.name.startswith('_')]
def fetch(p):
 route='/'+p.relative_to(root/'dist').as_posix();url=origin+(route[:-10].rstrip('/') if route.endswith('index.html') else route);url=url or origin+'/'
 try:
  try:r=urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=25)
  except urllib.error.HTTPError as e:
   if route!='/404.html':raise
   r=e
  b=r.read();expected=p.read_bytes();return dict(path=route,url=url,status=r.status,match=b==expected,sha256=hashlib.sha256(b).hexdigest(),expected=hashlib.sha256(expected).hexdigest())
 except Exception as e:return dict(path=route,url=url,error=str(e),match=False)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:rows=list(ex.map(fetch,files))
try:urllib.request.urlopen(urllib.request.Request(origin+'/missing-route-test',headers={'User-Agent':'Mozilla/5.0'}),timeout=25);missing=200
except urllib.error.HTTPError as e:missing=e.code
r=urllib.request.urlopen(urllib.request.Request(origin+'/',headers={'User-Agent':'Mozilla/5.0'}),timeout=25)
report=dict(origin=origin,commit=os.environ.get('HIW_COMMIT'),deployment=os.environ.get('HIW_DEPLOYMENT'),checkedAt=time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),rows=rows,missingRouteStatus=missing,securityHeaders={k:v for k,v in r.headers.items() if k.lower() in ['content-security-policy','permissions-policy','x-content-type-options','referrer-policy']},passed=all(x['match'] for x in rows) and missing==404)
(root/'docs/production-audit.json').write_text(json.dumps(report,indent=2));print(json.dumps(dict(passed=report['passed'],files=len(rows),matched=sum(x['match'] for x in rows),missing=missing,failures=[x for x in rows if not x['match']]),indent=2))
