let contador = 0;
let contadorMoto= 0
let contadorCarro=0
let stateMoto = false;
let stateCarro = false;
let stateCelular = true;
let filterValidation = false;
let filterValidationMotos = false;
let filterValidationCarros = false;
let filtradoMarcasMoto = [];
let filtradoMarcas = [];
let filtradoMarcasCarro = [];
let filtradoRatingCelular = false;
let filtradoRatingMotos = [];
let filtradoRatingMotosValidation = false;
let filtradoRatingCarros = [];
let filtradoRatingCarrosValidation = false;
let filtradoPrecio = [];
let filtradoPrecioValidation = false;
let filtradoPrecioMoto = [];
let filtradoPrecioMotoValidation = false;
let filtradoPrecioCarro = [];
let filtradoPrecioCarroValidation = false;
let filtradoMemoriaProduct = [];
let filtradoMemoriaValidation = false;
let camaraFilter = [];
let camaraFilterValidation = false;
let validationEspecs = false;
let filtradoGeneralValidation = false;
let filtradoGeneral = [];
let precioGeneral = 0;
let searchValidation=false
let memoria32 = document.getElementById("memory32");
let memoria64 = document.getElementById("memory64");
let memoria128 = document.getElementById("memory128");
let cam50 = document.getElementById("cam50");
let cam32 = document.getElementById("cam32");
let cam64 = document.getElementById("cam64");
let validationMem32 = false
let validationMem64 = false
let validationMem128 = false
let validationcam32= false
let validationcam64= false
let validationcam50= false
let validationEspecsMoto= false
let validationEspecsCarro= false
let filtradoGeneralMotosValidation= false
let filtradoGeneralMotos=[];
let precioGeneralMotos= 0
let filtradoGeneralCarrosValidation= false
let filtradoGeneralCarros= [];
let precioGeneralCarros=0
let celulares = [
  {
    Nombre: "MOTOROLA G31",
    Color: "Negro",
    Almacenamiento: 64,
    Precio: 4499,
    Rating: 5,
    image: "./Images/A12.jpg",
    descuento: 4100,
    id: 1,
    marca: "MOTOROLA",
    camara: 32,
    image_front: "./Images/MotorolaBack.png",
    lateral_cel: "./Images/motorolaLateral.png"
  },
  {
    Nombre: "SAMSUNG A32",
    Color: "Azul",
    Almacenamiento: 128,
    Precio: 3499,
    Rating: 3,
    image: "./Images/A32.jpg",
    descuento: 4100,
    id: "2",
    marca: "SAMSUNG",
    camara: 64,
    image_front: "./Images/SAMSUNG-A32-b.jpg",
    lateral_cel: "./Images/SAMSUNG-A32-lateral.jpg",
  },
  {
    Nombre: "XIAOMI NOTE 10",
    Color: "gris",
    Almacenamiento: 32,
    Precio: 5000,
    Rating: 4,
    image: "./Images/A52.jpg",
    descuento: 4100,
    id: 3,
    marca: "XIAOMI",
    camara: 50,
    image_front: "./Images/backXiaomi.jpg",
    lateral_cel: "./Images/lateralXiaomi.jpeg"
  },
];
let motos = [
  {
    Nombre: "Harley-Davidson Muscle".toUpperCase(),
    Color: "Negra",
    Precio: 15920,
    Rating: 4,
    image: "./Images/harley.png",
    descuento: 4100,
    marca: "Harley",
    id: 1,
    image_front: "./Images/HarleyFront.jpg",
    lateral_cel: "./Images/HarleyBack.jpg",
    Potencia: 9000
  },
  {
    Nombre: "Bajad Boxer CT 100".toUpperCase(),
    Color: "Roja y Negra",
    Precio: 12800,
    Rating: 5,
    image: "./Images/bajad.png",
    descuento: 4100,
    marca: "Bajad",
    id: 2,
    image_front: "./Images/bajadFront.jpg",
    lateral_cel: "./Images/bajadBack.jpeg",
    Potencia: 7000
  },
  {
    Nombre: "Suzuki GN 125".toUpperCase(),
    Color: "Azul",
    Precio: 12700,
    Rating: 3,
    image: "./Images/suzuki.jpg",
    descuento: 4100,
    marca: "Suzuki",
    id: 3,
    image_front: "./Images/suzukiFront.png",
    lateral_cel: "./Images/suzukiBack.jpg",
    Potencia: 5000
  },
];
let carros = [
  {
    Nombre: "Jeep Wrangler".toUpperCase(),
    Color: "Gris",
    Precio: 3730,
    Rating: 5,
    image: "./Images/jeep.jpg",
    marca: "Jeep",
    image_front: "./Images/jeepLateral.jpg",
    lateral_cel: "./Images/jeepBack.png",
    id: 1
  },
  {
    Nombre: "Chevrolet Camaro".toUpperCase(),
    Color: "Blanco",
    Precio: 2530,
    Rating: 4,
    image: "./Images/Ford-Mustang-7.jpg",
    marca: "Chevrolet",
    image_front: "./Images/LateralCamaro.jpg",
    lateral_cel: "./Images/camaroAtras.png",
    id: 2,
  },
  {
    Nombre: "Ford Mustang".toUpperCase(),
    Color: "Vinotinto",
    Precio: 7260,
    Rating: 3,
    image: "./Images/camaro.jpg",
    marca: "Ford",
    image_front: "./Images/fordLateral.jpg",
    lateral_cel: "./Images/fordAtras.jpg",
    id: 3,
  },
];
let contentMoto = document.getElementById("content-motos");
let contentCarro = document.getElementById("content-carros");
let contentCelular = document.getElementById("content-celulares");
let sectionBuy = document.getElementById("section-buy");
let seccionBuyMoto= document.getElementById("section-buyMotos");
let seccionBuyCarro = document.getElementById("section-buyCarros");
function calificar(item) {
  contador = item.id[0];
  let boton = document.getElementById("btn-buscar");
  let nombre = item.id.substring(1);
  for (let i = 0; i < 5; i++) {
    if (i < contador) {
      document.getElementById(i + 1 + nombre).style.color = "orange";
    } else {
      document.getElementById(i + 1 + nombre).style.color = "black";
    }
  }
  boton.addEventListener("click", rating());
}
function calificarMoto(item) {
  contadorMoto = item.id[0];
  let nombre = item.id.substring(1);
  for (let i = 0; i < 5; i++) {
    if (i < contadorMoto) {
      document.getElementById(i + 1 + nombre).style.color = "orange";
    } else {
      document.getElementById(i + 1 + nombre).style.color = "black";
    }
  }
 ratingMotos();
}
function calificarCarros(item) {
  contadorCarro = item.id[0];
  let nombre = item.id.substring(1);
  for (let i = 0; i < 5; i++) {
    if (i < contadorCarro) {
      document.getElementById(i + 1 + nombre).style.color = "orange";
    } else {
      document.getElementById(i + 1 + nombre).style.color = "black";
    }
  }
  ratingCarros();
}
function events() {
  
  dataHtmlCelulares();
  dataHtmlCarros();
  dataHtmlMotos();
  states();
  checks();
  checksMotos();
  checkCarros();
  memoria();
  camara();
}
function panel() {
  let acc = document.getElementsByClassName("accordion");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    };
  }
}
function states() {
  let celularSection = document.getElementById("celular");
  let motoSection = document.getElementById("moto");
  let carroSection = document.getElementById("carros");

  celularSection.addEventListener("click", sectionStateCelular);
  motoSection.addEventListener("click", sectionStateMoto);
  carroSection.addEventListener("click", sectionStateCarro);
}
//Secciones de productos
function sectionStateMoto() {
  stateMoto = true;
  stateCelular = false;
  stateCarro = false;
  if (stateMoto == true && stateCarro == false && stateCelular == false) {
    contentMoto.style = "display:block";
    contentCarro.style = "display:none";
    contentCelular.style = "display:none";
    sectionBuy.style = "display:none";
    seccionBuyMoto.style = "display:none";
    seccionBuyCarro.style="display:none"
  }
  states();
}
function sectionStateCelular() {
  let stateMoto = false;
  let stateCarro = false;
  let stateCelular = true;
  if (stateCelular == true && stateMoto == false && stateCarro == false) {
    contentMoto.style = "display:none";
    contentCarro.style = "display:none";
    contentCelular.style = "display:block";
    sectionBuy.style.display = "none";
    seccionBuyMoto.style = "display:none";
    seccionBuyCarro.style="display:none"
  }
  states();
}
function sectionStateCarro() {
  let stateMoto = false;
  let stateCarro = true;
  let stateCelular = false;

  if (stateCarro == true && stateCelular == false && stateMoto == false) {
    contentMoto.style = "display:none";
    contentCarro.style = "display:block";
    contentCelular.style = "display:none";
    sectionBuy.style.display = "none";
    seccionBuyMoto.style = "display:none";
    seccionBuyCarro.style="display:none"
   
  }
  states();
}
//Data Html productos
function dataHtmlCelulares() {
  let filtrado;
  let divProductos = document.getElementById("productos-container");
  divProductos.innerHTML = "";
 debugger
  if (filtradoGeneralValidation == true) {
    errorMessage();
    filtrado = filtradoGeneral;
  } else if (filterValidation == true) {
    filtrado = filtradoMarcas;
  } else if (filtradoRatingCelular == true) {
    filtrado = filtradoRating;
  } else if (filtradoPrecioValidation == true) {
    filtrado = filtradoPrecio;
  } else if (filtradoMemoriaValidation == true) {
    filtrado = filtradoMemoriaProduct;
  } else if (camaraFilterValidation == true) {
    filtrado = camaraFilter;
  } else if (celulares !== null) {
    filtrado = celulares;
  }
  filtrado.forEach((element) => {
  
    let producto = document.createElement("div");
    producto.className = "producto-numero-1 border ";

    let ImagenProducto = document.createElement("div");
    ImagenProducto.className = "img-producto";
    ImagenProducto.setAttribute("id", `ProductoNumerobck${element.id}`);
    ImagenProducto.addEventListener( "click",()=>{
        productsEspecs(element.id)
    });

    let ProductInfo = document.createElement("div");
    ProductInfo.className =
      "producto-info d-flex justify-content-between border-top";

    let divBackground = document.createElement("div");
    divBackground.className = "img-producto-background";
    divBackground.style.backgroundImage = `url(${element.image})`;
    divBackground.style.cursor = "pointer";

    let contenidoProducto = document.createElement("div");
    contenidoProducto.className = "content-producto";

    let NameProduct = document.createElement("a");
    NameProduct.textContent = element.Nombre;
    NameProduct.style.fontSize = "16px";
    NameProduct.style.textDecoration="none"
    NameProduct.addEventListener("click",()=>{
      productsEspecs(element.id)
    })
    NameProduct.style.cursor="pointer"

    let ratingProducto = document.createElement("div");
    ratingProducto.className = "rating-producto";

    let descuento = document.createElement("p");
    descuento.textContent = "$120 p/semana o $520 al mes";
    descuento.className = "gray";

    let precioProducto = document.createElement("div");
    precioProducto.className = "precio-producto";

    let precio = document.createElement("h3");
    precio.textContent = `$${element.Precio}`;
    precio.className = "blue";

    let precioDescuento = document.createElement("p");
    precioDescuento.textContent = element.descuento;
    precioDescuento.className = "gray line margin";

    let button = document.createElement("button");
    button.textContent = "Lo quiero";
    button.className = "precio-button";
    button.addEventListener("click", ()=>{
      emergent(element.id)
    })
    button.style.cursor="pointer"
    button.setAttribute("id", `open${element.id}`);
    divProductos.insertAdjacentElement("beforeend", producto);
    producto.insertAdjacentElement("beforeend", ImagenProducto);
    producto.insertAdjacentElement("beforeend", ProductInfo);
    ImagenProducto.insertAdjacentElement("beforeend", divBackground);
    ProductInfo.insertAdjacentElement("beforeend", contenidoProducto);
    contenidoProducto.insertAdjacentElement("afterbegin", NameProduct);
    contenidoProducto.insertAdjacentElement("beforeend", ratingProducto);
    contenidoProducto.insertAdjacentElement("beforeend", descuento);
    ProductInfo.insertAdjacentElement("beforeend", precioProducto);
    precioProducto.insertAdjacentElement("beforeend", precio);
    precioProducto.insertAdjacentElement("beforeend", precioDescuento);
    precioProducto.insertAdjacentElement("beforeend", button);

    let grayStar = 5 - element.Rating;
    for (i = 0; i < element.Rating; i++) {
      let star = document.createElement("i");
      star.className = "fa-solid fa-star orange";
      ratingProducto.insertAdjacentElement("beforeend", star);
    }
    for (j = 0; j < grayStar; j++) {
      let star = document.createElement("i");
      star.className = "fa-regular fa-star gray-star";
      ratingProducto.insertAdjacentElement("beforeend", star);
    }

   
  });
}
function dataHtmlMotos() {
  let filtrado;
  let divProductos = document.getElementById("motos-container");
  divProductos.innerHTML = "";
  debugger
  if (filtradoGeneralMotosValidation==true) {
    errorMessageMoto();
    filtrado= filtradoGeneralMotos
  }
  else if (filterValidationMotos == true) {
    filtrado = filtradoMarcasMoto;
  } else if (filtradoRatingMotosValidation == true) {
    filtrado = filtradoRatingMotos;
  } else if (filtradoPrecioMotoValidation == true) {
    filtrado = filtradoPrecioMoto;
  } else if (celulares !== null) {
    filtrado = motos;
    filterValidationMotos = false;
  }

  filtrado.forEach((element) => {
    let producto = document.createElement("div");
    producto.className = "producto-numero-1 border moto-product";

    let ImagenProducto = document.createElement("div");
    ImagenProducto.className = "img-producto";
    ImagenProducto.addEventListener("click", ()=>{

      productsEspecsMoto(element.id)

    })
    ImagenProducto.style.cursor="pointer"

    let ProductInfo = document.createElement("div");
    ProductInfo.className =
      "producto-info d-flex justify-content-between border-top";

    let divBackground = document.createElement("div");
    divBackground.className = "img-producto-background";
    divBackground.style.backgroundImage = `url(${element.image})`;

    let contenidoProducto = document.createElement("div");
    contenidoProducto.className = "content-producto";

    let NameProduct = document.createElement("a");
    NameProduct.textContent = element.Nombre;
    NameProduct.style.cursor="pointer"
    NameProduct.addEventListener("click", ()=>{
      productsEspecsMoto(element.id);
    })

    let ratingProducto = document.createElement("div");
    ratingProducto.className = "rating-producto";

    let descuento = document.createElement("p");
    descuento.textContent = "$120 p/semana o $520 al mes";
    descuento.className = "gray";

    let precioProducto = document.createElement("div");
    precioProducto.className = "precio-producto";

    let precio = document.createElement("h3");
    precio.textContent = element.Precio;
    precio.className = "blue";

    let precioDescuento = document.createElement("p");
    precioDescuento.textContent = element.descuento;
    precioDescuento.className = "gray line margin";

    let button = document.createElement("button");
    button.textContent = "Lo quiero";
    button.className = "precio-button";
    button.addEventListener("click", ()=>{
      emergentMotos(element.id)
    })
    button.setAttribute("id", `openMoto${element.id}`);
    divProductos.insertAdjacentElement("beforeend", producto);
    producto.insertAdjacentElement("beforeend", ImagenProducto);
    producto.insertAdjacentElement("beforeend", ProductInfo);
    ImagenProducto.insertAdjacentElement("beforeend", divBackground);
    ProductInfo.insertAdjacentElement("beforeend", contenidoProducto);
    contenidoProducto.insertAdjacentElement("afterbegin", NameProduct);
    contenidoProducto.insertAdjacentElement("beforeend", ratingProducto);
    contenidoProducto.insertAdjacentElement("beforeend", descuento);
    ProductInfo.insertAdjacentElement("beforeend", precioProducto);
    precioProducto.insertAdjacentElement("beforeend", precio);
    precioProducto.insertAdjacentElement("beforeend", precioDescuento);
    precioProducto.insertAdjacentElement("beforeend", button);

    let grayStar = 5 - element.Rating;
    for (i = 0; i < element.Rating; i++) {
      let star = document.createElement("i");
      star.className = "fa-solid fa-star orange";
      ratingProducto.insertAdjacentElement("beforeend", star);
    }
    for (j = 0; j < grayStar; j++) {
      let star = document.createElement("i");
      star.className = "fa-regular fa-star gray-star";
      ratingProducto.insertAdjacentElement("beforeend", star);
    }
  });
}
function dataHtmlCarros() {
  let filtrado;
  let divProductos = document.getElementById("carros-container");
  divProductos.innerHTML = "";
  if(filtradoGeneralCarrosValidation==true){
    errorMessageCarro();
    filtrado= filtradoGeneralCarros;
  }
  else if (filterValidationCarros == true) {
    filtrado = filtradoMarcasCarro;
  } else if (filtradoRatingCarrosValidation == true) {
    filtrado = filtradoRatingCarros;
  } else if (filtradoPrecioCarroValidation == true) {
    filtrado = filtradoPrecioCarro;
  } else if (carros !== null) {
    filtrado = carros;
    filterValidationCarros = false;
  }

  filtrado.forEach((element) => {
    let producto = document.createElement("div");
    producto.className = "producto-numero-1 border carro-product";

    let ImagenProducto = document.createElement("div");
    ImagenProducto.className = "img-producto";
    ImagenProducto.addEventListener("click", ()=>{
      productsEspecsCarro(element.id);
    })
    ImagenProducto.style.cursor="pointer";
    let ProductInfo = document.createElement("div");
    ProductInfo.className =
      "producto-info d-flex justify-content-between border-top";

    let divBackground = document.createElement("div");
    divBackground.className = "img-producto-background";
    divBackground.style.backgroundImage = `url(${element.image})`;

    let contenidoProducto = document.createElement("div");
    contenidoProducto.className = "content-producto";

    let NameProduct = document.createElement("a");
    NameProduct.style.fontSize="16px"
    NameProduct.addEventListener("click", ()=>{
      productsEspecsCarro(element.id)
    })
    NameProduct.textContent = element.Nombre;

    let ratingProducto = document.createElement("div");
    ratingProducto.className = "rating-producto";

    let descuento = document.createElement("p");
    descuento.textContent = "$120 p/semana o $520 al mes";
    descuento.className = "gray";

    let precioProducto = document.createElement("div");
    precioProducto.className = "precio-producto";

    let precio = document.createElement("h3");
    precio.textContent = element.Precio;
    precio.className = "blue";

    let precioDescuento = document.createElement("p");
    precioDescuento.textContent = element.descuento;
    precioDescuento.className = "gray line margin";

    let button = document.createElement("button");
    button.textContent = "Lo quiero";
    button.className = "precio-button";
    button.addEventListener("click", ()=>{
      emergentCarro(element.id)
    })
    button.setAttribute("id", `openCarro${element.id}`);

    divProductos.insertAdjacentElement("beforeend", producto);
    producto.insertAdjacentElement("beforeend", ImagenProducto);
    producto.insertAdjacentElement("beforeend", ProductInfo);
    ImagenProducto.insertAdjacentElement("beforeend", divBackground);
    ProductInfo.insertAdjacentElement("beforeend", contenidoProducto);
    contenidoProducto.insertAdjacentElement("afterbegin", NameProduct);
    contenidoProducto.insertAdjacentElement("beforeend", ratingProducto);
    contenidoProducto.insertAdjacentElement("beforeend", descuento);
    ProductInfo.insertAdjacentElement("beforeend", precioProducto);
    precioProducto.insertAdjacentElement("beforeend", precio);
    precioProducto.insertAdjacentElement("beforeend", precioDescuento);
    precioProducto.insertAdjacentElement("beforeend", button);

    let grayStar = 5 - element.Rating;
    for (i = 0; i < element.Rating; i++) {
      let star = document.createElement("i");
      star.className = "fa-solid fa-star orange";
      ratingProducto.insertAdjacentElement("beforeend", star);
    }
    for (j = 0; j < grayStar; j++) {
      let star = document.createElement("i");
      star.className = "fa-regular fa-star gray-star";
      ratingProducto.insertAdjacentElement("beforeend", star);
    }
  });
}
// Data html especificaciones
function productsEspecs(id) {

  validationEspecs = true;
  if (validationEspecs == true) {
    contentCelular.style.display = "none";
    sectionBuy.style.display = "block";
  } else if (validationEspecs == false) {
    sectionBuy.style.display = "none";
  }
  let filtradoEspecs =celulares.filter(element=> element.id == id)
  console.log( filtradoEspecs);
  
  filtradoEspecs.forEach(element => {
    let divFront = document.getElementById("front-cel");
    divFront.style.backgroundImage=  `url(${element.image})`

    let divFrontAspect= document.getElementById("cel-aspect")
    divFrontAspect.style.backgroundImage=  `url(${element.image})`

    let divBack = document.getElementById("back-cel")
    divBack.style.backgroundImage=  `url(${element.image_front})`

    let lateral = document.getElementById("front-lateral")
    lateral.style.backgroundImage=  `url(${element. lateral_cel})`


    let divFrontLow = document.getElementById("front-cel-low");
    divFrontLow.style.backgroundImage=  `url(${element.image})`

    let divFrontAspectLow= document.getElementById("cel-aspect-low")
    divFrontAspectLow.style.backgroundImage=  `url(${element.image})`

    let divBackLow = document.getElementById("back-aspect-low")
    divBackLow.style.backgroundImage=  `url(${element.image_front})`

    let lateralLow = document.getElementById("front-lateral-low")
    lateralLow.style.backgroundImage=  `url(${element.lateral_cel})`

    let bigImage= document.getElementById("big-image");
    bigImage.style.backgroundImage=  `url(${element.image})`

    let nameCel= document.getElementById("name-especs");
    nameCel.textContent= element.Nombre+` ${element.Color}`+`+${element.camara} MP`

    let price= document.getElementById("price");
    price.textContent= element.Precio

    let ratingEspecs= document.getElementById("rating-especs");
    ratingEspecs.innerHTML=""

    let grayStar = 5 - element.Rating;
    for (i = 0; i < element.Rating; i++) {
      let star = document.createElement("i");
      star.className = "fa-solid fa-star orange";
      ratingEspecs.insertAdjacentElement("beforeend", star);
    }
    for (j = 0; j < grayStar; j++) {
      let star = document.createElement("i");
      star.className = "fa-regular fa-star gray-star";
      ratingEspecs.insertAdjacentElement("beforeend", star);
    }
  })
}
function productsEspecsMoto(id) {
 
  validationEspecsMoto= true
  if (validationEspecsMoto == true) {
    contentMoto.style.display = "none";
    seccionBuyMoto.style.display = "block";
  } else if (validationEspecs == false) {
    seccionBuyMoto.style.display = "none";
  }
  
  let filtradoEspecs =motos.filter(element=> element.id == id)
  console.log( filtradoEspecs);
  
  filtradoEspecs.forEach(element => {
    let divFront = document.getElementById("front-celMoto");
    divFront.style.backgroundImage=  `url(${element.image})`

    let divFrontAspect= document.getElementById("cel-aspectMoto")
    divFrontAspect.style.backgroundImage=  `url(${element.image})`

    let divBack = document.getElementById("back-celMoto")
    divBack.style.backgroundImage=  `url(${element.image_front})`

    let lateral = document.getElementById("front-lateralMoto")
    lateral.style.backgroundImage=  `url(${element. lateral_cel})`


    let divFrontLow = document.getElementById("front-cel-lowMoto");
    divFrontLow.style.backgroundImage=  `url(${element.image})`

    let divFrontAspectLow= document.getElementById("cel-aspect-lowMoto")
    divFrontAspectLow.style.backgroundImage=  `url(${element.image})`

    let divBackLow = document.getElementById("back-aspect-lowMoto")
    divBackLow.style.backgroundImage=  `url(${element.image_front})`

    let lateralLow = document.getElementById("front-lateral-lowMoto")
    lateralLow.style.backgroundImage=  `url(${element.lateral_cel})`

    let bigImage= document.getElementById("big-imageMoto");
    bigImage.style.backgroundImage=  `url(${element.image})`

    let nameCel= document.getElementById("name-especsMoto");
    nameCel.textContent= element.Nombre

    let price= document.getElementById("priceMoto");
    price.textContent= element.Precio

    let ratingEspecs= document.getElementById("rating-especsMoto");
    ratingEspecs.innerHTML=""

    let grayStar = 5 - element.Rating;
    for (i = 0; i < element.Rating; i++) {
      let star = document.createElement("i");
      star.className = "fa-solid fa-star orange";
      ratingEspecs.insertAdjacentElement("beforeend", star);
    }
    for (j = 0; j < grayStar; j++) {
      let star = document.createElement("i");
      star.className = "fa-regular fa-star gray-star";
      ratingEspecs.insertAdjacentElement("beforeend", star);
    }


  })
}
function productsEspecsCarro(id) {
  validationEspecsCarro= true
  if (validationEspecsCarro == true) {
    contentCarro.style.display = "none";
    seccionBuyCarro.style.display = "block";
  } else if (validationEspecs == false) {
    seccionBuyCarro.style.display = "none";
  }
  
  let filtradoEspecs =carros.filter(element=> element.id == id)
  console.log( filtradoEspecs);
  
  filtradoEspecs.forEach(element => {
    let divFront = document.getElementById("front-celCarro");
    divFront.style.backgroundImage=  `url(${element.image})`

    let divFrontAspect= document.getElementById("cel-aspectCarro")
    divFrontAspect.style.backgroundImage=  `url(${element.image})`

    let divBack = document.getElementById("back-celCarro")
    divBack.style.backgroundImage=  `url(${element.image_front})`

    let lateral = document.getElementById("front-lateralCarro")
    lateral.style.backgroundImage=  `url(${element. lateral_cel})`


    let divFrontLow = document.getElementById("front-cel-lowCarro");
    divFrontLow.style.backgroundImage=  `url(${element.image})`

    let divFrontAspectLow= document.getElementById("cel-aspect-lowCarro")
    divFrontAspectLow.style.backgroundImage=  `url(${element.image})`

    let divBackLow = document.getElementById("back-aspect-lowCarro")
    divBackLow.style.backgroundImage=  `url(${element.image_front})`

    let lateralLow = document.getElementById("front-lateral-lowCarro")
    lateralLow.style.backgroundImage=  `url(${element.lateral_cel})`

    let bigImage= document.getElementById("big-imageCarro");
    bigImage.style.backgroundImage=  `url(${element.image})`

    let nameCel= document.getElementById("name-especsCarro");
    nameCel.textContent= element.Nombre

    let price= document.getElementById("priceCarro");
    price.textContent= element.Precio

    let ratingEspecs= document.getElementById("rating-especsCarro");
    ratingEspecs.innerHTML=""

    let grayStar = 5 - element.Rating;
    for (i = 0; i < element.Rating; i++) {
      let star = document.createElement("i");
      star.className = "fa-solid fa-star orange";
      ratingEspecs.insertAdjacentElement("beforeend", star);
    }
    for (j = 0; j < grayStar; j++) {
      let star = document.createElement("i");
      star.className = "fa-regular fa-star gray-star";
      ratingEspecs.insertAdjacentElement("beforeend", star);
    }


  })
}
// Buscador
function search(e) {
 
  let buscar = document.getElementById("buscador");
  let palabras = document.querySelectorAll(".producto-numero-1 a");
  
  let padre;
  texto = buscar.value.toUpperCase().trim();

  for (k = 0; k < palabras.length; k++) {
    ti = BuscarCad(palabras[k].innerHTML, texto);
    padre = palabras[k].parentNode.parentNode.parentNode;
    if (ti == -1) {
      padre.style.display = "none";
      searchValidation=true
    } else {
      padre.style.display = "block";
      searchValidation=false
    }
  console.log(ti);
  }
buscar.addEventListener("keyup", search)
}
function search2(e) {
  let buscar = document.getElementById("buscador-moto");
  let palabras = document.querySelectorAll(".moto-product a");

  let padre;
  texto = buscar.value.toUpperCase().trim();
  for (k = 0; k < palabras.length; k++) {
    ti = BuscarCad(palabras[k].innerHTML, texto);
    padre = palabras[k].parentNode.parentNode.parentNode;
    if (ti == -1) {
      padre.style.display = "none";
      let div = document.getElementById("productos-container");
      div.innerHTML = "";
      let h1 = document.createElement("h1");
      h1.textContent = "No se encontraron productos";
      div.insertAdjacentElement("beforeend", h1);
    } else {
      padre.style.display = "block";
    }
  }
 
}
function search3(e) {
  let buscar = document.getElementById("buscador-carro");
  let palabras = document.querySelectorAll(".carro-product a");
 
  let padre;
  texto = buscar.value.toUpperCase().trim();
  for (k = 0; k < palabras.length; k++) {
    ti = BuscarCad(palabras[k].innerHTML, texto);
    padre = palabras[k].parentNode.parentNode.parentNode;
    if (ti == -1) {
      padre.style.display = "none";
    } else {
      padre.style.display = "block";
    }
  }
}
// Filtrado By check
function checks() {
  let Samsung = document.getElementById("Samsung");
  let Xiaomi = document.getElementById("Xiaomi");
  let Motorola = document.getElementById("Motorola");

  if (Samsung.checked) {
    filtradoMarcas = celulares.filter((element) => element.marca == "SAMSUNG");
    filterValidation = true;
    filtradoGeneral = filtradoMarcas;
 
  } else if (Samsung.checked == false) {
    filterValidation = false;
  }
  if (Xiaomi.checked) {
    filtradoMarcas = celulares.filter((element) => element.marca == "XIAOMI");
    filterValidation = true;
  }
  if (Motorola.checked) {
    filtradoMarcas = celulares.filter((element) => element.marca == "MOTOROLA");
    filterValidation = true;
  }
  if (Samsung.checked && Xiaomi.checked) {
    filtradoMarcasSamsung = celulares.find(
      (element) => element.marca == "SAMSUNG"
    );
    filtradoMarcasXiaomi = celulares.find(
      (element) => element.marca == "XIAOMI"
    );

    filterValidation = true;
    filtradoMarcas = [];
    filtradoMarcas.push(filtradoMarcasSamsung);
    filtradoMarcas.push(filtradoMarcasXiaomi);
 
  }
  if (Samsung.checked && Motorola.checked) {
    filtradoMarcasSamsung = celulares.find(
      (element) => element.marca == "SAMSUNG"
    );
    filtradoMarcasMotorola = celulares.find(
      (element) => element.marca == "MOTOROLA"
    );

    filterValidation = true;
    filtradoMarcas = [];
    filtradoMarcas.push(filtradoMarcasSamsung);
    filtradoMarcas.push(filtradoMarcasMotorola);
  
  }
  if (Motorola.checked && Xiaomi.checked) {
    filtradoMarcasMotorola = celulares.find(
      (element) => element.marca == "MOTOROLA"
    );
    filtradoMarcasXiaomi = celulares.find(
      (element) => element.marca == "XIAOMI"
    );

    filterValidation = true;
    filtradoMarcas = [];
    filtradoMarcas.push(filtradoMarcasMotorola);
    filtradoMarcas.push(filtradoMarcasXiaomi);
  }
  if (Motorola.checked && Xiaomi.checked && Motorola.checked) {
    filtradoMarcas = celulares;
    filterValidation = true;
  }
  dataHtmlCelulares();
  filtradoGenerales();
  Samsung.addEventListener("change", checks);
  Xiaomi.addEventListener("change", checks);
  Motorola.addEventListener("change", checks);
}
function checksMotos() {
  let Suzuki = document.getElementById("Suzuki");
  let Harley = document.getElementById("Harley");
  let Bajad = document.getElementById("Bajad");
debugger
  if (Suzuki.checked) {
    filtradoMarcasMoto = motos.filter((element) => element.marca == "Suzuki");
    filterValidationMotos = true;
  } else if (Suzuki.checked == false) {
    filterValidationMotos = false;  
  }
  if (Harley.checked) {
    filtradoMarcasMoto = motos.filter((element) => element.marca == "Harley");
    filterValidationMotos = true;
  }
  if (Bajad.checked) {
    filtradoMarcasMoto = motos.filter((element) => element.marca == "Bajad");
    filterValidationMotos = true;
  }
  if (Suzuki.checked && Harley.checked) {
    filtradoMarcasSuzuki = motos.find((element) => element.marca == "Suzuki");
    filtradoMarcasHarley = motos.find((element) => element.marca == "Harley");
    filterValidationMotos = true;
    filtradoMarcasMoto = [];
    filtradoMarcasMoto.push(filtradoMarcasSuzuki);
    filtradoMarcasMoto.push(filtradoMarcasHarley);
  }
  if (Suzuki.checked && Bajad.checked) {
    filtradoMarcasSuzuki = motos.find((element) => element.marca == "Suzuki");
    filtradoMarcasBajad = motos.find((element) => element.marca == "Bajad");
    filterValidationMotos = true;
    filtradoMarcasMoto = [];
    filtradoMarcasMoto.push(filtradoMarcasSuzuki);
    filtradoMarcasMoto.push(filtradoMarcasBajad);
  }
  if (Harley.checked && Bajad.checked) {
    filtradoMarcasHarley = motos.find((element) => element.marca == "Harley");
    filtradoMarcasBajad = motos.find((element) => element.marca == "Bajad");
    filterValidationMotos = true;
    filtradoMarcasMoto = [];
    filtradoMarcasMoto.push(filtradoMarcasHarley);
    filtradoMarcasMoto.push(filtradoMarcasBajad);
  }
  if (Suzuki.checked && Harley.checked && Bajad.checked) {
    filtradoMarcasMoto = motos;
    filterValidationMotos = true;
  }
  dataHtmlMotos();
  filtradosMotos();
 

  Suzuki.addEventListener("change", checksMotos);
  Harley.addEventListener("change", checksMotos);
  Bajad.addEventListener("change", checksMotos);
}
function checkCarros() {
  let Ford = document.getElementById("Ford");
  let Jeep = document.getElementById("Jeep");
  let Chevrolet = document.getElementById("Chevrolet");

  if (Ford.checked) {
    filtradoMarcasCarro = carros.filter((element) => element.marca == "Ford");
    filterValidationCarros = true;
   
  } else if (Ford.checked == false) {
    filterValidationCarros = false;
  }
  if (Jeep.checked) {
    filtradoMarcasCarro = carros.filter((element) => element.marca == "Jeep");
    filterValidationCarros = true;
   
  }
  if (Chevrolet.checked) {
    filtradoMarcasCarro = carros.filter(
      (element) => element.marca == "Chevrolet"
    );
    filterValidationCarros = true;
    
  }

  if (Ford.checked && Jeep.checked) {
    filtradoMarcasFord = carros.find((element) => element.marca == "Ford");
    filtradoMarcasJeep = carros.find((element) => element.marca == "Jeep");

    filterValidationCarros = true;
    filtradoMarcasCarro = [];
    filtradoMarcasCarro.push(filtradoMarcasFord);
    filtradoMarcasCarro.push(filtradoMarcasJeep);
   
  }
  if (Ford.checked && Chevrolet.checked) {
    filtradoMarcasFord = carros.find((element) => element.marca == "Ford");
    filtradoMarcasChevrolet = carros.find(
      (element) => element.marca == "Chevrolet"
    );

    filterValidationCarros = true;
    filtradoMarcasCarro = [];
    filtradoMarcasCarro.push(filtradoMarcasFord);
    filtradoMarcasCarro.push(filtradoMarcasChevrolet);
    
  }
  if (Chevrolet.checked && Jeep.checked) {
    filtradoMarcasJeep = carros.find((element) => element.marca == "Jeep");
    filtradoMarcasChevrolet = carros.find(
      (element) => element.marca == "Chevrolet"
    );

    filterValidationCarros = true;
    filtradoMarcasCarro = [];
    filtradoMarcasCarro.push(filtradoMarcasJeep);
    filtradoMarcasCarro.push(filtradoMarcasChevrolet);
    
  }
  if (Chevrolet.checked && Ford.checked && Jeep.checked) {
    filtradoMarcasCarro = carros;
    filterValidationCarros = true;
    
  }
  filtradoCarros();
  dataHtmlCarros();
  Ford.addEventListener("change", checkCarros);
  Jeep.addEventListener("change", checkCarros);
  Chevrolet.addEventListener("change", checkCarros);
}
// Filtrado by rating
function rating() {
  filtradoRating = celulares.filter((element) => element.Rating == contador);
  filtradoRatingCelular = true;

  filtradoGeneralValidation = false;
  filtradoGenerales();
  dataHtmlCelulares();
  
  
}
function ratingMotos() {
  debugger
  filtradoRatingMotos = motos.filter((element) => element.Rating == contadorMoto);
  filtradoRatingMotosValidation = true;
  
  if (filtradoRatingMotos.length == 0) {
    let div = document.getElementById("motos-container");
    div.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = "No se encontraron productos";
    div.insertAdjacentElement("beforeend", h1);
  }
  filtradosMotos();
  dataHtmlMotos();
}
function ratingCarros() {
  debugger
  filtradoRatingCarros = carros.filter((element) => element.Rating == contadorCarro);
  filtradoRatingCarrosValidation = true;
  if (filtradoRatingCarros.length == 0) {
    let div = document.getElementById("carros-container");
    div.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = "No se encontraron productos";
    div.insertAdjacentElement("beforeend", h1);
  }
  filtradoCarros();
  dataHtmlCarros();

}
function BuscarCad(texto, subt, num) {
  var i, x, n;

  n = num || 0;
  for (x = n; x <= texto.length - subt.length; x++) {
    i = 0;
    while (i < subt.length && texto[x + i] == subt[i]) i++;
    if (i == subt.length) return x;
  }
  return -1;
}
// Filtrado by precio

