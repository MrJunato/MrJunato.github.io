# Portfólio — Renato Melo

Site estático de uma página. Sem framework, sem build, sem rastreador.

**Ao vivo:** https://mrjunato.github.io/

## Estrutura

```
index.html                 conteúdo (PT no HTML, EN via dicionário)
assets/css/styles.css      design system em custom properties
assets/js/i18n.js          dicionário PT/EN + toggle, persistido em localStorage
assets/js/main.js          filtros de projeto + seção ativa no rail
assets/img/projects/       capturas de tela dos projetos
.nojekyll                  desliga o processamento Jekyll no GitHub Pages
```

## Rodar localmente

Qualquer servidor estático serve. Por exemplo:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Publicar no GitHub Pages

O repositório precisa se chamar `MrJunato.github.io` para a URL ficar na raiz.

```bash
git init
git add .
git commit -m "feat: portfólio inicial"
git branch -M main
git remote add origin https://github.com/MrJunato/MrJunato.github.io.git
git push -u origin main
```

Em seguida, no GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**. A publicação leva um ou dois minutos.

## Editar conteúdo

Toda string traduzível carrega um atributo `data-i18n="chave"`. O português vive no HTML e também no dicionário; o inglês vive só no dicionário.

Ao adicionar texto novo:

1. escreva o português no `index.html` com um `data-i18n` novo;
2. adicione a mesma chave em `pt` **e** em `en` dentro de `assets/js/i18n.js`.

Chave faltando não quebra a página — ela avisa no console do navegador.

## Design

A direção visual vem das duas graduações em mecânica de precisão: prancha de desenho técnico, cotas dimensionadas e fichas de dados. Archivo (display, eixo de largura), Source Serif 4 (corpo) e IBM Plex Mono (dados). Tema claro e escuro seguem a preferência do sistema.
