import Slider from 'react-slick';
import { Grid } from "@mui/material";

const slides = [
    { imgUrl: "/assets/banner1.jpg" },
    { imgUrl: "/assets/banner2.jpg" },
    { imgUrl: "/assets/banner3.jpg" },
]

export const AdvertisingSlide: React.FC = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <Grid sx={{ marginTop: 1, display: { xs: "none", md: "block" } }} >
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
        </Grid >
    )
}
