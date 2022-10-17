export const getAllProducts = async()=>{
    const allProducts = await (await fetch('http://localhost:3001/productos')).json();
    return allProducts;
}