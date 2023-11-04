export const GiveAwayItems = ({ ...props }) => {

    const { description, end_date, image, platforms, title, type, worth } = props;
    console.log(props);
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="game-card">
                <div>
                    <img className="img-fluid" src={image} alt={title} />
                </div>
                <div className="gameinfo">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="platform-information">
                    <p><span className="platform-tag">{platforms}</span> <span className="platform-type">{type}</span></p>
                </div>
            </div>
        </div>
    )

}