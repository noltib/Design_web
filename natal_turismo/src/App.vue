<template>
  <Cabecalho />

  <main>
    <RouterView />
  </main>

  <Rodape />
</template>


<script>
import Cabecalho from "@/components/Cabecalho.vue";
import Rodape from "@/components/Rodape.vue";

export default {
  name: "App",
  components: {
    Cabecalho,
    Rodape,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}



</style>
