import { quicksand } from '@/app/ui/fonts';

export default function HelloPage() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/girl.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/45"></div> 
      <div className="absolute top-10 w-full flex justify-center sm:justify-end sm:right-20">
        <h1
          className={`${quicksand.className} relative z-10 text-6xl sm:text-7xl text-red-400`}>
          hello world!
        </h1>
      </div>
    </div>
  );
}



