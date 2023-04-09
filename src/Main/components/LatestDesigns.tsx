import { Box, Grid, Typography } from "@mui/material"
import { useCustomSelector } from "../../hooks"

export const LatestDesigns: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    return (
        <>
            <Typography variant='h3' mt={5} fontSize={38}> Ultimos diseños </Typography>
            <Grid container justifyContent="space-between" mt={5}>
                {posts.slice(0, 4).map(({ id, title, imgUrl, price }) => (
                    <Grid item xs={2.6} key={id}>
                        <Typography variant='subtitle1'> {title} </Typography>
                        <Box width="240px" height="350px" overflow="hidden" borderRadius={1}>
                            <img src={imgUrl} alt="" width="100%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>

        </>
    )
}
