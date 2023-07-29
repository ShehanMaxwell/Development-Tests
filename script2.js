const getPeople = async (fetch) => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people');
  const data = await getRequest.json();
  // console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};
getPeople();
getPeoplePromise();

module.exports = {
  getPeople,
  getPeoplePromise,
};
