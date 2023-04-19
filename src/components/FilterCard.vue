<script>
import {store} from '../store'
import axios from 'axios'
export default {
    name: 'FilterCard',
    emits: ['filter'],
    data() {
        return {
            store
        }
    },
    mounted() {
        axios
        .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(resp => {
            store.archetypes = resp.data
        })
    }
}
</script>

<template>
    <div class="filter py-4 text-center">
        <select v-model="store.archetype" @change="$emit('filter')">
            <option value="" selected>Select All</option>
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypes">{{archetype.archetype_name}}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
select {
    padding: 0.5rem 5rem;
    border-radius: 2rem;
    text-transform: capitalize;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.59);
    text-align: center;
}
</style>