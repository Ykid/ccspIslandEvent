$(function() {  
    $( "#issueForm" ).dialog({
        autoOpen: false,
        height: screen.height * 0.85,
        width: screen.width * 0.7,
        modal: true,
    });
    
    $( "#newIssue" ).click(function() {
        $( "#issueForm" ).dialog( "open" );
        return false;
    });
    
    $( "#request-form" ).dialog({
        autoOpen: false,
        height: screen.height * 0.85,
        width: screen.width * 0.7,
        modal: true,
    });
    
    $( "#requestButton" ).click(function() {
        $( "#request-form" ).dialog( "open" );
        return false;
    });
});
