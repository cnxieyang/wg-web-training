<template>
    <div>
        <div class="layout_contents">
            <row-loayout v-for="row_layout in rows " :row="row_layout"></row-loayout>
        </div>
    </div>

</template>

<script>
    import RowLoayout from 'RowLayoutContent.vue'

    export default {
        data() {
            return {
                rows: [
                    {
                        row:
                            [{value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}]
                    },
                    {
                        row:
                            [{value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}]
                    }

                ]

            }
        },

        components: {
            RowLoayout
        }
        ,
        methods: {}
    }
</script>
<style lang="scss">

</style>
