export const categoryList = (data) => {
    return data.map((item) => item.category);
}

export const filterByInstrumentName = (data, instrument) => {
    return data.filter((item) => item.category.instrument === instrument);
}

export const filterByInstrumentType = (data, instrument, type) => {
    return data.filter((item => item.category.instrument === instrument)).filter((item) => item.category.type === type)
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

