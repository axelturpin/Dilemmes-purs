<script>
    export default{
        data(){
            return{
                malvoyant: JSON.parse(localStorage.getItem("malvoyant")) || false,
                font: localStorage.getItem("font") || "Arial",
            }
        },
        method:{
            setPolice(){
                if(this.malvoyant){
                localStorage.setItem("font", "Georgia");
            }
            else{
                localStorage.setItem("font", "Arial");
            }
            console.log(localStorage.getItem("font"))
            }
        },
        computed(){
            localStorage.setItem("malvoyant", JSON.stringify(this.malvoyant));
            
        }
    }
</script>

<template>
    <h2>Paramètres</h2>

    <label for="malvoyant">malvoyant</label>
    <input type="checkbox" name="malvoyant" id="malvoyant" v-model="malvoyant" @input="setPolice">
    <p>{{ malvoyant }}</p>

</template>