const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            lastname: 'Rodriguez',
            tasks: [
                'Make the bed',
                'Buy a coffee'
            ]
        },
        actions: {
            saludo: () => {
                console.log('Hola');
            }
        }
    }
}

export default getState;