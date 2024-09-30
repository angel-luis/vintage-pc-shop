export default function NoMatchPage() {
  return (
    <div className="mt-8 flex flex-col gap-2 items-center">
      <img src="/icons/blue-screen.png" className="w-32 h-32" />
      <h1 className="antialiased font-display text-4xl font-semibold tracking-wide">
        404 - Page Not Found!
      </h1>
    </div>
  );
}
