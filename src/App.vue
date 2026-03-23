<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default{
  components:{
    Header,
    Footer
  },
  data(){
    return{
      police: localStorage.getItem("font") || "Arial"
    }
  },
  mounted() {

  }
}


</script>

<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>

<!-- pas scoped donc s'applique a tous les composants -->
<style>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: v-bind(police), sans-serif;
}

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


.étoile{
    width: 50px;
}
</style>