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
	
	    function deleteTask($scope, todoToDelete) {
	        $http.delete('/creditos/' + todoToDelete._id).then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcz9hOTQwIl0sIm5hbWVzIjpbInRvZG9GYWN0b3J5IiwibW9kdWxlIiwiZmFjdG9yeSIsIiRodHRwIiwiZ2V0VGFza3MiLCIkc2NvcGUiLCJnZXQiLCJ0aGVuIiwiY3JlZGl0b3MiLCJyZXNwb25zZSIsImNyZWF0ZVRhc2siLCJwYXJhbXMiLCJjcmVhdGVUYXNrSW5wdXQiLCJwb3N0IiwidGFzayIsImlzQ29tcGxldGVkIiwiaXNFZGl0aW5nIiwidXBkYXRlVGFzayIsImNyZWRpdG8iLCJwdXQiLCJfaWQiLCJ1cGRhdGVkVGFzayIsImRlbGV0ZVRhc2siLCJ0b2RvVG9EZWxldGUiLCJkZWxldGUiLCJ3YXRjaENyZWF0ZVRhc2tJbnB1dCIsInZhbCIsImNyZWF0ZUhhc0lucHV0IiwidG9kb3MiLCJwb3AiLCJwdXNoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLGNBQWMsa0JBQVFDLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxFQUFsQyxFQUVuQkMsT0FGbUIsQ0FFWCxhQUZXLEVBRUksVUFBQ0MsS0FBRCxFQUFXO0FBQy9CLGNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCRixlQUFNRyxHQUFOLENBQVUsV0FBVixFQUF1QkMsSUFBdkIsQ0FBNEIsb0JBQVk7QUFDcENGLG9CQUFPRyxRQUFQLEdBQWtCQyxTQUFTRCxRQUEzQjtBQUNILFVBRkQ7QUFHSDs7QUFFRCxjQUFTRSxVQUFULENBQW9CTCxNQUFwQixFQUE0Qk0sTUFBNUIsRUFBb0M7QUFDaEMsYUFBSSxDQUFDTixPQUFPTyxlQUFaLEVBQTZCO0FBQUU7QUFBUzs7QUFFeENULGVBQU1VLElBQU4sQ0FBVyxXQUFYLEVBQXdCO0FBQ3BCQyxtQkFBTVQsT0FBT08sZUFETztBQUVwQkcsMEJBQWEsS0FGTztBQUdwQkMsd0JBQVc7QUFIUyxVQUF4QixFQUlHVCxJQUpILENBSVEsb0JBQVk7QUFDaEJILHNCQUFTQyxNQUFUO0FBQ0FBLG9CQUFPTyxlQUFQLEdBQXlCLEVBQXpCO0FBQ0gsVUFQRDs7QUFTQTtBQUNBO0FBQ0g7O0FBRUQsY0FBU0ssVUFBVCxDQUFvQlosTUFBcEIsRUFBNEJhLE9BQTVCLEVBQXFDO0FBQ2pDZixlQUFNZ0IsR0FBTixnQkFBdUJELFFBQVFFLEdBQS9CLEVBQXNDLEVBQUVOLE1BQU1JLFFBQVFHLFdBQWhCLEVBQXRDLEVBQXFFZCxJQUFyRSxDQUEwRSxvQkFBWTtBQUNsRkgsc0JBQVNDLE1BQVQ7QUFDQWEscUJBQVFGLFNBQVIsR0FBb0IsS0FBcEI7QUFDSCxVQUhEOztBQUtBO0FBQ0E7QUFDSDs7QUFFRCxjQUFTTSxVQUFULENBQW9CakIsTUFBcEIsRUFBNEJrQixZQUE1QixFQUEwQztBQUN0Q3BCLGVBQU1xQixNQUFOLGdCQUEwQkQsYUFBYUgsR0FBdkMsRUFBOENiLElBQTlDLENBQW1ELG9CQUFZO0FBQzNESCxzQkFBU0MsTUFBVDtBQUNILFVBRkQ7O0FBSUE7QUFDSDs7QUFFRCxjQUFTb0Isb0JBQVQsQ0FBOEJkLE1BQTlCLEVBQXNDTixNQUF0QyxFQUE4Q3FCLEdBQTlDLEVBQW1EO0FBQy9DLGFBQU1DLGlCQUFpQmhCLE9BQU9nQixjQUE5Qjs7QUFFQSxhQUFJLENBQUNELEdBQUQsSUFBUUMsY0FBWixFQUE0QjtBQUN4QnRCLG9CQUFPdUIsS0FBUCxDQUFhQyxHQUFiO0FBQ0FsQixvQkFBT2dCLGNBQVAsR0FBd0IsS0FBeEI7QUFDSCxVQUhELE1BR08sSUFBSUQsT0FBTyxDQUFDQyxjQUFaLEVBQTRCO0FBQy9CdEIsb0JBQU91QixLQUFQLENBQWFFLElBQWIsQ0FBa0IsRUFBRWhCLE1BQU1ZLEdBQVIsRUFBYVgsYUFBYSxLQUExQixFQUFsQjtBQUNBSixvQkFBT2dCLGNBQVAsR0FBd0IsSUFBeEI7QUFDSCxVQUhNLE1BR0EsSUFBSUQsT0FBT0MsY0FBWCxFQUEyQjtBQUM5QnRCLG9CQUFPdUIsS0FBUCxDQUFhdkIsT0FBT3VCLEtBQVAsQ0FBYUcsTUFBYixHQUFzQixDQUFuQyxFQUFzQ2pCLElBQXRDLEdBQTZDWSxHQUE3QztBQUNIO0FBQ0o7O0FBRUQsWUFBTztBQUNIdEIsMkJBREc7QUFFSE0sK0JBRkc7QUFHSE8sK0JBSEc7QUFJSEssK0JBSkc7QUFLSEc7QUFMRyxNQUFQO0FBT0gsRUFoRW1CLENBQXBCOzttQkFrRWV6QixXIiwiZmlsZSI6IjAuNGRjZjAyNjcwNDJhNjdkMGFmNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuY29uc3QgdG9kb0ZhY3RvcnkgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnRvZG9GYWN0b3J5JywgW10pXHJcblxyXG4uZmFjdG9yeSgndG9kb0ZhY3RvcnknLCAoJGh0dHApID0+IHtcclxuICAgIGZ1bmN0aW9uIGdldFRhc2tzKCRzY29wZSkge1xyXG4gICAgICAgICRodHRwLmdldCgnL2NyZWRpdG9zJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVkaXRvcyA9IHJlc3BvbnNlLmNyZWRpdG9zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2soJHNjb3BlLCBwYXJhbXMpIHtcclxuICAgICAgICBpZiAoISRzY29wZS5jcmVhdGVUYXNrSW5wdXQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICRodHRwLnBvc3QoJy9jcmVkaXRvcycsIHtcclxuICAgICAgICAgICAgdGFzazogJHNjb3BlLmNyZWF0ZVRhc2tJbnB1dCxcclxuICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCRzY29wZSk7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVUYXNrSW5wdXQgPSAnJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcGFyYW1zLmNyZWF0ZUhhc0lucHV0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gJHNjb3BlLmNyZWF0ZVRhc2tJbnB1dCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2soJHNjb3BlLCBjcmVkaXRvKSB7XHJcbiAgICAgICAgJGh0dHAucHV0KGAvY3JlZGl0b3MvJHtjcmVkaXRvLl9pZH1gLCB7IHRhc2s6IGNyZWRpdG8udXBkYXRlZFRhc2sgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCRzY29wZSk7XHJcbiAgICAgICAgICAgIGNyZWRpdG8uaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRvZG8udGFzayA9IHRvZG8udXBkYXRlZFRhc2s7XHJcbiAgICAgICAgLy8gdG9kby5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKCRzY29wZSwgdG9kb1RvRGVsZXRlKSB7XHJcbiAgICAgICAgJGh0dHAuZGVsZXRlKGAvY3JlZGl0b3MvJHt0b2RvVG9EZWxldGUuX2lkfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygkc2NvcGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBfLnJlbW92ZSgkc2NvcGUudG9kb3MsIHRvZG8gPT4gdG9kby50YXNrID09PSB0b2RvVG9EZWxldGUudGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd2F0Y2hDcmVhdGVUYXNrSW5wdXQocGFyYW1zLCAkc2NvcGUsIHZhbCkge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUhhc0lucHV0ID0gcGFyYW1zLmNyZWF0ZUhhc0lucHV0O1xyXG5cclxuICAgICAgICBpZiAoIXZhbCAmJiBjcmVhdGVIYXNJbnB1dCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9kb3MucG9wKCk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5jcmVhdGVIYXNJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsICYmICFjcmVhdGVIYXNJbnB1dCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9kb3MucHVzaCh7IHRhc2s6IHZhbCwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICBwYXJhbXMuY3JlYXRlSGFzSW5wdXQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsICYmIGNyZWF0ZUhhc0lucHV0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2Rvc1skc2NvcGUudG9kb3MubGVuZ3RoIC0gMV0udGFzayA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRUYXNrcyxcclxuICAgICAgICBjcmVhdGVUYXNrLFxyXG4gICAgICAgIHVwZGF0ZVRhc2ssXHJcbiAgICAgICAgZGVsZXRlVGFzayxcclxuICAgICAgICB3YXRjaENyZWF0ZVRhc2tJbnB1dFxyXG4gICAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvRmFjdG9yeTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZhY3Rvcmllcy90b2RvLWZhY3RvcnkuanMiXSwic291cmNlUm9vdCI6IiJ9