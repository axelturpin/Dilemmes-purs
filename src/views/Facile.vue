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
      étoiles_facile: 0,
      afficher_étoiles: false,
      fin: false,
      numéro: 1,
      clickBtn1: false,
      clickBtn2: false,
    }
  },
  methods: {
    click1(){
        if (!this.clicked){
            this.clicked = true;
            this.clickBtn1 = true;
            const btn = document.querySelector(".btn-1");
            btn.style.background = "#FEEAFF";
            this.Détails = this.dilemme.Détails;
            setTimeout(function()
            {
            const voie2 = document.querySelectorAll(".voie2");
            voie2.forEach((vie, index) => {
                vie.style.display = "none";
            });
            const train = document.querySelector(".train");
            if(train){
                train.style.display = "none";
            }
            }, 1900);
            
            if(this.dilemme.bouton1 === this.dilemme.Bon){
                this.score += 100
            }else{
                this.score += (100*(1-Math.abs(this.dilemme.M1 - this.dilemme.M)/4))
            }
        }
    },
    click2(){
        if (!this.clicked){
            this.clicked = true;
            this.clickBtn2 = true;
            const btn = document.querySelector(".btn-2");
            btn.style.background = "#FEEAFF";
            this.Détails = this.dilemme.Détails;
            setTimeout(function()
            {
            const voie1 = document.querySelectorAll(".voie1");
            voie1.forEach((vie, index) => {
                vie.style.display = "none";
            });
            const train = document.querySelector(".train");
            if(train){
                train.style.display = "none";
            }
            }, 1900);
            
            if(this.dilemme.bouton2 === this.dilemme.Bon){
                this.score += 100
            }else{
                this.score += (100*(1-Math.abs(this.dilemme.M2 - this.dilemme.M)/4))
            }
        }
    },
    chargement(){
        // attendre que le DOM rende les éléments (v-if et v-for)
        this.$nextTick(() => {
            const screenWidth = window.innerWidth;
            const voie1 = document.querySelectorAll(".voie1");
            const voie2 = document.querySelectorAll(".voie2");
    
            if (voie1.length === 0) {
                console.warn("Aucun élément voie1 trouvé après rendu du DOM");
            }
            
            //affichage des personnes (et/ou chiens)
            voie1.forEach((vie, index) => {
                vie.style.display = "block";
                vie.style.position = "absolute";
                vie.style.top = `calc(80% - ${index*7}px)`;
                vie.style.left = `calc(95% - ${index*25}px)`;
                vie.style.transform = "translate(-50%, -50%)";
                if (screenWidth <= 768){
                vie.style.top = `calc(75% - ${index*4}px)`;
                vie.style.left = `calc(95% - ${index*12}px)`;
                }
            });
    
            voie2.forEach((vie, index) => {
                vie.style.display = "block";
                vie.style.position = "absolute";
                vie.style.top = `calc(33% - ${index*7}px)`;
                vie.style.left = `calc(95% - ${index*25}px)`;
                if (screenWidth <= 768){
                    vie.style.top = `calc(33% - ${index*4}px)`;
                    vie.style.left = `calc(95% - ${index*12}px)`;
                }
                vie.style.transform = "translate(-50%, -50%)";
            });
            
            
            
        //suppression des arbres des dilemmes précédents
        const arbreAncien1 = document.querySelector(".arbre1");
        const arbreAncien2 = document.querySelector(".arbre2");
        if(arbreAncien1){
            arbreAncien1.remove();
        }
        if(arbreAncien2){
            arbreAncien2.remove();
        }

        //Affichage de nouveaux arbres si dans le dilemme
        const container = document.querySelector(".plan-container");
        if(this.dilemme.voie1_arbre){
        var arbre1 = document.createElement("img");
        arbre1.className = "arbre1";
        arbre1.src = "/public/img/arbre.png";
        arbre1.src = "/public/img/arbre.png"
        arbre1.style.display = "block";
        arbre1.style.position = "absolute";
        arbre1.style.top = `calc(60%)`;
        arbre1.style.left = `calc(70%)`;
        arbre1.style.transform = "translate(-50%, -50%)";
        if (screenWidth <= 768){
            arbre1.style.width = "100px";
            arbre1.style.top = `calc(65%)`;
            arbre1.style.left = `calc(70%)`;
        }
        container.appendChild(arbre1);
    }
    if(this.dilemme.voie2_arbre){
        var arbre2 = document.createElement("img");
        arbre2.className = "arbre2";
        arbre2.src = "/public/img/arbre.png";
        arbre2.style.display = "block";
        arbre2.style.position = "absolute";
        arbre2.style.top = `calc(30%)`;
        arbre2.style.left = `calc(70%)`;
        arbre2.style.transform = "translate(-50%, -50%)";
        if (screenWidth <= 768){
        arbre2.style.width = "100px";
        arbre2.style.top = `calc(35%)`;
        arbre2.style.left = `calc(70%)`;
        }
        container.appendChild(arbre2);
    }
    
    
            })
    },
    suivant(){
        if(this.numéro === 5){
            this.Détails = "Terminé";


            let étoiles = localStorage.getItem("étoiles_facile_courrante");
            localStorage.setItem("étoiles_facile_courrante", Math.floor(this.score/100).toString());
            localStorage.setItem("étoiles_facile", Math.max(Math.floor(this.score/100), étoiles));
            étoiles = localStorage.getItem("étoiles_facile_courrante");
            
            this.étoiles_facile = Number(étoiles);

            if(!this.afficher_étoiles){
                for(let i = 0; i < 5; i++){
                    const e = document.createElement("img");
                    e.className = "étoile";
                    e.loading = "lazy"
                    if (i < this.étoiles_facile){
                        e.src = "../../public/img/etoile pleine.png"
                    } else{
                        e.src="../../public/img/etoile vide.png"
                    }
                    const mode = document.querySelector(".mode");
                    mode.appendChild(e);
                }
                this.afficher_étoiles = true;
                this.fin = true;
            }

        }else{
            this.numéro++;
            this.dilemme = this.data["dilemme" + (this.numéro).toString()];
            this.clicked = false;
            this.clickBtn1 = false;
            this.clickBtn2 = false;
            const btn1 = document.querySelector(".btn-1");
            btn1.style.background = "#FFECB9";
            const btn2 = document.querySelector(".btn-2");
            btn2.style.background = "#FFECB9";

            this.chargement();
            if(this.numéro != 5){
                const train = document.querySelector(".train");
                train.style.display = "block"
            }
        }
        const voie1 = document.querySelectorAll(".voie1");
        const voie2 = document.querySelectorAll(".voie2");
        voie1.forEach((vie, index) => {
            vie.style.display = "block";
        })
        voie2.forEach((vie, index) => {
            vie.style.display = "block";
        })
    }
  },
  computed(){
    this.dilemme;
    this.étoiles_facile;
  },
  // après le chargement du composant
  async created() {
  try {
      const audio = document.createElement("audio");
      audio.src = "/public/audio/fondFacile.mp3";
      audio.autoplay = true;
      audio.loop = true;
      const body = document.querySelector("body");
      body.appendChild(audio);

    const response = await fetch('/public/json/facile.json');
    if (!response.ok) throw new Error('Erreur HTTP ' + response.status);
    const data = await response.json();
    this.data = data;
    this.dilemme = data.dilemme1;

    //pour avoir le CSS au chargement, je reprends la fonction suivante:
    this.chargement();

  } catch (error) {
    this.error = error.message;
    console.error(error);
  }
}
  }

