webpackHotUpdate(0,{

/***/ 111:
/***/ (function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-default backgroundnav\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand \" href=\"#\">CREZE</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active navtext \"><a href=\"#\">Home</a></li>\r\n      <li><a class=\"navtext\" href=\"#\">Page 1</a></li>\r\n      <li><a class=\"navtext\" href=\"#\">Page 2</a></li>\r\n      <li><a class=\"navtext\" href=\"#\">Page 3</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"container-fluid\">  \r\n    <a ui-sref=\"about\" class=\"nav-link\">About</a>\r\n    <form ng-submit=\"createTask()\">\r\n        <input class=\"form-control todos__create-input\" placeholder=\"What do I need to do?\" ng-model=\"createTaskInput\" />\r\n        <button class=\"btn btn-success todos__create-button\">Create Task</button>\r\n    </form>\r\n\r\n    <table class=\"table table-striped\">\r\n        <tr>\r\n            <th>Completed?</th>\r\n            <th>Task</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n        <tr ng-repeat=\"todo in todos\">\r\n            <td>\r\n                <input type=\"checkbox\"\r\n                    ng-checked=\"todo.isCompleted\"\r\n                    ng-click=\"onCompletedClick(todo)\" />\r\n            </td>\r\n            <td>\r\n                <span ng-if=\"!todo.isEditing\"\r\n                    class=\"todos__task\"\r\n                    ng-class=\"{'todos__task--completed': todo.isCompleted}\">\r\n                    {{todo.task}}\r\n                </span>\r\n\r\n                <form ng-submit=\"updateTask(todo)\">\r\n                    <input ng-if=\"todo.isEditing\"\r\n                        class=\"form-control todos__update-input\"\r\n                        ng-value=\"todo.task\"\r\n                        ng-model=\"todo.updatedTask\" />\r\n                </form>\r\n            </td>\r\n            <td>\r\n                <button ng-if=\"!todo.isEditing\"\r\n                    class=\"btn btn-info\"\r\n                    ng-click=\"onEditClick(todo)\">\r\n                    Edit\r\n                </button>\r\n                <button ng-if=\"!todo.isEditing\"\r\n                    class=\"btn btn-danger\"\r\n                    ng-click=\"deleteTask(todo)\">\r\n                    Delete\r\n                </button>\r\n\r\n                <button ng-if=\"todo.isEditing\"\r\n                    class=\"btn btn-primary\"\r\n                    ng-click=\"updateTask(todo)\">\r\n                    Save\r\n                </button>\r\n                <button ng-if=\"todo.isEditing\"\r\n                    class=\"btn btn-default\"\r\n                    ng-click=\"onCancelClick(todo)\">\r\n                    Cancel\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    </div>\r\n\r\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdG9kb3MvdG9kb3MuaHRtbD83ZjZhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseThDQUF3OEMsMkNBQTJDLDZCQUE2QixXQUFXLDh5QyIsImZpbGUiOiIwLjg5ODMzODkwMzNiYjJmOGE1NTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IGJhY2tncm91bmRuYXZcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZCBcXFwiIGhyZWY9XFxcIiNcXFwiPkNSRVpFPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgPGxpIGNsYXNzPVxcXCJhY3RpdmUgbmF2dGV4dCBcXFwiPjxhIGhyZWY9XFxcIiNcXFwiPkhvbWU8L2E+PC9saT5cXHJcXG4gICAgICA8bGk+PGEgY2xhc3M9XFxcIm5hdnRleHRcXFwiIGhyZWY9XFxcIiNcXFwiPlBhZ2UgMTwvYT48L2xpPlxcclxcbiAgICAgIDxsaT48YSBjbGFzcz1cXFwibmF2dGV4dFxcXCIgaHJlZj1cXFwiI1xcXCI+UGFnZSAyPC9hPjwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGNsYXNzPVxcXCJuYXZ0ZXh0XFxcIiBocmVmPVxcXCIjXFxcIj5QYWdlIDM8L2E+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvbmF2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+ICBcXHJcXG4gICAgPGEgdWktc3JlZj1cXFwiYWJvdXRcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+QWJvdXQ8L2E+XFxyXFxuICAgIDxmb3JtIG5nLXN1Ym1pdD1cXFwiY3JlYXRlVGFzaygpXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHRvZG9zX19jcmVhdGUtaW5wdXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJXaGF0IGRvIEkgbmVlZCB0byBkbz9cXFwiIG5nLW1vZGVsPVxcXCJjcmVhdGVUYXNrSW5wdXRcXFwiIC8+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgdG9kb3NfX2NyZWF0ZS1idXR0b25cXFwiPkNyZWF0ZSBUYXNrPC9idXR0b24+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG5cXHJcXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+Q29tcGxldGVkPzwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRhc2s8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8dHIgbmctcmVwZWF0PVxcXCJ0b2RvIGluIHRvZG9zXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNoZWNrZWQ9XFxcInRvZG8uaXNDb21wbGV0ZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwib25Db21wbGV0ZWRDbGljayh0b2RvKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gbmctaWY9XFxcIiF0b2RvLmlzRWRpdGluZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b2Rvc19fdGFza1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ7J3RvZG9zX190YXNrLS1jb21wbGV0ZWQnOiB0b2RvLmlzQ29tcGxldGVkfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e3RvZG8udGFza319XFxyXFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGZvcm0gbmctc3VibWl0PVxcXCJ1cGRhdGVUYXNrKHRvZG8pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZy1pZj1cXFwidG9kby5pc0VkaXRpbmdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0b2Rvc19fdXBkYXRlLWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVxcXCJ0b2RvLnRhc2tcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInRvZG8udXBkYXRlZFRhc2tcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuZy1pZj1cXFwiIXRvZG8uaXNFZGl0aW5nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCJvbkVkaXRDbGljayh0b2RvKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBFZGl0XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5nLWlmPVxcXCIhdG9kby5pc0VkaXRpbmdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwiZGVsZXRlVGFzayh0b2RvKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gbmctaWY9XFxcInRvZG8uaXNFZGl0aW5nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCJ1cGRhdGVUYXNrKHRvZG8pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFNhdmVcXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gbmctaWY9XFxcInRvZG8uaXNFZGl0aW5nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCJvbkNhbmNlbENsaWNrKHRvZG8pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90b2Rvcy90b2Rvcy5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==