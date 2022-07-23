
export const getCoinById = (id,coins) => {
    return coins.find(coin => coin.id===id)
}