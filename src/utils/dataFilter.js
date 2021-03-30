export const categoryList = (data) => {
    return data.map((item) => item.category);
}

export const filterByInstrumentName = (data, instrument) => {
    return data.filter((item) => item.category.instrument === instrument);
}

export const filterByInstrumentType = (data, instrument, type) => {
    return data.filter((item => item.category.instrument === instrument)).filter((item) => item.category.type === type)
}

