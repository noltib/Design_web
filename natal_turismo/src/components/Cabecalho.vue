<template>
  <header>
    <nav>
      <RouterLink to="/">
        <img :src="logo" alt="Logo">
      </RouterLink>

      <button class="hamburger" @click="menuAberto = !menuAberto"> ☰ </button>

      <ul :class="{ ativo: menuAberto }">
        <li><RouterLink to="/pontos-turisticos">Pontos turísticos</RouterLink></li>
        <li><RouterLink to="/restaurantes">Restaurantes</RouterLink></li>
        <li><RouterLink to="/passeios">Passeios</RouterLink></li>
        <li><RouterLink to="/comentarios">Comentários</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>


<script>
import logo from "@/assets/logo.svg";

export default {
  name: "Cabecalho",
  data() {
    return {
      logo,
      menuAberto: false,
    };
  },
};
</script>


<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 1em;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  background-color: #01A9B0;
  padding: 1em;
  border-radius: 10px;
  margin: 0;
}

li a {
  text-decoration: none;
  padding: 1em;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

li a:hover {
  background-color: #39b5b8;
}

img {
  height: 3em;
}

.hamburger {
  display: none;
  font-size: 2.2rem;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  background-color: #01A9B0;
  border-radius: 5px;
  padding: 0 0.2em;

}


@media (max-width: 795px) {
  .hamburger {
    display: block;
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    border-radius: 5px;
    padding: 1.5em 0 ;
  }

  ul.ativo {
    display: flex;
  }
  li a {
    padding: 0.5em 1em;
  }
}
</style>
