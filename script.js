(function() {
  const tb_station_id = document.getElementById('tb-station_id')
  const tb_name = document.getElementById('tb-name')
  const tb_latitude = document.getElementById('tb-latitude')
  const tb_longitude = document.getElementById('tb-longitude')

  fetch('https://restcountries.com/v3.1/capital/Warsaw')
    .then(response => response.json())
    .then(country => {
      
    });
})();
