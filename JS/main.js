new WOW().init();
let searchByWord= document.getElementById("searchByWord");
searchByWord.addEventListener("keyup",function() {
    getSpecificMovie(searchByWord.value)
})
async function getSpecificMovie(MovieName) {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d4aa3ca194c08dc7be046faeb67aa841&query=${MovieName}`);
    let moviesData = await response.json();
    displayMovies(moviesData.results)
}
let links = document.querySelectorAll(".nav-link a .linkData");
for (let i = 0; i < links.length; i++)
{
    links[i].addEventListener("click",function(e){
    let currentCatagory = e.target.innerHTML;
    getMovies(currentCatagory)
  })  
}
async function getMovies(currentCatagory) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${currentCatagory}?api_key=d4aa3ca194c08dc7be046faeb67aa841&language=en-US&page=1`);
    let moviesData = await response.json();
    displayMovies(moviesData.results);  
}
getMovies("now_playing")
let trending = document.getElementById("trending");
    trending.addEventListener("click",function(e){
    let currenttrending = e.target.innerHTML;
    getTrending(currenttrending)  
})  
async function getTrending(currenttrending) {
      let response = await fetch(`https://api.themoviedb.org/3/${currenttrending}/all/day?api_key=d4aa3ca194c08dc7be046faeb67aa841`);
      let moviesData = await response.json();
      displayMovies(moviesData.results);  
}
let searchByNumber= document.getElementById("searchByNumber");
searchByNumber.addEventListener("keyup",function() {
    getSimilarMovie(searchByNumber.value)
})
async function getSimilarMovie(intger) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${intger}/similar?api_key=d4aa3ca194c08dc7be046faeb67aa841&language=en-US&page=1`);
    let moviesData = await response.json();
    displayMovies(moviesData.results)
}
function displayMovies(data){
    let container = "";
    for (let i = 0; i < data.length; i++) {
        container +=`
        <div class="col-md-6 col-lg-4 wow bounceInUp">
             <div class="item overflow-hidden position-relative">
                  <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="Movie Poster">
                  <div class="layer position-absolute d-flex justify-content-center align-items-center bg-white bg-opacity-75 p-3">
                       <div class="movie-info text-center">
                            <h2 class="mb-2">${data[i].original_title}</h2>
                            <p>${data[i].overview}</p>
                            <span id="voteRate" class="rate">${data[i].vote_average}</span>
                            <span>${data[i].release_date}</span>
                       </div>
                  </div>
             </div>   
        </div>`
    }
    document.getElementById("containerBox").innerHTML = container;
}

/* ------------------------------------- Scroll -------------------------------------------------------*/

let body = document.querySelector('body');
let sidebar = body.querySelector('nav');
let toggle = body.querySelector(".toggle");
toggle.addEventListener("click" , () => {
    sidebar.classList.toggle("close"); 
})
$(window).scroll(function()
{
    if($(window).scrollTop() > 2500){
        $("#scrollBtn").fadeIn(2000);
    }
    else{
        $("#scrollBtn").fadeOut(500);
    }
})
$("#scrollBtn").click(function(){
    $("body,html").animate({scrollTop:0},1000)
})  

/* ----------------------------------------- Validation ---------------------------------------------------- */

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let ageInput = document.getElementById("ageInput");
let passwordInput = document.getElementById("passwordInput");
let checkPasswordInput= document.getElementById("checkPasswordInput");


    nameInput.addEventListener("keyup",() =>{
        let ErrorMesgName = document.getElementById("ErrorMesgName");
        let nameRejax = /\w{3,}/;
        if( nameRejax.test(nameInput.value))
        {
            nameInput.classList.add("is-valid")
            nameInput.classList.remove("is-invalid")
            ErrorMesgName.classList.add("d-none")
        }
        else if(nameInput.value == "")
        {
            nameInput.classList.remove("is-invalid")
            nameInput.classList.remove("is-valid")
            ErrorMesgName.classList.add("d-none")
        }
        else{
            nameInput.classList.remove("is-valid")
            nameInput.classList.add("is-invalid")
            ErrorMesgName.classList.remove("d-none")
        }
    })
   
    emailInput.addEventListener("keyup", () => {
        let ErrorMesgEmail = document.getElementById("ErrorMesgEmail");
        let emailRejax = /\w{3,}@\w+\.\w+/;
        if( emailRejax.test(emailInput.value))
        {
            emailInput.classList.add("is-valid")
            emailInput.classList.remove("is-invalid")
            ErrorMesgEmail.classList.add("d-none")
        }
        else if(emailInput.value == "")
        {
            emailInput.classList.remove("is-invalid")
            emailInput.classList.remove("is-valid")
            ErrorMesgEmail.classList.add("d-none")
        }
        else{
            emailInput.classList.remove("is-valid")
            emailInput.classList.add("is-invalid")
            ErrorMesgEmail.classList.remove("d-none")
        }
    })

    phoneInput.addEventListener("keyup", () => {
        let ErrorMesgPhone = document.getElementById("ErrorMesgPhone");
        let phoneRejax = /^(002 ?)?01[0125]\d{8}$/;
        if( phoneRejax.test(phoneInput.value))
        {
            phoneInput.classList.add("is-valid")
            phoneInput.classList.remove("is-invalid")
            ErrorMesgPhone.classList.add("d-none")
        }
        else if(nameInput.value == "")
        {
            phoneInput.classList.remove("is-invalid")
            phoneInput.classList.remove("is-valid")
            ErrorMesgPhone.classList.add("d-none")
        }
        else{
            phoneInput.classList.remove("is-valid")
            phoneInput.classList.add("is-invalid")
            ErrorMesgPhone.classList.remove("d-none")
        }
    })

    ageInput.addEventListener("keyup", () => {
        let ErrorMesgAge= document.getElementById("ErrorMesgAge");
        let ageRejax = /^[1-9][0-9]$/;
        if( ageRejax.test(ageInput.value))
        {
            ageInput.classList.add("is-valid")
            ageInput.classList.remove("is-invalid")
            ErrorMesgAge.classList.add("d-none")
        }
        else if(ageInput.value == "")
        {
            ageInput.classList.remove("is-invalid")
            ageInput.classList.remove("is-valid")
            ErrorMesgAge.classList.add("d-none")
        }
        else{
            ageInput.classList.remove("is-valid")
            ageInput.classList.add("is-invalid")
            ErrorMesgAge.classList.remove("d-none")
        }
    })

    passwordInput.addEventListener("keyup", () => {
        let ErrorMesgPassword= document.getElementById("ErrorMesgPassword");
        let passwRejax = /[a-zA-Z0-9_]{8,}/;
        if( passwRejax.test(passwordInput.value))
        {
            passwordInput.classList.add("is-valid")
            passwordInput.classList.remove("is-invalid")
            ErrorMesgPassword.classList.add("d-none")
        }
        else if(passwordInput.value == "")
        {
            passwordInput.classList.remove("is-invalid")
            passwordInput.classList.remove("is-valid")
            ErrorMesgPassword.classList.add("d-none")
        }
        else{
            passwordInput.classList.remove("is-valid");
            passwordInput.classList.add("is-invalid");
            ErrorMesgPassword.classList.remove("d-none");
        }
    })  
    checkPasswordInput.addEventListener("keyup",(e) => {
        check(e.target.value)
    })
    function check(checkPassw){
        let matchedMesgPassword = document.getElementById("matchedMesgPassword");
        let notMatchedMesgPassword= document.getElementById("notMatchedMesgPassword");
        if(passwordInput.value == checkPassw) 
        {
            checkPasswordInput.classList.add("is-valid");
            checkPasswordInput.classList.remove("is-invalid");
            matchedMesgPassword.classList.remove("d-none");
            notMatchedMesgPassword.classList.add("d-none");
        }
        else if(checkPasswordInput.value == "")
        {
            checkPasswordInput.classList.remove("is-invalid");
            checkPasswordInput.classList.remove("is-valid");
            notMatchedMesgPassword.classList.add("d-none");
            matchedMesgPassword.classList.add("d-none");
        }
        else {
            checkPasswordInput.classList.remove("is-valid");
            checkPasswordInput.classList.add("is-invalid");
            matchedMesgPassword.classList.add("d-none");
            notMatchedMesgPassword.classList.remove("d-none");
        }
    }





















