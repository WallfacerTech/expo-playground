import '../global.css';
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from './contexts/ThemeContext';
import useThemedNavigation from './hooks/useThemedNavigation';

export default function RootLayout() {
  const { screenOptions } = useThemedNavigation();
  return (
        <ThemeProvider>
            <Stack screenOptions={screenOptions} />
        </ThemeProvider>
  );
}
