<script>
import { store } from '../store.js'
import GenerateCard from './GenerateCard.vue'
import FilterCard from './FilterCard.vue'
    export default {
        components: {
            GenerateCard,
            FilterCard
        },
        name: 'CardColletion',
        data() {
            return {
                store
            }
        },
        methods: {       
            filterArchetype() {
                let newUrl;
                if(store.archetype === '') {
                    newUrl = store.api_url
                } else {
                    newUrl = `${store.api_url}&archetype=${store.archetype}`
                }
                store.yugiGeneratore(newUrl)
            }
        },
        mounted() {
            store.yugiGeneratore(store.api_url)     
        }
    }
</script>

<template>

    <FilterCard
    @filter="filterArchetype()"/>
    

    <h2 class="py-3">
        Found {{ store.cards.length }} cards
    </h2>

    <div class="row row-cols-5 g-4" v-if="store.loading">
        
        <GenerateCard 
        v-for="card in store.cards"
        :src="card.card_images[0].image_url"
        :txt="card.name"
        :type="card.archetype"/>
    </div>
     <div class="row" v-else>
        <div class="col"><h2>Loading.. 👀</h2></div>
    </div> 
</template>

<style lang="scss" scoped>
h2 {
    background-color: #313131;
    color: #ffffff
}
</style>