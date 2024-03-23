import React, { useEffect, useRef } from "react";
import { Box, VStack, useColorModeValue } from "@chakra-ui/react";

const Matrix = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const ctx = container.getContext("2d");
    const width = container.width;
    const height = container.height;
    const fontSize = 32;
    const columns = width / fontSize / 2;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const glagoliticChars = "ⰰⰱⰲⰳⰴⰵⰶⰷⰸⰹⰺⰻⰼⰽⰾⰿⱀⱁⱂⱃⱄⱅⱆⱇⱈⱉⱊⱋⱌⱍⱎⱏⱐⱑⱒⱓⱔⱕⱖⱗⱘⱙⱚⱛⱜⱝⱞⱟⰀⰁⰂⰃⰄⰅⰆⰇⰈⰉⰊⰋⰌⰍⰎⰏⰐⰑⰒⰓⰔⰕⰖⰗⰘⰙⰚⰛⰜⰝⰞⰟ";
        const text = glagoliticChars[Math.floor(Math.random() * glagoliticChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <VStack minHeight="100vh" width="full" bg={useColorModeValue("gray.100", "gray.900")} spacing={0}>
      <Box width="full" height="full" position="relative">
        <canvas ref={containerRef} width={window.innerWidth * 2} height={window.innerHeight * 2} />
      </Box>
    </VStack>
  );
};

const Index = () => {
  return <Matrix />;
};

export default Index;
