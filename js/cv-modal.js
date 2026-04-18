// ═══════════ CV DOWNLOAD MODAL ═══════════
// Add this at the END of your main.js file

function openCVModal() {
  document.getElementById('cvModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  // Close mobile menu if open
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('mobile-open');
}

function closeCVModal(event) {
  // If called from overlay click, only close if clicking the overlay itself
  if (event && event.target !== event.currentTarget) return;
  document.getElementById('cvModal').classList.remove('active');
  document.body.style.overflow = '';
}

function downloadCV(type) {
  // Get current language (check which lang-btn has 'active' class)
  const activeLangBtn = document.querySelector('.lang-btn.active');
  const lang = activeLangBtn ? activeLangBtn.textContent.trim() : 'ES';
  
  // Build the file path
  const prefix = type === 'visual' ? 'CV_Visual' : 'CV_Complete';
  const filePath = `cv/${prefix}_${lang}_Artiom_Syrovatskyy.pdf`;
  
  // Trigger download
  const a = document.createElement('a');
  a.href = filePath;
  a.download = `${prefix}_${lang}_Artiom_Syrovatskyy.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Close modal
  closeCVModal();
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeCVModal();
});


