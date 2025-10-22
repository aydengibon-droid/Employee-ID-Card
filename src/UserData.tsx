import React from 'react';

interface Quotes {
  name: string;
  title: string;
  bio: string;
  sqNum: number;
}

interface UserDataProps {
  quotes: Quotes;
}

const UserData: React.FC<UserDataProps> = ({ quotes }) => {
  return (
    <div className="mb-6">
      {/* access object keys with the dot operator */}
      <p>Name: {quotes.name}</p>
      <p>Number: {quotes.title}</p>
      <p>Country: {quotes.bio}</p>
      <p>Square of Number: {quotes.sqNum}</p>
    </div>
  );
};

export default UserData;