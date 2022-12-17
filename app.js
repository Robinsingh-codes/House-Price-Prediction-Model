$(document).ready(function (){
    $('#robin').click(function () {
        console.log("you clicked on  robin", this);
        alert("this project was made by Robin");
    
    });
// onclick="onClickedEstimatePrice()
    $(".submit").click( function(){
        console.log("Estimate price button clicked");
    //var sqft1 =document.getElementById("#uiSqft");
    // console.log(sqft1);
    //var bhk1 = document.getElementById("#uiBHK");
    //var bathrooms = document.getElementById("#uiBathrooms");
    //var location =document.getElementById("#uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");
   var sqft1 = $("#uisqft").val();
   console.log("sqft1 value",this,sqft1);
    var bhk1 = $("#uiBHK").val();
    console.log("bhk value",this,bhk1);
    var bathrooms1 = $("#uiBathrooms").val();
    console.log("bath value",this,bathrooms1);
    var location1 = $("#uiLocations").val();
    console.log("location value",this,location1);


    var url = "http://127.0.0.1:5000/predict_home_price";

    
    $.post(url, {
      // total_sqft: parseFloat(sqft1.val),
      //  bhk: bhk1.val,
       // bath: bathrooms.val,
       // location: location.val
          
       total_sqft: sqft1,
       bhk: bhk1,
       bath: bathrooms1,
       location: location1
     // total_sqft: 1000,
      //  bhk:2,
      //  bath:4,
      // location:"1st phase jp nagar"
    },function(data, status) {
        console.log(data);
       // alert("answer is"+"\n"+data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price + " Lakh</h2>";
        console.log(status);
    });
    });
    
    function onPageLoad() {
        console.log( "document loaded" );
        var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
        //var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
        $.get(url,function(data, status) {
            console.log("got response for get_location_names request");
            if(data) {
                var locations = data.locations;
                var uiLocations = document.getElementById("uiLocations");
                $('#uiLocations').empty();
                for(var i in locations) {
                    var opt = new Option(locations[i]);
                    $('#uiLocations').append(opt);
                }
            }
        });
      }
      
      window.onload = onPageLoad;




});