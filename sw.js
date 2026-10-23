/* ベビー フラッシュカード：しゃしんを ぜんぶ iPhone に ほぞんして、オフラインでも つかえるように する ファイル */
const V = 'babyfc6-1e072f8bd2';
const FILES = ["./", "index.html", "card-inu.jpg", "card-neko.jpg", "card-usagi.jpg", "card-hamster.jpg", "card-inko.jpg", "card-kingyo.jpg", "card-ushi.jpg", "card-buta.jpg", "card-hitsuji.jpg", "card-uma.jpg", "card-yagi.jpg", "card-niwatori.jpg", "card-hiyoko.jpg", "card-ahiru.jpg", "card-raion.jpg", "card-tora.jpg", "card-zou.jpg", "card-kirin.jpg", "card-shimauma.jpg", "card-kaba.jpg", "card-sai.jpg", "card-gorira.jpg", "card-panda.jpg", "card-ressaapanda.jpg", "card-shirokuma.jpg", "card-koara.jpg", "card-kangaruu.jpg", "card-pengin.jpg", "card-furamingo.jpg", "card-kapibara.jpg", "card-rakuda.jpg", "card-saru.jpg", "card-kitsune.jpg", "card-shika.jpg", "card-risu.jpg", "card-suzume.jpg", "card-hato.jpg", "card-karasu.jpg", "card-fukurou.jpg", "card-washi.jpg", "card-tsuru.jpg", "card-hakuchou.jpg", "card-oumu.jpg", "card-iruka.jpg", "card-kujira.jpg", "card-jinbeezame.jpg", "card-same.jpg", "card-tako.jpg", "card-ebi.jpg", "card-hitode.jpg", "card-chouchou.jpg", "card-tentoumushi.jpg", "card-kabutomushi.jpg", "card-kuwagata.jpg", "card-tonbo.jpg", "card-semi.jpg", "card-batta.jpg", "card-kamakiri.jpg", "card-katatsumuri.jpg", "card-ari.jpg", "card-mitsubachi.jpg", "card-ringo.jpg", "card-mikan.jpg", "card-banana.jpg", "card-ichigo.jpg", "card-budou.jpg", "card-nashi.jpg", "card-kaki.jpg", "card-sakuranbo.jpg", "card-painappuru.jpg", "card-tomato.jpg", "card-kyuuri.jpg", "card-nasu.jpg", "card-jagaimo.jpg", "card-tamanegi.jpg", "card-kyabetsu.jpg", "card-burokkorii.jpg", "card-piiman.jpg", "card-gohan.jpg", "card-onigiri.jpg", "card-pan.jpg", "card-udon.jpg", "card-raamen.jpg", "card-osushi.jpg", "card-karee.jpg", "card-misoshiru.jpg", "card-tamagoyaki.jpg", "card-keeki.jpg", "card-aisu.jpg", "card-shinkansen.jpg", "card-densha.jpg", "card-kikansha.jpg", "card-patokaa.jpg", "card-kyuukyuusha.jpg", "card-shoubousha.jpg", "card-yuubinsha.jpg", "card-takushii.jpg", "card-basu.jpg", "card-kuruma.jpg", "card-torakku.jpg", "card-baiku.jpg", "card-jitensha.jpg", "card-hikouki.jpg", "card-herikoputaa.jpg", "flag-jp.svg", "flag-cn.svg", "flag-kr.svg", "flag-mn.svg", "flag-th.svg", "flag-vn.svg", "flag-ph.svg", "flag-id.svg", "flag-my.svg", "flag-sg.svg", "flag-in.svg", "flag-sa.svg", "flag-tr.svg", "flag-au.svg", "flag-nz.svg", "flag-gb.svg", "flag-fr.svg", "flag-de.svg", "flag-it.svg", "flag-es.svg", "flag-pt.svg", "flag-nl.svg", "flag-be.svg", "flag-ch.svg", "flag-at.svg", "flag-se.svg", "flag-no.svg", "flag-fi.svg", "flag-dk.svg", "flag-ie.svg", "flag-gr.svg", "flag-pl.svg", "flag-ru.svg", "flag-ua.svg", "flag-us.svg", "flag-ca.svg", "flag-mx.svg", "flag-br.svg", "flag-ar.svg", "flag-eg.svg", "flag-ke.svg", "flag-za.svg", "icon.png"];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(V).then(async c => {
    for (const f of FILES) { try { await c.add(new Request(f, { cache: 'reload' })); } catch (err) {} }
  }));
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== V && /^babyfc/.test(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;
  if (r.mode === 'navigate') {
    // ページ：ネットが あれば あたらしい もの、なければ ほぞんした もの
    e.respondWith(fetch(r).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put('./', cp)); }
      return res;
    }).catch(() => caches.match('./', { ignoreSearch: true }).then(m => m || caches.match('index.html', { ignoreSearch: true }))));
    return;
  }
  // しゃしんなど：ほぞんした ものを さきに つかう
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(m => m || fetch(r).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
    return res;
  })));
});
