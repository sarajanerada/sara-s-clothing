import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAp0xG9ABa2vCY17PxuXbiRtWbINzwFfRk",
    authDomain: "sara-db.firebaseapp.com",
    projectId: "sara-db",
    storageBucket: "sara-db.appspot.com",
    messagingSenderId: "671833029771",
    appId: "1:671833029771:web:a9ec912434c265e3cd288e",
    measurementId: "G-X86RK7GJ0N"
};


export const createUserProfile = async(userAuth , additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName , email} = userAuth;
    const createdDate = new Date ();

    try {  
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      })
     }
    catch (error) {
     console.log(('Error creating data') , error.message); 
    }

  }


  return userRef;

}

export const addCollectionsAndDocuments = async (collectionKey , objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef , obj);
  });

  return await batch.commit();
}  
// - add shop data into the database

export const convertCollectionSnapshotToMaps = ( collections ) => {

  const transformedCollection = collections.docs.map( doc => {

    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title).toLowerCase(),
      id: doc.id,
      title,
      items
    }})

    return transformedCollection.reduce( (accumulator , collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      
      return accumulator;
     
    }, {}
      
    )

  
}

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt : 'select_account'
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase


