import React from 'react';
import { DashBoard } from '../../layout/DashBoardLayout';
import style from './TablaUsers.module.css';

const users = [
  { nombre: 'Juan', apellido: 'Pérez', email: 'juan@example.com', rol: 'Admin' },
  { nombre: 'Ana', apellido: 'Gómez', email: 'ana@example.com', rol: 'User' },
  // Agrega más usuarios según sea necesario
];

export const TablaUsers = () => {
  const handleEdit = (user) => {
    // Maneja la edición del usuario
    console.log('Edit user:', user);
  };

  const handleDelete = (user) => {
    // Maneja la eliminación o deshabilitación del usuario
    console.log('Delete user:', user);
  };

  return (
    <DashBoard>
      <div className={style.tableContainer}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td className={style.actions}>
                  <i
                    className={`fas fa-edit ${style.Icon}`}
                    onClick={() => handleEdit(user)}
                  ></i>
                  <i
                    className={`fas fa-trash-alt ${style.Icon}`}
                    onClick={() => handleDelete(user)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashBoard>
  );
};
