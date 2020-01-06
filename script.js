var btnElement = document.querySelector('#app button#add');
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');


var afazeres = [
    'Fazer um Web Service',
    'Fazer trabalho de PAA',
    'Estudar Física'
    ];

function renderAfazeres(){
    listElement.innerHTML = '';
    for(afazer of afazeres){
        var afazerElement = document.createElement('li');
        var afazerText = document.createTextNode(afazer);
        afazerElement.appendChild(afazerText);
        listElement.appendChild(afazerElement);
    }
}
renderAfazeres();

function addAfazeres(){
    if(inputElement.value != ''){

        afazeres.push(inputElement.value);
        inputElement.value = '';
        renderAfazeres();
    }
}

btnElement.onclick = addAfazeres;
