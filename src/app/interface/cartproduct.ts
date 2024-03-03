
export interface Welcome {
    status:         string;
    numOfCartItems: number;
    data:           Data;
}

export interface Data {
    _id:            string;
    cartOwner:      string;
    products:       ProductElementCart[];
    createdAt:      Date;
    updatedAt:      Date;
    __v:            number;
    totalCartPrice: number;
}

export interface ProductElementCart {
    count:   number;
    _id:     string;
    product: Cartproduct;
    price:   number;
}

export interface Cartproduct {
    subcategory:    Brand[];
    _id:            string;
    title:          string;
    quantity:       number;
    imageCover:     string;
    category:       Brand;
    brand:          Brand;
    ratingsAverage: number;
    id:             string;
}

export interface Brand {
    _id:       string;
    name:      string;
    slug:      string;
    image?:    string;
    category?: string;
}

