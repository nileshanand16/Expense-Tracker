export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter
          (transaction => transaction.id !== action.payload
        ),
      };
    
    case 'ADD_TRANACTION':
        return {
            ...state,
            transactions: [action.plyload, ...state.transactions]
        }

    default:
      return state;
  }
};
