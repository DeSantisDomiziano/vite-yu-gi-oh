<script>
import { store } from '../store.js'
import GenerateCard from './GenerateCard.vue'
    export default {
        components: {
            GenerateCard
        },
        name: 'CardColletion',
        data() {
            return {
                store
            }
        },
        mounted() {
            console.log(this.store);
        }
    }
</script>

<template>
    <div class="row">
        <div class="col-12">
            <h2 class="py-2">
                Found xx cards
            </h2>
        </div>
        <GenerateCard/>
    </div>
</template>

<style lang="scss" scoped>
.col-12 {
    background-color: #313131;
    color: #ffffff
}
</style>