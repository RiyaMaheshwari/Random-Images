const imageContainer = document.querySelector(".image-container")
const btn = document.querySelector(".btn")

btn.addEventListener("click", ()=>{
    imageNum = 10;
    addNewPhotos();
});

function addNewPhotos(){
for (let index = 0; index < imageNum; index++) {
    const newPhoto = document.createElement("img")
    newPhoto.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainer.appendChild(newPhoto);
}
}