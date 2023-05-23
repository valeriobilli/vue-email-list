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
        },
        tenRandomEmails: function () {
            for (let i = 0; i < 10; i++) {
                this.randomEmail();
            }
        }
    },
}).mount('#app')