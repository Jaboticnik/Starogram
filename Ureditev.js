import podatki from "./podatki.js";

export function Koncnica(Stevilo) {
    if (Stevilo === 1) {
        return "ek"
    }else if (Stevilo === 2) {
        return "ka"
    }else if (Stevilo === 3 || Stevilo === 4) {
        return "ki"
    }else if (Stevilo >= 5 || Stevilo === 0) {
        return "kov"
    }
}

export function Shrani(Vsecki) {
    localStorage.setItem("hramba", JSON.stringify(Vsecki))
}

export function Pridobi() {
    if (localStorage.getItem("hramba")) {
        return JSON.parse(localStorage.getItem("hramba"))
    }else {
        return {}
    }
}

export function GumbDejavno(i, Vsecki) {
    if (`${podatki[i].vsecki + 1} všeč${Koncnica(podatki[i].vsecki + 1)}` === Vsecki[podatki[i].id]) {
        return "gumb-vsecek-dejavno"
    }
}
