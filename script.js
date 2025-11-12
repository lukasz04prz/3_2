var api_key = "WyVCmQTTsZvazOCsrmExBNaNOvTQeJzI";

(async function() {
  const t = document.getElementById('t')

  fetch(`https://corsproxy.io/?${encodeURIComponent("https://www.ncei.noaa.gov/cdo-web/api/v2/stations")}`, {
    headers: {
      "token": api_key,
    },
  }).then(response => response.json())
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

  fetch(`https://corsproxy.io/?${encodeURIComponent("https://www.ncei.noaa.gov/cdo-web/api/v2/locations")}`, {
    headers: {
      "token": api_key,
    },
  }).then(response => response.json())
    .then(result => {
      result.results.forEach(station => {
        const row = document.createElement('tr');
        row.innerHTML = `
             <td>${station.id}</td>
             <td>${station.mindate}</td>
             <td>${station.maxdate}</td>
             <td>${station.name}</td>
             <td>${station.datacoverage}</td>
         `;
        l.appendChild(row);
      })
    });

  fetch(`https://corsproxy.io/?${encodeURIComponent("https://www.ncei.noaa.gov/cdo-web/api/v2/datacategories?enddate=2023-01-01")}`, {
    headers: {
      "token": api_key,
    },
  }).then(response => response.json())
    .then(result => {
      result.results.forEach(station => {
        const row = document.createElement('tr');
        row.innerHTML = `
             <td>${station.id}</td>
             <td>${station.name}</td>
         `;
        c3.appendChild(row);
      })
    });
})();
