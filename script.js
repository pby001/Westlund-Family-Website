const imageData = [
    { 
        src: `./assets/OscarWestlund1.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/OscarWestlund2.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/OscarWestlund3.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/OscarWestlund5.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/WeslundHomestead.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/Westlund2015.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/Westlund2016.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/Westlund3017.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/WestlundGrandparents.jpg`,
        desc: `description`
    },
    { 
        src: `./assets/WestlundSistersAtTheBeach.jpg`,
        desc: `description`
    },
]

const imageModal = document.getElementById("modalImage")
const modalDesc = document.getElementById("modalDescription")

const gallery = document.getElementById("galleryImages")

imageData.forEach(a =>{
    const newDiv = document.createElement("div");
    newDiv.className = `col col-md-4 col-12 p-3`
    const newImage = document.createElement("img");
    newImage.className = `img-thumbnail galleryThumb`
    newImage.src = a.src
    newImage.setAttribute("data-bs-toggle","modal")
    newImage.setAttribute("data-bs-target","#galleryModal")
    newImage.setAttribute("data-desc", a.desc)
    newImage.onclick = setModalImage
    newDiv.appendChild(newImage)

    gallery.appendChild(newDiv)
})

function setModalImage(e){
    const imgSrc = e.target.src
    imageModal.src = imgSrc
    const imgDesc = e.target.dataset.desc
    modalDesc.innerText = imgDesc || ""
}
