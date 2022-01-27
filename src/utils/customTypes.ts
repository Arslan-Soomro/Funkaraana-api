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
    user_id: number,
    id: number,
    name: string,
    description: string,
    price: number,
    image: string
}


export interface PRODUCT_DATA{
    user_id: number,
    name: string,
    description: string,
    price: number,
    image: string
}