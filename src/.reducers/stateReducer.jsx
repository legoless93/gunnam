export function stateReducers(state={auth: false, user:{
    _id: 1,
    role: "admin",
    firstName: "Gun-Woo",
    lastName: "Nam"
}
                                    }, action)
{
    switch(action.type) {

        case "SIGN_IN":
            return{...state, auth: true, user: action.payload};
            break;

                      }
    return state;
}