import Image from 'next/image';

import Logo from '../public/spectrum-logo.png';

export function Footer() {
  return (
    <footer className="flex items-center justify-center py-8 text-sm text-slate-500">
      <Image src={Logo} alt="Spectrum Life logo" width={200} height={50} />
    </footer>
  );
}
