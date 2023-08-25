document.addEventListener("DOMContentLoaded", function() {
let tableBody=document.getElementById("myTableBody")

  fetch('https://restcountries.com/v3.1/all')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    })
    .then(data => {
    let sortedCountries=data.sort((a,b)=>b.population-a.population)
   for(let i=0;i<sortedCountries.length;i++){
   
    let tableData=`
     <th scope="row">${i+1}</th>
    <td>${sortedCountries[i].name.common}</td>
    <td>${sortedCountries[i].population}</td>
   `
   let tr=document.createElement("tr");
   tr.innerHTML=tableData
tableBody.appendChild(tr)
  }
   

    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
});
