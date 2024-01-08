import { HTMLAttributes, createElement } from "react"
import sanitize from "sanitize-html"

type SanitizeHTMLProps = {
  children: string
  tag: string
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: [],
  })

  return createElement(tag, { ...rest }, sanitizedHTML)
}
