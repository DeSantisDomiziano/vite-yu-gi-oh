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

<div class="col-2 ">
    <div class="card">
        <img :src="src" :alt="txt">
        <div class="card-body text-center">
            <p class="text-uppercase fw-semibold">{{txt}}</p>
            <span>{{ type }}</span>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
.card {
    background-color: transparent;
    border: 0;

}

</style>