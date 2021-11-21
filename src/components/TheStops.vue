<template>
    <stop-point 
        v-for="point in stops"
        :key="point.id"
        :lat = "point.lat"
        :long = "point.lon"
        :name = "point.name"
        ></stop-point>
</template>
<script>
import StopPoint from "./StopPoint.vue";

export default {
    components: {
        StopPoint
    },
    props: {
        stops: Array,
    }
};
</script>
