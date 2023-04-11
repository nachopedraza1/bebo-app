import { Box, Button, Grid, Typography } from "@mui/material"
import { useCustomSelector } from "../../hooks"
import { Link } from "react-router-dom";

export const LatestDesigns: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    return (
        <>
            <Typography variant='h3' mt={5} fontSize={38}> Ultimos diseños </Typography>
            <Grid container justifyContent="space-between" mt={5}>
                {posts.slice(0, 4).map(({ id, title, imgUrl, price }) => (
                    <Grid item className="item" xs={2.6} key={id}>
                        <div className="i_info">
                            <Typography variant='subtitle2'> {title} </Typography>
                        </div>
                        <div className="i_img">
                            <img src={imgUrl} width="100%" />
                        </div>
                        <div className="i_hover">
                            <Link to={`/product/${id}`}>
                                <Button >buy</Button>
                            </Link>
                        </div>

                        <div className="file_types">
                            <a href="/en/category/psd" className="psd"></a>
                        </div>

                        <div className="i_price">
                            $ {price}
                        </div>
                    </Grid>
                ))}
            </Grid>


        </>
    )
}

{/* <Grid item xs={2.6} key={id}>
    <Typography variant='subtitle2'> {title} </Typography>
    <Box className="hover-effect" width="240px" height="350px" overflow="hidden" borderRadius={1}>
        <img src={imgUrl} alt="" width="100%" />
    </Box>
</Grid> */}