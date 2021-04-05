import React from 'react'

 const UserItem=({user:{login, avatar_url, html_url}})=>  {
    
    
        return (<div className="card">
          <img src={avatar_url} alt='' className='personal_image'/>
          <h3>{login}</h3>
          <a href={html_url} className='btn'>More</a>

        </div>);
    
};


export default UserItem
