export interface USER_DATA {
    name: string;
    username: string,
    email: string,
    password: string
};

export interface USER_DATA_ALL extends USER_DATA{
    id: number,
    type: string
};