import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyDQwmL_XZUI41wg6_Fc0ketsUqtuGIzyjM",
    authDomain: "crown-db-3dbfe.firebaseapp.com",
    projectId: "crown-db-3dbfe",
    storageBucket: "crown-db-3dbfe.appspot.com",
    messagingSenderId: "194733792620",
    appId: "1:194733792620:web:f7c60785ad808352ef2749"
};
// Initialize Firebase


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();


        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })


        } catch (error) {

            console.log('error creating user', error.message);
        }

    }
    return userRef;

}


export const addCollection = async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(object => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object);
    }
    )

    return await batch.commit();

}

firebase.initializeApp(firebaseConfig);

export const convertCollectionSnapShotToMap = (collections) => {

    const transformCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title: title,
            items: items,
        }
    })

    return transformCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    })

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;