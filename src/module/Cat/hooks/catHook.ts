import { useEffect, useState } from "react";
import { Cat, CatRaw } from "../Cat.types";
import { get } from "../../../shared/client";

export const useCat = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [catList, setCatList] = useState<Cat[]>([])

  const fetchCatList = async () => {
    setIsLoading(true);
    const { data }: { data: CatRaw[] } = await get("/breeds");
    const catListPromise = await Promise.all(
      data.map(async (cat) => {
        let data = { url: "" };
        try{
          const response = await get(`/images/${cat.reference_image_id}`);
          data = response.data as { url: string };
        }catch(error){
          data = { url: "https://placehold.co/600x400" };
        }

        return {
          id: cat.id,
          name: cat.name,
          description: cat.description,
          image: data.url,
          temperament: cat.temperament,
          origin: cat.origin,
        }
      })
    )

    setCatList(await catListPromise);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCatList();
  }, []);


  return {
    isLoading,
    catList,
    fetchCatList,
  }
}