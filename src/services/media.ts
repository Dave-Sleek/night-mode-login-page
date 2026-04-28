export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  // TODO: Replace with signed upload.
  return Promise.resolve(URL.createObjectURL(file));
};
