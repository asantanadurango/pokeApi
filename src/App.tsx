import { useEffect, useState } from 'react'
import { PokeApi } from './types'
import Pokedex from 'pokedex'
import { Button, ButtonGroup, Divider } from '@nextui-org/react'
import './App.css'
import PokeCard from './components/PokeCard/PokeCard'

function App() {
  const API_LIMIT = 649
  const [pokemon, setPokemon] = useState<PokeApi>({
    base_experience: 0,
    name: '',
    height: 0,
    id: 0,
    is_default: 0,
    order: 0,
    species_id: 0,
    weight: 0,
    sprites: {
      animated: '',
      normal: '',
    },
  })

  const [pokeNumber, setPokeNumber] = useState<number>(1)

  const pokedex = new Pokedex()

  useEffect(() => {
    const newPokemon: PokeApi = pokedex.pokemon(pokeNumber)
    setPokemon(newPokemon)
  }, [pokeNumber])

  return (
    <>
      <strong className='text-white'>
        {pokeNumber} / {API_LIMIT}
      </strong>
      <Divider className='my-4 bg-red-500'></Divider>
      <PokeCard pokemon={pokemon} />
      <ButtonGroup className='mt-1'>
        <Button
          className='font-extrabold border-2 mr-1'
          color='danger'
          variant='bordered'
          isDisabled={pokeNumber < 2}
          onClick={() => {
            setPokeNumber(pokeNumber - 1)
          }}>
          Prev
        </Button>
        <Button
          className='font-extrabold border-2'
          color='danger'
          variant='bordered'
          isDisabled={pokeNumber === API_LIMIT}
          onClick={() => {
            setPokeNumber(pokeNumber + 1)
          }}>
          Next
        </Button>
      </ButtonGroup>
    </>
  )
}

export default App
