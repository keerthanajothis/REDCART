import React from 'react';

const About = () => {
    return (
        <div>

            <div id="square">
                <h1><center><div className="infoTitle"> REDCART</div></center></h1>
                <div className="info">
                    <p>Red Cart is a leading e-commerce platform that offers a wide range of products to cater to diverse consumer needs.<br></br><br></br> Here's some detailed information about Red Cart:<br></br><br></br>

<h4>பொருள் வகை:</h4><br></br> சிறப்பு பொருள் வகைகளை காட்டும் இது, பெரும்பாலும் வாங்குவோரின் தேவைகளை பூர்த்தி செய்கின்றது.<br></br><br></br>

<h4>ஃபேஷன்:</h4> <br></br>உடை, அணிந்து பாடுபவர்கள், உடன் இருக்கின்ற பொருள்கள், போன்றவற்றுக்கான விருப்பமான உதவிகள்.
<br></br><br></br><h4>எலக்ட்ரானிக்ஸ்:</h4> <br></br>ஸ்மார்ட்போன்கள், லேப்டாப்கள், கேமராக்கள், போன்ற பொருள்கள்.<br></br><br></br>
<h4>வீட்டு தேவைகள்:</h4><br></br> பட்டிகள், சுப்பாக்கள், அணிகலன் உதவிகள், போன்றவற்றுக்கான உதவிகள்.<br></br><br></br>
<h4>அழகு மற்றும் தனிப்பட்ட பொருள்கள்:</h4> <br></br>தோல் பராமரிப்பு, மேக்யூப், பழுப்பு பொருள்கள், போன்றவற்றுக்கான உதவிகள்.<br></br><br></br>
<h4>விளையாட்டு & உடல் செயல்திறன்:</h4><br></br> உடல் நலம் உறுதியாக்கல், செயற்பாட்டு உடைகள், வெளியே எளிதில் கிடைக்கும் பொருள்கள்.
மற்றும் பலவீனம் உற்பத்தி செய்கிறது.</p>
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

               
                .link{
                    color:black;
                    font-family:Avenir Book;    
                    float:left;
                    margin-left:2px;
                    margin-right:2px;
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
