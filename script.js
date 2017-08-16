$(document).ready(function() {

  var streamers = ["freecodecamp", "syndicate", "staiy", "yd0821"];
  var html = "";
  var defaultLogo = "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png";

  function getStatus(twitchId){
   $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + twitchId + "?callback=?", function(json){

     twitchStatus = json.stream;

     if(twitchStatus == null){

       html += "<div class='streamer offline'><img src='" + defaultLogo + "'></img><a href='https://www.twitch.tv/" + twitchId + "' target='_blank'><h2>" + twitchId + "</h2></a><h4 class='status'>offline</h4></div>";
     } else if(twitchStatus != null){

       logo = json.stream.channel.logo;
       url = json.stream.channel.url;
       game = json.stream.channel.game;

       html += "<a class='online' href='" + url + "' target='_blank'><div class='streamer'><img src='" + logo + "'></img>  <h2>" + twitchId + "</h2><h2 class='status onlineText'>playing " + game + " now</h2></div></a>";

     };

     $("#streamDiv").html(html);

   });
 }

  function runStreamersArray(){
    streamers.forEach(function(el) {
       getStatus(el)
      });
  }

  // start populating screen
 runStreamersArray();

  $("#onlineBtn").click(function(){
    $(".offline").css('display', 'none');
    $(".online").css('display', 'block');
   });
  $("#offlineBtn").click(function(){
   $(".online").css('display', 'none');
   $(".offline").css('display', 'block');
   });
  $("#allBtn").click(function(){
    $(".online,.offline").css('display', 'block');
  });

})
