const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            mailApi: "https://flynn.boolean.careers/exercises/api/random/mail"
        }
    },
    methods: {
        randomEmail: function () {
            axios.get(this.mailApi)
                .then((risposta) => {
                    this.emails.push(risposta.data.response)
                })
        }
    },
    mounted() {
        console.log("Mounted iniziato");


        console.log("Mounted terminato");
    }
}).mount('#app')