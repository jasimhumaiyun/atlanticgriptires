import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#7F1D1D] border-t border-[#991B1B]">
      <div className="container-custom">
        <div className="text-center">
          <div className="mb-6">
            <Image
              src="/new1.png"
              alt="Atlantic Grip Tires"
              width={80}
              height={80}
              className="mx-auto opacity-80"
            />
          </div>
          <p className="text-white mb-2">
            &copy; 2024 Atlantic Grip Tires. All Rights Reserved.
          </p>
          <p className="text-white font-semibold uppercase tracking-[0.2em] text-sm">
            Serving Individual & Commercial Clients Across NL
          </p>
          <p className="text-white/70 text-xs mt-6">
            Website designed by Jasim Humaiyun • jasim.humaiyun1@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}