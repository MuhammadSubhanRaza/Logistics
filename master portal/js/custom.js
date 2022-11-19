
$(document).ready(function(){
  
  $(function(){
    $('#downloadable_table').DataTable( {
      dom: 'Bfrtip',
      buttons: [
          'excel', 'pdf'
      ]
  } );
  });

    // --------- DATATABLE ----------
    $(function(){
      $('#myTable').DataTable();
    });

    // ---------- TOOLTIP -----------
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });


      // -------------SEARCHABLE DDL ------------

      $(function(){
        $('.searchable-select-box select').selectpicker();
      });

      
      
 
    

});
