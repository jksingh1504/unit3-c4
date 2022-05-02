// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML=navbar();


async function Search(e){

    if(e.key=="Enter"){
    let query=document.querySelector("#search_input").value

    const url=`https://masai-mock-api.herokuapp.com/news?q=${query}`;

    let res=await fetch(url);

    let data=await res.json();

    let news=data.articles

    console.log(news)
    document.querySelector("#search_input").value=null;
    
    append(news,"#results")

    }

    
}