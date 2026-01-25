var contatos = [
    {
        nome: "labirinto",
        cel: "98146698",
        foto: "labirinto.webp",
        favorito: false
    },
    {
        nome: "kemi",
        cel: "3823847390",
        foto: "kemi.webp",
        favorito: true
    },
    {
        nome: "henri",
        cel: "23678978",
        foto: "Henri.webp",
        favorito: true
    },
    {
        nome: "dalmo",
        cel: "7159763",
        foto: "dalmo.webp",
        favorito: true
    },
    {
        nome: "jae",
        cel: "23809725",
        foto: "jae.webp",
        favorito: false
    },
    {
        nome: "aguiar",
        cel: "7495738",
        foto: "aguiar.webp",
        favorito: false
    }


]


const agenda = {
    data(){
        return{
            titulo: "Minha agenda de contatos com Vue",
            msg: "Olá Vue!",
            contatos: window.contatos
        }
    }
}
Vue.createApp(agenda).mount("#app")