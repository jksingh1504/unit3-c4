// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


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



async function regionalNews(query){
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`;

    let res=await fetch(url);

    let data=await res.json();

    let news=data.articles
    
    append(news,"#results")
}


function append(news,id){

    let container=document.querySelector(id);
    container.innerHTML=null;

    news.map((ele)=>{
    let child_div=document.createElement("div");
    child_div.setAttribute("class","news");
    child_div.addEventListener("click",()=>{
        news_details(ele);
    })

    let pota_div=document.createElement("div");

    let img=document.createElement("img");
    img.src=ele.urlToImage;

    let Title=document.createElement("h3");
    Title.innerText=ele.title

    let Description=document.createElement("p");
    Description.innerText=ele.description;

    pota_div.append(Title,Description)

    child_div.append(img,pota_div);

    container.append(child_div)
    })

};


function news_details(ele){
    localStorage.setItem("news",JSON.stringify(ele));

    window.location.href="news.html";

}


let Default_Country="in"
regionalNews(Default_Country)

