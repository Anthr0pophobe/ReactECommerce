import { useContext } from 'react';
import { Button } from '@mui/material';
import { PanierContext } from '../src/context/panierContext';

const Home = () => {
	const produits = [
		{
			id: 1,
			nom: 'Article 1',
			description: 'Je suis la description de l article 1',
			prix: 6,
		},
		{
			id: 2,
			nom: 'Article 2',
			description: 'Je suis la description de l article 2',
			prix: 12,
		},
		{
			id: 3,
			nom: 'Article 3',
			description: 'Je suis la description de l article 3',
			prix: 41,
		},
		{
			id: 4,
			nom: 'Aricle 4',
			description: 'Je suis la description de l article 4',
			prix: 81,
		},
		{
			id: 5,
			nom: 'Article 5',
			description: 'Je suis la description de l article 5',
			prix: 64,
		},
	];
	const { panier, setPanier } = useContext(PanierContext);

	const handleClick = (produit) => {
		setPanier([...panier, produit]);
	};

	return (
		<div>
			<h1 className='pl-8'>Catalogue</h1>
			<div className='pl-8 pt-8 flex flex-row w-full flex-wrap'>
				{produits.map((produit) => {
					return (
						<div
							key={produit.id}
							className=' flex flex-col mr-32 mb-8 w-48 bg-slate-200'
						>
							<h3 className='pb-4'>{produit.nom}</h3>
							<p className='pb-4'>{produit.description}</p>
							<div className='flex flex-row justify-around'>
								<Button
									// className='flex-1'
									onClick={() => handleClick(produit)}
								>
									{/*On utilise cette syntaxe pour eviter de regener en boucle les components et de mettres des valeurs inutilement*/}
									ajouter
								</Button>
								<span>{`prix: ${produit.prix} €`}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
