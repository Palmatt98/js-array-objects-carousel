// //Creare un carosello come nella foto allegata.
// Milestone 1:
// Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
const images = [
	{
		image: "img/01.webp",
		title: "Marvel's Spiderman Miles Morale",
		text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
	},
	{
		image: "img/02.webp",
		title: "Ratchet & Clank: Rift Apart",
		text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
	},
	{
		image: "img/03.webp",
		title: "Fortnite",
		text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	},
	{
		image: "img/04.webp",
		title: "Stray",
		text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
	},
	{
		image: "img/05.webp",
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];
// stampare le immagini in pagina attraverso js
const imgContainer = document.querySelector(".my-carousel-images");
const innerImage = document.querySelector(".my-thumbnails");

images.forEach((curImage) => {
	console.log(curImage.image);
	const imgElement = `
                <div class="my-carousel-item" carousel-item="1">
									<img
										class="img-fluid"
										src="./${curImage.image}"
										alt="${curImage.title} picture"
									/>
                  <div class="item-description px-3">
										<h2>${curImage.title}</h2>
										<p>
											${curImage.text}
										</p>
									</div>
								</div>
  `;
	imgContainer.innerHTML += imgElement;

  const littleImg = `
                <img
									class="img-fluid my-thumbnail"
									src="./${curImage.image}"
									alt="${curImage.title} picture"
								/>
  `;

  innerImage.innerHTML += littleImg
});

// imposto active solo alla prima img
// querySelectorAll mi torna un array di elementi HTML
const imageElements = document.querySelectorAll(".my-carousel-item");
console.log("imageElements: ", imageElements);
const littleImageElements = document.querySelectorAll(".my-thumbnails > .my-thumbnail");
let activeIndex = 0;
imageElements[activeIndex].classList.add("active");
littleImageElements[activeIndex].classList.add("active")

//al click devo passare active alla immagine successiva
document.querySelector(".my-next").addEventListener("click", goNext);

function goNext() {
	imageElements[activeIndex].classList.remove("active");
  littleImageElements[activeIndex].classList.remove("active")
	//incremento l'indice
	if (activeIndex === imageElements.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}
	// aggiungo la classe active alla prossima immagine
	imageElements[activeIndex].classList.add("active");
  littleImageElements[activeIndex].classList.add("active");
}
document.querySelector(".my-previous").addEventListener("click", goBack);

function goBack() {
	imageElements[activeIndex].classList.remove("active");
	littleImageElements[activeIndex].classList.remove("active");
	//incremento l'indice
	if (activeIndex === 0) {
		activeIndex = imageElements.length - 1;
	} else {
		activeIndex--;
	}
	// aggiungo la classe active alla prossima immagine
	imageElements[activeIndex].classList.add("active");
  littleImageElements[activeIndex].classList.add("active");
}
