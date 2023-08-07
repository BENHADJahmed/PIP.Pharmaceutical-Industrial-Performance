

export function WorkingDaysCounter(selectedMonth ) {
  const convertMonthToNumber = (monthName) => {
    const monthsMap = {
      'Janvier': 0,
      'Février': 1,
      'Mars': 2,
      'Avril': 3,
      'Mai': 4,
      'Juin': 5,
      'Juillet': 6,
      'Août': 7,
      'Septembre': 8,
      'Octobre': 9,
      'Novembre': 10,
      'Décembre': 11
    };

    return monthsMap[monthName] ;
  };

  const selectedMonthNombre = convertMonthToNumber(selectedMonth)

    const getWorkingDaysCount = (selectedMonthNombre) => {
      const year = 2023; 
      const startDate = new Date(year, selectedMonthNombre , 1); 
      const endDate = new Date(year, selectedMonthNombre + 1, 0);
  
      let workingDaysCount = 0;
  
      
      for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        const dayOfWeek = date.getDay();
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
          workingDaysCount++; 
        }
      }
  
      return workingDaysCount;
    };
  
    const workingDaysCount = getWorkingDaysCount(selectedMonthNombre);
    console.log(workingDaysCount);

    return (workingDaysCount);

  };

