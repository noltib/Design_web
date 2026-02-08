<template>
  <main>
    <h2>Passeios em Natal</h2>
    <p>Natal é uma cidade rica em tradições e beleza natural, oferecendo uma ampla variedade de passeios para todos os gostos. Desde trilhas pelas montanhas até visitas a praias paradisíacas, os turistas podem explorar a diversidade do litoral potiguar e descobrir a cultura local em suas diversas manifestações.</p>
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
    <Card titulo="Trilhas no Parque das Dunas"
          :imagem="trilhasDunas" 
          descricao="As trilhas no Parque das Dunas oferecem uma experiência única para os visitantes, permitindo explorar a beleza natural da região e descobrir pontos de interesse históricos e culturais." />
    <Card titulo="Mergulho e Piscinas Naturais"
          :imagem="mergulhoPiscinas" 
          descricao="O mergulho e as piscinas naturais em Natal são experiências imperdíveis para os visitantes, oferecendo a oportunidade de explorar a rica vida marinha e as belezas subaquáticas da região." />
    <Card titulo="Passeio de Catamarã"
          :imagem="passeioCatamara" 
          descricao="O passeio de catamarã em Natal é uma experiência relaxante e encantadora, permitindo aos visitantes explorar as águas cristalinas, as praias e os recifes da região de uma maneira confortável e panorâmica." /> 
    </section>
    
  </main>
</template>



<script>
import Card from '@/components/Card.vue';
import passeioBuggy from '@/assets/buggy.jpg'
import passeioBarco from '@/assets/barco.jpg'
import passeioQuadriciclo from '@/assets/quadriciclo.jpg'
import trilhasDunas from '@/assets/trilha.jpg'
import mergulhoPiscinas from '@/assets/mergulho.jpg'
import passeioCatamara from '@/assets/catamara.jpg'

export default {
  name: 'PasseiosView',
  components: {
    Card,
  },
  data() {
    return {
      passeioBuggy,
      passeioBarco,
      passeioQuadriciclo,
      trilhasDunas,
      mergulhoPiscinas,
      passeioCatamara
    };
  }
};
</script>
<style scoped>
main{
  margin: 0 20%;
}
h2 {
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
  margin: 2em  1em 2em -2em;
  font-size: 1.8em;
  font-weight: 100;
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
