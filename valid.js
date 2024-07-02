function check() {
     var username = document.getElementById('nom').value;
     var password = document.getElementById('pass').value;
 
   if(username === 'Pima' || password === '1234') {
     alert('Login Successful');
    } else {

    alert('Login Failed');
    }
}
