import React from 'react';

const About = () => {
    return (
        <div>

            <div id="square">
                <h1><center><div className="infoTitle"> REDCART</div></center></h1>
                <div className="info">
                    <p>Red Cart is a leading e-commerce platform that offers a wide range of products to cater to diverse consumer needs.<br></br><br></br> Here's some detailed information about Red Cart:<br></br><br></br>

<h4>Product Range:</h4><br></br> Red Cart provides a comprehensive selection of products across various categories, including<br></br><br></br>

<h4>Fashion:</h4> <br></br>Clothing, footwear, accessories, etc.
<br></br><br></br><h4>Electronics:</h4> <br></br>Smartphones, laptops, cameras, etc.<br></br><br></br>
<h4>Home Essentials:</h4><br></br> Furniture, kitchen appliances, decor items, etc.<br></br><br></br>
<h4>Beauty & Personal Care:</h4> <br></br>Skincare, makeup, grooming products, etc.<br></br><br></br>
<h4>Sports & Fitness:</h4><br></br> Exercise equipment, activewear, outdoor gear, etc.
And much more.</p>
                </div>
            </div>
           
            <style>{`
                
                ABOUT US Page 
                body{
                    background-color:white;
                }

               
                #square{ 
                    position:absolute;
                    top:10%;
                    left:25%;
                    right:25%;
                    height:85%;
                    width:50%;
                    background-color:pink;
                    border:5px solid black;
                }

                .infoTitle{
                    display:block;
                    margin-left:auto;
                    margin-right:auto;
                    margin-top:2%;
                    border: 2.4px solid black;
                    background-color:pink;
                    width: 95%;
                    font-size:1.5em;
                    font-weight:bold;
                    color:black;
                }

                .info{
                    display:block;
                    overflow:scroll;
                    margin-left:auto;
                    margin-right:auto;
                    margin-top: 5px;
                    border: 2.4px solid black;
                    background-color:pink;
                    width: 95%;
                    height:80%;
                    font-size:1.2em;
                }

                p{
                    padding:2%;
                }

               
                
                .inbetween{
                    color:black;
                    float:left;
                    margin-left:2px;
                    margin-right:2px;
                }
            `}</style>
        </div>
    );
}

export default About;
