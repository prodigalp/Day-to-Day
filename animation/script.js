
// ===== DATA =====
const services = [
  { icon: '🔨', name: 'Handyman', desc: 'General repairs & maintenance', count: 142 },
  { icon: '🚿', name: 'Plumbing', desc: 'Pipes, drains & fixtures', count: 98 },
  { icon: '⚡', name: 'Electrical', desc: 'Wiring, panels & fixtures', count: 87 },
  { icon: '🪚', name: 'Carpentry', desc: 'Custom woodwork & furniture', count: 64 },
  { icon: '🎨', name: 'Painting', desc: 'Interior & exterior painting', count: 115 },
  { icon: '🧹', name: 'Cleaning', desc: 'Deep clean & maintenance', count: 203 },
  { icon: '🌿', name: 'Landscaping', desc: 'Garden design & upkeep', count: 59 },
  { icon: '❄️', name: 'HVAC', desc: 'Aircon install, clean & repair', count: 76 },
  { icon: '🏗️', name: 'Roofing', desc: 'Roof repair & waterproofing', count: 44 },
  { icon: '🚪', name: 'Flooring', desc: 'Tiles, wood & vinyl flooring', count: 71 },
  { icon: '🔒', name: 'Locksmith', desc: 'Locks, keys & security', count: 38 },
  { icon: '🛁', name: 'Renovation', desc: 'Full room & home makeovers', count: 52 },
];

const providers = [
  { name: 'Rolando Cruz', trade: 'Master Plumber', rating: 4.9, reviews: 87, rate: '₱800', tags: ['Pipes', 'Drains', 'Water Heater', 'Toilet Fix'], available: true, color: '#2563EB', services: ['Pipe Installation', 'Drain Cleaning', 'Water Heater Setup', 'Leak Detection'], phone: '+63 912 345 6789', email: 'rolando@email.com', years: 14, jobs: 340 },
  { name: 'Maricel Reyes', trade: 'Licensed Electrician', rating: 4.8, reviews: 64, rate: '₱950', tags: ['Wiring', 'Outlets', 'Circuit Breaker', 'LED Install'], available: false, color: '#D97706', services: ['Electrical Wiring', 'Panel Upgrade', 'Outlet Installation', 'Lighting Setup'], phone: '+63 917 987 6543', email: 'maricel@email.com', years: 9, jobs: 210 },
  { name: 'Ben & Sons Handyman', trade: 'General Handyman', rating: 4.7, reviews: 192, rate: '₱600', tags: ['Repairs', 'Assembly', 'Patching', 'Doors'], available: true, color: '#059669', services: ['General Repairs', 'Furniture Assembly', 'Wall Patching', 'Door & Window Fix'], phone: '+63 928 111 2222', email: 'ben@handyman.ph', years: 18, jobs: 890 },
  { name: 'Anita Villanueva', trade: 'Home Cleaning Expert', rating: 5.0, reviews: 231, rate: '₱550', tags: ['Deep Clean', 'Move-in/out', 'Post-reno', 'Regular'], available: true, color: '#7C3AED', services: ['Deep Cleaning', 'Move-in/out Clean', 'Post-renovation Clean', 'Weekly Maintenance'], phone: '+63 921 333 4444', email: 'anita@cleanph.com', years: 7, jobs: 512 },
  { name: 'Jomar Dela Torre', trade: 'Aircon Technician', rating: 4.9, reviews: 118, rate: '₱750', tags: ['AC Clean', 'AC Repair', 'Installation', 'Freon Refill'], available: false, color: '#DC2626', services: ['Aircon Cleaning', 'AC Repair', 'Unit Installation', 'Freon Refill'], phone: '+63 935 555 6666', email: 'jomar@hvacsolutions.ph', years: 11, jobs: 430 },
  { name: 'Clara Mendoza', trade: 'Interior Painter', rating: 4.8, reviews: 76, rate: '₱700', tags: ['Walls', 'Ceiling', 'Epoxy', 'Waterproofing'], available: true, color: '#0891B2', services: ['Interior Painting', 'Ceiling Painting', 'Epoxy Coating', 'Waterproofing Paint'], phone: '+63 942 777 8888', email: 'clara@paintpro.ph', years: 8, jobs: 265 },
];

