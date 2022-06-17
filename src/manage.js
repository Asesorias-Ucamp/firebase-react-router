import { 
  collection, 
  getDocs, 
  query, 
  addDoc, 
} from "firebase/firestore";
import { db } from './firebase';

const itemsCollection = collection(db, 'agenda');

export const createItem = (obj) => {
  return addDoc(itemsCollection, obj).id
}

export const getItems = async() => {
  const result = await getDocs(query(itemsCollection))
  console.log(getArrayFromCollection(result))
  return getArrayFromCollection(result)
}

const getArrayFromCollection = (collection) => {
  return collection.docs.map(doc => {
    return { ...doc.data(), id: doc.id}
  })
}