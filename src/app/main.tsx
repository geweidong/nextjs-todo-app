"use client";
import React, { memo } from 'react';
import { AppShell, Navbar, Header } from '@mantine/core';

const App = memo(function app() {
  return (
    <AppShell
      padding="xs"
      navbar={<Navbar className={
        `
          block sm:hidden
        `
      }
      width={{ base: 300 }} p="md">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <div className='p-4'>
      </div>
    </AppShell>
  )
})

export default App;
