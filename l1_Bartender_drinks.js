function getDrinkByProfession(param){

switch(param.toLowerCase()) {
    case "jabroni":
        return "Patron Tequila";
        break;
    case "school counselor":
         return "Anything with Alcohol"
        break;
    case "programmer":
        return "Hipster Craft Beer";
    case "bike gang member":
        return "Moonshine";
    case "politician":
        return "Your tax dollars";
    case "rapper":
        return "Cristal";
    default:
       return "Beer"
     } 
}
