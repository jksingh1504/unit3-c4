// Ude Import export (MANDATORY)


import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML=navbar();

let news =JSON.parse(localStorage.getItem("news"));

console.log(news);

let img=document.createElement("img");
img.src=news.urlToImage;

let Title=document.createElement("h3");
Title.innerText=news.title;

let Description=document.createElement("p");
Description.innerText=news.description;

document.querySelector("#detailed_news").append(img,Title,Description)

