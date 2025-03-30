const TOKEN = "token";

export const getToken = (): string | null => {
    return localStorage.getItem(TOKEN)
}

export const saveToken = (newToken: string) => {
    console.log('me called here ')
    localStorage.setItem(TOKEN, newToken);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
};