import { FormEvent, useState } from 'react';

import { useCustomDispatch, useForm } from '../../hooks';;
import { startLoadPost } from '../../redux/thuks';

import { addDoc, collection } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../Firebase/config';

import { Preview, SelectCategory, SelectDate, UploadImage } from '../Components';
import { Grid, TextField, Typography, Divider, InputAdornment, Button } from '@mui/material';
import { AttachMoney, CloudUpload, CreateOutlined, Visibility } from '@mui/icons-material';
import dayjs from 'dayjs';

const initialState = {
    title: "",
    date: dayjs().format('DD/MM/YYYY'),
    price: "",
    category: "",
}

export const NewDesign: React.FC = () => {

    const dispatch = useCustomDispatch();

    const { formData, setFormData, category, uploadFile, title, price, onInputchange, onDateChange } = useForm(initialState);

    const [previewImg, setPreviewImg] = useState<string>("");
    const [selectedImg, setSelectedImg] = useState<string>("");
    const [uploadImg, setUploadImg] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true)
        try {
            const imgUrl = await uploadFile(uploadImg);
            const queryRef = collection(FirebaseDB, "designs");
            await addDoc(queryRef, { ...formData, imgUrl });
            dispatch(startLoadPost());
            setSubmitted(false)
            setFormData(initialState)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container>

                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <Grid container alignItems="center" gap={1}>
                            <Typography variant='subtitle1' fontSize={25}> Cargar nuevo Diseño </Typography>
                            <CloudUpload fontSize='large' />
                        </Grid>
                        < Divider />
                    </Grid>

                    <Grid item xs={5}>
                        <Grid container alignItems="center" gap={1}>
                            <Typography variant='subtitle1' fontSize={25}> Vista previa </Typography>
                            <Visibility fontSize='large' />
                        </Grid>
                        < Divider />
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={7} mt={2}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <UploadImage selectedImg={selectedImg} setPreviewImg={setPreviewImg} setSelectedImg={setSelectedImg} setUploadImg={setUploadImg} />
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
                                <Button type='submit' disabled={submitted} variant='contained' sx={{ padding: "20px" }}>
                                    Publicar
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={5}>
                        <Preview formData={formData} selectedImg={selectedImg} previewImg={previewImg} />
                    </Grid>
                </Grid>

            </Grid>
        </form >
    )
}
