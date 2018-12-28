import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiAddUser: false
        }
    }

    thayDoiTrangThai = () => {
        //console.log(this.state.trangThaiAddUser);
        this.setState({
            trangThaiAddUser: !this.state.trangThaiAddUser
        })
    }
    hienThiNut = () => {
        if (this.state.trangThaiAddUser === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}> Đóng lại</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()} > Thêm mới</div>
        }
    }

    hienThiForm = () => {
        if (this.state.trangThaiAddUser === true) {
            return (
                <div className="card  border-primary mb-3 mt-2">

                    <div className="card-header">Thêm mới User vào hệ thống :</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="SĐT" />
                        </div>
                        <div className="form-group">
                            <select defaultValue="Normal" className="custom-select" >
                                <option selected>Chọn Quyền mặc định</option>
                                <option value="Admin">Admin</option>
                                <option value="Moderator">Moderator</option>
                                <option value="Normal">Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary">Thêm mới</div>
                        </div>
                    </div>
                </div>
            )

        }

    }
    render() {
        return (
            <div className="col-3">
                <div>
                    {this.hienThiNut()}
                    {this.hienThiForm()}
                </div>
            </div>

        );
    }
}

export default AddUser;