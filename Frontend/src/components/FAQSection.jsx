import React, { useState } from "react";

function FAQSection() {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Our standard delivery time is 3-5 business days within Pakistan. International orders may take 7-12 business days.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery (COD), Bank Transfer, and all major debit/credit cards.",
    },
    {
      question: "How do I choose the right size?",
      answer: "You can refer to our size guide available on each product page. Our shirts are true to size, but if you’re unsure, we recommend ordering one size up for comfort.",
    },
    {
      question: "What is your return policy?",
      answer: "You can return or exchange items within 7 days of receiving your order, provided they are unworn and in original condition.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach us anytime at support@masafir.com or through our Contact Us page.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl px-6 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
