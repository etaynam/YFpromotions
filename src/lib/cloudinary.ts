const IMAGE_BASE_PATH = "/images";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");
const trimLeadingSlash = (value: string) => value.replace(/^\/+/, "");

export const buildCloudinaryUrl = (filename: string) => {
  const normalizedBase = trimTrailingSlash(IMAGE_BASE_PATH);
  const normalizedFilename = trimLeadingSlash(filename ?? "");
  return `${normalizedBase}/${normalizedFilename}`;
};

