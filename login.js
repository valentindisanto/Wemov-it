 openFB.init({appId: '1855532298067108'});

    function login() {
        openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                        getInfo();
                        alert('Vous êtes connectés' );

                       window.location=('Page2.html');

                    } else {
                        alert('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email,public_profile,publish_actions'});
    
    }


    function getInfo() {
        openFB.api({
            path: '/me',
            success: function(data) {

                var firstName = data.name.split(' ').slice(0, -1).join(' ');
                var lastName = data.name.split(' ').slice(-1).join(' ');
                
       $.ajax({
       url : 'inscription.php',
       type : 'POST', 
       data : {"nom": lastName, "prenom": firstName}

    });
            },
            
            error: errorHandler});
    }


    function errorHandler(error) {
        alert(error.message);
    }


