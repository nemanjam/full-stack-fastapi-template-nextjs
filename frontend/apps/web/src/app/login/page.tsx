import { FC } from 'react';

import { Card, CardContent, CardHeader } from '@workspace/ui/components/ui/card';

import FormLogin from '@/components/form-login';

import type React from 'react';

const LoginPage: FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
      <CardHeader className="text-center pb-8">
        <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
          </div>
        </div>
        <span className="ml-3 text-2xl font-bold text-teal-600">FastAPI</span>
      </CardHeader>
      <CardContent>
        <FormLogin />
      </CardContent>
    </Card>
  </div>
);

export default LoginPage;
