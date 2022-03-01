import React from 'react'
import './Home.css'
import Product from '../Product/Product' 

const Home = () => {

 

  return (
    <div className="home">
        <div className="home__container">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="banner"
            />

            <div className="home__row">
                <Product 
                        key={1}
                        id="111"
                        title="The Lean Start-up: How constant innovation Creates Radically Successful Businesses paperback  "
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"  
                        price={9.99}
                        rating={4}
                />
            
            
                <Product 
                        key={2}
                        id="222"
                        title="The Lean Start-up: How constant innovation Creates Radically Successful Businesses paperback  "
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"  
                        price={9.99}
                        rating={5}
                />
               

                <Product 
                        key={3}
                        id="333"
                        title="The Lean Start-up: How constant innovation Creates Radically Successful Businesses paperback  "
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"  
                        price={9.99}
                        rating={3}
                />
             
            </div>
            <div className="home__row">
                
            </div>
            <div className="home__row">
                {/* Product*/}
                {/* Product*/}
            </div>
        </div>
    </div>
  )
}

export default Home