import { useState, ChangeEvent } from 'react';

import { Dayjs } from 'dayjs';
import { v4 } from "uuid";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "../Firebase/config";

import { SelectChangeEvent } from '@mui/material';

export const useForm = <T extends Object>(initialState: T) => {

    const [formData, setFormData] = useState(initialState);

    const onInputchange = (event: ChangeEvent<any> | SelectChangeEvent<any>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const onDateChange = (date: Dayjs) => {
        setFormData({ ...formData, date: date.format('DD/MM/YYYY') })
    }

    const uploadFile = async (imgFile: File | null) => {
        const storageRef = ref(FirebaseStorage, v4());
        if (!imgFile) return;
        await uploadBytes(storageRef, imgFile)
        const imgUrl = await getDownloadURL(storageRef);
        return imgUrl
    }

    return {
        ...formData,
        onDateChange,
        onInputchange,
        uploadFile,
        formData,
        setFormData,
    }
}
