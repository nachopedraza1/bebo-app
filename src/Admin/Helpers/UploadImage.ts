import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "../../Firebase/config";
import { v4 } from "uuid";

export const uploadImage = async (imgFile: File | null) => {
    const storageRef = ref(FirebaseStorage, v4());
    if (!imgFile) return;
    await uploadBytes(storageRef, imgFile)
    const imgUrl = await getDownloadURL(storageRef);
    return imgUrl
}