// recupero elementi html

let elencoMail = document.getElementById("elencoMail");
let generaMail = document.getElementById("generaMail");

//richiedo 10 volte tramite api la generazione di una mail

for (let i = 0; i < 10; i++) {
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
        let email = data.response;
        elencoMail.innerHTML +=
        `
        <!-- email box -->
        <div class="col">
            <p>${email}</p>
        </div>
        `
    })
    .catch(error => {
    
    })  
}

// end code