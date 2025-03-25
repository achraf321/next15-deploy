interface CardProp {
    title : string ,
    price : number ,
    interval : string ,
    description : string ,
    isPopular : boolean ,
    features : string[]
}


export const AvailablePlans : CardProp[] = [
    {
        title : "Basic",
        price : 19.99,
        interval : "month" ,
        description : "Best Package For Begginer Very adviced to Buy",
        isPopular : false,
        features : [
            "Very Easy To Use Especially For Begginers" ,
            "Give You Packages That Give You Refund" ,
            "Gift For The First Buyer"
        ]
    },
    {
        title : "Premuim",
        price : 49.99,
        interval : "halfyear" ,
        description : "Best Package For Pro Developer Very adviced to Buy and Popular",
        isPopular : true,
        features : [
            "Very Easy To Use Especially For Begginers" ,
            "Give You Packages That Give You Refund" ,
            "Gift For The First Buyer"
        ]
    },
    {
        title : "Vip",
        price : 99.99,
        interval : "year" ,
        description : "Best Package For Companies Owners",
        isPopular : false,
        features : [
            "Very Easy To Use Especially For Begginers" ,
            "Give You Packages That Give You Refund" ,
            "Gift For The First Buyer"
        ]
    },
]


const PriceId : Record<string , string> = {
    month : process.env.STRIPE_MONTHLY_SECRET!,
    halfyear : process.env.STRIPE_HALFYEAR_SECRET!,
    year : process.env.STRIPE_YEARLY_SECRET!,
}  


export const GetPriceId = (planType: string) => {
    console.log("Fetching Price ID for:", planType);
    return PriceId[planType]; 
};
