<template>
  <main>
    <h2>Pontos Turísticos de Natal</h2>
    <p>Natal encanta quem a visita logo nos primeiros momentos. A cidade combina paisagens naturais impressionantes com uma atmosfera leve e acolhedora, marcada pelo sol presente quase o ano inteiro e pela brisa constante que vem do mar. As cores do céu ao entardecer se misturam ao azul das águas, criando cenários que parecem pinturas vivas. Caminhar pela cidade é sentir a proximidade entre a natureza e a vida urbana, onde o ritmo tranquilo convida a desacelerar e aproveitar cada instante.</p>
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
    <Card titulo="Ponte Newton Navarro" 
          :imagem="ponteNewton" 
          descricao="A Ponte Newton Navarro é uma das maiores pontes estaiadas do Brasil e um marco arquitetônico em Natal. Inaugurada em 2007, a ponte conecta a zona Norte à zona Sul da cidade, facilitando o trânsito e oferecendo vistas panorâmicas do Rio Potengi." />
    <Card titulo="Teatro Alberto Maranhão" 
          :imagem="teatro" 
          descricao="O Teatro Alberto Maranhão é um dos principais espaços culturais de Natal, localizado no centro histórico da cidade. Inaugurado em 1912, o teatro é um exemplo notável da"/>
    <Card titulo="Centro Histórico de Natal" 
          :imagem="centroHistorico" 
          descricao="O Centro Histórico de Natal é um local repleto de charme e história, onde os visitantes podem explorar a rica herança cultural da cidade. Com suas ruas de paralelepípedos, arquitetura colonial e diversos pontos turísticos, o centro histórico oferece uma viagem no tempo para os séculos passados." />
    </section>
    
  </main>
</template>



<script>
import Card from '@/components/Card.vue';
import pontaNegra from '@/assets/PontaNegra.jpg';
import cajueiroPirangi from '@/assets/cajueiro.jpg';
import forteReisMagos from '@/assets/forte.jpg';
import ponteNewton from '@/assets/Ponte_Newton_Navarro.jpg';
import teatro from '@/assets/teatro.jpg';
import centroHistorico from '@/assets/centro_historico.jpg';

export default {
  name: 'PontosTuristicosView',
  components: {
    Card,
  },
  data() {
    return {
      pontaNegra,
      cajueiroPirangi,
      forteReisMagos,
      ponteNewton,
      teatro,
      centroHistorico
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
