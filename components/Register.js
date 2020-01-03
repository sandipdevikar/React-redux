import React from 'react'
import {connect} from 'react-redux'
const Register = ({auth:{name,email,password}}) =>{
  return(

    <div className="container">
    <div className="row">
      <div className="col-md-4 offset-md-4">
          <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} className="form-control"/>
          </div>
          <div className="form-group">
            <label>email</label>
            <input type="text" value={email}  className="form-control"/>
          </div>
          <div className="form-group">
            <label>password</label>
            <input type="password" value={password}  className="form-control"/>
          </div>
         <div className="form-group">
          <button class="btn btn-primary">Register</button>
         </div>
          </form>
      </div>
    </div>
    </div>
  )
}

const mapStateToProps = (state,own={
  dev:true
})=>{
  return{
    auth:state.auth,
    
  }
  console.log(dev);
}
export default connect(mapStateToProps)(Register);