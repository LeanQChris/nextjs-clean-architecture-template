import { setCookie, getCookie, deleteCookie } from 'cookies-next';

export const setSession = <t>(key: string, sessionData: t) => {
    setCookie(key, JSON.stringify(sessionData), {
        maxAge: 60 * 60 * 24, // 1 day
    });
};

export const getSession = (key: string) => {
    const session = getCookie(key);
    return session ? JSON.parse(session) : null;
};

export const deleteSession = (key: string) => {
    deleteCookie(key);
};
