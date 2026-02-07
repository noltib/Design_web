<template>
    <footer>
    <address>
        <p>@Natal_turismo_ofc</p>
        <p>NatalTurismo12345@gmail.com</p>
        <p>(84) 4002 - 8922</p>
    </address>

    <figure>
        <img :src="logo" alt="Natal Turismo">
        <figcaption>Produzido por Noltib</figcaption>
    </figure>
    </footer>
</template>

<script>
import logo from "@/assets/logo_branco.svg";

export default {
  name: "Rodape",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #01A9B0;
  color: #ffffff;
  padding: 2em;
  margin-top: 2em;
}
address p, figcaption {
  text-decoration: none;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 0;
}
figure {
    text-align: right;
}
img {
  height: 3em;
}

</style>