import { Divider, Grid, Typography } from '@mui/material';

interface Preview {
    formState: {
        title: string,
        category: string,
        date: string,
        price: string,
    },
}

export const Preview: React.FC<Preview> = ({ formState }) => {

    const previewImg = localStorage.getItem("preview") || undefined;

    const { category, date, price, title } = formState;

    return (
        <Grid container mt={2} key={previewImg} className='animate__animated animate__fadeIn'>
            {!!previewImg &&
                <>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Typography > Titulo: <span style={{ fontWeight: 700, marginLeft: 5 }}>{title}</span> </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography> Categoria:<span style={{ fontWeight: 700, marginLeft: 5 }}>{category}</span>  </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography> Fecha:<span style={{ fontWeight: 700, marginLeft: 5 }}> {date}</span> </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography> Precio: <span style={{ fontWeight: 700, marginLeft: 5 }}>{price} </span> USD</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} mt={2}>
                        <img src={previewImg} width="100%" />
                    </Grid>
                </>
            }
        </Grid >
    )
}
