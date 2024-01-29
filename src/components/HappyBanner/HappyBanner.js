import React from 'react';

function HappyBanner({attempts}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{attempts} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
