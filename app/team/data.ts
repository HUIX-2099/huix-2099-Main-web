const WULWYN_AVATAR = "https://scontent.fmlw1-2.fna.fbcdn.net/v/t1.6435-9/53121401_10156204857453437_4904719181628309504_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHM7VGP9lGvyVYSK7M-N7OPtyAmpe0yAEC3ICal7TIAQAlKnT9aru1Vra9ERu2ERftuf6IhMNQco4jjEhKBidka&_nc_ohc=SYJ_JtOEynwQ7kNvwEvzNt7&_nc_oc=Adr07kDph0gtEgDOQvhk0fPuJfD8yIQCW-tRlQntnwr2NJWgcB0da0ukKWRA-_lfK4s&_nc_zt=23&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=leeCcpZhuqHH2j4XhF0Row&_nc_ss=7a32e&oh=00_AfzRDlNsrFWbsEoG0PgHvPw2I3IJDZvA7zUIBbRjWOgeCw&oe=69E7DA12"

export const teamMembers = [
    {
        id: "victor",
        name: "Victor Edet Coleman",
        role: "Founder & CTO",
        title: "Chief Technology Officer",
        badge: "01",
        image: "/Team/VICTOR.jpeg",
        photos: [
            { id: "01", image: "/Team/VICTOR.jpeg", caption: "CTO" },
        ],
        tagline: "3D Software Engineer · Founder & CTO of HUIX-2099",
        bio: "Chief Technology Officer driving HUIX-2099's technical vision. Architects and builds HUIX-HORIZEN and Virtual Past Liberia—platforms that enable Liberia and the region to imagine, prototype, and build the future through XR, 3D visualization, and immersive systems.",
        focus: "XR · 3D Visualization · Systems Architecture · AI Integration",
        location: "Monrovia, Liberia",
        email: "huixtech2099@gmail.com",
        status: "Technical Leadership · R&D · Product Architecture",
        linkedin: "https://www.linkedin.com/in/victor-coleman-4731701a5/",
        facebook: "https://www.facebook.com/victor.coleman.745874",
        phone: "+231776800064, +231887544923",
        googleSearch: "https://www.google.com/search?q=huix+2099+victor&oq=huix+2099+victor&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMgcIAhAAGO8FMgcIAxAAGO8FMgcIBBAAGO8FMgcIBRAAGO8FMgcIBhAAGO8F0gEINTg3OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
    },
    {
        id: "wulwyn",
        name: "Wulwyn Porte L",
        role: "CEO & Co-founder & Investor",
        title: "Chief Executive Officer",
        badge: "02",
        image: WULWYN_AVATAR,
        photos: [{ id: "01", image: WULWYN_AVATAR, caption: "CEO" }],
        tagline: "CEO & Co-founder · Strategic Lead & Investor",
        bio: "Chief Executive Officer steering HUIX-2099's business strategy and growth. Co-founder and lead investor driving partnerships, funding, and market expansion for Liberia's next-generation technology company.",
        focus: "Strategy · Business Development · Investment",
        location: "Monrovia, Liberia",
        email: "huixtech2099@gmail.com",
        status: "Executive Leadership · Partnerships · Growth",
        linkedin: null,
        facebook: null,
        phone: null,
        googleSearch: null
    },
]

export type TeamMember = (typeof teamMembers)[number]
