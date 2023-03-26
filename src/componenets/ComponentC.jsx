import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../store/actions/userAction';

const ComponentC = ({userUi,fetchGetUser},) => {
    useEffect(() => {
      fetchGetUser();
    },[])
    console.log(userUi)
  return (
    <div>
      ComC
      {/* <p>user name: {name} / phone:{phone}</p> */}
      {
        userUi?.map((e) => (
          <div key={e.id}>
            <span>User name:{e.name}</span>
            <span>Phone: {e.phone}</span>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps =(state) => ({
    userUi: state?. usersRoot?.users
})

const mapDispatchToProps = {
  fetchGetUser : getUsers
}

export default connect(mapStateToProps,mapDispatchToProps) (ComponentC)
