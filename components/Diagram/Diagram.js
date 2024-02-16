import React from 'react';
import { useSpring, animated } from 'react-spring';

const DiagramContainer = ({ children }) => (
  <div className="flex flex-col items-center m-4">{children}</div>
);

const Arrow = ({ style }) => (
  <animated.div
    className="w-0 h-0 border-l-4 border-r-4 border-transparent m-2"
    style={style}
  />
);

const Bubble = ({ style, color, children }) => (
  <animated.div
    className={`bg-${color}-500 p-4 rounded text-white m-2`}
    style={style}
  >
    {children}
  </animated.div>
);

const Diagram = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateX(-8)' },
    to: { transform: 'translateX(0)' },
  });

  return (
    <DiagramContainer>
      <Arrow style={fadeIn} />
      <Bubble style={slideIn} color="indigo">
        Talent
      </Bubble>
      <Arrow style={fadeIn} />
      <Bubble style={slideIn} color="purple">
        Faciliteren
      </Bubble>
      <Arrow style={fadeIn} />
      <Bubble style={slideIn} color="blue">
        Will Hawkins Collectief
      </Bubble>
      <Arrow style={fadeIn} />
      <Bubble style={slideIn} color="teal">
        Ontwikkeling
      </Bubble>
      <Arrow style={fadeIn} />
      <Bubble style={slideIn} color="green">
        Partners
      </Bubble>
      <Arrow style={fadeIn} />
    </DiagramContainer>
  );
};

export default Diagram;
