import { FaBriefcase, FaUserShield, FaLink } from "react-icons/fa";

const GettingStarted = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-100 via-white to-purple-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-md p-10 max-w-6xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Getting Started: <span className="text-purple-600">What You'll Need</span>
        </h1>
        <p className="text-gray-500 mt-3 text-base md:text-lg">
          Prepare For Seamless Integration And Unlock The Full Potential Of Your Social Media Automation.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-purple-500 text-4xl bg-purple-100 rounded-xl p-4 mb-4">
              <FaBriefcase />
            </div>
            <h3 className="font-semibold text-lg">Facebook Business Account</h3>
            <p className="text-gray-500 mt-2">
              Ensure your business has an active Facebook Business Account, which serves as the foundation for Meta Business Suite.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-cyan-500 text-4xl bg-cyan-100 rounded-xl p-4 mb-4">
              <FaUserShield />
            </div>
            <h3 className="font-semibold text-lg">Admin Access</h3>
            <p className="text-gray-500 mt-2">
              You'll need Admin access to both your Facebook Page and your Instagram Business Account to link them effectively.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-pink-500 text-4xl bg-pink-100 rounded-xl p-4 mb-4">
              <FaLink />
            </div>
            <h3 className="font-semibold text-lg">Linked Accounts</h3>
            <p className="text-gray-500 mt-2">
              Verify that your Instagram and Facebook accounts are properly linked under Meta Business Suite for smooth automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
