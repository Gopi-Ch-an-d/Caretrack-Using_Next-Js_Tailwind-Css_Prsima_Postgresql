import React from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
}

const TeamComponent: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Floyd Miles',
            role: 'Director of Operations',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
        },
        {
            id: 2,
            name: 'Jacob Jones',
            role: 'Medical or Health Services Manager',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
        },
        {
            id: 3,
            name: 'Courtney Henry',
            role: 'Assistant Admissions Director',
            image: 'https://media.licdn.com/dms/image/v2/C4D03AQG4pFHskBdKyA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1589253752067?e=2147483647&v=beta&t=MPk4Vltjggd7EvxI-0_Y--gllLCrYrr9cz6Ohmr-xFw'
        },
        {
            id: 4,
            name: 'Devon Lane',
            role: 'Medical Manager',
            image: 'https://media.istockphoto.com/id/468917986/photo/doctor-or-nurse-in-medical-setting.jpg?s=612x612&w=0&k=20&c=U3b8a5U9YT52DRQwkTeWPLvmFTMhqAQ1uK8XMqSswts='
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-sm sm:text-base font-medium text-slate-500 tracking-wider uppercase mb-3 sm:mb-4">
                        Our Team
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span className="text-red-500">Meet</span>{" "}
                        <span className="text-blue-500">Our</span>{" "}
                        <span className="text-green-500">Professionals</span>
                    </h1>

                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 sm:h-72 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamComponent;