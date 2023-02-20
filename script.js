const imageModal = document.getElementById("modalImage")

function setModalImage(e){
    // console.log(e.target)
    const imgSrc = e.target.src
    imageModal.src = imgSrc
}