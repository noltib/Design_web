<template>
  <Cabecalho />
  <RouterView />
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

</style>
