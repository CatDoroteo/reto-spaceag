import Vue from 'vue';
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolygon,
  LPopup,
  LGeoJson,
  LCircle,
} from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-polygon', LPolygon);
Vue.component('l-popup', LPopup);
Vue.component('l-geo-json', LGeoJson);
Vue.component('l-circle', LCircle);