const reviews = [
  { emoji: '👩', name: 'Grace Tolentino', service: 'Plumbing', stars: 5, text: 'Rolando fixed our burst pipe in under an hour. Very professional and reasonably priced. Will definitely book again!', date: 'March 18, 2025' },
  { emoji: '👨', name: 'Arjun dela Peña', service: 'Electrical', stars: 5, text: 'Maricel rewired our entire living room safely and neatly. She explained everything clearly and the work was immaculate.', date: 'March 10, 2025' },
  { emoji: '👩', name: 'Cynthia Bautista', service: 'Cleaning', stars: 5, text: "Anita's team did our post-renovation deep clean. The apartment looked brand new. Absolutely worth every peso.", date: 'February 28, 2025' },
];

const faqs = [
  { q: 'Is FixIt Local free to use for homeowners?', a: 'Yes, absolutely. Searching, browsing, and contacting service professionals through FixIt Local is completely free for homeowners. We earn from optional premium listings for service providers.' },
  { q: 'How do you verify service professionals?', a: 'All providers go through a multi-step verification: government ID check, trade license validation (where applicable), insurance verification, and a minimum review score requirement. We also monitor ongoing feedback.' },
  { q: 'Can I book directly through the platform?', a: 'You can contact providers directly via phone, email, or the booking form on their profile. Some providers also offer calendar-based scheduling. FixIt Local facilitates the connection — the booking is between you and the professional.' },
  { q: 'What if I have a problem with a service provider?', a: 'You can report an issue through our Contact page or by flagging the provider\'s profile. We take complaints seriously and investigate within 48 hours. Providers with verified serious complaints are deactivated immediately.' },
  { q: 'Are the prices on profiles final?', a: 'Rates shown on profiles are indicative and subject to change based on job complexity, materials, location, and current availability. Always confirm pricing directly with the provider before work begins.' },
  { q: 'How do I list my business on FixIt Local?', a: 'Click "List Your Business" at the top of the page and fill out the application form. Our team reviews applications within 3-5 business days. Approved providers can choose a free basic listing or a premium featured plan.' },
];

const legalContent = {
  terms: { title: 'Terms of Service', content: 'FixIt Local operates as a directory platform connecting homeowners with independent service professionals. By using this website, you agree that FixIt Local is not responsible for the quality, safety, or outcome of any services booked through our platform. All transactions are directly between the homeowner and the service provider. We reserve the right to remove listings that violate our community standards. Users must be 18 years or older. FixIt Local may update these terms at any time.' },
  privacy: { title: 'Privacy Policy', content: 'FixIt Local collects only the information necessary to connect you with service providers: name, location, and contact details submitted through forms. We do not sell your personal data to third parties. Information shared with service providers is limited to what you explicitly provide when initiating contact. We use cookies to improve site performance. You may request deletion of your data at any time by contacting hello@fixitlocal.ph.' },
  disclaimer: { title: 'Disclaimer', content: 'FixIt Local is a directory and referral platform only. We do not employ, supervise, or control any service providers listed on this site. We make no guarantees regarding the quality, timeliness, or outcome of any services. All reviews are submitted by users and reflect their personal experiences. FixIt Local is not liable for any damages, losses, or disputes arising from services arranged through this platform. Always verify credentials, get written quotes, and exercise your own judgment before hiring any professional.' },
};

// ===== RENDER SERVICES =====
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map(s => `
    <a href="#providers" class="service-card fade-up">
      <span class="service-count">${s.count} pros</span>
      <span class="service-icon">${s.icon}</span>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
    </a>
  `).join('');
}

