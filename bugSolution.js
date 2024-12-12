```javascript
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    // Simulate asynchronous data fetching or other operations
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setMessage('Welcome to my Next.js app!');
    };
    fetchData();
  }, []);
  return (
    <div>
      {message && <h1>{message}</h1>}
    </div>
  );
}
```