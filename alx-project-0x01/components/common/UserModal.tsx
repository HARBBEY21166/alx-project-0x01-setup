// components/common/UserModal.tsx

import React, { useState } from 'react';
import { UserModalProps, UserData } from '../../interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser  }) => {
  const [userData, setUser Data] = useState<UserData>({
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser Data((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser ({ ...userData, id: Date.now() }); // Assign a unique ID
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
          <input type="text" name="website" placeholder="Website" onChange={handleChange} required />
          <input type="text" name="address.street" placeholder="Street" onChange={handleChange} required />
          <input type="text" name="address.city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="address.zipcode" placeholder="Zipcode" onChange={handleChange} required />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;