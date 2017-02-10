// Add Note Controller
app.controller('AddNoteCtrl', ['$scope', '$firebaseArray', '$state', 'noteService', function($scope, $firebaseArray, $state, noteService) {
	// console.log("Added");
	$scope.saveNote = function () {
		$scope.newNote = noteService.all;
		$scope.newNote.$add({
			title: $scope.title,
			body: $scope.body
		});

		$state.go('home');
	}
}]);

// List All Note Controller
app.controller('ListNotesCtrl', ['$scope', 'noteService', function($scope, noteService) {
	$scope.notes = noteService.all;
}]);

// Single Note Controller
app.controller('SingleNoteCtrl', ['$scope', 'noteService', '$state', '$stateParams', function($scope, noteService, $state, $stateParams) {
	$scope.singleNotes = noteService.get($stateParams.id);
}]);

// Delete Note Controller
app.controller('DeleteNoteCtrl', ['$scope', 'noteService', '$state', '$ionicActionSheet', function($scope, noteService, $state, $ionicActionSheet) {
	$scope.notes = noteService.all;
	$scope.showDetail = function (id) {
		$ionicActionSheet.show({
			destructiveText: 'Delete',
			titleText: 'Are you sure?',
			cancelText: 'Cancel',

			destructiveButtonClicked: function() {
				var rem = $scope.notes.$getRecord(id);
				$scope.notes.$remove(rem);
				return true;
			}
		});
	};
}]);

// Edit Note Controller
app.controller('EditNoteCtrl', ['$scope', 'noteService', '$state', function($scope, noteService, $state) {
	$scope.notes = noteService.all;
}]);

// Update Note Controller
app.controller('UpdateNoteCtrl', ['$scope', 'noteService', '$state', '$stateParams', function($scope, noteService, $state, $stateParams) {
	$scope.notes = noteService.all;
	$scope.singleNote = noteService.get($stateParams.id);

	$scope.title = $scope.singleNote.title;
	$scope.body = $scope.singleNote.body;
	$scope.myid = $scope.singleNote.$id;

	$scope.updateNote = function(id) {
		var ed = $scope.notes.$getRecord(id);
		ed.title = $scope.title;
		ed.body = $scope.body;

		$scope.notes.$save(ed);
		$state.go('editNote');
	};
}]);