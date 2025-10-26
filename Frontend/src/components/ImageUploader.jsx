import { useState } from "react";

function ImageUploader({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Selected file:", file);
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // Handle upload to backend → Cloudinary
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);

    // ✅ Prepare form data
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      // ✅ Send to backend
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Cloudinary response:", data);

      // ✅ Pass URL to parent
      if (data.url) {
        onUpload(data.url);
      } else {
        console.error("Upload failed:", data.error);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} className="space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-700"
      />

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="object-cover w-48 h-48 border rounded"
        />
      )}

      <button
        type="submit"
        disabled={isUploading}
        className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
      >
        {isUploading ? "Uploading..." : "Upload to Cloudinary"}
      </button>
    </form>
  );
}

export default ImageUploader;
