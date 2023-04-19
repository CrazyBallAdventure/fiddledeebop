import React from 'react'
import HornedBeast from './HornedBeast';

let imgUrl = "https://cdn.discordapp.com/attachments/1050574867315032095/1097952719014219847/image.png";
let desc = "cool awesome horse dabbing, aka the hardest picture EvAr!1!";

let imgUrl2 = "https://sdzwildlifeexplorers.org/sites/default/files/2018-10/animal-hero-jackson_0.jpg";
let desc2 = "coolest lizard EVARRRRR11!!1!";


class Main extends React.Component {

    render() {
        return (
            <div>
                <HornedBeast title="epic alicorn dab!" imageUrl={imgUrl} description={desc}/>
                <HornedBeast title="super cool-looking Jackson's Chameleon!" imageUrl={imgUrl2} description={desc2}/>
            </div>
        )
    }
}

export default Main;