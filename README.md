# Laura’s Quality Catering

Samostatný jednostránkový web v angličtině. Vizuální návrh vychází z dodané reference, používá vlastní fotografie klienta. Bez instalace balíčků; stačí Node.js 18+.

## Spuštění

```sh
npm run dev
```

Otevřete http://127.0.0.1:4173.

```sh
npm run build
npm run preview
```

Složka `dist/` je připravena pro libovolný statický hosting. Projekt je nový lokální Git repozitář, bez GitHub remote a bez nasazení.

## Struktura

- `index.html` — obsah, SEO, formulář a sekce
- `styles.css` — responzivní design a mobilní navigace
- `app.js` — volba menu, galerie, předvyplněná poptávka WhatsApp
- `static/images/` — devět dodaných fotografií jídla
- `server.mjs`, `build.mjs` — lokální server a build bez závislostí

## Obsah a předání

Telefon 07554 487799, Heywood a otevírací doba jsou převzaty z referenčního webu https://laurasqualitycatering.hsbdhejdb.co.uk/. Před ostrým nasazením je klient musí potvrdit. Recenze jsou krátké přesné výňatky ze screenshotů dodaných uživatelem; screenshoty osobních profilů se veřejně nepoužívají. Počty recenzí a hodnocení nebyly převzaty.

Poptávka po validaci otevře WhatsApp s textem. Není automaticky odeslána, nemá backend a nic neukládá. Fotky přiřazené ke kategoriím jsou ilustrační výběr z dodané sady; pro Indian a Mediterranean nejsou tvrzeny konkrétní položky ani ceny. Uživatelský seznam „Taylored“ je zobrazen jako „Tailored“.

Volitelná písma se načítají z Google Fonts, při nedostupnosti je použit systémový serif/sans-serif. Pro zcela samostatné produkční nasazení lze fonty hostovat lokálně.

Salubo byl prohlédnut jako reference organizace projektu. Jeho zdrojové soubory, Git historie, závislosti ani konfigurace nasazení nejsou součástí tohoto repozitáře. Pro tento statický web není nutná aplikační vrstva SvelteKit.
