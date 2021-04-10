import React from 'react';
import {Link} from 'react-router-dom';

 const UserItem=({user:{login, avatar_url, html_url}})=>  {
    
    
        return (<div className="card">
          <img src={avatar_url} alt='' className='personal_image'/>
          <h3>{login}</h3>
          <Link to={`/user/${login}`} className='btn'>More</Link>

        </div>);
    
};


export default UserItem
