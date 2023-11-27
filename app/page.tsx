import { TwDidService } from "@tw-did/core";

export default function Home() {
  const handleClick = async () => {
    const service = new TwDidService("http://localhost:3000");
    const msg = await service.selectCredential(window);
    console.log(msg);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>Select</button>
    </main>
  );
}
