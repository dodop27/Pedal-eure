// Menu mobile
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");


if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.hidden = expanded;
  });

  // Ferme le menu au clic sur un lien
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    });
  });
}

// Année automatique footer
const y = document.getElementById("year");
if (y) y.textContent = String(new Date().getFullYear());

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('contactBtn');
  const pop = document.getElementById('contactPopover');

  if (!btn || !pop) return;

  function isOpen() {
    return pop.classList.contains('is-open');
  }

  function openPop() {
    pop.classList.add('is-open');
    pop.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');

    const first = pop.querySelector('a');
    if (first) first.focus({ preventScroll: true });
  }

  function closePop({ returnFocus = false } = {}) {
    if (!isOpen()) return; // ✅ ne fait rien si déjà fermé

    pop.classList.remove('is-open');
    pop.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');

    // ✅ optionnel : rendre le focus au bouton sans remonter en haut
    if (returnFocus) btn.focus({ preventScroll: true });
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (isOpen()) closePop({ returnFocus: true });
    else openPop();
  });

  // ✅ fermer au clic hors du popover UNIQUEMENT si ouvert
  document.addEventListener('click', function (e) {
    if (!isOpen()) return;
    if (!pop.contains(e.target) && e.target !== btn) {
      closePop(); // pas de focus => pas de scroll
    }
  });

  // ✅ Esc pour fermer (avec focus, sans scroll)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePop({ returnFocus: true });
  });

  pop.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
