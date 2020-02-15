import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilter } from '../../actions/filtered';
import { CarsRef, timeRef } from '../admin/reference';
import Searchresults from './searchresult';


class TopSearchBar extends Component {
  state = {
    make: '',
    body: '',
    priceRange: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
  

    this.props.history.push(`/cars2/${this.state.make}`)

  }



  

  render(){
    let content = null;

     if (content !==null ) {
        <Searchresults make={this.state.make} />
}

else {

  <p> h </p>

}
 
    let searchMake = ["Audi","Honda","Lamborghini","Maserati", "Subaru","Toyota"];

    let cars = {
      Audi: [ {body: "Sedan"}, {body: "Coupe"}, {body: "SUV"} ],
      Honda: [ {body: "Sedan"}, {body: "Van"}, {body: "SUV"} ],
      Lamborghini: [ {body: "Coupe"} ],
      Maserati: [ {body: "Coupe"}, {body: "SUV"} ],
      Mercedes: [ {body: "Convertible"}, {body: "Coupe"} ],
      Subaru: [ {body: "Hatchback"} ],
      Toyota: [ {body: "SUV"}, {body: "Sedan"}, {body: "Truck"} ]
    }

    let makes = searchMake.map((make, i) => {
      return (
        <option key={i} value={make}>
          {make}
        </option>
      )
    })

    if(this.state.make) {
      var body = cars[this.state.make].map((make, i) => {
        return (
          <option key={i} value={make.body}>
              {make.body}
          </option>)
      })
    }

    return(
    <div>
 <br></br> <br></br>
      <div className="top-search-bar">
        <div className="container text-align">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-3">
                <select className="form-control"
                    value={this.state.make}
                    onChange={(e)=>this.setState({make: e.target.value})}
                  >
                  <option value="" disabled selected>Make</option>
                    {makes}
                </select>
              </div>
              <div className="col-3">
                <select className="form-control"
                  value={this.state.body}
                  onChange={(e)=>this.setState({body: e.target.value})}
                  >
                    <option value="" disabled selected>Body Type</option>
                    { makes ? body : null }
                  </select>
              </div>
              <div className="col-3">
                <select className="form-control"
                  value={this.state.priceRange}
                  onChange={(e)=>this.setState({priceRange: e.target.value})}
                  >
                    <option value="" disabled selected>Price</option>
                    <option value="lowHigh">Low To High</option>
                    <option value="highLow">High To Low</option>
                  </select>
              </div>
              <div className="col-3">
                  <button type="submit" className="btn btn-success btn-block" onClick={this.handleSubmit}>Search</button>
              </div>
            </div>
            {content}
          </form>

        </div>
      </div>
      </div>
    );
  }
}
  
function mapStateToProps(state){
  return{
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateFilter: updateFilter}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TopSearchBar);
