import { CardCat } from '../CardCat/CardCat'
import { useCat } from '../../module/Cat'


export const CatListContainer = () => {

  const {
    isLoading,
    catList
  } = useCat();

  return (
    <div >
      {isLoading && <p>Loading...</p>}
      {catList.map((cat) => (
        <CardCat key={cat.id}
          id={cat.id}
          name={cat.name}
          description={cat.description}
          image={cat.image}
          temperament={cat.temperament}
          origin={cat.origin}
        />
      ))}
    </div>
  )
}
