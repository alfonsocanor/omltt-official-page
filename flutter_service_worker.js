'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "283e2d860f177adecbac363a7a335411",
"index.html": "4a30d29c6e86d95984179a85501373c5",
"/": "4a30d29c6e86d95984179a85501373c5",
"main.dart.js": "c0ee1b5821e7c0034e695858d93b380a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "05d9aec077574eb6ff2c3358b83e79a9",
"icons/Icon-192.png": "cb52d872e7a39d3c45abc01b709b867b",
"icons/Icon-maskable-192.png": "cb52d872e7a39d3c45abc01b709b867b",
"icons/Icon-maskable-512.png": "10a9e9b47d300267a06a990ad1fc3a49",
"icons/Icon-512.png": "10a9e9b47d300267a06a990ad1fc3a49",
"manifest.json": "cedd25a9055efb311b8eb804adc49cee",
".git/ORIG_HEAD": "02820bb67b46d2111c63aba1916729e7",
".git/config": "794c54ead0b0f9f55021c1652e606428",
".git/objects/95/fd779d4af204804240e0f2d60459fd090cd16e": "6d5175ca4aff0d6ecb7e5a3f75505ae9",
".git/objects/66/3d9e8697cafe5ce3cc6b154490633b18b5a9cf": "05314cbd3232e4b181cce1f600cca87d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9b/4326bb365c6e79d0de81c64339f41fada66c32": "9a3c1993323be23c698319d8c1501b82",
".git/objects/35/c10c18539d23003d60495c0423512f024dcf77": "3abe1048d7fd3764344000caa49d6894",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/97622d601721df1d44c9620ac8d2fc9fedd4df": "302240ef24ddfba28b52f635e561991f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ac/530c368d5ec85b3ac2cb911707247bc8327488": "e79ef2857a496f81426531c25cfeb02a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/5bebf09e31e52255e5fec719c5130d0e0179e0": "6ce65e06b8452b48b2ee2a7732378a78",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/01c59e3dbf0f32c5892e3fa38feaa3c7b3f238": "44b6a0c74950976dc5e23cfc705a7a9b",
".git/objects/c7/9bd56a4495cb08988a49d300770dbacb4146f9": "867cf3ba7c7c853ed2c3471c2ad3517f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/66dcb96c39896549c090c529a5fc3c52bd68d8": "99434a61da3901f81cca0f5a3e342c2f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/a353b7b18b2be691b2a3fdac48167503903f0d": "8a68acd7a9ff2c0059751b2d74b19616",
".git/objects/fe/3d6176fc30c4b6b9f8e351adbf8f880ec2a8cd": "e5b06753b26e4d0cc6a8bbe4e59519e8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/80/ac922f49b0c44694b82c925cb45388511e4c47": "12a52f3f2a694d82909c4a374acc5e41",
".git/objects/7b/fd70a0eba845a40d494a92f389eb34bfa91a93": "9a04d93a7ef78202e34867b800b0a5f3",
".git/objects/26/ddaf48cdd94b90152a4be11ae6374f057fd407": "5bffe7e128836c9fb0baec8a70601732",
".git/objects/4d/3ad13a58398de576a83aad70042315b3871b77": "ec014046fde44da5bd7c54460c58b499",
".git/objects/44/0cf6cd23eae0783f6603980636d9598044d876": "c885dbcac3a41cb74d8d9229db1ead8f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/65/2872a5ee288c7b6eeadda90a563f1d362147ca": "7d8b02e5d28742a5e46f9e80176c8fb0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/8fc2d709a884ba72605ce980745953cdfe8c10": "a4fe554a232e50db24cb16406efbf63c",
".git/objects/6d/d98f6fd4e27f99afd46a92c574ddd309d8b774": "7e02b1476e573219df4ac050b72fb640",
".git/objects/6c/a94f92114cf7ee9c7012c4e47a502d56829a61": "beeb6d16ba139db12a4d97c669fe9c7f",
".git/objects/63/3b9cf322df7ebd9a3158b4f15adac30663d48c": "c27c8fd547dffd608467693391f89bfa",
".git/objects/d3/aaf26024d8099312cd596c6e8d07c14634db27": "820795997a9d53a078bbc70234f92069",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f3878716ab831aa1a4cec30b1f20372b1371cd": "ced5d5742203458b39bdc6f1a3ed0a3e",
".git/objects/af/d7198f05288dc0059fa2b3f468ce5d6e5f00cc": "cf7c9b38e31eff9f63b6c8540e132193",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/752b7d5d424018fec994710bed323ca611b946": "bb412ed20fee8822979866f8472254e6",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ff/091238e7cb84d321efd4e59da1d9810d162377": "a21136df7985d96a7db1f16524c4b57b",
".git/objects/c5/a94798f886e52d039057db4eac870fb5605128": "1b7b15349f0cc8c0781b4580c8593579",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/e71a8960e864c3e482719476732fe04ffbb961": "52191a6c3356c85c5ff04ff0507577f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/9b842fd712be04ff7341aed50709e53bcecf53": "34c72c9c90d7799f8819e906d4e2c15e",
".git/objects/70/4ba0f0846195e2a714a3efbef2d8403aef4d7c": "485d6b8473f066b6d6701928a0f80a18",
".git/objects/84/52a11274fddc4c30caa79e5f2fae4fb099bd74": "af00877d516bacdca1ebd19bfa92ecca",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/8c/4a237cd7eaa02eab5ac27be5fc0820ae199066": "ff34c30547adb9ba98115e4fdcd9788c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/40/5675bc0c532a7cee4247349a0218cdb8655dc2": "c7cfffaaf82259f8764fd0a837e64f0c",
".git/objects/22/e3956c7c84df74b7da2fb70c868139c1b3c345": "01598474aa3dd23d15dd3753725fc1d2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12ee19e77367e834baeebcbd7c30b6c8",
".git/logs/refs/heads/master": "c7006e92f0abf002db33e3123cab1f65",
".git/logs/refs/remotes/origin/master": "30ba9b5d5ad2ab8dbfbfaf28be32deed",
".git/logs/refs/remotes/origin/main": "05fec486a7cf96adcefc04dde1cec5a6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "02820bb67b46d2111c63aba1916729e7",
".git/refs/remotes/origin/master": "02820bb67b46d2111c63aba1916729e7",
".git/refs/remotes/origin/main": "3e2cbfccc738333e78512d925fb0febc",
".git/index": "a48e65961067610141f0fdaccaca447f",
".git/COMMIT_EDITMSG": "dbe691ed32e1dc3b375c054458cd01a3",
".git/FETCH_HEAD": "f3300348d14f980daff7aa938233611c",
"assets/AssetManifest.json": "961567a2230b7edd58d71e6205ed0c63",
"assets/NOTICES": "e72d29978cbf701b3bca36f23af777ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "abda58d17806fc746c5f01e0a63f9bda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "adf99fa288f0eedc3f9f365a0f7ce814",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/omlttse.png": "82293578cc3326440b9c2ff7c4906c82",
"assets/assets/images/Omlttse_nbg.png": "f94eaeaee67e8939181d2afeebcced81",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
