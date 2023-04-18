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
            archetypeArray() {
                store.cards.map((arch) => {
                
                if(!store.archetypes.includes(arch.archetype)) {

                    if(arch.archetype != undefined){

                        store.archetypes.push(arch.archetype)
                    }
                }

            })
            store.archetypes = [...store.archetypes];
            console.log(store.archetypes);
            },

            clickChanged() {

            }
            
        },
        mounted() {
            store.yugiGeneratore()
            setTimeout(this.archetypeArray, 1000)
            
        }
    }
</script>

<template>

    <div v-if="store.archetypes.length > 0">
        <FilterCard @ArchChanged="clickChanged"
        :archetypes="[...store.archetypes]"
    />
    </div>
    

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