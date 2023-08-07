import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { getMaxYear } from '../../../function/chartData';
import supprimer from '../../../Image/delete.png';
import plus from '../../../Image/plus.png';
import { deleteDataActivite, addOrUpdateDataActivite } from '../../../function/api';

function ActiviteTableAdmin(props) {
  // State et effets
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.donnees);
  }, [props.donnees]);

  // Constantes et fonctions de rendu
  const mois = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const handleInputChange = (rowIndex, cellIndex, value) => {
    const updatedData = [...data];
    updatedData[rowIndex].nombres[cellIndex] = value;
    setData(updatedData);
  };

  const handleAjouterClick = () => {
    const newYear = getMaxYear(data) + 1;
    const nouvelleData = {
      annee: newYear,
      nombres: Array(12).fill(0),
    };
    setData([...data, nouvelleData]);
  };

  const handleUpdateClick = () => {
    data.forEach((activite) => {
      const annee = activite.annee;
      const nombres = activite.nombres.map(nombre => parseFloat(nombre));

      addOrUpdateDataActivite(props.type, { annee, nombres });
    });

    window.location.reload();
  };

  const handleDeleteClick = (item) => {
    deleteDataActivite(props.type, item._id);
    window.location.reload();
  };

  const renderDonnees = () => {
    return data.sort((a, b) => a.annee - b.annee).map((activite, index) => (
      <tr key={index}>
        <td>
          <div style={{ cursor: 'pointer' }} onClick={() => handleDeleteClick(activite)}>
            <img src={supprimer} style={{ width: '22px', height: '22px' }} />
          </div>
        </td>
        <td>{activite.annee}</td>
        {activite.nombres.map((nombre, idx) => (
          <td key={idx}>
            <input
              type="number"
              value={nombre}
              onChange={(e) => handleInputChange(index, idx, e.target.value)}
            />
          </td>
        ))}
      </tr>
    ));
  };

  // Rendu du composant
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Année</th>
            {mois.map((mois, index) => (
              <th key={index}>{mois}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderDonnees()}
          <tr>
            <td>
              <div style={{ cursor: 'pointer' }} onClick={handleAjouterClick}>
                <img src={plus} style={{ width: '22px', height: '22px' }} />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 style={{ display: 'inline-block', margin: '40px 8px 40px 0', fontFamily: "cursive", fontWeight: 'bold' }}>
        Appuyez pour mettre à jour les données que vous avez modifiées ou ajoutées :
      </h4>
      <Button onClick={handleUpdateClick} style={{ margin: '30px 0 40px' }}>Mettre à jour</Button>
    </div>
  );
}

export default ActiviteTableAdmin;
