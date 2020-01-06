var btnElement = document.querySelector('#app button#add');
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');


var afazeres = [
    'Fazer um Web Service',
    'Fazer trabalho de PAA',
    'Estudar Física'
];

function renderAfazeres() {
    listElement.innerHTML = '';
    for (afazer of afazeres) {
        var afazerElement = document.createElement('li');
        var afazerText = document.createTextNode(afazer);
        var linkElement = document.createElement('a');
        var textElement = document.createTextNode(' Excluir');
        var pos = afazeres.indexOf(afazer);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'removerAfazeres(' + pos + ')');
        linkElement.appendChild(textElement);
        afazerElement.appendChild(afazerText);
        afazerElement.appendChild(linkElement);
        listElement.appendChild(afazerElement);

    }
}
renderAfazeres();

function addAfazeres() {
    if (inputElement.value != '') {

        afazeres.push(inputElement.value);
        inputElement.value = '';
        renderAfazeres();
    }
}

function removerAfazeres(pos) {
    afazeres.splice(pos, 1);    //splice vai na posição do array e retira a quantiadade de elementos indicada
    renderAfazeres();
}

btnElement.onclick = addAfazeres;

