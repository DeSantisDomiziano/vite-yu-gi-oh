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
        methods: {
            archetypeArray() {
                this.store.cards.map((arch, i) => {
                
                if(!this.store.archetype.includes(arch.archetype)) {
                    this.store.archetype.push(arch.archetype)
                }

            })
            console.log(this.store.archetype);
            }
            
        },
        mounted() {
            this.store.yugiGeneratore()
            this.archetypeArray()
            
        }
    }
</script>

<template>

    <h2 class="py-3">
        Found  cards
    </h2>

    <div class="row g-4" v-if="store.loading">
        
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