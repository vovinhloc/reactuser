import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        var permissionName="Normal";
        switch (this.props.permission) {
            case "1": permissionName = "Admin";
            break;
            case "2" : permissionName="Moderator";
            break;
            default:
                permissionName="Normal";
                break;
        }
        // return this.props.permission;
        return permissionName;
    }

    editUser = (item) => {
        this.props.editUser(item);
        this.props.changeEditUserStatus();

    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.name} </td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn btn-group">
                        <div className="btn btn-warning sua"
                            onClick={(item) => {this.editUser(item)}}
                        ><i className="fa fa-edit">Sửa</i></div>
                        <div className="btn btn-danger xoa"
                            onClick={() => {this.props.deleteUser(this.props.id)}}
                        ><i className="fa fa-delete">Xóa</i></div>
                    </div>
                </td>
            </tr>

        );
    }
}

export default TableDataRow;