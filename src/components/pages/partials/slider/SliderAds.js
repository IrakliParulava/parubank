import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider.scss";
import first from "../../../../assets/ads/first.jpg";
import second from "../../../../assets/ads/second.jpg";
import third from "../../../../assets/ads/third.jpg";
import forth from "../../../../assets/ads/forth.jpg";
import fifth from "../../../../assets/ads/fifth.jpg";

function SliderAds() {
    const sliders = [
        {
            bg: first,
            text: 'SALES OFF 20%'
        },
        {
            bg: second,
            text: 'SALES OFF 30%'
        },
        {
            bg: third,
            text: 'SALES OFF 40%'
        },
        {
            bg: forth,
            text: 'SALES OFF 50%'
        },
        {
            bg: fifth,
            text: 'SALES OFF 75%'
        },
    ];

    return (
        <Carousel
            showArrows={false}
            autoPlay={true}
            interval={7000}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            stopOnHover={false}
        >
            {sliders.map((slide, i) => (
                <div key={i} className="slid" style={{ backgroundImage: `url(${slide.bg})` }}>{slide.text}</div>
            ))}

        </Carousel>

    )
}

export default SliderAds;