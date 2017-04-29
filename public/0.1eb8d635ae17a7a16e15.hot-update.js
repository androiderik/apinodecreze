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
	
	var creditoFactory = _angular2.default.module('app.creditoFactory', []).factory('creditoFactory', function ($http) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcz9hOTQwIl0sIm5hbWVzIjpbImNyZWRpdG9GYWN0b3J5IiwibW9kdWxlIiwiZmFjdG9yeSIsIiRodHRwIiwiZ2V0VGFza3MiLCIkc2NvcGUiLCJnZXQiLCJ0aGVuIiwiY3JlZGl0b3MiLCJyZXNwb25zZSIsImNyZWF0ZVRhc2siLCJwYXJhbXMiLCJjcmVhdGVUYXNrSW5wdXQiLCJwb3N0IiwidGFzayIsImlzQ29tcGxldGVkIiwiaXNFZGl0aW5nIiwidXBkYXRlVGFzayIsImNyZWRpdG8iLCJwdXQiLCJfaWQiLCJ1cGRhdGVkVGFzayIsImRlbGV0ZVRhc2siLCJjcmVkaXRvVG9EZWxldGUiLCJkZWxldGUiLCJ3YXRjaENyZWF0ZVRhc2tJbnB1dCIsInZhbCIsImNyZWF0ZUhhc0lucHV0IiwicG9wIiwicHVzaCIsImxlbmd0aCIsInRvZG9GYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLGlCQUFpQixrQkFBUUMsTUFBUixDQUFlLG9CQUFmLEVBQXFDLEVBQXJDLEVBRXRCQyxPQUZzQixDQUVkLGdCQUZjLEVBRUksVUFBQ0MsS0FBRCxFQUFXO0FBQ2xDLGNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCRixlQUFNRyxHQUFOLENBQVUsV0FBVixFQUF1QkMsSUFBdkIsQ0FBNEIsb0JBQVk7QUFDcENGLG9CQUFPRyxRQUFQLEdBQWtCQyxTQUFTRCxRQUEzQjtBQUNILFVBRkQ7QUFHSDs7QUFFRCxjQUFTRSxVQUFULENBQW9CTCxNQUFwQixFQUE0Qk0sTUFBNUIsRUFBb0M7QUFDaEMsYUFBSSxDQUFDTixPQUFPTyxlQUFaLEVBQTZCO0FBQUU7QUFBUzs7QUFFeENULGVBQU1VLElBQU4sQ0FBVyxXQUFYLEVBQXdCO0FBQ3BCQyxtQkFBTVQsT0FBT08sZUFETztBQUVwQkcsMEJBQWEsS0FGTztBQUdwQkMsd0JBQVc7QUFIUyxVQUF4QixFQUlHVCxJQUpILENBSVEsb0JBQVk7QUFDaEJILHNCQUFTQyxNQUFUO0FBQ0FBLG9CQUFPTyxlQUFQLEdBQXlCLEVBQXpCO0FBQ0gsVUFQRDs7QUFTQTtBQUNBO0FBQ0g7O0FBRUQsY0FBU0ssVUFBVCxDQUFvQlosTUFBcEIsRUFBNEJhLE9BQTVCLEVBQXFDO0FBQ2pDZixlQUFNZ0IsR0FBTixnQkFBdUJELFFBQVFFLEdBQS9CLEVBQXNDLEVBQUVOLE1BQU1JLFFBQVFHLFdBQWhCLEVBQXRDLEVBQXFFZCxJQUFyRSxDQUEwRSxvQkFBWTtBQUNsRkgsc0JBQVNDLE1BQVQ7QUFDQWEscUJBQVFGLFNBQVIsR0FBb0IsS0FBcEI7QUFDSCxVQUhEOztBQUtBO0FBQ0E7QUFDSDs7QUFFRCxjQUFTTSxVQUFULENBQW9CakIsTUFBcEIsRUFBNEJrQixlQUE1QixFQUE2QztBQUN6Q3BCLGVBQU1xQixNQUFOLGdCQUEwQkQsZ0JBQWdCSCxHQUExQyxFQUFpRGIsSUFBakQsQ0FBc0Qsb0JBQVk7QUFDOURILHNCQUFTQyxNQUFUO0FBQ0gsVUFGRDs7QUFJQTtBQUNIOztBQUVELGNBQVNvQixvQkFBVCxDQUE4QmQsTUFBOUIsRUFBc0NOLE1BQXRDLEVBQThDcUIsR0FBOUMsRUFBbUQ7QUFDL0MsYUFBTUMsaUJBQWlCaEIsT0FBT2dCLGNBQTlCOztBQUVBLGFBQUksQ0FBQ0QsR0FBRCxJQUFRQyxjQUFaLEVBQTRCO0FBQ3hCdEIsb0JBQU9HLFFBQVAsQ0FBZ0JvQixHQUFoQjtBQUNBakIsb0JBQU9nQixjQUFQLEdBQXdCLEtBQXhCO0FBQ0gsVUFIRCxNQUdPLElBQUlELE9BQU8sQ0FBQ0MsY0FBWixFQUE0QjtBQUMvQnRCLG9CQUFPRyxRQUFQLENBQWdCcUIsSUFBaEIsQ0FBcUIsRUFBRWYsTUFBTVksR0FBUixFQUFhWCxhQUFhLEtBQTFCLEVBQXJCO0FBQ0FKLG9CQUFPZ0IsY0FBUCxHQUF3QixJQUF4QjtBQUNILFVBSE0sTUFHQSxJQUFJRCxPQUFPQyxjQUFYLEVBQTJCO0FBQzlCdEIsb0JBQU9HLFFBQVAsQ0FBZ0JILE9BQU9HLFFBQVAsQ0FBZ0JzQixNQUFoQixHQUF5QixDQUF6QyxFQUE0Q2hCLElBQTVDLEdBQW1EWSxHQUFuRDtBQUNIO0FBQ0o7O0FBRUQsWUFBTztBQUNIdEIsMkJBREc7QUFFSE0sK0JBRkc7QUFHSE8sK0JBSEc7QUFJSEssK0JBSkc7QUFLSEc7QUFMRyxNQUFQO0FBT0gsRUFoRXNCLENBQXZCOzttQkFrRWVNLFciLCJmaWxlIjoiMC4xZWI4ZDYzNWFlMTdhN2ExNmUxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5jb25zdCBjcmVkaXRvRmFjdG9yeSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY3JlZGl0b0ZhY3RvcnknLCBbXSlcclxuXHJcbi5mYWN0b3J5KCdjcmVkaXRvRmFjdG9yeScsICgkaHR0cCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gZ2V0VGFza3MoJHNjb3BlKSB7XHJcbiAgICAgICAgJGh0dHAuZ2V0KCcvY3JlZGl0b3MnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWRpdG9zID0gcmVzcG9uc2UuY3JlZGl0b3M7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygkc2NvcGUsIHBhcmFtcykge1xyXG4gICAgICAgIGlmICghJHNjb3BlLmNyZWF0ZVRhc2tJbnB1dCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgJGh0dHAucG9zdCgnL2NyZWRpdG9zJywge1xyXG4gICAgICAgICAgICB0YXNrOiAkc2NvcGUuY3JlYXRlVGFza0lucHV0LFxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2VcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWF0ZVRhc2tJbnB1dCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBwYXJhbXMuY3JlYXRlSGFzSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICAvLyAkc2NvcGUuY3JlYXRlVGFza0lucHV0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVGFzaygkc2NvcGUsIGNyZWRpdG8pIHtcclxuICAgICAgICAkaHR0cC5wdXQoYC9jcmVkaXRvcy8ke2NyZWRpdG8uX2lkfWAsIHsgdGFzazogY3JlZGl0by51cGRhdGVkVGFzayB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICAgICAgY3JlZGl0by5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdG9kby50YXNrID0gdG9kby51cGRhdGVkVGFzaztcclxuICAgICAgICAvLyB0b2RvLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2soJHNjb3BlLCBjcmVkaXRvVG9EZWxldGUpIHtcclxuICAgICAgICAkaHR0cC5kZWxldGUoYC9jcmVkaXRvcy8ke2NyZWRpdG9Ub0RlbGV0ZS5faWR9YCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCRzY29wZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIF8ucmVtb3ZlKCRzY29wZS50b2RvcywgdG9kbyA9PiB0b2RvLnRhc2sgPT09IHRvZG9Ub0RlbGV0ZS50YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3YXRjaENyZWF0ZVRhc2tJbnB1dChwYXJhbXMsICRzY29wZSwgdmFsKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSGFzSW5wdXQgPSBwYXJhbXMuY3JlYXRlSGFzSW5wdXQ7XHJcblxyXG4gICAgICAgIGlmICghdmFsICYmIGNyZWF0ZUhhc0lucHV0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVkaXRvcy5wb3AoKTtcclxuICAgICAgICAgICAgcGFyYW1zLmNyZWF0ZUhhc0lucHV0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgJiYgIWNyZWF0ZUhhc0lucHV0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVkaXRvcy5wdXNoKHsgdGFzazogdmFsLCBpc0NvbXBsZXRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5jcmVhdGVIYXNJbnB1dCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgJiYgY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWRpdG9zWyRzY29wZS5jcmVkaXRvcy5sZW5ndGggLSAxXS50YXNrID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFRhc2tzLFxyXG4gICAgICAgIGNyZWF0ZVRhc2ssXHJcbiAgICAgICAgdXBkYXRlVGFzayxcclxuICAgICAgICBkZWxldGVUYXNrLFxyXG4gICAgICAgIHdhdGNoQ3JlYXRlVGFza0lucHV0XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9GYWN0b3J5O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=