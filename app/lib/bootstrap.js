"use client";

import { useEffect } from 'react';

const BootstrapLoader = () => {
  useEffect(() => {
    // Import Bootstrap JavaScript when the component mounts
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; // No need to render anything
};

export default BootstrapLoader;
