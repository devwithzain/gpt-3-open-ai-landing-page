import "./Posibility.scss";
import possibility from '@public/assets/possibility.png';
import Image from "next/image";
const Posibility: React.FC = () => {
    return (
        <>
            <div className="gpt3__possibility section__padding" id="possibility">
                <div className="gpt3__possibility-image">
                    <Image src={possibility} alt="possibility" />
                </div>
                <div className="gpt3__possibility-content">
                    <h4>Requeest Early Acces to Get Started.</h4>
                    <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, libero! Voluptatibus, nam consequatur! Ullam rem doloremque id. Dignissimos quam quae ea eum incidunt, quidem nostrum doloremque molestiae fuga maiores neque</p>
                    <h4>Requeest Early Acces to Get Started.</h4>
                </div>
            </div>
        </>
    );
};

export default Posibility;