import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingDataUser = () => {
       return this.props.dataUser.map((value, index) => {
            return (
                <TableDataRow
                    stt={index}
                    id = {value.id}
                    key={value.id}
                    name={value.name}
                    tel={value.tel}
                    permission={value.permission}
                    editUser={() =>this.props.editUser(value)}
                    changeEditUserStatus={() => {this.props.changeEditUserStatus()}}
                    deleteUser ={(item) => {this.props.deleteUser(item)}}
                />
            )
        })
    }
    render() {
        //console.log('TableData=');
        //console.log(this.props.dataUser);
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover ">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SĐT</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                        <TableDataRow
                            stt="0"
                            id="10"
                            name="Vox Vinhx Locx"
                            tel="0908407321"
                            permission="1"
                            editUser={() =>this.props.editUser()}
                        />
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;