import './css/platform.css';
export const PlatformSelection = () => {

    return (
        <div className="platforms">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Filtrar por plataforma</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <button className="button-platform">PC</button>

                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <button className="button-platform">PS4</button>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <button className="button-platform">PS5</button>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <button className="button-platform">STEAM</button>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <button className="button-platform">EPIC</button>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <button className="button-platform">GOG</button>
                    </div>
                </div>
            </div>
        </div>
    )

}