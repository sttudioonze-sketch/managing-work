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

  // Efeito de "digitação" em loop: separa o texto de um título em spans por
  // caractere (preservando tags internas, como o accent-word), revela um a
  // um, e depois de terminar espera 3s e digita de novo, em loop.
  function typewriterize(el) {
    const chars = [];
    function walk(node) {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const words = child.textContent.split(" ");
          const frag = document.createDocumentFragment();
          words.forEach((word, wi) => {
            if (word.length) {
              const wordSpan = document.createElement("span");
              wordSpan.className = "tw-word";
              Array.from(word).forEach((ch) => {
                const span = document.createElement("span");
                span.className = "tw-char";
                span.textContent = ch;
                wordSpan.appendChild(span);
                chars.push(span);
              });
              frag.appendChild(wordSpan);
            }
            if (wi < words.length - 1) {
              const spaceSpan = document.createElement("span");
              spaceSpan.className = "tw-char";
              spaceSpan.textContent = " ";
              frag.appendChild(spaceSpan);
              chars.push(spaceSpan);
            }
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

    const STEP_MIN = 30;    // ms mínimo entre letras
    const STEP_MAX = 110;   // ms máximo entre letras (mais variação = mais orgânico)
    const WORD_PAUSE = 180; // ms extra de pausa ao terminar uma palavra (no espaço)
    const THINK_CHANCE = 0.06; // chance de uma pausa maior no meio de uma palavra, como se a pessoa hesitasse
    const THINK_PAUSE = 260;   // ms dessa pausa de "hesitação"
    const PAUSE = 10000;    // ms parado antes de reiniciar

    function cycle() {
      let i = 0;
      function tick() {
        if (i < chars.length) {
          const char = chars[i];
          char.classList.add("is-in");
          // move o cursor pra logo depois da letra que acabou de aparecer
          char.insertAdjacentElement("afterend", cursor);
          const isSpace = char.textContent === " ";
          let delay = isSpace
            ? WORD_PAUSE
            : STEP_MIN + Math.random() * (STEP_MAX - STEP_MIN);
          if (!isSpace && Math.random() < THINK_CHANCE) delay += THINK_PAUSE;
          i++;
          setTimeout(tick, delay);
        } else {
          setTimeout(() => {
            chars.forEach((c) => c.classList.remove("is-in"));
            el.insertBefore(cursor, el.firstChild);
            setTimeout(cycle, 250);
          }, PAUSE);
        }
      }
      tick();
    }

    return { start: cycle, totalDuration: (chars.length * STEP_MAX) / 1000 };
  }

  function renderLinkRow(link, delay) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "link-card" + (link.featured ? " is-featured" : "") + (link.centered ? " is-centered" : "");
    a.href = link.url;
    a.target = (link.url.startsWith("mailto:") || link.internal) ? "_self" : "_blank";
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
        ${link.badge ? `<span class="link-badge">${link.badgeIcon ? `<span class="link-badge-icon">${iconSvg(link.badgeIcon)}</span>` : ""}${link.badge}</span>` : ""}
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
      const typewriter = typewriterize(titleEl);
      const stagger = [".subtitle", ".desc", ".cta-line", ".mini-strip"];
      stagger.forEach((sel, i) => {
        const el = a.querySelector(sel);
        if (el) el.style.transitionDelay = (typewriter.totalDuration + 0.12 + i * 0.09).toFixed(2) + "s";
      });
      // Guarda a função de início — só dispara quando o card entrar na tela
      a._startTyping = typewriter.start;
    }

    li.appendChild(a);
    return li;
  }

  function renderAgendaRow(evento, delay, inscreverSeLabel) {
    const li = document.createElement("li");
    const card = document.createElement("div");
    card.className = "agenda-row";
    card.style.transitionDelay = delay + "s";
    card.innerHTML = `
      <span class="agenda-top">
        <span class="agenda-date">
          <span class="dia">${evento.dia}</span>
          <span class="mes">${evento.mes}</span>
        </span>
        <span class="agenda-info">
          <span class="local">${evento.local}</span>
          <span class="agenda-pills">
            ${evento.cidadePais ? `<span class="agenda-pill">${ICONS.pin}${evento.cidadePais}</span>` : ""}
            ${evento.horario ? `<span class="agenda-pill">${ICONS.clock}${evento.horario}</span>` : ""}
            <span class="agenda-pill">${ICONS.format}${evento.formato || "Online"}</span>
          </span>
        </span>
      </span>
      <span class="agenda-tema-full">${evento.tema}</span>
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
    ["#hero-roles", "#social-row", "#grupo1-lista", "#agenda-lista", "#brand-track",
     "#grupo2-lista", "#grupo3-lista", "#grupo4-lista", "#footer-social"]
      .forEach((sel) => { const el = $(sel); if (el) el.innerHTML = ""; });
  }

  const BACK_LABELS = { pt: "Voltar", en: "Back", es: "Volver", ar: "رجوع" };

  function renderSocialRow(host, items) {
    if (!host) return;
    (items || []).forEach((item) => {
      const a = document.createElement("a");
      a.className = "social-btn";
      a.href = item.url;
      a.target = item.url.startsWith("mailto:") ? "_self" : "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = iconSvg(item.icone);
      host.appendChild(a);
    });
  }

  function render() {
    const d = SITE_DATA[currentLang];
    clearContainers();

    // <html lang="..."> e direção do texto (árabe é RTL)
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    // ---------- PÁGINA 1: Hero (Gabriel Bussinger) ----------
    const heroAvatar = $("#hero-avatar");
    if (heroAvatar) {
      heroAvatar.src = d.hero.avatar;
      $("#hero-nome").innerHTML = `<img src="images/assinatura-gabriel.png" alt="${d.hero.nome}" class="signature-img" />`;

      const rolesHost = $("#hero-roles");
      rolesHost.innerHTML = (d.hero.roleLines || [])
        .map((line, i) => {
          if (i === 0) return `<p class="role-line is-primary">${line}</p>`;
          return `<p class="role-line"><span class="role-dot"></span>${line}</p>`;
        })
        .join("");

      const badgesHost = $("#cred-badges");
      if (badgesHost) {
        badgesHost.innerHTML = (d.hero.badges || [])
          .map((b) => `
            <span class="cred-badge">
              <span class="cred-indicator"><span class="cred-dot"></span></span>
              ${b.label} <strong>${b.org}</strong>
            </span>
          `)
          .join("");
      }

      renderSocialRow($("#social-row"), d.socialRow);
    }

    // ---------- PÁGINA 1: Caixa 1 — Newsletter + Podcast ----------
    const g1 = $("#grupo1-lista");
    if (g1 && d.grupo1) {
      const g1TituloEl = $("#grupo1-titulo");
      if (g1TituloEl) g1TituloEl.textContent = d.ui.grupo1Titulo;
      const g1SubtituloEl = $("#grupo1-subtitulo");
      if (g1SubtituloEl) g1SubtituloEl.textContent = d.ui.grupo1Subtitulo;
      d.grupo1.links.forEach((link, i) => g1.appendChild(renderLinkRow(link, i * 0.06)));
    }

    // ---------- PÁGINA 1: Caixa 2 — Agenda ----------
    const agendaHost = $("#agenda-lista");
    if (agendaHost && d.agenda) {
      const agendaTituloEl = $("#agenda-titulo");
      if (agendaTituloEl) agendaTituloEl.textContent = d.ui.agendaTitulo;
      const agendaHeadingEl = $("#agenda-heading");
      if (agendaHeadingEl) agendaHeadingEl.textContent = d.ui.agendaHeading;
      d.agenda.eventos.forEach((ev, i) => agendaHost.appendChild(renderAgendaRow(ev, i * 0.06, d.ui.inscreverSe)));
    }

    // ---------- PÁGINA 1: Caixa 3 — Palestras e Eventos (contato) ----------
    const g3 = $("#grupo3-lista");
    if (g3 && d.contato) {
      g3.appendChild(renderLinkRow(d.contato, 0));
    }

    // ---------- PÁGINA 1: Caixa 4 — Ecossistema (CTA pra página 2) ----------
    const g4 = $("#grupo4-lista");
    if (g4 && d.ecosystem) {
      g4.appendChild(renderLinkRow(d.ecosystem, 0));
    }

    // ---------- PÁGINA 2: Ecossistema Diário do Treinador ----------
    const grupo2Titulo = $("#grupo2-titulo");
    if (grupo2Titulo && d.grupo2) {
      $("#diario-eyebrow").textContent = d.ui.eyebrow;
      grupo2Titulo.textContent = d.grupo2.titulo;
      $("#grupo2-slogan").textContent = d.grupo2.slogan;

      const track = $("#brand-track");
      const checkDotSvg = `<span class="check-dot"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8.5"/><path class="tick" d="M6 10.3l2.6 2.6L14.2 7"/></svg></span>`;
      const buildBrandSet = () =>
        d.grupo2.marquee
          .map((nome) => `<span class="brand-item">${checkDotSvg}${nome}</span>`)
          .join("");
      track.innerHTML = buildBrandSet() + buildBrandSet();

      const lista2 = $("#grupo2-lista");
      d.grupo2.itens.forEach((link, i) => lista2.appendChild(renderLinkRow(link, i * 0.06)));
    }

    // Carrossel de marcas (rodapé da página 2)
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

    // Botão "Voltar" (só existe na página 2)
    const backLabel = $("#page2-back-label");
    if (backLabel) backLabel.textContent = BACK_LABELS[currentLang] || BACK_LABELS.pt;

    // ---------- Footer (as duas páginas) ----------
    const footerNome = $("#footer-nome");
    if (footerNome) {
      footerNome.innerHTML = `<img src="images/assinatura-gabriel.png" alt="${d.footer.nome}" class="signature-img signature-img-footer" />`;
      renderSocialRow($("#footer-social"), d.socialRow);
      $("#footer-ecossistema").textContent = d.footer.ecossistema;

      const isWhatsApp = /wa\.me|whatsapp\.com/i.test(d.footer.devUrl);
      let devHref = d.footer.devUrl;
      if (isWhatsApp && d.footer.devMensagem) {
        const sep = devHref.includes("?") ? "&" : "?";
        devHref += sep + "text=" + encodeURIComponent(d.footer.devMensagem);
      }
      const devEl = $("#footer-dev");
      devEl.innerHTML = `${d.footer.devLabel} <a href="${devHref}" target="_blank" rel="noopener noreferrer">${d.footer.devNome}</a> | <a href="${d.footer.portfolioUrl}" target="_blank" rel="noopener noreferrer">${d.footer.portfolioLabel}</a>`;
    }

    // Efeito de entrada ao rolar a página
    const revealTargets = document.querySelectorAll(".link-card, .agenda-row");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              if (typeof entry.target._startTyping === "function") entry.target._startTyping();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealTargets.forEach((el) => observer.observe(el));
    } else {
      revealTargets.forEach((el) => {
        el.classList.add("is-visible");
        if (typeof el._startTyping === "function") el._startTyping();
      });
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
