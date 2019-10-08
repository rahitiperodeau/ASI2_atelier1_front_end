import React, { Component } from 'react';
import Panel from "./containers/Panel"
import { connect } from 'react-redux';



class RightSide extends Component {
    //class constructor whith given properties
  //class constructor whith given properties
  constructor(props) {
    super(props); 
    }
    
  
    
  //render function use to update the virtual dom

  render() {

    if(this.props.card.id ==undefined){
        return <div></div>;
}
     
    return (

              <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.card.name} description</h3>
                </div>
                <div className="panel-body">
                <Panel card = {this.props.card}/>
                </div>
               </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
      card: state.cardReducer
    }
  };

export default connect(mapStateToProps)(RightSide);

//export the current classes in order to be used outside
//export default RightSide;