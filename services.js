angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

.factory('evenements', function ($window) {
    if (typeof $window.localStorage.localEvenements == "undefined") {
        var tmpEvenements = [
            {
                id_evenement: 0,
                city_img: "/img/paris.jpg",
                city_name: "Paris"
                user_firstname: "Marc",
                user_lastname: "maroun",
                user_id:"1"
                
            },
            {
                id_evenement: 1,
                city_img: "/img/ny.jpg",
                city_name:"New-York",
                city_name: "Paris"
                user_firstname: "EL",
                user_lastname: "Mehdi",
                user_id:"2"
                
            },
            {
                id_evenement: 2,
                city_img: "/img/londres.jpg",
                city_name: "Londres",
                city_name: "Paris"
                user_firstname: "Marc",
                user_lastname: "maroun",
                user_id:"1"

            }
           
        ];
        $window.localStorage.localEvenements = JSON.stringify(tmpEvenements);
    }
    var evenements = JSON.parse($window.localStorage.localEvenements);
    return {
        all: function () {
            return evenements;
        },
        get: function (evenementsId) {
            for (var i = 0; i < evenements.length; i++) {
                if (evenements[i].id_evenement === parseInt(evenementsId)) {
                    return evenements[i];
                }
            }
            return null;
        },
        add: function (evenement) {
            evenements.push(evenement);
        },
        save: function () {
            $window.localStorage.localEvenements = JSON.stringify(evenements);
        },
    };


});
