import React, { useCallback, useEffect, useState } from "react";
import useToast from "../components/Utils/ComponentUtils/Toast";
import { GalleryFetches } from "../components/Utils/HttpUtils/fetches/GalleryFetches";
import Loader from "../components/Utils/ComponentUtils/Loader";
import { IoClose, IoArrowBack, IoArrowForward } from "react-icons/io5";

const Gallery = () => {
  const galleryService = new GalleryFetches();
  const [gallery, setGallery] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [loadingMore, setLoadingMore] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const [paginationParams, setPaginationParams] = useState(1);
  const toast = useToast();

  // Fetch initial gallery data
  const fetchGallery = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await galleryService.GetAllGallery(
        paginationParams.toString()
      );
      if (res.status) {
        setGallery(res.data);
        toast(res.message, "info");
      }
    } catch (err) {
      toast("Failed to fetch gallery", "error");
    } finally {
      setIsLoading(false);
    }
  }, [paginationParams, toast]);

  // Fetch more gallery data on scroll
  const fetchMoreGallery = useCallback(async () => {
    if (loadingMore) return; // Prevent duplicate calls
    setLoadingMore(true);
    try {
      const res = await galleryService.GetAllGallery(
        (paginationParams + 1).toString()
      );
      if (res.status && res.data.length > 0) {
        setGallery((prev) => [...prev, ...res.data]); // Append new data
        setPaginationParams((prevPage) => prevPage + 1); // Increment page
      }
    } catch (err) {
      toast("Failed to fetch more gallery data", "error");
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, paginationParams, toast]);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 50 &&
        !loadingMore
      ) {
        fetchMoreGallery();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMoreGallery, loadingMore]);

  // Fetch initial gallery data on mount
  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  // Modal handlers
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-white-700 text-3xl font-semibold mt-20 mb-8">
        Let The Gallery Speak
      </h1>
      <Loader isLoading={isLoading} />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {gallery.length > 0 ? (
          gallery.map(({ _id, picture }, index) => (
            <div
              key={_id}
              className="bg-white p-1 max-h-[400px] shadow-md rounded-lg gap-2 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                alt={_id}
                src={picture}
                className="h-full w-full object-fill"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No galleries available.</p>
        )}
      </div>
      {loadingMore && (
        <div className="text-center mt-4">
          <p>Loading more...</p>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              <IoClose className="font-extrabold text-5xl" />
            </button>
            <img
              src={gallery[currentImageIndex].picture}
              alt="Modal Content"
              className="min-h-[80vh] w-full object-contain"
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={showPreviousImage}
            >
              <IoArrowBack className="font-extrabold text-5xl" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={showNextImage}
            >
              <IoArrowForward className="font-extrabold text-5xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
