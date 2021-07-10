$(document).ready(function(){
    // var dTable = $('#dataTable').DataTable({
    //     "iDisplayLength": 10,
    //     "paging": true,
    //     "scrollY": 400,
    //     select: true
    // });

    var choosenData = "";
    
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











    $('#editProduct').click(function(){
        // alert(choosenData.product_type);
        $('#editDialog').modal('show');
    });

    $('#brand').append(brands_drops);
    $('#product_type').append(frame_productTypes_drops);
    $('#frame_type').append(frame_types_drops);
    $('#frame_shape').append(frame_shapes_drops);
    $('#frame_size').append(frame_size_drops);
    $('#frame_width').append(frame_width_drops);
    $('#frame_dimensions').append(frame_dimensions_drops);
    $('#frame_colour').append(frame_colours_drops);
    $('#weight').append(frame_weight_drops);
    $('#weight_group').append(frame_weightGroup_drops);
    $('#frame_material').append(frame_material_drops);
    $('#frame_temple_material').append(frame_temple_material_drops);
    $('#frame_temple_colour').append(frame_temple_colours_drops);
    $('#height').append(frame_height_drops);
    $('#condition').append(frame_condition_drops);
    $('#gender').append(gender_drops);
    $('#computer_glasses').append(computer_glasses_drops);
    $('#contact_lens').append(contact_lenstypes_drops);
    $('#prescription_lens').append(prescription_Lenstypes_drops);
    $('#prescription').append(prescription_drops);





    const hideAllButDefaults = function(){
        $('.frame_props, .computer_glasses_props, .contact_lens_props, .prescription_props, .prescription_lens_props').hide();
    }

    hideAllButDefaults();            

    $(document).on('change', '#product_type', function(){
        if( ["frames"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.frame_props').show();
        }else if( ["sunglasses"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.frame_props').show();
        }else if( ["computer glasses"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.computer_glasses_props, .frame_props').show();                     
        }else if( ["contact lens"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.contact_lens_props').show(); 
        }else if( ["prescription lens"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.prescription_lens_props, .frame_props').show(); 
        }else if( ["accessories"].includes($(this).val()) ){
            //$('.computer_glasses_props, .prescription_lens_props, .contact_lens_props, .frame_props').hide();
            hideAllButDefaults();
        }
    });
    
    const clearForm = ()=>{
        $('.input').val(0);
        $('.input2').val('');
    }
    
    $('#product_type').change(function(){
        // clearForm();
    });
    
    $('#contact_lens').change(function(){        
        $(this).val() == "clear" ? $('.prescription_props').show() : $('.prescription_props').hide();
    });
    
    $('#productForm').submit(function(e){
        e.preventDefault();
        let formData = JSON.stringify($(this).serializeArray());
        $.post('api/create_product.php',{"datas":formData}, function(data){
        // clearForm();
        });                
    });


        
    });
});