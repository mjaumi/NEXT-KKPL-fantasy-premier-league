'use server'

import axios from 'axios'

// async function to fetch all the countries data here
export async function getAllCountries() {
    const { data } = await axios.get('https://restcountries.com/v3.1/all?fields=name,cioc,cca2');

    return data;
}