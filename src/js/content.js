export default {
    projects: [{
            id: '3d-fractals',
            title: 'Interactive Real-Time Capable 3D-Fractals',
            date: new Date(2015, 3),
            tags: ['Real-Time rendering', 'GPU Programming', 'Computer Graphics'],
            summary: [
                'The goal of this project was to develop an application to render visually stunning 3D-fractals in real-time and allowing the user to interact with them. The software should run on computers with a low computational power while still using high resolutions (up to 4k).',
                'Fractals are shapes with a rough, complex and also fascinating surface. Taking a look to the nature, revelas many different fractal shapes, for instance, romanesco. Romanesco is built up by shape looking like a triangle, on which again smaller triangles exists. This is one main characteristic of fractals, called self-similarity: a magnified region of the fractal shape will be either exactly the same or similar to the whole fractal shape. This leads to the second main characteristic of a fractal: Their length is undefined. This means, that zooming to the edge or surface of a fractal results in getting new complex shapes and structures. Maybe the most famous example for this is the problme "How Long Is the Coast of Britain?" by Benoît Mandelbrot.',
                'Such complex shapes can be visualized digitally by iterating mathematical functions (complex numbers) for each pixel on the screen. For instance, the most well-known fractal, the Mandelbrotset: z_{n+1}=z_{n}^{2}+c<br>Because the computations for each pixel can be performed independently, parallelization on the GPU is the key for archieving interactive real-time capable 3D-fractals. Computing the 3D-fractals is accomplished on GPU using a technique called ray machting distance fields. '
            ],
            achievements: [
                'To my knowledge, this porject was the first interactive real-time capable 3D-fractar-renderer developed in a game engine like Unity.',
                'The implementation in Unity made it more simple to further develop the project towards novel interactions and experiences with 3D-fractals like:',
                [
                    'Real side-by-side 3D-visualization on a stereo display.',
                    'Experience 3D-fractals with an head-mounted display (Oculus Rift). To my knowledge, there was no other 3D-fractal-renderer for head-mounted-displays.',
                    'Interact with 3D-fractals using biometric sensor data (eg. heartbeat, body temperature, skin moisture, etc.). See [persona.fractalis](persona.fractalis) for more information.'
                ]
            ],
            responsibilities: [
                'Since this project was part of my bachelor thesis, I was responsible for everything:',
                [
                    'Research',
                    'Development of a suitable render pipline',
                    'Implementations on GPU & CPU (Unity, C#, HLSL, Compute Shader)',
                    'Shading (Phong, Blinn, etc.) and interaction concepts',
                    'Conception and development of algorithms to improve performance (sub sampling combined with anti-aliasing)'
                ],
            ],
            media: [{
                    type: 'img',
                    description: 'Silver Sierpinski',
                    filename: './media/3d-fractals/silver-sierpinski.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Tree Sierpinski',
                    filename: './media/3d-fractals/tree-sierpinski.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Inside a Mandelbox',
                    filename: './media/3d-fractals/inside-a-mandelbox.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Flying Stones Sierpinski',
                    filename: './media/3d-fractals/flying-stones-sierpinski.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Beautiful Julia',
                    filename: './media/3d-fractals/beautiful-julia.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Mysterious Sierpinski',
                    filename: './media/3d-fractals/mysterious-sierpinski.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Infinite Roads Mandelbulb',
                    filename: './media/3d-fractals/infinite-roads-mandelbulb.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Cliff at Menger Sponge',
                    filename: './media/3d-fractals/cliif-at-menge-sponge.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/3d-fractals/thumbnail-0.jpg',
                    isThumbnail: true
                },
                {
                    type: 'img',
                    filename: './media/3d-fractals/thumbnail-1.jpg',
                    isThumbnail: true
                },
                {
                    type: 'img',
                    filename: './media/3d-fractals/thumbnail-2.jpg',
                    isThumbnail: true
                },
            ],
        },{
            id: 'birds',
            title: 'Birds - A Beautiful Artistical Interactive Media Installation',
            date: new Date(2016, 1),
            tags: ['Computer Graphics', 'Autonomous Agents', 'Human Computer Interaction', 'Interactive Media Installation'],
            summary: [
                'The goal of this project was to create an interactive media installation, which should be artistically beautiful and engaging as well as invite the viewer to interact with it. A major requirement was, that this media installation should be continuously exhibited in the the university. Thus, it was important to come up with a design (software and hardware), which is secure in terms of theft protection and power failure. Also, the software should ne configurable in order to change the appearnce of the content without having to deploy a new software version.',
                'Inspirated by the talking paintings in Harry Potter and Disney\'s movie For The Birds, our project team decided to create an eye candy virtual painting, having little cute birds sitting on a rope as the main plot. The 3D-world is made up of a bright and colorful polygonal landscape with mountains, trees, a river and a rope in front of the scenery.',
                'The birds are programmed as autonomous agents, so that their next move is unpredictable. Their possible moves are:',
                [
                    'perform individual animations while sitting on the rope',
                    'leave the rope in order to join a flock of birds (boids algorithm by craig reynolds) flying around in the background',
                    'flock separation and joining',
                    'leave the flock and land onto the rope or a random tree'
                ],
                'To solve the challange of "how can we invite the viewer to interact with the media installation", we came up with the folling interaction conecpts:',
                [
                    'The birds sitting on the rope react to the environemnt by getting scared of movements and noises. This should draw the viewer\'s attention to the interactive digital painting. For this, a wide angle webcam (movement) with a microphone (noise level) is capturing the front of the media installation.',
                    'Implement an attracting and obvious interaction element (crank handle) which makes the viewer curious to use it. The user can spin the crank handle to stretch or release the rope the birds are sitting on.'
                ]
            ],
            achievements: [
                'We presented the project at an open day at our university.',
                'The project was hung up in the university building as an example for future generations of students (at least for 2 years, probabily longer).'
            ],
            responsibilities: [
                'Work on the entire concept of the interactive media installation',
                'Plan the hardware to order within a given budget',
                'Software development in general',
                'Implementation of the boids including flock seperation, joining and performance optimizations by breaking down the 3D-space into a grid (voxels)',
                'Construction of the hardware/wooden frame, which was manufactured in the wood workshop in our university. This was an really exciting task.',
                'Implementing the water shader for the river matching the overall polygonal look',
                'Implementing the movement detection using OpenCV in Unity',
                'Setting up and implementing an Raspberry Pi as an uptime montitoring (mainly for power failures, e.g. if someone pulls out the power supply by mistake)'
            ],
            media: [
                {
                    type: 'img',
                    description: 'Birds logo',
                    filename: './media/birds/birds-logo.jpg',
                    isThumbnail: false
                },{
                    type: 'youtube',
                    description: 'Birds - A Beautiful Artistical Interactive Media Installation',
                    filename: '4Noqesd5__A',
                    isThumbnail: false
                }, {
                    type: 'youtube',
                    description: 'Flock Movement and Grouping Behaviour',
                    filename: '4kj18_y3DWg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: '3D-scene',
                    filename: './media/birds/3d-scene.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: '3D-scene from the side',
                    filename: './media/birds/3d-scene-side.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Visual and auditive interaction with the adorable birds',
                    filename: './media/birds/open-media-day-1.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Visual and auditive interaction with the adorable birds',
                    filename: './media/birds/open-media-day-2.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'User happily teasing the poor birds by clapping',
                    filename: './media/birds/open-media-day-3.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: '3D printing the frame for prototyping purpose',
                    filename: './media/birds/3d-print.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Sawing',
                    filename: './media/birds/sawing.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Precise work - A must',
                    filename: './media/birds/precise-work.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Drilling holes for cooling air cirulation',
                    filename: './media/birds/drilling-holes.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Gluing',
                    filename: './media/birds/gluing.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Varnishing',
                    filename: './media/birds/varnishing.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Lock to protect hardware',
                    filename: './media/birds/lock.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Hardware installation test',
                    filename: './media/birds/hardware-installation-test.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Installed hardware',
                    filename: './media/birds/installed-hardware.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/birds/thumbnail-0.jpg',
                    isThumbnail: true
                },
                {
                    type: 'img',
                    filename: './media/birds/thumbnail-1.jpg',
                    isThumbnail: true
                },
            ],
        }, {
            id: 'morgen-ist-jetzt',
            title: 'Morgen ist Jetzt - Playfully Teach Children in Climate Protection',
            date: new Date(2014, 3),
            tags: ['Human Computer Interaction', 'Interactive Media Installation', 'Gamification', 'Tracking'],
            summary: [
                'The goal of this project was to develop a media installation to playfully teaching children the importance of saving energy and thereby call attention to climate protection. Using a gaminfication based approach, three interactive games were developed which were suited for children not only in terms of the content, but also in terms of the interaction method.',
                'The main interaface of each game was a streched transparent fabric, which served as an output and huge input devices at the same time. Using rear projection (three projectors in total, one for each game) the output was rendered onto the streched transparent fabrics, instead of using conventional displays. The user could use his hands to apply pressure to the fabric leading to an intuitive interaction with the game. The pressure based interaction was enabled using the Microsoft Kinect 1 and its depth sensor.',
                'The three games were joined to one three-sided column (having one playable game on each side. This column was placed inside a huge hemisphere (the "spaceship"). During the night, the hemisphere had artistical visualizations projected onto the outer surface. This project was initiated from the Frankfurter Kinderbüro for the Luminale 2014 in Frankfurt am Main.'
            ],
            achievements: [
                'The media installation was successfully presented at the Luminale 2014 in Frankfurt am Main. The Luminale is a public (free entry) festival of light culture which takes place every 2nd year together with the international Light and Building fair (worlds largest fair for light and building technology) in Frankfurt am Main. The interactive installation was presented in middle of the Frankfurt town square.',
                'Seeing so many children having fun (and learning) with the installation was also kind of an achievement.'
            ],
            responsibilities: [
                'Conception and testing of the overall idea',
                'Development of the games using Unity, C# and OpenCV',
                'Development of a depth sensor calibration tool in order to allow fast setup at the Luminale',
                'Interpretation and mapping of the interaction with the fabric to proivde an input to the games',
            ],
            media: [{
                type: 'img',
                description: 'Installation at Luminale 2014 in middle of the Frankfurt town square',
                filename: './media/morgen-ist-jetzt/hemisphere-1.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: 'Installation at Luminale 2014 in middle of the Frankfurt town square',
                filename: './media/morgen-ist-jetzt/hemisphere-1.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: 'Inside the hemisphere',
                filename: './media/morgen-ist-jetzt/installation.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: 'Child joyfully interacting with a game',
                filename: './media/morgen-ist-jetzt/interaction-1.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: 'Child joyfully interacting with a game',
                filename: './media/morgen-ist-jetzt/interaction-2.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: 'Child joyfully interacting with a game',
                filename: './media/morgen-ist-jetzt/interaction-3.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: '',
                filename: './media/morgen-ist-jetzt/thumbnail-0.jpg',
                isThumbnail: true
            }, {
                type: 'img',
                description: '',
                filename: './media/morgen-ist-jetzt/thumbnail-1.jpg',
                isThumbnail: true
            }, ],
        },{
            id: 'goin-goblins',
            title: 'Goin\' Goblins - A 3D Archery Simulator with Cooperation Mode',
            date: new Date(2015, 10),
            tags: ['Human Computer Interaction', 'Virtual Reality', 'Interactive Media Installation', 'Networking'],
            summary: [
                'The goal of this project was to extend the existing project [Goin\' Goblins - Iterative Design of an Entertaining Archery Experience](https://link.springer.com/chapter/10.1007%2F978-3-319-03161-3_20) to enable a fully immersive experience using virtual reality (VR) by introducing a new cooperative gameplay modus, improving the storytelling and adding further features.',
                'The base Goin\' Goblins installation was a 3D archer simulator, which provided a realistic haptic feedback using an actual bow with arrow and wind output. An arrow daming system was used to prevent the screen from getting damage. The damping system was extended by electronic sensors to detect draw and release of the bow, as well as the aiming angle. The Goin',
                ' Goblins simluation is a virutal archery game, where the archer has to rescue a hostage from the mean goblins by fighting them together with a mage. The mage is controlled by another user with hand gestures to cast spells.',
                'To ensure a high frame rate for the VR user, which is important for reducing the risk of simulator sickness, the new player should be able to run the instance of his game on a seperate computer and thus, join the party through a newtork. In the virtual world, the new player could joint the party as a knight with a sword to fight alongside the archer and the mage. In the actual world, the new player could was immersed using headphones for auditive feedback, a head-mounted display (HMD) for visual feedbackand a Playstation Move motion controller for haptic feedback. However, using an HMD required to find a suitable solution for moving the user around in the virtual world, to prevent simulator sickness. Further tasks were to imrpove and extend the game design and story telling. We also introduced a narrator (in-game voice over) guiding all users through the exciting scenario.'
            ],
            achievements: [
                'Project was presented on several events, for instance:',
                [
                    '[Nacht der Wissenschaft 2015](https://www.nacht-der-wissenschaften.de/2015/home/)',
                    'A public event (free entry) in the city center of Düsseldorf in Germany, where research projects from the university are presented.',
                    '[Innovationshub 2015](https://innovationshub.de/home-copy/) - A get together day with demos and talks to encourage the exchange of digital innovative ideas, trends and solutions between university and companies.'
                ]
            ],
            responsibilities: [
                'Game concept and story telling',
                'Development of several parts of the software (Unity3D, C#,), for incance, networking (server-client), VR mode, interaction handling, game logic',
                'Test several approaches to reduce simulator sickness. In the final version, the knight moves on a flying carpet supported with visual (e.g. path made of particle effects) and auditive feedback to prevent simulator sickness. This worked very well.',
                'Improve the bow interaction and tracking system'
            ],
            media: [{
                    type: 'youtube',
                    description: 'Setup and Gameplay of the Knigh',
                    filename: 'tUPPJtoLlzQ',
                    isThumbnail: false
                }, {
                    type: 'img',
                    description: 'Player Learns Basic Interactions',
                    filename: './media/goin-goblins/training.jpg',
                    isThumbnail: false
                }, {
                    type: 'img',
                    description: 'Knight covering up the archer',
                    filename: './media/goin-goblins/cover.jpg',
                    isThumbnail: false
                }, {
                    type: 'img',
                    description: 'Flying Carpet',
                    filename: './media/goin-goblins/carpet.jpg',
                    isThumbnail: false
                }, {
                    type: 'img',
                    description: 'Knight parrying stuff thrown by the goblins',
                    filename: './media/goin-goblins/parry.jpg',
                    isThumbnail: false
                }, {
                    type: 'img',
                    description: 'Real-Time Synchronized Companions',
                    filename: './media/goin-goblins/companions.jpg',
                    isThumbnail: false
                }, {
                    type: 'img',
                    description: 'The Archer',
                    filename: './media/goin-goblins/archer.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/goin-goblins/thumbnail-0.jpg',
                    isThumbnail: true
                },
                {
                    type: 'img',
                    filename: './media/goin-goblins/thumbnail-1.jpg',
                    isThumbnail: true
                },
            ],
        }, {
            id: 'public-brewing',
            title: 'Public Brewing - A Media Façade with a Mixed Reality Interface',
            date: new Date(2016, 1),
            tags: ['Augmented Reality', 'Mobile Devices', 'Interactive Media Installation', 'Networking', 'Tracking'],
            summary: [
                'Public Brewing is an interactive media façade at a local brewpub. The aim of the project was to create an interactive installation that allows people to experience the beer brewing process in an entertaining yet technically correct way. The public interacted with the installation by using a tangible interface, a control desk with buttons, cranks and several gauges. We developed three augmented reality visualizations to investigate the combination of several interaction techniques to provide an expressive and engaging interface to different user groups:',
                [
                    'Inside of the machine:<br>Explore an entertaining virtual factory inside the machine, by looking at the whole machine (box). The virtual content adapts while a user interacts with the actual machine. For instance, if an user inputs a real coin into the actual machine to start the brewing process, a virtual coin will roll into a virtual coin slot inside the virutal world.',
                    'Outside of the machine:<br>Explore a virtual expert avatar explaining and providing technical details about the brewing process, by looking at the control elements of the machine.',
                    'Beer bottle:<br>Explore a virtual message inside an actual beer bottle. This experience serves as a takeaway experience for the user. The messages consist of well-known idioms of the brewery.'
                ],
                'Additionally, we developed a virtual reality application, which allowed the user to shrink down and experience the inside of the virtual factory.'
            ],
            achievements: [
                'Project was published in [Proceedings of the 4th International Symposium on Pervasive Displays](https://dl.acm.org/doi/10.1145/2757710.2757736).',
                'Various appearances in local newspapers, tv-shows, presentations on several conferences (e.g. InsideAR or CeBIT 2015, the largest and most internationally represented computer expo) and publication in magazines (e.g. in the german computer magazine [iX 03/2015, Heise Verlag](http://www.heise.de/ix/inhalt/2015/3/106)).',
                'Project combined and synchronized actions across a media façade, AR apps, and the actual machine. This created a unique combination between the real and virtual elements.',
            ],
            responsibilities: [
                'Creating virtual environment in the machine, including modelling, texturing and animating',
                'Developing the AR applications, including game logic, networking, etc.'
            ],
            media: [{
                    type: 'youtube',
                    description: 'Public Brewing - A Media Façade with a Mixed Reality Interface',
                    filename: '9G9j0AIR61Y',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Inside of the machine using AR and magic lens metaphor',
                    filename: './media/public-brewing/inside-1.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Virtual dwarf pushing the real bottle',
                    filename: './media/public-brewing/inside-2.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Virtual factory inside the machine',
                    filename: './media/public-brewing/factory.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Bottle experience',
                    filename: './media/public-brewing/bottle.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Dwarf explains control elements',
                    filename: './media/public-brewing/elements.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/public-brewing/thumbnail-0.jpg',
                    isThumbnail: true
                },
                {
                    type: 'img',
                    filename: './media/public-brewing/thumbnail-1.jpg',
                    isThumbnail: true
                },
            ],
        },
        {
            id: 'superjump',
            title: 'Superjump - Trampoline Jumping with a Head-Mounted Display in Virtual Reality',
            date: new Date(2016, 11),
            tags: ['Virtual Reality', 'Human Computer Interaction', 'Tracking'],
            summary: [
                'Using a trampoline as a natural 3D user interface with a head-mounted display for virtual reality is a novel and challenging task. High latencies between interaction and feedback or inaccurate tracking of the user’s movement can lead to simulator sickness. Within the scope of this project, we researched the most appropriate solutions for the described challenge by testing multiple tracking and virtual reality technologies. A fast and precise network-based system was developed using OptiTrack as an infrared based marker tracking solution and Samsung GearVR as a wireless head-mounted display. The introduced system offers an interface to control an application with a trampoline. For instance, the system provides methods to request the average jump duration or the user’s current jump height. In addition, it handles interactions or changes the virtual jump height mapping. Two prototypes were developed, exemplarily implementing the interface in gaming experiences. We chose one of them to test the system with the Simulator Sickness Questionnaire.',
            ],
            achievements: [
                'Evaluation revealed that our system enables a safe and fascinating jumping experience in virtual realiyt.',
                'Users were visually completely immersed into the virtual world by the head-mounted display. Still, most of them did not report specific simulator sickness related to the fast jumping motions on the trampoline.',
                'Project was first presented at an in-house exhibition with approx. 300 participants and has since been shown at many other public events.',
                'To this day, other student groups in the university regularly use our framework to create engaging VR trampoline experiences.',
                'The project was published at [INTETAIN 2017: Intelligent Technologies for Interactive Entertainment](https://link.springer.com/chapter/10.1007%2F978-3-319-73062-2_8).',
            ],
            responsibilities: [
                'Research, prototyping and design conception of the framework',
                'Development of the framework to enable further development of trampoline jumping games with this setup (e.g. tracking, game logic, etc.)',
                'Development of an endless runner game with procedural world generation',
            ],
            media: [{
                    type: 'youtube',
                    description: 'Superjump - Trampoline Jumping with a Head-Mounted Display in Virtual Reality',
                    filename: 'TltTuqMtaxY',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Final Setup',
                    filename: './media/superjump/setup.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Prototype with Kinect and a Screen',
                    filename: './media/superjump/prototype.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Testing GearVR and Perception Neuron Tracking',
                    filename: './media/superjump/perception.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Endless runner game',
                    filename: './media/superjump/endless-runner.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'User having a lot of joy without simulator sickness',
                    filename: './media/superjump/joy.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/superjump/thumbnail-0.jpg',
                    isThumbnail: true
                },
            ],
        }, {
            id: 'zero-gravity',
            title: 'Zero Gravity - A Virtual User Experience in Air and Water',
            date: new Date(2013, 9),
            tags: ['Virtual Reality', 'Interactive Media Installation', 'Human Computer Interaction'],
            summary: [
                'The goal of this project was to analyse several 3D navigation methods (like walking-in-place, etc.) to archieve highly realistic and immersive interactions in 3D environments and also to develop a small demo application. In the early brainstorming sessions however, we decided to pursuit something bigger than a demo application and so we came up with the idea to develop a highly immersive virtual reality flying experience. The virtual hang glider, aka Zero Gravity, was born.',
                'In order to archieve a realistic and immersive flying experience, we bought a real hang glider and constructed a scaffold to have it lifted in the air. Thus, the user was able to get into the hang glider and control it with body movement, like in a real flying scenario. The body movement was tracked and mapped to the virtual world. To increase the immersion further on, we added several output devices, like, multiple wind machines, sound (inear + over ear), vibrational feedback and a head-mounted display. Back then, the Oculus Rift Development Kit 1 was brand new released and it was the must have feature of our project. The output devices respond to events during the virtual flight (e.g more wind while flying faster).',
                'Within further development of this project, we extendet the virtual world by adding an underwater scene. This way, the user could explore the underwater world after "crashing" into the sea.'
            ],
            achievements: [
                'To our knowledge, this was the very first virtual reality flying application with wind feedback and a modern head-mounted display.',
                'Project was published in [Mensch & Computer 2014 - Workshopband](https://dl.gi.de/handle/20.500.12116/8203;jsessionid=89B6CCC990F81F9C2F9DBF9D4F6D82E1). With over 800 participants in the last years, the Mensch & Computer is one of the biggest Human-Computer-Interaction conferences all over Europe.',
                'Project was exhibited on several events, like GI VR/AR - Humen Computer Interaction conference in 2014. Unfortunately, the best demo award was not awarded that year, they just skipped it.',
            ],
            responsibilities: [
                'Ideafinding, research and concept development',
                'Development of proof the concept softwre to perform a Wizzard of Oz experiment.',
                'Research, conception and development of the fly engine with api',
                'Development of communication between several in- and output devices',
            ],
            media: [{
                    type: 'youtube',
                    description: 'Zero Gravity - A Virtual User Experience in Air and Water',
                    filename: 'uN5YiVIAZ34',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'First assembly after buying the hang glider',
                    filename: './media/zero-gravity/hang-glider.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Hang glider on self made scaffold',
                    filename: './media/zero-gravity/installation.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'User experiencing flying',
                    filename: './media/zero-gravity/experience.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Testing the concept - Wizard of Oz experiment',
                    filename: './media/zero-gravity/wizard-of-oz-1.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Testing the concept - Wizard of Oz experiment',
                    filename: './media/zero-gravity/wizard-of-oz-2.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Oculus Rift view',
                    filename: './media/zero-gravity/virtual-world.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/zero-gravity/thumbnail-0.jpg',
                    isThumbnail: true
                },
            ],
        }, {
            id: '360-zoo',
            title: 'Immersive 360° Videos - Virtual Reality Zoo Visit',
            date: new Date(2015, 10),
            tags: ['Video Production', 'Human Computer Interaction', 'Virtual Reality'],
            summary: [
                'The goal of this project was to develop an immersive and interactive virtual reality experience using 360° videos. Main tasks were to research 360° videos in general, applications to experience 360° videos, stiching, interaction concepts, immersive storytelling and recording possiblities (different cameras and rigs of cameras).',
                'Due to a cooperation with the Duisburger Zoo, one of the most visited zoological gardens in Germany with approximately one million visitors per year, we had the chance to create an unique immersive 360° zoo visit. The zoo allowed us to caputre video footage from perspectives the usual zoo visitor would never be able to be at, for instance, beeing inside a cage immediate proximity to the animals, or watching a dolphin show from backstage. In the final application, the user was able to operate multiple virtual control elements in order to navigate through the zoo, change perspectives, watch 2D documentaries with the zookeepers or open information boxes about the animals.'
            ],
            achievements: [
                'The Duisburger Zoo, one of the most visited zoological gardens in Germany with approximately one million visitors per year, was very happy with our result. They featured our app on their website for a couple of years, so that users could experience the 360° zoo visit via the browser.',
                'We presented our work at an in-house exhibition with 250 participants.'
            ],
            responsibilities: [
                'Research, specify and decide technical requirements, e.g. stitchingsoftware, head-mounted displays, etc.',
                'Capture video footage in the zoo (koalas and sea lions) using a 360° camera rig made of six GoPros (4K footage). At shooting day I could pet koalas, which was an unique expereience to me.',
                'Development of the 360° video application (Unity and C#)',
                '360° video stichting with an video stitching software, which was not a one click solution back then'
            ],
            media: [{
                    type: 'img',
                    description: 'User experiencing the zoo',
                    filename: './media/360-zoo/user.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'In immediate proximity to a koala',
                    filename: './media/360-zoo/koala.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Dolphin show from backstage',
                    filename: './media/360-zoo/dolphins.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: '360° sea lions',
                    filename: './media/360-zoo/sea-lions.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Info popup',
                    filename: './media/360-zoo/info.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: '2d documentary',
                    filename: './media/360-zoo/2d-documentary.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: '3D scene inside Unity',
                    filename: './media/360-zoo/3d-scene.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/360-zoo/thumbnail-0.jpg',
                    isThumbnail: true
                },
                {
                    type: 'img',
                    filename: './media/360-zoo/thumbnail-1.jpg',
                    isThumbnail: true
                },
            ],
        }, 
        {
            id: 'persona.fractalis',
            title: 'persona.fractalis - An Interactive Audio-Visual Media Installation with Personalized 3D-Fractals',
            date: new Date(2015, 7),
            tags: ['Human Computer Interaction', 'Interactive Media Installation', 'Virtual Reality', 'Networking'],
            summary: [
                'This project is an extension to my bachelor thesis project ([Interactive Real-Time Capable 3D-Fractals](3d-fractals) and focussed on the question of whether there is a more immversive way of interacting with 3D-fractals than using mouse and keyboard.',
                'persona.fractalis is an interactive audio-visual media installation which allows users to experience personalized 3D-fractals in real-time. Based on biometrical parameters of the user (eg. heartbeat, body temperature, skin moisture, etc.), the system generates illustrations of 3D-fractals in high resolution (e.g. 4k, 60 fps) or as an immersive experience (3D with stereo display or VR with Oculus Rift). Additionally, algorithmically composed ambient sound is synthesized, also depending on the biometrical parameters of the user. Mapping those data onto the 3D-fractals enables a diverse influence to the structur of 3d-fractal illustrations, which again yields to an individualized user experience. Furthermore, manipulation of the structure is also possible using hand gestures.'
            ],
            achievements: [
                'Project was published in [Mensch & Computer 2015 Proceedings](https://dl.gi.de/handle/20.500.12116/7860)',
                'The interactive audio-visual media installation was presented on several conferences, for instance:',
                [
                    '[Mensch & Computer conference 2015](https://muc2015.mensch-und-computer.de/) - MuC is Germany\'s leading conference on human computer interaction. In 2015, 800+ researchers, practitioners and artists visited this event.',
                    '[Nacht der Wissenschaft 2015](https://www.nacht-der-wissenschaften.de/2015/home/) - A public event (free entry) in the city center of Düsseldorf in Germany, where research projects from the university are presented.',
                    '[Innovationshub 2015](https://innovationshub.de/home-copy/) - A get together day with demos and talks to encourage the exchange of digital innovative ideas, trends and solutions between university and companies.',
                ]

            ],
            responsibilities: [
                'Develop an API and implement network communication for remote control of the 3D-fractals',
                '- Extend the rendering pipeline to:',
                [
                    'Enabe a real side-by-side 3D-visualization on a stereo display. This was a really cool experience, especially with the animated 3D-fractals.',
                    'View 3D-fractals with an head-mounted display (Oculus Rift). To my knowledge, there was no other 3D-fractal-renderer for head-mounted-displays.'
                ],
                'Implement hand gesture controls using Microsoft Kinect as an input device',
                'Develop additional controls for animating 3D-fractals',
                'Explore 3D-fractals in order to find good looking visualizations and animations for the sensor data mapping.',
                'Testing and preparing conference demos',
            ],
            media: [{
                type: 'img',
                description: 'User interacting with 3D-fractals',
                filename: './media/persona.fractalis/user-interacting.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: 'User interacting with 3D-fractals',
                filename: './media/persona.fractalis/user-interacting-2.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: 'User jumping in order to increase heartbeat',
                filename: './media/persona.fractalis/user-jumping.jpg',
                isThumbnail: false
            }, {
                type: 'img',
                description: '',
                filename: './media/persona.fractalis/thumbnail-0.jpg',
                isThumbnail: true
            }, ],
        },
        {
            id: 'smart-city',
            title: 'Smart City',
            date: new Date(2016, 9),
            tags: ['Augmented Reality', 'Mobile Devices', 'Autonomous Agents', 'Tracking', 'Interactive Media Installation'],
            summary: [
                'The goal of this project was to use augmented reality on an architectural miniature city model in order to explain several new concepts and ideas about that city. While the actual city model is hold very simple, the augmented virtual content should bring life into the hole media installation. For this, a simple autonomous agent approach was implemented to control the vritual people and cars moving inside the city, which also led to different experiences for each user. To increase the impression of an alive and smart city, the virtual objects were interacting with each other. Additionally, we introduced an arduino which controlled LEDs inside the actual miniature model and communicated with the AR app to virtually illustate the alternation of day and night.',
            ],
            achievements: [
                'Prject was presented at the Panasonic booth at IFA 2016. IFA (Internationale Funkausstellung Berlin) is one of the oldest industrial exhibitions in Germany with approx. 253 thousand visitors in 2016.',
            ],
            responsibilities: [
                'Development of the augmented reality application (Unity3D, C#, Maya and Vuforia), including user interface and interaction design, 3D modelling, animations and texturing, programming of the application logic, autonomous agents and path following algorithms, AR tacking and story telling.',
            ],
            media: [{
                    type: 'img',
                    description: 'Panasonic AR Booth at IFA 2016',
                    filename: './media/smart-city/booth-1.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Panasonic AR Booth at IFA 2016',
                    filename: './media/smart-city/booth-2.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Virtual city',
                    filename: './media/smart-city/virtual-city-1.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    description: 'Virtual city',
                    filename: './media/smart-city/virtual-city-2.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/smart-city/thumbnail-0.jpg',
                    isThumbnail: true
                },
                {
                    type: 'img',
                    filename: './media/smart-city/thumbnail-1.jpg',
                    isThumbnail: true
                },
            ],
        }, {
            id: 'interactive-virtual-studio',
            title: 'Interactive Virtual Studio - Semi-Automatic Camera and Switcher Control',
            date: new Date(2015, 9),
            tags: ['Video Production', 'Expert System', 'Networking', 'Tracking'],
            summary: [
                'The goal of this project was to develop an automatic cinematographer (the "expert system") for an interactive virtual stuido. The system should recognize and suggest, when to cut between the camera I and camera II (Jib-Arm camera and  a camera on rails). In addition, the robotic camera attributes should be adjusted fully automatically, which include, for instance, the position, rotation, zoom and focus. For this, all necessary information are analysed and evaluated by the expert system, based on fundamental cinematographic rules.',
                'Relevant information about the captured scene are gathered in two ways: First, by tracking the actors skeletons with a markerless tracking system (Organic Motion OpenStage). And second, by using lavalier microphones to obtain the actors voices. These two sources are used, to extract the necessary information for the expert system. Then, the expert system can automatically choose the next action to be performed in realtime, based on customly predefined rules. The automatic cinematographer was tested in a live broadcast scenario.'
            ],
            achievements: [
                'Even if I was not involed in the paper, the project was published in Proceedings of the ACM International Conference on Interactive Experiences for TV and Online Video 2016 (sponsored by Samsung) as one out of 44 selected contributions in 168 submissions (Overall Acceptance Rate: 26%).',
                'German version also published in Fernseh- und Kinotechnische Gesellschaft e.V. magazine: Halbautomatische Steuerung von Kamera und Bildmischer bei Live-Übertragungen'
            ],
            responsibilities: [
                'Development of some features of the expert system, like scene information processing and control of the cameras',
                'Work on the markerless tracking system'
            ],
            media: [{
                    type: 'youtube',
                    description: 'Interactive Virtual Studio Live Broadcast',
                    filename: 'B_CBSNUXWPI',
                    isThumbnail: false
                }, {
                    type: 'img',
                    description: 'Production day using our system',
                    filename: './media/interactive-virtual-studio/production.jpg',
                    isThumbnail: false
                }, {
                    type: 'img',
                    description: 'Virtual simulation driven by tracking data',
                    filename: './media/interactive-virtual-studio/tracking.jpg',
                    isThumbnail: false
                }, {
                    type: 'img',
                    filename: './media/interactive-virtual-studio/vitual-scene.jpg',
                    isThumbnail: false
                },
                {
                    type: 'img',
                    filename: './media/interactive-virtual-studio/thumbnail-0.jpg',
                    isThumbnail: true
                },
            ],
        },
        {
            title: 'GitHub Pages as a Portfolio',
            date: new Date(2020, 5),
            tags: ['HTML', 'JavaScript', 'CSS', 'npm', 'webpack'],
            description: 'Implementation of a website (this one) to present my projects. My goal was to only use plain JavaScript and no frameworks for any of the features like modals, carousels, etc. I used npm and webpack to bundle and transpile the code to reduce the distribution size. A next step would be to use TypeScript "insted" of JavaScript. I hope you enjoy this website.',
            media: [{
                type: 'img',
                filename: './media/others/githubpage.gif',
                isThumbnail: true
            }, ],
        },
        {
            title: 'Carl vs. Zombie',
            date: new Date(2015, 9),
            tags: ['Boids', 'Simulation', 'Autonomous Agents'],
            description: 'This is a small demo developed for a presentation about the boids and autonomous agents. The simulation start with humans autonomously walking around (wandering). The user can emit a cloud of disease infecting all humans walking through it and turning them into slow walking zombies. While the slow zombies chase the humans to infect them, the humans walk or run away from the zombies to avoid them. Of course the humans are smart and would rather join another group of fleeing humans than walking towards the direction they came from. The 3d assets are bought, since that was not the focus of this project.',
            media: [{
                    type: 'img',
                    filename: './media/others/carl-vs-zombie-1.jpg',
                    isThumbnail: true
                },
                {
                    type: 'img',
                    filename: './media/others/carl-vs-zombie-2.jpg',
                    isThumbnail: true
                },
            ],
        },
        {
            title: 'Scoccer Demo using Perception Neuron',
            date: new Date(2015, 11),
            tags: ['Prototyping', 'Tracking', 'Mixed Reality'],
            description: 'This soccer demo was part of an evaluation of the newly released Perception Neuron system. The user, whose body motion is tracked using the Perception Neuron, has to score a penalty. To increase the immersion we used a display wall, sound and wind machines.',
            media: [{
                type: 'youtube',
                filename: 'ECTUczoTKMc',
                isThumbnail: true
            }, ],
        },
        {
            title: '3D Moody Graveyard',
            date: new Date(2015, 1),
            tags: ['Short Film', 'Video Editing', '3D Modelling', 'Animation', 'Texturing', 'Video Post-Processing'],
            description: 'The focus of this project was to create a moody atmosphere of a graveyard through camera work and post processing (Autodesk Maya and Adobe Premiere). Most 3d assets were bought.',
            media: [{
                type: 'youtube',
                filename: 'd2tHFTna2QU',
                isThumbnail: true
            }],
        },
        {
            title: 'Stop Motion using Modelling Dough',
            date: new Date(2015, 10),
            tags: ['Short Film', 'Video Editing', 'Animation', 'Video Post-Processing'],
            description: 'The goal of this project was to implement Disney\'s twelve basic principles of animation by creating a very short stop motion film with modelling dough, a DLSR camera and the software Dragonframe',
            media: [{
                type: 'youtube',
                filename: 'h4UTLaMOvS4',
                isThumbnail: true
            }],
        },
        {
            title: '3D Chain Reaction without Keyframing',
            date: new Date(2012, 11),
            tags: ['Short Film', 'Video Editing', '3D Modelling', 'Animation', 'Texturing', 'Video Post-Processing'],
            description: 'The goal of this project was to create a 3d chain reaction with Autodesk Maya and without using any keyframe animation (only scripting allowed). All the 3d models are self-modelled. The chain reaction ran in one go without interruptions, even if you see several cuts in the video.',
            media: [{
                type: 'youtube',
                filename: 'VDLQLy1EO5g',
                isThumbnail: true
            }],
        },
    ],
    papers: [{
            title: 'Trampoline Jumping with a Head-Mounted Display in Virtual Reality Entertainment',
            publisher: 'Springer International Publishing',
            booktitle: 'Intelligent Technologies for Interactive Entertainment (INTETAI)',
            year: '2018',
            url: 'https://doi.org/10.1007/978-3-319-73062-2_8'
        },
        {
            title: 'persona.fractalis - eine körpergesteuerte 3D-Installation',
            publisher: 'De Gruyter Oldenbourg',
            booktitle: 'Mensch und Computer 2015 – Proceedings',
            year: '2015',
            url: 'https://dl.gi.de/20.500.12116/7860'
        }
    ]
};