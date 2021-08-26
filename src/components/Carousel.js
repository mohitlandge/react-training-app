function Carousel() {
    var carousal_1 = 'carousal_1.jpeg';
    var carousal_1 = 'carousal_2.jpeg';
    var carousal_1 = 'carousel_3.jpeg';

    return (
        <div className="container">
            <div  id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src='carousel_1.jpeg' alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src='carousel_2.jpeg' alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src='carousel_3.jpeg' alt="Third slide" />
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
        </div>
        </div>
    )
}

export default Carousel