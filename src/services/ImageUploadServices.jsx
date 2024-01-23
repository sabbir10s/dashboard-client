import requests from "./httpService";

const ImageUploadServices = {
  singleImageUpload: async (body) => {
    

    return requests.post("/image-upload", body);
  },
};

export default ImageUploadServices;
