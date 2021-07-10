<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "eyewear";
    $conn = db_connection();

    function db_connection(){
        static $conn;        
        if( $conn == NULL ){
            $conn = mysqli_connect($GLOBALS['host'], $GLOBALS['username'], $GLOBALS['password'], $GLOBALS['database']);        
        }
        return $conn;
    }

    function register(){}
    function login(){}
    function resetPassword(){}

    // cleaning form Data / received input data from user/admin side only
    function clean($data){
        $data = htmlspecialchars($data);
        $data = stripslashes($data);
        $data = trim($data);
        return $data;
    }

    // hashing id using md5
    function handId($id){
        $id = md5($id);
    }

    function createProductType($name){
    }
    function getProductTypes(){
        // return all product types
    }
    function updateProductType($product_type, $new_product_type){
        // update Product Type
    }

    function createCategory($product_type, $category){
        // creates new category name
    }
    function updateCategory($id, $category, $new_category){
        // update existed category title by using id
    }
    function removeCategory($id, $category){
        // remove existed category by using id
    }

    function createSubCategory($product_type, $category, $sub_category){
        // create new subcategory
    }
    function updateSubCategory($id, $sub_category, $new_sub_category){
        // create sub category by giving id of a subcategory
    }
    function removeSubCategory($id){
        // remove existed sub category by using id
    }

    function createProduct($products_Obj){
        // $product_type, $name, $description, $link, $brand, $frame_type, $frame_shape, $model_no, $frame_size, $frame_width, $frame_dimentions, $frame_colour, $weight, $weight_group, $material, $frame_material, $height, $condition, $temple_colour, $warranty, $gender;
    }
    function updateProduct(){}
    function getProducts(){}
    function totalProductsCount(){}

    function createProductImages(){}
    function updateProductImages(){}

    function getUsers(){}    
    function alertUser(){}
    function alertUsers(){}
    function totalUsersCount(){} // can be retrieved by location, productwise, etc..

    function getOrders(){}
    function getPendingOrders(){}    
    function getCompletedOrders(){}
    function getActiveOrders(){}
    function getInactiveOrders(){}

    function logout(){}




    // Arrays
    
?>