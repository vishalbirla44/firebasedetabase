import React from 'react'
import {  getFirestore,collection,addDoc,doc,getDoc,query,getDocs,where,updateDoc } from 'firebase/firestore'
import { app } from './Firebase'


const firestore = getFirestore(app)



const App = () => {

const writedata = async () => {
  const result =  await addDoc(collection(firestore, "cities"),{
    name:'dehi',
    pinCode:12121,
    long: 2322
  })
  console.log('result' ,result)
}

const subcollection = async () => {
await addDoc(collection(firestore,'cities/RSApd5E6dakywcr9ocUv/place'),{
  name:"krishnadas",
  Number: 2232
})
}

const getDocument = async () => {
  const ref = doc(firestore,'cities/RSApd5E6dakywcr9ocUv')
  const snap = await getDoc(ref)

  console.log(snap.data())



}


const getdocumentbyquery = async () => {
   const collectionref = collection(firestore,'cities')
   const q = query(collectionref,where('long', "==",222 ))
   const sna = await getDocs(q)
   sna.forEach((deta)=>console.log(deta.data()))

}


const updatedocument =  async() =>{
const docref = doc(firestore,'cities', 'RSApd5E6dakywcr9ocUv')
await updateDoc(docref,{
  name: "new mumbai"
})
 }

    return (<>
<div>App</div>
    <button onClick={writedata}> put data</button>
    <button onClick={subcollection}> put subdeta</button>
    <button onClick={getDocument}> getDocument</button>
    <button onClick={getdocumentbyquery}> getdocumentbyquery</button>
    <button onClick={updatedocument}> updatedocument</button>
    </>
  )
}

export default App