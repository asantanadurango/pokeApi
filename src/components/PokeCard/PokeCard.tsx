import { PokeApi } from '../../types'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import PokeIcon from '../PokeIcon/Pokeicon'
type Props = {
  pokemon: PokeApi
}

export default function PokeCard({
  pokemon: { base_experience, height, id, name, sprites, weight },
}: Props) {
  return (
    <>
      <Card
        isFooterBlurred
        radius='lg'
        className='border-2 rounded-xl border-rose-500  w-[380px] flex justify-center text-white items-center bg-red-700'
        style={{
          backgroundImage: 'url("./cardBackground.svg")',
          backgroundPosition: 'center',
        }}>
        <CardHeader className='flex justify-center text-white font-bold text-3xl'>
          <section className='basis-5/12 flex justify-center'>
            <PokeIcon className='origin-right scale-[.35]' />
          </section>
          <section className='basis-7/12'>
            {name ? (
              <h1>{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</h1>
            ) : (
              <h1>No pokemon</h1>
            )}
          </section>
        </CardHeader>

        {name && (
          <CardBody className='grid grid-cols-2 justify-items-center w-80'>
            <h2 className='text-rose-400 font-bold text-[.9rem]'>
              Id: <span className='text-white text-xl ml-2'>{id}</span>
            </h2>
            <h2 className='text-rose-400 font-bold text-[.9rem]'>
              Experience:
              <span className='text-white text-xl ml-2'>{base_experience}</span>
            </h2>
            <h2 className='text-rose-400 font-bold text-[.9rem]'>
              Weight: <span className='text-white text-xl ml-2'>{weight}</span>
            </h2>
            <h2 className='text-rose-400 font-bold text-[.9rem]'>
              Height: <span className='text-white text-xl ml-2'>{height}</span>
            </h2>
          </CardBody>
        )}
        <picture className='dark:border-gray-800 h-60 flex justify-center p-2'>
          <img
            alt='Woman listing to music'
            className='object-contain h-full w-60 mx-auto'
            src={
              name
                ? sprites.animated
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVvWp0DXLt9VkjJ9yUCUJEOmbSRii58iVIw&usqp=CAU'
            }
          />
        </picture>
      </Card>
    </>
  )
}
