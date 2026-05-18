import type { User } from "../../types/user.type.ts";
import { persist } from "zustand/middleware";
import { create } from "zustand";

type AuthState = {
    isLoggedIn: boolean;
    token: string | null;
    user: User | null;

    login: (user: User, token: string) => void;
    logout: VoidFunction;
};

export const useAuthStore = create<AuthState>()(
    persist(
        set => ({
            isLoggedIn: false,
            token: null,
            user: null,
            login: (user, token) => set({ isLoggedIn: true, token, user }),
            logout: () => set({ isLoggedIn: false, token: null, user: null }),
        }),
        { name: "auth-storage" },
    ),
);
