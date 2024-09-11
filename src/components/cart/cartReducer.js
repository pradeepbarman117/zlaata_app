

/**
 * Reduces the state based on the provided action, handling increment and decrement operations.
 *
 * @param {Object} state - The current state, containing a quantity property.
 * @param {Object} action - The action to perform, with a type property indicating the operation (INCREMENT or DECREMENT).
 * @return {Object} The updated state with the new quantity.
 */
function quantityReducer(state, action) {
    const { type, payload } = action;
    const { quantity } = state;

    switch (type) {
        // Increment the quantity if it's less than 5
        case "INCREMENT":
            return quantity < 5 ? { ...state, quantity: quantity + 1 } : state;

        // Decrement the quantity if it's greater than 1
        case "DECREMENT":
            return quantity > 1 ? { ...state, quantity: quantity - 1 } : state;

        // Return the current state if the action type is unknown
        default:
            return state;
    }
}

export { quantityReducer };