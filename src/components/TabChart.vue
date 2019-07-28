<template>
    <div class="chart">
        <img :src="image_url">
    </div>
</template>

<script>
    import fangkeshu from '../assets/fangkeshu.jpg'
    import fangwenliang from '../assets/fangwenliang.jpg'
    import fangwenshichang from '../assets/fangwenshichang.jpg'

    export default {
        props: ['image_index'],
        computed: {
            image_url() {
                if (this.image_index == 0) {
                    return fangkeshu
                }
                else if (this.image_index == 1) {
                    return fangwenliang
                } else {
                    return fangwenshichang
                }
            }
        }

    }

</script>

<style lang="scss">

    .chart {
        img {
            width: 1400px;
        }
    }


</style>
