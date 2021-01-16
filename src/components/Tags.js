import React from "react";

const Tags = ({ imageId, tags }) => {
  console.log(tags);
  return (
    <div className="px-6 py-4">
      {tags.map((tag) => (
        <span
          key={imageId + tag}
          className="inline-block bg-gray-200 rounded-full my-1 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
