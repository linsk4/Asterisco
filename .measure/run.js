const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  const fails=[];
  p.on('requestfailed', r => fails.push(r.url()));
  await p.goto('http://127.0.0.1:8899/.measure/nav.html', { waitUntil:'networkidle' });
  const r = await p.evaluate(() => window.run());
  console.log(JSON.stringify({fails, r}, null, 1));
  await b.close();
})();
