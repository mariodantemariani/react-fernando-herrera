const apiKey = "fTt8q1qIDlo6mEPmnDQvS5a9K6vsdCwm";
const endPoint = "http://api.giphy.com/v1/gifs/random?api_key=";

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async () => {
  try {
    const resp = await fetch(`${endPoint}${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
