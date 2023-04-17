<script>
import { store } from '../store.js'
import axios from "axios"
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
        methods:{
            yugiGeneratore(){
                axios
                .get(store.url)
                .then(resp => {
                    store.cards = resp.data.data
                    console.log(store.cards);

                })
            }
        },
        mounted() {
            this.yugiGeneratore()
            //console.log(this.store);
        }
    }
</script>

<template>
    <div class="row">
        <div class="col-12 my-3">
            <h2 class="py-2">
                Found xx cards
            </h2>
        </div>
        <GenerateCard 
        v-for="card in store.cards"
        :src="card.card_images[0].image_url"
        :txt="card.name"
        :type="card.archetype"/>
    </div>
</template>

<style lang="scss" scoped>
.col-12 {
    background-color: #313131;
    color: #ffffff
}
</style>