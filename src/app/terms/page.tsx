'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using 99 Homework Help&apos;s services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                99 Homework Help provides online tutoring services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>One-on-one tutoring sessions</li>
                <li>Homework assistance</li>
                <li>Study resources and materials</li>
                <li>Academic guidance and support</li>
                <li>Test preparation assistance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Provide accurate and complete information when creating an account</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the services for legitimate educational purposes only</li>
                <li>Not share account access with others</li>
                <li>Not engage in any academic dishonesty or cheating</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payments</h2>
              <p className="text-gray-600 mb-4">
                4.1 Subscription Terms:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Monthly subscription fee of $29</li>
                <li>Automatic renewal unless cancelled</li>
                <li>Pro-rated refunds for unused portions upon cancellation</li>
              </ul>
              <p className="text-gray-600 mb-4">
                4.2 Payment Processing:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Secure payment processing through trusted providers</li>
                <li>Automatic monthly billing</li>
                <li>Immediate access upon payment confirmation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Tutoring Sessions</h2>
              <p className="text-gray-600 mb-4">
                5.1 Session Guidelines:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Sessions must be scheduled in advance</li>
                <li>24-hour cancellation notice required</li>
                <li>Students must come prepared with specific questions or topics</li>
                <li>Tutors will provide guidance but not complete assignments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Academic Integrity</h2>
              <p className="text-gray-600">
                Our services are designed to help students learn and understand academic concepts. We strictly prohibit:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Requesting solutions to graded assignments</li>
                <li>Using our services to cheat on exams</li>
                <li>Sharing copyrighted materials without permission</li>
                <li>Misrepresenting others&apos; work as your own</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="text-gray-600">
                We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or misuse our services. Users may terminate their subscription at any time through their account settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-600">
                Our services are provided &ldquo;as is&rdquo; without any warranty of any kind. While we strive for excellence, we cannot guarantee specific academic outcomes or results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600">
                99 Homework Help shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 text-gray-600">
                <p>99 Homework Help</p>
                <p>Email: terms@99homeworkhelp.com</p>
                <p>Phone: +1 847-262-4783</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 