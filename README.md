# Diário do Treinador — Site (Página Inicial)

## Estrutura
```
index.html          → estrutura da página (não precisa editar)
css/style.css        → visual do site (não precisa editar)
js/main.js            → lógica que monta os botões (não precisa editar)
js/icons.js            → ícones (não precisa editar)
data/links.js     ⭐  → ARQUIVO QUE VOCÊ EDITA (nomes, textos e links)
images/hero.png       → foto do topo (pode ser substituída)
```

## Como editar conteúdo
Abra `data/links.js`. Cada botão é um bloco assim:
```js
{
  titulo: "Newsletter no LinkedIn",
  descricao: "Bastidores, gestão e carreira no futebol",
  url: "https://www.linkedin.com/in/SUBSTITUA-AQUI",
  icone: "linkedin"
}
```
- Troque o texto entre aspas em `titulo`, `descricao` e `url`.
- Para **adicionar** um botão novo: copie um bloco inteiro `{ ... }`, cole abaixo do último da mesma lista (separando com vírgula) e edite os textos.
- Para **remover** um botão: apague o bloco inteiro.
- Ícones disponíveis: `linkedin`, `mail`, `target`, `play`, `whatsapp`, `spotify`, `youtube`, `instagram`.

## ⚠️ Links que faltam preencher
Os seguintes campos ainda estão com texto de exemplo — troque pelos links reais antes de publicar:
- Newsletter LinkedIn do Gabriel
- E-mail de contato (Cursos e Palestras)
- Landing page da Mentoria
- Landing page do Curso Best Seller
- Grupo do WhatsApp
- Podcast no Spotify
- YouTube
- Instagram

## Como trocar a foto do topo
Substitua o arquivo `images/hero.png` por uma nova imagem **com o mesmo nome** — o site atualiza sozinho.

## Como publicar (GitHub + Vercel)
1. Crie um repositório novo no GitHub e envie todos esses arquivos para ele.
2. Entre em [vercel.com](https://vercel.com), clique em **Add New → Project**.
3. Selecione o repositório do GitHub.
4. Como é um site estático (HTML puro), não precisa configurar build command nem output directory — clique em **Deploy**.
5. Pronto: toda vez que você editar `data/links.js` (ou qualquer arquivo) e enviar (`git push`) para o GitHub, a Vercel atualiza o site sozinha em segundos.

## Próximos passos combinados
- Criar as landing pages internas (Mentoria e Curso Best Seller) como sub-páginas do site.
- Preencher os links reais listados acima.
- Avaliar um painel administrativo (ex: Decap CMS) para editar tudo por uma interface visual, sem abrir o código.
