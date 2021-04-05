import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layOut/Spinner'

const Users=({users, loading})=>{
    if(loading){
        return<Spinner/>
    } else{
        return (
            <div style={styles}>
                {users.map((user)=>{ return <UserItem key={user.id} user={user}/>})
                }
            </div>
        )
    }    
            }

const styles={
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(200px, 1fr))',
    gridGap:'0.8rem'
}
export default Users
