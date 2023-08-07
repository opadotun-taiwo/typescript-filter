import { CarProps } from "@/types";
import { FilterProps } from "@/types";

export async function fetchCars(fliters: FilterProps) {
    const headers = {
		'X-RapidAPI-Key': '6c442716demsh6c3b8a4628fac6bp1b748fjsn9474a5a55099',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}


const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
})

    const result = await response.json()

    return result

}


export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  const {make, year, model} = car

  url.searchParams.append('customer', 'hrjavascript-mastery')

  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullScreen')
  url.searchParams.append('Year', `${year}`)
  url.searchParams.append('angle', `${angle}`)
  url.searchParams.append('make', make)

  return `${url}`;
}