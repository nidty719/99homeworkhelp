'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-700 mb-8 inline-block">
          ← Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                99 Homework Help (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our tutoring services and website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Academic information (subjects, grade level)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">2.2 Usage Information</h3>
              <p className="text-gray-600 mb-4">
                We automatically collect certain information about your device and how you interact with our services, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Usage patterns and preferences</li>
                <li>Session duration and timing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Provide and improve our tutoring services</li>
                <li>Process your registration and maintain your account</li>
                <li>Send important service updates and announcements</li>
                <li>Communicate about tutoring sessions and educational resources</li>
                <li>Send promotional emails about new features or services (with your consent)</li>
                <li>Analyze and improve our website performance</li>
                <li>Prevent fraud and ensure platform security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Email Communications</h2>
              <p className="text-gray-600 mb-4">
                We use Amazon SES (Simple Email Service) to send emails. By providing your email address, you consent to receive:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Service-related announcements</li>
                <li>Tutoring session confirmations and reminders</li>
                <li>Educational resources and materials</li>
                <li>Marketing communications (which you can opt-out of at any time)</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Each email we send includes an unsubscribe link. You can opt-out of marketing emails at any time while continuing to receive essential service-related communications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information, including encryption, secure servers, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your account and associated data at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-600">
                Our services are intended for users aged 13 and older. We don&apos;t knowingly collect information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-gray-600">
                <p>99 Homework Help</p>
                <p>Email: privacy@99homeworkhelp.com</p>
                <p>Phone: +1 847-262-4783</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 