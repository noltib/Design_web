<template>
  <main>
    <h2>Explore, descubra, visite
      <span :style="{ fontFamily: fonteAtual }">
        Natal
      </span>
    </h2>
    <p>Natal, conhecida como a Cidade do Sol, é um dos destinos mais encantadores do Brasil. Com um clima agradável praticamente o ano inteiro e paisagens de tirar o fôlego, a capital do Rio Grande do Norte conquista visitantes logo no primeiro olhar. Suas praias de águas claras e dunas douradas formam um cenário único, onde natureza e tranquilidade caminham lado a lado.</p>
    <div>
    <Card titulo="Praia de Ponta Negra" 
          :imagem="pontaNegra" 
          descricao="A Praia de Ponta Negra é a mais famosa de Natal, conhecida por sua beleza e pela presença do Morro do Careca, uma duna icônica que se destaca na paisagem. Com águas calmas e uma infraestrutura turística completa, é o local perfeito para relaxar, praticar esportes aquáticos ou desfrutar dos bares e restaurantes à beira-mar." />
 
    <Card titulo="Praia de Ponta Negra" 
          :imagem="pontaNegra" 
          descricao="A Praia de Ponta Negra é a mais famosa de Natal, conhecida por sua beleza e pela presença do Morro do Careca, uma duna icônica que se destaca na paisagem. Com águas calmas e uma infraestrutura turística completa, é o local perfeito para relaxar, praticar esportes aquáticos ou desfrutar dos bares e restaurantes à beira-mar." />
 
    <Card titulo="Praia de Ponta Negra" 
          :imagem="pontaNegra" 
          descricao="A Praia de Ponta Negra é a mais famosa de Natal, conhecida por sua beleza e pela presença do Morro do Careca, uma duna icônica que se destaca na paisagem. Com águas calmas e uma infraestrutura turística completa, é o local perfeito para relaxar, praticar esportes aquáticos ou desfrutar dos bares e restaurantes à beira-mar." />
 
    </div>

  </main>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const fontes = [
  "'Poppins', sans-serif",
  "'Playfair Display', serif",
  "'Pacifico', cursive",
  "'Montserrat', sans-serif",
  "'Roboto Slab', serif",
  "'Bebas Neue', sans-serif",
  "'Oswald', sans-serif",
  "'Lobster', cursive",
  "'Raleway', sans-serif",
  "'Inter', sans-serif",
  "'Anton', sans-serif",
  "'Mea Culpa', cursive",
  "'Dancing Script', cursive",
  "'Archivo', sans-serif",
  "'Quicksand', sans-serif",
  "'Source Serif 4', serif",
  "'Fira Sans', sans-serif",
  "'Varela Round', sans-serif",
  "'Zilla Slab', serif",
  "'Alfa Slab One', cursive",
  "'Lavishly Yours', cursive"
]

const fonteAtual = ref(fontes[0])
let index = 0

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % fontes.length
    fonteAtual.value = fontes[index]
  }, 150)
})
</script>


<script>
import Card from '@/components/Card.vue';
import pontaNegra from '@/assets/PontaNegra.jpg';

export default {
  name: "InicioView",
  components: {
    Card,
  },
  props: {
    titulo: {
      type: String,
      required: true,
    },
    imagem: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h2 {
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
  margin: 2em  1em 2em -2em;
  font-size: 1.8em;
  font-weight: 100;
}


span {
  color: #01A9B0;
  position: absolute;
  margin-left: 0.3em;
}
main{
  margin: 0 20%;
}
div {
  display: flex;
  justify-content: space-between;
  gap: 3vw;
  margin-top: 2em;
}

</style>