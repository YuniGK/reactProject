import ContactList from "../../component/ContactList";

let initialState = {
    contactList : []
};

function reducer(state=initialState, action){
    const {type, payload} = action;//호출을 통해 action.type
    switch(type){//action.type -> type로 줄인다.
        case "ADD_CONTACT" :
            //state값에 추가로 내용을 붙여준다.
            return{...state
                , contactList: [
                    ...state.contactList
                    , {
                        name : payload.name//action.payload
                        , phoneNumber: payload.phoneNumber
                    }
                ]
            };
        default : 
            return{...state}
    }
}

export default reducer;