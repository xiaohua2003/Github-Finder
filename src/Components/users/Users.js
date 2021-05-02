import React,{useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layOut/Spinner'
import GithubContext from "../../context/github/githubContext"

const Users=()=>{
    const githubContext =useContext(GithubContext);
    const {loading, users}=githubContext;
    if(loading){
        return<Spinner/>
    } else{
        return (
            <div className="container">
                <div className="Users_grid">
                    {users.map((user)=>{ return <UserItem key={user.id} user={user}/>})}   
                </div>
            </div>
            
        )
    }    
            }

export default Users
