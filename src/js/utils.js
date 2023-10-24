
export const formatHTTPErrorMsg = e => e?.response?.data?.msg || e?.response?.data?.message ||'An error occured. Try again later'; 
export const formatHTTPResponse = r => r?.data?.data;

export const urlBuilder = function(url, ...params) {
    if (Object.keys(params).length === 0) return url;

    url += '?';
    params.forEach(param => {
      url += `${param.key}:${param.value}`;
    })

    return url;
}

export const queryBuilder = (baseURL) => {


    function build (params){
      let queryString = '';
      for (const key in params) {
        if (params.hasOwnProperty(key) && params[key]) {
          queryString += `${key}=${params[key]}&`;
        }
      }
      queryString = queryString.slice(0, -1);
      return `${baseURL}?${queryString}`;
    };

    return {build}
  };


export const valueIsDiff = (prev, curr) => String(prev).trim() === String(curr).trim()

export const assignValue = (obj, key, val) => obj[key] = val

export const timer = async (ms = 1000) => new Promise(res => setTimeout(res, ms));

export function formatNumbersAndPercentages(data) {
  // Calculate the total value of all items
  const total = Object.values(data).reduce((acc, val) => acc + val, 0);

  // Format the numbers and percentages for each field
  const formattedData = {};
  for (const field in data) {
    // Format the number for the field
    const formattedNumber = new Intl.NumberFormat().format(data[field]);
    
    // Calculate the percentage for the field
    const percentage = ((data[field] / total) * 100).toFixed(2);
    
    // Add the formatted number and percentage to the output object
    formattedData[field] = {
      value: formattedNumber,
      percentage: `${percentage}%`
    };
  }

  return formattedData;
}

export function formatNuber(value) {
  return new Intl.NumberFormat().format(value);
}

export function formatDate(date, format = 'default') {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate;

  if (isNaN(Date.parse(date))) {
    return '';
  }

  date = new Date(date)

  switch (format) {
    case 'gmt':
      formattedDate = date.toLocaleDateString('en-US', options);
      break;
    default:
      formattedDate = date.toLocaleDateString('en-GB');
      break;
  }

  return formattedDate;
}