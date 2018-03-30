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
          setHTML +="<a href='https://en.wikipedia.org/wiki/ '"+ data.query.search[i].title + '>';
					setHTML += "<div class='content'>";
					setHTML += '<h4 class="title">'+data.query.search[i].title+'</h4>';
					setHTML +='<p class="snippet">'+data.query.search[i].snippet+'</p>';
          setHTML +='</div>';	
          setHTML +="</a>";
					} //for
          $('#content').html(setHTML);
        }  );//end fun
        
        $searchField.prop("disabled", false);
        $submitButton.attr("disabled", false).val("Search");
      // end getJSON
  
    }); // end click
  
  });//end ready