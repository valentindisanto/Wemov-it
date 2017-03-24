angular.module('starter.controllers', [])

.controller('EvenementCtrl', function ($scope, $state, evenements) {
    $scope.evenements = evenements.all();
     $scope.goToEvenement = function (evenementId) {
     $state.go('tab.tab-evenementDetail', { evenementId: evenementId });
    };


})

.controller('EvenementDetailCtrl', function ($scope, $stateParams,$http,evenements) {
    $scope.evenement = evenements.get($stateParams.evenementId);
    $scope.data = {};

    

    $scope.submit = function(){
        var link = 'php/upload.php';
 
        $bdd.post(link, {image : $scope.data.image});
    };
})




.controller('creerevenementCtrl', function ($scope, evenements, $ionicPopup) {
    $scope.evenement = evenements.get(0);
    $scope.form = {
        title: "",
        url: "",
        description: ""
    };

    $scope.addArticle = function (form) {
        var newEvenement = {
            id_evenement: evenements.all().length,
            user_firstname: "Marc",
            user_lastname: "maroun",
            user_id:"1",
            title: form.title,
            description: form.description,
            img: form.url,
            nb_comment: 0
        }
        evenements.add(newEvenement);
        evenements.save();

        var alertPopup = $ionicPopup.alert({
            title: 'Félicitation',
            template: 'Vous avez crée un nouvel évènement'
        });

        alertPopup.then(function (res) {
            $scope.form = {
                title: "",
                url: "",
                description: ""
            };
        });
    }
})



