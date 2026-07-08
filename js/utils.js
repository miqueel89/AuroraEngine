export function pad(number){

    return String(number).padStart(2,"0");

}

export function qs(selector){

    return document.querySelector(selector);

}

export function qsa(selector){

    return document.querySelectorAll(selector);

}