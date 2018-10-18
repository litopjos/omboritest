import React from "react";

export const RenderUsers = (props)=>{
//    console.log(props.users);
//    alert('hey');
    return (
        <div>
            {
                props.users.map(
                    (user)=>{
                        return(
                            <div>
                                <h1>{user.first_name} {user.last_name}</h1>
                                <img alt='avatar' src={user.avatar}/>
                            </div>
                        )
                    }
                )
            }
        </div>

    )
}