import Image from "next/image"
import Link from "next/link"

export default function HealthRecordsLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-blue-900">Mater EHR</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-blue-700 hover:text-blue-900 font-medium">
                Features
              </Link>
              <Link href="#how-it-works" className="text-blue-700 hover:text-blue-900 font-medium">
                How It Works
              </Link>
              <Link href="#testimonials" className="text-blue-700 hover:text-blue-900 font-medium">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-blue-700 hover:text-blue-900 font-medium">
                Pricing
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-blue-700 hover:text-blue-900 font-medium">Sign In</button>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Blockchain-Powered Healthcare
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6">
                Your Medical Records,
                <span className="text-blue-600"> Secured Forever</span>
              </h1>
              <p className="text-xl text-blue-700 mb-8 leading-relaxed">
                Revolutionary NFT-based system that gives you complete control over your health data while ensuring
                security, privacy, and seamless access for authorized healthcare providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">


                 {/* <Link href="#features" className="text-blue-700 hover:text-blue-900 font-medium">
                Features
              </Link> */}
                <Link   href="/dashboard" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg">
                  Start Your Journey
                </Link>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium text-lg">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-blue-700">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-blue-700">End-to-End Encrypted</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Medical+NFT+Dashboard"
                  alt="Mater EHR Dashboard"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Why Choose Mater EHR?</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Experience the future of healthcare records with blockchain technology that puts you in control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">NFT</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">NFT Digital Identity</h3>
              <p className="text-blue-700">
                Your unique NFT acts as a permanent digital ID card, providing secure access to your complete medical
                history
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">DATA</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Secure Off-Chain Storage</h3>
              <p className="text-blue-700">
                Medical data is encrypted and stored securely off-chain via IPFS, ensuring privacy while maintaining
                accessibility
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">SAFE</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Smart Contract Control</h3>
              <p className="text-blue-700">
                Automated permissions ensure only authorized healthcare providers can access your records with your
                consent
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">LOG</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Complete Audit Trail</h3>
              <p className="text-blue-700">
                Every access and update is permanently logged on the blockchain, creating an unchangeable history
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">YOU</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Patient-Controlled Access</h3>
              <p className="text-blue-700">
                You decide who can view your records and when, giving you complete control over your health data
              </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">LIVE</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Always Up-to-Date</h3>
              <p className="text-blue-700">
                Your NFT automatically points to the latest version of your health records, ensuring accuracy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">How Mater EHR Works</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Simple, secure, and transparent - here's how we revolutionize healthcare records
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Create Your NFT ID</h3>
              <p className="text-blue-700">
                Get your unique NFT that serves as your permanent digital medical ID card, linking to your secure health
                records
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Secure Data Storage</h3>
              <p className="text-blue-700">
                Your medical data is encrypted and stored off-chain via IPFS, while your NFT maintains the secure
                reference link
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Control & Track</h3>
              <p className="text-blue-700">
                Grant access to healthcare providers as needed, with every interaction permanently logged on the
                blockchain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-blue-700">See what doctors and patients are saying about Mater EHR</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-blue-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-blue-700 mb-4">
                "Mater EHR has revolutionized how I access patient records. The security and transparency give both me
                and my patients complete confidence."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">DR</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Dr. Sarah Johnson</p>
                  <p className="text-blue-600 text-sm">Cardiologist</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-blue-700 mb-4">
                "Finally, I have complete control over my medical records. The peace of mind knowing my data is secure
                is invaluable."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Michael Rodriguez</p>
                  <p className="text-blue-600 text-sm">Patient</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-blue-700 mb-4">
                "The audit trail feature is incredible. We can track every interaction with patient records, ensuring
                complete compliance."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">DR</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Dr. Emily Chen</p>
                  <p className="text-blue-600 text-sm">Hospital Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-blue-700">Flexible pricing for individuals and healthcare organizations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-blue-200 rounded-lg overflow-hidden">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Personal</h3>
                <p className="text-blue-700 mb-4">For individual patients</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-900">$9</span>
                  <span className="text-blue-700">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Personal NFT Medical ID
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Secure Record Storage
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Access Control
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Basic Audit Trail
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-600 rounded-lg overflow-hidden relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Professional</h3>
                <p className="text-blue-700 mb-4">For healthcare providers</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-900">$49</span>
                  <span className="text-blue-700">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Up to 100 Patient Records
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Advanced Analytics
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Priority Support
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Complete Audit Trail
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-lg overflow-hidden">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Enterprise</h3>
                <p className="text-blue-700 mb-4">For large organizations</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Unlimited Records
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Custom Integration
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    24/7 Support
                  </li>
                  <li className="flex items-center text-blue-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    Compliance Assistance
                  </li>
                </ul>
                <button className="w-full py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Secure Your Health Records?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients and healthcare providers who trust Mater EHR with their most important data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium text-lg">
              Start Your Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold">Mater EHR</span>
              </div>
              <p className="text-blue-200">
                Revolutionizing healthcare records with blockchain technology and NFT-powered security.
              </p>
            </div> */}

            {/* <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    HIPAA Compliance
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Mater EHR. All rights reserved. | Securing healthcare data with blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
