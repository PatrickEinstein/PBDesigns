import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";

interface MultiDropZoneProps {
  images: string[];
  imageFiles: File[];
  setImages: (images: string[]) => void;
  setImagesFiles: (images: File[]) => void;
}

const MultiDropZone: React.FC<MultiDropZoneProps> = ({
  images,
  setImages,
  imageFiles,
  setImagesFiles,
}) => {
  const dropzoneRef = useRef<HTMLElement | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
    setImagesFiles([...imageFiles, ...acceptedFiles]);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    imageFiles.splice(index, 1);
    const newImagesFiles = [...imageFiles];
    setImages(newImages);
    setImagesFiles(newImagesFiles);
  };

  const handleClick = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.click();
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    // acceptedFiles: ".jpg, .jpeg, .png, .mp4, .mov, .avi",
    multiple: true,
    onDrop,
  });
  const renderFilePreview = (file: File, previewUrl: string, index: number) => {
    const fileType = file.type;

    if (fileType.startsWith("image/")) {
      return (
        <img
          src={previewUrl}
          alt={`File Preview ${index}`}
          className="object-contain h-32 w-full"
        />
      );
    } else if (fileType.startsWith("video/")) {
      return (
        <video controls className="object-contain h-32 w-full">
          <source src={previewUrl} type={fileType} />
          Your browser does not support the video tag.
        </video>
      );
    } else if (fileType === "application/pdf") {
      return (
        <embed
          src={previewUrl}
          type="application/pdf"
          className="object-contain h-32 w-full"
        />
      );
    } else if (
      fileType === "text/csv" ||
      fileType === "application/vnd.ms-excel"
    ) {
      return (
        <div className="flex items-center justify-center h-32 w-full bg-gray-200">
          <p className="text-center text-gray-600">CSV File</p>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center h-32 w-full bg-gray-200">
          <p className="text-center text-gray-600">Unsupported file type</p>
        </div>
      );
    }
  };

  return (
    <section
      {...getRootProps()}
      ref={dropzoneRef}
      className=" px-2 py-3 rounded-md cursor-pointer hover:border-blue-500"
    >
      <input {...getInputProps()} />
      {images.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 z-100">
          {images.map((fileUrl, index) => (
            <div key={index} className="relative group">
              {renderFilePreview(imageFiles[index], fileUrl, index)}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the click from propagating to the section
                  removeImage(index);
                }}
                className="absolute bottom-1/4 left-0 bg-red-600 text-white text-xs p-1 rounded-full opacity-1 group-hover:opacity-50"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-32">
          <button onClick={handleClick}>
            <h2 className="text-gray-500">add images</h2>
          </button>
        </div>
      )}
    </section>
  );
};

export default MultiDropZone;
