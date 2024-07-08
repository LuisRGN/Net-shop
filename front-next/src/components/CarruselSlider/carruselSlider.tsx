/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselProps } from "flowbite-react";

const CarruselSlider: React.FC<CarouselProps> = () => {


  return (

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 p-5">
      <Carousel>
        <img src="/altavoces.jpg" alt="..." className="h-full sm:h-96 mb-8" />
        <img src="/telefonos.jpeg" alt="..." className="h-full sm:h-96 mb-8" />
        <img src="/geforce.jpg" alt="..." className="h-full sm:h-96 mb-8" />
        <img src="/reloj.webp" alt="..." className="h-full sm:h-96 mb-8" />
      </Carousel>
    </div>


  );
};

export default CarruselSlider;

