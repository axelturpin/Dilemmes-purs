<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default{
  components:{
    Header,
    Footer
  }
}


</script>

<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>

<style>
body{
  background-color: #FEFFE9;
}
h2{
    text-align: center;
    font-size: 36px;
    margin: 20px;
}
.center {
    display: flex;
    justify-content: center;
}
</style>