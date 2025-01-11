import Link from "next/link";
import FaqItem from "./faq-item";
import faqContentData from "data/faq-content";

export default function FaqSection() {
  return (
    // Main section block
    <section className='gfe-gradient-container'>
      {/* Heading block */}
      <div className='flex flex-col items-center gap-5 text-center'>
        <h1 className='text-3xl font-semibold text-neutral-900 md:text-5xl'>
          Frequently&nbsp;asked questions
        </h1>
        <span className='block text-lg text-neutral-600 md:text-xl lg:hidden'>
          Get all your questions answered
        </span>
        <span className='hidden text-lg text-neutral-600 md:text-xl lg:block'>
          Choose any questions you need
        </span>
      </div>

      {/* FAQ Section block */}
      <div className='faq-parent-container'>
        {/* FAQs content block */}
        <div className='faq-content-container'>
          {/* FAQ content goes here */}
          {faqContentData.map((faqItem, index) => (
            <FaqItem
              key={`faq-item-${faqItem.position}`}
              position={faqItem.position}
              title={faqItem.title}
              content={faqItem.content}
              isLast={index === faqContentData.length - 1}
            />
          ))}
        </div>

        {/* CTA block */}
        <div className='mt-7 flex h-fit w-full flex-col items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] md:flex-row md:p-8'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-pretty text-xl font-semibold text-neutral-900'>
              Can&apos;t find the answer you&apos;re looking for?
            </h2>
            <p className='w-full text-wrap text-start'>
              <span className='w-fit text-base font-normal text-neutral-600'>
                Reach out to&nbsp;our{" "}
              </span>
              <Link
                href={"mailto:support@mail.com"}
                className='text-indigo-700'
              >
                customer&nbsp;support {""}
              </Link>
              <span className='w-full text-base font-normal text-neutral-600'>{""}team.</span>
            </p>
          </div>
          <button className='h-fit w-full rounded bg-indigo-700 px-5 py-3 text-base font-medium text-white md:max-w-[138px]'>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
