import './ui/global.css'; //cargamos estilo global estilo global

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Este titulazo fijate nomas wow increible</h1>
        <div style= {{border: '1px solid #000'}}> </div>
        {children}
        </body>
    </html>
  );
}
