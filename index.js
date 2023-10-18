console.log("Welcome to News Website Project");
// a91bbd17191f48d8ac63d59c12f72ea9

let apiKey = "a91bbd17191f48d8ac63d59c12f72ea9";

// Grab the News container
let newsAccordian = document.getElementById("newsAccordian");

//  Create a GET request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element, index) {
        // console.log(element,index);
        let news = `<div class="container my-3 accordion" id="newsAccordian">
                          <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample${index}"             aria-expanded="false" aria-controls="multiCollapseExample${index}">
                          <p><b> Breaking News ${index+1} </b> ${element["title"]}<p>
                          </button>
                        <div class="collapse multi-collapse" id= "multiCollapseExample${index}">
                          <div class="card card-body" id="search">
                               ${element["content"]}. <a href="${element['url']}" target="_blank" > Read More Here</a> 
                               <img src="${element["urlToImage"]}" alt="Sorry Image not Available" style="border:5px solid black; display: block;
                               margin-left: auto;
                               margin-right: auto;
                               width: 50%;">
                            
                          </div>
                      </div>
                   </div> `;
          newsHtml += news;
    });
    newsAccordian.innerHTML = newsHtml;
  } else {
    console.log(`Sorry`);
  }
};

xhr.send();

// Search News

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let newsAccordians = document.getElementsByClassName('accordion')
    Array.from(newsAccordians).forEach(function (element){
        let newsTxt = element.getElementsByTagName("p")[0].innerText;
        if(newsTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        console.log(newsTxt);
    })

})

