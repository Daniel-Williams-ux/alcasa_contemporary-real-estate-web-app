import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
  };

  return (
    <div className="w-full overflow-hidden rounded-none border-white border-none	outline-white	shadow-none	shadow-white"> {/* Container with Tailwind classes */}
      <Slider {...settings}>
        <div>
          <img src="alcasa1.jpg" alt="Image 1" className="w-full h-auto" /> {/* Image with Tailwind classes */}
        </div>
        <div>
          <img src="alcasa2.jpg" alt="Image 2" className="w-full h-auto" /> {/* Image with Tailwind classes */}
        </div>
        <div>
          <img src="alcasa3.jpg" alt="Image 3" className="w-full h-auto" /> {/* Image with Tailwind classes */}
        </div>
        <div>
          <img src="alcasa4.jpg" alt="Image 4" className="w-full h-auto" /> {/* Image with Tailwind classes */}
        </div>
        <div>
          <img src="alcasa5.jpg" alt="Image 5" className="w-full h-auto" /> {/* Image with Tailwind classes */}
        </div>
        <div>
          <img src="alcasa7.jpg" alt="Image 6" className="w-full h-auto" /> {/* Image with Tailwind classes */}
        </div>
        <div>
          <img src="alcasa8.jpg" alt="Image 7" className="w-full h-auto" /> {/* Image with Tailwind classes */}
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
