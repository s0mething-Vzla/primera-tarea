const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
});

const comprobarancho = () => {
    if(window.innerHeight <= 768){
        contenedor .classList .remove('active');
    }else{ 
        contenedor .classList .add('active');
    }
}
comprobarancho ();


window.addEventListener('resize', () => {
comprobarancho ();
});