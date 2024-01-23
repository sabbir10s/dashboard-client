import requests from "./httpService";

const CategoryServices = {
  getAllCategory: async (body) => {
    return requests.get("/category", body);
  },
  singleCreateCategory: async (body) => {
    return requests.post("/category", body);
  },
  getSingleCategory: async (id, body) => {
    return requests.get(`/category/${id}`, body);
  },
  singleUpdateCategory: async (id, body) => {
    return requests.put(`/category/${id}`, body);
  },
  singleDeleteCategory: async (id, body) => {
    return requests.delete(`/category/${id}`, body);
  },
};

export default CategoryServices;
