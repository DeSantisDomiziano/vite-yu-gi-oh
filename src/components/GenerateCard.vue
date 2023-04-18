<script>
    export default {
        name: 'GenerateCard',
        props: {
            src: String,
            txt: String,
            type: String,
        }
    }
</script>

<template>

<div class="col">
    <div class="card h-100">
        <img class=" card-img-top" :src="src" :alt="txt">
        <div class="card-body text-center">
            <p class="text-uppercase fw-semibold">{{txt}}</p>
            <span>{{ type }}</span>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.card {
    filter: drop-shadow(0px 0px 15px #000);
    border: 0;
    background-color: $bgCardColletion ;
    color: #fff;
}

</style>