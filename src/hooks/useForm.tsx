import { useState, ChangeEvent, FormEvent } from 'react';
import { useCustomDispatch } from './useRedux';

import { uploadImage, DisplayAlert } from '../Admin/Helpers';
import { startLoadPost } from '../redux/thuks';
import { Dayjs } from 'dayjs';

import { addDoc, collection } from 'firebase/firestore/lite';
import { FirebaseDB } from "../Firebase/config";

import { SelectChangeEvent } from '@mui/material';

export const useForm = <T extends Object>(initialState: T) => {

    const dispatch = useCustomDispatch();

    const [formState, setFormState] = useState(initialState);
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const onInputchange = (event: ChangeEvent<any> | SelectChangeEvent<any>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value })
    }

    const onDateChange = (date: Dayjs) => {
        setFormState({ ...formState, date: date.format('DD/MM/YYYY') })
    }

    const onSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return
        const previewImgUrl = URL.createObjectURL(event.target.files[0]);
        localStorage.setItem("preview", previewImgUrl);
        setImgFile(event.target.files[0])
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        try {
            const imgUrl = await uploadImage(imgFile);
            const queryRef = collection(FirebaseDB, "designs");
            await addDoc(queryRef, { ...formState, imgUrl });
            dispatch(startLoadPost());
            setFormState(initialState);
            setSubmitted(false);
            DisplayAlert("success", "Publicado con exito.")
        } catch (error) {
            setSubmitted(false);
            DisplayAlert("error", "Algo ha salido mal.")
        }
    }

    return {
        onSubmit,
        submitted,
        formState,
        onDateChange,
        onSelectImage,
        onInputchange,
    }
}
