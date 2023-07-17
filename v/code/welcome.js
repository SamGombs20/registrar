//
//Retrieve the name of the user and the business picked
export function welcome(user, business) {
    set_name_and_business(user.name, business);
}
//
//Set the name of the user and the name of the business in the HTML
function set_name_and_business(name, business) {
    //
    //Make references to the HTML
    const welcome_user = document.getElementById("welcome_user");
    const business_name = document.getElementById("business");
    welcome_user.innerHTML += name;
    business_name.innerHTML = business;
}
