// ═══════════ SHARED HEADER - Business Edified (Trusted Advisor Design) ═══════════
// Edit this ONE file to update the nav across all pages.
// Each page sets: <script>const BE_ACTIVE_PAGE = 'home';</script> before loading this file.
// Each page MUST include its own CSS for #navbar and nav elements (this file injects HTML only).

(function() {
  const activePage = window.BE_ACTIVE_PAGE || '';
  const isMain = window.location.hostname === 'businessedified.com' || window.location.hostname === 'www.businessedified.com';
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const MAIN = (isMain || isLocal) ? '' : 'https://businessedified.com';
  const KNOW = (isMain || isLocal) ? 'https://know.businessedified.com' : '';

  const navLinks = [
    { label: 'Home',            href: MAIN + '/',            id: 'home' },
    { label: 'Services',        href: MAIN + '/services/',   id: 'services' },
    { label: 'Free Assessment', href: MAIN + '/test/',       id: 'free-assessment' },
    { label: 'Results',         href: MAIN + '/results/',    id: 'results' },
    { label: 'About',           href: MAIN + '/about/',      id: 'about' },
  ];

  function buildLink(link, cls, activeClass) {
    const linkId = link.id || link.label.toLowerCase().replace(/\s+/g, '-');
    const isActive = (linkId === activePage) ||
                     (activePage === 'home' && link.href === '/');
    return `<a class="${cls}${isActive ? ' ' + activeClass : ''}" href="${link.href}">${link.label}</a>`;
  }

  const desktopLinks = navLinks.map(l => buildLink(l, 'nav-link', 'active')).join('\n');
  const mobileLinks  = navLinks.map(l => {
    const linkId = l.id || l.label.toLowerCase().replace(/\s+/g, '-');
    const isActive = (linkId === activePage);
    return `<a class="mobile-link${isActive ? ' mobile-active' : ''}" href="${l.href}">${l.label}</a>`;
  }).join('\n');

  const logoIMG = `<img src="${MAIN}/shared/BE logo symbol.png" class="be-logo-icon" alt="Business Edified">`;

  const navHTML = `
<nav id="navbar">
  <div class="nav-container">
    <div class="be-logo" onclick="window.location='${MAIN || '/'}'">
      ${logoIMG}
      <div class="be-wordmark">
        <span class="be-business">BUSINESS</span>
        <span class="be-edified">EDIFIED</span>
      </div>
    </div>
    <div class="nav-links">
      ${desktopLinks}
    </div>
    <div class="nav-cta">
      <a href="https://zbooking.au/3QKAC" target="_blank" class="nav-btn-secondary">Book a Call</a>
      <a href="${MAIN}/diagnostic/" class="nav-btn-primary">$49 Diagnostic</a>
    </div>
    <button class="mobile-toggle" onclick="toggleMobileNav()" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>
  </div>
</nav>
<div id="mobile-overlay">
  <button class="mobile-close" onclick="toggleMobileNav()" aria-label="Close menu">&times;</button>
  ${mobileLinks}
  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px; width: 100%;">
    <a href="https://zbooking.au/3QKAC" target="_blank" class="nav-btn-secondary" style="text-align: center;">Book a Call</a>
    <a href="${MAIN}/diagnostic/" class="nav-btn-primary" style="text-align: center;">$49 Diagnostic</a>
  </div>
</div>`;

  document.getElementById('be-header').innerHTML = navHTML;

  // Mobile nav toggle
  window.toggleMobileNav = function(forceClose) {
    const overlay = document.getElementById('mobile-overlay');
    if (forceClose === false) {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    } else {
      const isOpen = overlay.style.display === 'flex';
      overlay.style.display = isOpen ? 'none' : 'flex';
      document.body.style.overflow = isOpen ? '' : 'hidden';
    }
  };

  // Close mobile nav on resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      const overlay = document.getElementById('mobile-overlay');
      if (overlay && overlay.style.display === 'flex') {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    }
  });
})();
