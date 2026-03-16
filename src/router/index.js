import { createRouter, createWebHistory } from "vue-router";

import Accueil from "@/views/Accueil.vue";
import Modes from "@/views/Modes.vue";
import Facile from "@/views/Facile.vue";
import Paramètres from "@/views/Paramètres.vue";

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
        path: "/paramètres",
        name: "Paramètres",
        component: Paramètres
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: roads
})


export default router