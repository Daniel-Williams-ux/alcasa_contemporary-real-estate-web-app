import React from 'react';

function Privacy() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Welcome to the Privacy Policy page of Alcasa Contemporary. This policy outlines how we collect, use, and protect your personal information when you interact with our website and services. We are committed to safeguarding your privacy and ensuring that your data remains secure.
            </p>
            <p className="mt-6">
              By accessing and using our website, you agree to the terms outlined in this Privacy Policy. Should you have any questions or concerns, please feel free to reach out to us at <a href="mailto:privacy@alcasa.com" className="text-indigo-600 hover:underline">privacy@alcasa.com</a>.
            </p>

            <section className="mt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Collection</h2>
              <p>
                We collect various types of information from our users, including personal details such as your name, email address, and phone number. This information is gathered when you sign up for our newsletter, request information, or engage with our services.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Data</h2>
              <p>
                Your personal information is utilized to enhance your experience, communicate with you, and provide the services you request. Additionally, we may use your data for marketing purposes, such as sending newsletters and promotional materials tailored to your interests.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Sharing & Third Parties</h2>
              <p>
                We do not sell or share your personal information with third parties for marketing purposes. However, we may share your data with trusted partners and service providers who assist in operating our website and delivering services to you, always under strict confidentiality agreements.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Security of Your Information</h2>
              <p>
                Protecting your personal information is a priority for us. We implement industry-standard security measures to prevent unauthorized access, disclosure, alteration, or destruction of your data. Our systems are continuously monitored and updated to safeguard your privacy.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Policy Updates & Revisions</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. We encourage you to review this page regularly for any updates. Continued use of our website and services after such changes will constitute your acceptance of the revised terms.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p>
                If you have any questions or concerns regarding our Privacy Policy or how we handle your personal information, please do not hesitate to contact us at <a href="mailto:privacy@alcasa.com" className="text-indigo-600 hover:underline">privacy@alcasa.com</a>. We are committed to addressing your inquiries and ensuring your privacy rights are respected.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;