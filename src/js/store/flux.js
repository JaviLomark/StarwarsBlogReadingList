const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			vehiculos: [],
			favoritos: [],
		},


		actions: {
			obtenerPersonas : async () => {
				const res = await fetch("https://www.swapi.tech/api/people/");
				const data = await res.json();
				setStore({personajes:data.results});
			},
			obtenerPlanetas : async () => {
				const res = await fetch("https://www.swapi.tech/api/planets/");
				const data = await res.json();
				setStore({planetas:data.results});
			},
			obtenerVehiculos : async () => {
				const res = await fetch("https://www.swapi.tech/api/vehicles/");
				const data = await res.json();
				setStore({vehiculos:data.results});
			},
			handleFavorites: (element) => {
				const store = getStore()
				if(store.favoritos.includes(element)){
					let newFavorites = store.favoritos.filter(favorito => favorito != element)
					setStore({favoritos:newFavorites})
				} else{
						setStore({favoritos:[...store.favoritos,element]})
					}
			}
		}
	};
};

export default getState;