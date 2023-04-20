import { FormEvent, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom"

import { useForm } from "../../hooks";

import { EmailOutlined, InfoOutlined, LocalMallOutlined } from "@mui/icons-material"
import { Container, Link, Grid, Typography, Input, InputLabel, Badge } from '@mui/material';
import { Post } from "../../Interfaces/interfaces";

export const BuyDesign: React.FC<Post> = ({ title, category, price, imgUrl }) => {

    const { email, onInputchange } = useForm({ email: "" });


    const onSubmitBuy = async (event: FormEvent) => {
        event.preventDefault();

        const API = `https://api.whatsapp.com/send?phone=5493735539909&text=
        Nueva%20Orden%20desde%20el%20sitio:
        URL%20del%20Diseño: ${imgUrl}
        Titulo:${title}
        Categoria:${category}
        Precio: $${price}.00 USD
        Email%20de%20Cliente: ${email}`;

        window.open(API, '_blank')
    }

    return (
        <form onSubmit={onSubmitBuy}>
            <Grid
                container
                boxShadow="1px 2px 4px 4px rgba(0, 0, 0, 0.2),0px 4px 5px 4px rgba(0, 0, 0, 0.14),0px 1px 10px 4px rgba(0, 0, 0, 0.12)"
                position="fixed"
                minHeight="120px"
                width="100%"
                bgcolor="white"
                zIndex={1}
                bottom={0}
                left={0}
            >
                <Container>
                    <Grid
                        container
                        height="100%"
                        gap={{ xs: 3, md: 0 }}
                        alignItems="center"
                        padding={{ xs: 2, md: 0 }}
                        justifyContent={{ xs: "center", md: "space-between" }}
                    >

                        <Grid item display="flex" gap={1.5}>
                            <InfoOutlined color="action" />
                            <Grid item>
                                <Typography fontWeight={300}>Have some questions?</Typography>
                                <Link component={RouterLink} color="secondary" to="/faq" underline="hover">Read before buying</Link>
                            </Grid>
                        </Grid>

                        <Grid item display="flex" gap={1.5}>
                            <EmailOutlined color="action" />
                            <Grid item>
                                <InputLabel>
                                    Delivery E-mail:
                                </InputLabel>
                                <Input
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter Your e-mail"
                                    onChange={onInputchange}
                                />
                            </Grid>
                        </Grid>

                        <Grid item display={{ xs: "none", md: "block" }}>
                            <Badge badgeContent={1} color="secondary">
                                <LocalMallOutlined color="action" sx={{ fontSize: "40px" }} />
                            </Badge>
                        </Grid>

                        <Grid item display="flex" alignItems="center" gap={4}>
                            <Grid>
                                <Typography textAlign="end" fontSize={15}> Total sum: </Typography>
                                <Typography color="#49b455" fontSize={29} lineHeight={1}>
                                    {price === "0" ? "Free" : `$ ${price}.00`}
                                </Typography>
                            </Grid>
                            <button className="green_button" type="submit">
                                buy now
                            </button>
                        </Grid>

                    </Grid>
                </Container >
            </Grid >
        </form >
    )
}
