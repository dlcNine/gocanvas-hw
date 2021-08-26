function Details({ details, hasGuessed }) {
    return (
        <div className="units">
            <div className="units__6 units__12:sm">
                <span className="_fw-bold">name:</span> { hasGuessed && <span> {details.name}</span> }
            </div>
            <div className="units__6 units__12:sm">
                <span className="_fw-bold">type:</span> {details.type}
            </div>
            <div className="units__6 units__12:sm">
                <span className="_fw-bold">height:</span> {details.height}
            </div>
            <div className="units__6 units__12:sm">
                <span className="_fw-bold">weight:</span> {details.weight}
            </div>
        </div>
    );
}

export default Details;