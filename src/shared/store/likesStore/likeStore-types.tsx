import { IProduct } from "../../shared/lib/types/data";

export interface LikesPhotos extends Pick<IProduct, 'title' | 'price' | 'img' | 'id'> { 

}