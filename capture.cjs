const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 });
  
  await page.goto('http://localhost:8080');
  
  // Wait for React to load and mount
  await page.waitForTimeout(2000);
  
  // Scroll to trigger reveals
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(1000);
  
  // Ensure elements are visible by forcing opacity 1
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        transition: none !important;
        animation: none !important;
      }
      .opacity-0 { opacity: 1 !important; }
      .translate-y-8, .translate-y-6, .translate-y-4, .translate-y-12 { transform: translateY(0) !important; }
    `;
    document.head.appendChild(style);
  });
  
  const captureSection = async (id, name) => {
    const section = await page.locator(id);
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.screenshot({ path: `C:/Users/User/.gemini/antigravity/brain/81813f7f-48a1-4d83-9b61-bfc9aaf8ecad/artifacts/${name}.png` });
  };

  await captureSection('#about', 'about-redesign-hr');
  await captureSection('#resume', 'resume-redesign-hr');
  await captureSection('#contact', 'contact-redesign-hr');
  
  await browser.close();
})();
