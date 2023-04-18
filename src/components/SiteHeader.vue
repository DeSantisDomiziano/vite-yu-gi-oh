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
                    <h1 class="fw-bold">Vite Yu-Gi-Oh!</h1>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
header {
    background-image: url('https://c4.wallpaperflare.com/wallpaper/657/97/231/collage-god-cards-ra-obelisk-wallpaper-preview.jpg');
    height: 300px;
    color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position: relative;

    h1 {
        font-size: 3.5rem;
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translate(-50%, 0%);
        background-color: #ffffff96;
        padding: 0.5rem 1.75rem;
        border-radius: 2rem;
    }
}

</style>