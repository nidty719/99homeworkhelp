'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AcademicCapIcon, UserGroupIcon, ClockIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600">99 Homework Help</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
            </div>
            <Link href="/signup">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="text-left max-w-xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-bold text-gray-900 mb-6"
              >
                Your Personal Learning Journey{' '}
                <span className="text-[#6366F1]">Starts Here</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Join our community of expert tutors ready to help you excel in your studies.
                Get unlimited access to personalized help for just $29/month.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/signup">
                  <button className="bg-[#6366F1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5558E6] transition-colors">
                    Start Your Free Trial
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Main Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="col-span-2 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div className="relative h-[400px]">
                    <Image
                      src="/images/tutor.jpeg"
                      alt="One-on-one tutoring session"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-3xl"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Secondary Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative h-[200px] rounded-3xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/group.jpeg"
                    alt="Group study session"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-3xl"
                  />
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative h-[200px] bg-[#6366F1]/10 rounded-3xl"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#6366F1] text-center">
                      <div className="text-4xl font-bold mb-2">24/7</div>
                      <div className="text-sm">Expert Support</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose 99 Homework Help?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: AcademicCapIcon,
                title: "Expert Tutors",
                description: "Qualified tutors from top universities"
              },
              {
                icon: UserGroupIcon,
                title: "1-on-1 Support",
                description: "Personalized attention when you need it"
              },
              {
                icon: ClockIcon,
                title: "24/7 Availability",
                description: "Get help anytime, anywhere"
              },
              {
                icon: ChatBubbleBottomCenterTextIcon,
                title: "All Subjects",
                description: "From Math to Literature and everything in between"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of high school students who are already excelling with 99 Homework Help
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-600">S</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Sarah M.</h3>
                  <p className="text-sm text-gray-500">Senior, AP Calculus Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;I was struggling with AP Calculus and worried about my upcoming exam. The tutors here helped me understand complex concepts through clear explanations and practice problems. I ended up scoring a 5 on my AP exam!&rdquo;
              </p>
              <div className="mt-4 flex text-[#6366F1]">
                ★★★★★
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-600">J</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">James R.</h3>
                  <p className="text-sm text-gray-500">Junior, Honors Chemistry</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;The 24/7 availability is a game-changer. I can get help with my chemistry homework late at night when I&apos;m stuck on a problem. The tutors are patient and really know their stuff. My grades have improved significantly!&rdquo;
              </p>
              <div className="mt-4 flex text-[#6366F1]">
                ★★★★★
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-600">E</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Emma L.</h3>
                  <p className="text-sm text-gray-500">Junior, English & History</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;I love how I can get help with both my English essays and History research papers. The tutors don&apos;t just correct my work - they teach me how to improve my writing and analytical skills. It&apos;s like having a personal mentor!&rdquo;
              </p>
              <div className="mt-4 flex text-[#6366F1]">
                ★★★★★
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/signup">
              <button className="bg-[#6366F1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5558E6] transition-colors">
                Join Our Community
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Affordable Pricing</h2>
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">Monthly Membership</h3>
                <div className="text-center mb-4">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited tutoring sessions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 access to tutors
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    All subjects covered
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Study resources library
                  </li>
                </ul>
                <Link href="/signup">
                  <button className="w-full bg-[#6366F1] text-white py-3 rounded-lg font-semibold hover:bg-[#5558E6] transition-colors">
                    Get Started Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Excel in Your Studies?</h2>
            <p className="text-lg mb-8 opacity-90">Join thousands of students already improving their grades with 99 Homework Help</p>
            <Link href="/signup">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Free Trial Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <div className="flex justify-center space-x-4 mb-4">
              <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-indigo-600 transition-colors">
                Terms of Service
              </Link>
            </div>
            <p>© 2024 99 Homework Help. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
