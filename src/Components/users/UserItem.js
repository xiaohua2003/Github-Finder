import React, { Component } from 'react'

  class UserItem extends Component {
    
     
    render() {
      const {login, avatar_url, html_url}=this.props.user;
        return (<div className="card">
          <img src={avatar_url} alt='' className='personal_image'/>
          <h3>{login}</h3>
          <a href={html_url} className='btn'>More</a>

        </div>);
    }
}

export default UserItem
