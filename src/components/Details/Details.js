function Details({ details, hasGuessed }) {
    return (
        <ul>
            <li>
                name: 
                 { hasGuessed && <span> {details.name}</span> }
            </li>
            <li>type: {details.type}</li>
            <li>height: {details.height}</li>
            <li>weight: {details.weight}</li>
        </ul>
    );
}

export default Details;