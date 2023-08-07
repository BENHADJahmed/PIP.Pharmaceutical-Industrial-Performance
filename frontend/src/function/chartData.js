// ChartData.js
export function getTotalChartData(donnees) {
    const labels = donnees.map((activite) => activite.annee);
    const data = donnees.map((activite) => activite.nombres.reduce((acc, cur) => acc + cur, 0));
  
    const dataset = {
      label: 'Data',
      data: data,
      backgroundColor: '#ffc62a',
    };
  
    return {
      labels: labels,
      datasets: [dataset],
    };
  }

  export function getMoyenneChartData(donnees) {
    const labels = donnees.map((activite) => activite.annee);
    const data = donnees.map((activite) => (activite.nombres.reduce((acc, cur) => acc + cur, 0) / activite.nombres.length).toFixed(0));
  
    const dataset = {
      label: 'Data',
      data: data,
      backgroundColor: '#ffc62a',
    };
  
    return {
      labels: labels,
      datasets: [dataset],
    };
  }

  export function getMinYear(donnees) {
    const years = donnees.map((activite) => activite.annee);
    return Math.min(...years);
  }
  
  export function getMaxYear(donnees) {
    const years = donnees.map((activite) => activite.annee);
    return Math.max(...years);
  }

  export function getMachineChartData(donnees){
    const labels = ['Panne Machine', 'Attente', 'Non Qualité', 'Ecart Cadence']
    const ecartCadence = (1 - donnees.cadence.reel/donnees.cadence.optimale)*(donnees.temps.TO - donnees.arret.nonQualite - donnees.arret.attente - donnees.arret.panneMachine)
    const data = [donnees.arret.panneMachine, donnees.arret.attente, donnees.arret.nonQualite, ecartCadence]
    console.log(ecartCadence);

    const dataset = {
      label: 'Data',
      data: data,
      backgroundColor: '#ffc62a',
    };

    return {
      labels: labels,
      datasets: [dataset],
    };
  }
  

