import { makeAutoObservable } from "mobx";
import { LikesPhotos } from "./likeStore-types";

class LikesPhotoStore { 
  constructor() { 
    makeAutoObservable(this)
  }

  // ============ State ============
  likes: LikesPhotos[] = 
  localStorage.getItem('likePhotos') ? 
  JSON.parse(localStorage.getItem('likePhotos')!) : 
  []
  
  // ============ Movies ============

  addToLikes = (LikePhoto: LikesPhotos) => { 
    const findLikePhoto = this.likes.find((likes) => likes.id == LikePhoto.id)
    !findLikePhoto && this.likes.push({...LikePhoto}) 
    
    localStorage.setItem('likePhotos', JSON.stringify(this.likes))
  }
  deleteFromLikes = (id: string) => { 
    this.likes = this.likes.filter((likes) => likes.id !== id )
    
    localStorage.setItem('likePhotos', JSON.stringify(this.likes))
  }
}
export const likesStore = new LikesPhotoStore()