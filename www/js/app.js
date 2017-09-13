// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','firebase'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home',{
    url: '/',
    templateUrl: 'home.html'

  });

  $stateProvider.state('listNotes', {
    url: '/notes',
    controller: 'ListNotesCtrl',
    templateUrl: 'listNotes.html'
  });
  
  $stateProvider.state('singleNote', {
    url: '/:id',
    controller: 'SingleNoteCtrl',
    templateUrl: 'singleNote.html'
  });
  
  $stateProvider.state('addNote', {
    url: '/add',
    controller: 'AddNoteCtrl',
    templateUrl: 'addNote.html'
  });
  
  $stateProvider.state('editNote', {
    url: '/edit',
    controller: 'EditNoteCtrl',
    templateUrl: 'editNote.html'
  });
  
  $stateProvider.state('updateNote', {
    url: '/edit/:id',
    controller: 'UpdateNoteCtrl',
    templateUrl: 'updateNote.html'
  });
  
  $stateProvider.state('deleteNote', {
    url: '/delete',
    controller: 'DeleteNoteCtrl',
    templateUrl: 'deleteNote.html'
  });

  $stateProvider.state('doneNote', {
    url: '/done',
    controller: 'DoneNoteCtrl',
    templateUrl: 'doneNote.html'
  });

  $urlRouterProvider.otherwise('/');
});
