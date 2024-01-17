import * as cheerio from "cheerio";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/utils/firebase";

export const getPlainText = (html) => {
  const $ = cheerio.load(html);
  return $.text();
};

export const createSlug = (str) => {
  return str
    ?.toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

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
