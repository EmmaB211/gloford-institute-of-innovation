import FormField from "./FormField";

const locations = [
  "Lira City",
  "Lira District",
  "Soroti City",
  "Gulu City",
  "Pader",
  "Oyam",
  "Kole",
];

interface LocationFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}

export default function LocationField({
  label,
  name,
  value,
  onChange,
  required,
  error,
}: LocationFieldProps) {
  return (
    <FormField
      as="select"
      label={label}
      name={name}
      required={required}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      error={error}
    >
      <option value="">Select a location</option>
      {locations.map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </FormField>
  );
}
