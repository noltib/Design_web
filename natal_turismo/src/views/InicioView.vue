<template>
  <main>
    <h2>Explore, descubra, visite
      <span :style="{ fontFamily: fonteAtual }">
        Natal
      </span>
    </h2>
    <p>Natal, conhecida como a Cidade do Sol, é um dos destinos mais encantadores do Brasil. Com um clima agradável praticamente o ano inteiro e paisagens de tirar o fôlego, a capital do Rio Grande do Norte conquista visitantes logo no primeiro olhar. Suas praias de águas claras e dunas douradas formam um cenário único, onde natureza e tranquilidade caminham lado a lado.</p>
    <RouterLink to="/pontos-turisticos">Pontos turísticos></RouterLink>
    <section>
    <Card titulo="Praia de Ponta Negra" 
          :imagem="pontaNegra" 
          descricao="A Praia de Ponta Negra é a mais famosa de Natal, conhecida por sua beleza e pela presença do Morro do Careca, uma duna icônica que se destaca na paisagem." />
 
    <Card titulo="Cajueiro de Pirangi" 
          :imagem="cajueiroPirangi" 
          descricao="Localizado na praia de Pirangi do Norte, em Parnamirim (Rio Grande do Norte), o Cajueiro de Pirangi detém o impressionante título de maior cajueiro do mundo " />
 
    <Card titulo="Forte dos Reis Magos" 
          :imagem="forteReisMagos" 
          descricao="O Forte dos Reis Magos é o marco zero de Natal e um dos monumentos mais significativos da história colonial brasileira. Construído em 1598 sobre os recifes da foz do Rio Potengi." />
    </section>
    <RouterLink to="/restaurantes">Restaurantes></RouterLink>
    <section>
    <Card titulo="Camarões Potiguar" 
          :imagem="camaroesPotiguar" 
          descricao="O Camarões Potiguar é mais do que um restaurante; é uma verdadeira instituição gastronômica de Natal e parada obrigatória para quem visita a cidade." />
    <Card titulo="Mangai"
          :imagem="mangai" 
          descricao="O Restaurante Mangai é um verdadeiro ícone da culinária nordestina em Natal, conhecido por sua vasta variedade de pratos típicos que celebram os sabores autênticos da região." />
    <Card titulo="Tábua de Carne" 
          :imagem="tabuaCarne" 
          descricao="A Tábua de Carne é um restaurante especializado em carnes nobres, oferecendo uma experiência gastronômica única para os amantes de churrasco em Natal." />
    </section>
    <RouterLink to="/passeios">Passeios></RouterLink>
    <section>
    <Card titulo="Passeio de Buggy" 
          :imagem="passeioBuggy" 
          descricao="O passeio de buggy é uma das atividades mais populares em Natal, proporcionando uma experiência emocionante e única para explorar as dunas e praias da região." />
    <Card titulo="Passeio de Barco" 
          :imagem="passeioBarco" 
          descricao="O passeio de barco em Natal é uma experiência imperdível para os visitantes, oferecendo a oportunidade de explorar as belas praias, ilhas e recifes da região de uma perspectiva única." />
    <Card titulo="Passeio de Quadriciclo" 
          :imagem="passeioQuadriciclo" 
          descricao="O passeio de quadriciclo em Natal é uma aventura emocionante que permite aos visitantes explorar as dunas, praias e trilhas da região de uma maneira divertida e única." />
  </section>
  </main>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import pontaNegra from '@/assets/PontaNegra.jpg'
import cajueiroPirangi from '@/assets/cajueiro.jpg'
import forteReisMagos from '@/assets/forte.jpg'
import camaroesPotiguar from '@/assets/camaroes.jpg'
import mangai from '@/assets/mangai.jpg'
import tabuaCarne from '@/assets/tabua.jpg'
import passeioBuggy from '@/assets/buggy.jpg'
import passeioBarco from '@/assets/barco.jpg'
import passeioQuadriciclo from '@/assets/quadriciclo.jpg'

const fontes = [
  "'Poppins', sans-serif", "'Playfair Display', serif", "'Pacifico', cursive",
  "'Montserrat', sans-serif", "'Roboto Slab', serif", "'Bebas Neue', sans-serif",
  "'Oswald', sans-serif", "'Lobster', cursive", "'Raleway', sans-serif",
  "'Inter', sans-serif", "'Anton', sans-serif", "'Mea Culpa', cursive",
  "'Dancing Script', cursive", "'Archivo', sans-serif", "'Quicksand', sans-serif",
  "'Source Serif 4', serif", "'Fira Sans', sans-serif", "'Varela Round', sans-serif",
  "'Zilla Slab', serif", "'Alfa Slab One', cursive", "'Lavishly Yours', cursive"
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
export default {
  name: "InicioView"
}
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
section {
  gap: 3vw;
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
}
a{
  display: inline-block;
  margin-top: 1em;
  color: #01A9B0;
  text-decoration: none;
  font-family: 'Arial', Helvetica, sans-serif;
  font-size: 1.5em;
}
p{
  margin-top: 1em;
  font-family: 'Arial', Helvetica, sans-serif;
  line-height: 1.5em;
}
</style>