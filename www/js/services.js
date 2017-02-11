/*
app.factory('FirebaseServices', ['$scope', function($scope){

    return {

    };

}]);

*/

app.factory('noteService', function($firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref();
	var notes = $firebaseArray(ref);

	var noteService = {
		all: notes,
		get: function (noteId) {
			return notes.$getRecord(noteId);
		}
	};

	return noteService;
});