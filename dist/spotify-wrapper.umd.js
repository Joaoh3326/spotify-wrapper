!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SpotifyWrapper=e():t.SpotifyWrapper=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,e),u.l=!0,u.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){t.exports=n(1).default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),s=r(o),a=n(3),f=r(a),c=n(4),l=r(c),p=n(5),d=r(p),b=function(){function t(e){u(this,t),this.apiURL=e.apiURL||l.default,this.token=e.token,this.album=f.default.bind(this)(),this.search=s.default.bind(this)()}return i(t,[{key:"request",value:function(t){var e={headers:{Authorization:"Bearer "+this.token}};return fetch(t,e).then(d.default)}}]),t}();e.default=b},function(t,e,n){"use strict";function r(t,e){return this.request(this.apiURL+"/search?q="+e+"&type="+t)}function u(){return{artists:r.bind(this,"artist"),albums:r.bind(this,"album"),tracks:r.bind(this,"track"),playlists:r.bind(this,"playlist")}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=u},function(t,e,n){"use strict";function r(){var t=this;return{getAlbum:function(e){return t.request(t.apiURL+"/albums/"+e)},getAlbums:function(e){return t.request(t.apiURL+"/albums/?ids="+e)},getTracks:function(e){return t.request(t.apiURL+"/albums/"+e+"/tracks")}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default="https://api.spotify.com/v1"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t.json()};e.default=r}])});
//# sourceMappingURL=spotify-wrapper.umd.js.map