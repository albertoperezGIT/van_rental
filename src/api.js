import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCDxb7aAPzjPJq4F2iRk2JRrtJnYNGmVgo",
  authDomain: "van-rental-93de3.firebaseapp.com",
  projectId: "van-rental-93de3",
  storageBucket: "van-rental-93de3.appspot.com",
  messagingSenderId: "429561468448",
  appId: "1:429561468448:web:2c3e6dfdaa32ad3081ce45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//Refactor the fetch functions
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId","==","123") )
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}