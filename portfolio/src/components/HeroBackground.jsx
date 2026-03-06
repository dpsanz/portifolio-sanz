const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base escura */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Gradiente ENORME — diagonal, cobre 70-80% da tela */}
      <div
        className="absolute"
        style={{
          width: '250%',
          height: '250%',
          top: '-75%',
          left: '-75%',
          background: `
            radial-gradient(ellipse 50% 45% at 55% 55%, 
              rgba(200, 30, 45, 0.5) 0%, 
              rgba(160, 22, 38, 0.35) 20%, 
              rgba(120, 15, 28, 0.2) 40%, 
              rgba(60, 8, 15, 0.08) 60%, 
              transparent 75%
            )
          `,
          transform: 'rotate(-12deg)',
        }}
      />

      {/* Segunda camada — reforça o centro com mais intensidade */}
      <div
        className="absolute"
        style={{
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
          background: `
            radial-gradient(ellipse 45% 40% at 52% 50%, 
              rgba(180, 25, 42, 0.4) 0%, 
              rgba(130, 18, 32, 0.2) 30%, 
              rgba(80, 10, 20, 0.08) 55%, 
              transparent 70%
            )
          `,
          transform: 'rotate(-12deg)',
          filter: 'blur(30px)',
        }}
      />

      {/* Terceira camada — glow quente espalhado */}
      <div
        className="absolute"
        style={{
          width: '180%',
          height: '180%',
          top: '-40%',
          left: '-40%',
          background: `
            radial-gradient(ellipse 55% 50% at 50% 48%, 
              rgba(150, 20, 35, 0.3) 0%, 
              rgba(100, 12, 25, 0.15) 35%, 
              transparent 65%
            )
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* Vinheta leve — só nas bordas extremas */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 80% at 50% 45%, 
              transparent 40%, 
              rgba(5, 5, 5, 0.4) 65%, 
              rgba(5, 5, 5, 0.8) 85%, 
              rgba(5, 5, 5, 1) 100%
            )
          `,
        }}
      />

      {/* Borda inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[25%]"
        style={{
          background: 'linear-gradient(to top, rgba(5, 5, 5, 0.9) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default HeroBackground;