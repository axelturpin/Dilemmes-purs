<script>

export default{
    name: "Modes",
    data(){
        return{
            plein_facile: 5,
            vide_facile: 0,
            plein_normal: 2,
            vide_normal: 3,
            plein_difficile: 0,
            vide_difficile: 5,
        }
    }
}
</script>


<template>
    <h2>Modes de jeu</h2>
    <div class="modes">
        <div class="niveaux">
            <router-link to="/facile" class="none">
                <button class="mode">
                    Facile 
                    <img src="../../public/img/etoile pleine.png" v-for="n in plein_facile" class="étoile" loading="lazy">
                    <img src="../../public/img/etoile vide.png" v-for="n in vide_facile"  class="étoile" loading="lazy">
                </button>
            </router-link>
            <router-link to="/normal" class="none">
                <button class="mode">
                    Normal
                    <img src="../../public/img/etoile pleine.png" v-for="n in plein_normal" class="étoile" loading="lazy">
                    <img src="../../public/img/etoile vide.png" v-for="n in vide_normal" class="étoile" loading="lazy">
                </button>
            </router-link>
            <router-link to="/difficile" class="none">
                <button class="mode">
                    Difficile
                    <img src="../../public/img/etoile pleine.png" v-for="n in plein_difficile" class="étoile" loading="lazy">
                    <img src="../../public/img/etoile vide.png" v-for="n in vide_difficile" class="étoile" loading="lazy">
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
    <div class="footer"><Footer></Footer></div>
</template>

<style>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.modes{
    display: flex;
    justify-content: center;
}
.mode{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FEEAFF;
    width: 520px;
    height: 100px;
    font-size: 24px;
    margin: 25px;
    gap: 20px;
    border-radius: 20px;
}
.none{
    text-decoration: none;
}
.niveaux, .autre{
    display: flex;
    flex-direction: column;
}
.étoile{
    width: 50px;
}
.footer{
    margin-bottom: -100px;
}
</style>