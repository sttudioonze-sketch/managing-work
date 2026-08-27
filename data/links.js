/**
 * ===================================================================
 *  DIÁRIO DO TREINADOR — arquivo de conteúdo (multi-idioma)
 * ===================================================================
 *  Edite SOMENTE os valores entre aspas " " abaixo para atualizar
 *  nomes, textos e links do site.
 *
 *  O site agora tem 4 idiomas: pt (Português), en (Inglês),
 *  es (Espanhol) e ar (Árabe) — cada um é um bloco separado abaixo.
 *  Links, e-mails e telefones são os MESMOS em todos os idiomas —
 *  só o texto muda. Se editar um link, edite em todos os 4 blocos.
 *
 *  ⚠️ As traduções de inglês e espanhol foram feitas automaticamente
 *  e devem ser revisadas. A tradução em árabe É ESPECIALMENTE
 *  recomendável revisar com um falante nativo antes de divulgar,
 *  por ser um idioma com estrutura muito diferente do português.
 * ===================================================================
 */

const SUPORTE_URL = "https://wa.me/5551991736138";

const SITE_DATA = {

  // ================================================================
  // PORTUGUÊS (padrão)
  // ================================================================
  pt: {
    ui: { eyebrow: "Ecossistema", inscreverSe: "Inscrever-se", agendaHeading: "Palestras, Cursos e Eventos" },
    hero: {
      avatar: "images/avatar.png",
      nome: "Gabriel Bussinger",
      roleLines: [
        "Coordenador Técnico Geral no Vasco da Gama SAF",
        "Instrutor Conmebol | Instrutor CBF",
        "Mentor de Profissionais do Futebol | Idealizador do Podcast Diário do Treinador"
      ]
    },
    socialRow: [
      { icone: "linkedin", url: "https://www.linkedin.com/in/gabriel-bussinger-66132370/" },
      { icone: "instagram", url: "https://www.instagram.com/gabrielbussinger/" },
      { icone: "spotify", url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o" },
      { icone: "mail", url: "mailto:gabrieltreinador33@gmail.com" }
    ],
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
          titulo: '<span class="accent-word">Palestras</span> e Eventos',
          descricao: "Fale direto com o Gabriel",
          url: "mailto:gabrieltreinador33@gmail.com",
          icone: "mail"
        }
      ]
    },
    agenda: {
      titulo: "Próximos Eventos",
      eventos: [
        {
          dia: "07",
          mes: "SET",
          tema: "Metodologia Centrada no Atleta",
          local: "Federação Gaúcha de Futebol",
          cidadePais: "Porto Alegre, Brasil", // opcional — útil sobretudo para eventos no exterior
          horario: "19:00",
          formato: "Físico",
          url: "https://SUBSTITUA-LINK-DE-INSCRICAO"
        }
      ]
    },
    grupo2: {
      titulo: "Diário do Treinador",
      slogan: "Formando e Desenvolvendo Integralmente Profissionais que trabalham no Futebol",
      marquee: ["Mindset", "Desenvolvimento Profissional", "Desenvolvimento Pessoal", "Leitura", "Network", "Autoconhecimento"],
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
          url: "https://pay.hotmart.com/I103504037F?off=nhfhufix",
          icone: "target",
          featured: true
        },
        {
          titulo: '<span class="accent-word">Best Sellers</span> Aplicados ao Futebol',
          badge: "Cursos on-line",
          subtitulo: "Com Gabriel Bussinger",
          descricao: "Acesse os insights de grandes mentes da literatura mundial e aplique ao futebol",
          url: "https://pay.hotmart.com/W104537174A?checkoutMode=10&bid=1787765134118",
          icone: "play",
          featured: true,
          livros: [
            { titulo: "Comece pelo Porquê", autor: "Simon Sinek" },
            { titulo: "O Poder da Ação", autor: "[Substitua pelo autor]" },
            { titulo: "A Coragem de Ser Imperfeito", autor: "Brené Brown" },
            { titulo: "Em breve, outros títulos" }
          ]
        },
        {
          titulo: 'Canal do <span class="accent-word">Youtube</span>',
          descricao: "Palestras, Podcasts e conteúdos aprofundados, para profissionais do futebol",
          url: "https://www.youtube.com/@gabrielbussinger3386",
          icone: "youtube"
        },
        {
          titulo: '<span class="accent-word">Suporte</span>',
          descricao: "Precisa de ajuda? Tem dúvida? Chama aqui e vamos conversar!",
          url: SUPORTE_URL,
          icone: "whatsapp"
        }
      ]
    },
    footer: {
      nome: "Gabriel Bussinger",
      ecossistema: "Ecossistema Diário do Treinador",
      devLabel: "Desenvolvimento",
      devNome: "Sttudio11WD",
      devUrl: SUPORTE_URL,
      devMensagem: "Olá Luis, gostaria de saber sobre seus serviços"
    }
  },

  // ================================================================
  // ENGLISH
  // ================================================================
  en: {
    ui: { eyebrow: "Ecosystem", inscreverSe: "Sign up", agendaHeading: "Talks, Courses & Events" },
    hero: {
      avatar: "images/avatar.png",
      nome: "Gabriel Bussinger",
      roleLines: [
        "General Technical Coordinator at Vasco da Gama SAF",
        "Conmebol Instructor | CBF Instructor",
        "Mentor for Football Professionals | Creator of the Coach's Diary Podcast"
      ]
    },
    socialRow: [
      { icone: "linkedin", url: "https://www.linkedin.com/in/gabriel-bussinger-66132370/" },
      { icone: "instagram", url: "https://www.instagram.com/gabrielbussinger/" },
      { icone: "spotify", url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o" },
      { icone: "mail", url: "mailto:gabrieltreinador33@gmail.com" }
    ],
    grupo1: {
      titulo: "Gabriel Bussinger",
      links: [
        {
          titulo: 'Subscribe to my <span class="accent-word">Newsletter</span>',
          descricao: "Follow on LinkedIn",
          url: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7462991799133855744",
          icone: "linkedin"
        },
        {
          titulo: '<span class="accent-word">Talks</span> & Events',
          descricao: "Get in touch with Gabriel directly",
          url: "mailto:gabrieltreinador33@gmail.com",
          icone: "mail"
        }
      ]
    },
    agenda: {
      titulo: "Upcoming Events",
      eventos: [
        {
          dia: "07",
          mes: "SEP",
          tema: "Athlete-Centered Methodology",
          local: "Rio Grande do Sul Football Federation",
          horario: "19:00",
          formato: "In-person",
          url: "https://SUBSTITUA-LINK-DE-INSCRICAO"
        }
      ]
    },
    grupo2: {
      titulo: "Coach's Diary",
      slogan: "Fully training and developing professionals who work in football",
      marquee: ["Mindset", "Professional Development", "Personal Development", "Reading", "Network", "Self-Knowledge"],
      itens: [
        {
          titulo: `<span class="accent-word">Podcast</span> — Coach's Diary`,
          descricao: "Hey football lovers! This is a podcast with a coach's reflections on the job — check it out!",
          url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o",
          icone: "spotify"
        },
        {
          titulo: 'Open <span class="accent-word">WhatsApp</span> Group',
          descricao: "Coach's Diary community",
          url: "https://chat.whatsapp.com/Gy7ilSwjdTG2no4LeDbzgm",
          icone: "whatsapp"
        },
        {
          titulo: `<span class="accent-word">Mentorship</span> — Coach's Diary`,
          badge: "2026 Season — Enrollment open",
          subtitulo: "Learn it, apply it, transform",
          descricao: "Professional and personal development for coaches and football professionals",
          cta: "Enroll now!",
          url: "https://pay.hotmart.com/I103504037F?off=nhfhufix",
          icone: "target",
          featured: true
        },
        {
          titulo: '<span class="accent-word">Best Sellers</span> Applied to Football',
          badge: "Online courses",
          subtitulo: "With Gabriel Bussinger",
          descricao: "Access insights from great minds of world literature and apply them to football",
          url: "https://pay.hotmart.com/W104537174A?checkoutMode=10&bid=1787765134118",
          icone: "play",
          featured: true,
          livros: [
            { titulo: "Start With Why", autor: "Simon Sinek" },
            { titulo: "The Power of Action", autor: "[Replace with author]" },
            { titulo: "The Gifts of Imperfection", autor: "Brené Brown" },
            { titulo: "More titles coming soon" }
          ]
        },
        {
          titulo: 'YouTube <span class="accent-word">Channel</span>',
          descricao: "Talks, podcasts and in-depth content for football professionals",
          url: "https://www.youtube.com/@gabrielbussinger3386",
          icone: "youtube"
        },
        {
          titulo: '<span class="accent-word">Support</span>',
          descricao: "Need help? Have a question? Reach out and let's talk!",
          url: SUPORTE_URL,
          icone: "whatsapp"
        }
      ]
    },
    footer: {
      nome: "Gabriel Bussinger",
      ecossistema: "Coach's Diary Ecosystem",
      devLabel: "Built by",
      devNome: "Sttudio11WD",
      devUrl: SUPORTE_URL,
      devMensagem: "Hi Luis, I'd like to know more about your services"
    }
  },

  // ================================================================
  // ESPAÑOL
  // ================================================================
  es: {
    ui: { eyebrow: "Ecosistema", inscreverSe: "Inscribirse", agendaHeading: "Charlas, Cursos y Eventos" },
    hero: {
      avatar: "images/avatar.png",
      nome: "Gabriel Bussinger",
      roleLines: [
        "Coordinador Técnico General en Vasco da Gama SAF",
        "Instructor Conmebol | Instructor CBF",
        "Mentor de Profesionales del Fútbol | Creador del Podcast Diario del Entrenador"
      ]
    },
    socialRow: [
      { icone: "linkedin", url: "https://www.linkedin.com/in/gabriel-bussinger-66132370/" },
      { icone: "instagram", url: "https://www.instagram.com/gabrielbussinger/" },
      { icone: "spotify", url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o" },
      { icone: "mail", url: "mailto:gabrieltreinador33@gmail.com" }
    ],
    grupo1: {
      titulo: "Gabriel Bussinger",
      links: [
        {
          titulo: 'Suscribirme al <span class="accent-word">Newsletter</span>',
          descricao: "Sígueme en LinkedIn",
          url: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7462991799133855744",
          icone: "linkedin"
        },
        {
          titulo: '<span class="accent-word">Charlas</span> y Eventos',
          descricao: "Habla directo con Gabriel",
          url: "mailto:gabrieltreinador33@gmail.com",
          icone: "mail"
        }
      ]
    },
    agenda: {
      titulo: "Próximos Eventos",
      eventos: [
        {
          dia: "07",
          mes: "SEP",
          tema: "Metodología Centrada en el Atleta",
          local: "Federación Gaúcha de Fútbol",
          horario: "19:00",
          formato: "Presencial",
          url: "https://SUBSTITUA-LINK-DE-INSCRICAO"
        }
      ]
    },
    grupo2: {
      titulo: "Diario del Entrenador",
      slogan: "Formando y desarrollando integralmente a los profesionales que trabajan en el fútbol",
      marquee: ["Mentalidad", "Desarrollo Profesional", "Desarrollo Personal", "Lectura", "Red de Contactos", "Autoconocimiento"],
      itens: [
        {
          titulo: '<span class="accent-word">Podcast</span> Diario del Entrenador',
          descricao: "¡Hola, amantes del fútbol! Este es un podcast sobre las reflexiones de un entrenador y su práctica, ¡échale un vistazo!",
          url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o",
          icone: "spotify"
        },
        {
          titulo: 'Grupo Abierto de <span class="accent-word">WhatsApp</span>',
          descricao: "Comunidad del Diario del Entrenador",
          url: "https://chat.whatsapp.com/Gy7ilSwjdTG2no4LeDbzgm",
          icone: "whatsapp"
        },
        {
          titulo: '<span class="accent-word">Mentoría</span> Diario del Entrenador',
          badge: "Temporada 2026 — Inscripciones abiertas",
          subtitulo: "Conoce, aplica, transforma",
          descricao: "Desarrollo profesional y personal para entrenadores y profesionales del fútbol",
          cta: "¡Inscríbete!",
          url: "https://pay.hotmart.com/I103504037F?off=nhfhufix",
          icone: "target",
          featured: true
        },
        {
          titulo: '<span class="accent-word">Best Sellers</span> Aplicados al Fútbol',
          badge: "Cursos en línea",
          subtitulo: "Con Gabriel Bussinger",
          descricao: "Accede a los conocimientos de grandes mentes de la literatura mundial y aplícalos al fútbol",
          url: "https://pay.hotmart.com/W104537174A?checkoutMode=10&bid=1787765134118",
          icone: "play",
          featured: true,
          livros: [
            { titulo: "Empieza con el Porqué", autor: "Simon Sinek" },
            { titulo: "El Poder de la Acción", autor: "[Reemplace con el autor]" },
            { titulo: "Los Dones de la Imperfección", autor: "Brené Brown" },
            { titulo: "Próximamente, más títulos" }
          ]
        },
        {
          titulo: 'Canal de <span class="accent-word">YouTube</span>',
          descricao: "Charlas, podcasts y contenidos a profundidad, para profesionales del fútbol",
          url: "https://www.youtube.com/@gabrielbussinger3386",
          icone: "youtube"
        },
        {
          titulo: '<span class="accent-word">Soporte</span>',
          descricao: "¿Necesitas ayuda? ¿Tienes una duda? ¡Escríbeme y conversemos!",
          url: SUPORTE_URL,
          icone: "whatsapp"
        }
      ]
    },
    footer: {
      nome: "Gabriel Bussinger",
      ecossistema: "Ecosistema Diario del Entrenador",
      devLabel: "Desarrollado por",
      devNome: "Sttudio11WD",
      devUrl: SUPORTE_URL,
      devMensagem: "Hola Luis, me gustaría saber sobre tus servicios"
    }
  },

  // ================================================================
  // العربية (ARABIC) — ⚠️ revisar com falante nativo antes de publicar
  // ================================================================
  ar: {
    ui: { eyebrow: "منظومة", inscreverSe: "سجّل الآن", agendaHeading: "محاضرات ودورات وفعاليات" },
    hero: {
      avatar: "images/avatar.png",
      nome: "غابرييل بوسينجر",
      roleLines: [
        "المنسق الفني العام في فاسكو دا جاما SAF",
        "مدرب كونميبول | مدرب الاتحاد البرازيلي لكرة القدم",
        "موجّه لمحترفي كرة القدم | مؤسس بودكاست يوميات المدرب"
      ]
    },
    socialRow: [
      { icone: "linkedin", url: "https://www.linkedin.com/in/gabriel-bussinger-66132370/" },
      { icone: "instagram", url: "https://www.instagram.com/gabrielbussinger/" },
      { icone: "spotify", url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o" },
      { icone: "mail", url: "mailto:gabrieltreinador33@gmail.com" }
    ],
    grupo1: {
      titulo: "غابرييل بوسينجر",
      links: [
        {
          titulo: 'اشترك في <span class="accent-word">النشرة الإخبارية</span>',
          descricao: "تابعني على LinkedIn",
          url: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7462991799133855744",
          icone: "linkedin"
        },
        {
          titulo: '<span class="accent-word">محاضرات</span> وفعاليات',
          descricao: "تواصل مباشرة مع غابرييل",
          url: "mailto:gabrieltreinador33@gmail.com",
          icone: "mail"
        }
      ]
    },
    agenda: {
      titulo: "الفعاليات القادمة",
      eventos: [
        {
          dia: "07",
          mes: "سبتمبر",
          tema: "منهجية محورها الرياضي",
          local: "اتحاد كرة القدم لولاية ريو غراندي دو سول",
          horario: "19:00",
          formato: "حضوري",
          url: "https://SUBSTITUA-LINK-DE-INSCRICAO"
        }
      ]
    },
    grupo2: {
      titulo: "يوميات المدرب",
      slogan: "تكوين وتطوير شامل للمحترفين العاملين في كرة القدم",
      marquee: ["العقلية", "التطور المهني", "التطور الشخصي", "القراءة", "شبكة العلاقات", "معرفة الذات"],
      itens: [
        {
          titulo: '<span class="accent-word">بودكاست</span> يوميات المدرب',
          descricao: "أهلاً بمحبي كرة القدم! هذا بودكاست حول تأملات مدرب وممارسته المهنية، استمع إليه!",
          url: "https://open.spotify.com/show/1mE62qrGMhtvwLj2batf2o",
          icone: "spotify"
        },
        {
          titulo: 'مجموعة <span class="accent-word">واتساب</span> مفتوحة',
          descricao: "مجتمع يوميات المدرب",
          url: "https://chat.whatsapp.com/Gy7ilSwjdTG2no4LeDbzgm",
          icone: "whatsapp"
        },
        {
          titulo: '<span class="accent-word">الإرشاد</span> — يوميات المدرب',
          badge: "موسم 2026 — التسجيل متاح",
          subtitulo: "تعرّف، طبّق، تحوّل",
          descricao: "تطور مهني وشخصي للمدربين ومحترفي كرة القدم",
          cta: "سجّل الآن!",
          url: "https://pay.hotmart.com/I103504037F?off=nhfhufix",
          icone: "target",
          featured: true
        },
        {
          titulo: '<span class="accent-word">أفضل الكتب مبيعاً</span> المطبّقة على كرة القدم',
          badge: "دورات عبر الإنترنت",
          subtitulo: "مع غابرييل بوسينجر",
          descricao: "اطّلع على أفكار كبار مفكري الأدب العالمي وطبّقها على كرة القدم",
          url: "https://pay.hotmart.com/W104537174A?checkoutMode=10&bid=1787765134118",
          icone: "play",
          featured: true,
          livros: [
            { titulo: "ابدأ بالسؤال: لماذا", autor: "سايمون سينك" },
            { titulo: "قوة الفعل", autor: "[استبدل باسم المؤلف]" },
            { titulo: "هدايا النقص", autor: "برينيه براون" },
            { titulo: "عناوين جديدة قريباً" }
          ]
        },
        {
          titulo: 'قناة <span class="accent-word">يوتيوب</span>',
          descricao: "محاضرات وبودكاست ومحتوى معمّق لمحترفي كرة القدم",
          url: "https://www.youtube.com/@gabrielbussinger3386",
          icone: "youtube"
        },
        {
          titulo: '<span class="accent-word">الدعم</span>',
          descricao: "تحتاج مساعدة؟ لديك سؤال؟ تواصل معنا هنا!",
          url: SUPORTE_URL,
          icone: "whatsapp"
        }
      ]
    },
    footer: {
      nome: "غابرييل بوسينجر",
      ecossistema: "منظومة يوميات المدرب",
      devLabel: "تطوير",
      devNome: "Sttudio11WD",
      devUrl: SUPORTE_URL,
      devMensagem: "مرحباً لويس، أود معرفة المزيد عن خدماتك"
    }
  }
};
