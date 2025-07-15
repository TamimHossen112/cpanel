'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cb420776deb444c58c7f5de154468e1f",
"assets/assets/fonts/Inter-Light.otf": "d7019947105844db1899d246172f06b4",
"assets/assets/fonts/Inter-Medium.otf": "ef3d193e6a6ad033724c7872aec1cff7",
"assets/assets/fonts/Inter-Regular.otf": "76e872bc911c3d908aeaf31b2c16bc63",
"assets/assets/fonts/Inter-SemiBold.otf": "ef2dede4404ddb4cb3ed69d196ef2722",
"assets/assets/fonts/MyFlutterApp.ttf": "6f3824905cf96b2061ead1a92a385a5e",
"assets/assets/icons/airplay.svg": "a2ef557e2e02d30babe40470b1ecaf81",
"assets/assets/icons/arrow-right.png": "7ce7c8d06dc7fd4ff2d4e62a9a4609ac",
"assets/assets/icons/arrow-small-left.svg": "48ffbd6e29f585cb597f26a0e2b50b63",
"assets/assets/icons/badge-check.svg": "9c1086c728cb0c209c61dee585cff2c5",
"assets/assets/icons/bank.svg": "50e4812b96b01128d2370ed6f7748f4f",
"assets/assets/icons/briefcase.svg": "fbffe34f954ac5a51769a7e0f34de826",
"assets/assets/icons/building.svg": "50e13363236d75dba8a78539104cef2f",
"assets/assets/icons/calendar-check.svg": "41a81b85c1d44d4e13cf7d92a2fa3d89",
"assets/assets/icons/calendar-clock.svg": "8eca424af8722f24c9ebed1bc4a09864",
"assets/assets/icons/calendar-day.svg": "5b5c4724748e42e4e088802b565c8cdc",
"assets/assets/icons/calendar-lines.svg": "091d7272432066ff60fc4229971e6c28",
"assets/assets/icons/calendar.svg": "09cf470c4011ee5280f5e415bbdaf20d",
"assets/assets/icons/camera.svg": "dd6bc6f82d7a23e0f9fd89430d3a59cc",
"assets/assets/icons/check-circle.svg": "d20d084b8b5251b2a4e18ad7c51e6b4d",
"assets/assets/icons/circle-cross.svg": "4d991c9b277af301baf42f8b6e25e473",
"assets/assets/icons/circle-xmark.svg": "e4496a9a3da62f92bec9f3d3a7216317",
"assets/assets/icons/clock-three.svg": "5f3861aa2b93688b37f0b0e4a236e69f",
"assets/assets/icons/clock-three2.svg": "40eeb5c86f583d2231a9f217d508af11",
"assets/assets/icons/compass.png": "267703e2554a88249b5d0699449948e2",
"assets/assets/icons/cowbell.svg": "6e50119223a879ac7b117b17880de5fc",
"assets/assets/icons/cross-circle.svg": "7f36973a1d08edf258a0469f8baa119e",
"assets/assets/icons/cross-small.svg": "1bdf065fb9a41a8c6c655b7c48a148e7",
"assets/assets/icons/dashboard.svg": "7fc98f7e139292f82b5d08b7dc3a2619",
"assets/assets/icons/diploma.svg": "ffe500b5a3b380136536409852dc3ee6",
"assets/assets/icons/direct-download.png": "ca659a282205d95d905473854da0a58f",
"assets/assets/icons/document.svg": "aa3510789e01939332a18b2b8f717d71",
"assets/assets/icons/download.png": "b219f6133d7ee2dd7ccbab79b260c1ab",
"assets/assets/icons/edit.svg": "7f16dd1520559466c7a43e901b18ac2e",
"assets/assets/icons/envelope.svg": "6ff2030c8daff2c9106ddca9953bbad5",
"assets/assets/icons/exclamation.svg": "2ddbe6d997910bff2be1264d11787e3c",
"assets/assets/icons/exclude.png": "424ecbf97f4ee9be017ce100c564c4bc",
"assets/assets/icons/exclude.svg": "d6435e85df7be2078faade725009ef80",
"assets/assets/icons/exclude2.svg": "40f217316d4fccb0ac56c7027c029b46",
"assets/assets/icons/eye-crossed.svg": "798f337bbd2a4e91824f8572bef76a11",
"assets/assets/icons/file-edit.svg": "b67ded8486b3952e6ddbe4b8a7f64c7d",
"assets/assets/icons/file-upload.svg": "1a1363938983a8c69b1aa3af1cfc426d",
"assets/assets/icons/file.svg": "e9ee7cdf276bbd5d19e50b3e69386a93",
"assets/assets/icons/files.png": "8d22435917ab671a1a380ebbf1255cb3",
"assets/assets/icons/folder.png": "9eefb29780ec790a2145074fb10fe6e9",
"assets/assets/icons/folder.svg": "e40ceada69845aa141b0a7ec28acbd81",
"assets/assets/icons/geolocation.png": "2e6196b9a605a709877241fc5e2b8092",
"assets/assets/icons/geolocation.svg": "b5d553fa27e1e9f00e9d7775a2ea2a99",
"assets/assets/icons/globe.svg": "947f24d1e3300561dbdca88e02401372",
"assets/assets/icons/grid.svg": "11ed60e65e55d6bbda165370fcf21506",
"assets/assets/icons/home-location-alt.svg": "9fc58316e042c9895847e2b1f79cc66e",
"assets/assets/icons/house-building.svg": "29565115db92ab61839d4f4bf9a14950",
"assets/assets/icons/id-badge.svg": "e31647d2e83482f77a996ee2bf448d6e",
"assets/assets/icons/id-card-clip-alt.svg": "8f9b1f8be3995d930d7f3f1d6c155865",
"assets/assets/icons/left-chevron.png": "f328ea2b2e0c662c4e1c7f2ac5822783",
"assets/assets/icons/left.png": "194322527d0c14b109caba975607ddd7",
"assets/assets/icons/left.svg": "d7a3e5a60955bc8c4e70837e08e6adaa",
"assets/assets/icons/lock.svg": "a79e1ed4430c8c799038e3cbebc36805",
"assets/assets/icons/manager-svgrepo-com.svg": "2915126898daeb63d5d8efd45bf3ff2a",
"assets/assets/icons/map-marker-check.svg": "ddf8d8710832e4c9e19233e49660d799",
"assets/assets/icons/map-marker-cross.svg": "6a3b75cf7ac3273ab9a0fbd18c96beb8",
"assets/assets/icons/map-marker-question.svg": "986a563b273c07bc2f59048e07c2b739",
"assets/assets/icons/marker.svg": "1851d147d44ef8e7cd886491adbe9979",
"assets/assets/icons/megaphone.svg": "be56284aee469f171d3d95716148ce8e",
"assets/assets/icons/memo-circle-check.svg": "70ed1e6f0c5a0c8ece126403131313e2",
"assets/assets/icons/mobile-notch.svg": "ade201cf9d30ea7630d14295434930c8",
"assets/assets/icons/navigation.png": "ab06071959b689ae74a33ea02fc2ee67",
"assets/assets/icons/navigation.svg": "57166203cecc268e631114d0ff39efc0",
"assets/assets/icons/notes-medical.svg": "679cbc3ea45dcbabcd923fc38d375635",
"assets/assets/icons/pencil.svg": "33337aecf9f1123ef00f100d1506a8f5",
"assets/assets/icons/phone-call.svg": "41c088e38f19e6728a0eb0a85ee839c0",
"assets/assets/icons/picture.svg": "f66bbd8ee91934ee7119b012dbe23bb7",
"assets/assets/icons/rectangle-list.svg": "ff1ef92bc4db2b5121cd90496a6035d6",
"assets/assets/icons/report.svg": "541203adfd016766ae4ce5835a3ac278",
"assets/assets/icons/right-chevron-.png": "6b1697dd4076b6466c363032afceef5e",
"assets/assets/icons/right-chevron.png": "bb28828b0d4922be38c595acd8e2daf6",
"assets/assets/icons/search.svg": "e6373782777844035e0f7c804d9f40a9",
"assets/assets/icons/square-phone-hangup.svg": "a972110626c60d102a3a5e26a50e6606",
"assets/assets/icons/square-plus.svg": "7877cac4f6b5b50eff2ad6bc47650c5b",
"assets/assets/icons/time-oclock.svg": "bf1977cd625f1ecb4a09852786427072",
"assets/assets/icons/time-quarter-past.svg": "10fc77c01cf2081ca11c338f5fbafd65",
"assets/assets/icons/user.svg": "6df92ffedde0e95874248d52f3c7b40e",
"assets/assets/icons/users-alt.svg": "3f043ba30e92f422d0acf28cfe4f7274",
"assets/assets/images/10894.png": "0487a4dc0423e5b06e6333bf0f793b55",
"assets/assets/images/aapraisal_head.png": "b079a578b9b2e748a038efe545cb4781",
"assets/assets/images/analysis.png": "33e0eb2f69861feb106552a540687514",
"assets/assets/images/appraisal%2520(1).png": "ef0fe2b0120c09d2381c133d3825dc7a",
"assets/assets/images/appraisal.png": "9154fce5b7644c700dfeddfbefedbb64",
"assets/assets/images/ApprisalPoster.png": "769019dba0202258edb5b0c4acc03a92",
"assets/assets/images/approved.png": "b6136fcdf682c5089f19d79ea53fad30",
"assets/assets/images/approved2.png": "8fc58d61827e7f3cf55361a0ff4b65d1",
"assets/assets/images/Bank.png": "8d22435917ab671a1a380ebbf1255cb3",
"assets/assets/images/bannar1.png": "a5f78cc072087726c782f5577857be42",
"assets/assets/images/bannar2.png": "a2157436b7b1d8ebd1bf8f000e151c26",
"assets/assets/images/bannar3.png": "b35952faae5099c2fd765ee56b561e52",
"assets/assets/images/bannar4.png": "db9e27f1b4c78b73ca7530a087bf25e4",
"assets/assets/images/BIRTHDAY.gif": "426860c3d01469c596cfac1e308b2c1d",
"assets/assets/images/business-card.png": "a843a7ee1587e7989a56127f87898cd1",
"assets/assets/images/Calendar.png": "f59ce40eb9a5dcf1f9304b082f8fb0ad",
"assets/assets/images/calendar2.png": "4bd72e26e0d748bd5e6e45eb93996c2d",
"assets/assets/images/certificate.png": "f02462ace9a528dea02b122d96f181c4",
"assets/assets/images/certification.png": "1db5f6fde4353a9ef0025cc8cf568771",
"assets/assets/images/check.png": "eae3cf216d8eae5d4b213af216f80fca",
"assets/assets/images/clipboard.png": "8e4a2bb9068ceda511f1cbb482a8cf1b",
"assets/assets/images/clocation.png": "a430eef58143d900e23170396cbf44be",
"assets/assets/images/clock.png": "444c4b75468c7f054e2a245edeb98b91",
"assets/assets/images/download.png": "b219f6133d7ee2dd7ccbab79b260c1ab",
"assets/assets/images/group.png": "18b85290a05f6a4ed48f797905f4bbee",
"assets/assets/images/icon.png": "5f4a10ff17e54789c674adaa76bd1151",
"assets/assets/images/id-card.png": "94b49e4e8e4acb6efb0750c526e1b950",
"assets/assets/images/KFC.jpg": "563ad0589a005ca0c869283883a49f79",
"assets/assets/images/leave.png": "19a606c965409cbc8c7841601c99ea8a",
"assets/assets/images/left-click.png": "08a34793e17f9398cda4ac95c790f3e2",
"assets/assets/images/load.png": "76fa4bbe10e00c6b4b589a8a0915f3ec",
"assets/assets/images/location.png": "ce60db5a173849d58c261ab8bf2add34",
"assets/assets/images/lock.png": "0b87694fae78c83a4a0bb10a799093e9",
"assets/assets/images/logout.png": "3b704aed559f5e98d2174d240cae343d",
"assets/assets/images/Man.png": "dc5161dd5e36744d184e0b98e97d31ba",
"assets/assets/images/message.png": "93f2e468da23a52eb136a78da32c4f17",
"assets/assets/images/Mytranscom.png": "6a8202f0b115525b8165594a18a98812",
"assets/assets/images/off_hour.png": "1cd1a1ec722ad3c0e8d9abf6544e5159",
"assets/assets/images/pdf.png": "9a85752042ae270b88114895b82da2c1",
"assets/assets/images/pendimg.png": "168db2af659af11fdd178036c22955d2",
"assets/assets/images/pending.png": "9b2f8c154f088fe03e622110d5f92933",
"assets/assets/images/pin.png": "42e0426dfeaef0820ac03df8e5553da2",
"assets/assets/images/pinsign.png": "1f830e4cfba0a0c9db36b0d12fb706ff",
"assets/assets/images/pinsign2.png": "1f38e9f4a12d448bfb23ff631f0f9219",
"assets/assets/images/profile.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/images/ps66F4.tmp": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ready.png": "cde2bd9723588df382799b330d00ca7d",
"assets/assets/images/rejected.png": "ded5f8f64617c4b996a4babcb5e28118",
"assets/assets/images/search.png": "e3983932e1ed1f30f68a839850e6b0de",
"assets/assets/images/self.png": "32f7b5373ce4649196ffea391ef6f63a",
"assets/assets/images/shakil.png": "32e04e372dfede1f1ea73d8b6eeea9c9",
"assets/assets/images/stamp.png": "7dcc469e2b580d248b5255ac16b6b322",
"assets/assets/images/tablet.png": "12c938006d2f7710633c9d2ea36e038f",
"assets/assets/images/touch-screen.png": "74151b290ed619ecc78b424d1f845b51",
"assets/assets/images/Transcom.png": "cfd1e1ec4d1d624533f13806c1dbc463",
"assets/assets/images/updateloc%2520.png": "ba3e20304778a2dc01433700e28e4467",
"assets/assets/images/updateloc.png": "ba3e20304778a2dc01433700e28e4467",
"assets/assets/images/user.png": "eeec22e867e4bc83954d30d64e81c3f9",
"assets/assets/images/wish.png": "3fbf4def3491df06b192722c61b0e642",
"assets/assets/images/wish2.png": "62effe320da37217056acd7d1fa7e6da",
"assets/FontManifest.json": "8eb32c52234b5f9f2047212d164b854e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d49e9a6f266939c82b9e434e2b1db4bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1fbf9ba1b2364b237798e0d47d684c91",
"/": "1fbf9ba1b2364b237798e0d47d684c91",
"main.dart.js": "7eabf6c4705b8fa591e6288294533139",
"manifest.json": "d7b3ccaa8a83bfbafef463fc309e72d2",
"version.json": "f82c3a157f62b5f96752c0101998b8fe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
