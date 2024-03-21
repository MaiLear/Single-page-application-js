export function ContentPrincipal(){
    const $div = document.createElement('div');
    $div.classList.add('container');
    $div.innerHTML = `
    <div class='container-content'>
    <img src="https://cdn.pixabay.com/photo/2024/01/15/04/30/woman-8509281_1280.jpg" alt='Mujer'>
    <div class='container-content-text'>
    <h3>Todos somos tienda Juan</h3>
    <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
    </div>
    `;
    return $div;
}