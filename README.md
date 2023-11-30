# Boolzapp

### Descrizione

Questa repository presenta un clone di WhatsApp Web sviluppato utilizzando i linguaggi HTML, CSS, JavaScript e VueJs.

Le diverse funzionalità verranno implementate progressivamente attraverso varie fasi. La repository è organizzata in cartelle, ciascuna corrispondente a una milestone specifica in cui viene implementata una parte del clone.

### Layout di riferimento

![layout di riferimento](img/Boolzapp-screenshot.png)

## Risoluzione in linguaggio naturale

### Milestone 1

In questa milestone verrà replicata la grafica di riferimento con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco). La visualizzazione della lista dei contatti sarà implementata in modo dinamico

1. Creare la struttura html e css
2. Creare 2 classi css:
   - Una per i messaggi inviati dall'utente (sfondo verde e allinemaento a destra)
   - Una per i messaggi inviati dall'interlocutore (sfondo bianco e allineamento a sinistra)
3. Tramite la direttiva v-for visualizzare in modo dinamico lista dei contatti

### Milestone 2

Le 2 funzionalità che verranno impementate in questa milestone sono:
**visualizzazione dinamica messaggi** (visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione)
**click su contatto** (mostra la conversazione del contatto cliccato).

1. Nel v-for dei contatti passare anche index

   > v-for="(contact, index) in contacts"

2. Interpolare le variabili

3. Condizione per applicare classi ai messaggi inviati (utente o interlocutore)

4. Creare nei data una varibile (contatto attivo) con il valore default 0

5. Al click eseguire una funzione che passa a contatto attivo l'index corrente
