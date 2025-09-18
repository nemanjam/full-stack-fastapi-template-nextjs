import React, { ReactNode } from 'react';

import { Query } from '@/providers/query';
import { Theme } from '@/providers/theme';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Query>
      <Theme>{children}</Theme>
    </Query>
  );
}
