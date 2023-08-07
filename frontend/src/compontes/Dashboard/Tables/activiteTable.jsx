import React from 'react';
import Table from 'react-bootstrap/Table';

function ActiviteTable(props) {
  // Constantes
  const mois = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  // Fonction de rendu des données
  const renderDonnees = () => {
    const { donnees } = props;

    return donnees.sort((a, b) => a.annee - b.annee).map((activite, index) => (
      <tr key={index}>
        <td>{activite.annee}</td>
        {activite.nombres.map((nombre, idx) => (
          <td key={idx}>{nombre}</td>
        ))}
      </tr>
    ));
  };

  // Rendu du composant
  return (
    <Table responsive bordered hover style={{ textAlign: "center" }} >
      <thead>
        <tr>
          <th style={{ width: "110px" }}>Année</th>
          {mois.map((mois, index) => (
            <th style={{ width: "110px" }} key={index}>{mois}</th>
          ))}
        </tr>
      </thead>
      <tbody style={{ textAlign: 'center' }}>
        {renderDonnees()}
      </tbody>
    </Table>
  );
}

export default ActiviteTable;
