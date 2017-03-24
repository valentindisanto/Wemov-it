angular.module('starter.services', [])

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