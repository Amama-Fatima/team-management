import MainNav from '@/components/layout/main-nav';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import GoogleLoginButton from '@/components/login-buttons/login-with-google-button';
import UserProfileDropdown from '@/components/user-profile-dropdown';

import { siteConfig } from '@/constant/config';

import { SessionUser } from '@/types';

interface SiteHeaderProps {
  user: Pick<SessionUser, 'name' | 'image' | 'email'>;
}

import React from 'react';

export default function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav items={siteConfig.MainNav} />
        <div>
          <nav className='flex flex-1 items-center space-x-1'>
            <UserProfileDropdown user={user} />
            <GoogleLoginButton />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
