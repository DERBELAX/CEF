const form = document.querySelector('#contact');

console.log(form)
form.addEventListener('submit',async (event) => {
    event.preventDefault();
    const Nom = document.querySelector('#name').value;
    const Email = document.querySelector('#email').value;
    const Message = document.querySelector('#message').value;
    console.log(Nom,Email,Message);
    if (!Nom || !Email || !Message) {
       alert("Veuillez remplir tous les champs.");
        return; 
    }
   
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (regexEmail.test(Email)) {
        console.log("Adresse email valide ");
    } else {
        console.log("Adresse email invalide");
    }
});
