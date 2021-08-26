function Details({ details, hasGuessed }) {
    return (
        <div className="box units">
            <div className="units__6 units__12:sm">
                name: { hasGuessed && <span> {details.name}</span> }
            </div>
            <div className="units__6 units__12:sm">
                type: {details.type}
            </div>
            <div className="units__6 units__12:sm">
                height: {details.height}
            </div>
            <div className="units__6 units__12:sm">
                weight: {details.weight}
            </div>
        </div>
    );
}

export default Details;