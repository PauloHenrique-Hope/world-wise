import { format } from "date-fns";

export function CountryItem({ countryEl }) {
  const now = new Date();
  const formattedDate = format(now, "yyyy-MM-dd");
  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())

      .map((char) => String.fromCharCode(char - 127397).toLowerCase())

      .join("");

    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  const { cityName, country, emoji, date } = countryEl;
  return (
    <li className="flex text-white bg-blue-950 rounded-lg">
      <div className="flex justify-center items-center p-2 gap-2">
        <span className="text-yellow-200">{flagemojiToPNG(emoji)}</span>
        <span>{country}</span>
      </div>
    </li>
  );
}
