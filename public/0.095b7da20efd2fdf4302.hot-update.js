webpackHotUpdate(0,{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _lodash = __webpack_require__(109);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _angular = __webpack_require__(104);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var todoFactory = _angular2.default.module('app.todoFactory', []).factory('todoFactory', function ($http) {
	    function getTasks($scope) {
	        $http.get('/creditos').then(function (response) {
	            $scope.creditos = response.creditos;
	        });
	    }
	
	    function createTask($scope, params) {
	        if (!$scope.createTaskInput) {
	            return;
	        }
	
	        $http.post('/creditos', {
	            task: $scope.createTaskInput,
	            isCompleted: false,
	            isEditing: false
	        }).then(function (response) {
	            getTasks($scope);
	            $scope.createTaskInput = '';
	        });
	
	        // params.createHasInput = false;
	        // $scope.createTaskInput = '';
	    }
	
	    function updateTask($scope, credito) {
	        $http.put('/creditos/' + credito._id, { task: credito.updatedTask }).then(function (response) {
	            getTasks($scope);
	            credito.isEditing = false;
	        });
	
	        // todo.task = todo.updatedTask;
	        // todo.isEditing = false;
	    }
	
	    function deleteTask($scope, creditoToDelete) {
	        $http.delete('/creditos/' + creditoToDelete._id).then(function (response) {
	            getTasks($scope);
	        });
	
	        // _.remove($scope.todos, todo => todo.task === todoToDelete.task);
	    }
	
	    function watchCreateTaskInput(params, $scope, val) {
	        var createHasInput = params.createHasInput;
	
	        if (!val && createHasInput) {
	            $scope.creditos.pop();
	            params.createHasInput = false;
	        } else if (val && !createHasInput) {
	            $scope.creditos.push({ task: val, isCompleted: false });
	            params.createHasInput = true;
	        } else if (val && createHasInput) {
	            $scope.creditos[$scope.creditos.length - 1].task = val;
	        }
	    }
	
	    return {
	        getTasks: getTasks,
	        createTask: createTask,
	        updateTask: updateTask,
	        deleteTask: deleteTask,
	        watchCreateTaskInput: watchCreateTaskInput
	    };
	});
	
	exports.default = todoFactory;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcz9hOTQwIl0sIm5hbWVzIjpbInRvZG9GYWN0b3J5IiwibW9kdWxlIiwiZmFjdG9yeSIsIiRodHRwIiwiZ2V0VGFza3MiLCIkc2NvcGUiLCJnZXQiLCJ0aGVuIiwiY3JlZGl0b3MiLCJyZXNwb25zZSIsImNyZWF0ZVRhc2siLCJwYXJhbXMiLCJjcmVhdGVUYXNrSW5wdXQiLCJwb3N0IiwidGFzayIsImlzQ29tcGxldGVkIiwiaXNFZGl0aW5nIiwidXBkYXRlVGFzayIsImNyZWRpdG8iLCJwdXQiLCJfaWQiLCJ1cGRhdGVkVGFzayIsImRlbGV0ZVRhc2siLCJjcmVkaXRvVG9EZWxldGUiLCJkZWxldGUiLCJ3YXRjaENyZWF0ZVRhc2tJbnB1dCIsInZhbCIsImNyZWF0ZUhhc0lucHV0IiwicG9wIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxjQUFjLGtCQUFRQyxNQUFSLENBQWUsaUJBQWYsRUFBa0MsRUFBbEMsRUFFbkJDLE9BRm1CLENBRVgsYUFGVyxFQUVJLFVBQUNDLEtBQUQsRUFBVztBQUMvQixjQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN0QkYsZUFBTUcsR0FBTixDQUFVLFdBQVYsRUFBdUJDLElBQXZCLENBQTRCLG9CQUFZO0FBQ3BDRixvQkFBT0csUUFBUCxHQUFrQkMsU0FBU0QsUUFBM0I7QUFDSCxVQUZEO0FBR0g7O0FBRUQsY0FBU0UsVUFBVCxDQUFvQkwsTUFBcEIsRUFBNEJNLE1BQTVCLEVBQW9DO0FBQ2hDLGFBQUksQ0FBQ04sT0FBT08sZUFBWixFQUE2QjtBQUFFO0FBQVM7O0FBRXhDVCxlQUFNVSxJQUFOLENBQVcsV0FBWCxFQUF3QjtBQUNwQkMsbUJBQU1ULE9BQU9PLGVBRE87QUFFcEJHLDBCQUFhLEtBRk87QUFHcEJDLHdCQUFXO0FBSFMsVUFBeEIsRUFJR1QsSUFKSCxDQUlRLG9CQUFZO0FBQ2hCSCxzQkFBU0MsTUFBVDtBQUNBQSxvQkFBT08sZUFBUCxHQUF5QixFQUF6QjtBQUNILFVBUEQ7O0FBU0E7QUFDQTtBQUNIOztBQUVELGNBQVNLLFVBQVQsQ0FBb0JaLE1BQXBCLEVBQTRCYSxPQUE1QixFQUFxQztBQUNqQ2YsZUFBTWdCLEdBQU4sZ0JBQXVCRCxRQUFRRSxHQUEvQixFQUFzQyxFQUFFTixNQUFNSSxRQUFRRyxXQUFoQixFQUF0QyxFQUFxRWQsSUFBckUsQ0FBMEUsb0JBQVk7QUFDbEZILHNCQUFTQyxNQUFUO0FBQ0FhLHFCQUFRRixTQUFSLEdBQW9CLEtBQXBCO0FBQ0gsVUFIRDs7QUFLQTtBQUNBO0FBQ0g7O0FBRUQsY0FBU00sVUFBVCxDQUFvQmpCLE1BQXBCLEVBQTRCa0IsZUFBNUIsRUFBNkM7QUFDekNwQixlQUFNcUIsTUFBTixnQkFBMEJELGdCQUFnQkgsR0FBMUMsRUFBaURiLElBQWpELENBQXNELG9CQUFZO0FBQzlESCxzQkFBU0MsTUFBVDtBQUNILFVBRkQ7O0FBSUE7QUFDSDs7QUFFRCxjQUFTb0Isb0JBQVQsQ0FBOEJkLE1BQTlCLEVBQXNDTixNQUF0QyxFQUE4Q3FCLEdBQTlDLEVBQW1EO0FBQy9DLGFBQU1DLGlCQUFpQmhCLE9BQU9nQixjQUE5Qjs7QUFFQSxhQUFJLENBQUNELEdBQUQsSUFBUUMsY0FBWixFQUE0QjtBQUN4QnRCLG9CQUFPRyxRQUFQLENBQWdCb0IsR0FBaEI7QUFDQWpCLG9CQUFPZ0IsY0FBUCxHQUF3QixLQUF4QjtBQUNILFVBSEQsTUFHTyxJQUFJRCxPQUFPLENBQUNDLGNBQVosRUFBNEI7QUFDL0J0QixvQkFBT0csUUFBUCxDQUFnQnFCLElBQWhCLENBQXFCLEVBQUVmLE1BQU1ZLEdBQVIsRUFBYVgsYUFBYSxLQUExQixFQUFyQjtBQUNBSixvQkFBT2dCLGNBQVAsR0FBd0IsSUFBeEI7QUFDSCxVQUhNLE1BR0EsSUFBSUQsT0FBT0MsY0FBWCxFQUEyQjtBQUM5QnRCLG9CQUFPRyxRQUFQLENBQWdCSCxPQUFPRyxRQUFQLENBQWdCc0IsTUFBaEIsR0FBeUIsQ0FBekMsRUFBNENoQixJQUE1QyxHQUFtRFksR0FBbkQ7QUFDSDtBQUNKOztBQUVELFlBQU87QUFDSHRCLDJCQURHO0FBRUhNLCtCQUZHO0FBR0hPLCtCQUhHO0FBSUhLLCtCQUpHO0FBS0hHO0FBTEcsTUFBUDtBQU9ILEVBaEVtQixDQUFwQjs7bUJBa0VlekIsVyIsImZpbGUiOiIwLjA5NWI3ZGEyMGVmZDJmZGY0MzAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcbmNvbnN0IHRvZG9GYWN0b3J5ID0gYW5ndWxhci5tb2R1bGUoJ2FwcC50b2RvRmFjdG9yeScsIFtdKVxyXG5cclxuLmZhY3RvcnkoJ3RvZG9GYWN0b3J5JywgKCRodHRwKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrcygkc2NvcGUpIHtcclxuICAgICAgICAkaHR0cC5nZXQoJy9jcmVkaXRvcycpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlZGl0b3MgPSByZXNwb25zZS5jcmVkaXRvcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKCRzY29wZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCEkc2NvcGUuY3JlYXRlVGFza0lucHV0KSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAkaHR0cC5wb3N0KCcvY3JlZGl0b3MnLCB7XHJcbiAgICAgICAgICAgIHRhc2s6ICRzY29wZS5jcmVhdGVUYXNrSW5wdXQsXHJcbiAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygkc2NvcGUpO1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVGFza0lucHV0ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHBhcmFtcy5jcmVhdGVIYXNJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICRzY29wZS5jcmVhdGVUYXNrSW5wdXQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrKCRzY29wZSwgY3JlZGl0bykge1xyXG4gICAgICAgICRodHRwLnB1dChgL2NyZWRpdG9zLyR7Y3JlZGl0by5faWR9YCwgeyB0YXNrOiBjcmVkaXRvLnVwZGF0ZWRUYXNrIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygkc2NvcGUpO1xyXG4gICAgICAgICAgICBjcmVkaXRvLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0b2RvLnRhc2sgPSB0b2RvLnVwZGF0ZWRUYXNrO1xyXG4gICAgICAgIC8vIHRvZG8uaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzaygkc2NvcGUsIGNyZWRpdG9Ub0RlbGV0ZSkge1xyXG4gICAgICAgICRodHRwLmRlbGV0ZShgL2NyZWRpdG9zLyR7Y3JlZGl0b1RvRGVsZXRlLl9pZH1gKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gXy5yZW1vdmUoJHNjb3BlLnRvZG9zLCB0b2RvID0+IHRvZG8udGFzayA9PT0gdG9kb1RvRGVsZXRlLnRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdhdGNoQ3JlYXRlVGFza0lucHV0KHBhcmFtcywgJHNjb3BlLCB2YWwpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVIYXNJbnB1dCA9IHBhcmFtcy5jcmVhdGVIYXNJbnB1dDtcclxuXHJcbiAgICAgICAgaWYgKCF2YWwgJiYgY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWRpdG9zLnBvcCgpO1xyXG4gICAgICAgICAgICBwYXJhbXMuY3JlYXRlSGFzSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCAmJiAhY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWRpdG9zLnB1c2goeyB0YXNrOiB2YWwsIGlzQ29tcGxldGVkOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgcGFyYW1zLmNyZWF0ZUhhc0lucHV0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCAmJiBjcmVhdGVIYXNJbnB1dCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlZGl0b3NbJHNjb3BlLmNyZWRpdG9zLmxlbmd0aCAtIDFdLnRhc2sgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VGFza3MsXHJcbiAgICAgICAgY3JlYXRlVGFzayxcclxuICAgICAgICB1cGRhdGVUYXNrLFxyXG4gICAgICAgIGRlbGV0ZVRhc2ssXHJcbiAgICAgICAgd2F0Y2hDcmVhdGVUYXNrSW5wdXRcclxuICAgIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0ZhY3Rvcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mYWN0b3JpZXMvdG9kby1mYWN0b3J5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==