import React from 'react'
import img from '../images'

import {GrTwitter,GrGithub,GrLinkedin} from 'react-icons/gr'
const Description = () => {
    return (
        <>
            <div className="main-wrapper">
                    <div id="img-profile">
                        <img src={img[0]} alt="img-profile" />
                    </div>
                    <div className="text-wrapper">
                    <h3>Hi,I'm Collins</h3>
                    <h4> I am  an aspiring front-end engineer and <span><br/>cloud architect</span>   </h4>
                    <p id="text"> I enjoy learning and building solutions that  leverage on best practice technologies.<br/>
                    I proudly hold Bsc Hons Degree in Computer  Science from the National University <br/> <span>
                    of Science and  Technology Zimbabwe.</span> </p>
                                <div className="contacts">
                                    <div className="icon">
                                    <a href="https://www.linkedin.com/in/tinotenda-collins-mazarura-993104159/"><GrTwitter/></a>
                                    </div>
                                    <div className="icon">
                                     <a href="https://www.linkedin.com/in/tinotenda-collins-mazarura-993104159/">
                                     <GrLinkedin/></a>       
                                    </div>
                                    <div className="icon">
                                    <a href="https://www.linkedin.com/in/tinotenda-collins-mazarura-993104159/">
                                    <GrGithub /></a>
                                   
                                    </div>
                                </div>
                    </div>
            </div>
        </>
    )
}

export default Description
