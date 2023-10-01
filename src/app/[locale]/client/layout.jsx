'use client'
import { ReactElement } from 'react'
import { I18nProviderClient } from '../../../locales/client'

export default function SubLayout({
  children,
  params
}) {
  return (
    <I18nProviderClient locale={params.locale}>
      {children}
    </I18nProviderClient>
  )
}