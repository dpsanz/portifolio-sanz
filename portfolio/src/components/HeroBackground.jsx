const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base: gradiente escuro nas bordas, vermelho no centro */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 40%, 
              rgba(230, 57, 70, 0.4) 0%, 
              rgba(181, 32, 46, 0.25) 30%, 
              rgba(60, 10, 15, 0.15) 60%, 
              rgba(10, 10, 10, 1) 100%
            )
          `,
        }}
      />

      {/* Highlight principal — mancha de luz vermelha grande */}
      <div
        className="absolute w-[700px] h-[500px] md:w-[900px] md:h-[650px] top-[15%] left-1/2 -translate-x-1/2"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.35) 0%, rgba(181, 32, 46, 0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Segundo highlight — mais à esquerda, tom mais claro */}
      <div
        className="absolute w-[500px] h-[400px] md:w-[600px] md:h-[500px] top-[10%] left-[25%] -translate-x-1/2"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 107, 107, 0.25) 0%, rgba(230, 57, 70, 0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Terceiro highlight — ponto de luz concentrado */}
      <div
        className="absolute w-[300px] h-[250px] md:w-[400px] md:h-[350px] top-[25%] left-[55%] -translate-x-1/2"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 150, 150, 0.2) 0%, rgba(230, 57, 70, 0.08) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Vinheta escura nas bordas */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 50% 50%, 
              transparent 30%, 
              rgba(10, 10, 10, 0.6) 70%, 
              rgba(10, 10, 10, 0.95) 100%
            )
          `,
        }}
      />

      {/* Borda inferior mais escura */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[35%]"
        style={{
          background: 'linear-gradient(to top, rgba(10, 10, 10, 1) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default HeroBackground;