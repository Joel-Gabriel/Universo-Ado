// Configurações
const YOUTUBE_ID = "Qp3b-RXtz4w"; // Substitua pelo ID do MV desejado (ex.: Ado - Usseewa)

// Tema (toggle entre dark e light)
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("theme-light");
  updateThemeToggle();
})();

function updateThemeToggle() {
  const isLight = document.body.classList.contains("theme-light");
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.innerHTML = isLight
    ? '<i class="bi bi-brightness-high me-1"></i><span>Light</span>'
    : '<i class="bi bi-moon-stars me-1"></i><span>Dark</span>';
}

document.getElementById("themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("theme-light");
  localStorage.setItem("theme", document.body.classList.contains("theme-light") ? "light" : "dark");
  updateThemeToggle();
});

// Modal YouTube autoplay
const mvModal = document.getElementById("mvModal");
if (mvModal) {
  mvModal.addEventListener("show.bs.modal", () => {
    const frame = document.getElementById("mvFrame");
    if (frame) {
      const src = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`;
      frame.setAttribute("src", src);
    }
  });
  mvModal.addEventListener("hidden.bs.modal", () => {
    const frame = document.getElementById("mvFrame");
    if (frame) frame.setAttribute("src", "");
  });
}

// Lightbox da galeria
const lightboxModal = document.getElementById("lightboxModal");
if (lightboxModal) {
  lightboxModal.addEventListener("show.bs.modal", (ev) => {
    const trigger = ev.relatedTarget;
    const src = trigger?.getAttribute("data-src");
    const img = document.getElementById("lightboxImage");
    if (img && src) img.src = src;
  });
  lightboxModal.addEventListener("hidden.bs.modal", () => {
    const img = document.getElementById("lightboxImage");
    if (img) img.src = "";
  });
}

// Newsletter (mock)
function subscribeNewsletter(form) {
  const email = form.querySelector("input[type=email]")?.value?.trim();
  const box = document.getElementById("newsletterFeedback");
  if (!email) return;
  // Aqui você pode integrar com um serviço real (ex.: Mailchimp, Brevo, etc.)
  setTimeout(() => {
    box.innerHTML = `<span class="text-accent"><i class="bi bi-check-circle me-1"></i> Assinatura confirmada para ${email}!</span>`;
    form.reset();
  }, 500);
}

// Pequenas animações de entrada (opcional)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("reveal");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".card, section .h1, section .h2, section .lead").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(12px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
  io.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `.reveal{opacity:1!important; transform:none!important;}`;
  document.head.appendChild(style);
});