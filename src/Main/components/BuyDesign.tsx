import { Link as RouterLink } from "react-router-dom"
import { InfoOutlined, LocalMallOutlined, MailOutline } from "@mui/icons-material"
import { Container, Link, Grid, Typography } from "@mui/material"

export const BuyDesign: React.FC = () => {
    return (
        <Grid
            container
            boxShadow="1px 2px 4px 4px rgba(0, 0, 0, 0.2),0px 4px 5px 4px rgba(0, 0, 0, 0.14),0px 1px 10px 4px rgba(0, 0, 0, 0.12)"
            position="fixed"
            height="120px"
            width="100%"
            bgcolor="white"
            zIndex={1}
            bottom={0}
            left={0}
        >
            <Container>
                <Grid container height="100%" alignItems="center" justifyContent="space-between" gap={4}>

                    <Grid item display="flex" gap={1}>
                        <InfoOutlined />
                        <Grid item>
                            <Typography fontWeight={300}>Have some questions?</Typography>
                            <Link component={RouterLink} color="#f1484c" to="/faq" underline="hover">Read before buying</Link>
                        </Grid>
                    </Grid>

                    <Grid item display="flex" gap={1}>
                        <MailOutline />
                        <Grid item>
                            <Typography fontWeight={300}>Delivery E-mail:</Typography>
                            <input type="text"
                                name="email"
                                autoFocus={true}
                                placeholder="Enter Your e-mail"
                                className="email-delivery"
                            />
                        </Grid>
                    </Grid>

                    <Grid item display="flex">
                        <LocalMallOutlined sx={{ fontSize: "40px" }} />
                        <Grid item>

                        </Grid>
                    </Grid>

                </Grid>
            </Container >
        </Grid >
    )
}
