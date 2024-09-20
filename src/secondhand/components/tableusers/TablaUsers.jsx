import { DashBoard } from '../../layout/DashBoardLayout';
import style from './TablaUsers.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../../store/users/selectors';
import { useEffect } from 'react';
import { fetchUsers } from '../../../store/users/actions';


export const TablaUsers = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const handleEdit = (user) => {
    console.log('Edit user:', user);
  };
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  

  const handleDelete = (user) => {
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
