$(document).ready(function() {
    function getJsonData() {
      $.getJSON("/data", function(data) {
        $.each(data, function (){
          const longitude = this.location[0];
          const latitude = this.location[1];
          const linkAddress = "https://www.google.com/maps?q=" +
            longitude + "," + latitude;
          $("table").append("<tr><td>" + this.name +
            "</td><td>" + this.description +
            "</td><td><a href='" + linkAddress +
            "' target='_blank'>Open in Google Maps</a></td></tr>"
          );
        });
      }).fail(function( err, textStatus, error ) {
        err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
      });
    }
  
    getJsonData();
  });