//time-date-insert plugin for jQuery 1.4.4+
//Copyright(c) 2012 NNovation Labs, Adam Lara
//Licensed under the MIT  license. 
//http://www.opensource.org/licenses/mit-license.php 

(function( $ ){

  $.fn.tdInsert = function (type) {

      return this.each(function () {
          var $this = $(this);

          var mN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var dN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var date = new Date();
          date.setDate(date.getDate());
          var dateMod = function (number) {
              if (number == 1 || number == 21 || number == 31) {
                  return "st";
              } else if (number == 2 || number == 22) {
                  return "nd";
              } else if (number == 3 || number == 23) {
                  return "rd";
              } else {
                  return "th";
              }
          };
          var shortdate = date.toDateString();
          var longdate = dN[date.getDay()] + ', ' + mN[date.getMonth()] + ' ' + date.getDate() + dateMod(date.getDate) + ', ' + date.getFullYear();

          if (!type || type == 'date') {
              $this.append(longdate);
          }

          if (!type || type == 'date_short') {
              $this.append(shortdate);
          }

          if (!type || type == 'date_time') {
              setInterval(function () {
                  var rt_date = new Date();
                  var currentHours = rt_date.getHours();
                  var currentMinutes = rt_date.getMinutes();
                  var currentSeconds = rt_date.getSeconds();
                  currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
                  currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;
                  var timeOfDay = (currentHours < 12) ? 'am' : 'pm';
                  currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
                  currentHours = (currentHours == 0) ? 12 : currentHours;
                  var currentTimeString = currentHours + ':' + currentMinutes + ':' + currentSeconds + timeOfDay;

                  $this.html(longdate + ' ' + currentTimeString);
              }, 1000);
          }



      });

  };
  
})( jQuery );
