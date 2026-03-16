<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default{
    components: {
        Header,
        Footer,
      },

}
</script>

<template>
    <Header></Header>
    <h2>Accueil</h2>
    <Footer></Footer>
</template>

<style>
h2{
    text-align: center;
}
</style>