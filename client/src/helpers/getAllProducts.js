export const getAllProducts = async()=>{
    const allProducts = await (await fetch('https://31.220.49.30/tresmiluno/productos')).json();
    return allProducts;
}