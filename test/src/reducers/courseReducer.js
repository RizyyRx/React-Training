export default function courseReducer(state=[],action){
    switch(action.type){
        case 'ADD_COURSE':
            return [...state,Object.assign({},action.course)]; // ... is spread operator. (it means, create a new array with all existing courses, plus one new element at the end.)
        default:
            return state;
    }
}