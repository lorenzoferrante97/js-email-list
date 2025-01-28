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

generaMail.addEventListener('click', () => {
    let cols = document.querySelectorAll(".col p");

    for (let x = 0; x < cols.length; x++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then(data => {
            let newEmail = data.response;
            cols[x].innerHTML = newEmail;
        })
        .catch(error => {
        
        })  
    }
    
})

// end code