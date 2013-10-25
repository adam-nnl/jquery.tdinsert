//time-date-insert plugin for jQuery 1.4.4+
//NNovation Labs c/o Adam Lara
//Dual licensed under the MIT license. 
//http://www.opensource.org/licenses/mit-license.php 

(function( $ ){

  $.fn.tdInsert = function( type ) {  

    return this.each(function() {
	
		var $this = $(this);

		var mN = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		var dN = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var date= new Date();
		date.setDate(date.getDate()); 
		var dateMod = function(number){
    		if (number==1 || number==21 || number==31){return "st";}
    		else if (number==2 || number==22){return "nd";}
    		else if (number==3 || number==23){return "rd";}    
    		else{return "th";}
    		};
		var shortdate = date.toDateString();
		var longdate = dN[date.getDay()] + ', ' + mN[date.getMonth()] + ' ' + date.getDate() + dateMod(date.getDate) + ', ' + date.getFullYear();

      if ( !type || type == 'date' ) {
        //insert date into div
		$this.append(longdate);
      }
	  
	  if ( !type || type == 'date_short' ) {
        //insert date into div
		$this.append(shortdate);
      }

    });

  };
  
})( jQuery );
