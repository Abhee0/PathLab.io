import TestCard from './TestCard';
import { Droplet, Activity, Heart, Droplets, ThermometerSnowflake, TestTube, Baby, FlaskConical, Stethoscope, Microscope, Pill } from 'lucide-react';

export default function TestsSection() {
  const tests = [
    {
      icon: <Droplet className="w-8 h-8 text-blue-600" />,
      name: "CBC (Complete Blood Count)",
      description: "Comprehensive blood cell analysis for overall health assessment"
    },
    {
      icon: <Activity className="w-8 h-8 text-teal-600" />,
      name: "Blood Sugar (FBS / PPBS / RBS)",
      description: "Fasting, post-meal, and random blood glucose level testing"
    },
    {
      icon: <Droplets className="w-8 h-8 text-red-600" />,
      name: "HbA1c",
      description: "Long-term blood sugar control monitoring for diabetes management"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      name: "Lipid Profile",
      description: "Cholesterol and triglyceride levels for heart health"
    },
    {
      icon: <Pill className="w-8 h-8 text-amber-600" />,
      name: "Liver Function Test (LFT)",
      description: "Assessment of liver enzymes and overall liver health"
    },
    {
      icon: <TestTube className="w-8 h-8 text-purple-600" />,
      name: "Kidney Function Test (KFT)",
      description: "Evaluation of kidney performance and function"
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-yellow-600" />,
      name: "Urine Routine",
      description: "Complete urine analysis for kidney and urinary tract health"
    },
    {
      icon: <ThermometerSnowflake className="w-8 h-8 text-cyan-600" />,
      name: "Thyroid Test (T3, T4, TSH)",
      description: "Comprehensive thyroid hormone level assessment"
    },
    {
      icon: <Microscope className="w-8 h-8 text-indigo-600" />,
      name: "Semen Analysis",
      description: "Male fertility and reproductive health evaluation"
    },
    {
      icon: <Baby className="w-8 h-8 text-rose-600" />,
      name: "Pregnancy Test",
      description: "Accurate early pregnancy detection test"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-700" />,
      name: "Other Routine & Special Tests",
      description: "Wide range of diagnostic tests available on request"
    }
  ];

  return (
    <section id="tests" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">Tests & Services</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive diagnostic testing with accurate results and professional care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tests.map((test, index) => (
            <TestCard key={index} {...test} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-lg italic">
            We offer all routine and special pathology tests with accurate and timely reporting.
          </p>
        </div>
      </div>
    </section>
  );
}
