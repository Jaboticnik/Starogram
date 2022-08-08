import podatki from "./podatki.js";
import {Koncnica, Pridobi, Shrani, GumbDejavno} from "./Ureditev.js";
import "./nacin.js"

const Objave = document.getElementById("koreninaobjav")

let Vsecki = {...Pridobi()}

const Posodobi = () => {
    for (let i = 0; i < podatki.length; i++) {
        const Objava = document.createElement("div")
        Objava.classList.add("objava")
        Objava.id = "Objava-" + i

        Vsecki[podatki[i].id] ? console.log("Pridobljenipodatki iz localstorage") : Vsecki = {
            ...Vsecki,
            [podatki[i].id]: `${podatki[i].vsecki} všeč${Koncnica(podatki[i].vsecki)}`
        }
        Shrani(Vsecki)

        Objava.innerHTML =
            `<header class="glava-objave">
                    <img src="${podatki[i].slikaracuna}" alt="${podatki[i].ime}">
                    <div class="podatki-racuna">
                        <h2 class="ime-racuna">${podatki[i].ime}</h2>
                        <p class="kraj-objave">${podatki[i].kraj}</p>
                    </div>
                </header>
                <img class="objava-slika" id="Objava-slika-${i}" src="${podatki[i].objava}" alt="Objava ${podatki[i].ime}a">
                <div class="moznosti-dejanj">
                    <button id="Gumb-vsecek-${i}" class="gumb-dejanj gumb-vsecek ${GumbDejavno(i, Vsecki)}"></button>
                    <button class="gumb-dejanj gumb-opomba"></button>
                    <button class="gumb-dejanj gumb-deli"></button>
                </div>
                <p class="stevilo-vseckov">${Vsecki[podatki[i].id]}</p>
                <p class="opomba">${podatki[i].uporabniskoime} <span>${podatki[i].opomba}</span></p>
`
        Objave.append(Objava)
        document.getElementById(`Gumb-vsecek-${i}`).addEventListener('click', () => Dodajvsecek(i))
        document.getElementById(`Objava-slika-${i}`).addEventListener('dblclick', () => Dodajvsecek(i))
    }
}


function Dodajvsecek(i) {
    const VseckiGumb = document.querySelector(`#${`Objava-${i}`} .stevilo-vseckov`)
    const VseckiGumb2 = document.querySelector(`#${`Objava-${i}`} .gumb-vsecek`)
    if (`${podatki[i].vsecki} všeč${Koncnica(podatki[i].vsecki)}` === Vsecki[podatki[i].id]) {
        Vsecki = {
            ...Vsecki,
            [podatki[i].id] : `${podatki[i].vsecki + 1} všeč${Koncnica(podatki[i].vsecki + 1)}`
        }
        VseckiGumb.innerHTML = Vsecki[podatki[i].id]
        VseckiGumb2.classList.add("gumb-vsecek-dejavno")
        Shrani(Vsecki)
    }else {
        Vsecki = {
            ...Vsecki,
            [podatki[i].id] : `${podatki[i].vsecki} všeč${Koncnica(podatki[i].vsecki)}`
        }
        VseckiGumb.innerHTML = Vsecki[podatki[i].id]
        VseckiGumb2.classList.remove("gumb-vsecek-dejavno")
        Shrani(Vsecki)
    }
}

Posodobi()


