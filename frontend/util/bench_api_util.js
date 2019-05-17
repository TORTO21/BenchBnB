
export const fetchBenches = (filters) => (
  $.ajax({
    method: 'GET',
    url: '/api/benches',
    data: filters,
    error: (err) => console.log(err) //remove later
  })
)