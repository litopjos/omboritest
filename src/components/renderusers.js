import React from "react";
import "./renderusers.css";

export const RenderUsers = (props)=>{
//    console.log(props.users);
//    alert('hey');
    return (
        <div >
        
            <div className="App-header">
                <h1>Users</h1>
            </div>

            {
                props.users.map(
                    (user)=>{
                        return(
                            <div className="user_entry">
                                <img className = "user_image" alt='avatar' src={user.avatar}/>
                                <h1 className = "user_name">{user.first_name} {user.last_name}</h1>

                            </div>
                        )
                    }
                )
            }
        </div>

    )
}