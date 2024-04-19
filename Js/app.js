
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


window.register__List = []; /* Creo un array */

const btn_Aux =  document.getElementById("btn__sortear");

btn_Aux.addEventListener('click', ()=>{
   let alert_Toast = document.querySelector(".div__alert");
   alert_Toast.innerHTML = "";

    let data__Number = document.getElementById("floatingInput").value;
    console.log(data__Number);

    error__List = []; /* Creo un array para agregar los errores */

    if (data__Number === ""){
        error__List.push("Ingrese dato numerico");
    }
    if(error__List.length === 0){
        let register__List = {} /* Creo un objeto */
        register__List.number = data__Number;

        window.register__List.push(register__List);
    }else{
        window.show__Errors(error__List);
    }

    


    console.log(error__List);
    console.log(register__List);
})