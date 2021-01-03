
// <-------------------> Creation HTML <------------------->

// -----> titre <-----
let body = document.querySelector("body")


let titre = document.createElement("div")
body.prepend(titre)

titre.innerHTML = "To Do List"
titre.setAttribute(`class`,`titre`);

//  -----> div contenaire <-----
let divContenaire = document.createElement(`div`)
body.append(divContenaire);

divContenaire.setAttribute(`class`,`contenaire`);

// texte 
let texteDiv1 = document.createTextNode(`Ajouter une tache:`)
divContenaire.prepend(texteDiv1)

//  -----> div1  <-----

let div1 = document.createElement("div")
divContenaire.append(div1)

// div1.style.background= `red`
div1.style.marginTop = `8px`

// input div1 

let input = document.createElement('input')
input.setAttribute(`type`,`text`)
input.setAttribute(`placeholder`,`tache`)
div1.prepend(input);

// boutton ajouter
let btnAjouter = document.createElement(`button`)
btnAjouter.setAttribute(`type`,`submit`)
btnAjouter.setAttribute(`class`,`btn`)
div1.append(btnAjouter)

btnAjouter.innerHTML= `Ajouter`

// ligne 
let ligne = document.createElement(`hr`)
div1.append(ligne)



//  -----> div2  <-----

let div2 = document.createElement("div")
div2.setAttribute(`class`,`div2`)
divContenaire.append(div2);

// btn a faire:
let btnAFaire = document.createElement("button")
btnAFaire.innerHTML = "A Faire"
btnAFaire.setAttribute(`class`,`btn`)
btnAFaire.classList.add(`filtre`)
div2.append(btnAFaire);

// btn Termine:
let btnTermine = document.createElement("button")
btnTermine.innerHTML = "Termine"
btnTermine.setAttribute(`class`,`btn`)
btnTermine.classList.add(`filtre`)
div2.append(btnTermine);

// btn Tous:
let btnTous = document.createElement("button")
btnTous.setAttribute(`class`,`btn`)
btnTous.classList.add(`filtre`)
btnTous.innerHTML = "Tous"
div2.append(btnTous);



//  -----> div3 : contenaire des taches : les taches  <-----

let div3 = document.createElement("div");
div3.setAttribute(`class`,`div3`)
divContenaire.append(div3);

// -----> liste <ul> pour les taches: <-----

let listeTache = document.createElement(`ul`);
div3.append(listeTache)
listeTache.setAttribute(`class`,`listeTache`)

console.log(listeTache);




// <-------------------> Programmation des bouttons:  <------------------->


// --------------> btn ajouter:
btnAjouter.addEventListener(`click`,addToDo) ;


//<-------------------> function: <------------------->

function addToDo (event) {
    event.preventDefault();
    
    // la div dans le ul: 
    const divUl = document.createElement(`div`);
    divUl.setAttribute(`class`,`divUl`);
    listeTache.append(divUl)

    // cree le li:
    const newLi = document.createElement(`li`);
    newLi.innerHTML = input.value;
    newLi.setAttribute(`class`,`newLi`);
    divUl.append(newLi);


    // ajouter des icones:
    // btn check:
    const valider = document.createElement("button")
    valider.innerHTML = `<i class="fas fa-check-circle  "></i>`
    valider.setAttribute(`class`,`iconValider`)
    valider.classList.add(`icon`)
    valider.style.color = `#fff`
    divUl.append(valider)
    
    // btn modifier:
    const modifier = document.createElement("button")
    modifier.innerHTML = `<i class="fas fa-edit "></i>`
    modifier.setAttribute(`class`,`iconModifier`)
    modifier.classList.add(`icon`)
    modifier.style.color= `#ffe100`
    divUl.append(modifier)



    // btn supprimer:
    const supp = document.createElement("button")
    supp.innerHTML = `<i class="fas fa-trash-alt "></i>`
    supp.setAttribute(`class`,`iconSupp`)
    supp.classList.add(`icon`)
    supp.style.color = 'red'
    divUl.append(supp)

    // initilaiser input:

    input.value= "";

    
}


