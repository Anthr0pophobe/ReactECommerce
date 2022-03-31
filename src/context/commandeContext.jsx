import { createContext, useState } from 'react';

export const CommandeContext = createContext();

export const CommandeProvider = (props) => {
	let [commande, setCommande] = useState([]);
	return (
		<CommandeContext.Provider
			value={{ commande: commande, setCommande }}
		>
			{props.children}
		</CommandeContext.Provider>
	);
};
