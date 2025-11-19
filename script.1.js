
const qtdeInput = document.getElementById('qtde');
function ajustarQtde(delta) {
  const novaQtde = Math.max(1, +qtdeInput.value + delta);
  qtdeInput.value = novaQtde;
}

// Minimal addToCart demo to match example buttons
function addToCart(name, price) {
  const quantity = qtdeInput ? Math.max(1, +qtdeInput.value || 1) : 1;
  const total = price * quantity;
  alert(`Adicionado ao carrinho: ${name} — ${quantity} x R$${price.toFixed(2)} = R$${total.toFixed(2)}`);
}

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

// Script para trocar a imagem grande ao clicar nas miniaturas
    function trocarPoster(src, btn) {
      const imgPrincipal = document.getElementById('posterPrincipal');
      if (!imgPrincipal) return;

      imgPrincipal.src = src;

      // Atualiza o destaque da miniatura ativa
      document.querySelectorAll('.poster-thumb').forEach(el => {
        el.classList.remove('active-thumb');
      });
      if (btn && btn.querySelector('img')) {
        btn.querySelector('img').classList.add('active-thumb');
      }
    }