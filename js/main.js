const { createApp } = Vue;

createApp({
    data() {
        return {
            chiave: "valore",
        }
    },
    methods: {
        metodo() {
            console.log("metodo che stampa un dato: ", this.chiave);
        }
    },
    mounted() {
        console.log("Mounted iniziato");

        console.log("Mounted terminato");
    }
}).mount('#app')