"use client"

import classNames from "classnames/bind"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./NavItem.module.sass"

interface NavItemProps {
  href: string
  label: string
  paths: string[]
}

export const NavItem = ({ href, label, paths }: NavItemProps) => {
  const pathname = usePathname()
  const cx = classNames.bind(styles)

  const isCurrentPath =
    href === pathname ||
    (href.length > 1 && paths.some((path) => pathname.includes(path)))

  const itemStyles = cx("NavItem", {
    "NavItem--border": isCurrentPath,
  })

  return (
    <li className={itemStyles}>
      <Link href={href} scroll={false}>
        {label}
      </Link>
    </li>
  )
}
