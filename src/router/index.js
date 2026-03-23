import { createRouter, createWebHistory } from "vue-router";

import Accueil from "@/views/Accueil.vue";
import Modes from "@/views/Modes.vue";
import Facile from "@/views/Facile.vue";
import Paramètres from "@/views/Paramètres.vue";
import Difficile from "@/views/Difficile.vue";
import Aléatoire from "@/views/Aléatoire.vue";
import Custom from "@/views/Custom.vue";
import Normal from "@/views/Normal.vue";
import Classique from "@/views/Classique.vue";

//définir les routes

const roads = [
    {
        path: "/",
        name: "Accueil",
        component: Accueil
    },
    {
        path: "/modes",
        name: "Modes",
        component: Modes
    },
    {
        path: "/facile",
        name: "Facile",
        component: Facile
    },
    {
        path: "/normal",
        name: "Normal",
        component: Normal
    },
    {
        path: "/difficile",
        name: "Difficile",
        component: Difficile
    },
    {
        path: "/classique",
        name: "Classique",
        component: Classique
    },
    {
        path: "/aleatoire",
        name: "Aléatoire",
        component: Aléatoire
    },
    {
        path: "/custom",
        name: "Custom",
        component: Custom
    },
    {
        path: "/parametres",
        name: "Paramètres",
        component: Paramètres
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: roads
})


export default router
