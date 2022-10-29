let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
function chooseStations(stations) { 
  const goodStations = []
  
  for (const stn of stations) {
    
    const capacity = stn[1]
    
    if (capacity >= 20) {
        
      const type = stn[2]
       
      if (type === "school" || type === "community centre")
          
        goodStations.push(stn[0])

    }
  }
  return goodStations
}

console.log(chooseStations(stations))