'use client';

import * as React from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import { cn } from '@/lib/utils';

const SelectNormal = Select;

const SelectGroup = Select.Group;

const SelectValue = Select.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectNormal.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectNormal.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectNormal.Trigger
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectNormal.Icon asChild>
      <ChevronDown className='h-4 w-4 opacity-50' />
    </SelectNormal.Icon>
  </SelectNormal.Trigger>
));
SelectTrigger.displayName = SelectNormal.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectNormal.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectNormal.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectNormal.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUp className='h-4 w-4' />
  </SelectNormal.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectNormal.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectNormal.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectNormal.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectNormal.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDown className='h-4 w-4' />
  </SelectNormal.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectNormal.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectNormal.Content>,
  React.ComponentPropsWithoutRef<typeof SelectNormal.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectNormal.Portal>
    <SelectNormal.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectNormal.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectNormal.Viewport>
      <SelectScrollDownButton />
    </SelectNormal.Content>
  </SelectNormal.Portal>
));
SelectContent.displayName = SelectNormal.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectNormal.Label>,
  React.ComponentPropsWithoutRef<typeof SelectNormal.Label>
>(({ className, ...props }, ref) => (
  <SelectNormal.Label ref={ref} className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...props} />
));
SelectLabel.displayName = SelectNormal.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectNormal.Item>,
  React.ComponentPropsWithoutRef<typeof SelectNormal.Item>
>(({ className, children, ...props }, ref) => (
  <SelectNormal.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <SelectNormal.ItemIndicator>
        <Check className='h-4 w-4' />
      </SelectNormal.ItemIndicator>
    </span>

    <SelectNormal.ItemText>{children}</SelectNormal.ItemText>
  </SelectNormal.Item>
));
SelectItem.displayName = SelectNormal.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectNormal.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectNormal.Separator>
>(({ className, ...props }, ref) => (
  <SelectNormal.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
));
SelectSeparator.displayName = SelectNormal.Separator.displayName;

export {
  SelectNormal,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton
};
