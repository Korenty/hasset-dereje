// Language Toggle System
function toggleLang() {
    const current = localStorage.getItem('lang') || 'en';
    const newLang = current === 'en' ? 'am' : 'en';
    
    localStorage.setItem('lang', newLang);
    applyLanguage(newLang);
}

function applyLanguage(lang) {
    // Update Button Text
    const btn = document.getElementById('langBtn');
    if(btn) btn.innerText = lang === 'en' ? 'EN' : 'አማ';

    // Update Content
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('lang') || 'en';
    applyLanguage(saved);
});
