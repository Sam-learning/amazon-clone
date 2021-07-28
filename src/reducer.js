export const initialState ={
    basket : [],
    user : null,
}

const reducer = (state, action) => {
    switch(action.type){
        case "Add_To_Basket":
            //return the state and overwrite the value of basket
            return {
                ...state,
                //把basket更新
                basket:[...state.basket, action.item]
            };
            
        case "Remove_Basket":
            return {state};
            
        default:
            return state;
    }
}

export default reducer;