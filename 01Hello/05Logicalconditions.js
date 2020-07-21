var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn)
// {
//     console.log("User is logged in");
//     if(isEmailVerified)
//     {
//         console.log("Email is verified");
//         if(cardInfo)
//         {
//             console.log("card verified");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo)
{
    console.log("user should be allwoed to login");
}
    else
    {
        console.log("user is not allowed to login");
    }
