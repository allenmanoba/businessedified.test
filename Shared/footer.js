// ═══════════ SHARED FOOTER - Business Edified (Trusted Advisor Design) ═══════════
// Edit this ONE file to update the footer across all pages.
// Each page MUST include its own CSS for footer elements (this file injects HTML only).

(function() {
  const isMain = window.location.hostname === 'businessedified.com' || window.location.hostname === 'www.businessedified.com';
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const MAIN = (isMain || isLocal) ? '' : 'https://businessedified.com';
  const logoIMG = `<img src="${MAIN}/shared/BE logo symbol.png" class="footer-logo-icon" alt="Business Edified">`;

  const footerHTML = `
<div class="footer-container">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo" onclick="window.location='${MAIN || '/'}'">
        ${logoIMG}
        <div class="footer-wordmark">
          <span class="footer-business">BUSINESS</span>
          <span class="footer-edified">EDIFIED</span>
        </div>
      </div>
      <p class="footer-tagline">Operational consulting for service businesses. Research first, build second.</p>
    </div>
    <div class="footer-nav-col">
      <span class="footer-heading">Navigate</span>
      <a href="${MAIN}/" class="footer-link">Home</a>
      <a href="${MAIN}/services/" class="footer-link">Services</a>
      <a href="${MAIN}/test/" class="footer-link">Free Assessment</a>
      <a href="${MAIN}/results/" class="footer-link">Results</a>
      <a href="${MAIN}/about/" class="footer-link">About</a>
      <a href="${MAIN}/diagnostic/" class="footer-link">$49 Diagnostic</a>
    </div>
    <div class="footer-nav-col">
      <span class="footer-heading">Contact</span>
      <a href="mailto:contactus@businessedified.com" class="footer-link">contactus@businessedified.com</a>
      <a href="${MAIN}/" class="footer-link">businessedified.com</a>
      <a href="https://zbooking.au/3QKAC" target="_blank" class="footer-link footer-link-accent">Book a Strategy Call</a>
    </div>
  </div>

  <div class="footer-sdg">
    <img src="${MAIN}/shared/Trinity.png" width="48" height="48" alt="Trinity" class="footer-sdg-icon">
    <div class="footer-sdg-content">
      <span class="footer-sdg-title">SOLI DEO GLORIA</span>
      <p class="footer-sdg-text">
        God the Father sent Jesus, miraculously born to the virgin Mary by the Holy Spirit (Matt. 1:18-23). Without a sin nature, Christ lived perfectly and willingly died on the cross (Heb. 4:15). God accepted His payment for our sins, and Jesus rose again, defeating death (1 Cor. 15:3-4). We have no chance of perfection on our own (Rom. 3:23), but God credits Christ's perfect record to believers, making us fit for heaven (2 Cor. 5:21). Salvation is a free gift of grace, not earned by works (Eph. 2:8-9). Repent and call out to God for forgiveness, and you shall be saved (Rom. 10:13).
      </p>
    </div>
  </div>

  <div class="footer-bottom">
    <span>&copy; ${new Date().getFullYear()} Business Edified. All rights reserved.</span>
    <span><a href="${MAIN}/privacy/" class="footer-bottom-link">Privacy Policy</a> &middot; <a href="${MAIN}/terms/" class="footer-bottom-link">Terms &amp; Conditions</a></span>
    <span>All prices in AUD.</span>
  </div>
</div>`;

  document.getElementById('be-footer').innerHTML = footerHTML;
})();
