
<script>
import FilterCard from './FilterCard.vue'
import CardColletion from './CardCollection.vue'

    export default {
        components: {
            FilterCard,
            CardColletion
        },
        name: 'SiteMain'
    }
</script>


<template>
    <main>
        <div class="container py-5">

            <CardColletion/>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $background;
}

</style>