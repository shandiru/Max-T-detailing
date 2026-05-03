import React from "react";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

export default function PlateComparison() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          Road Legal vs Show Plates
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT CARD - ROAD LEGAL */}
          <div className="border border-yellow-500 rounded-xl p-8">
            
            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
              <FaCheck className="text-yellow-400 text-xl" />
              <h3 className="text-xl font-semibold text-yellow-400">
                Road Legal Plates
              </h3>
            </div>

            <p className="text-gray-300 mb-6">
              DVLA compliant. Safe for daily driving on UK roads.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                DVLA compliant
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Daily driving approved
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Standard and custom formats
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Ceramic coated protection
              </li>
            </ul>
          </div>

          {/* RIGHT CARD - SHOW PLATES */}
          <div className="border border-gray-700 rounded-xl p-8">
            
            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
              <FaExclamationTriangle className="text-yellow-400 text-xl" />
              <h3 className="text-xl font-semibold">
                Show Plates
              </h3>
            </div>

            <p className="text-gray-300 mb-6">
              Custom designs for off-road vehicles. Not street legal.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Off-road use only
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Custom designs available
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Show events and displays
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Premium finish options
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}