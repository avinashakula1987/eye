const frame_productTypes_drops = dropDowns.data_dropdowns("Product Type",["computer glasses","frames","sunglasses","contact lens","prescription lens","accessories"]);
const frame_types_drops = dropDowns.data_dropdowns("Frame Type",["full","half","rimless"]);
const frame_shapes_drops = dropDowns.data_dropdowns("Frame Shape",["oval","round","rectangular","cat eye","hexagon","octagon","square","mixshape","retro"]);
const frame_size_drops = dropDowns.range_dropdowns(31,70,"mm","Frame Size");
const frame_width_drops = dropDowns.range_dropdowns(90,170,"mm","Frame Width");
const frame_dimensions_drops = dropDowns.range_dropdowns(21,70,"mm","Frame Dimensions"); 
const frame_colours_drops = dropDowns.data_dropdowns("Frame Colour",["red","green","blue","white","black","purple","brown","pink","yellow","orange","silveer","grey","voilet"]);
const frame_weight_drops = dropDowns.data_dropdowns("Frame Weight",["air light","ultra light","light","echo light"]);
const frame_weightGroup_drops = dropDowns.range_jump_dropdowns(0, 1500, "gm", 10, "Weight Group");
const frame_material_drops = dropDowns.data_dropdowns("Frame Material",["TR","ultem","titanium","nickel", "metal alloys", "acetate", "propionate", "stainless steel", "aluminum"]);
const frame_temple_material_drops = dropDowns.data_dropdowns("Frame Temple Material",["metal","acetate"]);
const frame_height_drops = dropDowns.range_dropdowns(20,65,"mm","Frame Height");
const frame_condition_drops = dropDowns.data_dropdowns("Frame Condition",["new","used"]);
const frame_temple_colours_drops = dropDowns.data_dropdowns("Frame Temple Colour",["red","green","blue","white","black","purple","brown","pink","yellow","orange","silveer","grey","voilet"]);

// computer glasses
const computer_glasses_drops = dropDowns.data_dropdowns("Glass Type",["blue","light","capture"]);

// lens
const contact_lenstypes_drops = dropDowns.data_dropdowns("Contact Lens Type",["clear","cosmetic"]);
const prescription_Lenstypes_drops = dropDowns.data_dropdowns("Prescription Lens Types",["single vision","bifocal","progressive"]);
const prescription_drops = dropDowns.range_dropdowns(-30,30,"","Prescription");
const brands_drops = dropDowns.data_dropdowns("Brand",["ray ban","oakley","maui jim","americal optical","tom ford","persol","oliver peoples","prada","mykita","randolph"]);
const gender_drops = dropDowns.data_dropdowns("Gender",["male","female","others"]);