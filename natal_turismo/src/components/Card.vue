<template>
    <article>
        <img :src="imagem" :alt="titulo" />
        <h4>{{ titulo }}</h4>
        <p>{{ descricao }}</p>
    </article>
</template>
<script>
export default {
    name: "Card",
    props: {
        titulo: {
            type: String,
            required: true,
        },
        imagem: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
article{
    background-color: #DBF2F3;
    padding: 0.5em;
    border-radius: 8px;
    width: auto;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
}
img {
    width: 100%;
    border-radius: 8px;
}
p {
    margin-top: 0.5em;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
h4 {
    margin-top: 0.5em;
    font-family: 'Arial', Helvetica, sans-serif;
    font-weight: lighter;
    font-size: 1.5vw;
}
article p {
    font-family: 'Arial', Helvetica, sans-serif;
    color: #444;
}
</style>