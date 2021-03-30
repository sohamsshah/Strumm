export const totalItems = (data) => {
    return data.filter((item) => item.quantity > 0)
}

export const totalQuantity = (data) => {
    return data.map((item) => item.quantity).reduce((a,b) => a+b)
}
