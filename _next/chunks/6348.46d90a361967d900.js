(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6348],{16348:function(e,o,t){"use strict";t.r(o),t.d(o,{StaticMap:function(){return l}});var n=t(85893),a=t(67294),r=t(41125),c=t(4298),s=t.n(c),i=t(9008),u=t.n(i),l=function(e){var o=e.latLng,t=void 0===o?{lat:37.0902,lng:-95.7129}:o,c=e.markerColor,i=void 0===c?r.theme.extend.colors.indigo[600]:c,l=e.theme,m=void 0===l?"light-v11":l,d=e.className,f=e.zoom,b=void 0===f?10:f,p=function(e){if(t&&e){if(v)v.setLatLng([j.current.lat,j.current.lng]);else{var o=window.L;h(o.marker([j.current.lat,j.current.lng],{icon:o.mapbox.marker.icon({"marker-color":y.current})}).addTo(e))}e.panTo([j.current.lat,j.current.lng])}},x=(0,a.useState)(null),v=x[0],h=x[1],k=(0,a.useState)(null),g=k[0],w=k[1],j=(0,a.useRef)(t),y=(0,a.useRef)(i),T=(0,a.useRef)(m),Z=(0,a.useRef)("map-".concat((new Date).getTime(),"-").concat(Math.floor(1e3*Math.random())));return(0,a.useEffect)((function(){t&&(j.current=t),p(g)}),[t]),(0,a.useEffect)((function(){i&&(y.current=i),v&&v.setIcon(L.mapbox.marker.icon({"marker-color":y.current}))}),[i]),(0,a.useEffect)((function(){m&&(T.current=m),function(e){if(e){var o="mapbox://styles/mapbox/".concat(T.current);window.L.mapbox.styleLayer(o).addTo(e)}}(g)}),[m]),(0,a.useEffect)((function(){var e;function o(){var t=window.L;if(null===t||void 0===t?void 0:t.mapbox){t.mapbox.accessToken="pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw";var n=t.mapbox.map(Z.current).setView([0,0],b);n.dragging.disable(),n.touchZoom.disable(),n.doubleClickZoom.disable(),n.scrollWheelZoom.disable(),n.boxZoom.disable(),n.keyboard.disable(),n.tap&&n.tap.disable(),t.mapbox.styleLayer("mapbox://styles/mapbox/".concat(T.current)).addTo(n),p(n),w(n)}else e=setTimeout((function(){o()}),500)}return e=setTimeout((function(){o()}),500),function(){clearTimeout(e),g&&g.remove()}}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u(),{children:(0,n.jsx)("link",{href:"https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.css",rel:"stylesheet"})}),(0,n.jsx)(s(),{strategy:"lazyOnload",src:"https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.js"}),(0,n.jsx)("div",{className:null!==d&&void 0!==d?d:"w-full h-full",id:Z.current})]})}},4298:function(e,o,t){e.exports=t(20699)}}]);