'use strict';
//Funzioni
function elementCreator(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;
    return element;
}
function myAppendElement(containerElement , htmlElement){
    containerElement.append(htmlElement);
}
//Variabili
const container = document.querySelector('.team-container');

// Array & Item 
const arrayTeam = [
    {
        name:'Waine Barnett',
        role:'Founder & CEO',
        img:'wayne-barnett-founder-ceo.jpg' 
    },
    {
        name:'Angela Caroll',
        role:'Chief Editor',
        img:'angela-caroll-chief-editor.jpg' 
    },
    {
        name:'Walter Gordon',
        role:'Office Manager',
        img:'walter-gordon-office-manager.jpg' 
    },
    {
        name:'Angela Lopez',
        role:'Social Media Manager',
        img:'angela-lopez-social-media-manager.jpg' 
    },
    {
        name:'Scott Estrada',
        role:'Developer',
        img:'scott-estrada-developer.jpg' 
    },
    {
        name:'Barbara Ramos',
        role:'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg' 
    }
];
// Ciclo For per stamapare gli oggetti
for(let key in arrayTeam){
    let teamMember=(arrayTeam[key]);
    console.log(teamMember);
        let name = arrayTeam[key].name;
        let role = arrayTeam[key].role;
        let img = arrayTeam[key].img;
        let element = elementCreator('div','card',`${name} ${role}`);
        let imgElement = elementCreator('img','img');
        imgElement.src=`img/${img}`;
        container.append(element);
        element.append(imgElement);
    };    
    
    
    
    
