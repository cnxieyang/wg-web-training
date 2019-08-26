<template>
    <div style="width: 1000px;height: 600px;margin: 0 auto;position: absolute" class="weather_bg">
        <img src="../assets/400.svg" class="current_weather"/>
        <div style="margin-top: 60px;margin-left: 52px">
            <span style="font-size: 80px;color: white">16°</span>
        </div>
        <div style="margin-top: 65px;margin-left: 52px;background-color: #b5eb45;width: 200px;height: 50px">
            <span style="font-size: 35px;color: white">空气质量 优</span>
        </div>

        <div style="">

        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style lang="scss">
    .weather_bg {
        background-image: url("../assets/bg_rain.png");
    }

    .current_weather {
        width: 30px;
        margin-left: 52px;
        margin-top: 52px;

    }

</style>
