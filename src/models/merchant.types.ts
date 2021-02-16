export interface Merchant {
    categoryId: number,
    iconUrl: number,
    id: string,
    isBill: boolean,
    name: string,
    transactions: Transaction[]
}

export interface Transaction {
    amount: number,
    date: string,
    id: number
}
