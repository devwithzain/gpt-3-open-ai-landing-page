import "./Brand.scss";
import { google, atlassian, slack, shopify, dropbox } from "./import"
import Image from "next/image";
const Brand: React.FC = () => {
    return (
        <>
            <div className="gpt3__brand section__padding">
                <div>
                    <Image src={google} alt="google" />
                </div>
                <div>
                    <Image src={atlassian} alt="atlassian" />
                </div>
                <div>
                    <Image src={slack} alt="slack" />
                </div>
                <div>
                    <Image src={shopify} alt="shopify" />
                </div>
                <div>
                    <Image src={dropbox} alt="dropbox" />
                </div>
            </div>
        </>
    );
};

export default Brand;