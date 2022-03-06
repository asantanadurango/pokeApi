import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import {
	GLOBALSTYLE,
	CONTAINER,
	CARD_HEAD,
	CARD,
	IMG_LOGO,
	IMGBOX,
	IMG_HEAD,
	HEAD_DETAILS,
	HEAD_DETAILS__TITLE,
	BADGE,
	BODY_CARD,
	BODY_CARD__TITLE,
	BODY_CARD__LIST,
	BODY_CARD__ITEM,
	BODY_CARD__TITLE_ITEM,
	BODY_CARD__LINK,
	ARROWS_BOX,
	ARROW_BTN,
} from './styled-components';

function App() {
	const [pokemonOrder, setPokemonOrder] = useState(1);
	const [pokemonColor, setPokemonColor] = useState('');
	const [pokemonImg, setPokemonImg] = useState('');
	const [pokemonName, setPokemonName] = useState('');
	const [pokemonDescription, setPokemonDescription] = useState('Es muy amigable');
	const [pokemonStats, setPokemonStats] = useState({
		hp: 0,
		attack: 0,
		defense: 0,
		specialAttack: 0,
		specialDefense: 0,
		speed: 0,
	});

	const pokemonRequest = async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonOrder}`);
		const pokemon = await res.json();
		setPokemonColor(await getPokemonColor(pokemon.species.url));
		getPokemonDescription(pokemonOrder);
		setPokemonImg(pokemon.sprites.other.dream_world.front_default);
		setPokemonName(pokemon.name);
		setPokemonStats({
			hp: pokemon.stats[0].base_stat,
			attack: pokemon.stats[1].base_stat,
			defense: pokemon.stats[2].base_stat,
			specialAttack: pokemon.stats[3].base_stat,
			specialDefense: pokemon.stats[4].base_stat,
			speed: pokemon.stats[5].base_stat,
		});
		return;
	};

	const getPokemonColor = async specieUrl => {
		if (!specieUrl) {
			return;
		}

		const res = await fetch(specieUrl);

		if (!res) {
			return;
		}

		const pokemonSpecies = await res.json();
		return pokemonSpecies.color?.name;
	};

	const getPokemonDescription = async pokemonOrder => {
		if (pokemonOrder > 30) pokemonOrder = Math.floor(Math.random() * 30) + 1;

		const res = await fetch(`https://pokeapi.co/api/v2/characteristic/${pokemonOrder}`);
		const data = await res.json();
		const { descriptions } = data;
		const descriptionObj = descriptions.find(obj => obj.language.name.toLowerCase() === 'es');
		const description = descriptionObj.description;
		setPokemonDescription(description);
		return;
	};

	useEffect(() => {
		pokemonRequest();
	}, [pokemonOrder]);

	const up = () => {
		setPokemonOrder(pokemonOrder + 1);
	};

	const down = () => {
		pokemonOrder > 1 && setPokemonOrder(pokemonOrder - 1);
	};

	return (
		<>
			<GLOBALSTYLE />
			<CONTAINER>
				<CARD>
					<CARD_HEAD color={pokemonColor}>
						<IMG_LOGO src={logo} alt='logo' />

						<IMGBOX>
							<IMG_HEAD src={pokemonImg} alt='pokemon image' />
						</IMGBOX>
						<HEAD_DETAILS>
							<BADGE>pokemon #{pokemonOrder}</BADGE>
							<br />
							<br />
							<br />
							<HEAD_DETAILS__TITLE>{pokemonName} </HEAD_DETAILS__TITLE>
							<br />
							{pokemonDescription}
						</HEAD_DETAILS>
					</CARD_HEAD>
					<BODY_CARD>
						<BODY_CARD__TITLE>Estadisticas</BODY_CARD__TITLE>
						<BODY_CARD__LIST>
							<BODY_CARD__ITEM>
								<BODY_CARD__TITLE_ITEM>Hp</BODY_CARD__TITLE_ITEM>
								<BODY_CARD__LINK color={pokemonColor}>{pokemonStats.hp}</BODY_CARD__LINK>
							</BODY_CARD__ITEM>
							<BODY_CARD__ITEM>
								<BODY_CARD__TITLE_ITEM>Ataque</BODY_CARD__TITLE_ITEM>
								<BODY_CARD__LINK color={pokemonColor}>{pokemonStats.attack}</BODY_CARD__LINK>
							</BODY_CARD__ITEM>
							<BODY_CARD__ITEM>
								<BODY_CARD__TITLE_ITEM>Defensa</BODY_CARD__TITLE_ITEM>
								<BODY_CARD__LINK color={pokemonColor}>{pokemonStats.defense}</BODY_CARD__LINK>
							</BODY_CARD__ITEM>
							<BODY_CARD__ITEM>
								<BODY_CARD__TITLE_ITEM>Ataque Especial</BODY_CARD__TITLE_ITEM>
								<BODY_CARD__LINK color={pokemonColor}>{pokemonStats.specialAttack}</BODY_CARD__LINK>
							</BODY_CARD__ITEM>
							<BODY_CARD__ITEM>
								<BODY_CARD__TITLE_ITEM>Defensa Especial</BODY_CARD__TITLE_ITEM>
								<BODY_CARD__LINK color={pokemonColor}>{pokemonStats.specialDefense}</BODY_CARD__LINK>
							</BODY_CARD__ITEM>
							<BODY_CARD__ITEM>
								<BODY_CARD__TITLE_ITEM>velocidads</BODY_CARD__TITLE_ITEM>
								<BODY_CARD__LINK color={pokemonColor}>{pokemonStats.speed}</BODY_CARD__LINK>
							</BODY_CARD__ITEM>
						</BODY_CARD__LIST>
					</BODY_CARD>
				</CARD>

				<ARROWS_BOX>
					<ARROW_BTN color={pokemonColor} onClick={down}>
						<i className='bx bx-left-arrow'></i>
					</ARROW_BTN>
					<ARROW_BTN color={pokemonColor} onClick={up}>
						<i className='bx bx-right-arrow'></i>
					</ARROW_BTN>
				</ARROWS_BOX>
			</CONTAINER>
		</>
	);
}

export default App;
