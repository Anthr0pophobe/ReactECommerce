import React, { useContext } from 'react';
import { CommandeContext } from '../src/context/commandeContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Commande = () => {
	const { commande } = useContext(CommandeContext);
	const { form, panier } = commande;
	console.log(form);
	return (
		<div className='pl-4 pt-4'>
			<h2 className='text-4xl font-bold'>
				Bon de commande
			</h2>
			<p>Merci pour votre commande !</p>
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
									<TableCell></TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<div className='my-4  pr-4 h-1 w-full bg-slate-300' />
				<h2 className='text-4xl font-bold'>
					details Livraison
				</h2>
				<ul>
					<li>nom : {form.nom}</li>
					<li>email : {form.email}</li>
					<li>adresse : {form.nom}</li>
					<li>Commentaire : {form.commentaire}</li>
				</ul>
			</div>
		</div>
	);
};

export default Commande;
