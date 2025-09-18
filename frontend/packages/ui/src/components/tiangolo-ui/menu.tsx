'use client';

import * as React from 'react';

import { LuCheck, LuChevronRight } from 'react-icons/lu';

interface MenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(function MenuContent(
  { children, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${rest.className ?? ''}`}
      {...rest}
    >
      {children}
    </div>
  );
});

export const MenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function MenuCheckboxItem({ children, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${rest.className ?? ''}`}
      {...rest}
    >
      <span className="flex items-center justify-center w-4 h-4 mr-2">
        <LuCheck />
      </span>
      {children}
    </div>
  );
});

export const MenuRadioItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function MenuRadioItem({ children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${rest.className ?? ''}`}
        {...rest}
      >
        <span className="flex items-center justify-center w-4 h-4 mr-2">
          <LuCheck />
        </span>
        <span>{children}</span>
      </div>
    );
  }
);

export const MenuItemGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { title?: string }
>(function MenuItemGroup({ title, children, ...rest }, ref) {
  return (
    <div ref={ref} {...rest}>
      {title && (
        <div className="px-4 py-2 text-xs text-gray-500 select-none font-semibold">{title}</div>
      )}
      {children}
    </div>
  );
});

export interface MenuTriggerItemProps extends React.HTMLAttributes<HTMLDivElement> {
  startIcon?: React.ReactNode;
}

export const MenuTriggerItem = React.forwardRef<HTMLDivElement, MenuTriggerItemProps>(
  function MenuTriggerItem({ startIcon, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${rest.className ?? ''}`}
        {...rest}
      >
        {startIcon}
        {children}
        <LuChevronRight />
      </div>
    );
  }
);

export const MenuRoot = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">{children}</div>
);
export const MenuSeparator = () => <div className="my-1 border-t border-gray-200" />;
export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  closeOnSelect?: boolean;
  value?: string;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(function MenuItem(
  { children, closeOnSelect, value, ...rest },
  ref
) {
  // You can use closeOnSelect and value for custom logic if needed
  return (
    <div
      ref={ref}
      data-close-on-select={closeOnSelect}
      data-value={value}
      className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${rest.className ?? ''}`}
      {...rest}
    >
      {children}
    </div>
  );
});
export const MenuItemText = ({ children }: { children: React.ReactNode }) => (
  <span>{children}</span>
);
export const MenuItemCommand = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-auto text-xs text-gray-400">{children}</span>
);
export const MenuTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>;
