import styled from "styled-components";

/*component-------------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1:Explain the difference between HTML,CSS and JavaScript.">
                HTML- Is the structure/blueprint or skeleton of the page. It
                contains the markup for the webpage. CSS- Cascading stylesheets,
                Is the styling component to a webpage. It contains the colors,
                text, fonts and styling patterns for the website. JavaScript- Is
                the interactivity/ animated component to a website. It adds
                animation, interaction and activity to websites.
            </Essay>
            <Essay question="Q2:What is the difference between Git and Github?">
                Git- Git is a free and open-source distributed version control
                system which is designed to handle small to very large projects.
                It also allows multiple team members to work collaboratively on
                the same project, access the code, make updates, and save
                changes. Git is maintained on your local system (rather than in
                the cloud). Github- GitHub is a web cloud- based hosting service
                for git repositories which allows for sharing, editing and
                collaboration on Git repositories and code from multiple team
                members.
            </Essay>

            <Essay question="Q3:What is the difference between JQuery and React?">
                JQuery- JQuery is a write less/do more JavaScript library. It is
                designed to simplify and make JavaScript tasks easier. It works
                by wrapping multiple lines of JavaScript code into methods that
                you can call with a single line of code. It makes HTML document
                manipulation, event handling, animation, and Ajax much simpler
                with an easy-to-use API that works across multiple browsers.
                React- React is an open-source JavaScript library used to build
                declarative, reusable and reactive UI components. It allows
                developers to write web applications utilizing jsx and multiple
                components which lets developers build applications in an easier
                to understand and more efficient way.
            </Essay>

            <Essay question="Q4:What is the difference between a Front-End and Back-End Developer?">
                Front-End Developer- A front-end developer is more focused on
                how a site looks and builds the front-end portion of websites
                and web apps or the part of the website/app that users look at
                which is also referred to as the client side. Back-end
                Developer- A back-end developer is more focused on how a site
                works and is also referred to as the server-side. Back-end
                developers focus on building the aspects to a website/app that
                we can’t see. They develop and work with the: back-end logic,
                API’S, databases, servers and architecture which ensure that a
                site is working and running efficiently and effectively.
            </Essay>

            <Essay question="Q5:What are the different ways we can link files/resources to our application/ What is the difference between Absolute, Root and Document Relative linking?">
                Absolute: The global address of a resource. Root Relative:
                Relative to the root of the project. Document Relative: Links
                relative to the document you are writing.
            </Essay>

            <Essay question="Q6:What is the difference between jpg, gif, png and svg images?">
                JPG- stands for Joint Photographic Experts Group which
                standardized the format as the go-to file format for digital
                images since images began to be stored on digital
                cameras/devices. Supports Millions of colors GIF- stands for
                Graphics Interchange Format is an image file. GIFS can be still
                images, but they can also be animated and can hold multiple
                pictures at once which makes them differ from still image files.
                Indexed, supports transparency, and offers millions of colors.
                PNG- Stands for Portable Network Graphic. PNG images use
                lossless compression which means it contains all its original
                data when compressed. PNGs are ideal for logos due to the format
                supporting transparent backgrounds as well as website graphics
                since none of the information is lost. PNGs also handle a
                multitude of color options and can store much more detailed
                images than GIFS are able to for example. SVG- Scalable Vector
                Graphics displays two-dimensional images. Vector files can be
                scaled up or down with losing its resolution. They are stored by
                mathematical formulas based on points and lines on a grid which
                allows them to be resized without losing their quality.
            </Essay>

            <Essay question="Q7:Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.?">
                Product Owner: A product owner is in charge of communicating a
                product's goal/mission statement/vision and product backlog
                items is understood and clearly communicated to a team. Product
                Manager: Mananges and develops the success of a product. They
                communicate the goals of a product to various teams within the
                organization. They oversee the development of new products and
                continuously work on increasing profitability of existing
                products. Business Analyst: A business analyst helps companies
                identify areas that can be improved upon to increase
                productivity, strengthen business processes and offer continous
                process improvements to business workflows and outcomes data.
                Scrum Master: A scrum master leads a team through a project
                utilizing agile project management methodologies throughout the
                course of a project. They ensure successful communication and
                collaboration between teams and management to produce successful
                project outcomes. UX designer: A UX designer researches the way
                a user interacts with a product. They are in charge of creating
                and designing a user friendly experience between a product and a
                user. Developer/Engineer: A developer/ engineer is responsible
                for developing/ programming code for a website on the front end
                side or programming backend code on the server side. QA/SDET:
                SDET: Are both developers and software testers. SDET’s need to
                have a broader knowledge of programming skills. They are
                involved in the entire development lifecycle process from
                development and designing to testing. QA : Mainly focuses on
                testing only, Is in charge of preparing and executing test cases
                by automation or manually and will test software at the end of a
                development phase. QA’s only need to have a basic understanding
                of programming in comparison to a SDET role. DevOps:DevOps is a
                methodology in software development and IT. It is a practice
                that combines the areas of Software development and IT
                Operations and works to speed up the systems development
                lifecycle.
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
