'use strict';

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
//Variabili
const container = document.querySelector('.team-container');
// Ciclo For per stamapare gli oggetti
for(let key in arrayTeam){
    let teamMember=(arrayTeam[key]);
    console.log(teamMember);
    for(let i=0;i<=arrayTeam.length;i++){
        container.innerHTML = arrayTeam[key];
    }    
    };    
