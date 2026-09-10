import { useState, useRef, useEffect } from "react";

export function ScrollDetectionExample() {
  const [hasPassedChildBottom, setHasPassedChildBottom] = useState(false);

  const containerRef = useRef(null);
  const targetChildRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const targetChild = targetChildRef.current;

    if (!container || !targetChild) return;

    const handleScroll = () => {
      // 1. Calculate bottom edge of the child element
      const childBottomPosition =
        targetChild.offsetTop + targetChild.offsetHeight;
      console.log("targetChild.offsetTop:", targetChild.offsetTop);
      console.log("targetChild.offsetHeight:", targetChild.offsetHeight);

      // 2. Calculate bottom edge of the viewable container box
      const viewableBoxBottom = container.scrollTop + container.clientHeight;
      console.log("scrollTop:", container.scrollTop);
      console.log("clientHeight:", container.clientHeight);

      // 3. Check if the bottom edge of the viewable box has reached/passed the child
      const isReached = viewableBoxBottom >= childBottomPosition;

      setHasPassedChildBottom((prev) =>
        prev !== isReached ? isReached : prev,
      );
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check in case it's already visible on load
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflowY: "hidden",
      }}
    >
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        style={{ height: "100%", overflowY: "auto", padding: "16px" }}
      >
        <div style={{ height: "200px", background: "#e5e7eb" }}>
          Top Spacer Content
        </div>

        {/* Target Child Element */}
        <div
          ref={targetChildRef}
          style={{
            height: "250px",
            background: "#3b82f6",
            color: "white",
            padding: "12px",
            margin: "20px 0",
          }}
        >
          <h3>Target Child Element</h3>
          <p>
            Scroll until the bottom of THIS box hits the bottom of the viewable
            area.
          </p>
        </div>

        <div style={{ height: "800px", background: "#f3f4f6" }}>
          Bottom Spacer Content
        </div>
      </div>

      {/* Triggered Action Bar */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: hasPassedChildBottom
            ? "translate(-50%, 0)"
            : "translate(-50%, 100px)",
          //opacity: hasPassedChildBottom ? 1 : 0,
          //transition: "transform 0.3s ease, opacity 0.3s ease",
          transition: "transform 0.3s ease",
          backgroundColor: "#0f172a",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
        }}
      >
        Bottom of Target Child Reached!
      </div>
    </div>
  );
}

function App() {
  return <ScrollDetectionExample />;
}

export default App;
