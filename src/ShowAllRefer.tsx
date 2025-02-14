import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface Referral {
  id: number;
  referrerName: string;
  referrerEmail: string;
  referredName: string;
  referredEmail: string;
  course: string;
  createdAt: string;
}

export default function ShowAllRefer() {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://accredian-backtend-task.onrender.com/api/get/referrals")
      .then((response) => response.json())
      .then((data) => {
        setReferrals(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch referrals");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-blue-50 to-indigo-50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-2xl sm:text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Referral Records
          </motion.h1>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            } shadow-lg hover:shadow-xl`}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Cards Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {referrals.map((referral, index) => (
            <motion.div
              key={referral.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                darkMode 
                  ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" 
                  : "bg-white/80 hover:bg-white border border-gray-200"
              }`}
            >
              <div className="p-6 space-y-4">
                {[
                  { label: "Referral Name", value: referral.referrerName },
                  { label: "Referral Email", value: referral.referrerEmail },
                  { label: "Referred User Name", value: referral.referredName },
                  { label: "Referred User Email", value: referral.referredEmail },
                  { label: "Course", value: referral.course },
                  { label: "Date", value: referral.createdAt }
                ].map((field, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-1"
                  >
                    <p className={`text-sm font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {field.label}
                    </p>
                    <p className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}>
                      {field.value}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className={`h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}