import "./globals.css";
import React, { ReactNode } from 'react';
import RootStyleRegistry from './emotion';
import AuthContext from '@/app/context/AuthContext';
import ToasterContext from "@/app/context/ToasterContext";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
   <html lang="en-US">
     <head />
     <body>
        <AuthContext>
          <ToasterContext />
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </AuthContext>
     </body>
   </html>
  );
}