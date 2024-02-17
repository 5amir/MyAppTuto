/**
 *
 *
 * @export
 * @param {*} { placeholder, value, onChange }
 * @return {*}
 */
export function Input({ placeholder, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
