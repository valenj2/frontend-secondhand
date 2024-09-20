export const selectAuth = (state) => state.auth;

export const selectLoading = (state) => state.auth.loading;
export const selectMessage = (state) => state.auth.message;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectRol = (state) => state.auth.user.rol;
