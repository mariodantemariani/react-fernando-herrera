const apiKey = "fTt8q1qIDlo6mEPmnDQvS5a9K6vsdCwm";
const endPoint = "http://api.giphy.com/v1/gifs/random?api_key=";

const peticion = fetch(`${endPoint}${apiKey}`);

peticion
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
