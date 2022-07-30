export const TOKEN_KEY = "@app-Token";
export const USER_ROLE = "@user_role";

export const isAdmin = () => localStorage.getItem(USER_ROLE) === "admin";
export const getRole = () => localStorage.getItem(USER_ROLE);

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token, role) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_ROLE, role);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_ROLE);
};
