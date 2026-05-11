// ═══════════ SHARED HEADER — Business Edified ═══════════
// Edit this ONE file to update the nav across all pages.
// Each page sets: <script>const BE_ACTIVE_PAGE = 'home';</script> before loading this file.
// Works on both businessedified.com and know.businessedified.com (single source of truth).
(function() {
  var activePage = window.BE_ACTIVE_PAGE || '';
  var isMain = window.location.hostname === 'businessedified.com' || window.location.hostname === 'www.businessedified.com';
  var MAIN = isMain ? '' : 'https://businessedified.com';
  var KNOW = isMain ? 'https://know.businessedified.com' : '';

  var navLinks = [
    { label: 'Services',        href: MAIN + '/services/',    id: 'services' },
    { label: 'Free Assessment',  href: MAIN + '/test/',        id: 'free-assessment' },
    { label: 'Results',          href: MAIN + '/results/',     id: 'results' },
    { label: 'About',            href: MAIN + '/about/',       id: 'about' },
  ];

  // Portal pages get an extra link
  if (activePage === 'portal') {
    navLinks.push({ label: 'Client Portal', href: '/portal/', id: 'portal' });
  }

  function buildLink(link, cls, activeClass) {
    var linkId = link.id || link.label.toLowerCase().replace(/\s+/g, '-');
    var isActive = (linkId === activePage) || (activePage === 'home' && link.href === '/');
    return '<a class="' + cls + (isActive ? ' ' + activeClass : '') + '" href="' + link.href + '">' + link.label + '</a>';
  }

  var desktopLinks = navLinks.map(function(l) { return buildLink(l, 'nav-link', 'active'); }).join('\n');
  var mobileLinks = navLinks.map(function(l) {
    var linkId = l.id || l.label.toLowerCase().replace(/\s+/g, '-');
    var isActive = (linkId === activePage);
    return '<a class="mobile-link' + (isActive ? ' mobile-active' : '') + '" href="' + l.href + '">' + l.label + '</a>';
  }).join('\n');

  var logoIMG = '<img src="' + MAIN + '/shared/BE logo symbol.png" class="be-logo-icon" alt="Business Edified" style="width: 40px; height: auto;">';

  var navHTML = '\
<nav id="navbar">\
  <div class="be-logo" onclick="window.location=\'' + (MAIN || '/') + '\'">\
    ' + logoIMG + '\
    <div class="be-wordmark">\
      <span class="be-business">BUSINESS</span>\
      <span class="be-edified">EDIFIED</span>\
    </div>\
  </div>\
  <div class="nav-links">\
    ' + desktopLinks + '\
  </div>\
  <div class="nav-cta" style="display: flex; align-items: center; gap: 12px;">\
    <a href="' + MAIN + '/call/" class="btn-secondary" style="padding: 10px 20px; font-size: 0.88rem;">Book a Call</a>\
    <a href="' + MAIN + '/diagnostic/" class="btn-primary" style="padding: 10px 20px; font-size: 0.88rem;">$49 Diagnostic</a>\
  </div>\
  <button class="mobile-toggle" onclick="toggleMobileNav()" aria-label="Open navigation menu"><i class="fa-solid fa-bars"></i></button>\
</nav>\
<div id="mobile-overlay">\
  <button class="mobile-close" onclick="toggleMobileNav()" aria-label="Close navigation menu">&times;</button>\
  ' + mobileLinks + '\
  <a href="' + MAIN + '/diagnostic/" class="btn-primary" style="margin-top: 16px; padding: 14px 28px;">$49 Diagnostic</a>\
  <a href="' + MAIN + '/call/" class="btn-secondary" style="margin-top: 8px; padding: 14px 28px;">Book a Strategy Call</a>\
</div>';

  document.getElementById('be-header').innerHTML = navHTML;

  // Mobile nav toggle (global)
  window.toggleMobileNav = function(forceClose) {
    var overlay = document.getElementById('mobile-overlay');
    if (forceClose === false) {
      overlay.style.display = 'none';
    } else {
      overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
    }
  };
})();
