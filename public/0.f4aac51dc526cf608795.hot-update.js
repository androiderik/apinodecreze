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
	        $http.get('/').then(function (response) {
	            $scope.todos = response.todos;
	        });
	    }
	
	    function createTask($scope, params) {
	        if (!$scope.createTaskInput) {
	            return;
	        }
	
	        $http.post('/todos', {
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
	
	    function updateTask($scope, todo) {
	        $http.put('/todos/' + todo._id, { task: todo.updatedTask }).then(function (response) {
	            getTasks($scope);
	            todo.isEditing = false;
	        });
	
	        // todo.task = todo.updatedTask;
	        // todo.isEditing = false;
	    }
	
	    function deleteTask($scope, todoToDelete) {
	        $http.delete('/todos/' + todoToDelete._id).then(function (response) {
	            getTasks($scope);
	        });
	
	        // _.remove($scope.todos, todo => todo.task === todoToDelete.task);
	    }
	
	    function watchCreateTaskInput(params, $scope, val) {
	        var createHasInput = params.createHasInput;
	
	        if (!val && createHasInput) {
	            $scope.todos.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcz9hOTQwIl0sIm5hbWVzIjpbInRvZG9GYWN0b3J5IiwibW9kdWxlIiwiZmFjdG9yeSIsIiRodHRwIiwiZ2V0VGFza3MiLCIkc2NvcGUiLCJnZXQiLCJ0aGVuIiwidG9kb3MiLCJyZXNwb25zZSIsImNyZWF0ZVRhc2siLCJwYXJhbXMiLCJjcmVhdGVUYXNrSW5wdXQiLCJwb3N0IiwidGFzayIsImlzQ29tcGxldGVkIiwiaXNFZGl0aW5nIiwidXBkYXRlVGFzayIsInRvZG8iLCJwdXQiLCJfaWQiLCJ1cGRhdGVkVGFzayIsImRlbGV0ZVRhc2siLCJ0b2RvVG9EZWxldGUiLCJkZWxldGUiLCJ3YXRjaENyZWF0ZVRhc2tJbnB1dCIsInZhbCIsImNyZWF0ZUhhc0lucHV0IiwicG9wIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxjQUFjLGtCQUFRQyxNQUFSLENBQWUsaUJBQWYsRUFBa0MsRUFBbEMsRUFFbkJDLE9BRm1CLENBRVgsYUFGVyxFQUVJLFVBQUNDLEtBQUQsRUFBVztBQUMvQixjQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN0QkYsZUFBTUcsR0FBTixDQUFVLEdBQVYsRUFBZUMsSUFBZixDQUFvQixvQkFBWTtBQUM1QkYsb0JBQU9HLEtBQVAsR0FBZUMsU0FBU0QsS0FBeEI7QUFDSCxVQUZEO0FBR0g7O0FBRUQsY0FBU0UsVUFBVCxDQUFvQkwsTUFBcEIsRUFBNEJNLE1BQTVCLEVBQW9DO0FBQ2hDLGFBQUksQ0FBQ04sT0FBT08sZUFBWixFQUE2QjtBQUFFO0FBQVM7O0FBRXhDVCxlQUFNVSxJQUFOLENBQVcsUUFBWCxFQUFxQjtBQUNqQkMsbUJBQU1ULE9BQU9PLGVBREk7QUFFakJHLDBCQUFhLEtBRkk7QUFHakJDLHdCQUFXO0FBSE0sVUFBckIsRUFJR1QsSUFKSCxDQUlRLG9CQUFZO0FBQ2hCSCxzQkFBU0MsTUFBVDtBQUNBQSxvQkFBT08sZUFBUCxHQUF5QixFQUF6QjtBQUNILFVBUEQ7O0FBU0E7QUFDQTtBQUNIOztBQUVELGNBQVNLLFVBQVQsQ0FBb0JaLE1BQXBCLEVBQTRCYSxJQUE1QixFQUFrQztBQUM5QmYsZUFBTWdCLEdBQU4sYUFBb0JELEtBQUtFLEdBQXpCLEVBQWdDLEVBQUVOLE1BQU1JLEtBQUtHLFdBQWIsRUFBaEMsRUFBNERkLElBQTVELENBQWlFLG9CQUFZO0FBQ3pFSCxzQkFBU0MsTUFBVDtBQUNBYSxrQkFBS0YsU0FBTCxHQUFpQixLQUFqQjtBQUNILFVBSEQ7O0FBS0E7QUFDQTtBQUNIOztBQUVELGNBQVNNLFVBQVQsQ0FBb0JqQixNQUFwQixFQUE0QmtCLFlBQTVCLEVBQTBDO0FBQ3RDcEIsZUFBTXFCLE1BQU4sYUFBdUJELGFBQWFILEdBQXBDLEVBQTJDYixJQUEzQyxDQUFnRCxvQkFBWTtBQUN4REgsc0JBQVNDLE1BQVQ7QUFDSCxVQUZEOztBQUlBO0FBQ0g7O0FBRUQsY0FBU29CLG9CQUFULENBQThCZCxNQUE5QixFQUFzQ04sTUFBdEMsRUFBOENxQixHQUE5QyxFQUFtRDtBQUMvQyxhQUFNQyxpQkFBaUJoQixPQUFPZ0IsY0FBOUI7O0FBRUEsYUFBSSxDQUFDRCxHQUFELElBQVFDLGNBQVosRUFBNEI7QUFDeEJ0QixvQkFBT0csS0FBUCxDQUFhb0IsR0FBYjtBQUNBakIsb0JBQU9nQixjQUFQLEdBQXdCLEtBQXhCO0FBQ0gsVUFIRCxNQUdPLElBQUlELE9BQU8sQ0FBQ0MsY0FBWixFQUE0QjtBQUMvQnRCLG9CQUFPRyxLQUFQLENBQWFxQixJQUFiLENBQWtCLEVBQUVmLE1BQU1ZLEdBQVIsRUFBYVgsYUFBYSxLQUExQixFQUFsQjtBQUNBSixvQkFBT2dCLGNBQVAsR0FBd0IsSUFBeEI7QUFDSCxVQUhNLE1BR0EsSUFBSUQsT0FBT0MsY0FBWCxFQUEyQjtBQUM5QnRCLG9CQUFPRyxLQUFQLENBQWFILE9BQU9HLEtBQVAsQ0FBYXNCLE1BQWIsR0FBc0IsQ0FBbkMsRUFBc0NoQixJQUF0QyxHQUE2Q1ksR0FBN0M7QUFDSDtBQUNKOztBQUVELFlBQU87QUFDSHRCLDJCQURHO0FBRUhNLCtCQUZHO0FBR0hPLCtCQUhHO0FBSUhLLCtCQUpHO0FBS0hHO0FBTEcsTUFBUDtBQU9ILEVBaEVtQixDQUFwQjs7bUJBa0VlekIsVyIsImZpbGUiOiIwLmY0YWFjNTFkYzUyNmNmNjA4Nzk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcbmNvbnN0IHRvZG9GYWN0b3J5ID0gYW5ndWxhci5tb2R1bGUoJ2FwcC50b2RvRmFjdG9yeScsIFtdKVxyXG5cclxuLmZhY3RvcnkoJ3RvZG9GYWN0b3J5JywgKCRodHRwKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrcygkc2NvcGUpIHtcclxuICAgICAgICAkaHR0cC5nZXQoJy8nKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZG9zID0gcmVzcG9uc2UudG9kb3M7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygkc2NvcGUsIHBhcmFtcykge1xyXG4gICAgICAgIGlmICghJHNjb3BlLmNyZWF0ZVRhc2tJbnB1dCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgJGh0dHAucG9zdCgnL3RvZG9zJywge1xyXG4gICAgICAgICAgICB0YXNrOiAkc2NvcGUuY3JlYXRlVGFza0lucHV0LFxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2VcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWF0ZVRhc2tJbnB1dCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBwYXJhbXMuY3JlYXRlSGFzSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICAvLyAkc2NvcGUuY3JlYXRlVGFza0lucHV0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVGFzaygkc2NvcGUsIHRvZG8pIHtcclxuICAgICAgICAkaHR0cC5wdXQoYC90b2Rvcy8ke3RvZG8uX2lkfWAsIHsgdGFzazogdG9kby51cGRhdGVkVGFzayB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICAgICAgdG9kby5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdG9kby50YXNrID0gdG9kby51cGRhdGVkVGFzaztcclxuICAgICAgICAvLyB0b2RvLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2soJHNjb3BlLCB0b2RvVG9EZWxldGUpIHtcclxuICAgICAgICAkaHR0cC5kZWxldGUoYC90b2Rvcy8ke3RvZG9Ub0RlbGV0ZS5faWR9YCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCRzY29wZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIF8ucmVtb3ZlKCRzY29wZS50b2RvcywgdG9kbyA9PiB0b2RvLnRhc2sgPT09IHRvZG9Ub0RlbGV0ZS50YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3YXRjaENyZWF0ZVRhc2tJbnB1dChwYXJhbXMsICRzY29wZSwgdmFsKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSGFzSW5wdXQgPSBwYXJhbXMuY3JlYXRlSGFzSW5wdXQ7XHJcblxyXG4gICAgICAgIGlmICghdmFsICYmIGNyZWF0ZUhhc0lucHV0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2Rvcy5wb3AoKTtcclxuICAgICAgICAgICAgcGFyYW1zLmNyZWF0ZUhhc0lucHV0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgJiYgIWNyZWF0ZUhhc0lucHV0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2Rvcy5wdXNoKHsgdGFzazogdmFsLCBpc0NvbXBsZXRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5jcmVhdGVIYXNJbnB1dCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgJiYgY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZG9zWyRzY29wZS50b2Rvcy5sZW5ndGggLSAxXS50YXNrID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFRhc2tzLFxyXG4gICAgICAgIGNyZWF0ZVRhc2ssXHJcbiAgICAgICAgdXBkYXRlVGFzayxcclxuICAgICAgICBkZWxldGVUYXNrLFxyXG4gICAgICAgIHdhdGNoQ3JlYXRlVGFza0lucHV0XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9GYWN0b3J5O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=