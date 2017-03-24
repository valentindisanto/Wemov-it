// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})





function recup() 
{
   huu = document.getElementById("liste").value;
   alert(huu);
}

function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 50;
     
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

    // Each tab has its own nav history stack:

    .state('tab.evenement', {
        url: '/evenement',
        views: {
            'tab-evenement': {
                templateUrl: 'templates/tab-evenement.html',
                controller: 'EvenementCtrl'
            }
        }
    })
    
    .state('tab.creerevenement', {
        url: '/creerevenement',
        views: {
            'tab-creerevenement': {
                templateUrl: 'templates/tab-creerevenement.html',
                controller: 'creerevenementCtrl'
            }
        }
    })

    .state('tab.tab-evenementDetail', {
            url: '/evenement/:evenementId',
            views: {
                'tab-evenement': {
                    templateUrl: 'templates/tab-evenementDetail.html',
                    controller: 'EvenementDetailCtrl'
                }
            }
        })   
    .state('tab.profil',{
        url:'/profil/:userId',
        views:{
            'tab-profil':{
                templateUrl:'templates/tab-profile.html',
                controller:'profilCtrl'
            }
        }
    })

      ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/evenement');

})

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});
