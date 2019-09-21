import { createStore } from 'redux'
const initstate = {
  employees: [
    // {id:0,name:"Farah",age:22, degree:"b.com"},
    // {id:1,name:"jawwad",age:24,degree:"B.E"}
  ]
}


function reducer(state = initstate, action) {
  switch (action.type) {
  case 'ADD':
      return Object.assign({}, state, {
      employees: state.employees.concat(action.payload)
     });
    return state
    case 'DELETE':
        return {employees:state.employees.filter(x=> action.payload !== x.id)};
    case 'UPDATE':
        return Object.assign({}, state, {employees:state.employees.map((item)=>{
      //  return state.employees.map((item)=>{
        // console.log(action.payload )
        // console.log(action.payload[0].name)
        // console.log( item.id)
        if(item.id === action.payload[0].id ){
        return {
          ...item,
           name:action.payload[0].name,
          age:action.payload[0].age,
          degree:action.payload[0].degree
        }  
        }
        else return item
      })
    })  
      default:
  return state
}
  };

let store = createStore(reducer)

export default store;