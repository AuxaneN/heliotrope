!function(n){var e={};function t(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)t.d(i,s,function(e){return n[e]}.bind(null,s));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var i=t(1),s=t(2);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[n.i,s,""]]);var o={insert:"head",singleton:!1},r=(i(s,o),s.locals?s.locals:{});n.exports=r},function(n,e,t){"use strict";var i,s=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function a(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},i=[],s=0;s<n.length;s++){var o=n[s],l=e.base?o[0]+e.base:o[0],c=t[l]||0,p="".concat(l," ").concat(c);t[l]=c+1;var u=a(p),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(r[u].references++,r[u].updater(d)):r.push({identifier:p,updater:g(d,e),references:1}),i.push(p)}return i}function c(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var s=t.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var r=o(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var p,u=(p=[],function(n,e){return p[n]=e,p.filter(Boolean).join("\n")});function d(n,e,t,i){var s=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=u(e,s);else{var o=document.createTextNode(s),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(o,r[e]):n.appendChild(o)}}function h(n,e,t){var i=t.css,s=t.media,o=t.sourceMap;if(s?n.setAttribute("media",s):n.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var m=null,b=0;function g(n,e){var t,i,s;if(e.singleton){var o=b++;t=m||(m=c(e)),i=d.bind(null,t,o,!1),s=d.bind(null,t,o,!0)}else t=c(e),i=h.bind(null,t,e),s=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else s()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var s=a(t[i]);r[s].references--}for(var o=l(n,e),c=0;c<t.length;c++){var p=a(t[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}t=o}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,".fullscreen {\n  z-index: 99;\n  position: fixed;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  top: 50%;\n  left: 50%;\n  width: 60vw !important;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 100%;\n  -webkit-transition: 0.5;\n  transition: 0.5;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  font-family: 'DM Sans';\n  font-size: 16px;\n  color: #585858;\n}\n\nbody h1, body h2, body h3 {\n  font-family: 'DM Serif Display';\n  color: #6F5A7E;\n  text-transform: uppercase;\n}\n\nbody h1.highlight, body h2.highlight, body h3.highlight {\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  background-color: #ff677d;\n  padding: 20px;\n  color: white;\n}\n\nbody h1 {\n  font-size: 2em;\n}\n\nbody span.link-highlight {\n  color: #ff677d;\n  text-decoration: underline;\n}\n\nsection {\n  margin: 100px 0px;\n}\n\n.info {\n  position: fixed;\n  z-index: 99;\n  bottom: 20px;\n  left: 20px;\n  background-color: #62F293;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n}\n\n.info img {\n  width: 3em;\n}\n\n.info p {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n\n.flex-row-container {\n  margin: auto;\n  text-align: center;\n}\n\n.flex-row-container button {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.nav-container {\n  z-index: 99;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n}\n\n.disclaimer {\n  display: block;\n  top: 0px;\n  width: 100%;\n  height: 30px;\n  margin-left: -10px;\n  background-color: #62F293;\n  text-align: center;\n}\n\nhtml:not([data-scroll='0']) nav {\n  margin-left: -10px;\n  position: fixed;\n  height: 80px;\n  text-align: initial;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n}\n\nhtml:not([data-scroll='0']) nav img {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  display: inline;\n  margin: 0px;\n}\n\nhtml:not([data-scroll='0']) nav ul {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-bottom: 10px;\n}\n\nnav {\n  height: 122px;\n  width: 100%;\n  margin-left: -10px;\n  display: column;\n  text-align: center;\n  background-color: #fff;\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n}\n\nnav img {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  display: block;\n  width: 288px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nnav ul {\n  -webkit-transition: 1s;\n  transition: 1s;\n  display: block;\n  padding: 0px;\n}\n\nnav ul li {\n  display: inline;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: #585858;\n}\n\nnav ul li.selected {\n  position: relative;\n}\n\nnav ul li.selected:after {\n  content: ' ';\n  position: absolute;\n  display: inline-block;\n  bottom: -10px;\n  left: 0px;\n  background-color: #62F293;\n  height: 10px;\n  width: 100%;\n}\n\nsection:first-child {\n  margin-top: 160px;\n}\n\nsection:first-child.hero-paragraph {\n  margin-top: 160px;\n}\n\n.hero-banner {\n  position: relative;\n  width: 100%;\n  height: 600px;\n}\n\n.hero-banner .banner-text {\n  z-index: 2;\n  position: absolute;\n  right: 20px;\n  text-align: right;\n  color: #323235;\n}\n\n.hero-banner .banner-text p {\n  margin-top: 10px;\n}\n\n.hero-banner .banner-text h1 {\n  font-size: 3.3em;\n  color: #323235;\n  margin-bottom: 0px;\n  line-height: 1em;\n}\n\n.hero-banner .banner-text.centered {\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 650px;\n  text-align: center;\n  right: initial;\n  padding: 30px;\n  background-color: rgba(0, 0, 0, 0.315);\n}\n\n.hero-banner .banner-text.centered h1 {\n  color: white;\n  margin: 0px;\n  margin-bottom: 10px;\n}\n\n.hero-banner .bg-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  margin-left: -10px;\n  width: 100vw;\n  height: 600px;\n  background: #000;\n  opacity: 0.2;\n}\n\n.hero-banner .bg-img {\n  z-index: 0;\n  width: 100vw;\n  height: 600px;\n  margin-left: -10px;\n}\n\n.hero-banner .bg-img.banner-one {\n  background: url(\"assets/bannerone.png\") no-repeat scroll center;\n  background-size: cover;\n}\n\n.hero-banner .bg-img.banner-two {\n  background: url(\"assets/bannertwo.png\") no-repeat scroll center;\n  background-size: cover;\n}\n\n.hero-text {\n  width: 80%;\n  height: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n}\n\n.hero-text .content-container {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 2;\n  width: 570px;\n  height: auto;\n  padding: 30px;\n  background-color: white;\n  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n}\n\n.hero-text .content-container .content-title {\n  margin: 0px;\n}\n\n.hero-text .hero-text-img {\n  position: absolute;\n  right: 0px;\n  width: 795px;\n  height: 600px;\n}\n\n.hero-text .hero-text-img.bg {\n  background: url(\"assets/bouquet.png\") no-repeat scroll center;\n  background-size: 795px auto;\n  -webkit-transition: 2s;\n  transition: 2s;\n  background-color: gray;\n}\n\n.hero-text .hero-text-img.bg:hover {\n  -webkit-transition: 2s;\n  transition: 2s;\n  background-size: 900px auto;\n}\n\n.hero-text .winner-portrait {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 200px;\n  height: auto;\n  border: solid 6px #62F293;\n  border-radius: 100%;\n  -webkit-transform: translateY(30%) translateX(30%);\n          transform: translateY(30%) translateX(30%);\n}\n\n.shop-list-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: row;\n      -ms-flex: row;\n          flex: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin: 50px 40px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  max-width: 1366px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.shop-list-icon .shop-list-item {\n  max-width: 325px;\n  min-width: 200px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 100px 1;\n          flex: 1 100px 1;\n}\n\n.shop-list-icon .shop-list-item .row1, .shop-list-icon .shop-list-item .row2 {\n  width: 100%;\n  position: relative;\n  margin: 10px 0px;\n}\n\n.shop-list-icon .shop-list-item .row1 *, .shop-list-icon .shop-list-item .row2 * {\n  display: inline-block;\n}\n\n.shop-list-icon .shop-list-item .row1 h4, .shop-list-icon .shop-list-item .row1 p, .shop-list-icon .shop-list-item .row2 h4, .shop-list-icon .shop-list-item .row2 p {\n  width: 45%;\n  margin: 0px;\n}\n\n.shop-list-icon .shop-list-item .row1 p.price, .shop-list-icon .shop-list-item .row1 img.cart, .shop-list-icon .shop-list-item .row2 p.price, .shop-list-icon .shop-list-item .row2 img.cart {\n  position: absolute;\n  width: 40px;\n  right: 0px;\n  top: 0px;\n}\n\n.shop-list-icon .shop-list-item .row1 img.cart, .shop-list-icon .shop-list-item .row2 img.cart {\n  width: 30px;\n  background-color: #ff677d;\n  border-radius: 5px;\n  padding: 6px 10px 10px 10px;\n}\n\n.shop-list-icon .shop-list-item img {\n  cursor: pointer;\n}\n\n.shop-list-icon .shop-list-item .fullscreenbtn {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  fill: black;\n  background-color: white;\n  border-radius: 5px;\n  padding: 5px;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n}\n\n.shop-list-icon .shop-list-item .fullscreenbtn:hover {\n  background-color: #ff677d;\n  fill: white;\n}\n\n.shop-list-icon .shop-list-item .shop-list-item-img {\n  width: 100%;\n}\n\n.hero-paragraph {\n  text-align: center;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.date {\n  color: #B4B4B4;\n}\n\ninput {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 30px;\n  border: solid 1px #ff677d;\n  border-radius: 5px;\n}\n\ninput[type=\"text\"] {\n  width: 300px;\n}\n\ntextarea {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: solid 1px #ff677d;\n  border-radius: 5px;\n  width: 100%;\n}\n\nform {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto;\n      grid-template-columns: auto auto;\n  -ms-grid-rows: auto auto 150px;\n      grid-template-rows: auto auto 150px;\n  -webkit-column-gap: 10px;\n          column-gap: 10px;\n  row-gap: 10px;\n  width: 620px;\n  margin: auto;\n}\n\nform input {\n  grid-column: span 1;\n}\n\nform input[type=\"text\"] {\n  width: 100%;\n}\n\nform textarea {\n  grid-column: span 2;\n}\n\nbutton {\n  border: none;\n  font-family: 'DM Sans';\n  font-size: 18px;\n  font-weight: bold;\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n  height: 30px;\n  border-radius: 5px;\n}\n\nbutton.primary {\n  color: #fff;\n  cursor: pointer;\n  background: #ff677d;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\nbutton.primary:hover {\n  color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  background: #6F5A7E;\n}\n\nbutton.secondary {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #6F5A7E;\n  cursor: pointer;\n  background: white;\n  border: #6F5A7E solid 1px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\nbutton.secondary:hover {\n  color: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  background: #6F5A7E;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\nfooter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\nfooter * {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 300px;\n          flex: 0 300px;\n}\n\nfooter p:first-child {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 300px;\n          flex: 0 300px;\n}\n\nfooter ul {\n  list-style: none;\n}\n\nfooter ul a {\n  color: #585858;\n}\n\nfooter ul a:hover {\n  color: #62F293;\n}\n\nfooter ul a:visited {\n  color: #B4B4B4;\n}\n\nfooter ul a:visited:hover {\n  color: #ff677d;\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var s=(r=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([s]).join("\n")}var r,a,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var s={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(s[r]=!0)}for(var a=0;a<n.length;a++){var l=[].concat(n[a]);i&&s[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){"use strict";t.r(e);t(0);const i=new Date,s=i.getDate(),o=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"][i.getMonth()],r=i.getFullYear();const a=['<section class="hero-banner">\n<div class="banner-text top-right">\n  <h1>\n    l\'heure du<br/>printemps\n  </h1>\n  <p>\n    Découvrez les bouquets de début de saison\n  </p>\n  <button class="primary">C\'EST PARTI</button>\n</div>\n<div class="bg-img banner-one">\n</div>\n</section>\n\n<section class="hero-text">\n<div class="content-container">\n  <h2 class="content-title">\n    Le bouquet du mois\n  </h2>\n  <p class="content-text">\n    Comme chaque mois, nous choisissons la création de l’équipe qui a inspiré le plus de monde, vous et nous.\n  </p>\n    <p class="content-text">Ce mois-ci, c’est le bouquet d’Axelle qui remporte la palme !</p>\n    <p class="content-text">Le bouquet du mois est choisi tous les mois parmis les bouquets unique de l’équipe fleuriste d’Héliotrope ! \n    Si un bouquet vous plait mais que vous n’avez pas eu le temps de l’acheter, votez pour lui sur nos réseaux sociaux en le likant :</p>\n    <p><a href="#"><img src="assets/twitter.svg" alt="Twitter"></a>\n      <a href="#"><img src="assets/facebook.svg" alt="Facebook"></a>\n      <a href="#"><img src="assets/pinterest.svg" alt="Pinterest"></a>\n      <a href="#"><img src="assets/instagram.svg" alt="Instagram"></a></p>\n    \n  </p>\n</div>\n<div class="hero-text-img bg"></div>\n<img class="winner-portrait" src="assets/Axelle.png" alt="Axelle, inspiration du mois !">\n</section>\n\n<section class="hero-paragraph">\n<h1 class="hero-paragraph-title highlight">\n  Commander un bouquet\n</h1>\n<p class="hero-paragraph-text">\n  Depuis notre magasin en ligne, vous avez le choix entre plusieurs bouquets : <br/>les classiques, les eternels, les thématiques, les personnalisés  etc... <br/>\n  Précisez la date et l’heure à laquelle il vous les faut et nous les réaliserons juste avant votre arrivée, pour que vos fleurs restent fraiches plus longtemps.\n</p>\n<div class="flex-row-container">\n  <a href="#"><button class="primary">VOIR LE MAGASIN</button></a>\n  <a href="#"><button class="secondary">EN SAVOIR PLUS</button></a>\n</div>\n</section>\n\n<section class="shop-list-icon">\n\n<div class="shop-list-item">\n  <img src="https://via.placeholder.com/325x338" alt="" class="shop-list-item-img">\n  <div class="row1">\n    <h4>Nom de produit</h4>\n    <p class="price">12,99</p>\n  </div>\n  <div class="row2">\n    <p>Lorem ipsum dolor sit amet consectetur.</p>\n    <img src="assets/cart.svg" alt="Ajouter au panier" class="cart">\n  </div>\n</div>\n<div class="shop-list-item">\n  <img src="https://via.placeholder.com/325x338" alt="" class="shop-list-item-img">\n  <div class="row1">\n    <h4>Nom de produit</h4>\n    <p class="price">12,99</p>\n  </div>\n  <div class="row2">\n    <p>Lorem ipsum dolor sit amet consectetur.</p>\n    <img src="assets/cart.svg" alt="Ajouter au panier" class="cart">\n  </div>\n</div>\n<div class="shop-list-item">\n  <img src="https://via.placeholder.com/325x338" alt="" class="shop-list-item-img">\n  <div class="row1">\n    <h4>Nom de produit</h4>\n    <p class="price">12,99</p>\n  </div>\n  <div class="row2">\n    <p>Lorem ipsum dolor sit amet consectetur.</p>\n    <img src="assets/cart.svg" alt="Ajouter au panier" class="cart">\n  </div>\n</div>\n<div class="shop-list-item">\n  <img src="https://via.placeholder.com/325x338" alt="" class="shop-list-item-img">\n  <div class="row1">\n    <h4>Nom de produit</h4>\n    <p class="price">12,99</p>\n  </div>\n  <div class="row2">\n    <p>Lorem ipsum dolor sit amet consectetur.</p>\n    <img src="assets/cart.svg" alt="Ajouter au panier" class="cart">\n  </div>\n</div>\n\n</section>\n\n<section class="hero-paragraph">\n<h1 class="hero-paragraph-title">\nLa newsletter des ateliers  \n</h1>\n<p class="hero-paragraph-text">\n  Tous les mois, nous vous envoyons le planning des ateliers du mois a venir.\n  <br>\nSi un atelier vous plait, vous n’avez plus qu’a vous inscrire.\n</p>\n<p class="hero-paragraph-text">\nRenseignez votre adresse ci-dessous, vous pouvez vous desinscrire a tout moment !\n</p>\n<p class="hero-paragraph-text">\n  La liste de tous nos ateliers est aussi <span class="link-highlight">disponible ici.</span>\n</p>\n<div class="flex-row-container">\n  <input type="text" placeholder="Votre adresse e-mail"/>\n  <a href="#"><button class="primary">S\'INSCRIRE</button></a>\n</div>\n</section>','    <section class="hero-banner">\n<div class="banner-text centered">\n  <h1>\n    Un espace pensé pour des moments magiques\n  </h1>\n  <button class="primary">C\'EST PARTI</button>\n</div>\n<div class="bg-img banner-two">\n</div>\n</section>\n\n<section class="hero-paragraph">\n<h1 class="hero-paragraph-title highlight">\n  Demander un devis\n</h1>\n<p class="hero-paragraph-text">\n  Renseignez notre formulaire de devis et un expert vous contactera pour établir un devis.\n  <br>Il répondra aussi à toutes vos questions !\n</p>\n<div class="flex-row-container">\n  <a href="#"><button class="secondary">EN SAVOIR PLUS</button></a>\n</div>\n<form class="mt-20" action="#">\n  <input type="text" placeholder="Nom">\n  <input type="text" placeholder="Prénom">\n  <input type="text" placeholder="Numéro de téléphone">\n  <input type="text" placeholder="Adresse e-mail">\n  <textarea name="demande" id="" cols="30" rows="30" placeholder="Décrivez votre demande !"></textarea>\n</form>\n<div class="flex-row-container">\n  <a href="#"><button class="primary mt-20">ENVOYER LA DEMANDE</button></a>\n</div>\n</section>\n<div class="flex-row-container">\n  <h1>Nos créations</h1>\n</div>\n<section class="shop-list-icon">\n<div class="shop-list-item">\n  <img src="assets/scene1.png" alt="" class="shop-list-item-img">\n</div>\n<div class="shop-list-item">\n  <img src="assets/scene2.png" alt="" class="shop-list-item-img">\n</div>\n<div class="shop-list-item">\n  <img src="assets/scene3.png" alt="" class="shop-list-item-img">\n</div>\n<div class="shop-list-item">\n  <img src="assets/scene4.png" alt="" class="shop-list-item-img">\n</div>\n</section>\n\n<section class="hero-paragraph">\n<h1 class="hero-paragraph-title">\n  Notre philosophie\n</h1>\n<p class="hero-paragraph-text">\n  Créer un espace dédié au vert, c’est notre domaine, mais c’est aussi notre philosophie. <br>Marketing gamification virality early adopters assets startup technology research & development holy grail return on investment sales user experience. <br>\n  Virality stealth traction. Bandwidth client business plan burn rate customer incubator. Startup conversion customer influencer creative branding value proposition prototype infrastructure validation business-to-consumer business-to-business. Agile development freemium non-disclosure agreement.\n  C’est pour cela que nous nous attachons une attention cruciale à la qualité de nos services.\n</p>\n</section>',`<section class="hero-paragraph">\n<h1 class="hero-paragraph-title">\n  Les ateliers\n</h1>\n<p class="hero-paragraph-text">\n  Plusieurs fois dans le mois, nous organisons des ateliers de création florale.\n  Vous trouverez la liste des ateliers à venir ci-dessous.\n  Inscrivez-vous à notre newsletter pour recevoir les ateliers tous les mois !\n</p>\n</section>\n<section class="hero-text">\n<div class="content-container">\n  <h2 class="content-title">\n    Atelier terrarium\n  </h2>\n  <span class="date">${s} ${o} ${r}</span>\n  <p class="content-text">\n    Apportez une touche de vert a votre bureau en lui donnant son propre écosysteme. <br/>\n    Amenez un recipient de votre choix, selon le guide fournit avec l’atelier et remplissez-le avec les plantes mises a votre disposition.<br/>\n\n    Ces terrariums requièrent peu d’attention et font le cadeau parfait pour vos amis qui n’ont pas la main verte.\n  </p>\n  <button class="primary">S'INSCRIRE</button>\n</div>\n<img src="assets/atelier1.png" class="hero-text-img">\n</section>\n<section class="hero-text">\n<div class="content-container">\n  <h2 class="content-title">\n    Atelier bouquet\n  </h2>\n  <span class="date">${s+7} ${o} ${r}</span>\n  <p class="content-text">\n    Apportez une touche de vert a votre bureau en lui donnant son propre écosysteme. <br/>\n    Amenez un recipient de votre choix, selon le guide fournit avec l’atelier et remplissez-le avec les plantes mises a votre disposition.<br/>\n\n    Ces terrariums requièrent peu d’attention et font le cadeau parfait pour vos amis qui n’ont pas la main verte.\n  </p>\n  <button class="primary">S'INSCRIRE</button>\n</div>\n<img src="assets/atelier2.png" class="hero-text-img">\n</section>\n<section class="hero-text">\n<div class="content-container">\n  <h2 class="content-title">\n    Atelier Ikebana\n  </h2>\n  <span class="date">${s+14} ${o} ${r}</span>\n  <p class="content-text">\n    Enchantez votre espace avec une pièce d'art floral japonais ! \n    Amenez un recipient de votre choix, selon le guide fournit avec l’atelier et remplissez-le avec les plantes mises a votre disposition.\n  </p>\n  <button class="primary">S'INSCRIRE</button>\n</div>\n<img src="assets/atelier3.png" class="hero-text-img">\n</section>`,'\n<section class="hero-paragraph">\n<h1 class="hero-paragraph-title">\n  Contact\n</h1>\n<p class="hero-paragraph-text">\n Bonjour ! <br>\n Ce site web est une démo. <br>\n Si vous êtes intéressé par un site web,<br>\n contactez le développeur du site à l\'adresse suivante : <br/>\n <h4>contact@auxanenith.fr</h4>\n</p>\n</section>\n','\n<section class="hero-paragraph">\n<h1>A propos</h1>\n<p>\n  Ce site est une démo crée par Auxane Nitharum, UI designer et développeur front-end freelance.<br>\n  Si vous, ou une personne de votre entourage, êtes intéressé par un site web, peu importe le genre, contactez-moi :\n  contact@auxanenith.fr\n</p>\n<h1>Crédits images</h1>\n<p>\n  Les photographies utilisées sur ce site sont libres de droit. <br>\n  Par ordre d\'apparition sur le site : <br>\n  <a href="https://unsplash.com/photos/u00JdM5HCX0" target="_blank">Alexandra Gorn</a><br>\n  <a href="https://unsplash.com/photos/LfT2t-E08kw" target="_blank">Haydn Golden</a><br>\n  <a href="https://unsplash.com/photos/JjT_7MwREm4" target="_blank">Martin Kníže</a><br>\n  <a href="https://unsplash.com/photos/rAb8eIfSNx8" target="_blank">Bastien Ruhland</a><br>\n  <a href="https://unsplash.com/photos/z0yLeAJg-UA" target="_blank">Aurelien Thomas</a><br>\n  <a href="https://unsplash.com/photos/CBrjgZ53NOs" target="_blank">Michael Olsen</a><br>\n  <a href="https://unsplash.com/photos/2cFxxNtgrb8" target="_blank">Thomas Smith</a><br>\n  <a href="https://unsplash.com/photos/Ts0830UlVOM" target="_blank">Neslihan Gunaydin</a><br>\n  <a href="https://unsplash.com/photos/s3AFTBZ3cnc" target="_blank">Carrie Beth Williams</a><br>\n  <a href="https://unsplash.com/photos/RRl4UPoC-8E" target="_blank">Anna Cicognani</a><br>\n</p>\n<p>\n  La personne en première page n\'est pas réelle. Il s\'agit d\'un visage humain généré via une intelligence artificielle via le site :\n  <a href="https://www.thispersondoesnotexist.com/">https://www.thispersondoesnotexist.com/</a>\n</p>\n</section>\n\n'],l=()=>{document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",(n=>{let e;return(...t)=>{e&&cancelAnimationFrame(e),e=requestAnimationFrame(()=>{n(...t)})}})(l),{passive:!0}),l();var c={navItems:document.querySelectorAll(".nav-list .nav-list-item"),fullscreenButton:document.querySelectorAll(".fullscreenbtn"),paysagiste:document.querySelector('.selected[data-cat="1"]'),images:document.querySelectorAll(".shop-list-item"),page:document.querySelector('.nav-list-item[data-cat="1"]')};const p=document.querySelectorAll(".shop-list-item");Array.from(p);(n=>{let e=Array.from(n);const t=[e[0]];e.map(n=>{n.addEventListener("click",()=>{var e;n.classList.contains("selected")||(e=parseInt(n.dataset.cat),document.querySelector(`div[data-cont="${e}"]`).insertAdjacentHTML("beforeend",a[e])),n.classList.add("selected"),-1==t.indexOf(n)&&t.push(n),n!==t[0]&&t.map(n=>{(n=>{document.querySelector(`div[data-cont="${n}"]`).innerHTML=""})(parseInt(n.dataset.cat)),n.classList.remove("selected"),t.splice(t.indexOf(n),1)})})})})(c.navItems),c.page.addEventListener("click",(function(){const n=document.querySelectorAll(".shop-list-item");Array.from(n).map(n=>n.addEventListener("click",n=>{n.target.classList.contains("fullscreen")?n.target.classList.remove("fullscreen"):n.target.classList.add("fullscreen")}))}))}]);