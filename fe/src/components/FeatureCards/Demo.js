import 'bootstrap/dist/css/bootstrap.min.css';
import FeatureDemo from './Feature-Demo.js';


export default function Demo(){
    return (
        <div className="container px-4 py-5" id="demo">
        <div className="col">
                    <FeatureDemo cl='splash' region="darken"/>
                </div>
        </div>
    );
}