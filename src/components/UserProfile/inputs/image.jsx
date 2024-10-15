"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const ImageInput = ({ value, label, isEditActive }) => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    console.log("image", e.target.files[0]);
  };
  console.log('file',file)
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1];

        const response = await fetch(
          "http://localhost:3000/api/upload-profile-image",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fileContent: base64String,
              fileName: file.name,
            }),
          }
        );
        const data = await response.json();
        console.log("kir", data);
      };
    }
  }, [file]);

  return (
    <Button
      variant="contained"
      component="label"
      disabled={!isEditActive}
      className="w-full bg-teal-700 hover:bg-teal-600"
    >
      {file?.name ? file?.name : "آپلود عکس"}
      <input
        type="file"
        name={label}
        className="w-full"
        onChange={handleUpload}
        hidden
      />
    </Button>
  );
};

export default ImageInput;
