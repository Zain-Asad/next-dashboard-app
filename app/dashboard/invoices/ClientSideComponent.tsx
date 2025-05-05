'use client';
import { useState, useEffect } from 'react';

type User = {
  id: number;
  firstName: string;
};

type ClientSideComponentProps = {
  users: User[];
};

function ClientSideComponent({ users }: ClientSideComponentProps) {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
    } else if (event.key === 'ArrowUp') {
      setCurrentUserIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [users.length]);

  const currentUser = users[currentUserIndex];

  return (
    <div>
      <p>Use the up and down arrows to cycle through users.</p>
      <h3>Current User</h3>
      <p>
        <strong>{currentUser.firstName}</strong>
      </p>
    </div>
  );
}

export default ClientSideComponent;
