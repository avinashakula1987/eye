$(document).ready(function(){
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
        $('.frame_props, .computer_glasses_props, .contact_lens_props, .prescription_lens_props').hide();
    }

    hideAllButDefaults();            

    $(document).on('change', '#product_type', function(){
        if( ["frames","sunglasses"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.frame_props').show();
        }else if( ["computer glasses"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.computer_glasses_props').show();                     
        }else if( ["contact lens"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.contact_lens_props').show(); 
        }else if( ["prescription lens"].includes($(this).val()) ){
            hideAllButDefaults();
            $('.prescription_lens_props').show(); 
        }else{
            $('.frame_props').hide();
        }
    });
    
    const clearForm = ()=>{
        $('.input').val(0);
        $('.input2').val('');
    }
    
    $('#product_type').change(function(){
        clearForm();
    });
    
    $('#productForm').submit(function(e){
        e.preventDefault();
        let formData = JSON.stringify($(this).serializeArray());
        $.post('api/create_product.php',{"datas":formData}, function(data){
        clearForm();
        });                
    });

});