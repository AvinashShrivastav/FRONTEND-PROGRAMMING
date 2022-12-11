function validateForm() {
    let x = document.getElementById('roll').value;
    if (typeof x == "number") {
      console.log(num)
      alert("Roll Number must be filled out Correctly");
      return false;
    }
  }

function javascriptTypeof() {
    var num = document.getElementById("roll").value; 
    if(typeof num == 'number'){
      
      return true;
     }
    else{
        alert("Roll Number must be Number of length 5")
        return false;
    }
}

