import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchKey:""
        }
    }
    
    hienThiNut=()=>{
        if (this.props.hienThiForm===true) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}> Đóng lại</div>
            )
        }
        else{
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}> Thêm mới</div>
            )
        }

    }
    isChange = (event) => {
        console.log( event.target.name);
        console.log( event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        });
        //console.log('state');
        //console.log(this.state.searchKey);
    }

    isShowEditForm = () => {
        if (this.props.editUserStatus===true) {
            return (
                <EditUser changeEditUserStatus={() => {this.props.changeEditUserStatus()}}
                    editUserObject={this.props.editUserObject}
                    saveEditUser={(item) => {this.props.saveEditUser(item)}}
                    thongBao = {() => {this.props.thongBao()}}
                    
                />
            )
        }
        else{
            return true;
        }
    }
    render() {
        // console.log('state');
        // console.log(this.state.searchKey);
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                    
                </div>
                <div className="form-group">
                    <div className="btn btn-group">
                        <input 
                            name="searchKey"
                            onChange={(event)=>this.isChange(event)}
                        type="text" style={{ width: '580px' }} className="form-control"  aria-describedby="helpId" placeholder="Nhap tu khoa" />
                        <div className="btn btn-info"
                            onClick={()=>this.props.getSearchKey(this.state.searchKey)}
                        >Search</div>
                    </div>
                </div>
               {this.hienThiNut()}
                <hr />
            </div>

        );
    }
}

export default Search;