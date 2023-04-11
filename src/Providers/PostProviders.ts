import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { FirebaseDB } from "../Firebase/config";

import { Post } from "../Interfaces/interfaces";

export const getPosts = async () => {
    const queryRef = collection(FirebaseDB, "designs");
    const orderByDate = query(queryRef, orderBy("createdAt", "desc"));
    const { docs } = await getDocs(orderByDate);
    const posts = docs.map(doc => {
        return { id: doc.id, ...doc.data() }
    })
    return posts as Post[];
}