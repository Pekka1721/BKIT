import HomeImage from '../../assets/HomeImageNew.png'
export default function Home() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 ">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-400),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl py-32 sm:py-30 lg:py-30 lg:pb-46">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
             B<span className="text-indigo-600">K</span>IT SOLUTIONS
            </h2>
              <figure className="mt-2">
             <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
          
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
             “Empowering careers through innovation,
With expert-led training programs,
Unlocking job opportunities that matter,
Driven by the power of AI.”
            </p>
            </blockquote>
            </figure>
          </div>
          <div className="mx-auto max-w-xl lg:max-w-xl justify-center">
        <img
          alt=""
          src={HomeImage}
          className="mx-auto"
        />
      </div>
        </div>
    </section>
  )
}