// ===== RENDER PROVIDERS =====
function renderProviders() {
  const grid = document.getElementById('providersGrid');
  grid.innerHTML = providers.map((p, i) => `
    <div class="provider-card fade-up">
      <div class="provider-card-top">
        <div class="provider-avatar" style="background:${p.color}">${p.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
        <div class="provider-info">
          <h3>${p.name}</h3>
          <div class="provider-trade">${p.trade}</div>
          <div class="provider-stars">
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '½' : ''}</span>
            <span>${p.rating} (${p.reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div class="provider-tags">
        ${p.tags.map(t => `<span class="provider-tag">${t}</span>`).join('')}
      </div>
      <div class="provider-card-footer">
        <div>
          <div class="provider-rate">From <strong>${p.rate}/hr</strong></div>
          <span class="provider-avail ${p.available ? 'avail-yes' : 'avail-busy'}">${p.available ? '● Available Now' : '○ Booked Today'}</span>
        </div>
        <button class="btn btn-primary btn-view-profile" onclick="openProvider(${i})">View Profile</button>
      </div>
    </div>
  `).join('');
}

// ===== RENDER REVIEWS =====
function renderReviews() {
  const list = document.getElementById('reviewsList');
  list.innerHTML = reviews.map(r => `
    <div class="review-card fade-up">
      <div class="review-header">
        <div class="reviewer-info">
          <div class="reviewer-avatar">${r.emoji}</div>
          <div>
            <div class="reviewer-name">${r.name}</div>
            <div class="reviewer-service">${r.service} Service</div>
          </div>
        </div>
        <div class="stars" style="font-size:16px;">${'★'.repeat(r.stars)}</div>
      </div>
      <p class="review-text">${r.text}</p>
      <div class="review-date">${r.date}</div>
    </div>
  `).join('');
}

// ===== RENDER FAQ =====
function renderFAQ() {
  const list = document.getElementById('faqList');
  list.innerHTML = faqs.map((f, i) => `
    <li class="faq-item">
      <div class="faq-question" onclick="toggleFAQ(${i})" id="faqQ${i}">
        ${f.q}
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer" id="faqA${i}">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    </li>
  `).join('');
}

function toggleFAQ(i) {
  const q = document.getElementById(`faqQ${i}`);
  const a = document.getElementById(`faqA${i}`);
  const isOpen = a.classList.contains('open');
  document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.faq-question').forEach(el => el.classList.remove('active'));
  if (!isOpen) { a.classList.add('open'); q.classList.add('active'); }
}

// ===== PROVIDER MODAL =====
function openProvider(i) {
  const p = providers[i];
  const modal = document.getElementById('providerModalContent');
  modal.innerHTML = `
    <div class="modal-header">
      <h3>Provider Profile</h3>
      <button class="modal-close" onclick="closeModal('providerModal')">×</button>
    </div>
    <div class="modal-body">
      <div class="provider-modal-top">
        <div class="provider-modal-avatar" style="background:${p.color}">${p.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
        <div class="provider-modal-name">
          <h4>${p.name}</h4>
          <div class="provider-trade">${p.trade}</div>
          <div class="provider-stars">
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
            <span>${p.rating} · ${p.reviews} reviews</span>
          </div>
        </div>
      </div>
      <div class="detail-grid">
        <div class="detail-box"><label>Hourly Rate</label><span>${p.rate}/hr</span></div>
        <div class="detail-box"><label>Availability</label><span>${p.available ? '✅ Available Now' : '🟡 Booked Today'}</span></div>
        <div class="detail-box"><label>Years Experience</label><span>${p.years} years</span></div>
        <div class="detail-box"><label>Jobs Completed</label><span>${p.jobs}+</span></div>
        <div class="detail-box"><label>Phone</label><span>${p.phone}</span></div>
        <div class="detail-box"><label>Email</label><span style="font-size:12px">${p.email}</span></div>
      </div>
      <div class="services-offered">
        <h5>Services Offered</h5>
        <div class="provider-tags">${p.services.map(s=>`<span class="provider-tag">${s}</span>`).join('')}</div>
      </div>
      <div class="booking-form">
        <h5>📅 Request a Booking</h5>
        <div class="form-group"><label>Preferred Date</label><input type="date" style="width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:var(--radius);font-family:DM Sans,sans-serif;font-size:14px;outline:none;"></div>
        <div class="form-group"><label>Brief Description</label><textarea style="width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:var(--radius);font-family:DM Sans,sans-serif;font-size:14px;outline:none;height:80px;resize:none;" placeholder="Describe what you need help with..."></textarea></div>
        <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="bookPro('${p.name}')">Send Booking Request →</button>
      </div>
    </div>
  `;
  document.getElementById('providerModal').classList.add('open');
}

