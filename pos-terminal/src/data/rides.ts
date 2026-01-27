export interface Ride {
    id: string;
    name: string;
    price: number;
    image?: string;
    description?: string;
}

export const rides: Ride[] = [
    {
        id: '1',
        name: 'Velocity Coaster',
        price: 250,
        description: 'Extreme launch coaster with multiple inversions.',
        image: 'https://images.unsplash.com/photo-1605218427360-36390f855393?auto=format&fit=crop&q=80'
    },
    {
        id: '2',
        name: 'Skyview Ferris Wheel',
        price: 150,
        description: 'Panoramic views from 100m above the resort.',
        image: 'https://images.unsplash.com/photo-1534954486580-0aee4d4f6c49?auto=format&fit=crop&q=80'
    },
    {
        id: '3',
        name: 'Aqua Kingdom',
        price: 450,
        description: 'All-day access to water slides, wave pools, and lazy river.',
        image: 'https://images.unsplash.com/photo-1579290074360-a2924fb36691?auto=format&fit=crop&q=80'
    },
    {
        id: '4',
        name: 'Turbo Go-Karts',
        price: 200,
        description: 'High-speed electric go-kart racing.',
        image: 'https://images.unsplash.com/photo-1596720426673-e4c278046b0a?auto=format&fit=crop&q=80'
    },
    {
        id: '5',
        name: 'Haunted Manor',
        price: 180,
        description: 'Immersive horror walkthrough experience.',
        image: 'https://images.unsplash.com/photo-1628178822086-7b243b8de464?auto=format&fit=crop&q=80'
    },
    {
        id: '6',
        name: 'Jungle Safari',
        price: 220,
        description: 'Animatronic boat ride through the jungle.',
        image: 'https://images.unsplash.com/photo-1504966981333-60a11d8a8605?auto=format&fit=crop&q=80'
    },
    {
        id: '7',
        name: 'Kids Carousel',
        price: 80,
        description: 'Classic merry-go-round for little ones.',
        image: 'https://images.unsplash.com/photo-1520667086051-93103233c0d8?auto=format&fit=crop&q=80'
    },
    {
        id: '8',
        name: 'Drop Tower',
        price: 180,
        description: 'Freefall from 80 meters.',
        image: 'https://images.unsplash.com/photo-1550508064-24b8a2d590e8?auto=format&fit=crop&q=80'
    },
    {
        id: '9',
        name: 'Bumper Cars',
        price: 120,
        description: 'Crash and dash fun.',
        image: 'https://images.unsplash.com/photo-1594950346067-759c8d5a7d77?auto=format&fit=crop&q=80'
    },
    {
        id: '10',
        name: 'Mirror Maze',
        price: 100,
        description: 'Get lost in illusions.',
        image: 'https://images.unsplash.com/photo-1588661706689-d10c0ea91090?auto=format&fit=crop&q=80'
    },
    {
        id: '11',
        name: 'Pirate Ship',
        price: 160,
        description: 'Swinging adventure boat.',
        image: 'https://images.unsplash.com/photo-1601633512217-1c32759e663a?auto=format&fit=crop&q=80'
    },
    {
        id: '12',
        name: 'Virtual Reality Zone',
        price: 350,
        description: '60 minutes of VR gaming.',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80'
    },
    {
        id: '13',
        name: 'Mini Golf',
        price: 150,
        description: '18-hole adventure golf course.',
        image: 'https://images.unsplash.com/photo-1560155018-b80c10710609?auto=format&fit=crop&q=80'
    },
    {
        id: '14',
        name: 'Laser Tag Arena',
        price: 200,
        description: 'Team-based laser combat.',
        image: 'https://images.unsplash.com/photo-1626071477421-2a66e7681c2f?auto=format&fit=crop&q=80'
    },
    {
        id: '15',
        name: 'Rock Climbing',
        price: 180,
        description: 'Indoor climbing walls for all skill levels.',
        image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80'
    },
    {
        id: '16',
        name: 'Trampoline Park',
        price: 250,
        description: 'Bounce and flip in our jump zone.',
        image: 'https://images.unsplash.com/photo-1594183424689-56ad4c1c9b88?auto=format&fit=crop&q=80'
    },
    {
        id: '17',
        name: 'Arcade Pass',
        price: 500,
        description: '100 credits for the arcade.',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80'
    },
    {
        id: '18',
        name: 'Rope Course',
        price: 220,
        description: 'High-altitude aerial obstacle course.',
        image: 'https://images.unsplash.com/photo-1577461876537-88df8833917d?auto=format&fit=crop&q=80'
    },
    {
        id: '19',
        name: 'Wave Rider',
        price: 180,
        description: 'Simulated surfing experience.',
        image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'
    },
    {
        id: '20',
        name: 'Escape Room',
        price: 400,
        description: 'Solve puzzles to escape in 60 mins.',
        image: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?auto=format&fit=crop&q=80'
    },
    {
        id: '21',
        name: 'Combo Ticket (5 Rides)',
        price: 500,
        description: 'Special Pass: Any 5 rides of your choice!',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80'
    }
];
