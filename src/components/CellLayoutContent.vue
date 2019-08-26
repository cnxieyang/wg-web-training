<template>
    <div>
        <cell-layout v-for="cell in row" :cell="cell"></cell-layout>
    </div>
</template>

<script>
    import CellLayout from 'CellLayoutContent.vue'

    export default {
        props: ['row'],
        computed: {},
        components: {
            CellLayout
        }

    }

</script>

<style lang="scss">


</style>
