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
                <!-- train -->
                <div v-if="dilemme.voie1 > 0">
                    <img src="../../public/img/train.png" alt="train" class="train">
                </div>
                <!-- voie 1 -->
                <div v-if="dilemme.voie1 > 0" v-for="n in dilemme.voie1">
                    <img v-if="dilemme.voie2_type === 'chien'" src="../../public/img/personneHD1.png" alt="" loading="lazy" :class="'vie1' + n, dilemme.voie1_type">
                    <img v-if="dilemme.voie2_type === 'person'" src="../../public/img/personneHD1.png" alt="" loading="lazy" :class="'vie1' + n, dilemme.voie1_type">
                </div>
                <!-- voie 2 -->
            <div v-if="dilemme.voie2 > 0" class="voie2" v-for="n in dilemme.voie2">
                <img v-if="dilemme.voie2_type === 'chien'" src="../../public/img/chien.png" alt="" loading="lazy" :class="'vie2' + n, dilemme.voie1_type" class="chien">
                <img v-if="dilemme.voie2_type === 'person'" src="../../public/img/personneHD1.png" alt="" loading="lazy" :class="'vie2' + n, dilemme.voie1_type">
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

/* relative et absolute pour placer les images */
.plan-container {
  position: relative;
}

.train{
    position: absolute;
    top: -20%;
    left: -30%;
}

.vie11 {
  position: absolute;
  top: 80%;
  left: 95%;
  transform: translateX(-50%) translateY(-50%);
}

.vie12 {
  position: absolute;
  top: calc(80% - 7px);
  left: calc(95% - 25px);
  transform: translateX(-50%) translateY(-50%);
}

.vie13 {
  position: absolute;
  top: calc(80% - 2*7px);
  left: calc(95% - 2*25px);
  transform: translateX(-50%) translateY(-50%);
}

.vie14 {
  position: absolute;
  top: calc(80% - 3*7px);
  left: calc(95% - 3*25px);
  transform: translateX(-50%) translateY(-50%);
}

.vie15 {
  position: absolute;
  top: calc(80% - 4*7px);
  left: calc(95% - 4*25px);
  transform: translateX(-50%) translateY(-50%);
}

.vie21{
    position: absolute;
    top: 33%;
    left: 95%;
    transform: translateX(-50%) translateY(-50%);
}
.vie22{
    position: absolute;
    top: calc(33% - 7px);
    left: calc(95% - 25px);
    transform: translateX(-50%) translateY(-50%);
}
.vie23{
    position: absolute;
    top: calc(33% - 2*7px);
    left: calc(95% - 2*25px);
    transform: translateX(-50%) translateY(-50%);
}
.vie24{
    position: absolute;
    top: calc(33% - 3*7px);
    left: calc(95% - 3*25px);
    transform: translateX(-50%) translateY(-50%);
}
.vie25{
    position: absolute;
    top: calc(33% - 4*7px);
    left: calc(95% - 4*25px);
    transform: translateX(-50%) translateY(-50%);
}

.chien{
    width: 200px;
    margin-left: -20px;
}


@media (max-width: 768px) {

.p-description, .détails {
    width: auto;
    font-size: 20px;
}

.img-rails{
    width: 90vw;
}   

.train{
    width: 500px;
    position: absolute;
    top: -48%;
    left: -50%;
}

.vie11 {
    width: 100px;
    position: absolute;
    top: 52%;
    left: 80%;
}

.vie12 {
    width: 100px;
    position: absolute;
    top: calc(52% - 3px);
    left: calc(80% - 12px);
}

.vie13 {
    width: 100px;
    position: absolute;
    top: calc(52% - 2*3px);
    left: calc(80% - 2*12px);
}

.vie14 {
    width: 100px;
    position: absolute;
    top: calc(52% - 3*3px);
    left: calc(80% - 3*12px);
}

.vie15 {
    width: 100px;
    position: absolute;
    top: calc(52% - 4*3px);
    left: calc(80% - 4*12px);
}

.vie21{
    width: 100px;
    position: absolute;
    top: 10%;
    left: 80%;
}

/* .chien{
    width: 80px;
    margin-left: 0px;
} */
}


@media (max-width: 1024px) {
.p-description {
    width: auto;
    font-size: 20px;
}
}
</style>