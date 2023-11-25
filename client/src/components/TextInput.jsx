import React from "react";

export default function TextInput(props) {
  return (
    <input
      id={props.id}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="rounded-md border-2  border-black w-60 h-12 "
    />
  );
}
