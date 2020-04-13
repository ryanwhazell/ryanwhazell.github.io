$(document).ready(function(){
   $.getJSON("https://aimtell.com/files/sites.json", function(data){
       var table_data = '';
       $.each(data, function(key, value){
           table_data += '<tr>'; 
           table_data += '<td>' +value.id+'</td>;
           table_data += '<td>' +value.uid+'</td>;
           table_data += '<td>' +value.url+'</td>;
           table_data += '<td>' +value.name+'</td>;
           table_data += '<td>' +value.icon+'</td>;
           table_data += '<td>' +value.promptId+'</td>;
           table_data += '<td>' +value.webPushID+'</td>;
           table_data += '<td>' +value.auto_prompt+'</td>;
           table_data += '<td>' +value.createdAt+'</td>;
           table_data += '<td>' +value.active+'</td>;
           table_data += '</tr>';
       });
       $('#table_data').append(table_data);
   }) ;
});