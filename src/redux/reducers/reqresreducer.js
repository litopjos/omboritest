export const reqResReducer =  (state = {},action)=>{

        switch (action.type) {

            case "GET_USERS":
//                alert(`ReqRes REDUCER: GET_USERS`);

                const newUsers = [...state.userData, ...action.users];

                if (action.users.length>0)
                    return (
                        {userData:newUsers, userPage:action.page, moreUsers:true}
                    )
                else
                    return (
                        {userData:state.userData, userPage:state.userPage, moreUsers:false}
                    )
    
            default:
                return state;
        }
    }
