        $(function() {  
        	$( "#dialog-form" ).dialog({
		      autoOpen: false,
    		  height: 550,
      	      width: 600,
    		  modal: true,
    		 });
        	$( "#newIssue" ).click(function() {
    		    $( "#dialog-form" ).dialog( "open" );
                return false;
    		  });
            });
        $(function() {  
            $( "#request-form" ).dialog({
              autoOpen: false,
              height: 400,
              width: 600,
              modal: true,
             });
            $( "#requestButton" ).click(function() {
                $( "#request-form" ).dialog( "open" );
                return false;
              });
            });
