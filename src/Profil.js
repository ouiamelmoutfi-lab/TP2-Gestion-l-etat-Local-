import { useState } from 'react';

function Profil() {
  const [user, setUser] = useState({
    nom: 'Jean',
    age: 25,
    ville: 'Paris'
  });

  const handleChange = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h3>Profil utilisateur</h3>

      <label>
        Nom :
        <input
          value={user.nom}
          onChange={(e) => handleChange('nom', e.target.value)}
        />
      </label>

      <br />

      <label>
        Âge :
        <input
          type="number"
          value={user.age}
          onChange={(e) => handleChange('age', e.target.value)}
        />
      </label>

      <p>
        {user.nom}, {user.age} ans, à {user.ville}
      </p>
    </div>
  );
}

export default Profil;