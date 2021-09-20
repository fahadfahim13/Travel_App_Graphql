export interface amenity {
    icon: string;
    title: string;
}

export interface Discount{
    title: string;
    amount: number;
}

export interface Holiday{
    title: string;
    uid: string | number;
    startingPrice: number | string;
    amenities: amenity[] | [];
    discount: Discount | null;
    durationText: string;
    loyaltyPointText: string;
    thumbnail: string;
    description: string;
    __typename: string;
}

export default {}