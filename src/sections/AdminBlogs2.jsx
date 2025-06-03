// import { useEffect, useRef, useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import Cloudinary from "../components/Utils/Cloudutils/Cloudinary";
// import { BlogsFetches } from "../components/Utils/HttpUtils/fetches/BlogsFetches";

// const handleImageUpload = (quillRef) => {
//   const input = document.createElement("input");
//   input.setAttribute("type", "file");
//   input.setAttribute("accept", "image/*");
//   input.click();

//   input.onchange = async () => {
//     const file = input.files[0];
//     if (!file) return;

//     try {
//       const imageUrl = await Cloudinary(file);
//       console.log({
//         file,
//         imageUrl,
//       });
//       const editor = quillRef.current.getEditor();
//       const range = editor.getSelection(true);
//       editor.insertEmbed(range.index, "image", imageUrl);
//       editor.setSelection(range.index + 1);
//     } catch (err) {
//       console.error("Image upload failed:", err);
//     }
//   };
// };

// const CustomToolbar2 = () => (
//   <div id="custom-toolbar">
//     <select className="ql-header" defaultValue={""}>
//       <option value="1"></option>
//       <option value="2"></option>
//       <option value=""></option>
//     </select>
//     <button className="ql-bold"></button>
//     <button className="ql-italic"></button>
//     <button className="ql-underline"></button>
//     <button className="ql-list" value="ordered"></button>
//     <button className="ql-list" value="bullet"></button>
//     <button className="ql-insertImage">📷</button>
//   </div>
// );

// export default function BlogUploadPage() {
//   const blogFetches = new BlogsFetches();

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const quillRef = useRef(null);

//   const modules = {
//     toolbar: {
//       container: "#custom-toolbar",
//       handlers: {
//         insertImage: () => handleImageUpload(quillRef),
//       },
//     },
//   };

//   useEffect(() => {
//     const quill = quillRef.current?.getEditor();
//     if (!quill) return;

//     const toolbar = quill.getModule("toolbar");
//     toolbar.addHandler("insertImage", handleImageUpload);
//   }, []);

//   const handleSubmit = async (e) => {
//     console.log({
//       title,
//       content,
//     });
//     e.preventDefault();
//     const blogData = {
//       title,
//       content,
//     };
//     // const res = await blogFetches.CreateBlogV2({
//     //   title,
//     //   content
//     // })
//     console.log(res);
//     console.log("Blog Uploaded:", blogData);
//     alert("Blog submitted successfully!");

//     setTitle("");
//     setContent("");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 p-8">
//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-generalsans">
//           Upload New Blog
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Blog Title
//             </label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Blog Excerpt
//             </label>
//             <CustomToolbar2 />
//             <ReactQuill
//               ref={quillRef}
//               value={content}
//               onChange={setContent}
//               modules={modules}
//               theme="snow"
//               placeholder="Write your blog post..."
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
//           >
//             Submit Blog
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
