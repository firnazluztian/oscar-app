"use client";

import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <StyleProvider layer>
      <ConfigProvider>{children}</ConfigProvider>
    </StyleProvider>
  );
}
