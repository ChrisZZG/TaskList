
/*Obtenemos los Elementos que vamos a necesitar para trabajar */
let input = document.getElementById('ingresar-tarea');

let boton = document.querySelector('button');

let listaTareas = document.getElementById('lista-de-tareas');

function agregarTarea(){
    //Si en Input se escribio algun valor
    if(input.value){
        //Crear una tarea nueva y asignarle la clase .tarea 
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        //Crear el texto de la tarea y asignarselo a la tarea
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        //Crear el elemento contenedor para el icono,
        // agregarle la clase y asignarselo
        //a la tarea
        let icono = document.createElement('div');
        icono.classList.add('iconos');
        tareaNueva.appendChild(icono);

        //Crear los iconos individuales
        let completar = document.createElement('div');
        completar.classList.add('icono', 'icono-completar');
        //Marcar la Tarea como completada
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('div');
        eliminar.classList.add('icono','icono-eliminar');
        //Eliminar la tarea
        eliminar.addEventListener('click',eliminarTarea);

        //Agregarle los iconos al contenedor
        icono.append(completar, eliminar);

        //Agregar la TareaNueva a la Lista de Tareas

        listaTareas.appendChild(tareaNueva);

        

    }else{
        alert('No ha ingresado ninguna Tarea');
    }

    

}

//Asignarle el evento y la funcion al boton

boton.addEventListener('click', agregarTarea);

function completarTarea(e){
    /*Voy al evento donde se genero la accion, el icono, luego
    voy al padre q seria el contenedor del icono y luego al padre
    que seria el evento que contiene la tarea y le aplico
    el tachado del texto*/
    let tarea = e.target.parentNode.parentNode;
    /*Toggle - Si el elemento tiene la clase completada
    esta se va a eliminar y si no la tiene, se va a agregar */
    tarea.classList.toggle('completada');
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove()

}

/*Que la accion de aplicar enter sea equivalente a hacer click en el
boton nuevaTarea*/


/*keydown: cualquier tecla presionada en el teclado,
desencadena el evento */
input.addEventListener('keydown',(e)=>{
    
    //Si la tecla presionada es Enter, llamar a la funcion agregarTarea
    if(e.key === 'Enter'){
        agregarTarea();
        
    }
})