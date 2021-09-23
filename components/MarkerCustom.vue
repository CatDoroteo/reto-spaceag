<template>
  <div>
    <l-marker ref="marker" :lat-lng="latlng">
      <l-popup
        :options="{className:'popup-custom',closeButton:false,autoClose:false,closePopupOnClick:false,maxWidth:180}"
      >
        <div class="content-popup">
          <div class="popup-inputs">
            <div class="popup-inputs__group">
              <label for>Muestras</label>
              <input @change="setData" v-model.number="num_samples" type="number" step="1" />
            </div>

            <div class="popup-inputs__group">
              <label for>Radio (m)</label>
              <input @change="setData" v-model.number="radio" type="number" step="1" />
            </div>
          </div>
          <div class="popup-delete">
            <button @click="deleteMarker">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path
                  d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </l-popup>
    </l-marker>
    <l-circle :lat-lng="latlng" :radius="radio" color="red" fillColor="red" />
  </div>
</template>
<script>
export default {
  props: ["latlng"],
  data() {
    return {
      num_samples: 1,
      radio: 10,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.marker.mapObject.openPopup();
    });
    this.setData();
  },
  methods: {
    setData() {
      this.$emit("set-marker", {
        position: {
          latitude: this.latlng[0],
          longitude: this.latlng[1],
        },
        radio: this.radio,
        num_samples: this.num_samples,
      });
    },
    deleteMarker() {
      this.$emit("delete-marker", {
        position: {
          latitude: this.latlng[0],
          longitude: this.latlng[1],
        },
      });
    },
  },
};
</script>
<style lang="scss">
.popup-custom {
  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip-container .leaflet-popup-tip {
    background: rgb(224, 224, 224) !important;
  }
  .leaflet-popup-content-wrapper .leaflet-popup-content {
    width: 180px !important;
  }
}
.content-popup {
  display: flex;
  max-width: 100%;
  .popup-inputs {
    width: 80%;
    padding-right: 8px;
    &__group {
      padding: 3px;
      display: flex;
      label {
        width: 60%;
      }
      input {
        width: 40%;
        border: none;
        background: white;
        border-radius: 3px;
      }
    }
  }
  .popup-delete {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid gray;
    button {
      svg {
        fill: gray !important;
      }
    }
  }
}
</style>