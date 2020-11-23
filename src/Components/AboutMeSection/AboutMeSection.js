import React from "react";
import "./AboutMeSection.css";
import Context from "../../Context";

class AboutMe extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="AboutMe-content">
                <a id="aboutMe-anchor"></a>
                <section class="bio">
                    <header class="section-header">
                        <h2 id="about-me-header" className="bg-lightGreen">
                            About Me
                        </h2>
                    </header>
                    <div class="bio-overview">
                        <p>
                            For more than twenty years, I have been very passionate about getting
                            involved in creative endeavors, such as Theatre and Music, that bring
                            joy to others. Over the course of my entire life, I have enjoyed finding
                            creative and logical solutions to problems. For the past ten years I
                            have worked in the creative field of Game Development as a C# Engineer,
                            Designer, 3D Modeler, 3D Rigging Engineer, Mobile Programmer, Rendering
                            Specialist, and Educator. And finally, In the past couple of years, I
                            have found that my passion for bringing joy to others, my creativity,
                            and problem solving skills fit well into the Web Development Industry.{" "}
                        </p>
                        <p>
                            I am a soon-to-be Graduate of the Engineering Flex Full Stack Bootcamp
                            at Thinkful and have learned valuable tools and resources to help me
                            make the transition to Web Development. My experience in Game Design and
                            Development provides me with a unique perspective on Interactivity and
                            Design principles that encourage engagement and increase interest while
                            maintaining an elegant functionality and responsiveness of content. My
                            background as an Educator makes me a master problems solver and
                            collaborator on fast paced, highly technical projects. My knowledge in a
                            wide range of subjects provides me with insight into other pieces of the
                            puzzle, which allows me the opportunity to anticipate future issues and
                            considerations for the design and/or functionality of a project.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutMe;
