import { createContext, useState, useEffect } from 'react';

import { API_BASE } from '../config.js';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('authToken'));

    useEffect(() => {
        if (user !== null) {
            return
        }

        if (token) {
            fetch(`${API_BASE}/auth/me`, {
                headers: { Authorization: `Bearer ${token}`}
            })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(() => logout())
        } else {
            console.log("No login token")
        }
    }, [user, token]);

    const login = (userData, token) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('authToken')
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, token, login, logout }}>
            {children}
            {/* {console.log("AuthProvider state:", { user, isAuthenticated })} */}
        </AuthContext.Provider>
    );
}