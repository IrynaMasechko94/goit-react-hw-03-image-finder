import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImages = async (inputData, pageNr) => {
  const response = await axios.get(
    `/?q=${inputData}&page=${pageNr}&key=45931366-0fcfb6a165914a47110afcc4c&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
