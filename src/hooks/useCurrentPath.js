import React from "react";
/**
 *
 * @param {string} path
 */

const isCurrent = (path) => path === window.location.pathname;
export default function useCurrentPath(path) {
  const [isCurrentPath, setIsCurrentPath] = React.useState(isCurrent(path));

  React.useEffect(() => {
    const onLocationChange = () => setIsCurrentPath(isCurrent(path));
    window.addEventListener("navigate", onLocationChange);
    return () => window.removeEventListener("navigate", onLocationChange);
  }, [path]);
  return isCurrentPath;
}
