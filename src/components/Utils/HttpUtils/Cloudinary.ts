


// const Cloudinary = async (image:File[]|Blob | File) => {
//   const preset_key = "ivpdncki";
//   const cloudName = "dsdkmnf0b";
//   if (Array.isArray(image)) {
//     try {
      
//       const uploadedImages = [];
//       for (const img  of image) {
//         const formData = new FormData();
//         formData.append("file", img);
//         formData.append("filepath", img.path);
//         formData.append("upload_preset", preset_key);

//         const uploadedImage = await fetch(
//           `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//           {
//             method: "POST",
//             body: formData,
//           }
//         );
//         const uploadedImageResponse = await uploadedImage.json();
//         uploadedImages.push(uploadedImageResponse.secure_url);
//       }
      
//       return uploadedImages;
//     } catch (err:any) {
//       alert(err.message);
//     }
//   } else {
//     try {
//       //this case for single image upload
      
//       const formData = new FormData();
//       formData.append("file", image);
//       formData.append("filepath", image.path);
//       formData.append("upload_preset", preset_key);

//       const uploadedImage = await fetch(
//         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const uploadedImageResponse = await uploadedImage.json();
      
//       return uploadedImageResponse.secure_url;
//     } catch (err:any) {
//       alert(err.message);
//     }
//   }
// };

// export default Cloudinary;

const Cloudinary = async (files: File[] | Blob | File) => {
  const presetKey = "ivpdncki";
  const cloudName = "dsdkmnf0b";
  const uploadEndpoint = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const uploadFile = async (file: File | Blob) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);

    const response = await fetch(uploadEndpoint, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    return result.secure_url;
  };

  try {
    if (Array.isArray(files)) {
      const uploadedFiles = await Promise.all(files.map((obj)=>uploadFile(obj)));
      console.log(`uploadedFiles==>`,uploadedFiles)
      return uploadedFiles;
    } else {
      return await uploadFile(files);
    }
  } catch (err: any) {
    console.error("Error uploading files to Cloudinary:", err);
    alert(err.message);
  }
};

export default Cloudinary;
