export interface amenity {
    icon: string;
    title: string;
}

export interface Holiday{
    title: string;
    uid: string | number;
    startingPrice: number | string;
    amenities: amenity[] | [];
    discount: number | null;
    durationText: string;
    loyaltyPointText: string;
    thumbnail: string;
    description: string;
    __typename: string;
}

export default {}