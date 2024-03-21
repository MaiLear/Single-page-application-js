import {Menu} from './Menu.js'

export function Header(){
    const $header = document.createElement('header'),
    $h1 = document.createElement('h1');
    $h1.textContent = 'Menu principal'
    $header.classList.add('header');
    $header.appendChild($h1);
    $header.appendChild(Menu());

    return $header;

}