</script>

<template>
  <h2>Facile {{ numéro }}</h2>
    <div class="center">
        <p class="p-description">{{ dilemme.description }}</p>
    </div>

    <div class="center colonne">
        <div class="plan-container">
            <a :href="dilemme.href"><img :src="dilemme.src_plan" class="img-rails" alt="rails" title="made at imgflip.com" loading="lazy">
                <!-- train -->
                <div v-if="dilemme.voie1 > 0">
                    <img :class="{animation1: clickBtn1, animation2: clickBtn2}" src="../../public/img/train.png" alt="train" class="train">
                </div>
                <!-- voie 1 -->
                <div v-if="dilemme.voie1 > 0" v-for="n in dilemme.voie1">
                    <img :key="n" v-if="dilemme.voie1_type === 'chien'" src="../../public/img/chien.png" alt="" loading="lazy" :class="dilemme.voie1_type"  class="voie1" >
                    <img :key="n" v-if="dilemme.voie1_type === 'person'" src="../../public/img/personneHD1.png" alt="" loading="lazy" :class="dilemme.voie1_type" class="voie1">
                </div>
                <!-- voie 2 -->
            <div v-if="dilemme.voie2 > 0" v-for="n in dilemme.voie2">
                <img :key="n" v-if="dilemme.voie2_type === 'chien'" src="../../public/img/chien.png" alt="" loading="lazy" :class="dilemme.voie2_type" class="voie2">
                <img :key="n" v-if="dilemme.voie2_type === 'person'" src="../../public/img/personneHD1.png" alt="" loading="lazy" :class="dilemme.voie2_type" class="voie2">
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
        <!-- étoiles -->
    <button class="mode" :class="{hidden: !fin}" >
        Facile 
        <!-- img d'étoiles en js cette fois ci -->
    </button>
    </div>
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

.mode{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    background-color: #FEEAFF;
    width: 520px;
    height: 100px;
    font-size: 24px;
    margin: 25px;
    gap: 20px;
    border-radius: 20px;
}

/* .position_étoiles{
    display: flex;
    justify-content: space-evenly;
} */

/* relative et absolute pour placer les images */
.plan-container {
  position: relative;
}

.train{
    position: absolute;
    z-index: 2;
    top: -20%;
    left: -30%;
}
.animation1{
  animation: animerTrain 2s linear 0s;
}
@keyframes animerTrain {
  0%{
    translate: 0px 0px;
  }
  50%{
    translate: 250px 65px;
  }
  100%{
    translate: 500px -40px;
  }
}
.animation2{
  animation: animerTrain2 2s linear 0s;
}
@keyframes animerTrain2 {
  0%{
    translate: 0px 0px;
  }
  50%{
    translate: 250px 65px;
  }
  100%{
    translate: 500px 130px;
  }
}

.hidden{
    display: none;
}

.chien{
    width: 200px;
    margin-left: -40px;
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
    top: -40%;
    left: -50%;
}

.voie1{
    width: 90px;
}
.voie2{
    width: 90px;
}

@keyframes animerTrain {
  0%{
    translate: 0px 0px;
  }
  50%{
    translate: 100px 30px;
  }
  100%{
    translate: 200px -20px;
  }
}

}


@media (max-width: 1024px) {
.p-description {
    width: auto;
    font-size: 20px;
}
}
</style>