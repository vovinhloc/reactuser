import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiAddUser: false,
            permission: "2",
            id: ""

        }
    }
    isChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
        //package to item
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
        console.log('item=');
        console.log(item);

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

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card  border-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới User vào hệ thống :</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input name="name" onChange={(event) => { this.isChange(event) }}
                                        type="text" className="form-control" aria-describedby="helpId"
                                        placeholder="Tên user" />
                                </div>
                                <div className="form-group">
                                    <input name="tel" onChange={(event) => { this.isChange(event) }}
                                        type="text" className="form-control" aria-describedby="helpId"
                                        placeholder="SĐT" />
                                </div>
                                <div className="form-group">
                                    <select name="permission" onChange={(event) => { this.isChange(event) }}
                                        defaultValue="2"
                                        className="custom-select"
                                        required>
                                        <option >Chọn Quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-block btn-primary"
                                        onClick={() => { this.props.getNewUserData(this.state) }}
                                        value="Thêm mới"
                                        type="reset"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            )
        }
        else {
            return true;
        }
    }
    render() {
        // console.log("Add User");
        // console.log(this.props.hienThiForm);
        console.log(this.state);
        return (

            <div>
                {/* {this.hienThiNut()}
                    {this.hienThiForm()} */}
                {this.kiemTraTrangThai()}
            </div>


        );
    }
}

export default AddUser;