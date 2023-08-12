import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    {/*Product Components*/}
                    <Product 
                        id="12321341"
                        title='The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                        />
                    {/*Product Components*/}
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={100.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71oQMOaoWAL._AC_SL1500_.jpg"
                    />

                </div>
                <div className="home__row">
                    {/*Product Components*/}
                    <Product 
                     id="12897343"
                     title="Fitbit Charge 3 Fitness Tracker"
                     price={250.00}
                     rating={3}
                     image="https://images-na.ssl-images-amazon.com/images/I/719DSpWp3LL._AC_UX679_.jpg"/>
                    {/*Product Components*/}
                    <Product 
                     id="64325735"
                     title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                     price={49.99}
                     rating={4}
                     image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"/>
                    {/*Product Components*/}
                    <Product 
                     id="12368977"
                     title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                     price={799.00}
                     rating={5}
                     image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"/>
                </div>
                <div className="home__row">
                    {/*Product Components*/}
                    <Product 
                     id="24543572"
                     title="Samsung QN49Q60RAFXZA Flat 49'' QLED 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility"
                     price={849.00}
                     rating={5}
                     image="https://images-na.ssl-images-amazon.com/images/I/91FkgRREFHL._AC_SL1500_.jpg"/>
                </div>


            </div>
        </div>
    )
}

export default Home
