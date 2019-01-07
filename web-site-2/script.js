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

  
let post = []
let sum = 200 ;


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=da72231493e4e4a979f477e8cfd66379&language=en-US&page=1`)
    .then(function(response) {
    //   console.log(response);
      return response.json();
    })
    .then(function(posts) {
      let post100 = posts;
      let data100 = post100.total_pages + 1;



      let cont = document.getElementById('grid-container')


      for (let indexs = 1; indexs < 2; indexs++) {//data100
          

        let post2 = []
        // let img = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=da72231493e4e4a979f477e8cfd66379&language=en-US&page=${indexs}`)
          .then(function(response) {
          //   console.log(response);
            return response.json();
          })
          .then(function(posts) {
            post.push(posts) 
            let data = post[0].results
            console.log(post)
            data.forEach(function(items, index){
                  
              let cont = document.getElementById('grid-container')
              let $divMain100 = document.createElement("div")
              $divMain100.setAttribute("class","main")
              let $divMain = document.createElement("div")
              let $divMain1 = document.createElement("div")
              $divMain1.setAttribute("class","flex")
              let $divMain2 = document.createElement("div")

              let $div1 = document.createElement("div")
              let $div2 = document.createElement("div")
              let $div3 = document.createElement("div")
              let $div4 = document.createElement("div")


              let $a3 = document.createElement("a")
              $a3.setAttribute("id",`movie_${data[index].id}`)
              $a3.setAttribute("href",`https://www.themoviedb.org/movie/${data[index].id}`)
              $a3.setAttribute("title",`${data[index].title}`)
              $a3.setAttribute("alt",`${data[index].title}`)
              let $img = document.createElement("img")
              $img.setAttribute("src",`https://image.tmdb.org/t/p/w185_and_h278_bestv2${data[index].poster_path}`)
              $img.setAttribute("title",`${data[index].title}`)
              $img.style.cssText = "width:185px; height:305px;"
              $a3.appendChild($img);

              // let vote = data[index].vote_average * 100;
              // $div3.style.cssText = `width: 32px;height: 32px;padding: 3px;border-radius: 50%;background-color: #081c22;`
              // $div4.setAttribute("data-percent",vote)
              // $div4.setAttribute("data-track-color","#204529")
              // $div4.setAttribute("data-bar-color","#21d07a")
              // let $canvas = document.createElement("canvas")
              // $canvas.setAttribute("height","32px")
              // $canvas.setAttribute("width","32px")
              // $canvas.style.cssText = "background-color: transparent;position: absolute;top: 0; left: 0;display: inline-block; vertical-align: baseline;"


              let $a1 = document.createElement("a")
              $a1.setAttribute("id",`movie_${data[index].id}`)
              $a1.setAttribute("href",`https://www.themoviedb.org/movie/${data[index].id}`)
              $a1.setAttribute("title",`${data[index].title}`)
              $a1.setAttribute("alt",`${data[index].title}`)
              $a1.innerHTML = `${data[index].title}`
              $a1.style.cssText = "width: 100%;display: block;font-weight: 600;font-size: 1.1em;line-height: 1.1em;text-decoration: solid;"
              let $br = document.createElement("br")
              let $span = document.createElement("span")
              $span.innerHTML= `${data[index].release_date}`

              let $p1 = document.createElement("p")
              $p1.setAttribute("class","overview")
              if(data[index].overview.length >= 310){
                $p1.innerHTML= `${data[index].overview.slice(0, 295)}...`
              }else{
                $p1.innerHTML= `${data[index].overview}`
              }
              
              $p1.style.cssText = "display: block;overflow: hidden;margin-block-start: 1em;margin-block-end: 1em;margin-inline-start: 0px;margin-inline-end: 0px;word-wrap: break-word;white-space: normal;color: #4d4d4d;font-size: 0.9em;line-height: 1.2em;margin-top: 30px;"//width:285px; height:170px;border: 1px solid black;

              let $p2 = document.createElement("p")
              let $a2 = document.createElement("a")
              $a2.setAttribute("id",`movie_${data[index].id}`)
              $a2.setAttribute("href",`https://www.themoviedb.org/movie/${data[index].id}`)
              $a2.setAttribute("title",`${data[index].title}`)
              $a2.setAttribute("alt",`${data[index].title}`)
              $a2.innerHTML= "More Info"
              $p2.appendChild($a2);

              $div1.appendChild($a3);
              $div2.appendChild($a1);
              $div2.appendChild($br);
              $div2.appendChild($span);
              $divMain1.appendChild($div1)
              $divMain2.appendChild($div2);
              $divMain2.appendChild($p1);
              $divMain2.appendChild($p2);
              $divMain.appendChild($divMain1)
              $divMain.appendChild($divMain2)

              $divMain100.appendChild($divMain)
              $div1.style.cssText = "float: left;"
              $divMain2.style.cssText = `width: 298px;height: 305px;position: relative;padding: 10px 16px 16px 16px;overflow: hidden;background-color: white;`
              $a1.style.cssText = "text-decoration: none;top: 0;"
              $p2.style.cssText = "bottom: 0;left: 0;border-top: 1px solid #e3e3e3;position: absolute;bottom: 0;left: 0;padding: 16px;font-size: 1em;display: block;margin-block-start: 1em;margin-block-end: 1em;margin-inline-start: 0px;margin-inline-end: 0px;text-decoration: none;"
              cont.appendChild($divMain100)
              cont.style.cssText = ` display: grid;grid-template-columns: auto auto;grid-gap: 10px;background-color: lightgray;padding: 10px;z-index: 1;`
            })
          })
        }

      })
// width: 32px;height: 32px;padding: 3px;border-radius: 50%;background-color: #081c22;

      





