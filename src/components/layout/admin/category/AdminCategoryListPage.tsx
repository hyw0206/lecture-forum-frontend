import { useEffect, useState } from "react";
import adminCategoryApi from "../../../../api/admin/adminCategoryApi.ts";
import type { Category } from "../../../../types/category.type.ts";

export default function AdminCategoryListPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await adminCategoryApi.fetchCategoryList();
                setCategories(data);
            } catch (e) {
                console.log(e);
                alert("불러오기 실패");
            } finally {
                setLoading(false);
            }
        };

        loadCategories().then(() => {});
    }, []);
    return (
        <>
            <> asdf</>
        </>
    );
}
