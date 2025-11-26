"use client";
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

type HeroProps = {
  onNavigate: (sectionId: string) => void;
}

export const Hero = (props: HeroProps) => {
  const { onNavigate } = props;
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <Title
          level={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          O.S.C.A.R.
        </Title>
        <Title
          level={2}
          className="text-xl sm:text-2xl md:text-3xl mb-6 font-semibold text-gray-800"
        >
          Orchestrator Smart Classroom Assistant
        </Title>
        <Paragraph className="text-base sm:text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Revolutionizing modern education through intelligent classroom
          management, real-time AI assistance, and seamless communication
          between teachers, students, and administrators. Experience the
          future of learning today.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          onClick={() => onNavigate("goals")}
          className="rounded-full px-8 h-12 text-base"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

