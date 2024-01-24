import * as cheerio from "cheerio";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/utils/firebase";

// Convert Raw Html to plain text
export const getPlainText = (html) => {
  const $ = cheerio.load(html);
  return $.text();
};

// Create a slug for a given post using title
export const createSlug = (str) => {
  return str
    ?.toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Upload files into firestore
export const handleFileUpload = async (file, fileName) => {
  if (!file) {
    throw new Error("No file provided");
  }
  try {
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const snapshot = await uploadTask;
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to upload blog image");
  }
};

// Delete files from firestore
export const deleteOldFile = async (oldFileName) => {
  try {
    const oldStorageRef = ref(storage, oldFileName);
    if (oldStorageRef) {
      await deleteObject(oldStorageRef);
    } else {
      throw new Error("Old File not found");
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to delete old image");
  }
};

// ToolBar Options for Text Editor
export const toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block","link","image"],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ font: [] }],
  [{ direction: "rtl" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["clean"],
];

// Exporting toolbar Options as modules
export const modules ={
  toolbar: toolbarOptions
}