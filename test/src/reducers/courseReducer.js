export default function courseReducer(state=[],action){
    switch(action.type){
        case 'SET_COURSE_TITLE':
            return {...state,course:{title:action.payload}};
        case 'ADD_COURSE':
            return {...state,courses:[...state.courses,state.course],course:{title:""}};
        default:
            return state;
    }
}
