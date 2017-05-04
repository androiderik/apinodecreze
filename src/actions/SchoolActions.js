var dispatcher = require("../dispatcher");

module.exports = {
    addEscuela:function(school){
        dispatcher.dispatch({
           school:school,
           type:"school:addEscuela" 
        });
    },
    deleteSchool:function(school){
        dispatcher.dispatch({
           school:school,
           type:"school:deleteSchool" 
        });
    }
}