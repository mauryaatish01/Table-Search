import React, { Component } from "react";
import "./App.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Table extends Component {
  state = {
    redirect: false,
    deleteRecord:[],
    
  };
  addRecord = () => {
    this.setState({ redirect: !this.state.redirect });
  };
  checkboxChange=(e)=>{
    let id=e.target.id;
    let index;
    let record=this.state.deleteRecord;
    if(e.target.checked){
      if(record.indexOf(id)===-1){
        record=record.concat(id)
      }
    }else{
      index=record.indexOf(id);
      record.splice(index,1)
    }
    
    if(record.length>0){this.setState({deleteRecord:record})}
    
    
  }
  deleteRecord=()=>{
    this.props.deleteRow(this.state.deleteRecord)
    
    
  }

  searchRecord=(e)=>{
    
    this.props.searchRow(e.target.value)
  }

  sortMethod=(e)=>{
    console.log('i am here',e.target.id)
    this.props.sortRow(e.target.id)
  }

  render() {
    //let { firstName,lastName,heroName,email,gender,age}=this.props.tableData
    
    if (this.state.redirect === true) {
      return <Redirect to="/form" />;
    }
    return (
      <div className="container App">
        <div className="row " style={{ marginBottom: 10 }}>
          <div className="col-6" />
          <div className="col-6 ">
            <button
              type="button"
              className="btn btn-light custombutton deleteButton"
              style={{ marginRight: 5 }}
              onClick={this.deleteRecord}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-light custombutton addButton"
              onClick={this.addRecord}
            >
              Add Record
            </button>
            <input
              type="text"
              placeholder="search"
              style={{ marginLeft: 5, borderRadius: 10 }}
              onChange={this.searchRecord}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th />
                  <th scope="col">#</th>
                  <th scope="col" onClick={this.sortMethod} id='firstName'>First Name</th>
                  <th scope="col" onClick={this.sortMethod} id='lastName'>Last Name</th>
                  <th scope="col" onClick={this.sortMethod} id='heroName'>Superhero Name</th>
                  <th scope="col" onClick={this.sortMethod} id='email'>Email</th>
                  <th scope="col" onClick={this.sortMethod} id='gender'>Gender</th>
                  <th scope="col" onClick={this.sortMethod} id='age'>Age</th>
                </tr>
              </thead>
              <tbody>
                {this.props.tableData.map((row, index) => {
                  let {
                    firstName,
                    lastName,
                    heroName,
                    email,
                    gender,
                    age,
                    key
                  } = row;

                  return (
                    <tr key={key}>
                      <td>
                        <input
                          type="checkbox"
                          id={key}
                          onChange={this.checkboxChange}
                        />
                      </td>
                      <td>{index + 1}</td>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{heroName}</td>
                      <td>{email}</td>
                      <td>{gender}</td>
                      <td>{age}</td>
                    </tr>
                  );
                })}                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
     tableData:state   
  };
};

const mapDispatchToProps=dispatch=>{
  return{
    deleteRow: (data) => dispatch({type:'DEL_DATA',data}),
    searchRow:(text)=>dispatch({type:'SEARCH_DATA',text}),
    sortRow:(id)=>dispatch({type:'SORT_DATA',id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Table);
