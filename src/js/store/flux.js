const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      people: [],
      starships: [],
      planets: [],
      favorites: [],
      detail: { properties: {} },
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      setFavorite: (favorites, newFav) => {
        if (!favorites.includes(newFav)) {
          setStore({ favorites: [...favorites, newFav] });
        }
      },
      removeFavorite: (favorites, name) => {
        favorites = favorites.filter((element) => {
          return element != name;
        });
        setStore({ favorites: favorites });
      },
      loadDetails: async (type, id) => {
        let response = await (
          await fetch(`https://www.swapi.tech/api/${type}/${id}`)
        ).json();
        console.log("details --> ", response.result);
        setStore({ detail: response.result });
      },
      loadData: async () => {
        let response = await (
          await fetch("https://www.swapi.tech/api/people")
        ).json();
        setStore({ people: response.results });

        response = await (
          await fetch("https://www.swapi.tech/api/planets")
        ).json();
        setStore({ planets: response.results });

        response = await (
          await fetch("https://www.swapi.tech/api/starships")
        ).json();
        setStore({ starships: response.results });
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
