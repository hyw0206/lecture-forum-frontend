import { createBrowserRouter, redirect } from "react-router";
import HomePage from "../pages/HomePage.tsx";
import SignInPage from "../pages/auth/signin/signInPage.tsx";
import SignUpPage from "../pages/auth/signup/signUpPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import AdminLayout from "../layouts/AdminLayout.tsx";
import AdminCategoryListPage from "../components/layout/admin/category/AdminCategoryListPage.tsx";
import { useAuthStore } from "../stores/auth/authStore.ts";

const adminLoader = () => {
    // zustand가 가진 회원 정보에 접근해서 가져와야 함
    // 컴포넌트 안에서는 user, isLoggedIn 등을 불러올 수 있음
    // = Client Side가 아닌 Server Side 느낌
    const { user, isLoggedIn } = useAuthStore.getState();

    if (!isLoggedIn) {
        alert("로그인이 필요합니다.");
        return redirect("/auth/signin");
    }
    if (user?.role !== "ADMIN") {
        console.log(user?.role);
        alert("권한이 부족합니다.");
        return redirect("/");
    }
};

const guestLoader = () => {
    const { isLoggedIn } = useAuthStore.getState();

    if (isLoggedIn) {
        return redirect("/");
    }

    return null;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "auth",
                loader: guestLoader,
                children: [
                    { path: "signin", element: <SignInPage /> },
                    { path: "signup", element: <SignUpPage /> },
                ],
            },
        ],
    },
    {
        path: "admin",
        loader: adminLoader,
        element: <AdminLayout />,
        children: [
            {
                path: "category",
                children: [
                    {
                        index: true,
                        element: <AdminCategoryListPage />,
                    },
                ],
            },
        ],
    },
]);

export default router;
