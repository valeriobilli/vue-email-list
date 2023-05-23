const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            mailApi: "https://flynn.boolean.careers/exercises/api/random/mail"
        }
    },
    methods: {
        randomEmail() {
            console.log("metodo che stampa un dato: ", this.chiave);
        }
    },
    mounted() {
        console.log("Mounted iniziato");

        console.log("Mounted terminato");
    }
}).mount('#app')