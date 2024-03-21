import {Loader} from './components/Loader.js';
import {Header} from './components/Header.js';
import {Router} from './Router.js';



export default function App(){

    const $root = document.getElementById('root');
    $root.innerHTML = '';
    $root.appendChild(Header());
    $root.appendChild(Loader());
    Router($root);
}