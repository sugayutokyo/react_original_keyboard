import { useState } from 'react';
import OriginalKeyboard from '../component/OriginalKeyboard';

export default function Home() {
  const [name, setName] = useState('');
  const [isKeyboard, setIsKeyboard] = useState(false);
  console.log(name);

  return (
    <div className="mx-auto w-full max-w-xs">
      <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username">
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
            value={name}
            onChange={e => setName(e.target.value)}
            readOnly
            onClick={() => setIsKeyboard(true)}
          />
        </div>
      </form>
      {isKeyboard && <OriginalKeyboard />}
    </div>
  );
}
