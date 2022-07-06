import {useState} from "react";
import { Squash as Hamburger } from 'hamburger-react';

export default function AboutMe() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="navbar">

                    <div id="flex-container">
                        <div>
                            <a href="/"><img src="/nn.png" alt='NN' id="initials" /></a>
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

            <h1>More About Me</h1>
            <h2>
                Personal Interests
            </h2>
            <ul className="interests">
                <li>
                    I love social dancing, especially salsa and bachata these days. I used to compete in Ballroom and
                    Latin dance (all 4 styles!) when I was at NYU.
                </li>
                <li>
                    I’ve always dabbled in arts and crafts growing up. I like painting scenery from places I've
                    visited as a visual travel diary.
                </li>
                <li>
                    Always learning: I love reading books on many topics like philosophy, psychology, business,
                    sociology, and more, as well as learning from hearing other people's life stories and experiences.
                    If you're curious about what I'm reading, here's my recs.
                </li>
            </ul>

        </>

    );
}
