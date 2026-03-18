<script>
export default {
  data() {
    return {
      data: {},
      dilemme: {},
      error: null,
      clicked: false,
      Détails: "",
      score: 0,
      numéro: 1,
    }
  },
  methods: {
    click1(){
        if (this.clicked === false){
            this.clicked = true;
            const btn = document.querySelector(".btn-1");
            btn.style.background = "#FEEAFF";
            this.Détails = this.dilemme.Détails;
            if(this.dilemme.bouton1 === this.dilemme.Bon){
                this.score += 100
            }else{
                this.score += (100*(1-Math.abs(this.dilemme.M1 - this.dilemme.M)/4))
            }
        }
    },
    click2(){
        if (this.clicked === false){
            this.clicked = true;
            const btn = document.querySelector(".btn-2");
            btn.style.background = "#FEEAFF";
            this.Détails = this.dilemme.Détails;
            if(this.dilemme.bouton2 === this.dilemme.Bon){
                this.score += 100
            }else{
                this.score += (100*(1-Math.abs(this.dilemme.M2 - this.dilemme.M)/4))
            }
        }
    },
    suivant(){
        if(this.numéro === 5){
            this.Détails = "Terminé";
        }else{
            this.numéro++;
            this.dilemme = this.data["dilemme" + (this.numéro).toString()];
            this.clicked = false;
            const btn1 = document.querySelector(".btn-1");
            btn1.style.background = "#FFECB9";
            const btn2 = document.querySelector(".btn-2");
            btn2.style.background = "#FFECB9";
        }
    }
  },
  computed(){
    this.dilemme;
    console.log('vie1' + n);
  },
  // après le chargement du composant
  async created() {
      try {
        const response = await fetch('/public/json/facile.json');
        if (!response.ok) throw new Error('Erreur HTTP ' + response.status);
        const data = await response.json();
        this.data = data;
        this.dilemme = data.dilemme1;
      } catch (error) {
        this.error = error.message;
        console.error(error);
      }
    }
  }

</script>

<template>
  <h2>Facile</h2>
    <div class="center">
        <p class="p-description">{{ dilemme.description }}</p>
    </div>

    <div class="center colonne">
        <div class="plan-container">
        <a :href="dilemme.href"><img :src="dilemme.src_plan" class="img-rails" alt="rails" title="made at imgflip.com" loading="lazy">
        <div v-if="dilemme.voie1 > 0">
            <div v-for="n in dilemme.voie1">
                <img src="../../public/img/personneHD1.png" alt="person" :class="'vie1' + n, dilemme.voie1_type" loading="lazy">
            </div>
        </div>
        </a>
        </div>

        <div><a href="https://imgflip.com/memegenerator">from Imgflip Meme Generator</a></div>
        <div v-if="dilemme.href_dog"><a :href="dilemme.href_dog">dog from Imgflip Meme Generator</a></div>
        <div v-if="dilemme.href_person"><a :href="dilemme.href_person">person from Imgflip Meme Generator</a></div>
    </div>

    <div class="center">
        <button class="btn btn-1" @click="click1">{{ dilemme.bouton1 }}</button>
        <button class="btn btn-2" @click="click2">{{ dilemme.bouton2 }}</button>
    </div>

    <p class="score">Score total: {{ score }}</p>
    <p class="détails" v-if="clicked">{{ Détails }}</p>
    <div class="center">
        <button class="btn suivant" v-if="clicked" @click="suivant">Suivant</button>
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
.détails, .score{
    text-align: center;
    white-space: pre-line;
    font-size: 22px;
}
.colonne{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.vie11{
    position: absolute;
    left: 1000px;
    top: 800px;
}
.plan-container {
  position: relative;
  width: max-content; /* ou 100% selon besoin */
}
.img-rails { display: block; width: 100%; }

.vie11 {
  position: absolute;
  top: 55%;
  left: 80%;
}
.vie12 {
  position: absolute;
  top: calc(55% - 7px);
  left: calc(80% - 25px);
}
.vie13 {
  position: absolute;
  top: calc(55% - 2*7px);
  left: calc(80% - 2*25px);
}
.vie14 {
  position: absolute;
  top: calc(55% - 3*7px);
  left: calc(80% - 3*25px);
}
.vie15 {
  position: absolute;
  top: calc(55% - 4*7px);
  left: calc(80% - 4*25px);
}
@media (max-width: 768px) {
    .p-description {
        width: auto;
        font-size: 20px;
    }
    .img-rails{
        width: 90vw;
    }   
}
</style>