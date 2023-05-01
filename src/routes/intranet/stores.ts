import { derived, writable, type Writable } from 'svelte/store';
import { translator } from './translator';
import { browser } from "$app/environment";

export type Language = 'español' | 'english'

export type Profile = {
    id: string,
    fullName: string,
    jobTitle: string,
    department: string,
    mail: string,
    mobilePhone: string,
    officeLocation: string,
    preferredLanguage: string,
    profilePicture: string,
    birthday: string,
}

export const username: Writable<string> = writable('');

export const profile: Writable<Profile> = writable();


let storedLanguage: Language | undefined;
if (browser){
    if (localStorage.language === 'español' || localStorage.language === 'english') {
        storedLanguage = localStorage.language  
    }
}
export const language:Writable<Language> = writable(storedLanguage || 'english');
if (browser){
    language.subscribe((value) => localStorage.language = value)
}

export const dictionary = derived(language, (language) => translator[language]);

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}