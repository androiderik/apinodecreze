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
	            $scope.todos.push({ task: val, isCompleted: false });
	            params.createHasInput = true;
	        } else if (val && createHasInput) {
	            $scope.todos[$scope.todos.length - 1].task = val;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcz9hOTQwIl0sIm5hbWVzIjpbInRvZG9GYWN0b3J5IiwibW9kdWxlIiwiZmFjdG9yeSIsIiRodHRwIiwiZ2V0VGFza3MiLCIkc2NvcGUiLCJnZXQiLCJ0aGVuIiwiY3JlZGl0b3MiLCJyZXNwb25zZSIsImNyZWF0ZVRhc2siLCJwYXJhbXMiLCJjcmVhdGVUYXNrSW5wdXQiLCJwb3N0IiwidGFzayIsImlzQ29tcGxldGVkIiwiaXNFZGl0aW5nIiwidXBkYXRlVGFzayIsImNyZWRpdG8iLCJwdXQiLCJfaWQiLCJ1cGRhdGVkVGFzayIsImRlbGV0ZVRhc2siLCJjcmVkaXRvVG9EZWxldGUiLCJkZWxldGUiLCJ3YXRjaENyZWF0ZVRhc2tJbnB1dCIsInZhbCIsImNyZWF0ZUhhc0lucHV0IiwicG9wIiwidG9kb3MiLCJwdXNoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLGNBQWMsa0JBQVFDLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxFQUFsQyxFQUVuQkMsT0FGbUIsQ0FFWCxhQUZXLEVBRUksVUFBQ0MsS0FBRCxFQUFXO0FBQy9CLGNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCRixlQUFNRyxHQUFOLENBQVUsV0FBVixFQUF1QkMsSUFBdkIsQ0FBNEIsb0JBQVk7QUFDcENGLG9CQUFPRyxRQUFQLEdBQWtCQyxTQUFTRCxRQUEzQjtBQUNILFVBRkQ7QUFHSDs7QUFFRCxjQUFTRSxVQUFULENBQW9CTCxNQUFwQixFQUE0Qk0sTUFBNUIsRUFBb0M7QUFDaEMsYUFBSSxDQUFDTixPQUFPTyxlQUFaLEVBQTZCO0FBQUU7QUFBUzs7QUFFeENULGVBQU1VLElBQU4sQ0FBVyxXQUFYLEVBQXdCO0FBQ3BCQyxtQkFBTVQsT0FBT08sZUFETztBQUVwQkcsMEJBQWEsS0FGTztBQUdwQkMsd0JBQVc7QUFIUyxVQUF4QixFQUlHVCxJQUpILENBSVEsb0JBQVk7QUFDaEJILHNCQUFTQyxNQUFUO0FBQ0FBLG9CQUFPTyxlQUFQLEdBQXlCLEVBQXpCO0FBQ0gsVUFQRDs7QUFTQTtBQUNBO0FBQ0g7O0FBRUQsY0FBU0ssVUFBVCxDQUFvQlosTUFBcEIsRUFBNEJhLE9BQTVCLEVBQXFDO0FBQ2pDZixlQUFNZ0IsR0FBTixnQkFBdUJELFFBQVFFLEdBQS9CLEVBQXNDLEVBQUVOLE1BQU1JLFFBQVFHLFdBQWhCLEVBQXRDLEVBQXFFZCxJQUFyRSxDQUEwRSxvQkFBWTtBQUNsRkgsc0JBQVNDLE1BQVQ7QUFDQWEscUJBQVFGLFNBQVIsR0FBb0IsS0FBcEI7QUFDSCxVQUhEOztBQUtBO0FBQ0E7QUFDSDs7QUFFRCxjQUFTTSxVQUFULENBQW9CakIsTUFBcEIsRUFBNEJrQixlQUE1QixFQUE2QztBQUN6Q3BCLGVBQU1xQixNQUFOLGdCQUEwQkQsZ0JBQWdCSCxHQUExQyxFQUFpRGIsSUFBakQsQ0FBc0Qsb0JBQVk7QUFDOURILHNCQUFTQyxNQUFUO0FBQ0gsVUFGRDs7QUFJQTtBQUNIOztBQUVELGNBQVNvQixvQkFBVCxDQUE4QmQsTUFBOUIsRUFBc0NOLE1BQXRDLEVBQThDcUIsR0FBOUMsRUFBbUQ7QUFDL0MsYUFBTUMsaUJBQWlCaEIsT0FBT2dCLGNBQTlCOztBQUVBLGFBQUksQ0FBQ0QsR0FBRCxJQUFRQyxjQUFaLEVBQTRCO0FBQ3hCdEIsb0JBQU9HLFFBQVAsQ0FBZ0JvQixHQUFoQjtBQUNBakIsb0JBQU9nQixjQUFQLEdBQXdCLEtBQXhCO0FBQ0gsVUFIRCxNQUdPLElBQUlELE9BQU8sQ0FBQ0MsY0FBWixFQUE0QjtBQUMvQnRCLG9CQUFPd0IsS0FBUCxDQUFhQyxJQUFiLENBQWtCLEVBQUVoQixNQUFNWSxHQUFSLEVBQWFYLGFBQWEsS0FBMUIsRUFBbEI7QUFDQUosb0JBQU9nQixjQUFQLEdBQXdCLElBQXhCO0FBQ0gsVUFITSxNQUdBLElBQUlELE9BQU9DLGNBQVgsRUFBMkI7QUFDOUJ0QixvQkFBT3dCLEtBQVAsQ0FBYXhCLE9BQU93QixLQUFQLENBQWFFLE1BQWIsR0FBc0IsQ0FBbkMsRUFBc0NqQixJQUF0QyxHQUE2Q1ksR0FBN0M7QUFDSDtBQUNKOztBQUVELFlBQU87QUFDSHRCLDJCQURHO0FBRUhNLCtCQUZHO0FBR0hPLCtCQUhHO0FBSUhLLCtCQUpHO0FBS0hHO0FBTEcsTUFBUDtBQU9ILEVBaEVtQixDQUFwQjs7bUJBa0VlekIsVyIsImZpbGUiOiIwLjIwYTc3ZTRjZTJmNDAwNTJjMjg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcbmNvbnN0IHRvZG9GYWN0b3J5ID0gYW5ndWxhci5tb2R1bGUoJ2FwcC50b2RvRmFjdG9yeScsIFtdKVxyXG5cclxuLmZhY3RvcnkoJ3RvZG9GYWN0b3J5JywgKCRodHRwKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrcygkc2NvcGUpIHtcclxuICAgICAgICAkaHR0cC5nZXQoJy9jcmVkaXRvcycpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlZGl0b3MgPSByZXNwb25zZS5jcmVkaXRvcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKCRzY29wZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCEkc2NvcGUuY3JlYXRlVGFza0lucHV0KSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAkaHR0cC5wb3N0KCcvY3JlZGl0b3MnLCB7XHJcbiAgICAgICAgICAgIHRhc2s6ICRzY29wZS5jcmVhdGVUYXNrSW5wdXQsXHJcbiAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygkc2NvcGUpO1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVGFza0lucHV0ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHBhcmFtcy5jcmVhdGVIYXNJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICRzY29wZS5jcmVhdGVUYXNrSW5wdXQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrKCRzY29wZSwgY3JlZGl0bykge1xyXG4gICAgICAgICRodHRwLnB1dChgL2NyZWRpdG9zLyR7Y3JlZGl0by5faWR9YCwgeyB0YXNrOiBjcmVkaXRvLnVwZGF0ZWRUYXNrIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygkc2NvcGUpO1xyXG4gICAgICAgICAgICBjcmVkaXRvLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0b2RvLnRhc2sgPSB0b2RvLnVwZGF0ZWRUYXNrO1xyXG4gICAgICAgIC8vIHRvZG8uaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzaygkc2NvcGUsIGNyZWRpdG9Ub0RlbGV0ZSkge1xyXG4gICAgICAgICRodHRwLmRlbGV0ZShgL2NyZWRpdG9zLyR7Y3JlZGl0b1RvRGVsZXRlLl9pZH1gKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gXy5yZW1vdmUoJHNjb3BlLnRvZG9zLCB0b2RvID0+IHRvZG8udGFzayA9PT0gdG9kb1RvRGVsZXRlLnRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdhdGNoQ3JlYXRlVGFza0lucHV0KHBhcmFtcywgJHNjb3BlLCB2YWwpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVIYXNJbnB1dCA9IHBhcmFtcy5jcmVhdGVIYXNJbnB1dDtcclxuXHJcbiAgICAgICAgaWYgKCF2YWwgJiYgY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWRpdG9zLnBvcCgpO1xyXG4gICAgICAgICAgICBwYXJhbXMuY3JlYXRlSGFzSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCAmJiAhY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZG9zLnB1c2goeyB0YXNrOiB2YWwsIGlzQ29tcGxldGVkOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgcGFyYW1zLmNyZWF0ZUhhc0lucHV0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCAmJiBjcmVhdGVIYXNJbnB1dCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9kb3NbJHNjb3BlLnRvZG9zLmxlbmd0aCAtIDFdLnRhc2sgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VGFza3MsXHJcbiAgICAgICAgY3JlYXRlVGFzayxcclxuICAgICAgICB1cGRhdGVUYXNrLFxyXG4gICAgICAgIGRlbGV0ZVRhc2ssXHJcbiAgICAgICAgd2F0Y2hDcmVhdGVUYXNrSW5wdXRcclxuICAgIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0ZhY3Rvcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mYWN0b3JpZXMvdG9kby1mYWN0b3J5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==