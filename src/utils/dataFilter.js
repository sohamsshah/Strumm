export const categoryList = (data) => {
    return data.map((item) => item.category);
}

export const filterByInstrumentName = (data, instrument) => {
    return data.filter((item) => item.category.instrument === instrument);
}

export const filterByInstrumentType = (data, types) => {
    var selectedTypes = []
    for(let type in types){
        if(types[type]){
            selectedTypes.push(type);
        }
    }
    console.log(selectedTypes);
    if(selectedTypes.length === 0){
        return data;
    }
    return data.filter((item) => selectedTypes.includes(item.category.type))
}

export const sortByFunction = (data, sortBy) => {
    switch(sortBy){
        case "PRICE_HIGH_TO_LOW":
            return data.sort((a, b) => b["price"] - a["price"]);;
        case "PRICE_LOW_TO_HIGH":
            return data.sort((a, b) => a["price"] - b["price"]);;
        default:
            return data;       
    }
}

