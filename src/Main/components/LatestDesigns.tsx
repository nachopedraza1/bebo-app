import { Link } from "react-router-dom";
import { useCustomSelector } from "../../hooks"
import { PostItem } from "./PostItem";
import { Button, Divider, Grid, Typography } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material";

const buttonStyles = {
    color: 'black',
    backgroundColor: '#0000003a',
    padding: "10px 15px"
};

export const LatestDesigns: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    return (
        <>
            <Grid container justifyContent="space-between" alignItems="center" mt={4} mb={2}>
                <Grid item xs={4}>
                    <Typography variant='h3' fontSize={45} > New Designs </Typography>
                </Grid>
                <Link to="/designs" style={{ textDecoration: "none" }}>
                    <Button sx={buttonStyles} className='vs-btn' endIcon={<KeyboardArrowDown className="arrow" />}>
                        ver mas
                    </Button>
                </Link>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" mt={4}>
                {posts.filter(({ category }) => category != "Free" && category != "Discounts")
                    .slice(0, 4)
                    .map(post => (
                        <PostItem key={post.id}  {...post} />
                    ))}
            </Grid >


            <Grid container justifyContent="space-between" alignItems="center" mt={4} mb={2}>
                <Grid item xs={4}>
                    <Typography variant='h3' fontSize={45} > Discounts Designs</Typography>
                </Grid>
                <Link to="/designs" style={{ textDecoration: "none" }}>
                    <Button sx={buttonStyles} className='vs-btn' endIcon={<KeyboardArrowDown className="arrow" />}>
                        ver mas
                    </Button>
                </Link>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" mt={4}>
                {posts.filter(({ category }) => category === "Discounts")
                    .slice(0, 4)
                    .map(post => (
                        <PostItem key={post.id}  {...post} />
                    ))}
            </Grid >

            <Grid container justifyContent="space-between" alignItems="center" mt={4} mb={2}>
                <Grid item xs={4}>
                    <Typography variant='h3' fontSize={45} > Free Designs </Typography>
                </Grid>
                <Link to="/designs" style={{ textDecoration: "none" }}>
                    <Button sx={buttonStyles} className='vs-btn' endIcon={<KeyboardArrowDown className="arrow" />}>
                        ver mas
                    </Button>
                </Link>
            </Grid>
            <Divider />
            <Grid container justifyContent="space-between" mt={4}>
                {posts.filter(({ category }) => category === "Free")
                    .slice(0, 4)
                    .map(post => (
                        <PostItem key={post.id}  {...post} />
                    ))}
            </Grid >
        </>
    )
}