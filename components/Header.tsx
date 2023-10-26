import Image from 'next/image';
import Link from 'next/link';

export default function Header({ photo }: { photo?: string | undefined }) {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/imageIcon.png"
          className="sm:w-10 sm:h-10 w-7 h-7"
          width={20}
          height={20}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          restorePhotos.io
        </h1>
      </Link>
      {photo ? (
        <Image
          alt="Profile picture"
          src={photo}
          className="w-10 rounded-full"
          width={32}
          height={28}
        />
      ) : (
        <div className="flex space-x-6">
          <Link
            href="/"
            className="border-r border-gray-300 pr-4 space-x-2 hover:text-blue-400 transition hidden sm:flex"
          >
            <p className="font-medium text-base">Home</p>
          </Link>
          <Link
            href="/restore"
            className="border-gray-300 pr-4 space-x-2 hover:text-blue-400 transition hidden sm:flex"
          >
            <p className="font-medium text-base">Restore</p>
          </Link>
        </div>
      )}
    </header>
  );
}
