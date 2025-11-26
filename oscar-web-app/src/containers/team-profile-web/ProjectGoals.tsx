"use client";
import { Card, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

export const ProjectGoals = () => {
  return (
    <section
      id="goals"
      className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Title level={2} className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Project Goals & Challenges
          </Title>
          <Paragraph className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Addressing the core challenges in modern education
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <Card
            className="shadow-lg rounded-xl transition-shadow duration-300"
            variant="outlined"
          >
            <Title level={3} className="text-xl sm:text-2xl mb-4 text-blue-600">
              The Problem
            </Title>
            <Paragraph className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Traditional classrooms struggle with engagement, real-time
              feedback, and personalized learning. Students often hesitate to
              ask questions, teachers lack insights into student understanding,
              and administrators need better tools to manage educational
              resources effectively.
            </Paragraph>
          </Card>

          <Card
            className="shadow-lg rounded-xl transition-shadow duration-300"
            variant="outlined"
          >
            <Title
              level={3}
              className="text-xl sm:text-2xl mb-4 text-purple-600"
            >
              Our Solution
            </Title>
            <Paragraph className="text-sm sm:text-base text-gray-700 leading-relaxed">
              O.S.C.A.R. bridges these gaps with AI-powered assistance,
              real-time engagement tracking, seamless communication tools, and
              comprehensive administrative controls. We empower educators to
              create more interactive, responsive, and effective learning
              environments.
            </Paragraph>
          </Card>

          <Card
            className="shadow-lg rounded-xl transition-shadow duration-300 md:col-span-2"
            variant="outlined"
          >
            <Title
              level={3}
              className="text-xl sm:text-2xl mb-4 text-green-600"
            >
              Key Objectives
            </Title>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Text strong className="text-base sm:text-lg">
                  Real-Time Engagement
                </Text>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Monitor and enhance student participation during lessons
                </Paragraph>
              </div>
              <div>
                <Text strong className="text-base sm:text-lg">
                  AI-Powered Support
                </Text>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Intelligent assistance for both students and educators
                </Paragraph>
              </div>
              <div>
                <Text strong className="text-base sm:text-lg">
                  Seamless Communication
                </Text>
                <Paragraph className="text-sm text-gray-600 mt-2">
                  Bridge the gap between teachers, students, and admins
                </Paragraph>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
