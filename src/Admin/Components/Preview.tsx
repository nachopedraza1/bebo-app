import { Divider, Grid, Typography } from '@mui/material';

interface Preview {
    formData: {
        title: string,
        category: string,
        date: string,
        price: string,
    },
    selectedImg: string,
    previewImg: string,
}


export const Preview: React.FC<Preview> = ({ formData, selectedImg, previewImg }) => {

    const { category, date, price, title } = formData;

    return (
        <Grid container mt={2} key={previewImg} className='animate__animated animate__fadeIn'>
            <Grid container>
                {selectedImg &&
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
                }
            </Grid>
            <Grid item xs={12} mt={2}>
                {selectedImg && <img src={previewImg} width="100%" />}
            </Grid>
        </Grid>
    )
}
