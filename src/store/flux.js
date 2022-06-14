const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            lastname: 'Rodriguez',
            tasks: [
                'Make the bed',
                'Buy a coffee'
            ],
            users: null,
        },
        actions: {
            saludo: () => {
                console.log('Hola');
            },
            getUsers: () => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then((response) => response.json())
                    .then((data) => setStore({ users: data }))
            }
        }
    }
}

export default getState;