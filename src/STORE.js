const STORE = {
    skills: {
        pro: (
            <ul>
                <h3>SKILLS</h3>
                <li>Full Stack</li>
                <li>Game Development</li>
                <li>Mobile Development</li>
                <li>Game Design Instruction</li>
            </ul>
        ),
        cas: (
            <ul>
                <h3>What I'm Good At!</h3>
                <li>Full Stack Engineer</li>
                <li>Game Developer (and player)</li>
                <li>Mobile Developer (and talker)</li>
                <li>Coffee Enthusiast Theatre Nerd</li>
            </ul>
        ),
    },
    bio: {
        pro: (
            <div>
                <p>
                    For more than twenty years, I have been very passionate about getting involved
                    in creative endeavors, such as Theatre and Music, that bring joy to others.
                    Collaborating with others to create something exciting and entertaining is
                    extremely satisfying. Over the course of my entire life, I have enjoyed finding
                    creative and logical solutions to problems. For the past ten years I have worked
                    in the creative field of Game Development as a C# Engineer, Designer, 3D
                    Modeler, 3D Rigging Engineer, Mobile Programmer, Rendering Specialist, and
                    Educator with some of the best developers and educators around. And finally, In
                    the past couple of years, I have found that my passion for bringing joy to
                    others, my creativity, and problem-solving skills fit well into the Web
                    Development Industry. I look forward to meeting new people and being a part of a
                    new group of developers in the Web Development Industry.
                </p>
                <p>
                    I am a soon-to-be Graduate of the Engineering Flex Full Stack Bootcamp at
                    Thinkful and have learned valuable tools and resources to help me make the
                    transition to Web Development. My experience in Game Design and Development
                    provides me with a unique perspective on Interactivity and Design principles
                    that encourage engagement and increase interest while maintaining an elegant
                    functionality and responsiveness of content. Collaborating with other developers
                    in the game industry has been a significant influence on my career that has
                    helped to shape me into a very collaborative and team-oriented individual that
                    can perform multiple roles in a small group or specialize in a specific area on
                    a larger team. My background as an Educator makes me a master problem solver and
                    collaborator on fast paced, highly technical projects. My knowledge in a wide
                    range of subjects provides me with insight into other pieces of the puzzle,
                    which allows me the opportunity to anticipate future issues and considerations
                    for the design and/or functionality of a project.{" "}
                </p>
            </div>
        ),
        cas: (
            <div>
                <p>
                    I’ve always loved to bring joy to others through Theatre and Music. Working with
                    others to put something exciting and entertaining out there for people to enjoy
                    is a wonderful thing. I’m also a pretty logical person and really enjoy solving
                    puzzles in creative, outside-the-box, ways. For over ten years now I have worked
                    in the Game Development field as a C# Engineer, Designer, 3D Modeler, 3D Rigging
                    Engineer, Mobile Programmer, Rendering Specialist, and Educator on some of the
                    best teams you could ask for. In the past couple of years, I have found that my
                    previous experiences have led me to pursue a career in Web Development. It
                    really feels like a good fit. I am excited to meet new people and be a part of a
                    new group of developers in the Web Development Industry.{" "}
                </p>
                <p>
                    {" "}
                    I am stoked about this new chapter in my life. I am a soon-to-be Graduate of the
                    Engineering Flex Full Stack Bootcamp at Thinkful and have gained additional
                    expertise in the valuable skills and tools to hit the ground running. My time in
                    the Game Design and Development industry gives me a leg up in incorporating
                    Interactivity and Design principles that make people want to come back and visit
                    the site again. Working with other developers in the game industry has been a
                    great experience that has helped to shape me into a very collaborative and team
                    oriented kind of person that can wear multiple hats on a small team or focus on
                    a specific part of the process on a larger one. My background as an Educator in
                    such a fast-paced technical field makes me a master problem solver and
                    collaborator. I’ve taught a lot of subjects from 3D Modeling and Animation to
                    Mobile Programming and AI Concepts. Understanding all the pieces of the puzzle
                    gives me the foresight to expect the unexpected because I can see beyond the
                    borders of my own work.
                </p>
                <p>
                    Simply put, I think this field is fun and innovative, and I want to live my life
                    doing what I love while having fun doing it.{" "}
                </p>
            </div>
        ),
    },
    smizeApp: {
        pro: (
            <div className="port-overview">
                <h3
                    className={`overview-header ${
                        this.context.proMode ? "bg-lightGreen proHeader" : "bg-lightBlue casHeader"
                    }`}
                >
                    Overview
                </h3>
                <p className={`${this.context.proMode ? "proText" : "casText"}`}>
                    The phrase, Smize, was coined by Tara Banks. Smiling with your eyes is the best
                    way to get a natural smile for the camera. The Smize App is designed for
                    photographers to encourage their clients to do just that. Smize displays
                    humorous (sometimes) sayings, jokes, and statements for the photographer to read
                    while taking photos of clients.
                </p>
                <h3 className={`${this.context.proMode ? "proHeader" : "casHeader"}`}>
                    Project Tech
                </h3>
                <ul className={`${this.context.proMode ? "proText" : "casText"}`}>
                    <li>React</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>javaScript</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        ),
        cas: (
            <div className="port-overview">
                <h3
                    className={`overview-header ${
                        this.context.proMode ? "bg-lightGreen proHeader" : "bg-lightBlue casHeader"
                    }`}
                >
                    Overview
                </h3>
                <p className={`${this.context.proMode ? "proText" : "casText"}`}>
                    The phrase, Smize, was coined by Tara Banks. Smiling with your eyes is the best
                    way to get a natural smile for the camera. The Smize App is designed for
                    photographers to encourage their clients to do just that. Smize displays
                    humorous (sometimes) sayings, jokes, and statements for the photographer to read
                    while taking photos of clients.
                </p>
                <h3 className={`${this.context.proMode ? "proHeader" : "casHeader"}`}>
                    Project Tech
                </h3>
                <ul className={`${this.context.proMode ? "proText" : "casText"}`}>
                    <li>React</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>javaScript</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        ),
    },
    smizeApp: {
        pro: (
            <div className="port-overview">
                <h3
                    className={`overview-header ${
                        this.context.proMode ? "bg-lightGreen proHeader" : "bg-lightBlue casHeader"
                    }`}
                >
                    Overview
                </h3>
                <p className={`${this.context.proMode ? "proText" : "casText"}`}>
                    The phrase, Smize, was coined by Tara Banks. Smiling with your eyes is the best
                    way to get a natural smile for the camera. The Smize App is designed for
                    photographers to encourage their clients to do just that. Smize displays
                    humorous (sometimes) sayings, jokes, and statements for the photographer to read
                    while taking photos of clients.
                </p>
                <h3 className={`${this.context.proMode ? "proHeader" : "casHeader"}`}>
                    Project Tech
                </h3>
                <ul className={`${this.context.proMode ? "proText" : "casText"}`}>
                    <li>React</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>javaScript</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        ),
        cas: (
            <div className="port-overview">
                <h3
                    className={`overview-header ${
                        this.context.proMode ? "bg-lightGreen proHeader" : "bg-lightBlue casHeader"
                    }`}
                >
                    Overview
                </h3>
                <p className={`${this.context.proMode ? "proText" : "casText"}`}>
                    The phrase, Smize, was coined by Tara Banks. Smiling with your eyes is the best
                    way to get a natural smile for the camera. The Smize App is designed for
                    photographers to encourage their clients to do just that. Smize displays
                    humorous (sometimes) sayings, jokes, and statements for the photographer to read
                    while taking photos of clients.
                </p>
                <h3 className={`${this.context.proMode ? "proHeader" : "casHeader"}`}>
                    Project Tech
                </h3>
                <ul className={`${this.context.proMode ? "proText" : "casText"}`}>
                    <li>React</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>javaScript</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        ),
    },
};

export default STORE;
