import React from "react";

const UploadWidget = ({ data }) => {
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "mdflynn",
      uploadPreset: "xilykym7",
    },
    (error, result) => {
      if (result.event === "success") {
        data(
          result.info.secure_url,
          `An image of ${result.info.original_filename}`
        );
      }
    }
  );

  const showWidget = (widget, event) => {
    event.preventDefault();
    widget.open();
  };

  return (
    <div id="photo-form-container">
      <button onClick={(event) => showWidget(widget, event)}>
        Upload Photo
      </button>
    </div>
  );
};

export default UploadWidget;
