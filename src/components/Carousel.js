import React, { Component }  from 'react';

function Carousel() {
    var carousal_1 = 'carousal_1.jpeg';
    var carousal_1 = 'carousal_2.jpeg';
    var carousal_1 = 'carousel_3.jpeg';

    return (
        <div className="container-fluid">            
            <div  id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ height: "300px"}} class="d-block w-100" src="https://i1.fnp.com/assets/images/custom/cake-2020/hero-banners/Birthday-cakes---Desktop-25-aug-2021.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: "300px"}} class="d-block w-100" src="https://i1.fnp.com/assets/images/custom/cake-2020/hero-banners/cake-hero-banner-desk.png" alt="Second slide" />
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
        </div>
    )
}

export default Carousel