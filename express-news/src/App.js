import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'react-table/react-table.css'
import ReactTable from 'react-table';
import Background from './header.png';
import createBrowserHistory from "history/createBrowserHistory";

class App extends Component {


  endPoint = 'http://localhost:8080/';

  state = {
    news :[]
  }

  renderRedirect = (url) => { 
    window.open(url, '_blank');
}

tdProperties = (state, rowInfo, column, instance) => {
  return {
    onClick: (e, handleOriginal) => {
      this.renderRedirect(rowInfo.original.URL);
      console.log("The url is:"+rowInfo.original.URL);
      if (handleOriginal) {
        handleOriginal();
      }
    }
  };
}


  componentDidMount(){

    axios.get(this.endPoint + 'news')
        .then(
           (response) => {
             this.setState({news : response.data});
           }
        )
      }

  render() {

   const columns = [{
      Header: 'Media',
      accessor: 'Media' 
    }, {
      Header: 'Headlines',
      accessor: 'Heading',
    }] 

    return (
      <div className="container"> 
      <div className="row">
      <img className="app-header" src={Background} alt="Avatar"/>     
     </div> 
  
       <div className="row">
         <ReactTable data={this.state.news}  
         columns={columns}
         className='react-table -highlight -striped'
         getTdProps={this.tdProperties}
         defaultPageSize={10}
         filterable
         defaultFilterMethod={(filter, row) =>
          String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase())}
         />
        </div>
      </div>  

    );
  }
}

export default App;
