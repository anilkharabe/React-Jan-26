const SelectField = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  error,
  fullWidth = false,
})=>{
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && <label className="block mb-1">{label}</label>}

      <select
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        className={`border px-3 py-2 rounded w-full ${
          error ? "border-red-500" : ""
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default SelectField;