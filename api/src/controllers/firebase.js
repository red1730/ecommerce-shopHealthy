const firebaseConfig = require('../credenciales')
const { getFirestore, getDocs } =  require('firebase/firestore')
// import { get } from "../routes/producto";

const app = initializeApp(firebaseConfig);

// Get a list of cities from your database
async function getProductos() {
    const db = getFirestore(app);
    const productos = collection(db, 'Productos');
    const productosSnapshot = await getDocs(productos);
    const listaProductos = productosSnapshot.docs.map(doc => doc.data());
    return listaProductos;
  }

  module.exports = getProductos

const ref = firebase.firestore().doc('Productos/OD1ll5puJtGBK651GUQI');
ref.onSnapshot((doc) => {
  const data = doc.data();
  // ...
});