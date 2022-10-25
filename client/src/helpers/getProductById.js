export const getProductById = async(id)=>{
    const url = `https://back.dkndrd.com/tresmiluno/productos/${id}`
    const product = await (await fetch(url)).json();
    return product;
}