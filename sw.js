/* ベビー フラッシュカード：しゃしんを ぜんぶ iPhone に ほぞんして、オフラインでも つかえるように する ファイル */
const V = 'babyfc6-d86f3664e3';
const FILES = ["./", "index.html", "card-inu.jpg", "card-neko.jpg", "card-usagi.jpg", "card-hamster.jpg", "card-inko.jpg", "card-kingyo.jpg", "card-ushi.jpg", "card-buta.jpg", "card-hitsuji.jpg", "card-uma.jpg", "card-yagi.jpg", "card-niwatori.jpg", "card-hiyoko.jpg", "card-ahiru.jpg", "card-morumotto.jpg", "card-harinezumi.jpg", "card-nezumi.jpg", "card-roba.jpg", "card-raion.jpg", "card-tora.jpg", "card-zou.jpg", "card-kirin.jpg", "card-shimauma.jpg", "card-kaba.jpg", "card-sai.jpg", "card-gorira.jpg", "card-panda.jpg", "card-ressaapanda.jpg", "card-shirokuma.jpg", "card-koara.jpg", "card-kangaruu.jpg", "card-pengin.jpg", "card-furamingo.jpg", "card-kapibara.jpg", "card-rakuda.jpg", "card-chiitaa.jpg", "card-hyou.jpg", "card-oranuutan.jpg", "card-chinpanjii.jpg", "card-arupaka.jpg", "card-namakemono.jpg", "card-baku.jpg", "card-ookami.jpg", "card-miiakyatto.jpg", "card-saru.jpg", "card-kitsune.jpg", "card-shika.jpg", "card-risu.jpg", "card-inoshishi.jpg", "card-kamoshika.jpg", "card-suzume.jpg", "card-hato.jpg", "card-karasu.jpg", "card-fukurou.jpg", "card-washi.jpg", "card-tsuru.jpg", "card-hakuchou.jpg", "card-oumu.jpg", "card-dachou.jpg", "card-kujaku.jpg", "card-tsubame.jpg", "card-kawasemi.jpg", "card-kitsutsuki.jpg", "card-mejiro.jpg", "card-iruka.jpg", "card-kujira.jpg", "card-jinbeezame.jpg", "card-same.jpg", "card-tako.jpg", "card-ebi.jpg", "card-hitode.jpg", "card-azarashi.jpg", "card-ashika.jpg", "card-kumanomi.jpg", "card-tatsunootoshigo.jpg", "card-ei.jpg", "card-kaeru.jpg", "card-zarigani.jpg", "card-chouchou.jpg", "card-tentoumushi.jpg", "card-kabutomushi.jpg", "card-kuwagata.jpg", "card-tonbo.jpg", "card-semi.jpg", "card-batta.jpg", "card-kamakiri.jpg", "card-katatsumuri.jpg", "card-ari.jpg", "card-mitsubachi.jpg", "card-dangomushi.jpg", "card-kumo.jpg", "card-ringo.jpg", "card-mikan.jpg", "card-banana.jpg", "card-ichigo.jpg", "card-budou.jpg", "card-nashi.jpg", "card-kaki.jpg", "card-sakuranbo.jpg", "card-painappuru.jpg", "card-remon.jpg", "card-kiui.jpg", "card-mangoo.jpg", "card-buruuberii.jpg", "card-kuri.jpg", "card-tomato.jpg", "card-kyuuri.jpg", "card-nasu.jpg", "card-jagaimo.jpg", "card-tamanegi.jpg", "card-kyabetsu.jpg", "card-burokkorii.jpg", "card-piiman.jpg", "card-edamame.jpg", "card-shiitake.jpg", "card-renkon.jpg", "card-hourensou.jpg", "card-retasu.jpg", "card-hakusai.jpg", "card-gohan.jpg", "card-onigiri.jpg", "card-pan.jpg", "card-udon.jpg", "card-raamen.jpg", "card-osushi.jpg", "card-karee.jpg", "card-misoshiru.jpg", "card-tamagoyaki.jpg", "card-keeki.jpg", "card-aisu.jpg", "card-tamago.jpg", "card-nattou.jpg", "card-toufu.jpg", "card-gyouza.jpg", "card-karaage.jpg", "card-hanbaagu.jpg", "card-supagetti.jpg", "card-piza.jpg", "card-sandoicchi.jpg", "card-purin.jpg", "card-doonatsu.jpg", "card-senbei.jpg", "card-dango.jpg", "card-shinkansen.jpg", "card-densha.jpg", "card-kikansha.jpg", "card-patokaa.jpg", "card-kyuukyuusha.jpg", "card-shoubousha.jpg", "card-yuubinsha.jpg", "card-takushii.jpg", "card-basu.jpg", "card-kuruma.jpg", "card-torakku.jpg", "card-baiku.jpg", "card-jitensha.jpg", "card-hikouki.jpg", "card-herikoputaa.jpg", "card-burudoozaa.jpg", "card-mikisaasha.jpg", "card-hashigosha.jpg", "card-dokutaaieroo.jpg", "card-kikyuu.jpg", "card-koppu.jpg", "card-supuun.jpg", "card-fooku.jpg", "card-ohashi.jpg", "card-osara.jpg", "card-isu.jpg", "card-tokei.jpg", "card-denwa.jpg", "card-kagi.jpg", "card-haburashi.jpg", "card-taoru.jpg", "card-terebi.jpg", "card-kutsu.jpg", "card-boushi.jpg", "card-kasa.jpg", "card-megane.jpg", "card-kutsushita.jpg", "card-booru.jpg", "card-tsumiki.jpg", "card-kureyon.jpg", "card-enpitsu.jpg", "card-hasami.jpg", "card-sakura.jpg", "card-tanpopo.jpg", "card-ajisai.jpg", "card-kosumosu.jpg", "card-momiji.jpg", "card-ichou.jpg", "card-donguri.jpg", "card-matsubokkuri.jpg", "card-kinoko.jpg", "card-tsuki.jpg", "card-yukidaruma.jpg", "card-koinobori.jpg", "card-daruma.jpg", "card-kendama.jpg", "card-hinaningyou.jpg", "card-kabuto.jpg", "card-manekineko.jpg", "card-fuurin.jpg", "card-uchiwa.jpg", "card-geta.jpg", "card-kagamimochi.jpg", "card-piano.jpg", "card-taiko.jpg", "card-gitaa.jpg", "card-baiorin.jpg", "card-toranpetto.jpg", "card-toraianguru.jpg", "card-haamonika.jpg", "card-rikoodaa.jpg", "card-tanbarin.jpg", "flag-jp.svg", "flag-cn.svg", "flag-kr.svg", "flag-mn.svg", "flag-th.svg", "flag-vn.svg", "flag-ph.svg", "flag-id.svg", "flag-my.svg", "flag-sg.svg", "flag-in.svg", "flag-sa.svg", "flag-tr.svg", "flag-au.svg", "flag-nz.svg", "flag-gb.svg", "flag-fr.svg", "flag-de.svg", "flag-it.svg", "flag-es.svg", "flag-pt.svg", "flag-nl.svg", "flag-be.svg", "flag-ch.svg", "flag-at.svg", "flag-se.svg", "flag-no.svg", "flag-fi.svg", "flag-dk.svg", "flag-ie.svg", "flag-gr.svg", "flag-pl.svg", "flag-ru.svg", "flag-ua.svg", "flag-us.svg", "flag-ca.svg", "flag-mx.svg", "flag-br.svg", "flag-ar.svg", "flag-eg.svg", "flag-ke.svg", "flag-za.svg", "icon.png"];
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
