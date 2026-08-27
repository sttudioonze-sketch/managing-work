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

  // Efeito de "digitação": separa o texto de um título em spans por caractere,
  // preservando tags internas (como o <span class="accent-word">), e adiciona
  // um cursor piscando no final. A animação em si só roda quando o card ganha
  // a classe "is-visible" (ver CSS: animation-play-state pausado até lá).
  function typewriterize(el) {
    let counter = 0;
    const STEP = 0.045; // segundos entre cada caractere
    function walk(node) {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          Array.from(child.textContent).forEach((ch) => {
            const span = document.createElement("span");
            span.className = "tw-char";
            span.style.animationDelay = (counter * STEP).toFixed(3) + "s";
            span.textContent = ch;
            frag.appendChild(span);
            counter++;
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) {
          walk(child);
        }
      });
    }
    walk(el);
    const cursor = document.createElement("span");
    cursor.className = "tw-cursor";
    el.appendChild(cursor);
    return counter * STEP;
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

    if (link.featured) {
      const badgeEl = a.querySelector(".link-badge");
      if (badgeEl) badgeEl.style.transitionDelay = "0.05s";

      const titleEl = a.querySelector(".title");
      const typingDuration = typewriterize(titleEl);
      const stagger = [".subtitle", ".desc", ".cta-line", ".mini-strip"];
      stagger.forEach((sel, i) => {
        const el = a.querySelector(sel);
        if (el) el.style.transitionDelay = (typingDuration + 0.12 + i * 0.09).toFixed(2) + "s";
      });
    }

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
        <span class="agenda-date">
          <span class="dia">${evento.dia}</span>
          <span class="mes">${evento.mes}</span>
        </span>
        <span class="agenda-info">
          <span class="agenda-meta">
            <span class="local">${evento.local}</span>
            <span class="agenda-sep">|</span>
            ${evento.horario ? `<span class="agenda-hora">${evento.horario}</span><span class="agenda-sep">|</span>` : ""}
            <span class="agenda-format">${evento.formato || "Online"}</span>
          </span>
          <span class="tema">${evento.tema}</span>
          ${evento.cidadePais ? `<span class="agenda-cidade">${ICONS.pin || ""}${evento.cidadePais}</span>` : ""}
        </span>
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
      .map((line, i) => `<p class="role-line${i === 0 ? " is-primary" : ""}">${line.split("|").map(s => s.trim()).join(' <span class="sep">|</span> ')}</p>`)
      .join("");

    const badgesHost = $("#cred-badges");
    if (badgesHost) {
      badgesHost.innerHTML = (d.hero.badges || [])
        .map((b) => `
          <span class="cred-badge">
            <span class="cred-indicator"><span class="cred-ring"></span><span class="cred-dot"></span></span>
            ${b.label} <strong>${b.org}</strong>
          </span>
        `)
        .join("");
    }

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
    $("#agenda-heading").textContent = d.ui.agendaHeading;
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

    // Carrossel de marcas (rodapé)
    const brandCarousel = $("#brand-carousel-track");
    if (brandCarousel) {
      const marcas = [
        { src: "images/marcas/marca-podcast.png", alt: "Podcast Diário do Treinador" },
        { src: "images/marcas/marca-comunidade.png", alt: "Comunidade Diário do Treinador" },
        { src: "images/marcas/marca-mentoria.png", alt: "Mentoria Diário do Treinador" },
        { src: "images/marcas/marca-bestsellers.png", alt: "Best Sellers Aplicados ao Futebol" }
      ];
      const buildImgs = () =>
        marcas.map((m) => `<img src="${m.src}" alt="${m.alt}" loading="lazy" />`).join("");
      brandCarousel.innerHTML = buildImgs() + buildImgs();
    }

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

    wrap.innerHTML = LANGS.map((l) => `
      <button
        type="button"
        class="lang-option${l.code === currentLang ? " is-active" : ""}"
        data-lang="${l.code}"
        title="${l.label}"
        aria-label="${l.label}"
        aria-pressed="${l.code === currentLang}"
      >
        <span class="lang-flag">${l.flag}</span>
      </button>
    `).join("");

    wrap.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang === currentLang) return;
        currentLang = lang;
        localStorage.setItem("dt_lang", lang);
        render();
        renderLangSwitcher();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    render();
    renderLangSwitcher();
  });
})();
