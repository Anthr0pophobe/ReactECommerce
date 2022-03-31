import React, { useContext, useState } from 'react';
import { PanierContext } from '../src/context/panierContext';
import { CommandeContext } from '../src/context/commandeContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const Panier = () => {
	const router = useRouter();
	const champs = [
		{
			name: 'nom',
			placeholder: 'Votre nom',
		},
		{
			name: 'email',
			placeholder: 'Votre email',
		},
		{
			name: 'adresse',
			placeholder: 'Votre Adresse',
		},
		{
			name: 'commentaire',
			placeholder: 'Commentaire (facultatif)',
		},
	];
	const [form, setForm] = useState({
		nom: '',
		email: '',
		adresse: '',
		commentaire: '',
	});
	const { panier, setPanier } = useContext(PanierContext);
	const { setCommande } = useContext(CommandeContext);

	const deleteArticle = (article) => {
		setPanier(
			panier.filter((panier) => panier.id !== article.id)
		);
	};

	function handleChange(e) {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			form.nom.length > 0 &&
			form.email.length > 0 &&
			form.adresse.length > 0
		) {
			setCommande(Object.assign({ form }, { panier }));
			router.push('/commande');
		} else {
			alert('veuillez compléter vos informations');
		}
	};

	return (
		<div>
			<h2 className='text-4xl font-bold pl-4 pt-4'>
				Votre panier
			</h2>
			<div className='pl-4'>
				<TableContainer
					component={Paper}
					style={{ maxWidth: '98%' }}
				>
					<Table
						sx={{ minWidth: 650 }}
						aria-label='simple table'
					>
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Nom</TableCell>
								<TableCell>Prix</TableCell>
								<TableCell>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{panier.map((article) => (
								<TableRow
									key={article.id}
									sx={{
										'&:last-child td, &:last-child th': {
											border: 0,
										},
									}}
								>
									<TableCell component='th' scope='row'>
										{article.nom}
									</TableCell>
									<TableCell>
										{article.description}
									</TableCell>
									<TableCell>{article.prix}€</TableCell>
									<TableCell>
										<Button
											onClick={() => deleteArticle(article)}
										>
											supprimer
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<h2 className='text-4xl font-bold pl-4 py-4'>
				Votre profil
			</h2>
			<form onSubmit={handleSubmit}>
				<div className='pl-4 flex flex-col pr-4'>
					{champs.map((champ) => {
						return (
							<TextField
								onChange={handleChange}
								key={champ.name}
								name={champ.name}
								className='flex-1 pb-4'
								placeholder={champ.placeholder}
							></TextField>
						);
					})}
				</div>
				<Button type='submit' className='ml-4'>
					commander
				</Button>
			</form>
		</div>
	);
};

export default Panier;

{
	/* <TextField
value={form.nom}
name='nom'
className='flex-1 pb-4'
placeholder='Votre nom'
></TextField>
<TextField
value={form.email}
name='email'
className='flex-1 pb-4'
placeholder='Votre email'
></TextField>
<TextField
value={form.adresse}
name='adresse'
className='flex-1 pb-4'
placeholder='Votre adresse'
></TextField>
<TextField
value={form.commentaire}
name='commentaire'
className='flex-1 pb-4'
placeholder='Commentaire (facultatif)'
></TextField> */
}
