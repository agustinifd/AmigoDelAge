

fetch('listaEcomerse.json')
.then(response => response.json())
.then(data => b1(data));

function b1(array)
{

    for (let i = 0; i < array.length; i++) {
                let elementoX = array[i];       
    document.querySelector("#datosEcomerse").innerHTML += `<div class="carousel-item" data-bs-interval="2000">
    <img src="${elementoX.imgsrc}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
        
        <p>${elementoX.comentario}</p>
      </div>
  </div>
  `;
    }
}