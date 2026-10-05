const credits = [
 ['falls','Niagara Falls with City Cruises Canada boat in Ontario.jpg','K2HWY','CC BY-SA 4.0','https://creativecommons.org/licenses/by-sa/4.0/'],
 ['neon','Clifton Hill At Night (47937480968).jpg','Gary J. Wood','CC BY-SA 2.0','https://creativecommons.org/licenses/by-sa/2.0/'],
 ['glen','Niagara Gorge at Niagara Glen1.jpg','The Cosmonaut','CC BY-SA 2.5 Canada','https://creativecommons.org/licenses/by-sa/2.5/ca/'],
 ['aero','Niagara Aerocar and Whirlpool.jpg','Hannah Clover','CC BY 4.0','https://creativecommons.org/licenses/by/4.0/'],
 ['town','12-20 Queen Street, Niagara-on-the-Lake, 2007.jpg','DimiTalen','CC0','https://creativecommons.org/publicdomain/zero/1.0/'],
 ['cows','A local ice cream parlour (27617735600).jpg','shankar s.','CC BY 2.0','https://creativecommons.org/licenses/by/2.0/'],
 ['ghost','Niagara-on-the-Lake, Canada (Unsplash).jpg','Kaleb Dortono','CC0','https://creativecommons.org/publicdomain/zero/1.0/']
];
document.getElementById('photo-credits').innerHTML = credits.map(([slug,title,author,licence,url]) => `<p class="credit-row"><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(title.replaceAll(' ','_'))}" target="_blank" rel="noopener">${slug === 'cows' ? 'COWS in Niagara-on-the-Lake' : title}</a> by ${author}, <a href="${url}" target="_blank" rel="noopener">${licence}</a>. Resized, converted and cropped for display.</p>`).join('');
const creditDetails = document.getElementById('credits');
document.querySelectorAll('a[href="#credits"]').forEach(link => link.addEventListener('click', () => {creditDetails.open = true;}));
if (location.hash === '#credits') creditDetails.open = true;
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {for (const entry of entries) if (entry.isIntersecting) {entry.target.classList.add('visible');observer.unobserve(entry.target);}}, {threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
document.querySelectorAll('img').forEach(img => {const failed = () => {img.parentElement.classList.add('image-failed');};img.addEventListener('error',failed);if (img.complete && !img.naturalWidth) failed();});
const toggle = document.querySelector('.glance-toggle');
const panel = document.getElementById('glance-panel');
function closeGlance(focus=false) {panel.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.querySelector('.toggle-symbol').textContent='+';if(focus)toggle.focus();}
toggle.addEventListener('click',()=>{const opening = panel.hidden;panel.hidden=!opening;toggle.setAttribute('aria-expanded',String(opening));toggle.querySelector('.toggle-symbol').textContent=opening?'−':'+';if(opening)panel.querySelector('a').focus();});
panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeGlance(true)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)closeGlance(true);});
document.addEventListener('click',e=>{if(!panel.hidden&&!panel.contains(e.target)&&!toggle.contains(e.target))closeGlance();});
const tripText = `Niagara trip idea | Oct 13–15, 2026\n5 friends, driving from Waterloo. 2 rooms, 2 nights.\n\nTuesday: leave ~7:30 AM, Niagara City Cruises boat tour + Falls, lunch/check-in, dinner, Clifton Hill + Great Canadian Midway. Speedway only if we feel like it.\nWednesday: Niagara Glen (~2-hour hike), Whirlpool Aero Car, Niagara Parkway drive, Niagara-on-the-Lake / Queen Street / waterfront, COWS ice cream, dinner, optional Ghost Walk.\nThursday: check out, revisit our favourite area / White Water Walk / cafés / chill, late meal, leave Niagara ~7–9 PM.\n\nRough CAD costs: hotel target $500–650 total for both rooms/both nights ($100–130 each split five ways), boat ~$54 each incl. HST, Aero Car ~$25 + HST each, optional Ghost Walk ~$17 + tax & 1.5% fee. Food, gas, parking and games extra. Approximate only; recheck prices, seasonal hours and Glen closures before booking.\n\nFalls for the spectacle, Clifton Hill for the chaos, the gorge for the scenery, NOTL for the vibe.`;
document.querySelector('.copy-plan').addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText(tripText);status.textContent='Copied. Drop it in the group chat.';}catch{const area=document.createElement('textarea');area.value=tripText;area.style.cssText='position:fixed;left:-9999px';document.body.append(area);area.select();const success=document.execCommand('copy');area.remove();status.textContent=success?'Copied. Drop it in the group chat.':'Copy isn’t available here. The three-day plan is on the page.';}});
