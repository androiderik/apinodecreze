var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx")
var AddEscuela = require("./AddSchool.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row" >
                <div>
                    <AddEscuela />
                </div>
                <div className="col-md-6 col-md-offset-3">
                    {
                        this.props.schools.map(function(s,index){
                            return(
                                <SchoolInfo info={s} key={index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});

