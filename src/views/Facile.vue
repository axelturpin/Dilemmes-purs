<script>
export default {
  data() {
    return {
      dilemme: "",
      error: null
    }
  },
  methods: {
  },
  // après le chargement du composant
  async created() {
      try {
        const response = await fetch('/public/json/facile.json')
        if (!response.ok) throw new Error('Erreur HTTP ' + response.status)
        const data = await response.json()
        this.dilemme = data.dilemme1
      } catch (error) {
        this.error = error.message
        console.error(error)
      }
    }
  }

</script>

<template>
  <h2>Facile</h2>
    <div class="center">
        <p class="p-description">{{ dilemme.description }}</p>
    </div>

    <div class="center">
        <img src="../../public/img/rails.png" alt="rails">
    </div>

    <div class="center">
        <button class="btn">{{ dilemme.bouton1 }}</button>
        <button class="btn">{{ dilemme.bouton2 }}</button>
    </div>

  <div v-if="error" style="color:red">
    Erreur : {{ error }}
  </div>
</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.p-description {
    white-space: pre-line; /* important : interprète les \n */
    font-size: 24px;
    width: 60vw;
    margin: 20px;
}
.btn{
    background-color: #FFECB9;
    padding: 10px 30px;
    margin: 30px;
    border-radius: 20px;
}
</style>