export interface Cat {
  id: string;
  name: string;
  description: string;
  image: string;
  temperament: string;
  origin: string;
}

export interface CatRaw {
  id: string;
  name: string;
  description: string;
  reference_image_id: string;
  temperament: string;
  origin: string;
}