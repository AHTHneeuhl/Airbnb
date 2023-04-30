"use client";

import { useEffect, useState } from "react";

type TProps = {
  children: React.ReactNode;
};

const ClientOnly: React.FC<TProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
