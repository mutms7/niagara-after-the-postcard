# Niagara / After the Postcard

A mobile-first visual trip pitch for five friends driving from Waterloo, October 13–15, 2026. Desktop uses wide photography, alternating layouts and a three-column itinerary. Phones get a vertical story and stacked day cards.

## Open immediately

Double-click `index.html`. Photos, fonts, styles and interactions are local, so the page also works offline. External attraction links need internet. The floating button opens the short plan and budget links, and can copy a group-chat version.

For the easiest file sharing, send the adjacent `Niagara-trip.html` self-contained file. Recipients download it and open it in a browser. Some phone messaging apps preview HTML as text or refuse HTML attachments; use static hosting for a universal phone-friendly link.

## Run a local preview

Requires Node.js, with no package installation:

```sh
npm run dev
```

Open http://localhost:4173. To view on a phone on the same Wi-Fi, replace localhost with this computer's local network IP, keeping `:4173`. The local server binds to the network for this purpose. Stop it with Ctrl+C when finished. If the port is busy, set `PORT` to another port.

## Share as a website

```sh
npm run build
```

The site is hosted at https://niagara-trip-gamma.vercel.app . Source lives in the private repository https://github.com/mutms7/niagara-after-the-postcard, connected to the Vercel project `niagara-trip`. The `vercel.json` file configures the build and static output. Pushes to `main` deploy through the connected GitHub integration.

You can also upload the contents of `dist/` to another static website host. There is no backend, account system, analytics, booking integration or secret configuration.

## Edit

`index.html`: page content and layout.

`style.css`: colours, self-hosted typography, responsive rules, reduced-motion support.

`script.js`: scroll reveals, glance panel, copy button and photo credits.

`assets/`: optimised photographs at 800px and 1600px, fonts and font licences.

`SOURCES.md` and `image-credits.json`: research and photography sources.

## Content notes

Prices were checked October 5, 2026. The boat's $47.95 base price becomes approximately $54.18 with Ontario HST. Aero Car is $25 before tax, and Ghost Walk is $17 before tax and a 1.5% fee. Hotel cost is the group's target, not an available quote. The hotel + boat + Aero Car subtotal rounds to $182–212 per person, assuming the hotel target is the final room total and five people split equally. Meals, parking, gas, games and optional attractions are additional.

Midweek savings and fewer crowds are expectations, not promises. Actual October hours, weather-related operation, bookings and Niagara Glen trail closures should be checked before departure. Photos show the real locations in previous years, not guaranteed foliage or conditions for these dates.

## Licensing

Photographs are legally reusable Wikimedia Commons images with per-image attribution and licence links in the page footer. Adapted photographs retain the original photo licence; no claim is made over the original work. Fonts use the SIL Open Font License, included in `assets/`. Keep all credits when sharing or hosting.
