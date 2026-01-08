import { useEffect, useState } from "react";
import { load, save } from "../utils/storage";

export default function ContactUsers() {
  const [contacts, setContacts] = useState(() =>
    load("admin_contacts", [])
  );
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(false);

  const emptyContact = { name: "", phone: "" };
  const [newContact, setNewContact] = useState(emptyContact);

  useEffect(() => save("admin_contacts", contacts), [contacts]);

  const removeContact = (id) =>
    setContacts((prev) => prev.filter((c) => c.id !== id));

  const saveEdit = () => {
    setContacts((prev) =>
      prev.map((c) => (c.id === editing.id ? editing : c))
    );
    setEditing(null);
  };

  const addContact = () => {
    if (!newContact.name || !newContact.phone) return;

    setContacts((prev) => [
      { ...newContact, id: Date.now() },
      ...prev,
    ]);
    setNewContact(emptyContact);
    setAdding(false);
  };

  return (
    <div>
      <h2>Contact Users</h2>

      <div className="admin_actions" style={{ marginBottom: 14 }}>
        <button onClick={() => setAdding(true)}>+ Add Contact</button>
      </div>

      {/* ADD CONTACT */}
      {adding && (
        <div className="admin_box">
          <h3>Add Contact</h3>

          <input
            className="admin_input"
            placeholder="Name"
            value={newContact.name}
            onChange={(e) =>
              setNewContact({ ...newContact, name: e.target.value })
            }
          />

          <input
            className="admin_input"
            placeholder="Phone"
            value={newContact.phone}
            onChange={(e) =>
              setNewContact({ ...newContact, phone: e.target.value })
            }
          />

          <div className="admin_actions">
            <button onClick={addContact}>Add</button>
            <button onClick={() => setAdding(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* EDIT CONTACT */}
      {editing && (
        <div className="admin_box">
          <h3>Edit Contact</h3>

          <input
            className="admin_input"
            value={editing.name}
            onChange={(e) =>
              setEditing({ ...editing, name: e.target.value })
            }
          />

          <input
            className="admin_input"
            value={editing.phone}
            onChange={(e) =>
              setEditing({ ...editing, phone: e.target.value })
            }
          />

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
            <th>Phone</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>
                <div className="admin_actions">
                  <button onClick={() => setEditing(c)}>Edit</button>
                  <button onClick={() => removeContact(c.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
