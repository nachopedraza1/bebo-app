import { Grid, TextField, Typography, Divider, InputLabel, Select, MenuItem, FormControl, InputAdornment, Button } from '@mui/material';
import { useForm } from '../../hooks';;

import { AttachMoney, CreateOutlined, PhotoCamera } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useRef } from 'react';


const initialState = {
    title: "",
    date: "",
    price: "",
    category: "",
    imageURL: "",
}

export const NewDesign: React.FC = () => {

    const { onSubmit, title, price, category, onInputchange, onDateChange, uploadImg } = useForm(initialState);

    const fileInput: any = useRef();

    return (
        <form onSubmit={onSubmit}>
            <Grid container>

                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <Typography variant='subtitle1' fontSize={30}> Cargar nuevo Diseño </Typography>
                        < Divider />
                    </Grid>

                    <Grid item xs={5}>
                        <Typography variant='subtitle1' fontSize={30}> Vista previa </Typography>
                        < Divider />
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={7} mt={2}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant='contained'
                                    onClick={() => fileInput.current.click()}
                                    endIcon={<PhotoCamera />}
                                    sx={{ padding: "10px" }}
                                >
                                    Subir imagen
                                </Button>
                                <input ref={fileInput} hidden accept="image/*" type="file" onChange={uploadImg} />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
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
                                <FormControl fullWidth>
                                    <InputLabel>Categoria</InputLabel>
                                    <Select
                                        name='category'
                                        value={category}
                                        label="Categoria"
                                        onChange={onInputchange}
                                    >
                                        <MenuItem value="Logos">Logos</MenuItem>
                                        <MenuItem value="Mapas">Mapas</MenuItem>
                                        <MenuItem value="Flyers">Flyers</MenuItem>
                                        <MenuItem value="Templates">Templates</MenuItem>
                                        <MenuItem value="Launchers">Launchers</MenuItem>
                                        <MenuItem value="Select Server">Select Server</MenuItem>
                                        <MenuItem value="Select Character">Select Character</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker onChange={(date) => onDateChange(date)} label="Fecha" sx={{ width: "100%" }} />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
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
                                <Button type='submit' variant='contained' sx={{ padding: "20px" }}>
                                    Publicar
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={5}>

                    </Grid>
                </Grid>

            </Grid>
        </form>
    )
}
