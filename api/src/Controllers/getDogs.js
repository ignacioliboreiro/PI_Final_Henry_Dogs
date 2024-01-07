const axios = require("axios")
const { API_KEY } = process.env;

const GetDogs = async (req, res) => {
    try {
        const Url = "https://api.thedogapi.com/v1/breeds?api_key="
        const response = await axios(`${Url}${API_KEY}`)
        const data = response.data
        const obj = data.map((e) => {
            return { ...e }
        })
        res.status(200).json(obj)


    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = GetDogs