export const NaoEncontrado = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center'
    }}>
      <h1>Página não encontrada.</h1>
      <span style={{ fontSize: '10rem', color: '#666666' }}>404</span>
    </div>
  );
}
