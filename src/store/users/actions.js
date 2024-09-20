import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../apiInstance';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
    try {
        const response = await get('/usuarios');
        const users = response.data
        return {users: users, total: users.length }
    } catch (error) {
        return thunkAPI.rejectWithValue('Error al cargar usuarios: ', error);
    }
});
