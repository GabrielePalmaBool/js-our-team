/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

*/


//Svolgimento


//creo l'oggetto team
const Team = [

    {
        "nome": "Wayne",
        "cognome": "Barnett",
        "ruolo": "Founder & CEO",
        "foto" : "img/img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela",
        "cognome": "Caroll",
        "ruolo": "Chief Editor",
        "foto" : "img/img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter",
        "cognome": "Gordon",
        "ruolo": "Officer Manager",
        "foto" : "img/img/walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela",
        "cognome": "Lopez",
        "ruolo": "Social Media Manager",
        "foto" : "img/img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott",
        "cognome": "Estrada",
        "ruolo": "Developer",
        "foto" : "img/img/scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara",
        "cognome": "Ramos",
        "ruolo": "Graphic Designer",
        "foto" : "img/img/barbara-ramos-graphic-designer.jpg"
    }
];


// dichiaro l'elemento che ha per classe box
const Container = document.querySelector(".row");


function Popolamento(){

    for(let i=0; i<Team.length; i++){

        //creo una variabile momentanea alla quale acceddo per ottenere informazioni presenti nel mio oggetto
        let val= Team[i] 
    
        //Creo l'elemento all'interno del mio file html
        const Box = document.createElement ("div");
    
        //aggiungo la classe desiderata
        Box.classList.add("card");
    
    
    
        //Creo tag img all'interno del mio file html
        const img = document.createElement ("img");
    
        //acquisisco il percorso delle foto e lo passo all'attributo src del tag img
        img.src = val.foto;
    
    
    
    
        //Creo l'elemento all'interno del mio file html
        const BoxT = document.createElement ("div");
    
        //aggiungo la classe desiderata
        BoxT.classList.add("card-body");
    
    
    
    
        //Creo l'elemento all'interno del mio file html
        const Title = document.createElement ("h5");
    
        //aggiungo la classe desiderata
        Title.classList.add("card-title");
    
        //inserisco scritta all'interno del mio contenuto preso dall'oggetto
        Title.append(val.nome+" "+val.cognome);
    
        //inserisco numero all'interno del quadrato il tag h1
        BoxT.append(Title);
    
    
        //Creo l'elemento all'interno del mio file html
        const Text = document.createElement ("p");
    
        //aggiungo la classe desiderata
        Text.classList.add("card-text");
    
        //inserisco scritta all'interno del mio contenuto preso dall'oggetto
        Text.append(val.ruolo);
    
        //inserisco numero all'interno del quadrato il tag h1
        BoxT.append(Text);
    
    
    
        //inserisco numero all'interno del quadrato il tag h1
        Box.append(img);
    
        //inserisco numero all'interno del quadrato il tag h1
        Box.append(BoxT);
        
        //inserisco ogni blocco all'inerno del mio container
        Container.append(Box);
    
    
    }
    
}


Popolamento();



