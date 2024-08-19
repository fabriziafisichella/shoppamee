/**
 *
 * @function fixingImages funzione che itera un array
 * @param {array} array array da cui pulisco le immagini risultanti dalla fetch
 * @returns array di immagini che si visualizzano correttamente
 */
const fixingImages = (array = []) => {

  return array
    .map((product) => {
      return {
        ...product,
        images: product.images?.map((image) =>
          image.replace('["', "").replace('"]', "")
        ),
      };
    })
    .filter((item) => !item.images?.[0]?.includes("placeimg"));
};

export default fixingImages;
