import { Link } from "react-router-dom"
import { Box, Button, Grid, Typography } from "@mui/material"
import { Post } from "../../Interfaces/interfaces"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PostItem: React.FC<Post> = ({ id, title, imgUrl, price }) => {
    return (
        <Grid item className="item" xs={2.6} key={id} mb={3}>
            <Box className="i_info">
                <Typography variant='subtitle2'> {title} </Typography>
            </Box>
            <Box className="i_img" bgcolor="#200607">
                <LazyLoadImage
                    alt=""
                    height="auto"
                    effect="blur"
                    src={imgUrl}
                    width="100%" />
            </Box>
            <Box className="i_hover">
                <Link to={`/designs/${id}`}>
                    <Button >buy</Button>
                </Link>
            </Box>

            <Box className="file_types">
                <a href="/en/category/psd" className="psd"></a>
            </Box>

            <Box className="i_price">
                $ {price}
            </Box>
        </Grid>
    )
}

export default PostItem;

