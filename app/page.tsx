'use client';
import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [animalName, setAnimalName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleOnSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    if (count >= 10) {
      alert('You have reached the maximum number of submissions.');
      return;
    }

    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: animalName }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      setCount(count + 1);
      setResult(data.result);
      setIsLoading(false);
      setAnimalName('');
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">Name My Pet</h1>
      <form
        className="flex flex-col items-center w-full max-w-md mt-4"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          name="animal"
          placeholder="Enter your animal"
          className="border p-2 rounded w-full"
          onChange={(e) => setAnimalName(e.target.value)}
          value={animalName}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded w-full mt-4"
        >
          Submit
        </button>
      </form>
      {isLoading && <p className="mt-4 text-amber-950 text-lg">Loading...</p>}
      {!isLoading && result && (
        <>
          <hr className="w-full my-4 border-gray-300" />
          <h3 className="text-xl font-semibold mb-2">Generated Names:</h3>
          <div className="whitespace-pre-wrap">{result}</div>
        </>
      )}
    </main>
  );
}
