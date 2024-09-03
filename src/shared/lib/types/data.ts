export interface IProduct {
    plus: Plus[] 
    price: number
    title: string
    img: string
    bigImg: string
    id: string
    description: string
    dimensions: Dimensions[]
}

export interface Plus { 
    material: string
    handmadeUpholstery: string
    conclusion: string
}

export interface Dimensions {
    Height: string
    Width: string
    Depth: string
}