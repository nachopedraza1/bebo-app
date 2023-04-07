import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../Firebase/config";

import { Post } from "../Interfaces/interfaces";

export const getPosts = async () => {
    const queryRef = collection(FirebaseDB, "designs");
    const { docs } = await getDocs(queryRef);
    const posts = docs.map(doc => {
        return { id: doc.id, ...doc.data() }
    })
    return posts as Post[];
}