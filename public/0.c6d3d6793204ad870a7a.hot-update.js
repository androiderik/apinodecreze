webpackHotUpdate(0,{

/***/ 111:
/***/ (function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-default backgroundnav\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand navtext\" href=\"#\">CREZE</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a href=\"#\">Home</a></li>\r\n      <li><a href=\"#\">Page 1</a></li>\r\n      <li><a href=\"#\">Page 2</a></li>\r\n      <li><a href=\"#\">Page 3</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"container-fluid\">  \r\n    <a ui-sref=\"about\" class=\"nav-link\">About</a>\r\n    <form ng-submit=\"createTask()\">\r\n        <input class=\"form-control todos__create-input\" placeholder=\"What do I need to do?\" ng-model=\"createTaskInput\" />\r\n        <button class=\"btn btn-success todos__create-button\">Create Task</button>\r\n    </form>\r\n\r\n    <table class=\"table table-striped\">\r\n        <tr>\r\n            <th>Completed?</th>\r\n            <th>Task</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n        <tr ng-repeat=\"todo in todos\">\r\n            <td>\r\n                <input type=\"checkbox\"\r\n                    ng-checked=\"todo.isCompleted\"\r\n                    ng-click=\"onCompletedClick(todo)\" />\r\n            </td>\r\n            <td>\r\n                <span ng-if=\"!todo.isEditing\"\r\n                    class=\"todos__task\"\r\n                    ng-class=\"{'todos__task--completed': todo.isCompleted}\">\r\n                    {{todo.task}}\r\n                </span>\r\n\r\n                <form ng-submit=\"updateTask(todo)\">\r\n                    <input ng-if=\"todo.isEditing\"\r\n                        class=\"form-control todos__update-input\"\r\n                        ng-value=\"todo.task\"\r\n                        ng-model=\"todo.updatedTask\" />\r\n                </form>\r\n            </td>\r\n            <td>\r\n                <button ng-if=\"!todo.isEditing\"\r\n                    class=\"btn btn-info\"\r\n                    ng-click=\"onEditClick(todo)\">\r\n                    Edit\r\n                </button>\r\n                <button ng-if=\"!todo.isEditing\"\r\n                    class=\"btn btn-danger\"\r\n                    ng-click=\"deleteTask(todo)\">\r\n                    Delete\r\n                </button>\r\n\r\n                <button ng-if=\"todo.isEditing\"\r\n                    class=\"btn btn-primary\"\r\n                    ng-click=\"updateTask(todo)\">\r\n                    Save\r\n                </button>\r\n                <button ng-if=\"todo.isEditing\"\r\n                    class=\"btn btn-default\"\r\n                    ng-click=\"onCancelClick(todo)\">\r\n                    Cancel\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    </div>\r\n\r\n"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdG9kb3MvdG9kb3MuaHRtbD83ZjZhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaTVDQUFnNUMsMkNBQTJDLDZCQUE2QixXQUFXLDh5QyIsImZpbGUiOiIwLmM2ZDNkNjc5MzIwNGFkODcwYTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IGJhY2tncm91bmRuYXZcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZCBuYXZ0ZXh0XFxcIiBocmVmPVxcXCIjXFxcIj5DUkVaRTwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YSBocmVmPVxcXCIjXFxcIj5Ib21lPC9hPjwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPlBhZ2UgMTwvYT48L2xpPlxcclxcbiAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5QYWdlIDI8L2E+PC9saT5cXHJcXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+UGFnZSAzPC9hPjwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICA8L2Rpdj5cXHJcXG48L25hdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPiAgXFxyXFxuICAgIDxhIHVpLXNyZWY9XFxcImFib3V0XFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPkFib3V0PC9hPlxcclxcbiAgICA8Zm9ybSBuZy1zdWJtaXQ9XFxcImNyZWF0ZVRhc2soKVxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0b2Rvc19fY3JlYXRlLWlucHV0XFxcIiBwbGFjZWhvbGRlcj1cXFwiV2hhdCBkbyBJIG5lZWQgdG8gZG8/XFxcIiBuZy1tb2RlbD1cXFwiY3JlYXRlVGFza0lucHV0XFxcIiAvPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIHRvZG9zX19jcmVhdGUtYnV0dG9uXFxcIj5DcmVhdGUgVGFzazwvYnV0dG9uPlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPkNvbXBsZXRlZD88L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5UYXNrPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPHRyIG5nLXJlcGVhdD1cXFwidG9kbyBpbiB0b2Rvc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jaGVja2VkPVxcXCJ0b2RvLmlzQ29tcGxldGVkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcIm9uQ29tcGxldGVkQ2xpY2sodG9kbylcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIG5nLWlmPVxcXCIhdG9kby5pc0VkaXRpbmdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9kb3NfX3Rhc2tcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cXFwieyd0b2Rvc19fdGFzay0tY29tcGxldGVkJzogdG9kby5pc0NvbXBsZXRlZH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAge3t0b2RvLnRhc2t9fVxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxmb3JtIG5nLXN1Ym1pdD1cXFwidXBkYXRlVGFzayh0b2RvKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmctaWY9XFxcInRvZG8uaXNFZGl0aW5nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgdG9kb3NfX3VwZGF0ZS1pbnB1dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cXFwidG9kby50YXNrXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ0b2RvLnVwZGF0ZWRUYXNrXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gbmctaWY9XFxcIiF0b2RvLmlzRWRpdGluZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwib25FZGl0Q2xpY2sodG9kbylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgRWRpdFxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuZy1pZj1cXFwiIXRvZG8uaXNFZGl0aW5nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcImRlbGV0ZVRhc2sodG9kbylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5nLWlmPVxcXCJ0b2RvLmlzRWRpdGluZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwidXBkYXRlVGFzayh0b2RvKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBTYXZlXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5nLWlmPVxcXCJ0b2RvLmlzRWRpdGluZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwib25DYW5jZWxDbGljayh0b2RvKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxcXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdG9kb3MvdG9kb3MuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=