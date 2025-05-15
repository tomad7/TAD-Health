import React, { useState } from "react";

const modules = ["Steps", "Sleep", "Exercise", "Meditation", "Reading", "Goals", "Food"];

const ModuleToggle = () => {
  const [activeModules, setActiveModules] = useState(modules);

  const toggleModule = (mod) => {
    setActiveModules((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Toggle Modules</h2>
      <div className="flex flex-wrap gap-2">
        {modules.map((mod) => (
          <button
            key={mod}
            onClick={() => toggleModule(mod)}
            className={\`px-4 py-1 border rounded-full \${activeModules.includes(mod) ? "bg-blue-500 text-white" : "bg-white border-gray-300"}\`}
          >
            {mod}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleToggle;