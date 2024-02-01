import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function signIn() {
  return (
    <div key="1" className="min-h-screen flex items-center justify-center bg-[#e0f2fe]">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-500">
          <XIcon className="h-6 w-6" />
        </button>

        <Image
          alt="Placeholder image"
          className="object-cover w-full h-32 rounded-lg"
          height={300}
          width={300}
          src="https://unsplash.com/photos/aerial-photography-of-beach-duvq92-VCZ4"
        />
        <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              E-mail Address
            </label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <Input id="password" placeholder="••••••••" type="password" />
          </div>
          <div className="flex items-center justify-between mt-6">
          <Button><a href='../signup'> Sign Up</a></Button>
            <Button variant="ghost"><a href='../signin'> Sign In</a></Button>
          </div>
        </form>
      </div>
    </div>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
