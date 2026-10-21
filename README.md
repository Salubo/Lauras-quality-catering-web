# Laura’s Quality Catering

Samostatný jednostránkový web v angličtině. Druhý návrh má fotografický úvod přes celou šířku, tmavě zelenou a slonovinovou paletu, výraznou serifovou typografii a nepravidelné rozložení fotografií. Používá vlastní fotografie klienta. Bez instalace balíčků; stačí Node.js 18+.

## Design v2

Směr byl přepracován podle referencí Talkington Bates (důraz na jídlo a catering), La Bandera (restaurační atmosféra a práce s menu), Mollie’s (velké fotografické plochy, jasné akce) a Browns (pohostinnost a příležitosti). Jde o vlastní kompozici, bez kopírování jejich značek, fotografií nebo textů.

- https://www.talkingtonbates.co.uk/
- https://labandera.co.uk/
- https://mollies.com/
- https://www.browns-restaurants.co.uk/

Nově je přidáno ruční přepínání recenzí; bez JavaScriptu zůstanou všechny viditelné. Ověřeno v desktopovém prohlížeči: úvod, nabídka, výběr menu do formuláře, přepínání recenzí a otevření/zavření fotky v galerii. Mobilní rozložení je připraveno pomocí media queries, nebylo samostatně ověřeno na mobilním zařízení.

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

## Design v3 — větší písmo a jednodušší stránka

Běžné texty 18–20 px, navigace a tlačítka 16 px, popisky formuláře 16 px. Odstraněna horní lišta, dekorace a dvě opakující se obsahové sekce. Nabídka má tři stejně velké sloupce, galerie tři fotografie. Všechny původní kategorie zůstávají v nabídce i formuláři.

Na stránce jsou použity pouze food-1, food-3, food-8 a food-9; fotografie s viditelným topením jsou z prezentace vyřazeny. Originály v repozitáři zůstávají zachovány. Desktopový náhled nabídky byl vizuálně ověřen po úpravě.

## Design v4
Světlý krémový úvod a hlavička, zelený text s teplým terakotovým akcentem, fotografie bez tmavého překryvu. Vyřazena food-9 z nabídky i galerie, nahrazena food-3. Desktopový úvod byl vizuálně ověřen.

