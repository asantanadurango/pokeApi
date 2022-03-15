import styled, { createGlobalStyle } from 'styled-components';

export const GLOBALSTYLE = createGlobalStyle`
   * {
      outline: none;
      box-sizing: border-box;
      }

   body {
		min-height:100vh;
    	margin: 0;
    	font-size: 16px;
    	font-family: "Roboto", sans-serif;
		background-image: url('https://wallpapercave.com/wp/wp3961348.jpg');
		background-size:cover;
   		background-position: 70% 0;
    	display: grid;
    	place-items: center;
      }

   @media (max-width: 500px) {
   .container {
      min-height: 100%;
   }

   .card {
      transform: scale(0.8);
   }
}
    
   `;

export const CONTAINER = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	min-height: 100vh;

	@media (max-width: 500px) {
		min-height: 100%;
	}
`;

export const CARD_HEAD = styled.div`
	position: relative;
	height: 252px;
	${({ color }) => `background: linear-gradient(45deg, ${color || '#fa782e'} , #fee );`}
	border-radius: 25px 25px 0 0;
	border-bottom: 5px solid black;
`;

export const CARD = styled.div`
	width: 280px;
	height: 500px;
	border-radius: 25px;
	box-shadow: -12px 16px 3px rgba(0, 0, 0, 0.3);
	transition: transform 0.3s linear;

	@media (max-width: 500px) {
		transform: scale(0.8);
	}
`;

export const IMG_LOGO = styled.img`
	width: 55px;
	margin: 20px;
`;

export const IMGBOX = styled.div`
	z-index: 1000;
	position: absolute;
	border-radius: 50%;
	top: 50%;
	left: 50%;
	width: 70%;
	height: 70%;
	transform: translate(0, -50%);
	display: grid;
	place-items: center;
`;

export const IMG_HEAD = styled.img`
	position: relative;
	max-width: 100%;
	object-fit: cover;
`;

export const HEAD_DETAILS = styled.div`
	display: block;
	padding: 0 20px;
	font-size: 11px;
	font-weight: bold;
	${({ color }) =>
		`color: ${color.toLowerCase() === 'white' || color.toLowerCase() === 'yellow' || color.toLowerCase() === 'pink' ? '#000' : '#fff'};`}
`;

export const HEAD_DETAILS__TITLE = styled.div`
	display: block;
	padding: 0 20px;
	font-size: 11px;
`;

export const BADGE = styled.div`
	position: relative;
	font-size: 0.8rem;
	font-weight: 300;
	color: #fff;
	background: #333;
	padding: 8px;
	border-radius: 0% 50% 50% 0;
	top: -2px;
	margin-left: 5px;
	width: 50%;
`;

export const BODY_CARD = styled.div`
	height: 255px;
	background: #eff;
	border-radius: 0 0 25px 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const BODY_CARD__TITLE = styled.div`
	padding: 20px 20px 5px 20px;
	display: block;
	font-size: 17px;
	font-weight: 500;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

export const BODY_CARD__LIST = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	max-height: 80%;
`;

export const BODY_CARD__ITEM = styled.div`
	list-style: none;
	margin: 10px auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const BODY_CARD__TITLE_ITEM = styled.div`
	font-weight: 700;
	font-size: 0.8rem;
`;

export const BODY_CARD__LINK = styled.a`
	display: inline-block;
	text-decoration: none;
	font-weight: bolder;
	font-size: 0.7rem;
	margin-top: 2px;
	width: 22px;
	height: 22px;
	border-radius: 50%;
	text-align: center;
	line-height: 23px;
	box-shadow: -5px 5px 1px rgba(0, 0, 0, 0.3);
	${({ color }) => `background: ${color.toLowerCase() === 'white' ? 'black' : color};`}
	color: #fff;
	border-left: 2px solid #bbb;
	border-bottom: 2px solid #bbb;
`;

export const ARROWS_BOX = styled.div`
	width: 200px;
	display: flex;
	justify-content: space-evenly;
`;

export const ARROW_BTN = styled.div`
	background-color: rgba(255, 255, 255, 0.3);
	padding: 10px;
	border: 2px solid #bbb;
	outline: none;
	border-radius: 30%;
	box-shadow: -6px 6px 1px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(1px);
	color: ${({ color }) => color};
	transition: transform 0.3s;

	:active {
		transform: scale(0.8);
	}

	& i {
		font-size: 2rem;
	}
`;
