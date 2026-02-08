<template>
  <section>
    <h2>Comentários dos visitantes</h2>
    <form @submit.prevent="salvarComentario">
      <textarea v-model="textoComentario" placeholder="Escreva seu comentário aqui"></textarea>
      <button type="submit">Enviar comentário</button>
    </form>

    <ol class="lista">
      <li class="comentario" v-for="comentario in comentarios" :key="comentario.id">
        <p>{{ comentario.texto }}</p>
        <span class="data">{{ comentario.data }}</span>
      </li>
    </ol>
  </section>
</template>




<script setup>
import { ref, onMounted } from 'vue'

// Lista de comentários
const comentarios = ref([])

// Texto do textarea
const textoComentario = ref('')

// Carregar comentários do localStorage
const carregarComentarios = () => {
  const dados = localStorage.getItem('lista_comentarios')
  if (dados) {
    comentarios.value = JSON.parse(dados)
  }
}

// Executa quando o componente é montado
onMounted(() => {
  carregarComentarios()
})

// Salvar novo comentário
const salvarComentario = () => {
  if (!textoComentario.value.trim()) return

  const listaComentarios = JSON.parse(
    localStorage.getItem('lista_comentarios') || '[]'
  )

  const novoComentario = {
    id: Date.now(),
    texto: textoComentario.value,
    data: new Date().toLocaleString('pt-BR')
  }

  listaComentarios.push(novoComentario)

  localStorage.setItem(
    'lista_comentarios',
    JSON.stringify(listaComentarios)
  )

  textoComentario.value = ''
  carregarComentarios()
}
</script>



<script>
export default {
  name: 'ComentariosView'
}
</script>

<style scoped>
section {
  margin: 0 20%;
  font-family: Arial, sans-serif;
}

h2 {
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
  margin: 2em  1em 2em -2em;
  font-size: 1.8em;
  font-weight: 100;
}
form {
  background-color: #01A9B0;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

form textarea {
  flex: 1;
  height: 100px;
  resize: none;
  border-radius: 10px;
  border: none;
  padding: 12px;
  font-size: 16px;
  outline: none;
  background-color: #e0f7f7;
  font-family: Arial, sans-serif;
}

form button {
  background-color: #e0f7f7;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}

form button:hover {
  background-color: #c9eeee;
}

ol {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

li {
  background-color: #e0f7f7;
  padding: 14px;
  border-radius: 10px;
  position: relative;
  list-style: none;
}

li p {
  margin: 0;
}

li .data {
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 12px;
  color: #555;
}

</style>