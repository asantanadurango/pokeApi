export interface PokeApi {
  id: number
  species_id: number
  height: number
  weight: number
  base_experience: number
  order: number
  is_default: number
  name: string
  sprites: Sprites
}

export interface Sprites {
  normal: string
  animated: string
}
