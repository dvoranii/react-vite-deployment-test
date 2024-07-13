import Flickity from "react-flickity-component";

/* eslint-disable react/prop-types */

const flickityOptions = {
  initialIndex: 0,
};

function ImageCarouselComponent({ galleryImages }) {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {galleryImages.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index}`} />
      ))}
    </Flickity>
  );
}

export default ImageCarouselComponent;
