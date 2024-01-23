import { useForm } from "react-hook-form";
import CategoryServices from "../services/CategoryServices";

const useCategorySubmit = (id) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle image upload
  const handleImageUpload = (file) => {
    console.log("image", file[0]);
  };

  // handle submit function
  const onSubmit = (data) => {
    const categoryInfo = {
      name: data.name,
      description: data.name,
      image: "",
      parentId: "6446a39d33d92256ae916c32",
    };

    CategoryServices.singleCreateCategory(categoryInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { register, handleSubmit, errors, onSubmit, handleImageUpload };
};

export default useCategorySubmit;
