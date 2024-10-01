import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadUrlParser(data: {
  originalname: any;
  path: any;
  filename: any;
  mimetype: any;
}) {
  let path = "";
  path += "&path=" + data.path;
  path += "&filename=" + data.filename;
  path += "&originalname=" + data.originalname;
  path += "&mimetype=" + data.mimetype;
  // console.log("rr", `${process.env.NEXT_PUBLIC_API_URL}/download-file?${path}`);
  return `${process.env.NEXT_PUBLIC_API_URL}/download-file?${path}`;

  // return import.meta.env["NEXT_PUBLIC_API_URL"] + "/download-file?" + path;
}
