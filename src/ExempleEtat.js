import { useState } from 'react';

function ExempleEtat() {
  const [compteur, setCompteur] = useState(0);

  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>
        Incrémenter
      </button>
    </div>
  );
}

export default ExempleEtat;