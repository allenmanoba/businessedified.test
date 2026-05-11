// ═══════════ SHARED FOOTER — Business Edified ═══════════
// Edit this ONE file to update the footer across all pages.
// Works on both businessedified.com and know.businessedified.com (single source of truth).
(function() {
  var isMain = window.location.hostname === 'businessedified.com' || window.location.hostname === 'www.businessedified.com';
  var MAIN = isMain ? '' : 'https://businessedified.com';
  var KNOW = isMain ? 'https://know.businessedified.com' : '';
  var logoIMG = '<img src="' + MAIN + '/shared/BE logo symbol.png" class="be-logo-icon" alt="Business Edified" style="width: 40px; height: auto;">';

  var footerHTML = '\
<div class="container">\
  <div class="footer-grid">\
    <div>\
      <div class="be-logo stacked" style="align-items: flex-start; text-align: left;" onclick="window.location=\'' + (MAIN || '/') + '\'">\
        ' + logoIMG + '\
        <div class="be-wordmark">\
          <span class="be-business">BUSINESS</span>\
          <span class="be-edified">EDIFIED</span>\
        </div>\
      </div>\
      <p style="font-size: 0.88rem; color: rgba(255,255,255,0.5); margin-top: 12px;">Operational consulting for<br>solo professional practices.</p>\
    </div>\
    <div>\
      <span class="eyebrow">NAVIGATE</span>\
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px 32px;">\
        <a href="' + MAIN + '/" style="font-size: 0.88rem;">Home</a>\
        <a href="' + MAIN + '/services/" style="font-size: 0.88rem;">Services</a>\
        <a href="' + MAIN + '/test/" style="font-size: 0.88rem;">Free Assessment</a>\
        <a href="' + MAIN + '/about/" style="font-size: 0.88rem;">About</a>\
        <a href="' + MAIN + '/diagnostic/" style="font-size: 0.88rem;">$49 Diagnostic</a>\
        <a href="' + MAIN + '/results/" style="font-size: 0.88rem;">Results</a>\
      </div>\
    </div>\
    <div>\
      <span class="eyebrow">CONTACT</span>\
      <div style="display: flex; flex-direction: column; gap: 6px;">\
        <a href="mailto:contactus@businessedified.com" style="font-size: 0.88rem;">contactus@businessedified.com</a>\
        <a href="' + MAIN + '/" style="font-size: 0.88rem;">businessedified.com</a>\
        <a href="' + MAIN + '/call/" style="color: var(--bronze-light, #E8C4A0); font-weight: 600; font-size: 0.88rem;">Book a Call</a>\
      </div>\
    </div>\
  </div>\
  <div style="border-top: 1px solid rgba(255,255,255,0.1); margin-top: 28px; padding-top: 28px;">\
    <div style="display: flex; align-items: flex-start; gap: 24px; width: 100%; padding: 0;">\
      <img src="' + MAIN + '/shared/Trinity.png" width="48" height="48" alt="Trinity" style="flex-shrink: 0; margin-top: 2px;">\
      <div style="flex: 1; min-width: 0;">\
        <span style="display: block; font-size: 0.82rem; color: var(--bronze-light, #E8C4A0); font-weight: 700; letter-spacing: 0.08em; margin-bottom: 10px;">SOLI DEO GLORIA</span>\
        <p style="font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.7; margin: 0;">\
God the Father sent Jesus, miraculously born to the virgin Mary by the Holy Spirit (Matt. 1:18-23). Without a sin nature, Christ lived perfectly and willingly died on the cross (Heb. 4:15). God accepted His payment for our sins, and Jesus rose again, defeating death (1 Cor. 15:3-4). We have no chance of perfection on our own (Rom. 3:23), but God credits Christ\'s perfect record to believers, making us fit for heaven (2 Cor. 5:21). Salvation is a free gift of grace, not earned by works (Eph. 2:8-9). Repent and call out to God for forgiveness, and you shall be saved (Rom. 10:13).\
        </p>\
      </div>\
    </div>\
  </div>\
  <div class="footer-bottom">\
    <span>&copy; ' + new Date().getFullYear() + ' Business Edified. All rights reserved.</span>\
    <span><a href="' + MAIN + '/privacy/">Privacy Policy</a> &middot; <a href="' + MAIN + '/terms/">Terms &amp; Conditions</a></span>\
    <span>All prices in AUD.</span>\
  </div>\
</div>';

  document.getElementById('be-footer').innerHTML = footerHTML;
})();
