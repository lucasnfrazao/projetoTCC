export function getToken() {
    return localStorage.getItem('token');
}

export function login(token) {
    localStorage.setItem('token', token);
}

export function logout() {
    localStorage.removeItem('token');
}