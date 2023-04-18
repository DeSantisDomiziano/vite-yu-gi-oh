<script>
    export default {
        emits: ['ArchChanged'],
        props: {
            archetypes: Array,
        },
        name: 'FilterCard',
        mounted(){
            console.log('archetipi')
            console.log(this.archetypes)
           
        }
    }
</script>

<template>
    <div class="filter py-4 text-center">
        <select name="" id="">
            <option value="">Archetype</option>
            <option :value="arch" @click="$emit('ArchChanged')" v-for="arch in archetypes">
                {{ arch }}
            </option>
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