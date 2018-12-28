import React, { Component } from 'react';

import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dataUser from './Data.json';
import { isNull } from 'util';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true,
      data: [],
      searchKey: "",
      editUserStatus: false,
      userEditObject: {}


    }
  }

  
  componentWillMount() {
    //kiem tra xem da co localStorage hay chua ?
    console.log('componentWillMount');
    // console.log( JSON.parse(localStorage.getItem("dataUser")));
    if (isNull( localStorage.getItem("dataUser"))) {
      localStorage.setItem('dataUser' ,JSON.stringify(dataUser) );
      this.setState({
        data:dataUser
      })
    }
    else {
      var temp = JSON.parse(localStorage.getItem('dataUser'));
      console.log('temp');
      console.log(temp);
      this.setState({
        data:temp
      })
    }
  }
  

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    }
    )
  }
  thongBao = () => {
    console.log("Kết nối thành công !");
  }
  getSearchKey = (searchKey) => {
    //alert(searchKey);
    this.setState({ searchKey: searchKey });
  }

  getNewUserData = (item) => {
    console.log('app');
    console.log(item);
    item.id = uuidv1();
    // dataUser.push(item);
    // this.setState({
    //   data: dataUser
    // })
    // console.log(this.state.data);

    var temp=this.state.data;
    temp.push(item);
    this.setState({
      data:temp
    })
    localStorage.setItem('dataUser',JSON.stringify(temp));
  }


  editUser = (item) => {
    console.log('App editUser');
    console.log(item);
    this.setState({
      editUserObject: item
    })
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  saveEditUser = (item) => {
    this.state.data.forEach((value,index) => {
      if (value.id===item.id) {
        value.name=item.name;
        value.tel=item.tel;
        value.permission=item.permission;
      }
    })
    localStorage.setItem('dataUser',JSON.stringify(this.state.data));
  }
  mysaveEditUser_ok = (item) => {
    // console.log("Kết nối thành công !");
    // console.log("app saveEditUser");    
    //  console.log(item);
    //  console.log('typeof item id =');
    //  console.log(typeof(item.id))
    //  console.log('end');

    dataUser.forEach((value, index) => {
      // console.log(typeof(item.id));
      if (item.id === value.id) {
        console.log('bangid');
        console.log(item.id);
        console.log('oldvalue');
        console.log(value);
        console.log('newvalue');
        console.log(item);
        value.name = item.name;
        value.tel = item.tel;
        value.permission = item.permission;
      }
      else {
        console.log('khac');
      }

      this.setState({
        data: dataUser
      })
    })
    console.log('end1');
  }

  deleteUser = (id) => {
    console.log('App deleteUser');
    console.log(id);
    console.log(dataUser);
   var temp= this.state.data.filter(item => item.id !== id);
   console.log(temp);
//   dataUser = temp;
    this.setState({
      data:temp
    })
    
    localStorage.setItem('dataUser',JSON.stringify(temp));
  }


  render() {


    // console.log('App render, data =');
    // console.log(this.state.data);
    // console.log('end');

    // localStorage.setItem("key1","hello");
    // console.log(localStorage.getItem("key1"));
    // localStorage.removeItem("key1");
    // console.log(localStorage.getItem("key1"));

    // localStorage.setItem('dataUser', JSON.stringify(dataUser));
    // console.log('get local Storage,dataUser =');
    // console.log(JSON.parse(localStorage.getItem('dataUser')));
    var kq = [];
    this.state.data.forEach((item, index) => {
      if (item.name.indexOf(this.state.searchKey) !== -1) {
        kq.push(item);
      }

    })
    // console.log(kq);
    return (
      <div >
        <Header />
        <div className="searchForm" >
          <div className="container">
            <div className="row">
              <Search
                getSearchKey={(searchKey) => this.getSearchKey(searchKey)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editUserObject={this.state.editUserObject}
                saveEditUser={(item) => { this.saveEditUser(item) }}
                thongBao={() => { this.thongBao() }}

              />
              <TableData dataUser={kq}
                editUser={(item) => { this.editUser(item) }}
                changeEditUserStatus={() => { this.changeEditUserStatus() }}
                deleteUser={(item) => { this.deleteUser(item) }}
              />
              <AddUser hienThiForm={this.state.hienThiForm}
                getNewUserData={(item) => { this.getNewUserData(item) }}
              />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
