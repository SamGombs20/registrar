//
//Access the app module in the library to use the user data type
import { user } from "../../../outlook/v/code/app";


//
//Retrieve the name of the user and the business picked
export function welcome(user:user, business:string){
    set_name_and_business(user.name, business);
}
//
//Set the name of the user and the name of the business in the HTML
function set_name_and_business(name:string, business:string){
    //
//Make references to the HTML
const welcome_user = document.getElementById("welcome_user") as HTMLParagraphElement;
const business_name = document.getElementById("business") as HTMLParagraphElement;
    welcome_user.innerHTML+=name;
    business_name.innerHTML = business;
}