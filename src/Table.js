import React, { Component } from "react";
import "./App.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Table extends Component {
  state = {
    redirect: false
  };
  addRecord = () => {
    this.setState({ redirect: !this.state.redirect });
  };

  render() {
    console.log('props are=>',this.props)        
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
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Superhero Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
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

export default connect(mapStateToProps)(Table);
