import type { MetaFunction } from "@remix-run/node";
import CurrencyInput from "react-currency-input-field";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <CurrencyInput />
    </div>
  );
}
