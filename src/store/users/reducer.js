import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './actions';

const initialState = {
    users: [],
    total: 0,
    message: ''
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.message = 'Cargando...';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                if (action.payload && action.payload.users) {
                    state.users = action.payload.users;
                    state.total = action.payload.total;
                    state.message = 'Usuarios cargados exitosamente';
                } else {
                    state.message = 'No se encontraron usuarios';
                }
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.message = action.payload || 'Error al cargar usuarios';
            });
    }
});

export default usersSlice.reducer;
