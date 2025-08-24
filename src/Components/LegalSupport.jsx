import legal_frame from "../assets/legal-frame.png"
import person_icon from "../assets/person-icon.png"

const LegalSupport = () => {
  return (
    <div className="max-w-7xl md:w-4/5 w-9/10 mx-auto bg-[#F6F7F9] md:p-15 p-5 rounded-2xl">
      <div className="grid lg:grid-cols-3 md:gap-12 gap-6 items-stretch">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              Expert Legal Support When You Need It
            </h1>
            <p className="text-gray-600 mb-8 md:leading-relaxed">
              With Arambo's Advocate on Call, you get access to verified legal professionals who can review contracts,
              handle documentation, and guide you through every legal step of your real estate journey.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <button className="btn btn-primary px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 border-none rounded-lg">
              Talk to an Advocate
            </button>
          </div>
        </div>

        {/* Center Column - Flow Diagram */}
        <div className="bg-white p-4 rounded-xl">
          <img src={legal_frame} className="" />
          {/* Connection Text */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-700 font-medium">
              We connect you to legal pros who specialize in real estate transactions.
            </p>
          </div>
        </div>

        {/* Right Column - Statistics */}
        <div className="lg:col-span-1 space-y-6">
          <article className="bg-white text-left p-6 rounded-xl">
            {/* Legal Experts */}
            <div className="flex items-center justify-start">
              <div className="flex -space-x-2">
                <img
                  src={person_icon}
                  alt="Legal Expert"
                  className="w-8 rounded-full border-2 border-white"
                />
                <img
                  src={person_icon}
                  alt="Legal Expert"
                  className="w-8 rounded-full border-2 border-white"
                />
                <img
                  src={person_icon}
                  alt="Legal Expert"
                  className="w-8 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-sm font-semibold text-gray-900">21+ Legals Experts</span>
            </div>

            {/* Statistics */}
            <div className="">
              <div className="text-5xl font-bold text-blue-400 mb-2 number-gradient">85%</div>
              <div className="text-gray-400 font-medium">Fewer Legal Delays</div>
            </div>
          </article>

          {/* Info Card */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">One Call. Total Clarity.</h3>
            <p className="text-blue-100">
              Your advocate will guide you through title checks, sale agreements, and legal red flags—so you never sign
              anything unsure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalSupport
