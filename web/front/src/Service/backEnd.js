
const get = async (url) => {
    let dataR ={err:"error"};
     await fetch(url,{
        method: "GET",mode: 'no-cors'})
        .then((res) => res.json())
        .then((data)=> dataR = data)
        .catch((err) => dataR.err = err);

        return dataR;
    

}

export default {get};