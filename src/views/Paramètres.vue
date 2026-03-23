<script>
    export default{
        data(){
            return{
                malvoyant: JSON.parse(localStorage.getItem("malvoyant")) || false,
            }
        },
        methods:{
            setPolice(){
                const police = this.malvoyant ? "Luciole" : "Arial";
                localStorage.setItem("font", police);
                localStorage.setItem("malvoyant", JSON.stringify(this.malvoyant));
                //prévenir l'application que la police a changé (optionnel)
                window.dispatchEvent(new CustomEvent("font-changed", { detail: { police } }));
            }
        },
        mounted(){
            //optionnel
            this.setPolice()
        }
    }
</script>

<template>
    <h2>Paramètres</h2>

    <div class="center colonne malvoyant">
        <div class="check">
            <label for="malvoyant">malvoyant</label>
            <input type="checkbox" name="malvoyant" id="malvoyant" v-model="malvoyant" @change="setPolice">
        </div>
        <p>Actualisez ensuite pour voir le changement de police</p>

    </div>

</template>

<style scoped>

.colonne{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.check{
    display: flex;
    align-items: center;
}

.check *{
    margin-right: 10px;
    margin-bottom: 5px;
}

.malvoyant{
    font-size: 1.2rem;
}

#malvoyant{
    width: 25px;
    height: 25px;
}
</style>