import { Item } from "../../../components/Item";

const calculateAgeInYears = (): number => {
  const currentDate = new Date();
  const birthDate = new Date("2001-04-20");
  const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    return yearsDiff - 1;
  }

  return yearsDiff;
};

export const GeneralInfo = () => {
  const age = calculateAgeInYears();
  return (
    <div>
      <h1>General Information</h1>
      <Item title="Name">Mazen El-shaarawi</Item>
      <Item title="Age">{age}</Item>
    </div>
  );
};
