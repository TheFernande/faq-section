import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger, AccordionContent } from "./ui/accordion";

interface TFaqItem {
  position: number;
  title: string;
  content: string;
  isLast?: boolean;
}

const FaqItem = (props: TFaqItem) => {
  const { position, title, content, isLast = false } = props;

  return (
    <>
      <Accordion.Root
        className='h-fit w-full'
        type='single'
        defaultValue={`item-${position}`}
        collapsible
      >
        <Accordion.Item value={`item-${position}`}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </Accordion.Item>
      </Accordion.Root>

      {isLast ? null : <hr className='my-7 h-[1px] border-neutral-300' />}
    </>
  );
};

export default FaqItem;
