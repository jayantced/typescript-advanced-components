import { ComponentPropsWithoutRef } from "react";

type AnchorProps = {
    el: 'anchor';
} & ComponentPropsWithoutRef<'a'>

type ButtonProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>

export default function Button(props: ButtonProps | AnchorProps) {

    if (props.el === 'anchor') {
        return <a {...props}></a>
    }
  return (
    
    <button {...props}></button>
  )
}
