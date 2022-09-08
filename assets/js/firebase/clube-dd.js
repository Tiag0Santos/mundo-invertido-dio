import app from "./app.js";
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToClubeDd(subscription) {
   const db = getFirestore(app)
   const clubeDdCollection = collection(db, 'clube-dd')
   const docRef = await addDoc(clubeDdCollection, subscription)
   return docRef.id
}

export async function  getClubeDdSubscriptions(){
    const db = getFirestore(app)
    const clubeDdCollection = collection(db, 'clube-dd')
    const clubeDdCollectionSnapshot = await getDocs(clubeDdCollection);
    const subscriptions = clubeDdCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions
}
