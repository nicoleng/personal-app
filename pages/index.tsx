import Head from "next/head";
export default function Index() {
    return (
        <>
            <Head>
                <title>Nicole Ng</title>
                <meta name="description" content="Welcome to my portfolio"/>

            </Head>
            <div className="top bar">

            </div>
            <div className="w-full sticky top-4 z-30">
                <div className="navbar">
                    <div className="flex items-center pb-4">
                        <div className="ml-auto items-center hidden md:flex"><a
                            className="ml-8 text-lg text-gray1" href="/about-me">More About Me</a>
                        </div>
                        <button className="ml-auto md:hidden text-xl text-gray1">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                 stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div id="header">
                    <img src="/headshot-closeup.jpeg" id="prof-pic" alt="Nicole Ng"/>
                    <h1>
                        Hi, I’m Nicole!
                    </h1>
                    <h2>
                        A data scientist from NYC passionate about health & wellness, tech, and human connection.
                    </h2>

                </div>
                <main className="page-content" aria-label="Content">
                    <p>
                        I currently work at <a href="https://www.ribbonhealth.com/">Ribbon Health</a> building
                        out data pipelines and models for our provider directory
                        API platform, allowing providers, care navigators, health plans, and digital health companies to
                        build solutions that ensure efficient care decisions.  Previously I’ve worked at Aetna and Uber.
                        Check out my <a href="https://www.linkedin.com/in/nicolesng/">Linkedin</a> for a more detailed overview.
                    </p>

                    <p>
                        In the past I taught a 10-week <a href="https://github.com/nicoleng/bacinsight_19">Intro to Data
                        Science workshop</a> at NYU Stern to 16 students through the Business Analytics Club, covering
                        topics spanning data manipulation, visualization, statistics, machine learning and neural networks,
                        culminating in final group projects and presentations. These newfound skills were then applied in
                        real pro-bono consulting projects with Pepper, Sharemeals and IBM, which I helped to source and manage.
                    </p>
                    <p>
                        I also made this <a href="https://docs.google.com/document/d/1lobKMk8h12alAvC0bNVlfqxLS8amDSgSYkjWQBIlQEc/edit?folder=0ADQs-R7jtf-6Uk9PVA&pli=1">Data
                        Science Dictionary</a> to help myself review key topics for interviews and also keep track of new
                        concepts I learn on the job. The intent is for it to be a living doc tracking my progress, not a
                        published product, but I hope it can be helpful to others by making it public. Notice something is
                        wrong or have any feedback? Please feel free to leave a comment!

                    <br/><a href="/about-me">More About Me</a>

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