// --------------> btn valider supprimer et modifier :

listeTache.addEventListener(`click`,supprimerValider);

// function:

function supprimerValider(e){

    // je re-cible les differents elements dans ma div todo: 

    const cible = e.target
    
    // icons delte
    if (cible.classList[1] === `fa-trash-alt`){

        cible.parentElement.parentElement.classList.add(`tomber`)
        cible.parentElement.parentElement.addEventListener(`transitionend`, function(){
            
            cible.parentElement.parentElement.remove();

        })
        
    }
    // icons valider:

    if(cible.classList[1]===`fa-check-circle`){

        // je bascule sur une autre classe avec toggle:
        console.log(cible.parentElement);
        console.log(cible.parentElement.parentElement);
        cible.parentElement.parentElement.classList.toggle(`tacheFini`);
        cible.parentElement.style.border = `none`

    }


    // icon modifier:
    if(cible.classList[1] === `fa-edit`){

        let divUl = cible.parentElement.parentElement
        let texte = divUl.firstChild.innerHTML
        
        // je supprime les icones et j'ajoute l'icone save: 
        divUl.childNodes[1].remove();
        divUl.childNodes[2].remove();
        cible.classList.remove(`fa-edit`);
        cible.classList.add (`fa-save`)
        cible.style.marginRight = `50px`
        
        // ajouter un input:
        let input = document.createElement(`input`);
        divUl.prepend(input);
        input.value = texte
        input.style.marginLeft =`35px`

        divUl.childNodes[1].innerHTML= ``

        // cibler et programmer le btn save: 

        
        

        cible.addEventListener(`click`,function(){

            let newLi = cible.parentElement.parentElement.childNodes[1]
            const divUl = cible.parentElement.parentElement

            // btn supprimer:
            const Isupp = document.createElement(`button`);
            Isupp.innerHTML = `<i class="fas fa-trash-alt "></i>`
            Isupp.setAttribute(`class`,`iconSupp`)
            Isupp.classList.add(`icon`)
            Isupp.style.color = 'red'

            // btn modifier:
            const modifier = document.createElement("button")
            modifier.innerHTML = `<i class="fas fa-edit "></i>`
            modifier.setAttribute(`class`,`iconModifier`)
            modifier.classList.add(`icon`)
            modifier.style.color= `#ffe100`

            // btn check:
            const valider = document.createElement("button")
            valider.innerHTML = `<i class="fas fa-check-circle  "></i>`
            valider.setAttribute(`class`,`iconValider`)
            valider.classList.add(`icon`)
            valider.style.color = `#fff`

            

           
            // je donne la valeur du nouveau saisi: j enregistre: 
            newLi.innerHTML = input.value


            // je supp le inputs et le btn save et j'ajoute les autres btn
            input.remove();
            divUl.lastChild.remove();


            // j'ajoute les differents btn dans la div modifie:
            divUl.append(valider);
            divUl.append(modifier);
            divUl.append(Isupp);
            
        })


    }
}

// <-------------------> Programmation des filtres :  <------------------->

let DivFiltre = document.querySelector(`.div2`)


// au click sur la div2: 

DivFiltre.addEventListener(`click`,filtre);



// function: filtre:

function filtre(e){

    const liste = listeTache.childNodes
    liste.forEach(function(todo){
        
        switch (e.target.innerHTML) {
            case `Tous`:

                todo.style.display = `flex`;
                break;

            case `Termine`:

                if (todo.classList.contains(`tacheFini`)){
                    todo.style.display = `flex`;
                    
                }else{

                    todo.style.display = `none`;

                }
                break;

            case `A Faire`:
                // ici le `!` permet de prendre justement l'inverse 
                if (!todo.classList.contains(`tacheFini`)){
                    todo.style.display = `flex`;
                    
                }else{

                    todo.style.display = `none`;

                }
                break;
            
            


            default:
                break;
        }
    })
}















