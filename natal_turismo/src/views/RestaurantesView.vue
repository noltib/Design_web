<template>
  <main>
    <h2>Restaurantes de Natal</h2>
    <p>A experiência gastronômica em Natal é um convite para explorar sabores intensos e cheios de identidade. A cidade oferece uma combinação única de tradições locais e influências contemporâneas, onde ingredientes frescos ganham destaque e transformam cada refeição em um momento especial. Os aromas que se espalham pelos ambientes despertam a curiosidade e abrem o apetite, criando uma conexão imediata com a cultura regional.</p>
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
    <Card titulo="Beira mar" 
          :imagem="beiraMar" 
          descricao="O Restaurante Beiramar é um dos mais tradicionais de Natal, conhecido por sua localização privilegiada à beira-mar e por oferecer uma variedade de pratos que destacam os sabores do litoral potiguar." />
    <Card titulo="Paprika" 
          :imagem="paprika" 
          descricao="O Restaurante Paprika é um dos mais renomados de Natal, conhecido por sua culinária contemporânea que combina ingredientes locais com técnicas modernas, proporcionando uma experiência gastronômica única e sofisticada." />
    <Card titulo="Casa do Matuto" 
          :imagem="casaDoMatuto" 
          descricao="A Casa do Matuto é um restaurante tradicional em Natal, conhecido por sua decoração rústica e por oferecer uma variedade de pratos típicos da culinária nordestina." />
    </section>
    
  </main>
</template>



<script>
import Card from '@/components/Card.vue';
import camaroesPotiguar from '@/assets/camaroes.jpg'
import mangai from '@/assets/mangai.jpg'
import tabuaCarne from '@/assets/tabua.jpg'
import beiraMar from '@/assets/beiramar.jpg'
import paprika from '@/assets/paprika.jpg'
import casaDoMatuto from '@/assets/casadomatuto.jpg'

export default {
  name: 'RestaurantesView',
  components: {
    Card,
  },
  data() {
    return {
      
      camaroesPotiguar,
      mangai,
      tabuaCarne,
      beiraMar,
      paprika,
      casaDoMatuto
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
