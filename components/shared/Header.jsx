import Image from "next/image"

const Header = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src={'/header.png'}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Be Your Own Voice</h2>

        <p className="mt-4 text-gray-600">
      Continuous innovation in voting technology drives improvements in the voting experience.
        </p>

        <a
          href="/voting"
          className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Start Voting
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Header