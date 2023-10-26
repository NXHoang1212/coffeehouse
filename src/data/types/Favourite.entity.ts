export interface GetFarvourites {
    _id: string;
    ProductId: string;
    UserId: string;
    status: string;
}

export interface DeleteFavourite {
    ProductId: string;
}


export interface CreateFavourite {
    ProductId: string;
    UserId: string;
    status: string;
}

