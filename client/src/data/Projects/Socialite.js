import Italos from '../../images/Italos/Italos.png'
import socialite1 from '../../images/Socialite/socialite1.png'
import socialite2 from '../../images/Socialite/socialite2.png'
import socialite3 from '../../images/Socialite/socialite3.png'

import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export const Socialite = 	{
    ProjectHeader: {
        title: 'Project Management',
        publishDate: 'Jul 26, 2022',
        tags: 'Fullstack Project',
    },
    ProjectImages: [
        {
            id: 0,
            title: 'PROJECT MANAGEMENT SOCIALITE',
            img: socialite2,
        },
        {
            id: 1,
            title: 'PROJECT MANAGEMENT SOCIALITE',
            img: socialite1,
        },
        {
            id: 2,
            title: 'PROJECT MANAGEMENT SOCIALITE',
            img: socialite3,
        },
    ],
    ProjectInfo: {
        ClientHeading: 'About Client',
        CompanyInfo: [
            {
                id: 1,
                title: 'Name',
                details: 'Socialite Ltd',
            },
            {
                id: 2,
                title: 'Services',
                details: 'UI Design & Frontend Development',
            },
            {
                id: 3,
                title: 'Website',
                details: 'https://socialiteinc.vercel.app/',
            },
            {
                id: 4,
                title: 'Phone',
                details: 'tel:+250 793 092 863',
            },
        ],
        ObjectivesHeading: 'Objective',
        ObjectivesDetails:
            'Join the Socialite community today and unleash your social side! 🎉🌟👥 With our user-friendly interface, connecting with friends and family has never been easier. Share your world through stunning photos and captivating stories. Let Socialite be your go-to for endless entertainment and inspiration! 💻📱📷.',
        Technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'React js',
                    'TailwindCSS',
                    'Node.js',
                    'Express js',
                    'Cloudinary',
                    'Figma'
                ],
            },
        ],
        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                    'Prop ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },
            {
                id: 2,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 3,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
            },
            {
                id: 4,
                details:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
            },
        ],
        SocialSharingHeading: 'Share This',
        SocialSharing: [
            {
                id: 1,
                name: 'Twitter',
                icon: <FiTwitter />,
                url: 'https://twitter.com/Peace_Ishimwem',
            },
            {
                id: 2,
                name: 'Instagram',
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/peace_ishimwem/',
            },
            {
                id: 3,
                name: 'Facebook',
                icon: <FiFacebook />,
                url: 'https://web.facebook.com/peace.ishimwem/',
            },
            {
                id: 4,
                name: 'LinkedIn',
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/peace-ishimwe/',
            },
            {
                id: 5,
                name: 'Github',
                icon: <FiGithub />,
                url: 'https://github.com/Peace-Ishimwe',
            },
        ],
    },
    RelatedProject: {
        title: 'Related Projects',
        Projects: [
            {
                id: 1,
                title: 'Italos Data Management',
                img: Italos,
            }
        ],
    },
}