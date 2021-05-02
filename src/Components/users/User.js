import React, { useEffect, Fragment,useContext } from 'react';
import Spinner from "../layOut/Spinner";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
const User=({ repos,match})=>{
    const githubContext=useContext(GithubContext);
    const {getUser, loading,User}=githubContext;
    useEffect(()=>{
        getUser(match.params.login); 
    },[]);
        const {name, avatar_url, location, bio, blog,company, login, html_url, followers, following, public_repos, public_gists, hireable}=User; 
        return (
            <div className="personal-page">
                <div className="userFragment">
                    <Link to="/" className="homepageButton">Back</Link>
                   Hireable:{''}
                   {hireable? (<i calssName="fas fa-check text-success"/>) :(<i className="fas fa-times-circle text-danger" />)}
                </div>
             
              <div className="card grid-2">
                  <div>
                  <img src={avatar_url}className="personal_image2"alt=""/>
                  <h3>{name}</h3>
                  <p>Location:{location}</p>
                  </div>
                 <div>
                     {bio && (<Fragment>
                         <h3>Bio</h3>
                         <p>{bio}</p>
                         </Fragment>)}
                 <a href={html_url} className="btn">Profile</a>
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
User.propTypes={
    loading: PropTypes.bool,
  
    
};
export default User
