import { Dictionary } from "@/types/types";

export const DisplayValue: React.FC<{ value: any }> = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <ul className="ml-2 list-none">
        {value.map((item, index) => (
          <li key={index} className="ml-4">
            <DisplayValue value={item} />
          </li>
        ))}
      </ul>
    );
  } else if (typeof value === "object" && value !== null) {
    return <DisplayNestedObject data={value} />;
  } else {
    return <span>{JSON.stringify(value)}</span>;
  }
};

export const DisplayNestedObject: React.FC<{ data: Dictionary }> = ({
  data,
}) => (
  <div className="ml-4">
    {Object.entries(data).map(([key, value]) => (
      <div key={key} className="mb-2">
        <span className="font-bold">{key}: </span>
        <DisplayValue value={value} />
      </div>
    ))}
  </div>
);

export const DisplayFlattenedObject: React.FC<{ data: Dictionary }> = ({
  data,
}) => (
  <div>
    {Object.entries(data).map(([key, value]) => (
      <div key={key} className="mb-2">
        <span className="font-bold">{key}: </span>
        <DisplayValue value={value} />
      </div>
    ))}
  </div>
);
