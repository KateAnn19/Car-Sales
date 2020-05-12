export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (feature) => {
    
    return {type: ADD_FEATURE, payload: feature};
}

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (feature) => {
    console.log(feature)
    return {type: REMOVE_FEATURE, payload: feature};
}

//Total should update as user adds and removes features from their car
export const UPDATE_TOTAL = "UPDATE_TOTAL";

export const updateTotal = addCost => {
    console.log('in update total')
    return {type: UPDATE_TOTAL, payload: addCost}
}



