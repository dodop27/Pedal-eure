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

  function openPop() {
    pop.classList.add('is-open');
    pop.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    // focus premier lien
    const first = pop.querySelector('a');
    if (first) first.focus();
  }

  function closePop() {
    pop.classList.remove('is-open');
    pop.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const opened = pop.classList.contains('is-open');
    if (opened) closePop(); else openPop();
  });

  // fermer au clic hors du popover
  document.addEventListener('click', function (e) {
    if (!pop.contains(e.target) && e.target !== btn) {
      closePop();
    }
  });

  // Esc pour fermer
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePop();
  });

  // empêcher fermeture quand on clique dans le pop
  pop.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});