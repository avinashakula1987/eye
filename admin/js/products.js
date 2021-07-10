$(document).ready(function(){
    // var dTable = $('#dataTable').DataTable({
    //     "iDisplayLength": 10,
    //     "paging": true,
    //     "scrollY": 400,
    //     select: true
    // });

    var choosenData = "";
    $('#edit').click(function(){
        alert(choosenData.product_type);
    });
    $.post("api/products.php", function(res){
        const obj = JSON.parse(res);
        let tableGrid = "";

        var dTable = $('#dataTable').DataTable({
            "iDisplayLength": 10,
            "paging": true,
            "scrollY": 400,
            select: true,
            data:obj,
            columns: [
                { data: 'product_type' },
                { data: 'name' },
                { data: 'brand_name' },
                { data: 'model_no' },
                { data: 'date_created' },
                { data: 'date_activated' },
                { data: 'status' }                
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });

       

        $('#dataTable tbody').on( 'click', 'tr', function () {
            choosenData = dTable.row( this ).data();
            console.log(choosenData);            
        } );


        // another way to display data
        //dTable.clear() //clear content
        //obj.forEach(function(item) { //insert rows
        //  dTable.row.add([item.product_type, item.name, item.brand_name,item.model_no, item.date_created, item.date_activated, item.status])
        //})
        // dTable.draw() //update display


        // another way to display data, but data disappears when sorting, better to avoid
        // data.forEach(element => {
        //     tableGrid = tableGrid + `<tr>
        //         <td>${element.product_type}</td>
        //         <td>${element.name}</td>
        //         <td>${element.brand_name}</td>                
        //         <td>${element.model_no}</td>                
        //         <td>${element.date_created}</td>
        //         <td>${element.date_activated}</td>
        //         <td>${ element.status ? "Pending" : "Activated"}</td>
        //     </tr>`;
        // });
        // $('#dataTable tbody').html(tableGrid);


        
    });
});