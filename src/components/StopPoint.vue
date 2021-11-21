<template>
    <l-marker :lat-lng="coords">
        <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
        <l-popup>
            {{name}}
        </l-popup>
    </l-marker>
</template>
<script>
import {
    LIcon,
    LMarker,
    LPopup,
} from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LIcon,
        LMarker,
        LPopup,
    },
    props: ['id', 'lat', 'long', 'name'],
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
