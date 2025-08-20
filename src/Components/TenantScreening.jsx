import { CheckCircleIcon, DocumentTextIcon } from "@heroicons/react/24/solid"
import tenant_contract from "../assets/tentan-contract.png"

const TenantScreening = () => {
  const features = [
    "National ID & background checks",
    "Rental history reports",
    "Income verification",
    "Fast turnaround (24-48 hours)",
    "Private & secure handling",
  ]

  const aramboSupports = [
    "Verified Property Lawyers",
    "Help with Agreements, Disputes & Documentation",
    "Flat-Fee Consultations (No Hidden Charges)",
  ]

  function calcOpacity (index) {
    if (index == 1) return "opacity-[0.6]";
    if (index == 2) return "opacity-[0.3]";
  }

  return (
    <section className="py-20 bg-[#F6F7F9] mb-20">
            <div className="max-w-7xl w-4/5 mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-stretch">
        {/* Left Column - Image and Support Card */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={tenant_contract}
              alt="Professional hands writing documents"
              className="w-full object-cover"
            />

            {/* Tooltip */}
            <div className="absolute top-0 left-0">
              <div className="tooltip tooltip-right" data-tip="Support for disputes, NOC, POA & registration">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center gap-2 cursor-pointer">
                  <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Support for disputes,</div>
                    <div className="text-gray-600">NOC, POA & registration</div>
                  </div>
                </div>
              </div>
            </div>
        {/* Arambo Supports Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 pb-0 w-9/10 absolute bottom-5 left-[5%]">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Arambo Supports:</h3>
            <div className="space-y-2">
              {aramboSupports.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className={"w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 " + calcOpacity(index)} />
                  <span className={"text-gray-700 text-sm " + calcOpacity(index)}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          </div>

        {/* Right Column - Main Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900  mb-6">
              Screen Tenants with Confidence
            </h1>
            <p className="text-gray-600">
              Get peace of mind before handing over the keys. We verify ID, background history, and income so you can
              rent with full confidence.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="btn btn-primary btn-lg px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 border-none rounded-xl font-semibold text-lg">
              Verify a Tenant Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default TenantScreening;