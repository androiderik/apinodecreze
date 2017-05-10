var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:3001/api/register";
var SweetAjs = require ('sweetalert-react'); //js
var SweetAcss =require ('../../node_modules/sweetalert/dist/sweetalert.css'); //css


module.exports = {
    addEscuela: function (school) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(school),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject,
           success: function(data){  //if there is no errors in request. 
            data.name == 'ValidationError'?     //object error(but not the request)
            swal("Error", "No se pudieron guardar tus datos.", "error") 
            : swal("Exito", "Datos guardados.", "success") //no error object
            console.log(data);
            }
            
            
        });
        });
    },
    getSchools: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteSchool: function (school) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl + "/" + school._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}