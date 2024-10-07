'use client';

import {useState } from 'react';

export default function ReactButton() {
  const [reactions, setReactions] = useState(0);

  function handleClick() {
    setReactions(reactions + 1);
  }

return <button onClick={handleClick}>React({reactions})</button>;
}