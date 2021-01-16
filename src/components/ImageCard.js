import React from "react";
import Tags from "./Tags";

const ImageCard = ({ image }) => {
  console.log(image);
  const { webformatURL, user, views, downloads, likes, tags } = image;
  const tags_array = tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {views}
          </li>
          <li>
            <strong>Downloads: </strong> {downloads}
          </li>
          <li>
            <strong>Likes: </strong> {likes}
          </li>
        </ul>
      </div>
      <Tags imageId={image.id} tags={tags_array} />
    </div>
  );
};

export default ImageCard;
