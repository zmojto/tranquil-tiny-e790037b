# Pridanie Plausible analytics do index.html

## Zmena
Do `<head>` v `index.html` pridať tesne pred zatvárací `</head>` tag nasledujúci script tag:

```html
<script defer data-domain="samavesa.sk" src="https://analytics.samavesa.sk/js/script.js"></script>
```

## Detail
- Súbor: `index.html`
- Miesto vloženia: medzi posledným existujúcim meta tagom (twitter:image, riadok 24) a `</head>` (riadok 25)
- Žiadne iné zmeny v hlavičke ani v zvyšku súboru

## Overenie
- Po zmene skontrolujem, že script tag je prítomný tesne pred `</head>` a že zvyšok `<head>` ostal nezmenený.
