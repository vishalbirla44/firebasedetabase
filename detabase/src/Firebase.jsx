
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDoT3zH6Siwx9PU_u5EBIqABiipvdeF_PE",
  authDomain: "fir-deta-11bfd.firebaseapp.com",
  projectId: "fir-deta-11bfd",
  storageBucket: "fir-deta-11bfd.appspot.com",
  messagingSenderId: "15265605580",
  appId: "1:15265605580:web:98d0e223cc9914403d1f69",
  measurementId: "G-ED92PWFVP1"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);