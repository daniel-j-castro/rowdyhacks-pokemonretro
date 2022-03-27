import "./Feature-Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FeatureDemo({ cl, region}) {

    return (<div className={cl}>
        <div className="card-cover text-white rounded-5 shadow-lg">
            <div className="d-flex flex-column h-100 p-15 pr-10 text-white text-shadow-1">
            <img className="darken" src= "https://projectpokemon.org/images/normal-sprite/pikachu.gif" width="px" height="300px" alt="filter applied" />
                <ul className="d-flex list-unstyled mt-auto">

                    <li className="d-flex align-items-center">
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>);

}