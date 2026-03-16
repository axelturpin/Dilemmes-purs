<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default{
    components: {
        Header,
        Footer,
      },
      data(){
        return{
            introduction: `Ce site à pour but de se questionner sur des dilemmes éthiques sans intérêts personnels, et de donner des scores plus ou moins élevés selon une théorie qui se base sur l’intuition commune:<br>
            Avec des mesures très subjectives de la mortalité (on peut ne pas être d'accord) si désaccord entre la formule et l’intuition commune, alors je me base sur l’intuition commune, par exemple pour les dilemmes des pilules, je donne des scores sans calculs de moralité)<br>
            Cette théorie (le Finalitarisme) est causale, càd que si inaction alors la moralité M = 0 <br>
            Plus d’information en dessous`,
        }
      } 
}
</script>

<template>
    <Header></Header>
    <h2>Accueil</h2>
    <div class="introduction"><p v-html="introduction"></p></div>
    <div class="div-jouer"><router-link to="/modes"><button class="jouer">Jouer</button></router-link></div>
    <div class="description">
        <p>
        <span class="underline">Conséquentialisme:</span> (utilitarisme par exemple)<br>
ensemble des théories morales qui soutiennent que ce sont les conséquences d'une action donnée qui doivent constituer la base de tout jugement moral de ladite action, par exemple on peut compter le nombre moyen de vies sauvées, ou la quantité de bonheur moins la quantité de malheur (utilitarisme).
<br><br>
<span class="underline">Finalitarisme:</span> Théorie morale (utilisée) qui se base sur une certaine définition du respect:<br>
<img src="../../public/img/r.png" alt="respect" loading="lazy"><br>
Avec le bien qui correspond au bien le plus élevé donné à une seule personne, et le mal est la mal le plus élevé donné à une seule personne. (En pratique les définitions du bien et du mal du respect ne sont pas tout à fait les mêmes que pour les conséquences, mais pour l’exemple que je vais donner ça suffit)<br>
Plus on fait de mal par rapport au meilleur bien, plus le respect est faible, le respect est entre -1 et 1. Soit M la moralité, <br>
<img src="../../public/img/r2.png" alt="respect2" loading="lazy"><br>

<img src="../../public/img/M.png" alt="Moralité" loading="lazy"> <br>
Avec i = 1 si on est responsable et 0 sinon (i = intentionnalité) <br>
<br>
<span class="underline">Exemple:</span> Dilemme du tramway avec l’homme obèse: <br>
5 personnes risquent d’être écrasées par un train mais: <br>
+On peut pousser une personne obèse d’un pont pour faire dérailler le train et sauver les 5 autres. <br>
+Ou ne rien faire<br>
<span class="underline">Cas:“Tuer 1 personne pour en sauver 5”:</span><br>
On pose M(vie) = 1<br>
5 × bien = 1, et mal = 1<br>
Donc rx = 0 et ry = 1<br>
M = somme(rx × bien - ry × mal ) <br>
= 5 × 0 - mal = - mal = - 1 <br>
<span class="underline">Cas: “Ne rien faire”: </span><br>
i = 0 <br>
Donc M = 0 <br>
tuer un innocent est toujours aussi mal (-1) comparé à l’inaction (0) (subjectif) <br>
<br>
<a href="https://docs.google.com/document/d/1B0GHW-14BNw4Vj9-4fVeaHQf5okFP3LjS_oU0D4EJps/edit?tab=t.0">Lien vers ma théorie</a> (et d’autres sujets en lien avec la philosophie et les mathématiques)<br>
<br>
Note: Dans le dilemme du tramway classique par exemple: La probabilité que le train passe “p” (selon le temps qu’on reste sur la voie) à son importance, car si le risque est déjà important, on est moins responsable du mal qu’on fait en changeant de voie, donc changer de voie peut devenir moral ou immoral. Un argument opposé: de toute façon dans le dilemme le train passe. Mais si on regarde les extrêmes, p = 0.99 le mal est presque déjà fait contrairement au bien qui est à peine fait (probabilité de bien de 0.01 avant qu’on sache que le train passe), comparé à p = 0.01, où l’on fait presque tout le mal. Le respect est fait pour que ce soit pris en compte 
<br><br>
Il y a un mode Classique (Tous les 11 Dilemmes), un mode Niveaux (Facile, Normal, Difficile), chaque niveau à 4 ou 5 dilemmes et un mode Custom<br>
Même en cas de “mauvaise” réponse dans le mode “Niveaux” on gagne des points, car c’est quand même très subjectif, le minimum de réussite par niveau est de 2 étoiles sur 5.<br>
    </p></div>

    <Footer></Footer>
</template>

<style>
h2{
    text-align: center;
    font-size: 36px;
}
.introduction, .description{
    display: flex;
    justify-content: center;
}
.introduction p, .description p {
    text-align: center;
    width: 70vw;
    font-size: 24px;
}
.jouer{
    font-size: 36px;
    background-color: #FEEAFF;
    padding: 10px 60px;
    margin: 10px;
    border-radius: 20px;
}
.div-jouer{
    display: flex;
    justify-content: center;
}
.underline{
    text-decoration: underline;
}
</style>