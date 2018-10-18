import axios from "axios";

const getUserData = (users,page)=>{

//    alert(`ACTION ReqRes: getUserData()`);

    return {
        type: 'GET_USERS',
        users,
        page
    }    

}

export const startGetUserData = (page)=>{

//    alert(`ACTION ReqRes: startGetUserData(${page})`);    

    return (dispatch,getState)=>{

        // Obtain the user data from the ReqRes server.
        axios.get(`https://reqres.in/api/users?page=${page}`)
        .then(
            (resp)=>{
                const users = resp.data.data;
//                console.log(users);
//                alert(users);

                dispatch(getUserData(users,page));
            }
        )
        .catch(
            (error)=>{
                alert(`ERROR: ${error}`)
            }

        )



 

    }
}