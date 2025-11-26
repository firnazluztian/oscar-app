"use client";
import { Card, Typography, Avatar } from "antd";

const { Title, Paragraph, Text } = Typography;

type TeamMember = {
  name: string;
  role: string;
  description: string;
  avatar?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Team Member 1",
    role: "Frontend Developer",
    description:
      "Creating intuitive user interfaces and ensuring responsive design.",
  },
  {
    name: "Team Member 2",
    role: "Backend Developer",
    description: "Building robust APIs and managing server infrastructure.",
  },
  {
    name: "Team Member 3",
    role: "UI/UX Designer",
    description:
      "Designing user experiences and maintaining design consistency.",
  },
];

export const TeamMembers = () => {
  return (
    <section
      id="team"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Title level={2} className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Meet Our Team
          </Title>
          <Paragraph className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            The talented individuals behind O.S.C.A.R.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-xl transition-all duration-300 hover:-translate-y-2 text-center"
              variant="outlined"
            >
              <Avatar
                size={80}
                className="mb-4"
                style={{
                  backgroundColor: "#1890ff",
                  fontSize: "24px",
                }}
              >
                {member.name.charAt(0)}
              </Avatar>
              <Title level={4} className="text-lg sm:text-xl mb-2">
                {member.name}
              </Title>
              <Text
                type="secondary"
                className="text-sm sm:text-base block mb-3"
              >
                {member.role}
              </Text>
              <Paragraph className="text-xs sm:text-sm text-gray-600">
                {member.description}
              </Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
