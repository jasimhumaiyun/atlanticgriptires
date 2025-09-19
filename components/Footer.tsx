import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-primary/20">
      <div className="container-custom">
        <div className="text-center">
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="Atlantic Grip Tires"
              width={80}
              height={80}
              className="mx-auto opacity-80"
            />
          </div>
          <p className="text-gray-400 mb-2">
            &copy; 2024 Atlantic Grip Tires. All Rights Reserved.
          </p>
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
            Newfoundland&apos;s Premier Tire Specialists
          </p>
        </div>
      </div>
    </footer>
  )
}