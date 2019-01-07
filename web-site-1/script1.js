'use strist';
console.clear();

//Let's start


let $nav =  document.getElementById('nav1224')

let $btn1 = document.createElement("button")

$btn1.setAttribute("class","navbar-toggler")
$btn1.setAttribute("type","button")
$btn1.setAttribute("data-toggle","collapse")
$btn1.setAttribute("data-target","#navbarTogglerDemo03")
$btn1.setAttribute("aria-controls","navbarTogglerDemo03")
$btn1.setAttribute("aria-expanded","false")
$btn1.setAttribute("aria-label","Toggle navigation")

let $span = document.createElement("span")
$span.setAttribute("class","navbar-toggler-icon")
$btn1.appendChild($span);

let $a101 = document.createElement("a")
$a101.setAttribute("class","navbar-brand")
$a101.setAttribute("herf","#")
$a101.innerHTML = "freeMovie"

let $div101 = document.createElement("div")
$div101.setAttribute("class","collapse navbar-collapse")
$div101.setAttribute("id","navbarTogglerDemo03")

let $ul101 = document.createElement("ul")
$ul101.setAttribute("class","navbar-nav mr-auto mt-2 mt-lg-0")



let $li101 = document.createElement("li")
$li101.setAttribute("class","nav-item active")
let $a201 = document.createElement("a")
$a201.setAttribute("class","navbar-brand")
$a201.setAttribute("href","https://www.themoviedb.org/discover/movie")
$a201.innerHTML = "DISCOVER"
$li101.appendChild($a201)

let $li102 = document.createElement("li")
$li102.setAttribute("class","nav-item active")
let $a202 = document.createElement("a")
$a202.setAttribute("class","navbar-brand")
$a202.setAttribute("href","https://www.themoviedb.org/movie")
$a202.innerHTML = "MOVIE"
$li102.appendChild($a202)

let $li103 = document.createElement("li")
$li103.setAttribute("class","nav-item active")
let $a203 = document.createElement("a")
$a203.setAttribute("class","navbar-brand")
$a203.setAttribute("href","https://www.themoviedb.org/tv")
$a203.innerHTML = "TV SHOW"
$li103.appendChild($a203)

let $li104 = document.createElement("li")
$li104.setAttribute("class","nav-item active")
let $a204 = document.createElement("a")
$a204.setAttribute("class","navbar-brand")
$a204.setAttribute("href","https://www.themoviedb.org/person")
$a204.innerHTML = "PEOPLE"
$li104.appendChild($a204)

$ul101.appendChild($li101)
$ul101.appendChild($li102)
$ul101.appendChild($li103)
$ul101.appendChild($li104)

$div101.appendChild($ul101)

let $form101 = document.createElement("form")
$form101.setAttribute("class","form-inline my-2 my-lg-0")

let $input101 = document.createElement("input")
$input101.setAttribute("class","orm-control mr-sm-2")
$input101.setAttribute("type","search")
$input101.setAttribute("placeholder","search")
$input101.setAttribute("aria-label","search")
let value1224 = $input101.value;


let $btn101 = document.createElement("button")
$btn101.setAttribute("class","btn btn-outline-success my-2 my-sm-0 ")//
$btn101.setAttribute("type","submit")
// $btn101.setAttribute("onclick","window.location.href = "https://www.themoviedb.org/search?query=`${value1224}`"")

$btn101.innerHTML = "search"
// let $a205 = document.createElement("a")
// $a205.setAttribute("class","navbar-brand")
// $a205.setAttribute("href",`https://www.themoviedb.org/search?query=${value1224}`)
// $btn101.appendChild($a205)

$form101.appendChild($input101)
$form101.appendChild($btn101)

$btn101.addEventListener("click", function(){
  let value1224 = $input101.value;
  console.log(value1224)
})

$nav.appendChild($btn1)
$nav.appendChild($div101)
$nav.appendChild($form101)


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=da72231493e4e4a979f477e8cfd66379&language=en-US&page=1`)
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) {
      let post100 = posts;
      let data100 = post100.total_pages ;



      let cont = document.getElementById('grid-container1224')

      for (let indexs1224 = 1; indexs1224 < 5; indexs1224++) {
        

        let post2 = []
      // let img = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=da72231493e4e4a979f477e8cfd66379&language=en-US&page=${indexs1224}`)
          .then(function(response) {
          //   console.log(response);
            return response.json();
          })
          .then(function(posts) {
            post2.push(posts) 

            let data2 = post2[0].results
            data2.forEach(function(items, index){


              
              let $div = document.createElement("div")
              $div.setAttribute("class","movies")

              let $a3 = document.createElement("a")
              $a3.setAttribute("id",`movie_${data2[index].id}`)
              $a3.setAttribute("href",`https://www.themoviedb.org/movie/${data2[index].id}`)
              // $a3.setAttribute("title",`${data2[index].overview}`)
              // $a3.setAttribute("alt",`${data2[index].title}`)

              let $h4 = document.createElement("p")
              $h4.setAttribute("alt",`${data2[index].title}`)
              if(data2[index].title.length >= 15){
                $h4.innerHTML= `Watch ${data2[index].title.slice(0, 15)}...  movie online`
              }else{
                $h4.innerHTML = `Watch ${data2[index].title} movie online`
              }
              $h4.style.cssText = `display: block;overflow: hidden;word-wrap: break-word;white-space: normal;color: #4d4d4d;width:185px; height:22`


              let $img = document.createElement("img")
              $img.setAttribute("src",`https://image.tmdb.org/t/p/w185_and_h278_bestv2${data2[index].poster_path}`)
              $img.setAttribute("title",`${data2[index].title}`)
              $img.style.cssText = "width:185px; height:278px;"

              $a3.appendChild($h4);
              $a3.appendChild($img);


              $div.appendChild($a3);
              cont.appendChild($div);
              cont.style.cssText = ` display: grid;grid-template-columns: auto auto auto auto auto;grid-gap: 10px;background-color: lightgray;padding: 10px;z-index: 1;`
              // $div.style.cssText = `"width:185px; height:298px; background-color: green; border: 1px solid greenyellow;`

            })

          })
        
        }

})
