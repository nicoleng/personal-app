import Head from "next/head";
import {useState} from "react";
import {Squash as Hamburger} from 'hamburger-react';
import { prefix } from '../prefix.js';

export default function Index() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Head>
                <title>Nicole Ng</title>
                <meta name="description" content="Welcome to my website"/>

            </Head>

            {/*</div>*/}
            {/*<div className="w-full sticky top-4 z-30">*/}

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
                                <p><a href="/">Home</a></p>
                                <p><a href="/about-me">More About Me</a></p>
                            </div>
                        </>
                    )}

                </div>
            </div>

            <div className="wrapper">
                <div id="header">
                    <img src="${prefix}/headshot-closeup.jpeg" id="prof-pic" alt="Nicole Ng"/>
                    <h1>
                        Hi, I’m Nicole!
                    </h1>
                    <h2>
                        A data scientist from NYC passionate about health & wellness, tech, and communities.
                    </h2>

                </div>
                <main className="page-content">
                    <p>
                        I currently work at <a href="https://www.ribbonhealth.com/">Ribbon Health</a>, building data
                        pipelines and models to deliver accurate provider data to power use cases like
                        care navigation, referrals and more for other companies in the healthcare spaces.
                        Previously I've worked at <a href="aetna.com">Aetna</a> and <a href="uber.com">Uber</a> running
                        experiments focused on changing people's behavior.
                        Check out my <a href="https://www.linkedin.com/in/nicolesng/">Linkedin</a> for more details.
                    </p>

                    <p>
                        When I was at NYU, I taught a 10-week <a href="https://github.com/nicoleng/bacinsight_19">Intro
                        to Data
                        Science Workshop</a> covering visualization, statistics,
                        machine learning, and culminating in final group modeling projects. We also worked
                        with <a href="https://www.wearpepper.com/">Pepper</a> and <a href="https://sharemeals.org/">
                        Share Meals</a> on pro-bono consulting engagements.
                    </p>
                    <p>
                        Looking to get into Data Science? Check out my <a href="https://docs.google.com/document/d/1lobKMk8h12alAvC0bNVlfqxLS8amDSgSYkjWQBIlQEc/edit?folder=0ADQs-R7jtf-6Uk9PVA&pli=1">
                            Dictionary</a> covering key topics for interviews and important concepts I typically encounter on the job.
                        I use this as a living doc to track my learning, not as a
                        published product, but I hope by making it public, it can be helpful to others. Notice something
                        wrong or have any feedback? Please feel free to leave a comment!
                    </p>


                </main>
            </div>

            <footer className="site-footer wrapper">
                <h3>
                    Contact
                </h3>
                <p>
                    Curious about my work? Can I help you in your journey? Please shoot me a message
                    at <a href="mailto:nicolesng20@gmail.com">nicolesng20@gmail.com</a> or on
                    twitter <a href="https://twitter.com/nycole_ng">@nycole_ng</a>.
                </p>

            </footer>

        </>
    );
}
