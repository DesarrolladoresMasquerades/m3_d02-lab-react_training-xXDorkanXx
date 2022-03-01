const SingleColorPicker = (props) => {
  const { name, value, update } = props;
  return (
    <div>
      <label>{name.toUpperCase()}: </label>
      <input
        type="number"
        min="0"
        max="255"
        name={name}
        value={value}
        onChange={(e) => update(e)}
      />
    </div>
  );
};

export default SingleColorPicker;
