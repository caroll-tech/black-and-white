import jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';


export const vistaProcesar = async (req, res) => {

    const imagenurl = req.body.imagenurl;
   
    console.log('Url Imagen de entra --->', imagenurl);

  
    const newname = `${uuidv4().slice(0,6)}.jpg`;
  
   const newimagen = `public/assets/img/${newname}`;
    

    console.log('Url B&W Imagen --->', newimagen);

    const imagen = await jimp.read(  imagenurl    );
    imagen.color([{ apply:'greyscale', params: [100]}])
        .resize(jimp.AUTO, 350)
        .write(newimagen);
    
   
    res.render("procesar",{
       urlnewimg : newname 
      
    })

}