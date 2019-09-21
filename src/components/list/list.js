import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import "./list.css";
function del(payload) {
    return {
        type:"DELETE",
        payload,
    }
}
function update(payload) {
    return {
        type:"UPDATE",
        payload,
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit_no: null,
            name:[],
            age:[],
            degree:[],
        }
        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    };
    onEdit(index, item) {
        this.setState({
            edit_no: index,
        })
    }
    onUpdate(key,name,age,degree) {
        const updatedlist=[]
        updatedlist.push({id:key,name:name,age:age,degree:degree})
        this.setState({
            edit_no: null,
        })
        this.props.update(updatedlist);
           
    }
    onHandle(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1> Employee List   </h1>
                <table>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Employee Name</th>
                            <th>Age</th>
                            <th>Degree</th>
                        </tr>
                    </thead>

                    {/* {console.log(this.props.employees)} */}
                    {this.props.employees.map((item, index) => {
                        return <div id="table-div">
                            {this.state.edit_no === index ?
                                (<div>
                                    <form>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="name"
                                            onChange={(e) => this.onHandle(e)} />
                                        <input
                                            type="number"
                                            id="age"
                                            placeholder="age"
                                            onChange={(e) => this.onHandle(e)} />
                                         <input
                                            type="text"
                                            id="degree"
                                            placeholder="degree"
                                            onChange={(e) => this.onHandle(e)} />
                                        <button
                                            onClick={() => this.onUpdate(item.id, this.state.name,this.state.age,this.state.degree)}>
                                            UPDATE
                                        </button>
                                    </form>
                                </div>)

                                :
                              
                                //    {item.name !== "" ? 
                                   <tbody>
                                    <tr>
                                        {/* {    console.log(item.name)   } */}
                                        <td>{item.pic}</td>
                                        <td>{index}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.degree}</td>
                                        <td colspan="2">
                                            <button onClick={()=>this.props.del(item.id)}>
                                                DELETE
                                            </button>
                                            <button  onClick={()=>this.onEdit(index,item)}>
                                                EDIT
                                            </button>
                                            {/* <td><i className="far fa-edit" onClick={this.onEdit}></i></td>
                                            <td><i className="fas fa-trash" onClick={this.props.del}></i></td> */}
                                        </td>
                                    </tr>
                                    </tbody>}
                                     {/* : <p>There's no employee registered! </p> */}
                        </div>
                    })}
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        employees: state.employees
    }
}
const mapDispatchToProps = { del, update }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)