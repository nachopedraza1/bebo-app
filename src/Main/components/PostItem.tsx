import { Link } from "react-router-dom"

import { Image } from "./Imagen"

import { Box, Button, Grid, Typography } from "@mui/material"
import { Post } from "../../Interfaces/interfaces"

export const PostItem: React.FC<Post> = ({ id, category, title, imgUrl, price }) => {

    return (
        <Grid item className="item" xs={5.8} sm={2.8} md={2.6} key={id} mb={3}>
            <Box className="i_info">
                <Typography variant='subtitle2' noWrap> {title} </Typography>
            </Box>
            <Box
                className="i_img"
                height={{ xs: "250px", md: "350px" }}
                bgcolor="#200607">
                <Image imgUrl={imgUrl} />
                {category === "Free" && <span className="free-item"></span>}
                {category === "Discounts" && <span className="disc-item"></span>}
            </Box>
            <Box
                className="i_hover"
                paddingTop={{ xs: "250px", md: "350px" }}
                marginTop={{ xs: "-250px", md: "-350px" }}>
                <Link to={`/designs/${id}`}>
                    <Button >buy</Button>
                </Link>
            </Box>

            <Box className="file_types">
                <a className="psd"></a>
            </Box>

            <Box className="i_price">
                {price === "0" ? "Free" : `$ ${price}`}
            </Box>
        </Grid>
    )
}

