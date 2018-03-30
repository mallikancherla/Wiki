$(document).ready(function() {
    
   
 
   $('#submit').click(function (evt) {
     
      evt.preventDefault();
      var limi = $('input[name="radio"]:checked').val();
      	   var $submitButton = $('#submit');
      var $searchField = $('.inpp');
	  var dataa = $searchField.val();
      $searchField.prop("disabled",true);
      $submitButton.attr("disabled", true).val("searching....");
      
      $('#content').html('');
      
       
      $.getJSON("https://en.wikipedia.org/w/api.php?callback=?",{  action:"query",list:"search",srsearch:dataa, limit:limi ,  format:"json"},
      function(data){
        		var setHTML = '';

      			for(i=0;i<limi;i++){
					setHTML += "<div class='content'>";
					setHTML += '<h4>'+data.query.search[i].title+'</h4>';
					setHTML +='<p>'+data.query.search[i].snippet+'</p>';
					setHTML +="<a href='https://en.wikipedia.org/wiki/" + data.query.search[i].title + "'></a>";
					setHTML +='</div>';	
					} //for
          $('#content').html(setHTML);
        }  );//end fun
        
        $searchField.prop("disabled", false);
        $submitButton.attr("disabled", false).val("Search");
      // end getJSON
  
    }); // end click
  
  });//end ready