import React from 'react';
import Description from './Description';
import Image from './Image';
import Title from './Title';
import umotuo from '../image/umotuo.jpeg'



class SimpleCard extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="imagebox">
                     <Image url={umotuo} />
                </div>
                <div className="items">
                    <div className="title">
                        <Title title="My Best food"/>
                    </div>
                    <div className="title">
                        <Description description="This is just to tell the rest of the world that L love OMOTUO"/>
                    </div>
                     
                </div>
                
                
                
                
            </div>
            
        )
    }
}

export default SimpleCard

