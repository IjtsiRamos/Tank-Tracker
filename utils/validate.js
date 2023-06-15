const checkPassword= (var1,var2)=>{
    if(var1 != var2){
        alert("Passwords do not match, please try again!");
        return false;   
        }
        else{
            return true;
        }
    }
module.exports = checkPassword;