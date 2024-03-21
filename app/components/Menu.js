export function Menu(){
    const $nav = document.createElement('nav'),
    $ul = document.createElement('ul');
    $ul.innerHTML = `
    <li><a href='#/'>Home</a></li>
    <li><a href='#/tienda'>Tienda</a></li>
    <li><a href='#/nosotros'>Sobre nosotros</a></li>
    `;
    $nav.appendChild($ul);

    return $nav;
}