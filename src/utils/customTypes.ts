export interface USER_DATA {
    name: string;
    username: string,
    email: string,
    password: string,
    type: string
};

export interface USER_DATA_ALL extends USER_DATA{
    id: number,
};

export interface PRODUCT_DATA_ALL{
    userID: number,
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    seller?: string
}


export interface PRODUCT_DATA{
    userID: number,
    name: string,
    description: string,
    price: number,
    image: string
}