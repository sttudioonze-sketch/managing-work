(function () {
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);

  const LANGS = [
    { code: "pt", flag: "🇧🇷", label: "Português" },
    { code: "en", flag: "🇺🇸", label: "English" },
    { code: "es", flag: "🇪🇸", label: "Español" }
    // Árabe removido temporariamente do seletor — a tradução continua pronta
    // em data/links.js (bloco "ar"). Pra reativar, é só descomentar a linha:
    // , { code: "ar", flag: "🇸🇦", label: "العربية" }
  ];
  let currentLang = localStorage.getItem("dt_lang") || "pt";
  if (!SITE_DATA[currentLang] || !LANGS.some((l) => l.code === currentLang)) currentLang = "pt";

  // Cores por marca — dá identidade visual a cada ícone (como na referência)
  const ICON_COLORS = {
    linkedin:  { fg: "#4fb3ff", bg: "rgba(79, 179, 255, 0.14)" },
    mail:      { fg: "var(--accent)", bg: "rgba(20, 255, 227, 0.1)" },
    whatsapp:  { fg: "#3ddc7a", bg: "rgba(61, 220, 122, 0.14)" },
    spotify:   { fg: "#3ddc7a", bg: "rgba(61, 220, 122, 0.14)" },
    youtube:   { fg: "#ff5a5a", bg: "rgba(255, 90, 90, 0.14)" },
    instagram: { fg: "#ff6fa5", bg: "rgba(255, 111, 165, 0.14)" },
    target:    { fg: "var(--accent)", bg: "rgba(20, 255, 227, 0.1)" },
    play:      { fg: "var(--accent)", bg: "rgba(20, 255, 227, 0.1)" }
  };

  function buildMiniTrack(items) {
    const set = items
      .map(
        (item) => `
        <span class="mini-item">
          <span class="mini-title">${item.titulo}</span>
          ${item.autor ? `<span class="mini-autor">${item.autor}</span>` : ""}
        </span>`
      )
      .join("");
    return set + set;
  }

  function iconSvg(key) {
    return ICONS[key] || ICONS.arrow;
  }

  function renderLinkRow(link, delay) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "link-card" + (link.featured ? " is-featured" : "");
    a.href = link.url;
    a.target = link.url.startsWith("mailto:") ? "_self" : "_blank";
    a.rel = "noopener noreferrer";
    a.style.transitionDelay = delay + "s";

    const iconWrap = document.createElement("span");
    iconWrap.className = "link-icon";
    if (!link.featured) {
      const c = ICON_COLORS[link.icone];
      if (c) { iconWrap.style.color = c.fg; iconWrap.style.background = c.bg; }
    }
    iconWrap.innerHTML = iconSvg(link.icone);

    a.innerHTML = `
      <span class="link-body">
        ${link.badge ? `<span class="link-badge">${link.badge}</span>` : ""}
        <span class="title">${link.titulo}</span>
        ${link.subtitulo ? `<span class="subtitle">${link.subtitulo}</span>` : ""}
        <span class="desc">${link.descricao || ""}</span>
        ${link.cta ? `<span class="cta-line">${link.cta}${ICONS.arrow}</span>` : ""}
        ${link.livros ? `
          <span class="mini-strip">
            <span class="mini-track">${buildMiniTrack(link.livros)}</span>
          </span>
        ` : ""}
      </span>
      ${link.cta ? "" : `<span class="link-arrow">${ICONS.arrow}</span>`}
    `;
    a.prepend(iconWrap);
    attachGlow(a);
    li.appendChild(a);
    return li;
  }

  function renderAgendaRow(evento, delay, inscreverSeLabel) {
    const li = document.createElement("li");
    const card = document.createElement("div");
    card.className = "agenda-card";
    card.style.transitionDelay = delay + "s";
    card.innerHTML = `
      <span class="agenda-top">
        <span class="agenda-date-inline">${evento.dia} ${evento.mes}</span>
        <span class="agenda-sep">|</span>
        <span class="tema">${evento.tema}</span>
      </span>
      <span class="agenda-meta">
        <span class="local">${evento.local}</span>
        ${evento.horario ? `<span class="agenda-hora">${evento.horario}</span>` : ""}
        <span class="agenda-format">${evento.formato || "Online"}</span>
      </span>
      <a class="agenda-btn-full" href="${evento.url}" target="_blank" rel="noopener noreferrer">${inscreverSeLabel}</a>
    `;
    li.appendChild(card);
    return li;
  }

  function attachGlow(el) {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - r.left) + "px");
      el.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  }

  // Limpa os containers dinâmicos antes de re-renderizar (troca de idioma)
  function clearContainers() {
    ["#hero-roles", "#social-row", "#grupo1-lista", "#agenda-lista", "#brand-track", "#grupo2-lista"]
      .forEach((sel) => { const el = $(sel); if (el) el.innerHTML = ""; });
  }

  function render() {
    const d = SITE_DATA[currentLang];
    clearContainers();

    // <html lang="..."> e direção do texto (árabe é RTL)
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    // Painel 1 — Gabriel Bussinger
    $("#hero-avatar").src = d.hero.avatar;
    $("#hero-nome").textContent = d.hero.nome;

    const rolesHost = $("#hero-roles");
    rolesHost.innerHTML = (d.hero.roleLines || [])
      .map((line) => `<p class="role-line">${line.split("|").map(s => s.trim()).join(' <span class="sep">|</span> ')}</p>`)
      .join("");

    // Ícones sociais
    const socialHost = $("#social-row");
    (d.socialRow || []).forEach((item) => {
      const a = document.createElement("a");
      a.className = "social-btn";
      a.href = item.url;
      a.target = item.url.startsWith("mailto:") ? "_self" : "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = iconSvg(item.icone);
      socialHost.appendChild(a);
    });

    // Botões principais do Gabriel
    const g1 = $("#grupo1-lista");
    d.grupo1.links.forEach((link, i) => g1.appendChild(renderLinkRow(link, i * 0.06)));

    // Agenda
    $("#agenda-titulo").textContent = d.agenda.titulo;
    const agendaHost = $("#agenda-lista");
    d.agenda.eventos.forEach((ev, i) => agendaHost.appendChild(renderAgendaRow(ev, i * 0.06, d.ui.inscreverSe)));

    // Painel 2 — Diário do Treinador
    $("#diario-eyebrow").textContent = d.ui.eyebrow;
    $("#grupo2-titulo").textContent = d.grupo2.titulo;
    $("#grupo2-slogan").textContent = d.grupo2.slogan;

    // Faixa de marcas (carrossel contínuo)
    const track = $("#brand-track");
    const checkDotSvg = `<span class="check-dot"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8.5"/><path class="tick" d="M6 10.3l2.6 2.6L14.2 7"/></svg></span>`;
    const buildBrandSet = () =>
      d.grupo2.marquee
        .map((nome) => `<span class="brand-item">${checkDotSvg}${nome}</span>`)
        .join("");
    track.innerHTML = buildBrandSet() + buildBrandSet();

    const lista2 = $("#grupo2-lista");
    d.grupo2.itens.forEach((link, i) => lista2.appendChild(renderLinkRow(link, i * 0.06)));

    // Footer
    $("#footer-nome").textContent = d.footer.nome;
    $("#footer-ecossistema").textContent = d.footer.ecossistema;

    const isWhatsApp = /wa\.me|whatsapp\.com/i.test(d.footer.devUrl);
    let devHref = d.footer.devUrl;
    if (isWhatsApp && d.footer.devMensagem) {
      const sep = devHref.includes("?") ? "&" : "?";
      devHref += sep + "text=" + encodeURIComponent(d.footer.devMensagem);
    }
    const devEl = $("#footer-dev");
    devEl.innerHTML = `${d.footer.devLabel} | <a href="${devHref}" target="_blank" rel="noopener noreferrer">${d.footer.devNome}</a>`;

    // Efeito de entrada ao rolar a página
    const revealTargets = document.querySelectorAll(".link-card, .agenda-card");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealTargets.forEach((el) => observer.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    }
  }

  // ------------------ Seletor de idiomas ------------------
  function renderLangSwitcher() {
    const wrap = $("#lang-switcher");
    if (!wrap) return;

    const current = LANGS.find((l) => l.code === currentLang);
    wrap.innerHTML = `
      <button type="button" class="lang-btn" id="lang-toggle" aria-haspopup="true" aria-expanded="false">
        <span class="lang-flag">${current.flag}</span>
        <svg class="lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <ul class="lang-menu" id="lang-menu" role="menu">
        ${LANGS.map((l) => `
          <li>
            <button type="button" class="lang-option${l.code === currentLang ? " is-active" : ""}" data-lang="${l.code}" role="menuitem">
              <span class="lang-flag">${l.flag}</span>
              <span>${l.label}</span>
            </button>
          </li>
        `).join("")}
      </ul>
    `;

    const toggleBtn = $("#lang-toggle");
    const menu = $("#lang-menu");

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang === currentLang) { wrap.classList.remove("is-open"); return; }
        currentLang = lang;
        localStorage.setItem("dt_lang", lang);
        render();
        renderLangSwitcher();
        wrap.classList.remove("is-open");
      });
    });

    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) wrap.classList.remove("is-open");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    render();
    renderLangSwitcher();
  });
})();
