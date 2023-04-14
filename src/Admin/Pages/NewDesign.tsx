import { useForm } from '../../hooks';;

import { Preview, SelectCategory, SelectDate, UploadImage } from '../Components';
import { Grid, TextField, Typography, Divider, InputAdornment, Button } from '@mui/material';
import { AttachMoney, CloudUpload, CreateOutlined, Visibility } from '@mui/icons-material';
import dayjs from 'dayjs';

const formData = {
    title: "",
    date: dayjs().format('DD/MM/YYYY'),
    price: "",
    category: "",
}

export const NewDesign: React.FC = () => {

    const { onSubmit, submitted, onSelectImage, formState, onInputchange, onDateChange } = useForm(formData);

    const { category, price, title } = formState;

    return (
        <form onSubmit={onSubmit}>
            <Grid container>

                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <Grid container alignItems="center" gap={1}>
                            <Typography variant='h6' fontSize={30}> Cargar nuevo Diseño </Typography>
                            <CloudUpload fontSize='large' />
                        </Grid>
                        < Divider />
                    </Grid>

                    <Grid item xs={5}>
                        <Grid container alignItems="center" gap={1}>
                            <Typography variant='h6' fontSize={30}> Vista previa </Typography>
                            <Visibility fontSize='large' />
                        </Grid>
                        < Divider />
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={7} mt={2}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <UploadImage onSelectImage={onSelectImage} />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    variant='outlined'
                                    name='title'
                                    value={title}
                                    label="Titulo"
                                    onChange={onInputchange}
                                    placeholder='Titulo principal del diseño'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <CreateOutlined />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <SelectCategory category={category} onInputchange={onInputchange} />
                            </Grid>

                            <Grid item xs={6}>
                                <SelectDate onDateChange={onDateChange} />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    variant='outlined'
                                    name='price'
                                    label="Precio"
                                    type='number'
                                    value={price}
                                    onChange={onInputchange}
                                    placeholder='Precio del diseño'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                < AttachMoney />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} textAlign="end">
                                <Button disabled={submitted} type='submit' variant='contained' sx={{ padding: "20px" }}>
                                    Publicar
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={5}>
                        <Preview formState={formState} />
                    </Grid>
                </Grid>

            </Grid>
        </form >
    )
}