function bookPro(name) {
  closeModal('providerModal');
  showToast(`✅ Booking request sent to ${name.split(' ')[0]}!`);
}

// ===== LEGAL MODAL =====
function openLegal(type) {
  const l = legalContent[type];
  const modal = document.getElementById('legalModalContent');
  modal.innerHTML = `
    <div class="modal-header">
      <h3>${l.title}</h3>
      <button class="modal-close" onclick="closeModal('legalModal')">×</button>
    </div>
    <div class="modal-body">
      <p style="font-size:14px;color:var(--slate);line-height:1.8;">${l.content}</p>
      <p style="font-size:12px;color:var(--slate-light);margin-top:20px;">Last updated: March 2025. For questions, contact hello@fixitlocal.ph.</p>
    </div>
  `;
  document.getElementById('legalModal').classList.add('open');
  return false;
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('open');
  });
});

// ===== CHAT =====
function toggleChat() {
  document.getElementById('chatPanel').classList.toggle('open');
}

const botReplies = [
  "Great question! Our team will follow up shortly.",
  "You can find pros by using the search bar at the top of the page!",
  "All our professionals are background-checked and verified. 🛡️",
  "For urgent help, call us at (02) 8888-FIXIT.",
  "Happy to help! Is there a specific service you're looking for?",
];

function sendChatMsg() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  const msgs = document.getElementById('chatMessages');
  msgs.innerHTML += `<div class="chat-msg user"><div class="chat-bubble-msg">${text}</div></div>`;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(() => {
    const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
    msgs.innerHTML += `<div class="chat-msg bot"><div class="chat-bubble-msg">${reply}</div></div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 800);
}

// ===== SEARCH =====
function handleSearch() {
  const service = document.getElementById('serviceSelect').value;
  const location = document.getElementById('locationInput').value;
  if (!service) { showToast('Please select a service type.'); return; }
  showToast(`🔍 Searching for ${service.replace(/^[^ ]+ /, '')} in ${location || 'your area'}...`);
  setTimeout(() => { document.getElementById('providers').scrollIntoView({behavior:'smooth'}); }, 800);
}

function quickSearch(service) {
  document.getElementById('serviceSelect').value = '';
  const opts = document.getElementById('serviceSelect').options;
  for (let o of opts) { if (o.text.includes(service)) { o.selected = true; break; } }
  showToast(`🔍 Showing ${service} professionals`);
  setTimeout(() => { document.getElementById('providers').scrollIntoView({behavior:'smooth'}); }, 600);
}

// ===== FORM =====
function submitForm() {
  showToast('✅ Message sent! We\'ll be in touch within 24 hours.');
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeAll() {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ===== INIT =====
renderServices();
renderProviders();
renderReviews();
renderFAQ();
observeAll();

// Hamburger
document.getElementById('hamburgerBtn').addEventListener('click', () => {
  showToast('📱 Mobile menu — tap any link to navigate!');
});

// Sticky nav shadow
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(28,28,28,0.1)' : 'none';
});
