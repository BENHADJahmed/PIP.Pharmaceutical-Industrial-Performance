import React from 'react';
import Table from 'react-bootstrap/Table';

function MachineTable({ temps, arret, cadence, tonnage, nombreBlister, nombreFlacon, nombreComprime }) {
  const TU = (temps.TO - arret.panneMachine - arret.attente - arret.nonQualite - ((1 - cadence.reel / cadence.optimale) * (temps.TO - arret.nonQualite - arret.attente - arret.panneMachine))).toFixed(0);
  const TRS = (TU / temps.TO * 100).toFixed(0);
  const OCC = (temps.TO / temps.TT * 100).toFixed(0);

  return (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>TT</th>
          <th>TO</th>
          <th>TU</th>
          <th>TRS</th>
          <th>OCC</th>
          {tonnage !== 0 && <th>Tonnage</th>}
          {nombreBlister !== 0 && <th>Nombre de blister</th>}
          {nombreComprime !== 0 && <th>Nombre de comprimé</th>}
          {nombreFlacon !== 0 && <th>Nombre de flacon</th>}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border">{temps.TT}</td>
          <td className="border">{temps.TO}</td>
          <td className="border">{TU}</td>
          <td className="border">{TRS}%</td>
          <td className="border">{OCC}%</td>
          {tonnage !== 0 && <td className="border" style={{width : '200px'}}>{tonnage}</td>}
          {nombreBlister !== 0 && <td className="border" style={{width : '200px'}}>{nombreBlister}</td>}
          {nombreComprime !== 0 && <td className="border" style={{width : '200px'}}>{nombreComprime}</td>}
          {nombreFlacon !== 0 && <td className="border" style={{width : '200px'}}>{nombreFlacon}</td>}
        </tr>
      </tbody>
    </Table>
  );
}

export default MachineTable;
