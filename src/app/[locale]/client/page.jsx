'use client'
import { useI18n, useScopedI18n } from '../../../locales/client'

export default function Page() {
  const t = useI18n()
  const scopedT = useScopedI18n('hello')

  return (
    <div>
      <p>{t('hello')}</p>

      {/* Both are equivalent: */}
      <p>{t('hello.world')}</p>
      <p>{scopedT('world')}</p>

      <p>{t('welcome', { name: 'John' })}</p>
      <p>{t('welcome', { name: <strong>John</strong> })}</p>
    </div>
  )
}