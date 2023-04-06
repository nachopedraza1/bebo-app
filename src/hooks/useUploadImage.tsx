import { ChangeEvent, useState } from "react"

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "../Firebase/config";


export const useUploadImage = (title: string) => {

    const [imageURL, setImageURL] = useState(title);

    const uploadImg = async ({ target }: ChangeEvent<HTMLInputElement>) => {

        if (!target.files) return;
        const storageRef = ref(FirebaseStorage, title);
        await uploadBytes(storageRef, target.files[0]);

        const pathReference = ref(FirebaseStorage, `gs://red-pirata.appspot.com/${title}`);
        getDownloadURL(pathReference).then(url => setImageURL(url))
    }

    return {
        uploadImg,
        imageURL,
    }
}