import axiosInstance from "../axiosInstance.ts";

const fetchCategoryList = async () => {
    const response = await axiosInstance.get("/admin/category/list");
    return response.data.data;
};

export default { fetchCategoryList };
