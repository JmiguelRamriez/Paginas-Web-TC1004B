function mostrarAlerta(){
    let audio = new Audio("audio.mp3");
    audio.play(); 

    let alerta = document.getElementById("alerta");
    alerta.classList.add("mostrar");
}

function cambiaImagen() {
    document.getElementById('personaje').src = "https://i.blogs.es/cea084/neeko-lol/1200_630.jpeg";   
}

function volverOriginal(){
    document.getElementById('personaje').src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg";
}

function cambiarFondo(){
const colores = [
    "#3ED598",  
    "#00C9FF",  
    "#B38ADD",  
    "#FF79C6",  
    "#F9E79F",  
    "#6F86C8"   
    ];

    let random = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[random];
}