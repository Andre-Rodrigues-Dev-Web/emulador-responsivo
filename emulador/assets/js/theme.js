function goSite() {
const link = document.getElementById('link');
const iframe = document.getElementById('resultado');

// Busca o "ID" do vídeo
var id = link.value.split('watch?v=')[1];

// Verifica se obteve um "ID"
if(!id) {
    alert("Link está incorreto!");
    return;
}

// Seta o src do iframe para a url convertida
iframe.src = "https://www.youtube.com/embed/" + id;
}