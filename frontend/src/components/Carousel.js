import "./Carousel.css"
export default function Carousel(){

    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/img1.avif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/img3.avif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/img3.avif" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev arrbut" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next arrbut" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}