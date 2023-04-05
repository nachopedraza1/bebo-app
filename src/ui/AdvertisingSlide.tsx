import Slider from 'react-slick';
import { Grid } from "@mui/material";

const slides = [
    { imgUrl: "/assets/banner1.jpg" },
    { imgUrl: "/assets/banner2.jpg" },
    { imgUrl: "/assets/banner3.jpg" },
]

export const AdvertisingSlide = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                {slides.map(({ imgUrl }) => (
                    <Grid container key={imgUrl} sx={{
                        width: "100%",
                        minHeight: "88px",
                        background: `url(${imgUrl})`,
                        backgroundPosition: "center",
                    }}>
                    </Grid>
                ))}
            </Slider >
        </div>
    )
}
