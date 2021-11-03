<template>
    <l-marker :lat-lng="coords">
        <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
    </l-marker>
</template>
<script>
import {
  LIcon,
  LMarker,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
    components: {
        LIcon,
        LMarker
    },
    props: ['lat', 'long'],
    data() {
        return {
        iconWidth: 25,
        iconHeight: 40,
        };
    },
    computed: {
        iconUrl() {
        return './icons/stop.svg';
        },
        iconSize() {
        return [this.iconWidth, this.iconHeight];
        },
        coords() {
            return [this.lat, this.long]
        }
  },
}
</script>
