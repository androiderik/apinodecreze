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
	        $http.get('/todos').then(function (response) {
	            $scope.todos = response.todos;
	        });
	    }
	
	    function createTask($scope, params) {
	        if (!$scope.createTaskInput) {
	            return;
	        }
	
	        $http.post('/creditoss', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcz9hOTQwIl0sIm5hbWVzIjpbInRvZG9GYWN0b3J5IiwibW9kdWxlIiwiZmFjdG9yeSIsIiRodHRwIiwiZ2V0VGFza3MiLCIkc2NvcGUiLCJnZXQiLCJ0aGVuIiwidG9kb3MiLCJyZXNwb25zZSIsImNyZWF0ZVRhc2siLCJwYXJhbXMiLCJjcmVhdGVUYXNrSW5wdXQiLCJwb3N0IiwidGFzayIsImlzQ29tcGxldGVkIiwiaXNFZGl0aW5nIiwidXBkYXRlVGFzayIsInRvZG8iLCJwdXQiLCJfaWQiLCJ1cGRhdGVkVGFzayIsImRlbGV0ZVRhc2siLCJ0b2RvVG9EZWxldGUiLCJkZWxldGUiLCJ3YXRjaENyZWF0ZVRhc2tJbnB1dCIsInZhbCIsImNyZWF0ZUhhc0lucHV0IiwicG9wIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxjQUFjLGtCQUFRQyxNQUFSLENBQWUsaUJBQWYsRUFBa0MsRUFBbEMsRUFFbkJDLE9BRm1CLENBRVgsYUFGVyxFQUVJLFVBQUNDLEtBQUQsRUFBVztBQUMvQixjQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN0QkYsZUFBTUcsR0FBTixDQUFVLFFBQVYsRUFBb0JDLElBQXBCLENBQXlCLG9CQUFZO0FBQ2pDRixvQkFBT0csS0FBUCxHQUFlQyxTQUFTRCxLQUF4QjtBQUNILFVBRkQ7QUFHSDs7QUFFRCxjQUFTRSxVQUFULENBQW9CTCxNQUFwQixFQUE0Qk0sTUFBNUIsRUFBb0M7QUFDaEMsYUFBSSxDQUFDTixPQUFPTyxlQUFaLEVBQTZCO0FBQUU7QUFBUzs7QUFFeENULGVBQU1VLElBQU4sQ0FBVyxZQUFYLEVBQXlCO0FBQ3JCQyxtQkFBTVQsT0FBT08sZUFEUTtBQUVyQkcsMEJBQWEsS0FGUTtBQUdyQkMsd0JBQVc7QUFIVSxVQUF6QixFQUlHVCxJQUpILENBSVEsb0JBQVk7QUFDaEJILHNCQUFTQyxNQUFUO0FBQ0FBLG9CQUFPTyxlQUFQLEdBQXlCLEVBQXpCO0FBQ0gsVUFQRDs7QUFTQTtBQUNBO0FBQ0g7O0FBRUQsY0FBU0ssVUFBVCxDQUFvQlosTUFBcEIsRUFBNEJhLElBQTVCLEVBQWtDO0FBQzlCZixlQUFNZ0IsR0FBTixhQUFvQkQsS0FBS0UsR0FBekIsRUFBZ0MsRUFBRU4sTUFBTUksS0FBS0csV0FBYixFQUFoQyxFQUE0RGQsSUFBNUQsQ0FBaUUsb0JBQVk7QUFDekVILHNCQUFTQyxNQUFUO0FBQ0FhLGtCQUFLRixTQUFMLEdBQWlCLEtBQWpCO0FBQ0gsVUFIRDs7QUFLQTtBQUNBO0FBQ0g7O0FBRUQsY0FBU00sVUFBVCxDQUFvQmpCLE1BQXBCLEVBQTRCa0IsWUFBNUIsRUFBMEM7QUFDdENwQixlQUFNcUIsTUFBTixhQUF1QkQsYUFBYUgsR0FBcEMsRUFBMkNiLElBQTNDLENBQWdELG9CQUFZO0FBQ3hESCxzQkFBU0MsTUFBVDtBQUNILFVBRkQ7O0FBSUE7QUFDSDs7QUFFRCxjQUFTb0Isb0JBQVQsQ0FBOEJkLE1BQTlCLEVBQXNDTixNQUF0QyxFQUE4Q3FCLEdBQTlDLEVBQW1EO0FBQy9DLGFBQU1DLGlCQUFpQmhCLE9BQU9nQixjQUE5Qjs7QUFFQSxhQUFJLENBQUNELEdBQUQsSUFBUUMsY0FBWixFQUE0QjtBQUN4QnRCLG9CQUFPRyxLQUFQLENBQWFvQixHQUFiO0FBQ0FqQixvQkFBT2dCLGNBQVAsR0FBd0IsS0FBeEI7QUFDSCxVQUhELE1BR08sSUFBSUQsT0FBTyxDQUFDQyxjQUFaLEVBQTRCO0FBQy9CdEIsb0JBQU9HLEtBQVAsQ0FBYXFCLElBQWIsQ0FBa0IsRUFBRWYsTUFBTVksR0FBUixFQUFhWCxhQUFhLEtBQTFCLEVBQWxCO0FBQ0FKLG9CQUFPZ0IsY0FBUCxHQUF3QixJQUF4QjtBQUNILFVBSE0sTUFHQSxJQUFJRCxPQUFPQyxjQUFYLEVBQTJCO0FBQzlCdEIsb0JBQU9HLEtBQVAsQ0FBYUgsT0FBT0csS0FBUCxDQUFhc0IsTUFBYixHQUFzQixDQUFuQyxFQUFzQ2hCLElBQXRDLEdBQTZDWSxHQUE3QztBQUNIO0FBQ0o7O0FBRUQsWUFBTztBQUNIdEIsMkJBREc7QUFFSE0sK0JBRkc7QUFHSE8sK0JBSEc7QUFJSEssK0JBSkc7QUFLSEc7QUFMRyxNQUFQO0FBT0gsRUFoRW1CLENBQXBCOzttQkFrRWV6QixXIiwiZmlsZSI6IjAuYjQwY2UwOGU1YmM2OTg4ZTRkOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuY29uc3QgdG9kb0ZhY3RvcnkgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnRvZG9GYWN0b3J5JywgW10pXHJcblxyXG4uZmFjdG9yeSgndG9kb0ZhY3RvcnknLCAoJGh0dHApID0+IHtcclxuICAgIGZ1bmN0aW9uIGdldFRhc2tzKCRzY29wZSkge1xyXG4gICAgICAgICRodHRwLmdldCgnL3RvZG9zJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2RvcyA9IHJlc3BvbnNlLnRvZG9zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2soJHNjb3BlLCBwYXJhbXMpIHtcclxuICAgICAgICBpZiAoISRzY29wZS5jcmVhdGVUYXNrSW5wdXQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICRodHRwLnBvc3QoJy9jcmVkaXRvc3MnLCB7XHJcbiAgICAgICAgICAgIHRhc2s6ICRzY29wZS5jcmVhdGVUYXNrSW5wdXQsXHJcbiAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygkc2NvcGUpO1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVGFza0lucHV0ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHBhcmFtcy5jcmVhdGVIYXNJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICRzY29wZS5jcmVhdGVUYXNrSW5wdXQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUYXNrKCRzY29wZSwgdG9kbykge1xyXG4gICAgICAgICRodHRwLnB1dChgL3RvZG9zLyR7dG9kby5faWR9YCwgeyB0YXNrOiB0b2RvLnVwZGF0ZWRUYXNrIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygkc2NvcGUpO1xyXG4gICAgICAgICAgICB0b2RvLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0b2RvLnRhc2sgPSB0b2RvLnVwZGF0ZWRUYXNrO1xyXG4gICAgICAgIC8vIHRvZG8uaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzaygkc2NvcGUsIHRvZG9Ub0RlbGV0ZSkge1xyXG4gICAgICAgICRodHRwLmRlbGV0ZShgL3RvZG9zLyR7dG9kb1RvRGVsZXRlLl9pZH1gKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gXy5yZW1vdmUoJHNjb3BlLnRvZG9zLCB0b2RvID0+IHRvZG8udGFzayA9PT0gdG9kb1RvRGVsZXRlLnRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdhdGNoQ3JlYXRlVGFza0lucHV0KHBhcmFtcywgJHNjb3BlLCB2YWwpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVIYXNJbnB1dCA9IHBhcmFtcy5jcmVhdGVIYXNJbnB1dDtcclxuXHJcbiAgICAgICAgaWYgKCF2YWwgJiYgY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZG9zLnBvcCgpO1xyXG4gICAgICAgICAgICBwYXJhbXMuY3JlYXRlSGFzSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCAmJiAhY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZG9zLnB1c2goeyB0YXNrOiB2YWwsIGlzQ29tcGxldGVkOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgcGFyYW1zLmNyZWF0ZUhhc0lucHV0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCAmJiBjcmVhdGVIYXNJbnB1dCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9kb3NbJHNjb3BlLnRvZG9zLmxlbmd0aCAtIDFdLnRhc2sgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VGFza3MsXHJcbiAgICAgICAgY3JlYXRlVGFzayxcclxuICAgICAgICB1cGRhdGVUYXNrLFxyXG4gICAgICAgIGRlbGV0ZVRhc2ssXHJcbiAgICAgICAgd2F0Y2hDcmVhdGVUYXNrSW5wdXRcclxuICAgIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0ZhY3Rvcnk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mYWN0b3JpZXMvdG9kby1mYWN0b3J5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==