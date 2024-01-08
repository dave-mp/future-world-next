"use client"

import { ErrorMessage } from "app/components/shared/ErrorMessage"

export default function Error({ reset }: ErrorPageProps) {
  return <ErrorMessage reset={reset} />
}
