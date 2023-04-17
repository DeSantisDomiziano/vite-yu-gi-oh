<script>
    export default {
        name: 'SiteHeader'
    }
</script>

<template>
    <header>
        <div class="container text-center pt-4">
            <div class="row">
                <div class="col">
                    <img height="190" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIuc2nSWFTKVvLuW0-a_X9P_KHoJPCx0DtA&usqp=CAU" alt="">
                    <h1 class="fw-bold">Vite Yu-Gi-Oh!</h1>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
header {
    background-color: $bgCardColletion;
    color: #fff;
}

</style>