import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import IconFaqClose from "../icons/icon-faq-close";
import IconFaqOpen from "../icons/icon-faq-open";

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {
  children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className='flex'>
      <Accordion.Trigger
        className={classNames(
          "group flex h-fit flex-1 cursor-pointer items-start justify-between bg-white text-start text-lg font-medium text-neutral-900 outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div className='relative flex h-6 w-12 items-start justify-center pt-1'>
          <IconFaqClose
            aria-hidden
            className='hidden size-6 group-data-[state=open]:block'
          />
          <IconFaqOpen
            aria-hidden
            className='block size-6 group-data-[state=open]:hidden'
          />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof Accordion.Content> {
  children: React.ReactNode;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden bg-white text-base text-neutral-600",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className='pr-10 pt-2'>{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export { AccordionTrigger, AccordionContent };
