import { useState, FormEvent, ChangeEvent, } from 'react';
import { useUploadImage } from './useUploadImage';

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "../Firebase/config";

export const useForm = <T extends Object>(initialState: T) => {

    const [formData, setFormData] = useState(initialState);
    const [imageURL, setImageURL] = useState<string>("");

    const onInputchange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const onDateChange = (date: any) => {
        setFormData({ ...formData, date: date.format('DD/MM/YYYY') })
    }

    const uploadImg = async ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (!target.files) return
        const nameFile = target.files[0].name;
        const storageRef = ref(FirebaseStorage, nameFile);
        await uploadBytes(storageRef, target.files[0]);

        const pathReference = ref(FirebaseStorage, `gs://bebo-app-7e69e.appspot.com/${nameFile}`);
        await getDownloadURL(pathReference).then(url => setImageURL(url))
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log({
            ...formData,
            imageURL,
        });
    }

    return {
        ...formData,
        onDateChange,
        onInputchange,
        uploadImg,
        onSubmit
    }
}
