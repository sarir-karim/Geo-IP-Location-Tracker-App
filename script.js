$(document).ready(function () {
  // get request to api

  $("#form").submit(function (e) {
    e.preventDefault();

    var ip = $("#ip").val();
    $("#details").empty();
    $("#map").empty()

    if (ip == "") {
      alert("Please Enter the ip address");
    }
    var API_KEY = "ba816220392340c4a4ff4414d3c39ab6";
    var url =
      "https://api.ipgeolocation.io/ipgeo?apiKey=" + API_KEY + "&ip=" + ip;

    $.get(url, function (data) {
      var country_name = data.country_name;
      var city = data.city;
      var country_flag = data.country_flag;
      var lat = parseFloat(data.latitude);
      var lng = parseFloat(data.longitude);

      //   declaring object

      var position = {
        lat: lat,
        lng: lng,
      };

      displayDetails(country_name, city, country_flag);
      displayMap(position);
    });
  });

  function displayDetails(country_name, city, country_flag) {
    var details = `
        <h1>${country_name}</h1><br> <h2>${city}</h2> <br>
        <img src="${country_flag}">
        `;

    $("#details").append(details);
    console.log(details);
  }

  function displayMap(position) {
    var link = `<a href='https://www.google.com/maps/search/?api=1&query = ${position.lat}, ${position.lng}'>See Map here</a>`;
    $("#map").append(link);
  }
});
