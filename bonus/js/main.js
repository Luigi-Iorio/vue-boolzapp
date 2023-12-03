// luxon
var DateTime = luxon.DateTime;

// destructuring
const { createApp } = Vue;
// app
createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "../img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
              menuTendina: [],
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "../img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
              menuTendina: [],
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
              menuTendina: [],
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "../img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
              menuTendina: [],
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
              menuTendina: [],
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "../img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
              menuTendina: [],
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "../img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
              menuTendina: [],
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "../img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
              menuTendina: [],
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
              menuTendina: [],
            },
          ],
        },
        {
          name: "Federico",
          avatar: "../img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
              menuTendina: [],
            },
          ],
        },
        {
          name: "Davide",
          avatar: "../img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
              menuTendina: [],
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
              menuTendina: [],
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
              menuTendina: [],
            },
          ],
        },
      ],
      contattoAttivo: 0,
      testoInput: "",
      ricercaInput: "",
      planeVisible: true,
      cancellaInChat: false,
    };
  },
  methods: {
    // al click contatore è uguale a index
    attivo(index) {
      this.contattoAttivo = index;
    },
    // risposta interlocutore dopo un secondo
    rispostaPosticipata() {
      setTimeout(() => {
        this.contacts[this.contattoAttivo].messages.push({
          date: DateTime.now().toLocaleString(
            DateTime.DATETIME_SHORT_WITH_SECONDS
          ),
          message: "ok",
          status: "received",
          menuTendina: [],
        });
      }, 1000);
    },
    // invio messaggio utente tramite input
    invioMessaggio() {
      if (this.testoInput.trim() !== "") {
        this.contacts[this.contattoAttivo].messages.push({
          date: DateTime.now().toLocaleString(
            DateTime.DATETIME_SHORT_WITH_SECONDS
          ),
          message: this.testoInput,
          status: "sent",
          menuTendina: [],
        });
        this.rispostaPosticipata();
      }
      this.testoInput = "";
    },
    // filtro in lista contatti
    ricercaContatti() {
      if (this.ricercaInput.trim() !== "") {
        this.contacts.forEach((contact) => {
          if (
            contact.name.toLowerCase().includes(this.ricercaInput.toLowerCase())
          ) {
            contact.visible = true;
          } else if (
            !contact.name
              .toLowerCase()
              .includes(this.ricercaInput.toLowerCase())
          ) {
            contact.visible = false;
          }
        });
      } else {
        this.contacts.forEach((contact) => {
          contact.visible = true;
        });
      }
    },
    // menu a tendina su messaggio
    menuMessaggio(index) {
      this.contacts[this.contattoAttivo].messages[index].menuTendina.push({
        info: "Message info",
        delete: "Delete message",
        attivo: true,
      });
    },
    // rimozione messaggio dalla lista messaggi
    cancellaMessaggio(index) {
      this.contacts[this.contattoAttivo].messages.splice(index, 1);
    },
    // cambio icona per invio messaggio
    cambioIcona() {
      if (this.testoInput.trim() !== "") {
        this.planeVisible = false;
      } else {
        this.planeVisible = true;
      }
    },
    // popup cancella messaggi/chat
    popupMessaggi() {
      this.cancellaInChat = !this.cancellaInChat;
    },
    // cancella tutti i messaggi
    cancellaMessaggi() {
      this.contacts[this.contattoAttivo].messages = [];
    },
    // cancella chat
    cancellaChat() {
      this.contacts[this.contattoAttivo] = [];
      // la nuova chat visualizzata sarà quella precedente a quella appena eliminata
      this.contattoAttivo = this.contattoAttivo - 1;
    },
  },
}).mount("#app");
