export default function AboutPage() {
  return (
    <div className="mt-8 flex flex-col gap-2 items-center max-w-prose mx-auto">
      <h1 className="antialiased font-display text-4xl font-semibold tracking-wide">
        About
      </h1>
      <p className="text-center text-lg">
        This is a simple e-commerce website built with React, Vite, and
        Firebase.
      </p>
      <p className="text-center text-lg">
        If you like it, please leave a star ⭐️ on{" "}
        <a
          href="https://github.com/angel-luis/vintage-pc-shop"
          className="text-teal-500 hover:underline"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
