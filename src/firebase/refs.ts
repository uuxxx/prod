import { doc } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { firestore, storage } from '.';

const avatarsRef = ref(storage, 'avatar');

export const getUserRef = (uid: string) => doc(firestore, 'users', uid);
export const getUserArticlesRef = (uid: string) => doc(firestore, 'users', uid, 'articles');
export const getAvatarsRef = (uid: string) => ref(avatarsRef, uid);
