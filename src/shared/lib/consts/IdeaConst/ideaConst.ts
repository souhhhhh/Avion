import { usePhotos } from "../../hooks/usePhotos";
import { IIdea } from "./IdeaConst.types";
const { Furniture, Furniture2 } = usePhotos()
export const ideaConst: IIdea[] = [
  {
    MainText: 'From a studio in London to a global brand with over 400 outlets',
    firstIdeaText: 'When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.',
    secondIdeaText: '	Handmade, and lovingly crafted furniture and homeware is what we live,breathe and design so our Chelsea boutique become the hotbed for the London interior design community.',
    image: Furniture,
    position: false
  },
  {
    MainText: 'Our service isn’t just personal, it’s actually hyper personally exquisite',
    firstIdeaText: 'When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.',
    secondIdeaText: 'Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.',
    image: Furniture2,
    position: true
  },
]
