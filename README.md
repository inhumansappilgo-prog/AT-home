# MARVEL'S AXIAL — Página Inicial

Página de apresentação da Terra Axial baseada na arquitetura holográfica da página de Cronologia.

## Arquivos para publicar no GitHub Pages

Envie estes arquivos para a raiz do repositório:

- `index.html`
- `styles.css`
- `app.js`
- `inicio-standalone.html` — opcional

O GitHub Pages abrirá automaticamente o `index.html`.

## Imagem principal

A arte é carregada diretamente deste endereço:

`https://i.imgur.com/Tc7SVUE.png`

O filtro vermelho analógico é construído por CSS, com:

- conversão parcial em escala de cinza;
- sobreposição cromática vermelha;
- vinheta;
- scanlines;
- deslocamento irregular de sinal;
- respiração lenta da imagem.

## Navegação oficial

- Início: https://universoaxial.tumblr.com/home
- Cronologia: https://universoaxial.tumblr.com/cronologia
- Ambientação: https://universoaxial.tumblr.com/ambientacao
- Pacotes: https://universoaxial.tumblr.com/pacotes
- Legados: https://universoaxial.tumblr.com/legados
- Extras: https://universoaxial.tumblr.com/extras

Todos os links usam `target="_top"` para sair corretamente do iframe do Tumblr.

## Iframe para o Tumblr

Substitua `LINK-DO-GITHUB-PAGES` pelo endereço publicado:

```html
<title>MARVEL'S AXIAL</title>

<link
  rel="icon"
  type="image/png"
  href="https://i.imgur.com/yiuD6Ad.png"
>

<iframe
  src="LINK-DO-GITHUB-PAGES"
  title="MARVEL'S AXIAL — INÍCIO"
  style="position:fixed;top:0;left:0;width:100%;height:100%;border:0;margin:0;padding:0;overflow:auto;z-index:999999;">
</iframe>
```
