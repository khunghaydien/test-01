'use server'
import { cookies } from 'next/headers'
import { Locale, defaultLocale } from '@/i18n/config'
const NEXT_LOCALE = 'NEXT_LOCALE'
export async function getUserLocale() {
    return cookies().get(NEXT_LOCALE)?.value || defaultLocale
}
export async function setUserLocale(locale: Locale) {
    cookies().set(NEXT_LOCALE, locale);
}