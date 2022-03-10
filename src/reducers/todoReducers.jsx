// Reducer mein current state and action hold karka rakhta ha 

// is initial state mein multiple states bana sakte han object bana kar
const initialData = {
list : []
}

// we do not do this in redux,in line 4 we follow this process like list : []
// const [list,setList] = usState([]) aese karenga to error ae ga 
// action mein payload object recieve ho raha ha 
const todoReducers = (state = initialData,action) =>{
    switch(action.type){
        case "ADD_TODO":
            
            const {id,data} = action.payload;
            return {...state, //previous state data
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case "DELETE_TODO":
            const newList = state.list.filter((elem)=>elem.id !== action.id)   
            return  {...state,list:newList} 
        case "REMOVE_TODO":
            return{...state,list:[]    }
            
            default:return state
        }
}
export default todoReducers