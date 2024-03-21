import { ContentPrincipal } from "./components/ContentPrincipal.js";
import { ajax } from "./helpers/ajax.js";
import { Cards } from "./components/Cards.js";


export async function Router(container) {

  let { hash} = location;

  if (!hash || hash == "#/") {
    container.appendChild(ContentPrincipal());
  } else if (hash == "#/tienda") {
    let html = "",
      $section = document.createElement('section');
      $section.id = 'posts';  
      await ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      success: (data) => {
        console.log(data);
        data.forEach((el) => {
          html += Cards(el);
        });
        $section.innerHTML = html;
        container.appendChild($section);

      },
      error: (err) => {
        let message = err.statusText || "Ocurrio un error";
        container.insertAdjacentHTML(
          "beforebegin",
          `
                  <div class="error">
                  <p><b>Código ${err.status} ${message}</b></p>
                  </div>`
        );
      },
    });
   
  }

  else if(hash == '#/nosotros'){
    let $p = document.createElement('p');
    $p.classList.add('text-center');
    $p.innerHTML = '<h1>Bienvenido esta es la seccion sobre nosotros</h1>';
    container.appendChild($p);
  }

  document.querySelector('.loader').style.display = 'none';
}
