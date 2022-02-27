export const getState = ({setStore, getStore, getActions}) => {
    return {
        store: {
            characters: [],
            favorites: []
        },
        actions: {
            getCharacters: () => {
                fetch('https://swapi.dev/api/people/', {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json"
                    }
                }).then (res => res.json())
                .then (data => setStore({characters: data.results}))
            },

            addFavorite: (index) => {
                const store = getStore()
                setStore({favorites: store.favorites.concat(index)})
            },

            deleteFavorite: (nombre) => {
                const store = getStore()
                setStore({favorites: store.favorites.filter((i, index) => {
                    if(index === nombre){
                        return false
                    } else {
                        return true
                    }
                })})
            }
            }
        }
    };