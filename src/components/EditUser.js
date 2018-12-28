import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.editUserObject.id,
            name:this.props.editUserObject.name,
            tel:this.props.editUserObject.tel,
            permission:this.props.editUserObject.permission
        }
    }
    
    isChange= (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    saveEditUser = (item) => {
       // console.log(item);
        this.props.changeEditUserStatus();
        this.props.saveEditUser(item)
    }
    
    render() {
        return (
            <div className="col-12">
                <form>
                    <div className="card  text-white bg-warning mb-3 mt-2">
                        <div className="card-header text-center">Edit user :</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input name="name" defaultValue={this.props.editUserObject.name}
                                    onChange={(event) => { this.isChange(event) }}
                                    type="text" className="form-control" aria-describedby="helpId"
                                    placeholder="Tên user" />
                            </div>
                            <div className="form-group">
                                <input name="tel" defaultValue={this.props.editUserObject.tel}
                                 onChange={(event) => { this.isChange(event) }}
                                    type="text" className="form-control" aria-describedby="helpId"
                                    placeholder="SĐT" />
                            </div>
                            <div className="form-group">
                                <select name="permission" onChange={(event) => { this.isChange(event) }}
                                    defaultValue={this.props.editUserObject.permission}
                                    className="custom-select"
                                    required>
                                    <option >Chọn Quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-block btn-primary btn-danger"
                                    onClick={() =>this.saveEditUser(this.state) }
                                    value="Save"
                                    type="reset"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;