function precio() {
  let precioRange = document.getElementById("precio-range");
  let precioValue = precioRange.value;
  let output = document.getElementById("rangevalue");
  output.value = precioRange.value;
  precioGeneral = precioValue;
  filtradoPrecio = celulares.filter((element) => element.Precio <= precioValue);
  filtradoPrecioValidation = true;
  filtradoGeneral = filtradoPrecio;
 
  // filtradoGenerales();
  if (filtradoPrecio.length == 0) {
    let div = document.getElementById("productos-container");
    div.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = "No se encontraron productos";
    div.insertAdjacentElement("beforeend", h1);
  }
  dataHtmlCelulares();
  filtradoGenerales();
}
function precioMoto() {
 debugger
  let precioRange = document.getElementById("precio-rangeMoto");
  let output = document.getElementById("rangevalueMoto");
  let precio = precioRange.value;
  output.value = precioRange.value;
  precioGeneralMotos=precio
  filtradoPrecioMoto = motos.filter((element) => element.Precio <= precio);

  filtradoPrecioMotoValidation = true;
  
  if (filtradoPrecioMoto.length == 0) {
    let div = document.getElementById("motos-container");
    div.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = "No se encontraron productos";
    div.insertAdjacentElement("beforeend", h1);
  }
  filtradosMotos();
  dataHtmlMotos();


}
function precioCarro() {
  let precioRange = document.getElementById("precio-rangeCarro");
  let output = document.getElementById("rangevalueCarro");
  output.value = precioRange.value;
  let precio = precioRange.value;
  precioGeneralCarros= precio
  filtradoPrecioCarro = carros.filter((element) => element.Precio <= precio);
  filtradoPrecioCarroValidation = true;
  if (filtradoPrecioCarro.length == 0) {
    let div = document.getElementById("carros-container");
    div.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = "No se encontraron productos";
    div.insertAdjacentElement("beforeend", h1);
  }
  filtradoCarros();
  dataHtmlCarros();
  
}
// Filtrado By Memoria
function memoria() {
  if (memoria32.checked) {
    filtradoMemoriaProduct = celulares.filter(
      (element) => element.Almacenamiento == 32
    );
    filtradoMemoriaValidation = true;
    validationMem32=true
    validationMem64= false
    validationMem128= false;
  } else if (memoria32.checked == false) {
    filtradoMemoriaValidation = false;
    
  }
  if (memoria64.checked) {
    filtradoMemoriaProduct = celulares.filter(
      (element) => element.Almacenamiento == 64
    );
    filtradoMemoriaValidation = true;
    validationMem32=false
    validationMem64= true
    validationMem128= false;
  }
  if (memoria128.checked) {
    Almacenamiento = memoria128.value;
    filtradoMemoriaProduct = celulares.filter(
      (element) => element.Almacenamiento == 128
    );
    filtradoMemoriaValidation = true;
    validationMem32=false
    validationMem64= false
    validationMem128= true;
  
  }
  if (memoria32.checked && memoria64.checked) {
    filtrado32 = celulares.find((element) => element.Almacenamiento == 32);
    filtrado64 = celulares.find((element) => element.Almacenamiento == 64);
    filtradoMemoriaProduct = [];
    filtradoMemoriaValidation = true;
    filtradoMemoriaProduct.push(filtrado32);
    filtradoMemoriaProduct.push(filtrado64);

    validationMem32=true
    validationMem64= true
    validationMem128= false;
  }
  if (memoria32.checked && memoria128.checked) {
    filtrado32 = celulares.find((element) => element.Almacenamiento == 32);
    filtrado128 = celulares.find((element) => element.Almacenamiento == 128);
    filtradoMemoriaProduct = [];
    filtradoMemoriaValidation = true;
    filtradoMemoriaProduct.push(filtrado32);
    filtradoMemoriaProduct.push(filtrado128);
 
    validationMem32=true
    validationMem64= false
    validationMem128= true;
  }
  if (memoria64.checked && memoria128.checked) {
    filtrado64 = celulares.find((element) => element.Almacenamiento == 64);
    filtrado128 = celulares.find((element) => element.Almacenamiento == 128);
    filtradoMemoriaProduct = [];
    filtradoMemoriaValidation = true;
    filtradoMemoriaProduct.push(filtrado64);
    filtradoMemoriaProduct.push(filtrado128);

    validationMem32=false
    validationMem64= true
    validationMem128= true;
  }
  if (memoria64.checked && memoria64.checked && memoria128.checked) {
    filtradoMemoriaValidation = false;
    validationMem32=true
    validationMem64= true
    validationMem128= true;
  }
  filtradoGeneralValidation = false;
  filtradoGenerales();
  dataHtmlCelulares();

  
  memoria32.addEventListener("change", memoria);
  memoria64.addEventListener("change", memoria);
  memoria128.addEventListener("change", memoria);
}
// Filtrado by camara
function camara() {

  if (cam32.checked) {
    camaraFilter = celulares.filter((element) => element.camara == 32);
    camaraFilterValidation = true;
    validationcam32= true
 validationcam64= false
validationcam50= false
  } else if (cam32.checked == false) {
    camaraFilterValidation = false;
  
  }
  if (cam64.checked) {
    camaraFilter = celulares.filter((element) => element.camara == 64);
    camaraFilterValidation = true;
    validationcam32= false
 validationcam64= true
 validationcam50= false
  }
  if (cam50.checked) {
    camaraFilter = celulares.filter((element) => element.camara == 50);
    camaraFilterValidation = true;
   validationcam32= false
 validationcam64= false
 validationcam50= true
  }
  if (cam32.checked && cam64.checked) {
    filtradocam32 = celulares.find((element) => element.camara == 32);
    filtradocam64 = celulares.find((element) => element.camara == 64);
    camaraFilter = [];
    camaraFilterValidation = true;
    camaraFilter.push(filtradocam32);
    camaraFilter.push(filtradocam64);

    validationcam32= true
 validationcam64= true
validationcam50= false
  }
  if (cam32.checked && cam50.checked) {
    filtradocam32 = celulares.find((element) => element.camara == 32);
    filtradocam50 = celulares.find((element) => element.camara == 50);
    camaraFilter = [];
    camaraFilterValidation = true;
    camaraFilter.push(filtradocam32);
    camaraFilter.push(filtradocam50);
     validationcam32= true
     validationcam64= false
     validationcam50= true
  }
  if (cam64.checked && cam50.checked) {
    filtradocam64 = celulares.find((element) => element.camara == 64);
    filtradocam50 = celulares.find((element) => element.camara == 50);
    camaraFilter = [];
    camaraFilterValidation = true;
    camaraFilter.push(filtradocam64);
    camaraFilter.push(filtradocam50);

   validationcam32= false
validationcam64= true
 validationcam50= true
   
  }
  if (cam64.checked && cam50.checked && cam32.checked) {
    camaraFilterValidation = false;
  }
  filtradoGeneralValidation=false
  dataHtmlCelulares();
  filtradoGenerales();

  cam50.addEventListener("change", camara);
  cam32.addEventListener("change", camara);
  cam64.addEventListener("change", camara);
}
//
function errorMessage() {
  if(filtradoGeneral.length==0){
    let div = document.getElementById("productos-container");
    div.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = "No se encontraron productos";
    div.insertAdjacentElement("beforeend", h1);
  }
}
  
