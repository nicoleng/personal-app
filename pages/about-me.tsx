import {useState} from "react";
import {Squash as Hamburger} from 'hamburger-react';

export default function AboutMe() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="navbar">

                <div id="flex-container">
                    <div>
                        <a href="/"><img src="${prefix}/nn.png" alt='NN' id="initials"/></a>
                    </div>
                    <div id="hamburger">
                        <Hamburger size={20} label="Show menu" toggled={isOpen} toggle={setOpen}/>
                    </div>
                    {isOpen && (
                        <>
                            <div id="menu">
                                <p><a href="/about-me">More About Me</a></p>
                                <p><a href="/">Home</a></p>
                            </div>
                        </>
                    )}

                </div>
            </div>

            <div className="wrapper">
                <div id="header">
                    <h1>More About Me</h1>
                </div>
                <main className="page-content">
                    <h2>
                        Personal Interests
                    </h2>

                        <ul className="interests">

                            <li>
                                I love social dancing, especially salsa and bachata! My experience
                                comes from random socials when I was in the
                                <a href="https://www.instagram.com/p/B5i43KDh02S/?hl=en"> NYU Ballroom and Latin Dance
                                    Team</a>.
                            </li>


                            <li>
                                Painting is another creative outlet of mine, currently working on painting scenery from
                                places
                                I've traveled to as a <a href="https://www.instagram.com/artsncraft.ng/">visual
                                diary</a>.
                            </li>

                        </ul>

                    <h2>
                        Writing
                    </h2>
                    <p>
                        Thoughts still swirling around, will be captured soon!
                    </p>
                </main>
            </div>
        </>

    )
        ;
}
