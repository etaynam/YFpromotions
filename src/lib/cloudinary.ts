const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dggk53pzv/image/upload/f_auto,q_auto:eco,w_720,c_limit,dpr_auto/";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");
const trimLeadingSlash = (value: string) => value.replace(/^\/+/, "");

export const buildCloudinaryUrl = (filename: string) => {
  const normalizedBase = trimTrailingSlash(CLOUDINARY_BASE);
  const normalizedFilename = trimLeadingSlash(filename ?? "");
  return `${normalizedBase}/${normalizedFilename}`;
};

