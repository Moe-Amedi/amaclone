import React from 'react';
import'./Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_img' src='https://www.ridester.com/wp-content/uploads/2022/01/amazon_flex_requirements_2-1024x576.webp' />

            <div className='home_row'>
                <Product 
                    id='111'
                    title='Rich Dad, Poor Dad, What the Rich Teach their Kids about Money, That The Poor Do Not!' 
                    rating={5} 
                    price={19.99} 
                    image='https://kbimages1-a.akamaihd.net/ddf8d53d-7df5-4560-8fbd-43915f4f6a03/353/569/90/False/rich-dad-poor-dad-24.jpg' 
                />
                <Product 
                    id='112'
                    title='kMix Stand Mixer Pastel Pink KMX754PP' 
                    rating={4} 
                    price={279.99} 
                    image='https://dam.kenwoodworld.com/562x468/assets/222894' 
                />
            </div>
            
            <div className='home_row'>
                <Product 
                    id='113'
                    title="Samsung Galaxy Watch4 Smartwatch" 
                    rating={4} 
                    price={249.99} 
                    image='https://www.tradeinn.com/f/13863/138631800/samsung-galaxy-watch4-smartwatch.jpg'
                />
                <Product 
                    id='114'
                    title='Amazon Echo (3rd Gen) | Smart Speaker with Alexa' 
                    rating={3} 
                    price={99.99} 
                    image='https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600506-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzk0Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDYxL2hhMi85MjE2NjYzOTc4MDE0LmpwZ3xjN2UyOTIyOTA0ZjAyZGEyYmMxMjcwNzIxNGNhMDUwN2E3MzU3ODg5YmRhN2M0NGU3YjQ5ZjRmNDA1NjZiZWZj'
                />
                <Product 
                    id='115'
                    title='New Apple Ipad pro (12.9-inch, wifi, 128GB - Silver' 
                    rating={4} 
                    price={539.99} 
                    image='https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_SY450_.jpg'
                />
            </div>

            <div className='home_row'>
                <Product 
                    id='116'
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                    rating={4} 
                    price={579.99} 
                    image='https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg'
                />
            </div>
        </div>
    </div>
  );
}

export default Home;