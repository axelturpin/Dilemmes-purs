<script>

export default{
    name: "Modes",
    data(){
        return{
            étoiles_facile: Number(localStorage.getItem("étoiles_facile")) || 0,
            étoiles_normal: 2,
            étoiles_difficile: 0,
        }
    }
}
</script>


<template>
<div class="vh">
    <h2>Modes de jeu</h2>
    <div class="modes">
        <div class="niveaux">
            <router-link to="/facile" class="none">
                <button class="mode">
                    Facile 
                    <img src="../../public/img/etoile pleine.png" v-for="n in étoiles_facile" class="étoile" loading="lazy" :key="n">
                    <img src="../../public/img/etoile vide.png" v-for="n in (5-étoiles_facile)"  class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>
            <router-link to="/normal" class="none">
                <button class="mode">
                    Normal
                    <img src="../../public/img/etoile pleine.png" v-for="n in étoiles_normal" class="étoile" loading="lazy" :key="n">
                    <img src="../../public/img/etoile vide.png" v-for="n in (5-étoiles_normal)" class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>
            <router-link to="/difficile" class="none">
                <button class="mode">
                    Difficile
                    <img src="../../public/img/etoile pleine.png" v-for="n in étoiles_difficile" class="étoile" loading="lazy" :key="n">
                    <img src="../../public/img/etoile vide.png" v-for="n in (5-étoiles_difficile)" class="étoile" loading="lazy" :key="n">
                </button>
            </router-link>

        </div>
        <div class="autre">
            <router-link to="/classique" class="none">
                <button class="mode">Classique</button>
            </router-link>
            <router-link to="/aleatoire" class="none">
                <button class="mode">Aléatoire</button>
            </router-link>
            <router-link to="/custom" class="none">
                <button class="mode">Custom</button>
            </router-link>
        </div>
    </div>
</div>
</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.modes{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
    border-radius: 20px;
}

.none{
    text-decoration: none;
}
.niveaux, .autre{
    display: flex;
    flex-direction: column;
}

.vh{ 
    /* pour que le footer se mette en bas de l'écran */
    min-height: calc(100vh - 15vh - 12vh - 20px);
}

@media (max-width: 768px) {
    .mode{
        width: 320px;
        height: 60px;
        font-size: 16px;
    }
    .étoile{
        width: 25px;
    }
    h2{
        font-size: 2rem;
    }
}
</style>