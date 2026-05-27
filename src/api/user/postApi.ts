import axiosInstance from "../axiosInstance.ts";
import type { PaginationResponseType } from "../../types/common.type.ts";
import type { Post } from "../../types/post.type.ts";

const fetchPostListByCategoryId = async (
    categoryId: number,
): Promise<PaginationResponseType<Post>> => {
    const response = await axiosInstance.get(`post/${categoryId}`);
    return response.data.data;
};

export default { fetchPostListByCategoryId };
