const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 3 });
  
  await page.goto('http://localhost:8080');
  
  // Wait for React to load and mount
  await page.waitForTimeout(2000);
  
  // Scroll to bottom to trigger reveals
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
      .translate-y-8, .translate-y-6, .translate-y-4, .translate-y-12, .-translate-x-4, .translate-x-8 { transform: translateY(0) translateX(0) !important; }
    `;
    document.head.appendChild(style);
  });
  
  const captureSection = async (id, filename) => {
    try {
      const section = await page.locator(id);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await section.screenshot({ path: path.join(__dirname, 'ss', filename) });
      console.log(`Captured ${filename}`);
    } catch (err) {
      console.log(`Skipped ${id} - not found or error`);
    }
  };

  const sections = [
    { id: '#home', file: '1-hero-mobile.png' },
    { id: '#skills', file: '3-skills-mobile.png' },
    { id: '#experience', file: '5-experience-mobile.png' },
    { id: '#certifications', file: '6-certifications-mobile.png' },
  ];

  for (const s of sections) {
    await captureSection(s.id, s.file);
  }

  await browser.close();
})();
