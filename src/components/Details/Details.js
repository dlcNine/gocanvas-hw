function Details({ details, isCorrect }) {
    return (
        <ul>
            <li>
                name: 
                { isCorrect && <span>{details.name}</span> }
            </li>
            <li>type: {details.type}</li>
            <li>height: {details.height}</li>
            <li>weight: {details.weight}</li>
        </ul>
    );
}

export default Details;