import React, {useReducer} from "react";
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from "./githubReducer";
import{
    SEARCH_USERS,
     GET_USER,
     CLEAR_USERS,
     SET_LOADING,  
} from'../type';
const GithubState=props=>{
    const initialState={
        users:[],
        User:{},
        loading:false    
    }
    const [state,dispatch]=useReducer(GithubReducer, initialState);
    //Search Users

    //Get Users

    //Clear Users

    //Set Loading
    return <GithubContext.Provider
    value={{
        users:state.users,
        User:state.User,
        loading:state.loading
    }}>
    {props.children}
    </GithubContext.Provider>
};
export default GithubState;
