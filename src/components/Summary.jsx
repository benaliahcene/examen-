import React, { useState } from 'react';

const Summary = () => {
  const [selectedUser, setSelectedUser] = useState('');

  return (
    <div className="container mt-4">
      <h1>Galerie</h1>
      <select className="form-select mb-3" onChange={(e) => setSelectedUser(e.target.value)}>
        {/* Liste déroulante des utilisateurs */}
      </select>
      <button className="btn btn-primary">Afficher</button>
      {/* Affichage des pays associés à l'utilisateur sélectionné */}
    </div>
  );
};

export default Summary;
