"use strict";var precacheConfig=[["/docs/index.html","1c39075277cc69f450d55e0b23dd3900"],["/docs/static/css/main.cbe52858.css","9959b583d9473e31e99241665dac5a62"],["/docs/static/js/main.9fa5e4de.js","9cb2cb456c276ba0bd7f11150fdc3d51"],["/docs/static/media/Abertura-Sprint-0.02489b23.md","02489b23d4ef896987236f6cc9429bfa"],["/docs/static/media/Abertura-Sprint-1.f789034e.md","f789034ed9b75029dd70e4bc14158599"],["/docs/static/media/Abertura-Sprint-2.3a0c57bd.md","3a0c57bdcfdf8e695f1f50e82f2f154a"],["/docs/static/media/Abertura-Sprint-3.f1a32eba.md","f1a32eba2159c47c38bb5f67d85c2bbf"],["/docs/static/media/Abertura-Sprint-4.34702391.md","3470239171520907cf1481bdc57ad679"],["/docs/static/media/Backlog-do-produto.0b1b8a94.md","0b1b8a94767c2e43e844378be3ed350b"],["/docs/static/media/Fechamento-Sprint-0.ea1b8d9e.md","ea1b8d9e0d219d4e3103e0a3ace98496"],["/docs/static/media/Fechamento-Sprint-1.d36a9bab.md","d36a9babb71165305c3cec10fd6703eb"],["/docs/static/media/Fechamento-Sprint-2.c7d548b2.md","c7d548b29224d171ffb91a604a6869d5"],["/docs/static/media/Fechamento-Sprint-3.b35284a9.md","b35284a928a878fd6d64ec566d38b735"],["/docs/static/media/PersonalidadeDoBot.7e78f897.md","7e78f897aba987123dd9fd22884c8cef"],["/docs/static/media/background.483ac873.jpeg","483ac8730ff93b2d28599e555de6a85e"],["/docs/static/media/blanco.880dac2d.jpg","880dac2de8cfaa85ad3b9cc9b61273a7"],["/docs/static/media/braga.208b9396.jpeg","208b9396ed86b1be298a20e5f5c3f0ed"],["/docs/static/media/branches.16546ab4.md","16546ab4ea7b6832fa93a02b8371b8cd"],["/docs/static/media/brunosa.71b94b95.jpg","71b94b958da759f745003cccf5b2f5c9"],["/docs/static/media/canvas.61682fa6.md","61682fa69357ef97ef10f2f045419cc6"],["/docs/static/media/commits.ffe361a1.md","ffe361a169230bf184b811ec9dce21b5"],["/docs/static/media/comunicacao.5aac4996.md","5aac49960e27b814e2c70a8b272f0781"],["/docs/static/media/documento-de-arquitetura.3c0bceca.md","3c0bcecae9d2c72a3e8be50af9212023"],["/docs/static/media/documento-de-visao.6a9035dd.md","6a9035dd47df6b8e490a0c3b2eb98997"],["/docs/static/media/eap.26b93bb6.md","26b93bb6f013ae484b254b665eaf9d09"],["/docs/static/media/escopo.bd462746.md","bd4627462fca4377adfacc959a5d007f"],["/docs/static/media/evm.ba483976.md","ba483976de059dfcf85a0f40788dc375"],["/docs/static/media/gabriel.9d6d6039.jpg","9d6d603929882c59fee80daa0b86c876"],["/docs/static/media/gitflow.d4ce7697.md","d4ce7697beda9c949da1cabb57bbd2f0"],["/docs/static/media/guiaugusto.029756c4.jpg","029756c411be351faf217e577bf2f67f"],["/docs/static/media/guila.816e111c.jpeg","816e111c198239125da8c475adf3c7ff"],["/docs/static/media/guilhesme.b988c64c.jpg","b988c64c752261aa205a0f5069861387"],["/docs/static/media/icaro.48384985.jpg","483849858a27df85578064ab1bbe3d75"],["/docs/static/media/identidade-visual.0b4aa195.md","0b4aa1955b8e2ae1c08e969a7cfc8ae0"],["/docs/static/media/interviews.a2ada203.md","a2ada2031e75e6f0a356043970941fe0"],["/docs/static/media/issues.4a5891f5.md","4a5891f5d5c8f4a50ce4133df3aab843"],["/docs/static/media/leticia.11a4f8ca.jpeg","11a4f8ca0310cb0b6c981946886f2bf2"],["/docs/static/media/lino.2f8dfc5a.png","2f8dfc5a43d0a07d0732fee1e0bc640c"],["/docs/static/media/metodologia.7f37623c.md","7f37623ca1a76f7ebdefbaea800027b5"],["/docs/static/media/nfr.2fff7e30.md","2fff7e301a11b723e940253489b39fce"],["/docs/static/media/pedro.7da40ce2.jpeg","7da40ce2500bb12678806d050f5ce194"],["/docs/static/media/praticas-ageis.0b02bb1f.md","0b02bb1fac7cfb8e9818f8319c0ffe19"],["/docs/static/media/pull_request.d0edfb3f.md","d0edfb3f2408dbbe9a372506f033669a"],["/docs/static/media/quadro-conhecimentos.20711b85.md","20711b857dac0f0f48d9fcd4d6ade944"],["/docs/static/media/qualidade.f0f45e33.md","f0f45e33c779815891092d0cf45ef72f"],["/docs/static/media/roadmap-papeis.046fe6aa.md","046fe6aa5628304cd523ad525b1d95b4"],["/docs/static/media/roadmap.e81c2d9f.md","e81c2d9f13bbd37f033fb2dc9ee72334"],["/docs/static/media/template-abertura-sprint.7086b60d.md","7086b60d1e72302edfa79112c6d478cc"],["/docs/static/media/template-fechamento-sprint.3bbccd5d.md","3bbccd5d846ae16a38268614b836be2b"],["/docs/static/media/termo-de-abertura.550cb213.md","550cb2133a3e0ff4f591673ddbcb9d5f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/docs/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});