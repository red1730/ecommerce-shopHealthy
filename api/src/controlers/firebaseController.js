import firebaseConfig from "../credenciales";
import { getFirestore, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getProductos(db) {
    const productos = collection(db, 'Productos');
    const productosSnapshot = await getDocs(productos);
    const listaProductos = productosSnapshot.docs.map(doc => doc.data());
    return listaProductos;
  }