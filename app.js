const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('llistaActividades');
let arrayActividades = [];

const crearItem = (actividad) => {

    let item = {
        actividad: actividad,
        estado: false
    }

    arrayActividades.push(item);

    return item;

}

formularioUI.addEventListener('submit', (e) => {

    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;

    CrearItem(actividadUI);
    GuardarDB();

    formularioUI.reset();


});

const GuardarDB = () => {

    localStorage.setItem('rutina', JSON.stringify(arrayActividades));

    PintarDB();

}

document.addEventListener('DOMContentLoaded', PintarDB);