import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('authToken'));

    useEffect(() => {
        if (token) {
            fetch('http://localhost:4000/user', {
                headers: { Authorization: `Bearer ${token}`}
            })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(() => logout())
        } else {
            console.log("No login token")
        }
    }, [token]);

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
        <AuthContext.Provider value={{ user, isAuthenticated, token, login, logout }}>
            {children}
            {console.log("AuthProvider state:", { user, isAuthenticated })}
        </AuthContext.Provider>
    );
}