import { useParams } from "react-router-dom"
import { useCustomSelector } from "../../hooks";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";





export const ViewDesignPage: React.FC = () => {

    const { designId } = useParams();

    const { posts } = useCustomSelector(state => state.posts);

    const { category, date, id, imgUrl, price, title } = posts.find(({ id }) => id === designId) || {}

    const table = [
        { name: "Game", value: "Mu Online" },
        { name: "Category", value: category },
        { name: "Date", value: date },
        { name: "Format", value: "PSD" },
        { name: "Price", value: `$ ${price} USD` },
    ];

    return (
        <Container>
            <Grid container justifyContent="space-between">

                <Grid container alignItems="center" color="#8c8c8c" p="50px 0px">
                    <Typography > Designs </Typography>
                    <ChevronRight fontSize="small" sx={{ mx: 2 }} />
                    <Typography> {category} </Typography>
                    <ChevronRight fontSize="small" sx={{ mx: 2 }} />
                    <Typography textTransform="capitalize" color="black"> {title} </Typography>
                </Grid>

                <Grid item xs={7.4} >
                    <img src={imgUrl} width="100%" style={{ maxWidth: "700px", borderRadius: "5px" }} alt="" />
                </Grid>

                <Grid item xs={4}>
                    <Grid container direction="column" gap={3}>

                        <Typography variant="h5" fontSize={25}> Shogun Metin2 Game Website Template </Typography>
                        <Divider />

                        <Typography variant="h5" fontSize={18}> Available Payments: </Typography>

                        <Grid container alignItems="center" spacing={2} >
                            <Grid item xs={4}>
                                <img src="/assets/mp-logo.webp" width="100%" alt="" />
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/assets/logo-pp.png" width="100%" alt="" />
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/assets/binance-logo.png" width="100%" alt="" />
                            </Grid>
                        </Grid>

                        <Divider />

                        <Grid container>
                            {table.map(({ name, value }) => (
                                <Grid container>
                                    <Grid item xs={6} paddingBottom="8px">
                                        <Typography variant="h6" fontSize={14}>{name}:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" fontSize={14} fontWeight={600}> {value}</Typography>
                                    </Grid>
                                </Grid >
                            ))}
                        </Grid>

                        <Divider />

                        {/* <Typography fontSize={14}>
                            One more beautiful Gaming website for Metin2 Private server made by our best M2 designer in light and dark brown color theme with additional yellow elements. This template also have additional Updater user interface design.
                        </Typography> */}

                        <Grid container className="faq-box">
                            <Grid item xs={2}>
                                <img src="/assets/warning_icon.png" width="70%" alt="" />
                            </Grid>
                            <Grid item xs={10}>
                                Please read about
                                <Link to="/faq" style={{ margin: "0px 5px", color: "#f1484c" }}>
                                    File Types
                                </Link>
                                before choosing and buying items.
                            </Grid>
                        </Grid>

                        <Typography variant="h5" fontSize={16}> Basic Package: </Typography>

                        <Grid container className="psd-box">
                            <Grid item xs={8} display="flex" alignItems="center">
                                <img src="/assets/psd.png" width={22} />
                                <Typography variant="h5" fontSize={15} > PSD Layouts </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h5" fontSize={24} fontWeight={400}> ${price}.00 </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Homepage psd layout with Launcher user interface design </Typography>
                            </Grid>
                        </Grid>

                        <Divider />

                    </Grid>

                </Grid>
            </Grid>
        </Container >
    )
}
