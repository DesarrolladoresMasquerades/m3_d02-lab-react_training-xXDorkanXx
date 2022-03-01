import getRandom from '../helpers/helper-functions.js';

const Random = ({ min, max }) => {
  return (
    <p>
      Random value between {min} and {max} = {getRandom(min, max)}
    </p>
  );
};

export default Random;
