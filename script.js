const imageData = [
    { 
        src: `./assets/OscarWestlund1.jpg`,
        desc: `Oscar Westlund 1909 Everett`
    },
    { 
        src: `./assets/OscarWestlund2.jpg`,
        desc: `Julia Olson Everett 1918`
    },
    { 
        src: `./assets/OscarWestlund3.jpg`,
        desc: `Oscar and Julia Westlund wedding day 1918`
    },
    { 
        src: `./assets/OscarWestlund5.jpg`,
        desc: `At the Westlunds home early 1960's. Oscar Lorrain, Julia Margaret and Robert Bergstrom`
    },
    { 
        src: `./assets/WeslundHomestead.jpg`,
        desc: `Robert Bergstrom at Westlund family home in Kristinhamn Sweden 1976. Gustav Westlund left and Erik Gustafson right`
    },
    { 
        src: `./assets/Westlund2015.jpg`,
        desc: `Westlund family grave marker 1976 Kristinhamn Sweden`
    },
    { 
        src: `./assets/Westlund2016.jpg`,
        desc: `Erik Gustavson, Thomas Bergstrom and Gustav Westlund at familfarm in Kristinhamn Sweden 1976`
    },
    { 
        src: `./assets/Westlund3017.jpg`,
        desc: `Westlund family grave marker 1976 Kristinhamn Sweden`
    },
    { 
        src: `./assets/WestlundGrandparents.jpg`,
        desc: `Lovisia Westlund (mother of Oscar) with Lorrain Beac and Bill Beach, Seattle Washington 1950's.`
    },
    { 
        src: `./assets/WestlundSistersAtTheBeach.jpg`,
        desc: `June, Lorrain and Margaret Westlund at the beach.  Seattle Washington 1940's`
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
