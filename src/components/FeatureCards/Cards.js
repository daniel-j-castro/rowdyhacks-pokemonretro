import 'bootstrap/dist/css/bootstrap.min.css';
import FeatureCard from './Feature-Card.js';


export default function Cards() {
    return (
        <div className="container px-4 py-5" id="custom-cards">

            <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                <div className="col">
                    <FeatureCard cl='kanto' region="Kanto" generation='Generation 1' />
                </div>
                <div className="col">
                    <FeatureCard cl='johto' region="Johto" generation='Generation 2' />
                </div>

                <div className="col">
                    <FeatureCard cl='hoenn' region="Hoenn" generation='Generation 3' />
                </div>
                <div className="col">
                    <FeatureCard cl='sinnoh' region="Sinnoh" generation='Generation 4' />
                </div>
            </div>


            <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                <div className="col">
                    <FeatureCard cl='unova' region="Unova" generation='Generation 5' />
                </div>
                <div className="col">
                    <FeatureCard cl='kalos' region="Kalos" generation='Generation 6' />
                </div>

                <div className="col">
                    <FeatureCard cl='alola' region="Alola" generation='Generation 7' />
                </div>
                 <div className="col">
                    <FeatureCard cl='galar' region="Galar" generation='Generation 8' />
                </div> 
            </div>
        </div >
    );
}