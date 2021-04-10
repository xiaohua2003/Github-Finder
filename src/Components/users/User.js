import React, { Component, Fragment } from 'react';
import Spinner from "../layOut/Spinner";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }
   static propTypes={
       loading: PropTypes.bool,
       User:PropTypes.object.isRequired,
       getUser:PropTypes.func.isRequired
   }
    render() {
        const {name, avatar_url, location, bio, blog,company, login, html_url, followers, following, public_repos, public_gists, hireable}=this.props.User;
        const {loading}=this.props;
        return (
            <div >
                <div className="userFragment">
                    <Link to="/" className="homepageButton">Back to homepage</Link>
                   Hireable:{''}
                   {hireable? (<i calssName="fas fa-check text-success"/> ):(<i className="fas fa-times-circle text-danger" />)}
                </div>
             
              <div className="card grid-2">
                  <div>
                  <img src={avatar_url}className="personal_image"alt="" style={{width:"150px"}}/>
                  <h3>{name}</h3>
                  <p>Location:{location}</p>
                  </div>
                 <div>
                     {bio && (<Fragment>
                         <h3>Bio</h3>
                         <p>{bio}</p>
                         </Fragment>)}
                 <a href={html_url} className="btn">Github Profile</a>
                 <ul className="information">
                     <li>
                         {login &&(<Fragment>userName:{login}</Fragment>) }
                     </li>
                     <li>
                         {company &&(<Fragment>Company:{company}</Fragment>) }
                     </li>
                     <li>
                         {blog &&(<Fragment>Website:{blog}</Fragment>) }
                     </li>
                 </ul>
                 </div>
              </div>
              <div>
                  <div className="card text-center">
                      <div className="badge badge-primary">Followers:{followers}</div>
                      <div className="badge badge-success">Following:{following}</div>
                      <div className="badge badge-blue">Public Repos:{public_repos}</div>
                      <div className="badge badge-dark">Public Gists:{public_gists}</div>
                  </div>
              </div>
            </div>
        )
    }
}

export default User
