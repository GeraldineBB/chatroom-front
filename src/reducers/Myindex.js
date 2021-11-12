import { ADD_NEW_MESSAGE, CHANGE_VALUE_INPUT } from "../actions";


const initialState = {
  /* 
    ranger les messages initiaux dans le state
  */
  messages : ['un', 'deux', 'trois'], 
  valueInput: '', 
  author : 'Super Chatounet'
};

// reducer : fonction qui renvoie une nouvelle version du state 
// à partir des actions qu’on lui demande 
// on se sert aussi du reducer pour initialiser le state ! 
// reducer = employé du store, il répond aux ordres donné par le store 
// dans le reducer on regarde les actions, et en fonction des actions 
// on va retourner une nouvelle version du state


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      console.log('je dois ajouter un message');
      console.log(`action.messageInput: ${action.messageInput}`)
      return {...state,
      messages: [...state.messages, action.messageInput]
      }

    case CHANGE_VALUE_INPUT:
      console.log('je change la valeur de l\'input')
      return {...state, 
      valueInput: action.input
      }

    default:
      return state;
  }
}

export default reducer;
