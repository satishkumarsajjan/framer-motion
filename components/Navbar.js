import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='textx-2xl font-medium z-20 relative my-9 mx-9 p-1 '>
      <ul className='flex gap-12 justify-start'>
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/contact'}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
