import { derived, writable, type Writable } from 'svelte/store';
import { translator } from './translator';
import { browser } from "$app/environment";





// Language Management

export type Language = 'français' | 'español' | 'italiano' | 'english' | 'Русский' | 'deutsch';

function isLanguage(value: any): value is Language {
    return (
        value === 'français' ||
        value === 'español' ||
        value === 'italiano' ||
        value === 'english' ||
        value === 'Русский' ||
        value === 'deutsch'
    );
}

function mapNavigatorLanguage(navigatorLanguage: string): Language | undefined {
    const languageMappings: Record<string, Language> = {
        'fr': 'français',
        'es': 'español',
        'it': 'italiano',
        'en': 'english',
        'ru': 'Русский',
        'de': 'deutsch',
    };

    const simplifiedLanguage = navigatorLanguage.split('-')[0].toLowerCase();
    return languageMappings[simplifiedLanguage];
}

function setCookie(name: string, value: string, days: number) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const cookieValue = encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString() + "; path=/; SameSite=Lax";
    document.cookie = name + "=" + cookieValue;
}

function getCookie(name: string): string | null {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (const cookie of cookieArray) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }

    return null;
}

let navigatorLanguage;
let storedLanguage;
if (browser) {
    let languageCookie = getCookie('lang')
    if (isLanguage(languageCookie)) {
        storedLanguage = languageCookie;
    }
    navigatorLanguage = mapNavigatorLanguage(navigator.language)
}

export const language: Writable<Language> = writable(storedLanguage || navigatorLanguage || 'english');

if (browser) {
    language.subscribe((value) => setCookie('lang', value, 1000))
}

export const dictionary = derived(language, (language) => translator[language]);