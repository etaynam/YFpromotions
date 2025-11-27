const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dggk53pzv/image/upload/f_auto,q_auto,w_auto:100,c_limit,dpr_auto/";

export const buildCloudinaryUrl = (filename: string) =>
  `${CLOUDINARY_BASE}${filename}`.replace(/\/+/g, "/");

