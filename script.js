(async function() {
  const t = document.getElementById('t')

  let a = fetch(`https://corsproxy.io/?${encodeURIComponent("https://www.ncei.noaa.gov/cdo-web/api/v2/stations")}`, {
    headers: {
      "token": "WyVCmQTTsZvazOCsrmExBNaNOvTQeJzI",
    },
  });

  a.then(response => response.json())
    .then(result => {
      result.results.forEach(station => {
        const row = document.createElement('tr');
        row.innerHTML = `
             <td>${station.id}</td>
             <td>${station.name}</td>
             <td>${station.latitude}</td>
             <td>${station.longitude}</td>
         `;
        t.appendChild(row);
      })
    });
})();
