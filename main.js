if(window.location.hostname === '127.0.0.1') {
    window.location = 'http://localhost:1898';
}

var auth2;




function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
    
    $('.g-signin2').hide();
    $('#signout').show();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    $('#signout').hide();
    $('.g-signin2').show();
  }