function errorMessageMoto() {
  if(filtradoGeneralMotos.length==0){
    let divmoto= document.getElementById("motos-container");
    divmoto.innerHTML=""
    let h1 = document.createElement("h1");
    h1.textContent = "No se encontraron productos";
    divmoto.insertAdjacentElement("beforeend", h1)
  }
}
function errorMessageCarro() {
  if(filtradoGeneralCarros.length==0){
    let divmoto= document.getElementById("carros-container");
    divmoto.innerHTML=""
    let h1 = document.createElement("h1");
    h1.textContent = "No se encontraron productos";
    divmoto.insertAdjacentElement("beforeend", h1)
  }
}
function filtradoGenerales() {
debugger
  if (filterValidation == true && filtradoPrecioValidation == true) {
    filtradoGeneral = filtradoMarcas.filter(
      (element) => element.Precio <= precioGeneral
    );
    filtradoGeneralValidation = true; 
  }
  if (filterValidation == true && filtradoRatingCelular == true) {
    filtradoGeneral = filtradoMarcas.filter(
      (element) => element.Rating == contador
    );
    filtradoGeneralValidation = true;
  }
  if (filterValidation == true && filtradoMemoriaValidation == true) {
    if (memoria32.checked) {
      filtradoGeneral = filtradoMarcas.filter(
        (element) => element.Almacenamiento == 32
      );
      filtradoGeneralValidation = true;
      dataHtmlCelulares();
    }
    if (memoria64.checked) {
      filtradoGeneral = filtradoMarcas.filter(
        (element) => element.Almacenamiento == 64
      );
      filtradoGeneralValidation = true;
      dataHtmlCelulares();
    }
    if (memoria128.checked) {
      filtradoGeneral = filtradoMarcas.filter(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneralValidation = true;
      dataHtmlCelulares();
    }
    if (memoria32.checked && memoria64.checked) {
      filtrado32 = filtradoMarcas.find(
        (element) => element.Almacenamiento == 32
      );
      filtrado64 = filtradoMarcas.find(
        (element) => element.Almacenamiento == 64
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado32);
      filtradoGeneral.push(filtrado64);
      filtradoGeneralValidation = true;
      dataHtmlCelulares();
    }
    if (memoria32.checked && memoria128.checked) {
      filtrado32 = filtradoMarcas.find(
        (element) => element.Almacenamiento == 32
      );
      filtrado128 = filtradoMarcas.find(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado32);
      filtradoGeneral.push(filtrado128);
      filtradoGeneralValidation = true;
      dataHtmlCelulares();
    }
    if (memoria64.checked && memoria128.checked) {
      filtrado64 = filtradoMarcas.filter(
        (element) => element.Almacenamiento == 64
      );
      filtrado128 = filtradoMarcas.filter(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado64);
      filtradoGeneral.push(filtrado128);
      filtradoGeneralValidation = true;
    }
  }
  if(filterValidation== true && camaraFilterValidation==true){
    if(cam32.checked){
        filtradoGeneral = filtradoMarcas.filter(
            (element) => element.camara == 32
          );
          filtradoGeneralValidation = true;
          dataHtmlCelulares();
    }
    if(cam50.checked){
        filtradoGeneral = filtradoMarcas.filter(
            (element) => element.camara == 50
          );
          filtradoGeneralValidation = true;
          dataHtmlCelulares();
    }
    if(cam64.checked){
        filtradoGeneral = filtradoMarcas.filter(
            (element) => element.camara == 64
          );
          filtradoGeneralValidation = true;
          dataHtmlCelulares();
    }
    if(cam32.checked && cam50.checked){
        filtradocam32 = filtradoMarcas.find(
            (element) => element.camara == 32
          );
          filtradocam50 = filtradoMarcas.find(
            (element) => element.camara == 50
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam32);
          filtradoGeneral.push(filtradocam50);
          filtradoGeneralValidation = true;
          dataHtmlCelulares();
    }
    if(cam32.checked && cam64.checked){
        filtradocam32 = filtradoMarcas.find(
            (element) => element.camara == 32
          );
          filtradocam64 = filtradoMarcas.find(
            (element) => element.camara == 64
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam32);
          filtradoGeneral.push(filtradocam64);
          filtradoGeneralValidation = true;
          dataHtmlCelulares();
    }
    if(cam50.checked && cam64.checked){
        filtradocam50 = filtradoMarcas.find(
            (element) => element.camara == 50
          );
          filtradocam64 = filtradoMarcas.find(
            (element) => element.camara == 64
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam50);
          filtradoGeneral.push(filtradocam64);
          filtradoGeneralValidation = true;
          dataHtmlCelulares();
    }
  }
  if(filterValidation== true && filtradoPrecioValidation== true && filtradoRatingCelular==true){
    filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral)
    filtradoGeneralValidation = true;
  }
  if(filterValidation== true && filtradoPrecioValidation== true && filtradoRatingCelular==true && filtradoMemoriaValidation==true){
    if(validationMem32== true){
        filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==32)
    }
    if(validationMem64== true){
        filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==64)
    }
    if(validationMem128== true){
        filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==128)
    }
    if(validationMem32== true && validationMem64== true){
      filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==32 || element.Almacenamiento==64)
  }
  if(validationMem32== true && validationMem128== true){
    filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==32 || element.Almacenamiento==128)
}
if(validationMem64== true && validationMem128== true){
  filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==64 || element.Almacenamiento==128)
}

    filtradoGeneralValidation=true
 
  }
  if(filterValidation== true && filtradoPrecioValidation== true && filtradoRatingCelular==true && filtradoMemoriaValidation==true && camaraFilterValidation==true){
 if (validationMem32== true && validationcam50 == true) {
  filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==32 && element.camara==50);
 }
 if (validationMem64== true && validationcam32 == true) {
  filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==32 && element.camara==32);
 }
 if (validationMem128== true && validationcam64 == true) {
  filtradoGeneral = filtradoMarcas.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==128 && element.camara==64);
 }
  }
  if (filtradoPrecioValidation== true && filtradoRatingCelular== true) {
  filtradoGeneral= filtradoPrecio.filter(element =>element.Rating== contador)
  filtradoGeneralValidation=true
  }
  if (filtradoPrecioValidation== true && filtradoMemoriaValidation == true) {
    if (memoria32.checked) {
      filtradoGeneral = filtradoPrecio.filter(
        (element) => element.Almacenamiento == 32
      );
      filtradoGeneralValidation = true;
      
    }
    if (memoria64.checked) {
      filtradoGeneral = filtradoPrecio.filter(
        (element) => element.Almacenamiento == 64
      );
      filtradoGeneralValidation = true;
     
    }
    if (memoria128.checked) {
      filtradoGeneral = filtradoPrecio.filter(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneralValidation = true;
      
    }
    if (memoria32.checked && memoria64.checked) {
      filtrado32 = filtradoPrecio.find(
        (element) => element.Almacenamiento == 32
      );
      filtrado64 = filtradoPrecio.find(
        (element) => element.Almacenamiento == 64
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado32);
      filtradoGeneral.push(filtrado64);
      filtradoGeneralValidation = true;
      
    }
    if (memoria32.checked && memoria128.checked) {
      filtrado32 = filtradoPrecio.find(
        (element) => element.Almacenamiento == 32
      );
      filtrado128 = filtradoPrecio.find(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado32);
      filtradoGeneral.push(filtrado128);
      filtradoGeneralValidation = true;
      
    }
    if (memoria64.checked && memoria128.checked) {
      filtrado64 = filtradoPrecio.filter(
        (element) => element.Almacenamiento == 64
      );
      filtrado128 = filtradoPrecio.filter(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado64);
      filtradoGeneral.push(filtrado128);
      filtradoGeneralValidation = true;
      
    }
   
    
  }
  if(filtradoPrecioValidation== true && camaraFilterValidation==true){
    if(cam32.checked){
        filtradoGeneral = filtradoPrecio.filter(
            (element) => element.camara == 32
          );
          filtradoGeneralValidation = true;
        
    }
    if(cam50.checked){
        filtradoGeneral = filtradoPrecio.filter(
            (element) => element.camara == 50
          );
          filtradoGeneralValidation = true;
         
    }
    if(cam64.checked){
        filtradoGeneral = filtradoPrecio.filter(
            (element) => element.camara == 64
          );
          filtradoGeneralValidation = true;
         
    }
    if(cam32.checked && cam50.checked){
        filtradocam32 = filtradoPrecio.find(
            (element) => element.camara == 32
          );
          filtradocam50 = filtradoPrecio.find(
            (element) => element.camara == 50
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam32);
          filtradoGeneral.push(filtradocam50);
          filtradoGeneralValidation = true;
          
    }
    if(cam32.checked && cam64.checked){
        filtradocam32 = filtradoPrecio.find(
            (element) => element.camara == 32
          );
          filtradocam64 = filtradoPrecio.find(
            (element) => element.camara == 64
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam32);
          filtradoGeneral.push(filtradocam64);
          filtradoGeneralValidation = true;
         
    }
    if(cam50.checked && cam64.checked){
        filtradocam50 = filtradoPrecio.find(
            (element) => element.camara == 50
          );
          filtradocam64 = filtradoPrecio.find(
            (element) => element.camara == 64
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam50);
          filtradoGeneral.push(filtradocam64);
          filtradoGeneralValidation = true;
         
    }  
 
  }
  if(filtradoPrecioValidation== true && filtradoRatingCelular==true && filtradoMemoriaValidation==true){
    if(validationMem32== true){
        filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==32)
    }
    if(validationMem64== true){
        filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==64)
    }
    if(validationMem128== true){
        filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==128)
    }
    if(validationMem32== true && validationMem64== true){
      filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==32 || element.Almacenamiento==64)
    }
  if(validationMem32== true && validationMem128== true){
    filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==32 || element.Almacenamiento==128)
    }
    if(validationMem64== true && validationMem128== true){
  filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador && element.Precio <= precioGeneral && element.Almacenamiento==64 || element.Almacenamiento==128)
    }
    filtradoGeneralValidation=true     
  }
  if(filtradoPrecioValidation== true && filtradoRatingCelular==true && filtradoMemoriaValidation==true && camaraFilterValidation==true){
    if (validationMem32== true && validationcam50 == true) {
     filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador &&  element.Almacenamiento==32 && element.camara==50);
    }
    if (validationMem64== true && validationcam32 == true) {
     filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador && element.Almacenamiento==32 && element.camara==32);
    }
    if (validationMem128== true && validationcam64 == true) {
     filtradoGeneral = filtradoPrecio.filter(element=> element.Rating==contador &&  element.Almacenamiento==128 && element.camara==64);
    } 
  }
  if (filtradoRatingCelular == true && filtradoMemoriaValidation == true) {
    if (memoria32.checked) {
      filtradoGeneral = filtradoRating.filter(
        (element) => element.Almacenamiento == 32
      );
      filtradoGeneralValidation = true;
     
    }
    if (memoria64.checked) {
      filtradoGeneral = filtradoRating.filter(
        (element) => element.Almacenamiento == 64
      );
      filtradoGeneralValidation = true;
      
    }
    if (memoria128.checked) {
      filtradoGeneral = filtradoRating.filter(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneralValidation = true;
      
    }
    if (memoria32.checked && memoria64.checked) {
      filtrado32 = filtradoRating.find(
        (element) => element.Almacenamiento == 32
      );
      filtrado64 = filtradoRating.find(
        (element) => element.Almacenamiento == 64
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado32);
      filtradoGeneral.push(filtrado64);
      filtradoGeneralValidation = true;
      
    }
    if (memoria32.checked && memoria128.checked) {
      filtrado32 = filtradoRating.find(
        (element) => element.Almacenamiento == 32
      );
      filtrado128 = filtradoRating.find(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado32);
      filtradoGeneral.push(filtrado128);
      filtradoGeneralValidation = true;
 
    }
    if (memoria64.checked && memoria128.checked) {
      filtrado64 = filtradoRating.filter(
        (element) => element.Almacenamiento == 64
      );
      filtrado128 = filtradoRating.filter(
        (element) => element.Almacenamiento == 128
      );
      filtradoGeneral = [];
      filtradoGeneral.push(filtrado64);
      filtradoGeneral.push(filtrado128);
      filtradoGeneralValidation = true;
    }
    dataHtmlCelulares(); 
  }
  if(filtradoRatingCelular== true && camaraFilterValidation==true){
    if(cam32.checked){
        filtradoGeneral = filtradoRating.filter(
            (element) => element.camara == 32
          );
          filtradoGeneralValidation = true;
       
    }
    if(cam50.checked){
        filtradoGeneral = filtradoRating.filter(
            (element) => element.camara == 50
          );
          filtradoGeneralValidation = true;
          
    }
    if(cam64.checked){
        filtradoGeneral = filtradoRating.filter(
            (element) => element.camara == 64
          );
          filtradoGeneralValidation = true;
          
    }
    if(cam32.checked && cam50.checked){
        filtradocam32 = filtradoRating.find(
            (element) => element.camara == 32
          );
          filtradocam50 = filtradoRating.find(
            (element) => element.camara == 50
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam32);
          filtradoGeneral.push(filtradocam50);
          filtradoGeneralValidation = true;
         
    }
    if(cam32.checked && cam64.checked){
        filtradocam32 = filtradoRating.find(
            (element) => element.camara == 32
          );
          filtradocam64 = filtradoRating.find(
            (element) => element.camara == 64
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam32);
          filtradoGeneral.push(filtradocam64);
          filtradoGeneralValidation = true;
         
    }
    if(cam50.checked && cam64.checked){
        filtradocam50 = filtradoRating.find(
            (element) => element.camara == 50
          );
          filtradocam64 = filtradoRating.find(
            (element) => element.camara == 64
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam50);
          filtradoGeneral.push(filtradocam64);
          filtradoGeneralValidation = true;
    }  
  }
  if(filtradoMemoriaValidation== true && camaraFilterValidation==true){
    if(cam32.checked){
        filtradoGeneral = filtradoMemoriaProduct.filter(
            (element) => element.camara == 32
          );
          filtradoGeneralValidation = true;
         
    }
    if(cam50.checked){
        filtradoGeneral = filtradoMemoriaProduct.filter(
            (element) => element.camara == 50
          );
          filtradoGeneralValidation = true;
         
    }
    if(cam64.checked){
        filtradoGeneral = filtradoMemoriaProduct.filter(
            (element) => element.camara == 64
          );
          filtradoGeneralValidation = true;
         
    }
    if(cam32.checked && cam50.checked){
        filtradocam32 = filtradoMemoriaProduct.find(
            (element) => element.camara == 32
          );
          filtradocam50 = filtradoMemoriaProduct.find(
            (element) => element.camara == 50
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam32);
          filtradoGeneral.push(filtradocam50);
          filtradoGeneralValidation = true;
        
    }
    if(cam32.checked && cam64.checked){
        filtradocam32 = filtradoMemoriaProduct.find(
            (element) => element.camara == 32
          );
          filtradocam64 = filtradoMemoriaProduct.find(
            (element) => element.camara == 64
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam32);
          filtradoGeneral.push(filtradocam64);
          filtradoGeneralValidation = true;
         
    }
    if(cam50.checked && cam64.checked){
        filtradocam50 = filtradoMemoriaProduct.find(
            (element) => element.camara == 50
          );
          filtradocam64 = filtradoMemoriaProduct.find(
            (element) => element.camara == 64
          );
          filtradoGeneral = [];
          filtradoGeneral.push(filtradocam50);
          filtradoGeneral.push(filtradocam64);
          filtradoGeneralValidation = true;
       
    }
  }
errorMessage()
dataHtmlCelulares()
}
function filtradosMotos() {
  debugger
if(filterValidationMotos==true && filtradoPrecioMotoValidation==true){
filtradoGeneralMotos= filtradoMarcasMoto.filter(element=>element.Precio <= precioGeneralMotos)
filtradoGeneralMotosValidation= true
}
if(filterValidationMotos==true && filtradoRatingMotosValidation==true){
  filtradoGeneralMotos= filtradoMarcasMoto.filter(element=>element.Rating == contadorMoto)
  filtradoGeneralMotosValidation= true
}
if(filterValidationMotos==true && filtradoPrecioMotoValidation==true && filtradoRatingMotosValidation==true){
  filtradoGeneralMotos= filtradoMarcasMoto.filter(element=>element.Precio <= precioGeneralMotos && element.Rating== contadorMoto)
  filtradoGeneralMotosValidation= true
  }

errorMessageMoto();
dataHtmlMotos();

}
function filtradoCarros() {
  debugger
  if ( filterValidationCarros== true && filtradoPrecioCarroValidation == true) {
  filtradoGeneralCarros= filtradoMarcasCarro.filter(element=> element.Precio <= precioGeneralCarros);
  filtradoGeneralCarrosValidation=true
  }
  if(filterValidationCarros== true && filtradoRatingCarrosValidation == true){
    filtradoGeneralCarros= filtradoMarcasCarro.filter(element=> element.Rating == contadorCarro);
  filtradoGeneralCarrosValidation=true
  }
  if ( filterValidationCarros== true && filtradoPrecioCarroValidation == true && filtradoRatingCarrosValidation==true) {
    filtradoGeneralCarros= filtradoMarcasCarro.filter(element=> element.Precio <= precioGeneralCarros && element.Rating == contadorCarro);
    filtradoGeneralCarrosValidation=true
  }

  errorMessageCarro();
 dataHtmlCarros();
}
function emergent(id) {
let open1 = document.getElementById("open1");
let open2= document.getElementById("open2");
let open3 = document.getElementById("open3");
let container = document.getElementById("emergent");
let closeApp= document.getElementById("closeBtn")

open1.addEventListener("click", ()=>{
  container.classList.add("show");

})
open2.addEventListener("click", ()=>{
  container.classList.add("show");
  
})
open3.addEventListener("click", ()=>{
  container.classList.add("show");
 
})
closeApp.addEventListener("click", ()=>{
  container.classList.remove("show")
 
})
let filtradoEspecs =celulares.filter(element=> element.id == id)
  console.log( filtradoEspecs);

filtradoEspecs.forEach(element=>{

let name = document.getElementById("name-emergent")
name.textContent= `${element.Nombre} +`+`${element.Almacenamiento}GB +`+`${element.camara} MP`

let emergentBackground= document.getElementById("emergent-background");
emergentBackground.style.backgroundImage=`url(${element.lateral_cel})`;

let price = document.getElementById("priceSub");
price.textContent= `$${element.Precio}`;

let priceUp = document.getElementById("price");
priceUp.textContent= `$${element.Precio}`;

let color= document.getElementById("color")
color.textContent= `${element.Color}`
})




}
function emergentMotos(id){
  let open1 = document.getElementById("openMoto1");
  let open2= document.getElementById("openMoto2");
  let open3 = document.getElementById("openMoto3"); 
let container = document.getElementById("emergent");
let closeApp= document.getElementById("closeBtn")
open1.addEventListener("click", ()=>{
  container.classList.add("show");

})
open2.addEventListener("click", ()=>{
  container.classList.add("show");
  
})
open3.addEventListener("click", ()=>{
  container.classList.add("show");
 
})
closeApp.addEventListener("click", ()=>{
  container.classList.remove("show")
 
})
let filtradoEspecs =motos.filter(element=> element.id == id)
  console.log( filtradoEspecs);

filtradoEspecs.forEach(element=>{

let name = document.getElementById("name-emergent")
name.textContent= `${element.Nombre} +`+`${element.Potencia}rpm `

let emergentBackground= document.getElementById("emergent-background");
emergentBackground.style.backgroundImage=`url(${element.lateral_cel})`;

let price = document.getElementById("priceSub");
price.textContent= `$${element.Precio}`;

let priceUp = document.getElementById("price");
priceUp.textContent= `$${element.Precio}`;

let color= document.getElementById("color")
color.textContent= `${element.Color}`
})


}
function emergentCarro(id){
  let open1 = document.getElementById("openCarro1");
  let open2= document.getElementById("openCarro2");
  let open3 = document.getElementById("openCarro3"); 
let container = document.getElementById("emergent");
let closeApp= document.getElementById("closeBtn")
open1.addEventListener("click", ()=>{
  container.classList.add("show");

})
open2.addEventListener("click", ()=>{
  container.classList.add("show");
  
})
open3.addEventListener("click", ()=>{
  container.classList.add("show");
 
})
closeApp.addEventListener("click", ()=>{
  container.classList.remove("show")
 
})
let filtradoEspecs =carros.filter(element=> element.id == id)
  console.log( filtradoEspecs);

filtradoEspecs.forEach(element=>{

let name = document.getElementById("name-emergent")
name.textContent= `${element.Nombre} +`+`${element.Potencia}rpm `

let emergentBackground= document.getElementById("emergent-background");
emergentBackground.style.backgroundImage=`url(${element.lateral_cel})`;

let price = document.getElementById("priceSub");
price.textContent= `$${element.Precio}`;

let priceUp = document.getElementById("price");
priceUp.textContent= `$${element.Precio}`;

let color= document.getElementById("color")
color.textContent= `${element.Color}`
})


}

document.addEventListener("DOMContentLoaded", events);
