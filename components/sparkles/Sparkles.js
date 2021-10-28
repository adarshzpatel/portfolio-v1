
import React from "react";
import SparkleInstance from "./SparkleInstance";
import { generateSparkle, range } from "./sparkleUtils";
import useRandomInterval from "./useRandomInterval";


//   Main Component
const Sparkles = ({ children }) => {
    const [sparkles, setSparkles] = React.useState(()=>{
        return range(3).map(()=> generateSparkle());
    });
   
    // Custom Hook
    useRandomInterval(
        () => {
            const now = Date.now();
            // Create a new sparkle
            const sparkle = generateSparkle();
            // Clean up any "expired" sparkles
            const nextSparkles = sparkles.filter((sparkle) => {
                const delta = now - sparkle.createdAt;
                return delta < 1000;
            });
            // Include our new sparkle
            nextSparkles.push(sparkle);
            // Make it so!
            setSparkles(nextSparkles);
        },
        50,
        500
    );

    return (
        <span className="relative inline-block">
            {sparkles.map((sparkle) => (
                <SparkleInstance
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
            <strong className="relative z-[1] font-bold">{children}</strong>
        </span>
    );
};

export default Sparkles;
