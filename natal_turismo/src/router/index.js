import { createRouter, createWebHistory } from 'vue-router'

import InicioView from "../views/InicioView.vue";
import PontosTuristicosView from "../views/PontosTuristicosView.vue";
import RestaurantesView from "../views/RestaurantesView.vue";
import PasseiosView from "../views/PasseiosView.vue";
import ComentariosView from "../views/ComentariosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: InicioView,
    },
    {
      path: "/pontos-turisticos",
      name: "pontos-turisticos",
      component: PontosTuristicosView,
    },
    {
      path: "/restaurantes",
      name: "restaurantes",
      component: RestaurantesView,
    },
    {
      path: "/passeios",
      name: "passeios",
      component: PasseiosView,
    },
    {
      path: "/comentarios",
      name: "comentarios",
      component: ComentariosView,
    },
  ],
});

export default router
