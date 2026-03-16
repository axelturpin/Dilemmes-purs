<script>
export default{
    name: "Haeder"
}
</script>

<template>
    <header>
        <div>
            <router-link to="/" class="router-link">
                <img src="../../public/img/train-60.png" alt="">
                <p>Accueil</p>
            </router-link>
        </div>
        <div class="titre">
            <h1>Dilemmes purs</h1>
            <p>(sans intérêts personnels)</p>
        </div>
        <div>
            <router-link to="/paramètres" class="router-link">
                <img src="../../public/img/paramètres-60.png" alt="">
                <p>paramètres</p>
            </router-link>
        </div>
    </header>
</template>

<style>
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FEEAFF;
    height: 15vh;
    padding: 10px;
    text-decoration: none;
    color: black
}
.titre{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.titre h1 {
    font-size: 48px;
}
.titre p {
    font-size: 1.2rem;
}
.router-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black
}
</style>