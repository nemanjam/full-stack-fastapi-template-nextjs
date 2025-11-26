import Link from 'next/link';

import IconsCustom from '@workspace/ui/components/icons-custom';
import { Button } from '@workspace/ui/components/ui/button';
import { cn } from '@workspace/ui/lib/utils';

import { ROUTES } from '@/constants/routes';
import { PROCESS_ENV } from '@/config/process-env';

import type { FC } from 'react';

interface Props {
  className?: string;
}

const { GitHub } = IconsCustom;

const { NEXT_PUBLIC_API_URL } = PROCESS_ENV;
const { LOGIN_GITHUB } = ROUTES.API;

// Note: BROWSER (<a/> or <Link />) must call this API url, not http client or server
const absoluteApiUrl = `${NEXT_PUBLIC_API_URL}${LOGIN_GITHUB}`;

const ButtonGithubLogin: FC<Props> = ({ className }) => (
  <Button
    asChild
    className={cn(
      'w-full h-12 flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium',
      className
    )}
  >
    <Link href={absoluteApiUrl}>
      <GitHub className="w-5 h-5" />
      Sign in with GitHub
    </Link>
  </Button>
);

export default ButtonGithubLogin;
