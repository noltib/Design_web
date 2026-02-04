<template>
  <Cabecalho />
  <RouterView />
</template>

<script>
import Cabecalho from "@/components/Cabecalho.vue";

export default {
  name: "App",
  components: {
    Cabecalho,
  },
};
</script>
