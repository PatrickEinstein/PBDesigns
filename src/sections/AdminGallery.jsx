import React, { useCallback, useEffect, useState } from "react";
import Cloudinary from "../components/Utils/Cloudutils/Cloudinary";
import useToast from "../components/Utils/ComponentUtils/Toast";
import { GalleryFetches } from "../components/Utils/HttpUtils/fetches/GalleryFetches";
import Loader from "../components/Utils/ComponentUtils/Loader";
import MultiDropZone from "../components/Utils/ComponentUtils/MultiDropZone";
import { IoTrashBin } from "react-icons/io5";
import PicOrVidRenderer from "../components/Utils/MediaRenderer";

const AdminGallery = () => {
  const galleryService = new GalleryFetches();
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingMode, setEditingMode] = useState(false);
  const [images, setImages] = useState([]);
  const [imagesFiles, setImagesFiles] = useState([]);
  const toast = useToast();

  const paginationParams = { page: "1", pageSize: "10" };

  const fetchGallery = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await galleryService.GetAllGallery(paginationParams);
      console.log(res);
      if (res.status) {
        setGallery(res.data);
        toast(res.message, "info");
      }
    } catch (err) {
      toast("Failed to fetch gallery", "error");
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  const handleCreateGallery = async () => {
    if (!imagesFiles.length) {
      toast("Please upload at least one image", "error");
      return;
    }

    setIsLoading(true);
    try {
      const imageUrls = await Cloudinary(imagesFiles);
      if (imageUrls) {
        await Promise.all(
          imageUrls.map(async (url) =>
            galleryService.CreateGalleryApi({ imageUrl: url })
          )
        );
        toast("Gallery created successfully!", "success");
        fetchGallery();
      }
    } catch (error) {
      toast("Error uploading images", "error");
    } finally {
      setIsLoading(false);
      setEditingMode(false);
      setImages([]);
      setImagesFiles([]);
    }
  };

  const handleDeleteGallery = async (_id) => {
    setIsLoading(true);
    try {
      const response = await galleryService.DeleteGallery(_id);
      if (response.status) {
        toast("Gallery deleted successfully", "success");
        fetchGallery();
      } else {
        toast(response.message, "error");
      }
    } catch (error) {
      toast("Error deleting gallery", "error");
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-semibold mb-8 bg-[#03045E]">
        Admin Gallery Management
      </h1>
      <Loader isLoading={isLoading} />
      {!editingMode ? (
        <>
          <button
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white mb-10 px-4 py-2 rounded-md"
            onClick={() => setEditingMode(true)}
          >
            Add New Gallery
          </button>
          <div className="grid grid-cols-2 gap-6 relative">
            {gallery.length > 0 ? (
              gallery.map(({ _id, picture }, index) => (
                <div
                  key={_id}
                  className="bg-white p-1 shadow-md rounded-lg flex flex-col gap-2"
                >
                  <div className="flex justify-between absolute items-center">
                    <button
                      onClick={() => handleDeleteGallery(_id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <IoTrashBin size={20} />
                    </button>
                  </div>
==
                  <PicOrVidRenderer picture={picture} _id={_id} />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No galleries available.
              </p>
            )}
          </div>
        </>
      ) : (
        <div>
          <MultiDropZone
            images={images}
            setImages={setImages}
            imageFiles={imagesFiles}
            setImagesFiles={setImagesFiles}
          />
          <button
            className="mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            onClick={handleCreateGallery}
          >
            Upload
          </button>
          <button
            className="mt-2 text-gray-500 underline"
            onClick={() => setEditingMode(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
