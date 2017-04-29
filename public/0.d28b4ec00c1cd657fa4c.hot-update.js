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
	            todo.isEditing = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcz9hOTQwIl0sIm5hbWVzIjpbInRvZG9GYWN0b3J5IiwibW9kdWxlIiwiZmFjdG9yeSIsIiRodHRwIiwiZ2V0VGFza3MiLCIkc2NvcGUiLCJnZXQiLCJ0aGVuIiwiY3JlZGl0b3MiLCJyZXNwb25zZSIsImNyZWF0ZVRhc2siLCJwYXJhbXMiLCJjcmVhdGVUYXNrSW5wdXQiLCJwb3N0IiwidGFzayIsImlzQ29tcGxldGVkIiwiaXNFZGl0aW5nIiwidXBkYXRlVGFzayIsImNyZWRpdG8iLCJwdXQiLCJfaWQiLCJ1cGRhdGVkVGFzayIsInRvZG8iLCJkZWxldGVUYXNrIiwidG9kb1RvRGVsZXRlIiwiZGVsZXRlIiwid2F0Y2hDcmVhdGVUYXNrSW5wdXQiLCJ2YWwiLCJjcmVhdGVIYXNJbnB1dCIsInRvZG9zIiwicG9wIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxjQUFjLGtCQUFRQyxNQUFSLENBQWUsaUJBQWYsRUFBa0MsRUFBbEMsRUFFbkJDLE9BRm1CLENBRVgsYUFGVyxFQUVJLFVBQUNDLEtBQUQsRUFBVztBQUMvQixjQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN0QkYsZUFBTUcsR0FBTixDQUFVLFdBQVYsRUFBdUJDLElBQXZCLENBQTRCLG9CQUFZO0FBQ3BDRixvQkFBT0csUUFBUCxHQUFrQkMsU0FBU0QsUUFBM0I7QUFDSCxVQUZEO0FBR0g7O0FBRUQsY0FBU0UsVUFBVCxDQUFvQkwsTUFBcEIsRUFBNEJNLE1BQTVCLEVBQW9DO0FBQ2hDLGFBQUksQ0FBQ04sT0FBT08sZUFBWixFQUE2QjtBQUFFO0FBQVM7O0FBRXhDVCxlQUFNVSxJQUFOLENBQVcsV0FBWCxFQUF3QjtBQUNwQkMsbUJBQU1ULE9BQU9PLGVBRE87QUFFcEJHLDBCQUFhLEtBRk87QUFHcEJDLHdCQUFXO0FBSFMsVUFBeEIsRUFJR1QsSUFKSCxDQUlRLG9CQUFZO0FBQ2hCSCxzQkFBU0MsTUFBVDtBQUNBQSxvQkFBT08sZUFBUCxHQUF5QixFQUF6QjtBQUNILFVBUEQ7O0FBU0E7QUFDQTtBQUNIOztBQUVELGNBQVNLLFVBQVQsQ0FBb0JaLE1BQXBCLEVBQTRCYSxPQUE1QixFQUFxQztBQUNqQ2YsZUFBTWdCLEdBQU4sZ0JBQXVCRCxRQUFRRSxHQUEvQixFQUFzQyxFQUFFTixNQUFNSSxRQUFRRyxXQUFoQixFQUF0QyxFQUFxRWQsSUFBckUsQ0FBMEUsb0JBQVk7QUFDbEZILHNCQUFTQyxNQUFUO0FBQ0FpQixrQkFBS04sU0FBTCxHQUFpQixLQUFqQjtBQUNILFVBSEQ7O0FBS0E7QUFDQTtBQUNIOztBQUVELGNBQVNPLFVBQVQsQ0FBb0JsQixNQUFwQixFQUE0Qm1CLFlBQTVCLEVBQTBDO0FBQ3RDckIsZUFBTXNCLE1BQU4sZ0JBQTBCRCxhQUFhSixHQUF2QyxFQUE4Q2IsSUFBOUMsQ0FBbUQsb0JBQVk7QUFDM0RILHNCQUFTQyxNQUFUO0FBQ0gsVUFGRDs7QUFJQTtBQUNIOztBQUVELGNBQVNxQixvQkFBVCxDQUE4QmYsTUFBOUIsRUFBc0NOLE1BQXRDLEVBQThDc0IsR0FBOUMsRUFBbUQ7QUFDL0MsYUFBTUMsaUJBQWlCakIsT0FBT2lCLGNBQTlCOztBQUVBLGFBQUksQ0FBQ0QsR0FBRCxJQUFRQyxjQUFaLEVBQTRCO0FBQ3hCdkIsb0JBQU93QixLQUFQLENBQWFDLEdBQWI7QUFDQW5CLG9CQUFPaUIsY0FBUCxHQUF3QixLQUF4QjtBQUNILFVBSEQsTUFHTyxJQUFJRCxPQUFPLENBQUNDLGNBQVosRUFBNEI7QUFDL0J2QixvQkFBT3dCLEtBQVAsQ0FBYUUsSUFBYixDQUFrQixFQUFFakIsTUFBTWEsR0FBUixFQUFhWixhQUFhLEtBQTFCLEVBQWxCO0FBQ0FKLG9CQUFPaUIsY0FBUCxHQUF3QixJQUF4QjtBQUNILFVBSE0sTUFHQSxJQUFJRCxPQUFPQyxjQUFYLEVBQTJCO0FBQzlCdkIsb0JBQU93QixLQUFQLENBQWF4QixPQUFPd0IsS0FBUCxDQUFhRyxNQUFiLEdBQXNCLENBQW5DLEVBQXNDbEIsSUFBdEMsR0FBNkNhLEdBQTdDO0FBQ0g7QUFDSjs7QUFFRCxZQUFPO0FBQ0h2QiwyQkFERztBQUVITSwrQkFGRztBQUdITywrQkFIRztBQUlITSwrQkFKRztBQUtIRztBQUxHLE1BQVA7QUFPSCxFQWhFbUIsQ0FBcEI7O21CQWtFZTFCLFciLCJmaWxlIjoiMC5kMjhiNGVjMDBjMWNkNjU3ZmE0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5jb25zdCB0b2RvRmFjdG9yeSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAudG9kb0ZhY3RvcnknLCBbXSlcclxuXHJcbi5mYWN0b3J5KCd0b2RvRmFjdG9yeScsICgkaHR0cCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gZ2V0VGFza3MoJHNjb3BlKSB7XHJcbiAgICAgICAgJGh0dHAuZ2V0KCcvY3JlZGl0b3MnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWRpdG9zID0gcmVzcG9uc2UuY3JlZGl0b3M7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygkc2NvcGUsIHBhcmFtcykge1xyXG4gICAgICAgIGlmICghJHNjb3BlLmNyZWF0ZVRhc2tJbnB1dCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgJGh0dHAucG9zdCgnL2NyZWRpdG9zJywge1xyXG4gICAgICAgICAgICB0YXNrOiAkc2NvcGUuY3JlYXRlVGFza0lucHV0LFxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2VcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWF0ZVRhc2tJbnB1dCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBwYXJhbXMuY3JlYXRlSGFzSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICAvLyAkc2NvcGUuY3JlYXRlVGFza0lucHV0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVGFzaygkc2NvcGUsIGNyZWRpdG8pIHtcclxuICAgICAgICAkaHR0cC5wdXQoYC9jcmVkaXRvcy8ke2NyZWRpdG8uX2lkfWAsIHsgdGFzazogY3JlZGl0by51cGRhdGVkVGFzayB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoJHNjb3BlKTtcclxuICAgICAgICAgICAgdG9kby5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdG9kby50YXNrID0gdG9kby51cGRhdGVkVGFzaztcclxuICAgICAgICAvLyB0b2RvLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2soJHNjb3BlLCB0b2RvVG9EZWxldGUpIHtcclxuICAgICAgICAkaHR0cC5kZWxldGUoYC9jcmVkaXRvcy8ke3RvZG9Ub0RlbGV0ZS5faWR9YCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCRzY29wZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIF8ucmVtb3ZlKCRzY29wZS50b2RvcywgdG9kbyA9PiB0b2RvLnRhc2sgPT09IHRvZG9Ub0RlbGV0ZS50YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3YXRjaENyZWF0ZVRhc2tJbnB1dChwYXJhbXMsICRzY29wZSwgdmFsKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSGFzSW5wdXQgPSBwYXJhbXMuY3JlYXRlSGFzSW5wdXQ7XHJcblxyXG4gICAgICAgIGlmICghdmFsICYmIGNyZWF0ZUhhc0lucHV0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2Rvcy5wb3AoKTtcclxuICAgICAgICAgICAgcGFyYW1zLmNyZWF0ZUhhc0lucHV0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgJiYgIWNyZWF0ZUhhc0lucHV0KSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2Rvcy5wdXNoKHsgdGFzazogdmFsLCBpc0NvbXBsZXRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5jcmVhdGVIYXNJbnB1dCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgJiYgY3JlYXRlSGFzSW5wdXQpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZG9zWyRzY29wZS50b2Rvcy5sZW5ndGggLSAxXS50YXNrID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFRhc2tzLFxyXG4gICAgICAgIGNyZWF0ZVRhc2ssXHJcbiAgICAgICAgdXBkYXRlVGFzayxcclxuICAgICAgICBkZWxldGVUYXNrLFxyXG4gICAgICAgIHdhdGNoQ3JlYXRlVGFza0lucHV0XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9GYWN0b3J5O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmFjdG9yaWVzL3RvZG8tZmFjdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=