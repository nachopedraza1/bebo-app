import { Box, Button, Grid, Typography } from "@mui/material"
import { useCustomSelector } from "../../hooks"
import { Link } from "react-router-dom";

export const LatestDesigns: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    return (
        <>
            <Typography variant='h3' mt={5} fontSize={45}> New Designs </Typography>
            <Grid container justifyContent="space-between" mt={5}>
                {posts.slice(0, 4).map(({ id, title, imgUrl, price }) => (
                    <Grid item className="item" xs={2.6} key={id}>
                        <Box className="i_info">
                            <Typography variant='subtitle2'> {title} </Typography>
                        </Box>
                        <Box className="i_img">
                            <img src={imgUrl} width="100%" />
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
                ))}
            </Grid>
        </>
    )
}