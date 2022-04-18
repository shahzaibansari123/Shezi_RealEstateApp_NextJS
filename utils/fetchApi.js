import axios from 'axios'

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': '1c03fdca9bmshd8f34550b6b62c3p1d939ejsnb8f28c1718e9'
//   }

export const baseUrl='https://bayut.p.rapidapi.com'

export const fetchApi= async(url)=>{
    const {data}= await axios.get((url),{
        headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '1c03fdca9bmshd8f34550b6b62c3p1d939ejsnb8f28c1718e9'
  }
    })
    return data;
}