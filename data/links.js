/**
 * ===================================================================
 *  DIÁRIO DO TREINADOR — arquivo de conteúdo
 * ===================================================================
 *  Edite SOMENTE os valores entre aspas " " abaixo para atualizar
 *  nomes, textos e links do site. Não é necessário mexer em nenhum
 *  outro arquivo (.html, .css, .js) para isso.
 *
 *  Para ADICIONAR um botão/evento novo: copie um bloco { ... } inteiro,
 *  cole logo abaixo do último da mesma lista, e troque os textos/links.
 *  Para REMOVER: apague o bloco { ... } inteiro dele.
 *
 *  A ORDEM dos itens nas listas é a ordem em que aparecem no site —
 *  para reordenar, basta mudar a posição do bloco { ... } na lista.
 * ===================================================================
 */

const SUPORTE_URL = "https://www.instagram.com/luisestevessttudio11?igsh=dnYydGlwdWZlZmxq";

const SITE_DATA = {

  // ================================================================
  // PAINEL 1 — GABRIEL BUSSINGER (marca pessoal)
  // ================================================================
  hero: {
    avatar: "images/avatar.png",
    nome: "Gabriel Bussinger",
    // Cada string vira uma LINHA. Use " | " para separar itens na mesma linha.
    roleLines: [
      "Coordenador Técnico Geral no Vasco da Gama SAF",
      "Instrutor Conmebol | Instrutor CBF",
      "Mentor de Profissionais do Futebol | Idealizador do Podcast Diário do Treinador"
    ]
  },

  // Ícones sociais (topo, atalho rápido) — redes pessoais do Gabriel.
  socialRow: [
    { icone: "linkedin", url: "https://www.linkedin.com/in/gabriel-bussinger-66132370/" },
    { icone: "instagram", url: "https://www.instagram.com/gabrielbussinger/" },
    { icone: "spotify", url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o" },
    { icone: "mail", url: "mailto:gabrieltreinador33@gmail.com" }
  ],

  // Botões principais do Gabriel (newsletter + contato profissional).
  grupo1: {
    titulo: "Gabriel Bussinger",
    links: [
      {
        titulo: 'Assinar <span class="accent-word">Newsletter</span>',
        descricao: "Acompanhe no LinkedIn",
        url: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7462991799133855744",
        icone: "linkedin"
      },
      {
        titulo: 'Contato para <span class="accent-word">Cursos e Palestras</span>',
        descricao: "Fale direto com o Gabriel",
        url: "mailto:gabrieltreinador33@gmail.com",
        icone: "mail"
      }
    ]
  },

  // Agenda de próximos eventos (Tema, Local, Data + botão de inscrição).
  // ⚠️ Exemplo com dados fictícios — substitua pelos eventos reais.
  agenda: {
    titulo: "Próximos Eventos",
    eventos: [
      {
        dia: "15",
        mes: "SET",
        tema: "[Substitua pelo tema do evento]",
        local: "[Substitua pelo local]",
        formato: "Online", // "Online" ou "Físico"
        url: "https://SUBSTITUA-LINK-DE-INSCRICAO"
      },
      {
        dia: "02",
        mes: "OUT",
        tema: "[Substitua pelo tema do evento]",
        local: "[Substitua pelo local]",
        formato: "Físico", // "Online" ou "Físico"
        url: "https://SUBSTITUA-LINK-DE-INSCRICAO"
      }
    ]
  },

  // ================================================================
  // PAINEL 2 — ECOSSISTEMA DIÁRIO DO TREINADOR
  // ================================================================
  grupo2: {
    titulo: "Diário do Treinador",
    slogan: "Formando e Desenvolvendo Integralmente Profissionais que trabalham no Futebol",

    // Faixa/carrossel contínuo — usa as mesmas palavras das antigas caixas flutuantes.
    marquee: [
      "Mindset",
      "Desenvolvimento Profissional",
      "Desenvolvimento Pessoal",
      "Leitura",
      "Network",
      "Autoconhecimento"
    ],

    // Lista única, NA ORDEM em que devem aparecer.
    // "featured: true" deixa o botão maior e em cor diferenciada (Mentoria e Cursos).
    itens: [
      {
        titulo: '<span class="accent-word">Podcast</span> Diário do Treinador',
        descricao: "Salve salve amantes do futebol! Esse é um Podcast sobre reflexões de um treinador e sua prática, confira!",
        url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o",
        icone: "spotify"
      },
      {
        titulo: 'Grupo Aberto no <span class="accent-word">WhatsApp</span>',
        descricao: "Comunidade do Diário do Treinador",
        url: "https://chat.whatsapp.com/Gy7ilSwjdTG2no4LeDbzgm",
        icone: "whatsapp"
      },
      {
        titulo: '<span class="accent-word">Mentoria</span> Diário do Treinador',
        badge: "Temporada 2026 — Inscrições disponíveis",
        subtitulo: "Conheça, aplique e transforme",
        descricao: "Desenvolvimento Profissional e Pessoal para Treinadores e profissionais do futebol",
        cta: "Inscreva-se!",
        url: "https://SUBSTITUA-LINK-DA-LANDING-PAGE-MENTORIA",
        icone: "target",
        featured: true
      },
      {
        titulo: '<span class="accent-word">Best Sellers</span> Aplicados ao Futebol',
        badge: "Cursos on-line",
        subtitulo: "Com Gabriel Bussinger",
        descricao: "Acesse os insights de grandes mentes da literatura mundial e aplique ao futebol",
        url: "https://SUBSTITUA-LINK-DA-LANDING-PAGE-CURSO",
        icone: "play",
        featured: true,
        // Livros usados no curso — título + autor, rolando na parte inferior do botão.
        livros: [
          { titulo: "Comece pelo Porquê", autor: "Simon Sinek" },
          { titulo: "O Poder da Ação", autor: "[Substitua pelo autor]" },
          { titulo: "A Coragem de Ser Imperfeito", autor: "Brené Brown" },
          { titulo: "Em breve, outros títulos" }
        ]
      },
      {
        titulo: 'Meu canal no <span class="accent-word">Youtube</span>',
        descricao: "Palestras, Podcasts e conteúdos aprofundados, para profissionais do futebol",
        url: "https://www.youtube.com/@gabrielbussinger3386",
        icone: "youtube"
      },
      {
        titulo: '<span class="accent-word">Suporte</span>',
        // ⚠️ O link enviado para "Suporte" aponta para um perfil do Instagram,
        // não um WhatsApp/canal de suporte. Confirme o link correto para eu ajustar.
        // Se for um número de WhatsApp, me envie que eu troco para um link
        // wa.me — aí a mensagem pré-definida abaixo passa a funcionar de verdade.
        descricao: "Precisa de ajuda? Tem dúvida? Chama aqui e vamos conversar!",
        url: SUPORTE_URL,
        icone: "whatsapp"
      }
    ]
  },

  // ------------------ RODAPÉ ------------------
  footer: {
    nome: "Gabriel Bussinger",
    ecossistema: "Ecossistema Diário do Treinador",
    devLabel: "Desenvolvimento",
    devNome: "Sttudio11WD",
    devUrl: SUPORTE_URL,
    // Mensagem pré-preenchida ao clicar — só funciona de fato se devUrl for um link wa.me/whatsapp.
    devMensagem: "Olá Luis, gostaria de saber sobre seus serviços"
  }
};
