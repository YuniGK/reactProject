import ContactList from "../../component/ContactList";

let initialState = {
    contactList : []
};

function reducer(state=initialState, action){
    switch(action.type){
        case "ADD_CONTACT" :
            //state값에 추가로 내용을 붙여준다.
            return{...state
                , contactList: [
                    ...state.contactList
                    , {
                        name : action.payload.name
                        , phoneNumber: action.payload.phoneNumber
                    }
                ]
            };
        default : 
            return{...state}
    }
}

export default reducer;