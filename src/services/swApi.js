const consultarPersonagens = () => {
    fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(data => {
            return data
        })
    }

export {
    consultarPersonagens
};