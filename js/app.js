
const preguntas = document.getElementsByClassName('seccion__preguntas');
//const valor = document.querySelector('.seccion__preguntas');
//valor.classList.toggle('active'); 
for(i=0;i<preguntas.length;i++){
    preguntas[i].addEventListener('click',function(){
       this.classList.toggle('active'); //this hace referencia a la etiqueta
       console.log(this);
    })  
}

const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre'); 
const genero = document.querySelector('#genero');
const episodios = document.querySelector('.seccion__parrafos');
const capitulo = document.getElementsByClassName('seccion__capitulo');
capitulo[0].href='hola';
console.log(capitulo);
console.log(episodios);

document.addEventListener('DOMContentLoaded',mostrarAPI);
function mostrarAPI(){
    const url = 'https://rickandmortyapi.com/api/character/2';
    fetch(url)
        .then(datos => datos.json())
        .then(resultado => {
            agregarContenido(resultado.image,resultado.name,resultado.gender,resultado.episode);
        })    
}
function agregarContenido(img,name,gender,episodios){
    const imagen = document.createElement('img');
    imagen.src = img;
    imagen.style.width = '250px';
    foto.appendChild(imagen);

    const nav = document.querySelector('a');
    nav.innerHTML = name;
    nombre.appendChild(nav);

    const nav2 = document.querySelector('a');
    nav2.innerHTML = gender;
    genero.appendChild(nav2);

    mostrarEpisodios(episodios)
   
}
function mostrarEpisodios(episodios){
    
    for(i=0;i+36<episodios.length;i++){
        if(i == 0){
            capitulo[0].href = episodios[i];
        }else if(i == 1){
            capitulo[1].href = episodios[i];
        }
        else if(i == 2){
            capitulo[2].href = episodios[i];
        }else if(i == 3){
            capitulo[3].href = episodios[i];
        }else if(i == 4){
            capitulo[4].href = episodios[i];
        }
        console.log(episodios[i]);
    }

}


