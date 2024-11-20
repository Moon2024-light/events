const showContent =  event => console.log(event.target.textContent)

document.querySelector(".porcupine").oneclick = showContent;

document.querySelector(".panther").onclick = (event) => console.log(event.target.targetName)

//window.onclick = event => console.log(event.target)

document.querySelector(".penguin")= (event) => console.log(event.target.textContent.toupperCase)

//window.onclick = event => console.log(event.target.textContent.toupperCase())

const pelicaneLove = () => {

    for (let i = 0; i < 3; i++){
        console.log("I love pelicans!")
    }
}
document.querySelector(".pelican").addEventListener("click", pelicaneLove)

const birdlove = animal => console.log(`${animal} is a pretty boy`);
document.querySelector(".parrot").addEventListener("click",event => birdlove(event.target.targetName));
document.querySelector(".peacock").addEventListener("click",event => birdlove(event.target.targetName));

const notAnteater = () => console.log("I am Not an anteater")
const notArmadillo = () => console.log("I am Not an armadillo")

document.querySelector(".parrot").addEventListener("click", notAnteater);
document.querySelector(".parrot").addEventListener("click", notArmadillo);

//let x = document.querySelectorAll(".tab")
//console.log(x)
//let tabs = Array.from(x);
//tabs.forEach(item => item.addEventListener("click",() => alert (item.textContent)))

const bestAnimal = animal => {console.log(`${animal} is the best!`);}

let animalTabs = Array.from(document.querySelectorAll(".tab"));

animalTabs.forEach(tab => tab)

//console.log(animalTabs)
document.querySelector("footer").addEventListener("click",() => console.log("paragraph"),truekey)

console.log("aye")
 
const myFunction = (event) => {console.log(event.target)}
document.querySelector("h1").onclick = myFunction;
const showcontent = event => console.log(event.target.textcontent);
 
 
document.querySelector(".porcupine").onclick = showcontent;
 
document.querySelector(".panther").onclick = (event) => console.log(event.target.tagname)
 
document.querySelector(".penguin").onclick = (event) => console.log (event.target.textContent.toUppercase())
 
window.onclick = event =>console.log(event.target.textContent.toUppercase())
 
document.querySelector(".header").addEventListener("click", () => sayHi("ranj"));
 
const pelicanLove = () => {
    for (let i = 0; i < 3; i++) {
        console.log("I love pelicans!")
    }
}
 
document.querySelector(".pelican").addEventListener("click", pelicanLove)


 let searchInput = document.querySelector("#search");
 document.querySelector("#search").addEventListener("input", () => console.log(document.querySelector(searchInput.value)))

 const findTab = () => {
    animalTabs.forEach(tab => {
       if (tab.textContent.toLowerCase().contains(searchInput.value)){
        tab.classList.add (`active`)

    } else {
        tab.classList.remove(`active`)

    }
})
 }
 searchInput.addEventListener("change",findTab)

 



 