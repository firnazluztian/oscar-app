"use client";
import { Button, Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

type TryItOutProps = {
  onFeatureClick: (type: string) => void;
};

export const TryItOut = (props: TryItOutProps) => {
  const { onFeatureClick } = props;
  return (
    <section
      id="try-it-out"
      className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <Title level={2} className="text-3xl sm:text-4xl md:text-5xl mb-4">
          Try It Out
        </Title>
        <Paragraph className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our platform features and experience the future of classroom
          management
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          <Card
            className="shadow-lg rounded-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            variant="outlined"
            styles={{
              body: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "24px",
              },
            }}
          >
            <div className="flex flex-col items-center flex-1">
              <Title level={3} className="text-xl sm:text-2xl mb-4">
                Student Portal
              </Title>
              <Paragraph className="text-sm sm:text-base text-gray-600 mb-6">
                Join lessons, ask questions, and track your progress
              </Paragraph>
            </div>
            <Button
              type="primary"
              size="large"
              onClick={() => onFeatureClick("student")}
              className="rounded-full px-6 w-full sm:w-auto"
            >
              Explore as a Student
            </Button>
          </Card>

          <Card
            className="shadow-lg rounded-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            variant="outlined"
            styles={{
              body: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "24px",
              },
            }}
          >
            <div className="flex flex-col items-center flex-1">
              <Title level={3} className="text-xl sm:text-2xl mb-4">
                Teacher Dashboard
              </Title>
              <Paragraph className="text-sm sm:text-base text-gray-600 mb-6">
                Manage lessons, create quizzes, and monitor engagement
              </Paragraph>
            </div>
            <Button
              type="primary"
              size="large"
              onClick={() => onFeatureClick("teacher")}
              className="rounded-full px-6 w-full sm:w-auto"
            >
              Explore as a Teacher
            </Button>
          </Card>

          <Card
            className="shadow-lg rounded-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            variant="outlined"
            styles={{
              body: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "24px",
              },
            }}
          >
            <div className="flex flex-col items-center flex-1">
              <Title level={3} className="text-xl sm:text-2xl mb-4">
                Admin Access
              </Title>
              <Paragraph className="text-sm sm:text-base text-gray-600 mb-6">
                Configure settings, manage users, and view analytics
              </Paragraph>
            </div>
            <Button
              type="primary"
              size="large"
              onClick={() => onFeatureClick("admin")}
              className="rounded-full px-6 w-full sm:w-auto"
            >
              Explore as an Admin
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
