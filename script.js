// Selecionar elementos do DOM
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');

// Mostrar modal de login ao clicar em "Login"
loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Fechar modal ao clicar no botão de fechar
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Simulação de login (substituir por lógica real de autenticação)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Lógica de autenticação aqui
        alert('Login realizado com sucesso!');
        modal.style.display = 'none';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Simulação de login com Google (substituir por API real do Google)
document.getElementById('loginWithGoogle').addEventListener('click', () => {
    alert('Login com Google não implementado.');
    modal.style.display = 'none';
});

// Reproduzir sons de animais
const elephantBtn = document.getElementById('elephant-btn');
const giraffeBtn = document.getElementById('giraffe-btn');
const lionBtn = document.getElementById('lion-btn');

const elephantSound = document.getElementById('elephant-sound');
const giraffeSound = document.getElementById('giraffe-sound');
const lionSound = document.getElementById('lion-sound');

elephantBtn.addEventListener('click', () => {
    elephantSound.currentTime = 0; // Reiniciar o som
    elephantSound.play();
});

giraffeBtn.addEventListener('click', () => {
    giraffeSound.currentTime = 0; // Reiniciar o som
    giraffeSound.play();
});

lionBtn.addEventListener('click', () => {
    lionSound.currentTime = 0; // Reiniciar o som
    lionSound.play();
});

// Verificar se os sons estão prontos para serem reproduzidos
elephantSound.addEventListener('canplaythrough', () => {
    console.log('Elephant sound is ready to play');
});
giraffeSound.addEventListener('canplaythrough', () => {
    console.log('Giraffe sound is ready to play');
});
lionSound.addEventListener('canplaythrough', () => {
    console.log('Lion sound is ready to play');
});
// Função para inicializar o mapa
function initMap() {
    // Coordenadas do zoológico (exemplo)
    const zooLocation = { lat: -23.55052, lng: -46.633309 };

    // Opções do mapa
    const mapOptions = {
        zoom: 15,
        center: zooLocation,
    };

    // Criar mapa
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Marcador no mapa
    const marker = new google.maps.Marker({
        position: zooLocation,
        map: map,
        title: "Zoológico HappyAnimals"
    });
}
