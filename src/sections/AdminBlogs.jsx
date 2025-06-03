import { useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Cloudinary from "../components/Utils/Cloudutils/Cloudinary";
import { BlogsFetches } from "../components/Utils/HttpUtils/fetches/BlogsFetches";
import { FaBeer, FaCaretUp, FaEdit, FaTrash } from "react-icons/fa";
// Insert Image(selected by user) to quill
const insertToEditor = (url, quill) => {
  const range = quill.getSelection();
  const position = range ? range.index : 0; // Fallback to beginning
  quill.insertEmbed(position, "image", url);
  quill.setSelection(position + 1);
};

// Upload Image to Image Server such  Cloudinary
const saveToServer = async (file, quill) => {
  const imageUrl = await Cloudinary(file);
  insertToEditor(imageUrl, quill);
};

const selectLocalImage = async (quill) => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    await saveToServer(file, quill);
  };
};

function getExcerptFromDelta(delta, maxLength = 200) {
  let text = "";

  delta.ops.forEach((op) => {
    if (typeof op.insert === "string") {
      text += op.insert;
    }
  });

  // Trim to maxLength (optionally, clean up line breaks)
  text = text.replace(/\n+/g, " ").trim();

  if (text.length > maxLength) {
    text = text.substring(0, maxLength).trim() + "...";
  }

  return text;
}

export default function BlogUploadPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { quill, quillRef } = useQuill();
  const [allBlogs, setAllBlogs] = useState([""]);
  const blogFetches = new BlogsFetches();
  const [mode, setMode] = useState({
    create: true,
    _id: null,
  });
  const { create, _id } = mode;


  const [currentlyViewing, setCurrentlyViewing] = useState({
    open: false,
    _idView: null,
  });
  const { open, _idView } = currentlyViewing;

  
  const onSubmit = async () => {
    setIsLoading(true);
    const payload = {
      contentHtml: quill.root.innerHTML,
      contentDelta: JSON.stringify(quill.getContents()),
      excerpt: getExcerptFromDelta(quill.getContents()),
    };
    const res = await blogFetches.CreateBlogV2(payload);
    alert(res.message);
    // console.log(`create blog res==>`, res.message);
    setIsLoading(false);
    GetAllBlogs();
  };

  const GetAllBlogs = async () => {
    const res = await blogFetches.GetAllBlogs({ page: 1, pageSize: 10 });
    if (res.status == true) {
      setAllBlogs(res.data);
    }
  };

  const DeleteBlog = async (_id) => {
    const confimTodelete = confirm("are you sure you want to delete blog");
    console.log(`confrm==>`, confimTodelete);
    if (confimTodelete) {
      const res = await blogFetches.DeleteBlogs(_id);
      alert(res.message);
    }
    GetAllBlogs();
  };

  // UPDATE BLOG
  const setContentToEditorToUpdate = (content, _id) => {
    quill.clipboard.dangerouslyPasteHTML(content);
    setMode({
      create: false,
      _id: _id,
    });
  };

  const EditBlog = async () => {
    setIsLoading(true);
    const payload = {
      _id,
      contentHtml: quill.root.innerHTML,
      contentDelta: JSON.stringify(quill.getContents()),
      excerpt: getExcerptFromDelta(quill.getContents()),
    };

    const confimToUpdate = confirm("are you sure you want to edit blog");
    if (confimToUpdate) {
      const res = await blogFetches.UpdatBlogs(payload);
      alert(res.message);
      if (res.status) {
        setMode({
          create: true,
          _id: null,
        });
        quill.clipboard.dangerouslyPasteHTML(
          "<h4>what is on your mind today</h4>"
        );
      }
    }
    setIsLoading(false);
    GetAllBlogs();
  };

  useEffect(() => {
    GetAllBlogs();
  }, []);
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(
        "<h4>what is on your mind today</h4>"
      );
      quill.getModule("toolbar").addHandler("image", async () => {
        setIsLoading(true);
        await selectLocalImage(quill);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      });
    }
  }, [quill]);

  const ButtonCondition = ({ index }) => {
    if (!open) {
      return (
        <button
          className="px-1 py-2 cursor-pointer"
          onClick={() => {
            // console.log(`i clicked ${index} and ${!open ? "open" : "close"}`);
            setCurrentlyViewing({
              open: true,
              _idView: index,
            });
          }}
        >
          See More
        </button>
      );
    }
    if (open && _idView == index) {
      return (
        <button
          className="px-1 py-2 cursor-pointer"
          onClick={() => {
            // console.log(`i clicked ${index} and ${!open ? "open" : "close"}`);
            setCurrentlyViewing({
              open: false,
              _idView: index,
            });
          }}
        >
          See Less
        </button>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 p-8 mt-20 flex flex-col md:flex-row">
      {/* Editor Section */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Write a New Blog
        </h2>
        <div className="mb-6 h-[300px]">
          <div ref={quillRef} />
        </div>
        <button
          onClick={create ? onSubmit : EditBlog}
          disabled={isLoading}
          className={`${
            isLoading
              ? "bg-opacity-50 bg-red-600"
              : " bg-yellow-500 hover:bg-yellow-600"
          } w-full text-white font-semibold py-2 px-4 rounded-md transition duration-200 mt-10`}
        >
          {isLoading
            ? "Uploading Blog ..."
            : create
            ? "Submit Blog"
            : "Update Blog"}
        </button>
      </div>

      {/* Preview Section */}
      <div className="w-full md:w-1/3">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Live Preview
        </h2>
        <div className="space-y-6 overflow-y-auto max-h-[80vh] pr-2">
          {allBlogs.map(
            ({ contentHtml, contentDelta, excerpt, _id }, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-md shadow hover:shadow-lg transition duration-300 border"
              >
                <div className="flex flex-row gap-10 translate-x-3/4 transform w-full mb-6">
                  <FaEdit
                    onClick={() => setContentToEditorToUpdate(contentHtml, _id)}
                  />
                  <FaTrash onClick={() => DeleteBlog(_id)} />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: contentHtml || "" }}
                  className={`${
                    open && _idView == index ? "h-full" : "max-h-[300px]"
                  } overflow-hidden`}
                />
                <ButtonCondition index={index} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
