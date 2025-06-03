import { useEffect, useState, useCallback } from "react";
import { BlogsFetches } from "../components/Utils/HttpUtils/fetches/BlogsFetches";

export default function BlogPage() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentlyViewing, setCurrentlyViewing] = useState({
    open: false,
    _idView: null,
    content: "",
  });

  const fetchBlogs = useCallback(async () => {
    try {
      const blogFetches = new BlogsFetches();
      const res = await blogFetches.GetAllBlogs({ page: 1, pageSize: 10 });
      if (res.status) {
        setAllBlogs(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const openModal = (index, contentHtml) => {
    setCurrentlyViewing({
      open: true,
      _idView: index,
      content: contentHtml,
    });
  };

  const closeModal = () => {
    setCurrentlyViewing({
      open: false,
      _idView: null,
      content: "",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-12 bg-[#03045E] min-h-screen px-4">
      {allBlogs.map(({ contentHtml, _id }, index) => (
        <div
          key={_id || index}
          className="max-h-[250px] p-4 bg-white rounded-md shadow hover:shadow-lg transition duration-300 border"
        >
          <div
            dangerouslySetInnerHTML={{ __html: contentHtml || "" }}
            className="max-h-[200px] overflow-hidden"
          />
          <button
            className="mt-2 text-blue-600 hover:underline font-medium"
            onClick={() => openModal(index, contentHtml)}
          >
            See More
          </button>
        </div>
      ))}

      {currentlyViewing.open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-3 text-red-600 text-lg font-bold"
              onClick={closeModal}
            >
              ✕
            </button>
            <div
              dangerouslySetInnerHTML={{ __html: currentlyViewing.content }}
              className="prose max-w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
