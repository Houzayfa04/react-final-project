import { useEffect, useState } from "react";
import { load, save } from "../utils/storage";
import { mockAuthUsers } from "../data/mockAuthUsers";

export default function AuthUsers() {
  const [users, setUsers] = useState(() =>
    load("admin_auth_users", mockAuthUsers)
  );
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(false);

  const emptyUser = { full_name: "", email: "", role: "user" };
  const [newUser, setNewUser] = useState(emptyUser);

  useEffect(() => save("admin_auth_users", users), [users]);

  const removeUser = (id) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  const saveEdit = () => {
    setUsers((prev) =>
      prev.map((u) => (u.id === editing.id ? editing : u))
    );
    setEditing(null);
  };

  const addUser = () => {
    if (!newUser.full_name || !newUser.email) return;

    setUsers((prev) => [
      { ...newUser, id: Date.now() },
      ...prev,
    ]);
    setNewUser(emptyUser);
    setAdding(false);
  };

  return (
    <div>
      <h2>Auth Users</h2>

      <div className="admin_actions" style={{ marginBottom: 14 }}>
        <button onClick={() => setAdding(true)}>+ Add User</button>
      </div>

      {/* ADD USER */}
      {adding && (
        <div className="admin_box">
          <h3>Add Auth User</h3>

          <input
            className="admin_input"
            placeholder="Full name"
            value={newUser.full_name}
            onChange={(e) =>
              setNewUser({ ...newUser, full_name: e.target.value })
            }
          />

          <input
            className="admin_input"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value })
            }
          />

          <select
            className="admin_input"
            value={newUser.role}
            onChange={(e) =>
              setNewUser({ ...newUser, role: e.target.value })
            }
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <div className="admin_actions">
            <button onClick={addUser}>Add</button>
            <button onClick={() => setAdding(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* EDIT USER */}
      {editing && (
        <div className="admin_box">
          <h3>Edit User</h3>

          <input
            className="admin_input"
            value={editing.full_name}
            onChange={(e) =>
              setEditing({ ...editing, full_name: e.target.value })
            }
          />

          <input
            className="admin_input"
            value={editing.email}
            onChange={(e) =>
              setEditing({ ...editing, email: e.target.value })
            }
          />

          <select
            className="admin_input"
            value={editing.role}
            onChange={(e) =>
              setEditing({ ...editing, role: e.target.value })
            }
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <div className="admin_actions">
            <button onClick={saveEdit}>Save</button>
            <button onClick={() => setEditing(null)}>Cancel</button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <table className="admin_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.full_name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <div className="admin_actions">
                  <button onClick={() => setEditing(u)}>Edit</button>
                  <button onClick={() => removeUser(u.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
