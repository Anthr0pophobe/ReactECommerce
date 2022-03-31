import { createContext, useState } from 'react';

export const PanierContext = createContext();

export const PanierProvider = (props) => {
	let [panier, setPanier] = useState([]);

	return (
		<PanierContext.Provider
			value={{ panier: panier, setPanier }}
		>
			{props.children}
		</PanierContext.Provider>
	);
};
