

window.show__Errors = (error__List)=>{
    let error = document.querySelector(".div__alert");
    error.classList.add("mt-2");
    let toast__Container = document.createElement("div");
    toast__Container.classList.add("alert", "alert-danger");
    error__List.forEach(element => {
        let div__toast = document.createElement("div");
        div__toast.innerText = element;
        toast__Container.appendChild(div__toast);
    }); 
    error.appendChild(toast__Container);
}

window.show__Winner = (result__List)=>{
    let winner = document.querySelector(".div__result");
    winner.classList.add("mt-2","card","bg-body","rounded");
    let winner__Container = document.createElement("div");
    
    winner__Container.classList.add("p-2");
    result__List.forEach(item=>{
        let div__Win = document.createElement("div");
        div__Win.classList.add("d-flex","justify-content-center","align-items-center","fw-bold","text-danger");
        
        let text = document.createElement("h6");
        text.classList.add("ms-4","lh-1", "mb-0");
        text.innerText = "Es el número ganador";
        let xmark = document.createElement("i");
        xmark.classList.add("fa-solid","fa-xmark","mb-0", "ms-5","text-dark");
        div__Win.innerText = item;
        div__Win.appendChild(text);
        div__Win.appendChild(xmark);

        xmark.addEventListener('click', function(){
            winner.classList.add("d-none");
            //console.log('Se hizo click en el icono');
        })

        winner__Container.appendChild(div__Win);
    });
    winner.appendChild(winner__Container);
}

window.register__List = []; /* Creo un array */
window.winner__List = []; /* Creo un array */

/* Capturo el Id del boton para realizar todo el proceso */
const btnAux__sortear =  document.getElementById("btn__sortear");

btnAux__sortear.addEventListener('click', ()=>{
   let alert_Toast = document.querySelector(".div__alert");
   alert_Toast.innerHTML = "";
 
    let data__Number = document.getElementById("floatingInput").value;

    console.log(data__Number);
        
    error__List = []; /* Creo un array para agregar los errores */
    result__List = []; /* Creo un array para agregar el numero ganador */
    let number__Win = 1;

    if (data__Number === ""){
        error__List.push("Ingrese dato númerico");
        }else{
            
            number__Win = Math.floor(Math.random()*data__Number);
            result__List.push(number__Win);

            let winner__List = {}/* Creo un objeto */
            winner__List.win = number__Win;

            console.log(result__List);

            window.winner__List.push(winner__List);
            window.show__Winner(result__List);

            }
                if(error__List.length === 0){
                    let register__List = {} /* Creo un objeto */
                    register__List.number = data__Number;

                    window.register__List.push(register__List);
                }else{
                    window.show__Errors(error__List);
                }

    //console.log(error__List);
    //console.log(register__List);
})