"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/utils/firebase";
import Loading from "@/components/Loading";

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/categories`);
    const data = await res.json();
    if (res.ok) return data;
    else throw new Error("Unable to get categories");
  } catch (error) {
    throw new Error(error.message);
  }
};

const page = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
  const [catSlug, setCatSlug] = useState("");
  const { status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };
    fetchData();
  }, []);

  const createSlug = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  useEffect(() => {
    setSlug(createSlug(title));
  }, [title]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  const handleSubmit = async () => {
    try {
      let imageUrl = image;
      if (file) {
        const storageRef = ref(storage, slug);
        const uploadTask = uploadBytesResumable(storageRef, file);
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            () => {},
            reject,
            async () => {
              try {
                const downloadURL = await getDownloadURL(
                  uploadTask.snapshot.ref
                );
                imageUrl = downloadURL;
                setImage(imageUrl); // Set the state after the async process
                resolve();
              } catch (error) {
                reject(error);
              }
            }
          );
        });
      }
      const res = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image: imageUrl,
          slug: createSlug(title),
          catSlug,
        }),
      });
      if (res.ok) router.push("/");
    } catch (error) {
      console.error("Error handling form submission:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="p-4 lg:p-6 text-2xl lg:text-3xl bg-transparent outline-none input mb-3"
      />
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4 bgColor">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            id="imageUpload"
            type="file"
            accept="image/*"
            className={"hidden"}
          />
          <div className="flex gap-3 items-center truncate">
            <label
              htmlFor="imageUpload"
              className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-transparent border-2 cursor-pointer softBorder"
            >
              <FaPlus size={16} />
            </label>
            {file && <span className="truncate flex-1">{file.name}</span>}
          </div>
          <select
            className="softBorder border-2 rounded-md p-2 textColor bg-transparent sm:w-fit"
            name="catSlug"
            onChange={(e) => setCatSlug(e.target.value)}
            defaultValue={"Select Category"}
          >
            <option
              value="Select Category"
              disabled
              className="text-center p-4 textColor bgColor"
            >
              Select Category
            </option>
            {data?.length>0 && data?.map((item) => (
              <option
                key={item.id}
                value={item.title}
                className="text-center p-4 textColor bgColor capitalize"
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[100%] flex-1 textColor">
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={setDesc}
            placeholder="Tell your story..."
          />
        </div>
      </div>
      <button
        onClick={() => handleSubmit()}
        className=" mt-5 px-4 py-2 sm:w-fit sm:mx-auto sm:px-6 sm:font-medium rounded-3xl bg-[#1a8917] text-white "
      >
        Publish
      </button>
    </div>
  );
};

export default page;
