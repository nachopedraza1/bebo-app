import { Link as RouterLink } from "react-router-dom"
import { Image } from "../components"

import { Box, Grid, Link, Typography } from "@mui/material"
import { Post } from "../../Interfaces/interfaces"

export const Related: React.FC<{ relatedPost: Post[] }> = ({ relatedPost }) => {

    return (
        <Grid container>
            <Typography mb={2} fontWeight={600}> You may be interested</Typography>
            <Grid container justifyContent="space-between" >
                {relatedPost.slice(0, 2).map(({ id, imgUrl, title, price }) => (

                    <Grid item xs={5.7} key={id}>
                        <Link component={RouterLink} to={`/designs/${id}`} underline="none">
                            <Box width="100%" height="150px" overflow="hidden" borderRadius={1}>
                                <Image imgUrl={imgUrl} />
                            </Box>
                        </Link>
                        <Typography noWrap fontWeight={600} mt={1} textTransform="capitalize"> {title} </Typography>
                        <Typography fontWeight={600} color="secondary">
                            {price === "0" ? "Free" : `$ ${price}.00`}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
