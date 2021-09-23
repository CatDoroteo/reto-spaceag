<template>
  <v-row>
    <v-col>
      <div class="header d-flex justify-space-between">
        <p>SAMPLING POINTS</p>
        <v-btn depressed color="primary" @click="sendInfo">Guardar</v-btn>
      </div>
      <br />
      <client-only>
        <l-map
          @click="addMarker($event)"
          style="height:500px; width:100%"
          :zoom="17"
          :center="center"
          ref="myMap"
        >
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <marker-custom
            @set-marker="setMarker($event)"
            @delete-marker="deleteMarker($event)"
            v-for="(item, index) in markers"
            :key="index"
            :latlng="item"
            :index="index"
          ></marker-custom>
          <l-geo-json ref="myGeojson" :geojson="dato"></l-geo-json>
        </l-map>
      </client-only>
    </v-col>
  </v-row>
</template>
<script>
import data from "../static/data";
import Markercustom from "@/components/MarkerCustom.vue";
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",
        },
      ],
    };
  },
  data() {
    return {
      center: [51.505, -0.159],
      coordinates: [],
      markers: [],
      map: null,
      dato: null,
      fillColor: "#e4ce7f",
      enableTooltip: true,
      geojson: null,
      result: {
        markers: [],
      },
    };
  },
  components: { "marker-custom": Markercustom },
  async mounted() {
    this.dato = data;
    this.$nextTick(() => {
      this.map = this.$refs.myMap.mapObject.whenReady(() => {
        this.geojson = this.$refs.myGeojson.mapObject;
      });
      this.map.fitBounds(this.geojson.getBounds());
    });
  },
  methods: {
    addMarker(e) {
      this.markers.push(Object.values(e.latlng));
    },
    setMarker(e) {
      // let point = [e.position.latitude, e.position.longitude];
      // let ponts = turf.point(point);
      // let algo = turf.lineString(this.dato.features[0].geometry.coordinates[0]);
      // let porfavor = turf.booleanContains(algo, ponts);
      // console.log(porfavor);
      this.result.markers.push(e);
    },
    deleteMarker(e) {
      let arrFilter = [];
      let markerFilter = [];
      this.result.markers.map((r) => {
        if (
          e.position.latitude !== r.position.latitude &&
          e.position.longitude !== r.position.longitude
        ) {
          arrFilter.push(r);
        }
      });
      this.result.markers = arrFilter;
      this.markers.map((m) => {
        if (m[0] !== e.position.latitude && m[1] !== e.position.longitude) {
          markerFilter.push(m);
        }
      });
      this.markers = markerFilter;
    },
    sendInfo() {
      console.log(this.result);
    },
  },
  computed: {},
};
</script>
