import React from 'react';
import store from '../../store';
import { connect } from 'react-redux';
// import {add} from "../../action"
import { Link } from "react-router-dom";
import ImageUploader from 'react-images-upload';
 

function add(payload) {
  return {
    type: 'ADD',
    payload
  }
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      age: [],
      degree: [],
      pictures: [],
      list: []

    };
    this.onSet = this.onSet.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onDrop = this.onDrop.bind(this);
  }
  onSet(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    })
  }
    onHandleSubmit(nam, ag, degre, pic) {

      // console.log(nam,ag,degre);
      let newList = this.state.list.slice()
      newList.push({ id: Date.now(), name: nam, age: ag, degree: degre,pic:pic })
      this.setState({
        list: newList,
        name: [],
        age: [],
        degree: []
      });
      this.props.add(newList);
    }

    render(){
      return (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label> NAME : </label>
            <input
              id="name"
              type="text"
              onChange={this.onSet}
              value={this.state.name}
               />
            <label>  AGE : </label>
            <input
              id="age"
              type="number"
              value={this.state.age}
              onChange={this.onSet} />
            <label> DEGREE :</label>
            <input
              type="text"
              id="degree"
              value={this.state.degree}
              onChange={this.onSet} />
            <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}/>
              {console.log(this.state.pictures)}
            
          </form>
          <button
            onClick={() => this.onHandleSubmit(this.state.name, this.state.age, this.state.degree, this.state.pictures)}>
            ADD
                </button>
          {/* { console.log(this.state.list)} */}
          <li>
            <Link to="/list">List</Link>
          </li>
        </div>
      )
    }
  }

  const mapDispatchToProps = { add }
  export default connect(
        null,
    mapDispatchToProps
  )(Form)
