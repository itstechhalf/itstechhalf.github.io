'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "410914b29aa96f342bdd380679348dd2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ca25b13feae59cff28caba08c1f72aa2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69f0d17bf44e736eb26a1fd116d82945",
".git/logs/refs/heads/main": "f6fa30bc4dffd7e82dcd747a051b7dfc",
".git/logs/refs/remotes/origin/main": "74eb830fa7be0d2acf723dc45687ef6a",
".git/objects/01/b70fd67285eefcf23a8f0e9710fe07df464a3e": "eaaff663eba833f496b9f65224f22bdf",
".git/objects/02/05611d6be94d6c08925d699b087840eab61fc7": "40b7c4c6181128c317d9ac15436ea3aa",
".git/objects/02/15ec8517d96163ee0b955d6f51ec7aa993bbe3": "78184dcb3247de6127ae59bdc84a81ec",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/6d29ba14abd7532dafd7193c89ccea57a1cee1": "fefcf2e0c94b099ee84c0384996454dd",
".git/objects/11/0337d46019f7180fdca04837c64a3f71e101e8": "147506417933f8b79906640da8a0d4a6",
".git/objects/11/4c02006790c3af0be6684d85e09ec7e74971dc": "b7ac07ddcbcc5675843757a313e345f7",
".git/objects/13/38329a9b4f1c595495ef69a9284bf4b6c05323": "e137fe8d32c160fef00050066b179dfe",
".git/objects/15/307b20abd1ee261a6b2c1b6ab35f47f9f0ccd6": "af0923b5fada35dd1edc1398fe494a87",
".git/objects/1f/3e2d1ebb081beed2b8d0e9b66a111955a41afe": "19d9b4089e675cfb0b57f57a40fcc55c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/dc68fbbd569f0079aba3e4e92db1ae4ca327ba": "d0c31490a3c4523d24e7d04c2d333da1",
".git/objects/23/b2f652440389b88f733366ef8907d821ba0d2e": "b6b8c73ebb8637b401d7739f43885753",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/b45f9807248e24c07dc8b4d686c5aaff6eac9a": "939b2a8f2e97add8ece44f9e5bd825b7",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/d5cf08a791f7c820e07fa359d9720c60cc382e": "99fe18e7eee187f2db48f90958d7830f",
".git/objects/59/bc178bfdf3475ae3ee77ee6c39811052772a18": "dab6b47e0fdfea52a8b3800bbd9721c3",
".git/objects/5a/8fb8ea64506806446ef3405f8fd56c13be50e0": "61dfd3b55b08e63e85762bcc170cc093",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/8ae399f9f28b0b815035e0ad29c728d692a3f4": "1e47e9384cbb3900d4af02a2f6acc9d4",
".git/objects/7d/90f9acb6bc4f8a63cdf9b1fe4733e6ed0340ef": "dec946233756ebc8254e239bd929016a",
".git/objects/7e/0e3172576a993f312b13035abfb97ea301321a": "95cd4532cb3c4533571989b87b8cf41f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f4fb18c8ccc28507ca54d7c83c536d86968c8b": "f2c5bf1ee542d32652467462f7f77d10",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/08371f8d33128288c2c98090cf0f3057f087c8": "6ca33ffbce2eaa46b2b2cc7c0d0eacd5",
".git/objects/97/00208ee569703ef24a9b79afff8d30f774192e": "c945fe720c98e51f78997c755ced7fea",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/57426befbbbd98127441fda645d5b264ab0580": "42c452083985959c3c5d5b1a4f17dfdc",
".git/objects/9b/908af45991c71178b7eff8dcbe66d128dc8d70": "bb3dc0fe8944b6b369e4d90b801d7fd0",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/a3/ec7f533b8794ca12400cf1ca0c6205c2531338": "64ab3560d2b13e15145ee59a03c711af",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/b0/592e3cd08245126d3911b199e5662ce6b9a723": "fdc945849d19f1955c33a858b413db0f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/b1b97d9620d88450a0939764e8db40e1ff380d": "28bca800eeb5ee4d0f318572122cd341",
".git/objects/b5/16333e432b47bf86042e58b86995ae4c4f3abd": "614432a2c217b69d1a2807bb1763dc0f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c3/582e3e88bf8c382d89e53317ce57a10ff5820f": "75869a77f2244409250590738046620f",
".git/objects/ca/f76df2ec72c85de62491de8617edb6f4fd24c0": "9684aaf5afc2246dd8590232bf554ef5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/02aeac8c8f6e6ff0e124093e7ca3c5db5b44f7": "0aa74f8ec969a9cfa9825657e75ebb4e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/32dcef343bace55e9daed168c1ea022ed509e4": "23d844f7a108e33ddc5c929e48b0801f",
".git/objects/e7/0d2695a4871b4dfcb59ab5bc3ba11d7dd52672": "fa01ad4567fedd57b09eb2841ff6c37a",
".git/objects/e7/ef5c0c4e389f7010ce1d44b19e61c407737d04": "301522ea3e77af531a0dbaa438bb8fce",
".git/objects/ea/388308166e7aed4d7ff9fd40abf8781e5beb71": "51230f9020fd27602e188ebf9d790f37",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/27cd4a75280475155bbcb5cf77a659e76d7cd6": "7f328aca747e4df681fddac4cccbb165",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/05a2ae01fe14c259083eafa52304e1c2e0f744": "7eee2362c14e9311e7a6ed4a986b76cd",
".git/objects/fd/c1d269819f4b5f7935da4f921905269d898acc": "9038f38a3cb8f59e7bf7b8b35b1a490c",
".git/refs/heads/main": "0ccd1829839db79528e07d49aff45163",
".git/refs/remotes/origin/main": "0ccd1829839db79528e07d49aff45163",
"assets/AssetManifest.bin": "106281c1a9eda0588630b80d52485992",
"assets/AssetManifest.bin.json": "02e89f0934257ed7149df40c9a366e4c",
"assets/AssetManifest.json": "d6491e150a648164ee2812c025771d40",
"assets/assets/logos/placeholder.jpg": "8ddbf112b3f884b5ec8332607b85add4",
"assets/assets/logos/yt.png": "0caebcccd6de025be8641693db337f36",
"assets/assets/logos/yt_logo.png": "c985e5030783d42b96d8bf58f77f5121",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "349ef277a1acddf402162935cbacc8ba",
"assets/img/1.png": "6a9a7ebeae9af552fdb90af0bf5a94a3",
"assets/img/2.png": "086d71340c52c642a5b00f0706a2adb6",
"assets/img/3.png": "7e42ef7290601274c6eeb775a1a51c00",
"assets/img/4.png": "9d433df632e8571ef07650844f07e6b0",
"assets/img/5.png": "2cdd24bdd29b61a792dcea21c60fc6d1",
"assets/img/6.png": "52fabe4f351d14c7cf49ab30ed38bc9d",
"assets/img/7.png": "bbcb7f384d4117647c29783f58c42d3e",
"assets/img/icon-1.svg": "134d703632d0ce9975c07d1e3c1999b8",
"assets/img/icon-2.svg": "32c58fcda6369b77930c44a108bf1712",
"assets/img/icon-3.svg": "3d659cb8ae82783ff5ff4310f3328e35",
"assets/img/icon-4.svg": "2af974fbe3f037736903f80b321385a6",
"assets/img/logo.png": "249ab7227af5e7159cc759de6f884004",
"assets/img/preloader.png": "a7021c1bba74a5aa166ffb8f2b415411",
"assets/NOTICES": "a53fa2b16c50d284fb934b2132d4f0a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"facts.json": "cd5e757e4d1ab128d985aa3132b92d31",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2760f0180a1944f11257d46e4ecb33b0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "810b9dd91794079e58b42d6f679c615f",
"/": "810b9dd91794079e58b42d6f679c615f",
"main.dart.js": "61d481337d0095c87663c3d489d51641",
"manifest.json": "822fee98862eeb636cddf059067a0ef0",
"style.css": "bf6e016e032216895a40a9d38bd5aa59",
"version.json": "57e17be6bc3cb58059235601f5b87e5f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
