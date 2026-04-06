import './ui/global.css'; //cargamos estilo global estilo global
import { montserrat } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        Esto es parte del layout
        <h1>Este titulazo fijate nomas wow increible</h1>
        <div style= {{border: '1px solid #000'}}> </div>
        {children}
        <footer className='py=10 flex justify-center items-center'> 
          hecho con destrucción y caos más un toque de maldad
        </footer>
        </body>
    </html>
  );
}
