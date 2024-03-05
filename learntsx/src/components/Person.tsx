import PropTypes from "prop-types";
import { useState } from "react";

// make shape of props
// with typescript, breaks app if you define correctly
interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country?: Country; // country is optional
}

// make this to give user options
// country can only be one of these
export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}

export const Person = (props: Props) => {
  // specify type of functions
  const getAge = (name: string): number => {
    return 99;
  };

  // <> specify type of state
  const [name, setName] = useState<string>("");
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.age}</h1>
      <h1>{props.isMarried ? "is" : "is not"} Married</h1>
      {props.friends.map((friend: string) => (
        <h1>{friend}</h1>
      ))}
      <h1>{props.country}</h1>
    </div>
  );
};
